<?php
declare(strict_types=1);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit;
}

// Redirect-Ziel per Whitelist (schützt vor Open-Redirect)
$zielRaw = $_POST['ziel'] ?? '/kontakt/';
$erlaubteZiele = ['/kontakt/', '/beratungseinsatz/'];
$ziel = in_array($zielRaw, $erlaubteZiele, true) ? $zielRaw : '/kontakt/';

// Honeypot — Bots füllen dieses Feld aus, echte Nutzer nicht
if (!empty($_POST['website'])) {
    header('Location: ' . $ziel . '?success=1');
    exit;
}

$name         = trim(strip_tags($_POST['name']         ?? ''));
$email        = trim(strip_tags($_POST['email']        ?? ''));
$phone        = trim(strip_tags($_POST['phone']        ?? ''));
$topic        = trim(strip_tags($_POST['topic']        ?? ''));
$message      = trim(strip_tags($_POST['message']      ?? ''));
$pflegegrad   = trim(strip_tags($_POST['pflegegrad']   ?? ''));
$wunschtermin = trim(strip_tags($_POST['wunschtermin'] ?? ''));
$consent      = !empty($_POST['consent']);

// Pflichtfelder — Nachricht nur im allgemeinen Kontaktformular zwingend
$messagePflicht = ($ziel === '/kontakt/');
if (!$name || !$email || !$consent || ($messagePflicht && !$message)) {
    header('Location: ' . $ziel . '?fehler=pflicht');
    exit;
}

// E-Mail validieren
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: ' . $ziel . '?fehler=email');
    exit;
}

// Header-Injection verhindern
if (preg_match('/[\r\n]/', $name . $email)) {
    http_response_code(400);
    exit;
}

$topicLabels = [
    'erstberatung'    => 'Kostenlose Erstberatung',
    'pflegegrad'      => 'Pflegegrad & Antrag',
    'karriere'        => 'Karriere / Bewerbung',
    'beratungseinsatz' => 'Beratungseinsatz nach § 37 Abs. 3 SGB XI',
    'sonstiges'       => 'Sonstiges',
];
$topicLabel = $topicLabels[$topic] ?? 'Sonstiges';

// TEST: vorübergehend an die Entwickler-Adresse, um den Formularversand zu prüfen.
// Nach erfolgreichem Test wieder auf 'info@pflegedienstpieper.de' zurückstellen.
$to      = 'hallo@pixelschmied.de';
$subject = '=?UTF-8?B?' . base64_encode("Anfrage: $topicLabel – $name") . '?=';

$body = "Name:     $name\n"
      . "E-Mail:   $email\n"
      . "Telefon:  " . ($phone ?: '–') . "\n"
      . "Anliegen: $topicLabel\n";
if ($pflegegrad !== '')   { $body .= "Pflegegrad:   $pflegegrad\n"; }
if ($wunschtermin !== '') { $body .= "Wunschtermin: $wunschtermin\n"; }
$body .= "\n"
      . "Nachricht:\n" . ($message ?: '–') . "\n"
      . "\n---\n"
      . "Gesendet über das Formular auf pflegedienstpieper.de ($ziel)";

$fromName = '=?UTF-8?B?' . base64_encode('Pieper Pflegedienst Webseite') . '?=';
$headers  = "MIME-Version: 1.0\r\n"
          . "Content-Type: text/plain; charset=UTF-8\r\n"
          . "Content-Transfer-Encoding: 8bit\r\n"
          . "From: $fromName <no-reply@pflegedienstpieper.de>\r\n"
          . "Reply-To: $name <$email>";

if (mail($to, $subject, $body, $headers)) {
    header('Location: ' . $ziel . '?success=1');
} else {
    header('Location: ' . $ziel . '?fehler=server');
}
exit;

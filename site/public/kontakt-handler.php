<?php
declare(strict_types=1);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit;
}

// Honeypot — Bots füllen dieses Feld aus, echte Nutzer nicht
if (!empty($_POST['website'])) {
    header('Location: /kontakt/?success=1');
    exit;
}

$name    = trim(strip_tags($_POST['name']    ?? ''));
$email   = trim(strip_tags($_POST['email']   ?? ''));
$phone   = trim(strip_tags($_POST['phone']   ?? ''));
$topic   = trim(strip_tags($_POST['topic']   ?? ''));
$message = trim(strip_tags($_POST['message'] ?? ''));
$consent = !empty($_POST['consent']);

// Pflichtfelder
if (!$name || !$email || !$message || !$consent) {
    header('Location: /kontakt/?fehler=pflicht');
    exit;
}

// E-Mail validieren
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: /kontakt/?fehler=email');
    exit;
}

// Header-Injection verhindern
if (preg_match('/[\r\n]/', $name . $email)) {
    http_response_code(400);
    exit;
}

$topicLabels = [
    'erstberatung' => 'Kostenlose Erstberatung',
    'pflegegrad'   => 'Pflegegrad & Antrag',
    'karriere'     => 'Karriere / Bewerbung',
    'sonstiges'    => 'Sonstiges',
];
$topicLabel = $topicLabels[$topic] ?? 'Sonstiges';

$to      = 'info@pflegedienst-pieper.de'; // TODO: echte E-Mail-Adresse eintragen
$subject = '=?UTF-8?B?' . base64_encode("Anfrage: $topicLabel – $name") . '?=';

$body = "Name:     $name\n"
      . "E-Mail:   $email\n"
      . "Telefon:  " . ($phone ?: '–') . "\n"
      . "Anliegen: $topicLabel\n"
      . "\n"
      . "Nachricht:\n$message\n"
      . "\n---\n"
      . "Gesendet über das Kontaktformular auf pflegedienst-pieper.de";

$fromName = '=?UTF-8?B?' . base64_encode('Pieper Pflegedienst Webseite') . '?=';
$headers  = "MIME-Version: 1.0\r\n"
          . "Content-Type: text/plain; charset=UTF-8\r\n"
          . "Content-Transfer-Encoding: 8bit\r\n"
          . "From: $fromName <no-reply@pflegedienst-pieper.de>\r\n"
          . "Reply-To: $name <$email>";

if (mail($to, $subject, $body, $headers)) {
    header('Location: /kontakt/?success=1');
} else {
    header('Location: /kontakt/?fehler=server');
}
exit;

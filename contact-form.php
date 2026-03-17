<?php
// contact-form.php
header('Content-Type: application/json');

// Vérification que le formulaire a été soumis en POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
    exit;
}

// Configuration
$to = "foinjolivetc@saintemarie-cholet"; // Votre adresse email
$subject = "Nouveau message depuis votre portfolio";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: Portfolio Contact <noreply@votredomaine.com>' . "\r\n";
$headers .= 'Reply-To: ' . $_POST['email'] . "\r\n";

// Validation des données
$errors = [];

// Vérification du nom
if (empty($_POST['name'])) {
    $errors[] = "Le nom est requis";
} else {
    $name = htmlspecialchars(trim($_POST['name']));
}

// Vérification de l'email
if (empty($_POST['email'])) {
    $errors[] = "L'email est requis";
} elseif (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = "L'email n'est pas valide";
} else {
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
}

// Vérification du sujet
$subject_line = empty($_POST['subject']) ? "Sans sujet" : htmlspecialchars(trim($_POST['subject']));

// Vérification du message
if (empty($_POST['message'])) {
    $errors[] = "Le message est requis";
} else {
    $message = htmlspecialchars(trim($_POST['message']));
}

// Si il y a des erreurs, on les retourne
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Erreurs de validation', 'errors' => $errors]);
    exit;
}

// Construction du corps du message
$email_body = "
<html>
<head>
<title>Nouveau message de contact</title>
<style>
body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
.container { max-width: 600px; margin: 0 auto; padding: 20px; }
.header { background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); color: white; padding: 20px; text-align: center; }
.content { background: #f9f9f9; padding: 20px; }
.footer { background: #eee; padding: 10px; text-align: center; font-size: 0.9em; }
</style>
</head>
<body>
<div class='container'>
    <div class='header'>
        <h1>Nouveau message de contact</h1>
    </div>
    <div class='content'>
        <p><strong>Nom:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Sujet:</strong> $subject_line</p>
        <p><strong>Message:</strong></p>
        <p>$message</p>
    </div>
    <div class='footer'>
        <p>Ce message a été envoyé depuis le formulaire de contact de votre portfolio.</p>
    </div>
</div>
</body>
</html>
";

// Tentative d'envoi de l'email
if (mail($to, $subject, $email_body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Message envoyé avec succès!']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erreur lors de l\'envoi du message']);
}
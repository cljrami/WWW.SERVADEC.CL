<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Check for empty fields
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please fill all fields and enter a valid email.";
        exit;
    }

    $email_to = "contacto@servadec.cl";
    $email_subject = "NUevo Mensaje Desde Sitio Web";
    $email_body = "Nombre: $name\nEmail: $email\n\nAsunto:\n$message";

    $headers = "From: $email\n";
    $headers .= "Reply-To: $email";

    // Send the email
    mail($email_to, $email_subject, $email_body, $headers);

    // Redirect to www.servadec.cl
    header('Location: https://www.servadec.cl');
    exit;
} else {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}

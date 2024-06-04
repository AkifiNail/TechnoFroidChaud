<?php

// traitement des données   

function san_str($inpt) {
      return trim(htmlentities(strip_tags($inpt)));
  }

function san_mail($inpt) {
    return filter_var($inpt, FILTER_VALIDATE_EMAIL);
}


$userMail = san_mail($_POST['email']);
$userName = san_str($_POST['nom']);
$userFirstName = san_str($_POST['prenom']);
$userMessage = san_str($_POST['message']);
$userTel = san_str($_POST['tel']);
$userRegion = san_str($_POST['region']);

$mailNoReply = "no-reply@techno-froid-chaud.fr";


if ($userMail && $userName && $userMessage && $userTel && $userRegion && $userFirstName) {
    // envoi du mail
    $to = "contact@techno-froid-chaud.fr";
    $subject = "Nouveau message de " . $userName;
    $message = " Nom du client : " . $userName . " 
    Prenom : " .$userFirstName. " 
    email : " .$userMail. "
    tel : " .$userTel. "
    Region : " .$userRegion."
    Message : " . $userMessage;
    $headers = "From: " . $mailNoReply . "\r\n" .
    "Reply-To: " . $userMail . "\r\n" .
    "X-Mailer: PHP/" . phpversion();
    mail($to, $subject, $message, $headers);
    // renvoie d'un email de confirmation
    $to = $userMail;
    $subject = "Confirmation de votre message";
    $message =
    "Bonjour " . $userName . " " . $userFirstName . ",\r\n
    Nous avons bien reçu votre message et nous vous en remercions.
    Nous vous recontacterons dans les plus brefs délais. \r\n
    Cordialement,
    L'équipe Techno Froid Chaud";
    $headers = "From: " . $mailNoReply . "\r\n" .
    "Reply-To: " . $mailNoReply . "\r\n" .
    "X-Mailer: PHP/" . phpversion();
    mail($to, $subject, $message, $headers);
    echo "Votre message a bien été envoyé";
} else {
    echo "Erreur lors de l'envoi du message";
}





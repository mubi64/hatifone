<?php

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$_SESSION['error'] = "E-mail must be valid and message must be longer than 1 character.";

// Email Submit
// Note: filter_var() requires PHP >= 5.2.0

if ( isset($_POST['email']) && isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['subject']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ) {

  // detect & prevent header injections

  $test = "/(content-type|bcc:|cc:|to:)/i";

  foreach ( $_POST as $key => $val ) {

    if ( preg_match( $test, $val ) ) {

      exit;

    }

  }

$_SESSION['msg'] = "Your message has been sent successfully.";


$myfile = fopen("emailtextfileforrecorddb5010177.txt", "a") or die("Unable to open file!");

date_default_timezone_set('Asia/Karachi');

$date = date('d/m/Y h:i:s a', time());

$txt = "\r\n".$date.', Name: '.$_POST['name'].', Email: '.$_POST['email'].', My Phone: '.$_POST['phone'].', My Message: '.$_POST['subject'];

fwrite($myfile, $txt);

fclose($myfile);
 

require 'vendor/autoload.php';

// Replace sender@example.com with your "From" address.
// This address must be verified with Amazon SES.
$sender = 'sowaanerp@gmail.com';
$senderName = 'SowaanERP Landing Page';

// Replace recipient@example.com with a "To" address. If your account
// is still in the sandbox, this address must be verified.
$recipient = 'info@sowaan.com';

// Replace smtp_username with your Amazon SES SMTP user name.
$usernameSmtp = 'sowaanerp@gmail.com';

// Replace smtp_password with your Amazon SES SMTP password.
$passwordSmtp = 'nhqsgmzjibomzmsj';

// Specify a configuration set. If you do not want to use a configuration
// set, comment or remove the next line.
//$configurationSet = 'ConfigSet';

// If you're using Amazon SES in a region other than US West (Oregon),
// replace email-smtp.us-west-2.amazonaws.com with the Amazon SES SMTP
// endpoint in the appropriate region.
$host = 'smtp.gmail.com';
$port = 587;

// The subject line of the email
$subject = 'Demo Request from SowaanERP General Landing Page';

$Name = 'Name: '.$_POST['name'];
$Email = 'Email: '.$_POST['email'];
$Phone = 'My Phone: '.$_POST['phone'];
$Phone = 'My Message: '.$_POST['subject'];

// The plain-text body of the email
$bodyText =  "";

// The HTML-formatted body of the email
$bodyHtml = $Name."\r\n".$Email."\r\n".$Phone."\r\n";

$mail = new PHPMailer(true);

try {
    // Specify the SMTP settings.
    $mail->isSMTP();
    $mail->setFrom($sender, $senderName);
    $mail->Username   = $usernameSmtp;
    $mail->Password   = $passwordSmtp;
    $mail->Host       = $host;
    $mail->Port       = $port;
    $mail->SMTPAuth   = true;
    $mail->SMTPSecure = 'tls';
    //$mail->addCustomHeader('X-SES-CONFIGURATION-SET', $configurationSet);

    // Specify the message recipients.
    $mail->addAddress($recipient);
    $mail->addCc("salman@sowaan.com");
    $mail->addBcc("usman@sowaan.com");

    // Specify the content of the message.
    $mail->isHTML(true);
    $mail->Subject    = $subject;
    $mail->Body       = $bodyHtml;
    $mail->AltBody    = $bodyText;
    $mail->Send();
    echo "Email sent!" , PHP_EOL;
} catch (phpmailerException $e) {
    echo "An error occurred. {$e->errorMessage()}", PHP_EOL; //Catch errors from PHPMailer.
} catch (Exception $e) {
    echo "Email not sent. {$mail->ErrorInfo}", PHP_EOL; //Catch errors from Amazon SES.
}
}

?>


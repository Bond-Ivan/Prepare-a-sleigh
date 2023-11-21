<?php

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = "UTF-8";
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->isHTML(true);

	$mail->setFrom('info@yandex.ru', 'Отправитель');
	$mail->addAddress('Bondarenkoivan10062003@yandex.ru', 'Создатель');     
	$mail->Subject = 'Письмо санте';

	$body = '<h1>Санта на связи!<h1>';

	if (trim(!empty($_POST['name']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	}

	if (trim(!empty($_POST['surname']))){
		$body.='<p><strong>Фамилия:</strong> '.$_POST['surname'].'</p>';
	}

	$mail->Body = $body;

	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>
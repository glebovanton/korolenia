<?php

$recepient = "workglebov@gmail.com";
$sitename = "Елены Королени";

$name = trim(strip_tags(html_entity_decode(trim($_POST["name"]))));
$mail = trim(strip_tags(html_entity_decode(trim($_POST["email"]))));
$message = trim(strip_tags(html_entity_decode(trim($_POST["message"]))));


$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nпочта: $mail\nсообщение: $message";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>
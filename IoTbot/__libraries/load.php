<?php

function load_template($template){
    include $_SERVER['DOCUMENT_ROOT']."/IoTbot/__libraries/__templates/$template";
  }

  global $__site_config;
$__site_config = file_get_contents($_SERVER['DOCUMENT_ROOT'].'/../IoTbotconfig.json');
?>

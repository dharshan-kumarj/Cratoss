<?php

include "load.php";

error_reporting(E_ALL);
ini_set('display_errors', 1);

$input = $_POST['userinput'];
$command = "python3 /var/www/html/Cratoss/IoTbot/__libraries/__py_/source.py -i \"" . escapeshellarg($input) . "\"";

$output = shell_exec($command);

echo $output;



// exec("python3 /Cratoss/IoTbot/__libraries/__py_/source.py -i '$userin'",$output);   //for execute the cmd in in command line from userinput
// echo $output[0]                  // to send to js


?>

<?php

include "load.php";

$userin = $_POST['userinput'];    //to send the userinput in post

$output;


exec("python3 __py_/source.py -i '$userin'",$output);   //for execute the cmd in in command line from userinput
echo $output[0]                  // to send to js


?>

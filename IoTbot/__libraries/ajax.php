<?php

include "load.php";

$userin = $_POST['userinput'];

$output;

exec("python3 __py_/source.py -i '$userin'",$output);
echo $output[0]


?>

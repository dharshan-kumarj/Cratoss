<?php

include "load.php";

$userin = $_POST['userinput'];

$output;

exec('python3 __py_/source.py -i "$userinput"',$output);
echo(json_encode($output))



?>

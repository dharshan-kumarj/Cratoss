<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IoTBOt</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    
    <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/album/">
    <?//This 2 line Automatically link respective css?>
    <?$path =  substr($_SERVER['PHP_SELF'],0,-4);?>
    <link href="/IoTbot/__libraries/assets/dist/css<?echo $path?>.css" rel="stylesheet">
 
    <!-- Bootstrap core CSS -->
    <link href="/IoTbot/__libraries/assets/dist/css/bootstrap.min.css" rel="stylesheet">
  
    <style>
        /* Hide page by default */
        html { display : none; }
    </style>
    <script>
        if (self == top) {
        // Everything checks out, show the page.
        document.documentElement.style.display = 'block';
        } else {
        // Break out of the frame.
        top.location = self.location;
        }
    </script>
    
</head>

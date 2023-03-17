<!DOCTYPE html>

<html>

<head>
  <title>Hello!</title>
</head>

<body>

<?php

$code_art = $_GET["code"] ;
$name_art = $_GET["name"] ;
$cantidad = $_GET["cant"] ;
$observaciones = $_GET["obs"];





  /*En este código que reutilizamos de buscador.php eliminamos la función que
 encapsulaba todo el código*/


require("conexion.php");

$connexion = mysqli_connect($db_host,$db_usuario,$db_contra);

if( mysqli_connect_errno())
  {

      echo "Hubo un problema con la base de datos error al conectar";

      exit() ;
  }

  mysqli_select_db($connexion,$db_nombre) or die ("No se encuentra la Base de 
 datos");

  mysqli_set_charset($connexion,"utf8");


    /*Traslado mediante el uso de variables los valores que nos va a
 enviar el formulario */


      $instruccion_SQL = "INSERT INTO producto (codProducto, nombreProducto, 
cantidadProducto, obsProducto)
                             VALUES ('$code_art','$name_art','$cantidad','$observaciones')";



   $resultado = mysqli_query($connexion,$instruccion_SQL);


   /*Comprobamos al menos que $resultado se ejecutó satisfactoriamente hay 
muchos otros métodos más seguros
   de saber si lo que enviamos realmente se insertó en la base de datos pero 
todo a su paso*/
   if($resultado == FALSE)
   {
       echo "error en la consulta";
   }  else
   {
       echo "Registro guardado<br><br>";
       echo "<table><tr><td>Código: $code_art</td></tr>";
        echo "<tr><td>Nombre del articulo: $name_art</td></tr>" ;
         echo "<tr><td>Cantidad: $cantidad</td></tr>" ;
          echo "<tr><td>Observaciones: $observaciones</td></tr>" ;

   }



            mysqli_close($connexion);




?>

</body>
</html>
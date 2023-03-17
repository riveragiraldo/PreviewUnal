<!DOCTYPE html>

<html>

<head>
    <meta charset="UTF-8" >
    <title>Formulario de registros</title>

    <!-- Algo de CSS para darle un poco de vista -->
    <style>

    h1{
        text-align: center;
        color: #000FF;
        border-bottom: #CC955A ;
        width: 50 %;
        margin: auto;
    }

    table {
        border: 1px solid #000;
        padding: 20px 50px;
        margin-top: 50px;
    }

    body{
      background-color: #ddd;
    }

    </style>



</head>

<body>

  <h1> Registro de productos</h1>

  <form action="insert_registro.php" name="formulario1" method="get"

 >

  <!-- Recuerden que mediante el atributo action indicamos al 
formulario el archivo que se va a enviar la informacion '
  para que esta sea procesada -->

  <table border="0" align="center">
  <tr>
      <td>
          Código del producto
      </td>
      <td><label for="code"></label>
      <!-- <input type="text" name="code" id="code" required="obligatorio" /> -->
      <select name="code" id="code" required="obligatorio">
        <option>-- seleccione --</option>
        <option>A001</option>
        <option>A002</option>
        <option>A003</option>
      </select></td>
  </tr>
   <tr>
      <td>
          Nombre del producto
      </td>
      <td><label for="name"></label>
      <input type="text" name="name" id="name" required="obligatorio" /></td>
  </tr>
   <tr>
      <td>
          Cantidad de producto
      </td>
      <td><label for="cant"></label>
      <input type="number" name="cant" id="cant" required="obligatorio" /></td>
  </tr>
   <tr>
      <td>
          Observaciones
      </td>
      <td><label for="obs"></label>
      <textarea type="text" name="obs" id="obs"></textarea></td>

  </tr>
   
  <tr>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
      </tr>

      <tr>
      <td align="center "> <input type="reset" name="Borrar" 
id="Borrar" value="Borrar" /></td>
      <td align="center"> <input type="submit" name="enviar" 
id="enviar" value="Enviar" /></td>


      </tr>


  </table>

  </form>

</body>
</html>
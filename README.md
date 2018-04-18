<h1>Mejorando nuestro sistema de registro y gestion de los usuarios</h1>

<p> Realizamos la comprobacion de que los email que nos envian los usuarios son correctos,
y a la vez que puedan recuperar su contraseña.

<h3>Condiciones</h3>

<ul>
<li>Generaremos una nuevo proceso de registro en el que se seguirán los siguientes paso para el proceso: 
  <ul>
  <li>1º El usuario se registra. 
  <li>2º Recibe un email con enlace y un hash de activación 
  <li>3º Una vez el usuario pulse sobre el hash de activación la cuenta quedará activada mientras tanto el usuario intenta 
  loguearse recibirá un mensaje de usuario no activo. 
  </ul>
  <li>Crearemos una vista donde se recibirá le hash de activación comprobará el mismo y activará al usuario. Y se modificará
  la tabla de Usuarios para introducir estos dos nuevos campos:
  <ul>
<li>Hash -> Tipo String 20
<li>Activo -> Tipo Boolean
</ul>
<li>También procederemos a la reactivación de la cuenta mediante el envio de otro email con un hash que reenvia la usuario 
otra vista donde se le solicité un nuevo password y la repitición del mismo una vez introducido adecuadamente la cuenta 
quedará activa mediante este nuevo password.

<li>En el apartado administrador crearemos una nueva vista donde se pueda ver el listado de todos los usuarios, 
podamos activar o desactivar a los mismo o reenviar un mensaje de solicitud de nuevo password.

<li>A la vez en el formulario de creación de viajes crearemos la actualización y subida de imagenes para los viajes y 
su posterior uso en la vista.
</ul>
<h5>Características.</h5>
<ul>
<li>Se utilizará NPM para la instalación de dependencias.
<li>Debemos generar una nueva carpeta en nuestra estructura denominada log, donde se almacenará un log de los posibles errores
que se produzcan en la aplicación.
<li>Se utilizará nodemailer para el envio de los emails de los diferentes procesos.
<li>Se utilizará Multer para las subidas de archivos al servidor.
</ul>

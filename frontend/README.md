DeDampoAcampoCRUD
BoilerPlate
El boilerplate cuenta con dos carpetas: api y client. En estas carpetas estará el código del back-end y el front-end respectivamente.

Configuración inicial
Ejecutar npm Install desde la carpeta api y client, para instalar las dependencias necesarias para correr el proyecto
Instructions
Correr el servidor del back con npm run start desde la carpeta api
Correr el servidor del front con npm run dev desde la carpeta client
Base de datos
Aplicacion desarrollada en Mongoose

Producto:

_ID: generado por mongoose
name:*
price:*
Backend
Para inicar el proyecto

Aplicacion desarrollada en un servidor en Node/Express

GET /products:: Obtener un listado de todos los productos

POST /products/create:: Create products

PUT /products/update/:id:: Update product

DELETE /products/delete/:id:: Delete the product

Frontend
Aplicacion desarrollada en React

Pagina inicial: Se muestran todos los productos

Listado de todos los productos con sus detalles
Opcion de poder crear, editar y eliminar un producto
Ruta Create: Ruta para crear un producto

Formulario para crear un producto con validaciones
Ruta update: Ruta para actualziar un producto

Formulario para editar un producto con validaciones
Bibliotecas y Mas:

Material UI
Material UI-Icons

Para levantar el proyecto, correr los siguientes comandos:
 - yarn dev
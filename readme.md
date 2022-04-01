# 👩‍💻🎌🚩 PRUEBA FRONT END 

## HTML, CSS, JS & bootstrap test

<hr>
<br>

## OBJETIVOS

[✓] Usando la última versión de bootstrap, crear una página web con un dropdown menú superior centrado.

[✓] Este dropdown debe contener todos los países que se entregan usando el API: <br>
- https://restcountries.eu/rest/v2/all.

[✓] Esta lista debe obtenerse usando AJAX.

[✓] Debe popular automáticamente todas las opciones del dropdown menu.

[✓] Adicionalmente, usando bootstrap y flexbox, debajo del dropdown menú deben haber múltiples contenedores (cards).

Cada una de las (cards) debe contener:
[✓] La bandera.
[✓] El nombre del país.
[🤔] Su moneda.

[✓] Estos contenedores se deben ajustar al tamaño de pantalla de acuerdo a su criterio. 

[✓] Es importante que estos contenedores tengan un diseño atractivo para el usuario usando estilos CSS, y la paleta de colores a usar debe ser la de la siguiente imagen: 
https://miro.medium.com/max/700/1*MNCKTImyRp3xmnTwFeoYaw.png. 

Importante usar:
[✓] Gradientes
[✓] Sombras 
[✓] Bordes 
[] Transiciones
[✓] Efectos en los botones.

[] La carga de las banderas debe usar "lazy load".

Al seleccionar un país en el dropdown: 
[✓] Se deben eliminar todos los demás países
[✓] Sólo se debe mostrar el contenedor del país seleccionado.

[✓] Al visitar la página se deben mostrar los países en orden alfabético, 
[] Sin embargo, ya sea debajo del dropdown o al lado, debe haber un botón que organice los contenedores al azar al hacer click.



## Dia 1

1. Revisar documento del reto para entender el reto y revisar la API para revisar endpoint, no respondio la API dada en la documentación al parecer no esta en servicio por lo cual se uso la siguiente opción: https://restcountries.com/v2/all .

2. Revisar documentación sobre consumo de API con Ajax.

3. Comenzar a documentar el paso a paso del proyecto.

4. Estructurar la planeación del proyecto con sus actividades.

* Dia 1: Planeación, organización, maquetación Inicial y petición API.
* Dia 2: Mostrar la información solicitada en tarjetas de cada país y filtar por país.
* Dia 3: Boton random, deploy y finalizar detalles.

5. Estructurar el boilerPlate del proyecto.

6. Revisar paleta de colores.

7. Averiguar sobre "Lazy load" para implementarlo en el proyecto.

8. Inicializar repositorio de git para llevar control de versiones del proyecto.

9. Crear el repositorio de git y el repo local.

10. Crear el archivo package.json para poder utilizar sass y bootstrap.
 ```
 npm init -y
 ```

11. Instalar Bootstrap en el proyecto.
  ```
  npm install bootstrap
  ```

12. Maquetación inicial de header y main

13. Uso de SASS para reasignar estilos al Bootstrap por medio de variables.

14. Maquetacion de header terminada con boton de filtro y boton de orden aleatorio, falta funcionalidad.

15. Consumo de API por medio de AJAX.

16. Maquetacion incial de las tarjetas para pintar los datos obtenidos desde el API.

17. Traer el nombre de los paises desde el API.


## Dia 2

1. Lograr diseño responsive de la maquetacion de las tarjetas.

2. Traer la bandera del pais y mostrarlas en las tarjetas.

3. Lograr en el listado del filtrar por pais salgan todos los paises.

4. Intentar que aparezcan la moneda del cada pais (Pendiente).

5. Lograr que al dar click en alguno de los paises del listado se borre el contenido de main.


## Dia 3

1. Lograr que al dar click en alguno de los paises del listado solo se muestre la tarjeta del pais seleccionado.

2. Al filtrar el pais seleccionado aparece la tarjeta con el la bandera, el nombre del pais y su moneda.

3. Realizar transicion del boton randon que al incio diga ramdom pero que al dar click diga ordenar.

4. Realizar funcion que organice la data aleatoriamente.

5. Realizar Funcion que organice la data por orden alfabetico

6. Que al dar click en el boton randon cuando dice randon, muestre todas las tarjetas en orden aleatorio (Pendiente).

7. Que al dar click en el boton randon cuando dice ordenar, muestre todas las tarjetas en orden alfabetico (Pendiente).

8. Realizar deploy de la app (Pendiente).


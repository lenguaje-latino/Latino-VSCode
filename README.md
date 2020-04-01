# Sintaxis de Lenguaje Latino para VS Code
Esta es la extensión oficial de Latino en Visual Studio Code.

## Caracteristicas
* Resaltado de sintaxis de Latino (Syntax highlighting)
* Snippets
* Ejecutar código en Terminal o CMD en Windows (En Desarrollo)

## Requerimientos de extension
* Visual Studio Code 1.20 o Superior
* Se necesita tener Latino instalado para la función de "Ejecutar en la Terminal"

# Funciones
---
| Acción         | Función                                                                                   |
|----------------|-------------------------------------------------------------------------------------------|
| Ctrl + R       | Ejecuta el código de Latino en la terminal (*Requiere primero guardar el archivo)         |


# Fargmentos de código (snippets)
En TextMate para usar los snippets, escribimos el desencadenador deseado y presionamos TAB.

---
| Desencadenador | Nombre                                  | codigo                                          |
|----------------|-----------------------------------------|-------------------------------------------------|
| si             | si condicional                          | si condicion #codigo fin                        |
| sino           | si sino condicional                     | si condicion #codigo sino #codigo fin           |
| osi            | si osi sino condicional                 | si condicion #codigo osi #codigo #sino #codigo  |
| caso           | caso condicional(Which Case1,case2)     | elegir(sentencia)caso1,caso2,caso3,defento,fin  |
| mien           | ciclo mientras                          | mientras condition #codigo fin                  |
| rep            | ciclo repetir                           | repetir #codigo hasta condicion                 |
| des            | ciclo desde                             | desde ( i = 0; i < 10; i++) #codigo fin         |
| fun            | funcion                                 | funcion nombre_funcion (argumentos) #codigo fin |
| ret            | retorno                                 | retorno valor                                   |
| esc            | escribir                                | escribir("mensaje")                             |
| imp            | imprimir                                | imprimir("mensaje")                             |
| inc            | incluir                                 | incluir "modulo"                                |






### SQL

| Snippet                      | Proposito                    |
|------------------------------|----------------------------|
| `select`                     | Genera la estructura para un Select |
| `select into`                | Genera la estructura para un Select guardando los resultados en variables |
| `insert`                     | Genera la estructura para un Insert |
| `update`                     | Genera la estructura para un Update |
| `delete`                     | Genera la estructura para un Delete |
| `alter`                      | Genera la estructura para un Alter |

Alternativamente, presione `Ctrl` +` Space` (Windows, Linux) o `Cmd` +` Space` (OSX) para activar los snippets desde el editor.

# Instalacion
1. Instale Visual Studio Code 1.20 o superior
1. Inicie Code
1. Desde la paleta de comandos `Ctrl`-`Shift`-`P` (Windows, Linux) o `Cmd`-`Shift`-`P` (OSX)
1. Seleccione `Install Extension`
1. Elija la extension `Latino-VS`
1. Recargue Visual Studio Code

# Reporte de errores
Cualquier error lo puedes reportar en: https://github.com/MelvinG24/Latino-VS/issues

# Documentación Latino
Para aprender más sobre este maravilloso lenguaje de programación llamado Latino, puedes visitar la documentación en el siguiente enlace: https://manuallatino.blogspot.com

## License

[MIT](LICENSE)

-----------------------------------------------------------------------------------------------------------

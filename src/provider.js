const vscode = require("vscode");

const provider1 = vscode.languages.registerCompletionItemProvider('latino', {
    provideCompletionItems() {
        const libArchivo            = new vscode.CompletionItem("archivo");
        libArchivo.kind             = vscode.CompletionItemKind.Field;
        libArchivo.commitCharacters = ['.'];
        libArchivo.documentation    = new vscode.MarkdownString("librerias\n### Libreria Archivo\ncontiene las funciones principales para el manejo de archivos en Latino");

        const libCadena             = new vscode.CompletionItem('cadena');
        libCadena.kind              = vscode.CompletionItemKind.Field;
        libCadena.commitCharacters  = ['.'];
        libCadena.documentation     = new vscode.MarkdownString('Libreria Cadena,contiene las funcionas para manipular las cadenas<string> en Lation');

        const libDic                = new vscode.CompletionItem('dic');
        libDic.kind                 = vscode.CompletionItemKind.Field;
        libDic.commitCharacters     = ['.'];
        libDic.documentation        = new vscode.MarkdownString("Libreria dic, nos permite manipular los diccionarios en Lation");

        const libLista              = new vscode.CompletionItem('lista');
        libLista.kind               = vscode.CompletionItemKind.Field;
        libLista.commitCharacters   = ['.'];
        libLista.documentation      = new vscode.MarkdownString("Libreria lista, contiene las funciones para el manejo de listas en Latino");

        const libMate               = new vscode.CompletionItem('mate');
        libMate.kind                = vscode.CompletionItemKind.Field;
        libMate.commitCharacters    = ['.'];
        libMate.documentation       = new vscode.MarkdownString("Libreria mate, contiene las funciones de matemáticas para Latino");

        const libSis                = new vscode.CompletionItem('sis');
        libSis.kind                 = vscode.CompletionItemKind.Field;
        libSis.commitCharacters     = ['.'];
        libSis.documentation        = new vscode.MarkdownString("Libreria sis, contiene funciones que nos permitirán operar con nuestro sistema desde Latino");

        return [
            libArchivo,
            libCadena,
            libDic,
            libLista,
            libMate,
            libSis
        ];
    }
});

const provider2 = vscode.languages.registerCompletionItemProvider('latino', {
    provideCompletionItems(document, position) {
        const linePrefix = document.lineAt(position).text.substr(0, position.character);
        if (linePrefix.endsWith('archivo.')) {
            return [
                new vscode.CompletionItem('anexar',             vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('duplicar',           vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('crear',              vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('ejecutar',           vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('eliminar',           vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('escribir',           vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('leer',               vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('lineas',             vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('renombrar',          vscode.CompletionItemKind.Function)
            ];
        } else if (linePrefix.endsWith('cadena.')) {
            return [
                new vscode.CompletionItem('bytes',              vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('char',               vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('comparar',           vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('concatenar',         vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('contiene',           vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('ejecutar',           vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('eliminar',           vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('encontrar',          vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('es_alfa',            vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('es_igual',           vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('es_numero',          vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('esta_vacia',         vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('formato',            vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('inicia_con',         vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('insertar',           vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('invertir',           vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('longitud',           vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('mayusculas',         vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('minusculas',         vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('recortar',           vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('reemplazar',         vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('regex',              vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('regexl',             vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('rellenar_derecha',   vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('rellenar_izquierda', vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('separar',            vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('subcadena',          vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('termina_con',        vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('ultimo_indice',      vscode.CompletionItemKind.Function)
            ];
        } else if (linePrefix.endsWith('dic.')) {
            return [
                new vscode.CompletionItem('contiene',           vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('eliminar',           vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('llaves',             vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('longitud',           vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('valores',            vscode.CompletionItemKind.Function)
            ];
        } else if (linePrefix.endsWith('lista.')) {
            return [
                new vscode.CompletionItem('agregar',            vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('comparar',           vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('concatenar',         vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('contiene',           vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('crear',              vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('eliminar',           vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('eliminar_indice',    vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('indice',             vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('extender',           vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('insertar',           vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('invertir',           vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('longitud',           vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('separar',            vscode.CompletionItemKind.Function)
            ];
        } else if (linePrefix.endsWith('mate.')) {
            return [
                new vscode.CompletionItem('abs',                vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('acos',               vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('acosh',              vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('aleatorio',          vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('asen',               vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('asenh',              vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('atan',               vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('atanh',              vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('atan2',              vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('base',               vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('cos',                vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('cosh',               vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('e',                  vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('exp',                vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('frexp',              vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('ldexp',              vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('log',                vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('log10',              vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('parte',              vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('pi',                 vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('piso',               vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('porc',               vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('pot',                vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('max',                vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('min',                vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('raiz',               vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('raizc',              vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('redondear',          vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('sen',                vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('senh',               vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('tan',                vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('tanh',               vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('tau',                vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('techo',              vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('trunc',              vscode.CompletionItemKind.Function)
            ];
        } else if (linePrefix.endsWith('sis.')) {
            return [
                new vscode.CompletionItem('dormir',             vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('ejecutar',           vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('fecha',              vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('salir',              vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('cwd',                vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('iraxy',              vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('tiempo',             vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('usuario',            vscode.CompletionItemKind.Function),
                new vscode.CompletionItem('operativo',          vscode.CompletionItemKind.Function)
            ];
        } else {
            return undefined;
        }
    }
}, '.'
);
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;

const provider1 = require("./provider");
const provider2 = require("./provider");
const vscode    = require("vscode");
const OS        = require("os");

const rutaDefault = (OS.platform() == 'win32') ? "C:/Program Files/Latino/bin/latino.exe" : "/usr/local/bin/latino";
let ruta        = rutaDefault.toString();
let unSave      = false;


function activate(context) {
    console.log('¡Felicitaciones, tu extensión "Latino" ya está activa!');

    if (vscode.workspace.getConfiguration().get("Latino-propiedades.RutaBinarioLatino") === "") {
        vscode.workspace.getConfiguration().update("Latino-propiedades.RutaBinarioLatino", rutaDefault.toString(), vscode.ConfigurationTarget.Global);
    };

    // vscode.languages.registerHoverProvider('latino', {
    //     provideHover(document, position, token) {
    //         return {
    //             contents: ['Hover Content']
    //         };
    //     }
    // });

    vscode.workspace.onDidChangeConfiguration((e) => {
        if (e.affectsConfiguration("Latino-propiedades.RutaBinarioLatino")) {
            ruta = vscode.workspace.getConfiguration().get("Latino-propiedades.RutaBinarioLatino");
            vscode.window.showInformationMessage("Latino-propiedades.RutaBinarioLatino: " + vscode.workspace.getConfiguration().get("Latino-propiedades.RutaBinarioLatino"));
        }
    });

    vscode.workspace.onDidChangeTextDocument((e) => {
        if (e.document.isDirty) {
            unSave = true;
        } else {
            unSave = false;
        }
    });
    vscode.workspace.onDidSaveTextDocument (() => { unSave = false; });

    vscode.commands.registerCommand('latino.bin', () => {
        vscode.window.showOpenDialog({
            canSelectFiles: true,
            canSelectFolders: false,
            canSelectMany: false,
            title: "Seleccionar el binario de Latino"
        }).then(e => {
            vscode.workspace.getConfiguration().update("Latino-propiedades.RutaBinarioLatino", e[0].fsPath, vscode.ConfigurationTarget.Global);
        });
    });

    vscode.commands.registerCommand('latino.default', () => {
        vscode.workspace.getConfiguration().update("Latino-propiedades.RutaBinarioLatino", rutaDefault.toString(), vscode.ConfigurationTarget.Global);
    });

    context.subscriptions.push(vscode.commands.registerCommand('latino.doc', () => {
        vscode.env.openExternal(vscode.Uri.parse('https://manual.lenguajelatino.org/es/stable/'));
    }));

    context.subscriptions.push(vscode.commands.registerCommand('latino.config', async () => {
        const categorias = [
            {
                label: '[Buscar binario]',
                command: 'latino.bin'
            },
            {
                label: 'Latino_vscodeDefault',
                description: rutaDefault.toString(),
                command: 'latino.default'
            }
        ];
        await vscode.window.showQuickPick(categorias, {
            placeHolder: "Seleccione el binario de Latino",
            canPickMany: false,
        }).then(categorias => {
            vscode.commands.executeCommand(categorias.command);
        });
    }));

    //extension.js
    //
    // const writeEmitter = new vscode.EventEmitter();
    // context.subscriptions.push(vscode.commands.registerCommand('latino.debug', () => {
    //     vscode.window.showWarningMessage('Debugeando...');
    //     let line = '';
    //     const pty = {
    //         onDidWrite: writeEmitter.event,
    //         open:   () => writeEmitter.fire(ruta.toString()),
    //         close:  () => {/* noop */},
    //         handleInput: (data) => {
    //             if (data === '\r') {
    //                 writeEmitter.fire('\r\necho: "${line}"\r\n\n');
    //                 line = '';
    //                 return;
    //             }
    //             if (data === '\x7f') {
    //                 if (line.length === 0) {
    //                     return;
    //                 }
    //                 line = line.substring(0, line.length -1);
    //                 writeEmitter.fire('\x1b[D');
    //                 writeEmitter.fire('\x1b[P');
    //                 return;
    //             }
    //             line += data;
    //             writeEmitter.fire(data);
    //         }
    //     };
    // }));

    context.subscriptions.push(vscode.window.registerTerminalProfileProvider('terminalTest.terminal-profile', {
        provideTerminalProfile(token) {
            return {
                options: {
                    name: 'Latino Terminal',
                    shellPath: ruta.toString()
                }
            };
        }
    }));

    context.subscriptions.push(vscode.commands.registerCommand('latino.correr', () => {
        if (unSave) {
            vscode.window.showErrorMessage('Error! El archivo no a sido guardado...');
        } else {
            vscode.window.createTerminal('Latino Terminal', ruta.toString(), '${file}').show();
        }
    }));

    let btnConf         = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    btnConf.text        = "$(tools) Binario";
    btnConf.command     = 'latino.config';

    // let btnBug          = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    // btnBug.text         = "$(debug)";
    // btnBug.command      = 'latino.debug';

    let btnCorrer       = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    btnCorrer.text      = '$(run) Ejecutar Latino',
    btnCorrer.command   = 'latino.correr';

    context.subscriptions.push(btnConf/*,btnBug*/, btnCorrer);
    context.subscriptions.push(provider1, provider2);

    btnConf.show();
    // btnBug.show();
    btnCorrer.show();
}

exports.activate = activate;

function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
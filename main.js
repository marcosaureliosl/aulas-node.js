import { promises as fs } from "fs";
import falarHello from "./escrever.js";
import { calcularExpressao } from "./calculadora/calculadora.js";

falarHello();

// Exemplo de uso:
calcularExpressao( '3 / 2');


//(DESACOMPLAR) TRANSFORMAR EM UM MODULO QUE LE E CRIAR UM NOVO QUE ESCREVE EM UM LOG.txt
async function lerArquivo(pathFile) {
    try {
        const file = await fs.readFile(pathFile, "ascii");
        console.log(file);
    } catch (error) {
        console.error(error);
    }

    console.log("A prova que n");
}

lerArquivo("package.json");

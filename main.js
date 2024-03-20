import { calcularExpressao } from "./calculadora/calculadora.js";
import { lerArquivo } from "./leitorArquivo.js";
import { escreverLog } from "./escritorLog.js";
import falarHello from "./escrever.js";

falarHello();

// Exemplo de uso:
calcularExpressao('3 / 2');

async function main() {
    try {
        const conteudo = await lerArquivo("arquivo.txt");
        console.log("Conteúdo do arquivo:", conteudo);
        await escreverLog("Conteúdo do arquivo lido: " + conteudo);
    } catch (error) {
        console.error("Erro:", error);
    }
}

main();

lerArquivo("package.json");

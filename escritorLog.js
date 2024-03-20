import { promises as fs } from "fs";

async function escreverLog(mensagem) {
    try {
        await fs.appendFile("log.txt", mensagem + "\n");
        console.log("Mensagem escrita no arquivo de log.");
    } catch (error) {
        console.error("Erro ao escrever no arquivo de log:", error);
        throw error;
    }
}

export { escreverLog };

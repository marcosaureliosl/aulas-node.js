import { promises as fs } from "fs";

async function lerArquivo(pathFile) {
    try {
        const file = await fs.readFile(pathFile, "utf8");
        return file;
    } catch (error) {
        console.error("Erro ao ler o arquivo:", error);
        throw error;
    }
}

export { lerArquivo };

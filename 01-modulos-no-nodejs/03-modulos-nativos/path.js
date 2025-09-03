const path = require("path");
const fs = require("fs");

// console.log(__filename); // corresponde ao nome do arquivo que está sendo executado contendo o caminho completo
// console.log(__dirname); // corresponde ao caminho completo da pasta a qual o arquivo pertence

// Pegar o nome de um arquivo que está sendo executado
const nomeArquivo = path.basename(__filename);
console.log("Nome do arquivo: ", nomeArquivo);

// Pegar a extenção de um arquivo
const extencaoArquivo = path.extname(__filename);
console.log("Exteção do Arquivo: ", extencaoArquivo);

// Criar um arquivo no diretório atual
console.log(path.join(__dirname, "message.txt"));
fs.writeFile(path.join(__dirname, "message.txt"), "Teste de criação de arquivo", () => {});
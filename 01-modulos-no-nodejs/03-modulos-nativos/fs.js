const path = require("path");
const fs = require("fs");

// Criar uma pasta em um diretório
fs.mkdir(path.join(__dirname, "new-folder"), (error) => {
  if (error) {
    console.log(`Pasta (${path.join(__dirname, "new-folder")}) já existe! seguindo processos.`);
    return;
  }
});

// Criar um arquivo na nova pasta
fs.writeFile(path.join(__dirname, "new-folder", "new-file.txt"), "Hello new file in new-folder", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Aruivo criado com sucesso em (${path.join(__dirname, "new-folder", "new-file.txt")})`)
  }
});
// Adicionando conteudo no arquivo já existente
fs.appendFile(path.join(__dirname, "new-folder", "new-file.txt"), "Novo conteudo adicionada \npulando uma linha", (error) => {
  if (error) {
    console.log(error);
  }
});

// Ler o conteudo de um arquivo
fs.readFile(path.join(__dirname, "new-folder", "new-file.txt"), "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data);
});

// Validar se uma psta existe
const folderExists = fs.existsSync(path.join(__dirname, "new-folder"));
console.log("Foder exists: ", folderExists);

// Validar se um arquivo existe
const fileExists = fs.existsSync(path.join(__dirname, "new-folder", "new-file.txt"));
console.log("File exists: ", fileExists);

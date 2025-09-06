const loginUser = (email, password) => {
  // Retorne uma proise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;

      error ?
        reject("Ops! algo deu errado") :
        resolve({ id: 1, name: "Erick", email: "erick@email.com" });
    }, 3000)
  })
}

const getUserVideos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
  
      error ?
        reject("Ops! Error ao buscar vídeos do usuario!") : 
        resolve(["video_1", "video_2", "video_3"]);
    }, 2500);
  })
}

const getUserVideoDetails = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;

      error ? 
        reject("Error ao processar detalhes do vídeo") : 
        resolve({ id: 1, name: "video_1", description: "", duration: 1 });
    }, 2500)
  })
}

const user = loginUser("erick@email.com", "1234")
  .then((user) => {
    console.log("Usuário logado com sucesso!");
    console.log(user);
    return getUserVideos();
  })
  .then((videos) => {
    console.log(videos);
    return getUserVideoDetails();
  })
  .then((details) => {
    console.log(details);
  })
  .catch((error) => {
    console.log(error);
  });


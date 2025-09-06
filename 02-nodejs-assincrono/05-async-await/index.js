const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;

      error ?
        reject("Ops! algo deu errado") :
        resolve({ id: 1, name: "Erick", email: email });
    }, 3000);
  });
}

const getVideos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;

      error ?
        reject("Ops! Error ao buscar vídeos do usuario!") : 
        resolve(["video_1", "video_2", "video_3"]);
    }, 2500);
  });
}

const getUserVideoDetails = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true;

      error ? 
        reject("Error ao recuperar detalhes do vídeo") : 
        resolve({ id: 1, name: "video_1", description: "", duration: 1 });
    }, 2500)
  });
}

const getUserData = async () => {

  try {
    const user = await loginUser("erick@email.com", "1234");
    console.log(user);
    
    if (user) {
      const videos = await getVideos();
      console.log(videos);

      if (videos) {
        const videoDetails = await getUserVideoDetails();
        console.log(videoDetails);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
getUserData();

console.log("Dados do usuário recuperados com sucesso!");
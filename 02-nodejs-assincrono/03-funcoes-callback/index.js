const loginUser = (email, password, onSuccess, onError) => {
  // chamar banco de dados para verificar os dados do usuário
  setTimeout(() => {
    const error = false
    if (error) {
      return onError("Erro ao processar dados do usuário!")
    }

    console.log("Usuário verificdado no banco de dados");
    return onSuccess({
      name: "Erick",
      email: email
    });
  }, 3000)
}

const getUserVideos = (onSuccess, onError) => {
  // Chamar banco de dados para pegar os videos
  setTimeout(() => {
    onSuccess(["video_1", "video_2", "video_3"]);
  }, 2000);
}

const getUserVideoDetails = (onSuccess, onError) => {
  setTimeout(() => {
    onSuccess({id: 1, name: "Video teste", description: "", duration: 1});
  }, 2000);
}

const user = loginUser("erick@email", "123", 
  (success) => {
    console.log(success);
    getUserVideos(
      (videos) => {
        console.log(`Videos do usuário recuperados com sucesso ${videos}`);
        getUserVideoDetails(
          (success) => {
            console.log(success);
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

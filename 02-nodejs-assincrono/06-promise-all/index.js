const loadProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {id: 1, name: "Mouse gamer", price: 500},
        {id: 2, name: "Teclado gamer", price: 1100},
        {id: 3, name: "Computador gamer", price: 5500},
      ])
    }, 3000);
  });
}

const loadCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {id: 1, name: "Perifericos"},
        {id: 2, name: "Computadores"},
        {id: 3, name: "Manutenção"},
      ])
    }, 3000);
  });
}

const loadUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {id: 1, name: "Erick"},
        {id: 2, name: "Jessica"},
        {id: 3, name: "Maily"},
      ]);
    });
  });
}

const init = async () => {
  // const products = await loadProducts();
  // const categories = await loadCategories();
  // const users = await loadUsers();

  // console.log({
  //   Products: products,
  //   Categories: categories,
  //   Users: users,
  // });

  try {
    // Promise.all executa varias promises seimultâneamente
    const [users, products, categories] = await Promise.all([// se uma promise falhar todas falharam
      loadUsers(),
      loadProducts(),
      loadCategories(),
    ]);

    console.log({
      users,
      products,
      categories,
    });

    const result = await Promise.allSettled([// retorna todas as promises com seus status 
      loadUsers(),
      loadProducts(),
      loadCategories(),
    ]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

init();
// setTimeout(function () {
//   console.log("Hello World");
// }, 1000);

// setTimeout(() => {
//   console.log("Hello World");
// }, 2000);

const getUsuarioById = (id, callback) => {
  const usuario = {
    id,
    nombre: "James"
  }

  setTimeout(() => {
    callback(usuario);
  }, 1500);
};


getUsuarioById(10, (usuario ) => {
    console.log(usuario);
})

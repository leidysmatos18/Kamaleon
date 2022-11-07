export const envairDatosServidor = async (datosForm) => {
  let OBJ = { ...datosForm };
  console.log(OBJ);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let url = `https://kamaleontnodemailer.herokuapp.com/v1/contact`;

  let myInit = {
    method: "POST",
    body: JSON.stringify(OBJ),
    headers: myHeaders,
  };

  try {
    let resPost = await fetch(url, myInit);
    let post = await resPost.json();
    if (!resPost.ok) throw Error("HTTP status " + resPost.status);
    console.log({ status: `su mensaje ha sido enviado`, ...post });
    return true;
  } catch (e) {
    console.log(e);
    alert("Error en la peticion, vuelvelo a intentar");
    return false;
  }
};

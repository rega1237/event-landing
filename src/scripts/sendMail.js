export const sendMail = (name, email) => {
  emailjs
    .send("service_x474ama", "template_x3004re", {
      name: name,
      email: email,
    })
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Correo enviado correctamente a " + email + name);
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Correo no enviado correctamente a " + email + name);
      }
    );
};

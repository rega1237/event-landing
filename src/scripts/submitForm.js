/*export const submitForm = (async (e) => { 
    e.preventDefault();

    const name = document.getElementById('name');
    const partner = document.getElementById('partner');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    
    const formData = {
        name: name.value,
        partner: partner.value,
        email: email.value,
        phone: phone.value
    };

    fetch("https://script.google.com/macros/s/AKfycbzaVZBi6DHlo4FhaCn7DJAHhgIrq3c47rgASWzGOm7P7yvqdclr4Mbjj2L1IOFmZP2x/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        alert("Datos enviados correctamente");
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
*/
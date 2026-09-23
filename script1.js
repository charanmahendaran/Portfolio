function sendMail(){
    let parms ={
        name : document.getElementById("nameInput").value,
        email : document.getElementById("emailInput").value
    }
    emailjs.send("service_jo0581c","template_oqynrwi",parms).then(alert("Email Sent!!"))
}
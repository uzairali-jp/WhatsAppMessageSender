function sendBtn() {
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;


    if (phone === "" || address === "") {
        alert("Please enter phone number and address");
        return;
    }

    let message = address;
            // let url = `https://web.whatsapp.com/send?phone=${fullNumber}&text=${encodeURIComponent(message)}`;

    let url = "https://web.whatsapp.com/send?phone" + phone + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}






 document.addEventListener("DOMContentLoaded", function() {
      const input = document.querySelector("#phone");

      window.intlTelInput(input, {
        initialCountry: "pk",    
        separateDialCode: false, 
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js" // formatting/validation
      });
    });





















// function sendWhatsApp() {
//     let phone = document.getElementById("phone").value;
//     let address = document.getElementById("address").value;


//     if (phone === "" || address === "") {
//         alert("Please enter phone number and address");
//         return;
//     }

//     let message = address;

//     let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

//     window.open(url, "_blank");
// }
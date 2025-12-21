function sendWhatsApp() {
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;


    if (phone === "" || address === "") {
        alert("Please enter phone number and address");
        return;
    }

    let message = "My Address is:\n" + address;

    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}
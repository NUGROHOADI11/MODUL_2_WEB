function validateForm() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (nama === "" || email === "" || password === "") {
        alert("Harap isi semua kolom");
        return false; 
    }


    return true;
}

function jumlahkan() {
    var bilangan1 = parseFloat(document.getElementById("number1").value);
    var bilangan2 = parseFloat(document.getElementById("number2").value);

    var hasil = bilangan1 + bilangan2;

    window.alert("Hasil Penjumlahan: " + hasil);
}

function clearForm() {
    var number1Input = document.getElementById("number1");
    var number2Input = document.getElementById("number2");

    number1Input.value = "";
    number2Input.value = "";

    number1Input.focus(); 
}

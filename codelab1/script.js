function jumlahkan() {
    var bilangan1 = parseFloat(document.getElementById("number1").value);
    var bilangan2 = parseFloat(document.getElementById("number2").value);

    var hasil = bilangan1 + bilangan2;

    // Menampilkan hasil dalam sebuah popup message
    window.alert("Hasil Penjumlahan: " + hasil);
}

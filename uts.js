// Fungsi untuk menampilkan popup dengan teks yang sesuai
function showPopup(message) {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    popupText.innerText = message; // Menampilkan pesan yang diterima
    popup.style.display = 'block'; // Menampilkan popup
}

// Fungsi untuk menutup popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'; // Menyembunyikan popup
}

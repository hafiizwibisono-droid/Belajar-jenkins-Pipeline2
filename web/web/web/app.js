// Fungsi untuk ubah teks saat tombol diklik
function ubahPesan() {
    const pesan = document.getElementById("msg");
    pesan.innerText = "🎉 Hore! Ini aplikasi codinganku sendiri berhasil deploy via Jenkins + Docker!";
    pesan.style.color = "#facc15"; // teks berubah jadi kuning cerah
    pesan.style.fontWeight = "bold";
}

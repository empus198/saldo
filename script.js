async function ambilSaldo() {
  document.getElementById("saldo").textContent = "Mengambil data...";

  try {
    const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.hesda-store.com/v2/saldo?hesdastore=glMwsKL07KEcHwAH6E", {
      method: "GET",
      headers: {
        "Authorization": "Basic " + btoa("muchwah6@gmail.com:071987"), // Gunakan auth jika diperlukan
      }
    });

    const data = await response.json();

    if (data.status) {
      document.getElementById("saldo").textContent = `Saldo: Rp ${data.data.saldo.toLocaleString()}`;
    } else {
      document.getElementById("saldo").textContent = "Gagal mengambil saldo.";
    }
  } catch (error) {
    document.getElementById("saldo").textContent = "Terjadi kesalahan.";
  }
}

// Memanggil fungsi saat halaman dimuat
window.onload = ambilSaldo;

async function ambilSaldo() {
  document.getElementById("saldo").textContent = "Mengambil data...";
  try {
    const response = await fetch("/api/saldo");
    const data = await response.json();
    if (data.status) {
      document.getElementById(
        "saldo"
      ).textContent = `Saldo: Rp ${data.data.saldo.toLocaleString()}`;
    } else {
      document.getElementById("saldo").textContent = "Gagal mengambil saldo.";
    }
  } catch (error) {
    document.getElementById("saldo").textContent = "Terjadi kesalahan.";
  }
}

window.onload = ambilSaldo;

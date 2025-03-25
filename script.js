async function ambilSaldo() {
  document.getElementById("saldo").textContent = "Mengambil data...";

  const username = "muchwah6@gmail.com"; // Gantilah dengan username
  const password = "071987"; // Gantilah dengan password
  const apiUrl =
    "https://api.hesda-store.com/v2/saldo?hesdastore=glMwsKL07KEcHwAH6E";

  try {
    // Mengirim permintaan API dengan Basic Auth
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: "Basic " + btoa(username + ":" + password),
      },
    });

    if (!response.ok) {
      throw new Error("Gagal mengambil data");
    }

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

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let formData = new FormData(this);
    let data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Ganti URL berikut dengan URL Web App Google Apps Script yang sudah dipublish
    const scriptURL = "https://script.google.com/macros/s/AKfycbxxyoksrM3qOH3JugjJQeLyuaSEFs02EACJHYrSfPMfik_QD9VwJEvGnD2xpn0Kk4OZPQ/exec";

    fetch(scriptURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((result) => {
        let messageDiv = document.getElementById("message");
        messageDiv.textContent = "Data Berhasil Terkirim!";
        messageDiv.className = "notification is-success";
        messageDiv.style.display = "block";
        document.getElementById("form").reset();
        setTimeout(() => {
            messageDiv.style.display = "none";
        }, 3000);
    })
    .catch((error) => {
        console.error("Error:", error);
        let messageDiv = document.getElementById("message");
        messageDiv.textContent = "Terjadi kesalahan, coba lagi.";
        messageDiv.className = "notification is-danger";
        messageDiv.style.display = "block";
    });
});

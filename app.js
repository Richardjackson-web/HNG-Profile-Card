function updateUTC() {
    const currentDate = new Date();
    const utcTime = currentDate.toUTCString();
    document.getElementById("utc-time").textContent = utcTime;
}

setInterval(updateUTC, 1000);
updateUTC(); 
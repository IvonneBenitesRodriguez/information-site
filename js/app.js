
function updateClock() {
    const now = new Date();
    const hours = formatTimeUnit(now.getHours());
    const minutes = formatTimeUnit(now.getMinutes());
    const seconds = formatTimeUnit(now.getSeconds());

    const clockElement = document.getElementById("clock-app");
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}


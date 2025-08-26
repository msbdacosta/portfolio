function updateTime() {
  const now = new Date();
  const options = {
    timeZone: "America/Sao_Paulo",
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  };

  const timeString = now.toLocaleTimeString("en-US", options);
  document.getElementById("timeDisplay").textContent = timeString;
}

updateTime();
setInterval(updateTime, 15000);

document.addEventListener("mousemove", function (e) {
  const profileImage = document.querySelector(".profile-image");
  const rect = profileImage.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  const distance = Math.sqrt(x * x + y * y);

  if (distance < 100) {
    const strength = (100 - distance) / 100;
    profileImage.style.transform = `translate(${x * strength * 0.1}px, ${
      y * strength * 0.1
    }px) scale(${1 + strength * 0.05})`;
  } else {
    profileImage.style.transform = "translate(0, 0) scale(1)";
  }
});

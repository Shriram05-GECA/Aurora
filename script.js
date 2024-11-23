// Example: Adding interactivity to change the aurora effect
document.body.addEventListener("click", () => {
  const lights = document.querySelectorAll(".light");
  lights.forEach((light) => {
    light.style.animationDuration = `${Math.random() * 5 + 3}s`;
  });
});

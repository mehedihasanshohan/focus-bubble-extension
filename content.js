const bubble = document.createElement('div');
bubble.textContent = "💡 " + "Focus Time!";
bubble.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #333;
  color: white;
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 14px;
  z-index: 9999;
  box-shadow: 0 0 10px #000;
  animation: float 5s ease-in-out infinite;
`;
document.body.appendChild(bubble);

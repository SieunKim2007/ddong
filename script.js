let totalWeight = 0;

// 💩 버튼 이벤트 연결
document.getElementById("dropBtn").addEventListener("click", dropPoop);

function dropPoop() {
  const sky = document.getElementById("sky");

  // 💩 새 똥 생성
  const poop = document.createElement("div");
  poop.className = "fruit";
  poop.textContent = "💩";

  // 랜덤 위치
  const startX = Math.random() * (sky.clientWidth - 40);
  poop.style.left = `${startX}px`;
  poop.style.top = "-50px";

  sky.appendChild(poop);

  // 떨어지는 애니메이션
  const game = document.getElementById("game");
  const ground = document.getElementById("ground");
  const groundY = game.clientHeight - ground.clientHeight + 40;
  poop.style.transform = `translateY(${groundY}px)`;

  // 무게 증가
  totalWeight += 100 + Math.floor(Math.random() * 50);
  updateWeight();
}

function updateWeight() {
  document.getElementById("weight").textContent = `총 무게: ${totalWeight.toLocaleString()} g`;
}

function main() {
  setUpCanvas();
}

function setUpCanvas() {
  const c = document.getElementById("myCanvas");
  const ctx = c.getContext("2d");
  const c.width = document.body.clientWidth;
  const c.height = document.body.clientHeight;
  ctx.rect(20,20,150,100);
  ctx.stroke();
}

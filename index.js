class Mouse {
  constructor(x = 0, y = 0) {
    document.addEventListener("mousemove", (e) => {
      this.x = e.clientX;
      this.y = e.clientY;
    });
  }
}

const mouse = new Mouse();

const displayMouseCoordinates = () => {
  const mouseCoords = document.getElementById("mouse-coords");
  mouseCoords.querySelectorAll("span")[0].innerText = `x: ${mouse.x}`;
  mouseCoords.querySelectorAll("span")[1].innerText = `y: ${mouse.y}`;
};

const thing = document.getElementById("weird-2d-thing");
document.addEventListener("click", () => {
  thing.style.top = `${mouse.y}px`;
  thing.style.left = `${mouse.x}px`;
});

setInterval(() => {
  displayMouseCoordinates();
}, 1);

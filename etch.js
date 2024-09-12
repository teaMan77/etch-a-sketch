window.addEventListener("DOMContentLoaded", (event) => {
  const container = document.querySelector(".container");

  function etchASketch(size = 16) {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let grid = document.createElement("div");
        grid.classList.add("col");
        grid.style.height = `${600 / size}` + "px";
        grid.style.width = `${600 / size}` + "px";
        container.appendChild(grid);
      }
    }
  }

  etchASketch();

  container.addEventListener("mouseover", (event) =>  {
    if(event.target.classList.contains("col")) {
        event.target.classList.add("hovered");
    }
  }, false);

  
  const reset = document.querySelector(".reset");
  reset.addEventListener("click", (event) => {
    const col = document.querySelectorAll(".col");
    for (let i = 0; i < col.length; i++) {
      col[i].classList.remove("hovered");
    }
  }, false);

  const resize = document.querySelector(".resize");
  resize.addEventListener("click", (event) => {
    let size = prompt("Enter the grid size: ");

    const colArray = document.querySelectorAll(".col");
    for (i = 0; i < colArray.length; i++) {
      container.removeChild(colArray[i]);
    }

    etchASketch(size);
  }, false);

}, false);

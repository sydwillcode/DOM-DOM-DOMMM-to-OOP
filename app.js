document.addEventListener("DOMContentLoaded", function () {
  let button = document.createElement("button");
  let buttonText = document.createTextNode("Add Square");
  button.appendChild(buttonText);
  document.body.appendChild(button);

  button.addEventListener("click", newDiv);

  let contain = document.createElement("div");
  contain.classList = "container";
  document.body.appendChild(contain);

  let idNum = 1;
  //let colors = ["pink", "purple", "teal", "blue"];

  class Box {
    constructor() {
      this.div = document.createElement("div");
      this.value = document.createTextNode(idNum);
      this.showBox();
      this.makeEvents();
      // this.div.addEventListener("click", () => {
      // this.div.style.backgroundColor =
      //           colors[Math.floor(Math.random() * colors.length)];
      //       });
      //       console.log(this);
      //OR TO ASSIGN RANDOM COLOR CAN USE ("click", () => this.div.style.backgroundColor = this.randomColor());
      this.div.addEventListener("click", () => this.randomColor());

      this.div.addEventListener("dblclick", () => this.removeBox());
    }

    makeEvents() {
      this.div.addEventListener("mouseenter", () =>
        this.div.appendChild(this.value)
      );
      this.div.addEventListener("mouseleave", () =>
        this.div.removeChild(this.value)
      );
    }
    showBox() {
      this.div.classList = "boxes";
      this.div.id = idNum;
      contain.appendChild(this.div);
    }

    randomColor() {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      this.div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      //or return `rgb(${r}, ${g}, ${b})`;
    }

    removeBox() {
      if (this.div.id % 2 === 0) {
        this.div.nextElementSibling
          ? this.div.nextElementSibling.remove()
          : alert("No squares behind me!");
      } else {
        if (this.div.id % 2 === 1) {
          this.div.previousElementSibling
            ? this.div.previousElementSibling.remove()
            : alert("No squares before me!");
        }
      }
    }
  }

  function newDiv() {
    new Box();
    idNum++;
  }
});

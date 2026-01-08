const button = document.getElementById("colorbtn");

      button.addEventListener("click", function() {
          const colors = ["red", "maroon", "black","skyblue", "orange", "purple"];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          document.body.style.backgroundColor = randomColor;
      });
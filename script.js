let colors = ["red", "green", "blue", "purple", "pink", "cyan", "rosybrown"];

const circle =  document.getElementById("circle")

const colorButton = document.getElementById("color-button");

colorButton.addEventListener("click", (e)=>{
    let randomColor = Math.floor(Math.random() * colors.length);

    circle.classList = colors[randomColor];
    console.log(circle.classList);
});

let shapes = ["square", "star", "circle", "right-arrow", "left-arrow", "rhombus", "paralallogram", "triangle", "hexagon", "left-point", "right-point", "frame", "rebbet"]

const shape = document.getElementById("shape");

const shapeButton = document.getElementById("shape-button");

shapeButton.addEventListener("click", (e)=>{
    let randomShape = Math.floor(Math.random() * shapes.length);
    shape.classList = shapes[randomShape]
})

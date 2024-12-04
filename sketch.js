let glitch;
let img;

function preload() {
    // Load your uploaded image
    img = loadImage("Glitch Image.jpg"); // Replace with your image's relative path
}

function setup() {
    const canvas = createCanvas(windowWidth, 400); // Adjust height to match CSS
    canvas.parent("glitch-container"); // Attach the canvas to the `div`

    glitch = new Glitch();
    glitch.loadType("jpg");
    glitch.pixelate(1);
    glitch.loadImage(img);
}

function draw() {
    background(0);
    glitch.resetBytes(); // Resets the glitch each frame
    glitch.randomBytes(0.5); // Randomly glitches 50% of the image
    glitch.buildImage();
    glitch.draw(0, 0, width, height);
}

function windowResized() {
    resizeCanvas(windowWidth, 400); // Rescale on window resize
}

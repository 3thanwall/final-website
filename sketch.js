let glitch;
let img;

function preload() {
    // Load your uploaded image
    img = loadImage("Glitch Image.jpg", 
        () => console.log("Image loaded successfully"),
        () => console.error("Failed to load image. Check the path!")
    );
}

function setup() {
    // Create a canvas and attach it to the glitch container
    const canvas = createCanvas(windowWidth, 400);
    canvas.parent("glitch-container");

    // Initialize the glitch effect
    glitch = new Glitch();
    glitch.loadType("jpg");
    glitch.pixelate(1);  // Adjust the pixelation level if desired
    glitch.loadImage(img);
}

function draw() {
    background(0);

    // Apply the glitch effect only if the image is loaded
    if (glitch && img) {
        glitch.resetBytes();
        glitch.randomBytes(0.3); // Adjust the intensity of the glitch effect
        glitch.buildImage();
        glitch.draw(0, 0, width, height);
    } else {
        fill(255);
        textSize(24);
        textAlign(CENTER, CENTER);
        text("Loading glitch effect...", width / 2, height / 2);
    }
}

function windowResized() {
    // Resize the canvas when the window size changes
    resizeCanvas(windowWidth, 400);
}


let glitch;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    imageMode(CENTER);

    glitch = new Glitch();

    // Ensure image is loaded correctly
    loadImage('Glitch Image.jpg', (im) => {
        glitch.loadImage(im);
    }, (err) => {
        console.error('Failed to load image:', err);
    });
}

function draw() {
    if (glitch.image) { // Ensure glitch has an image before proceeding
        glitch.resetBytes();

        glitch.replaceBytes(100, 104); // Swap bytes
        glitch.randomBytes(1);        // Add one random byte for movement

        glitch.buildImage();
        image(glitch.image, width / 2, height / 2);
    }
}

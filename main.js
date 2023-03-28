var img = " ";
Status = " ";
objects = [];

function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects...";
}

function gotResults(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        objects = result;
        console.log(objects);
    }
}

function modelLoaded() {
    console.log("CocoSSD has loaded!");
    Status = true;
    objectDetector.detect(img, gotResults);
}

function draw() {
    image(img, 0, 0, 640, 420);

    if (Status = true) {
        for (i = 0; i < objects.length, i++;) {
            document.getElementById("status").innerHTML = "Status: Object detected";
            fill("#ED2939");
            percent = Math.floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#ED2939");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
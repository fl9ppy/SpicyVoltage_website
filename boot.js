
const bootText = [
    "Gathering SpicyVoltage",
    " ",
    "Waking up fl9ppy",
    "Waiting for Cs1Dy to finish eating",
    "Getting Karburator out of the racing sim",
    "Yelling at Zxeniku to start working",
    "Telling ded_moon to stop with the misinformation"
];

const bootDiv = document.getElementById("boot");
const loaderDiv = document.getElementById("loader");

// Add skip text
const skipText = document.createElement("div");
skipText.textContent = "Press any key or click anywhere to skip animation";
skipText.style.position = "fixed";
skipText.style.bottom = "20px";
skipText.style.left = "50%";
skipText.style.transform = "translateX(-50%)";
skipText.style.color = "orange";
skipText.style.fontFamily = "'Silkscreen', monospace";
skipText.style.fontSize = "14px";
document.body.appendChild(skipText);

let lineIndex = 0;
let skipRequested = false;

function skipBoot() {
    skipRequested = true;
    bootDiv.style.display = "none";
    loaderDiv.style.display = "flex";
    setTimeout(() => {
        window.location.href = "main.html";
    }, 1000);
}

// Allow skipping by key press or mouse click
document.addEventListener("keydown", skipBoot);
document.addEventListener("click", skipBoot);

function typeEffect(element, text, speed, callback) {
    let charIndex = 0;
    const interval = setInterval(() => {
        if (skipRequested) {
            clearInterval(interval);
            return;
        }
        element.textContent += text[charIndex];
        charIndex++;
        if (charIndex >= text.length) {
            clearInterval(interval);
            callback();
        }
    }, speed);
}

function animateDots(element, callback) {
    let dots = 0;
    const interval = setInterval(() => {
        if (skipRequested) {
            clearInterval(interval);
            return;
        }
        element.textContent = element.dataset.text + '.'.repeat(dots);
        dots = (dots + 1) % 4;
    }, 200);

    setTimeout(() => {
        clearInterval(interval);
        element.textContent = element.dataset.text + " [OK]";
        callback();
    }, 1000);
}

function typeLine() {
    if (skipRequested) return;
    if (lineIndex < bootText.length) {
        let line = document.createElement("div");
        bootDiv.appendChild(line);
        line.dataset.text = bootText[lineIndex];

        if (bootText[lineIndex].trim() === "") {
            line.textContent = " ";
            lineIndex++;
            setTimeout(typeLine, 300);
            return;
        }

        typeEffect(line, bootText[lineIndex], 30, () => {
            if (lineIndex === 0) {
                lineIndex++;
                setTimeout(typeLine, 300);
            } else {
                animateDots(line, () => {
                    lineIndex++;
                    setTimeout(typeLine, 300);
                });
            }
        });
    } else {
        setTimeout(() => {
            if (!skipRequested) {
                bootDiv.style.display = "none";
                loaderDiv.style.display = "flex";
                setTimeout(() => {
                    window.location.href = "main.html";
                }, 2000);
            }
        }, 1000);
    }
}

setTimeout(typeLine, 500);

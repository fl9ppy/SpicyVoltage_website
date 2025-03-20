const bootText = [
    "Gathering SpicyVoltage",
    " ", // <-- Corrected: Insert an actual blank space
    "Waking up fl9ppy",
    "Waiting for Cs1Dy to finish eating",
    "Getting Karburator out of the racing sim",
    "Yelling at Zxeniku to start working",
    "Telling ded_moon to stop with the misinformation"
];

const bootDiv = document.getElementById("boot");
const loaderDiv = document.getElementById("loader");
let lineIndex = 0;

function typeEffect(element, text, speed, callback) {
    let charIndex = 0;
    const interval = setInterval(() => {
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
    if (lineIndex < bootText.length) {
        let line = document.createElement("div");
        bootDiv.appendChild(line);
        line.dataset.text = bootText[lineIndex];

        if (bootText[lineIndex].trim() === "") { // If it's an empty space, just insert it
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
                    setTimeout(typeLine, 20);
                });
            }
        });
    } else {
        setTimeout(() => {
            bootDiv.style.display = "none"; // Hide boot sequence
            loaderDiv.style.display = "flex"; // Show loading animation

            setTimeout(() => {
                window.location.href = "main.html"; // Redirect to main.html
            }, 2500);
        }, 1000);
    }
}

setTimeout(typeLine, 500);

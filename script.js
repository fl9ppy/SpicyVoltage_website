document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("title").click(); // Simulate clicking the title on every page load
    }, 500); // Delay ensures smooth transition
});

function loadContent(section) {
    const contentContainer = document.getElementById("content-container");

    let content = "";
    if (section === "blog") {
        content = `
            <h2>About Us</h2>
            <p>
            <strong>Spicy Voltage</strong> is a passionate team from Romania specializing in 
            <strong>CTF competitions, competitive programming, and electronics</strong>. 
            Our members—<strong>fl9ppy, Zxeniku, Cs1Dy, Karburator, and Ded_Moon</strong>—are dedicated 
            to pushing the boundaries of cybersecurity, coding, and hardware innovation.
            </p>

            <p>
            From tackling intricate cryptography challenges and reverse engineering binaries, 
            to developing custom circuits and embedded systems, we thrive on problem-solving and 
            technical mastery.
            </p>

            <p>
            Whether we’re exploiting vulnerabilities in CTFs, optimizing algorithms for competitive 
            coding, or designing cutting-edge electronics projects, we are constantly learning, 
            adapting, and innovating.
            </p>

            <p>
            Follow our journey as we document our experiences, breakthroughs, and challenges 
            in the world of <strong>cybersecurity, software development, and hardware engineering</strong>.
            </p>
        `;
    } else if (section === "projects") {
        content = `
            <h2>Projects</h2>
            <p>Here are some of the projects developed by <strong>Spicy Voltage</strong>:</p>
            <ul>
                <li>
                    <strong><b>Automated Vertical Gardening</b></strong> – An improved version of modern gardening that 
                    allows planting on a small surface while maximizing harvests. The system automates watering, 
                    nutrient distribution, and environmental control, making urban gardening more efficient and sustainable.
                </li>
                <li>
                    <strong><b>Crawler</b></strong> – A remote-controlled search and rescue robot designed for rocky and tight terrains. 
                    Small and rugged, it can navigate cracks and caves, making it ideal for disaster response operations. 
                    Equipped with a 360° camera and facial recognition software, Crawler helps identify and locate 
                    trapped individuals in challenging environments.
                </li>
            </ul>
            <p>We are constantly innovating and working on new projects. Stay tuned for more updates!</p>
        `;
    }else if (section === "competitions") {
        content = `
            <h2>Competitions</h2>
            <p>Here are the competitions we competed in:</p>
            <ul>
                <li><b><strong>DefCamp 2024</strong></b> - One of the biggest cybersecurity conferences and CTFs in Romania.</li>
                <li><b><strong>UVT HackDays 2024</strong></b> - A hacking and security-focused competition at UVT.</li>
                <li><b><strong>PoliHack v14</strong> && <strong>PoliHack v16</strong></b> - A major tech hackathon organised by OSUT.</li>
                <li><b><strong>iTEC 2024</strong></b> - A student competition in informatics, engineering, and CTF challenges.</li>
                <li><b><strong>ImaginaryCTF 2024</strong></b> - A global CTF event testing various cybersecurity skills.</li>
                <li><b><strong>Unihack 2023</strong></b> - A programming oriented hackathon made by UPT.</li>
                <li><b><strong>Cloudflight Coding Contest</strong></b> - A coding competion held by Cloudflight.</li>
            </ul>
        `;
    } else if (section === "contact") {
        content = `
            <h2>Contact Us</h2>
            <p>Want to collaborate or just say hi? Reach out to <strong>Spicy Voltage</strong> via:</p>
            <ul>
                <li><strong><b>Email:</b></strong> spicyvoltage@yahoo.com</li>
                <li><strong><b>Instagram:</b></strong> <a href="https://www.instagram.com/spicy_voltage/" target="_blank" rel="noopener noreferrer">@spicy_voltage</a></li>
                <li><strong><b>Discord:</b></strong> <a href="https://discord.gg/k2rakhHk4f" target="_blank" rel="noopener noreferrer">Join our server</a></li>
            </ul>
        `;
    } else if (section === "members") {
        content = `
            <h2>Meet the Team</h2>
            <p>Spicy Voltage is built by a group of talented and passionate hackers, programmers, and engineers:</p>
            <ul>
                <li><strong><b>fl9ppy</b></strong> – Low-level security and reverse engineering.</li>
                <li><strong><b>Zxeniku</b></strong> – Software developer and designer.</li>
                <li><strong><b>Cs1Dy</b></strong> – Marketing and professional eater.</li>
                <li><strong><b>Karburator</b></strong> – Robotics innovator.</li>
                <li><strong><b>ded_moon</b></strong> – Hardware hacker</li>
            </ul>
        `;
    } else if (section === "gallery") {
        content = `
            <h2>Photo Gallery</h2>
            <div id="gallery">
                <img src="images/photo1.jpeg" alt="Team at competition">
                <img src="images/photo2.jpeg" alt="Working on a project">
                <img src="images/photo3.jpeg" alt="Robot prototype">
                <img src="images/photo4.jpeg" alt="CTF challenge setup">
                <img src="images/photo5.jpeg" alt="Electronics workbench">
            </div>
        `;
    }

    contentContainer.innerHTML = content;
}

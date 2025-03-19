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
                    <strong>Automated Vertical Gardening</strong> – An improved version of modern gardening that 
                    allows planting on a small surface while maximizing harvests. The system automates watering, 
                    nutrient distribution, and environmental control, making urban gardening more efficient and sustainable.
                </li>
                <li>
                    <strong>Crawler</strong> – A remote-controlled search and rescue robot designed for rocky and tight terrains. 
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
                <li><strong>DefCamp 2024</strong> - One of the biggest cybersecurity conferences and CTFs in Romania.</li>
                <li><strong>UVT HackDays 2024</strong> - A hacking and security-focused competition at UVT.</li>
                <li><strong>PoliHack v14</strong> && <strong>PoliHack v16</strong> - A major tech hackathon organised by OSUT.</li>
                <li><strong>iTEC 2024</strong> - A student competition in informatics, engineering, and CTF challenges.</li>
                <li><strong>ImaginaryCTF 2024</strong> - A global CTF event testing various cybersecurity skills.</li>
            </ul>
        `;
    } else if (section === "contact") {
        content = `
            <h2>Contact Us</h2>
            <p>Want to collaborate or just say hi? Reach out to <strong>Spicy Voltage</strong> via:</p>
            <ul>
                <li><strong>Email:</strong> spicyvoltage@yahoo.com</li>
                <li><strong>Instagram:</strong> <a href="https://www.instagram.com/spicy_voltage/">@spicy_voltage</a></li>
                <li><strong>Discord:</strong> <a href="https://discord.gg/k2rakhHk4f">Join our server</a></li>
            </ul>
        `;
    } else if (section === "members") {
        content = `
            <h2>Meet the Team</h2>
            <p>Spicy Voltage is built by a group of talented and passionate hackers, programmers, and engineers:</p>
            <ul>
                <li><strong>fl9ppy</strong> – Low-level security and reverse engineering.</li>
                <li><strong>Zxeniku</strong> – Software developer and designer.</li>
                <li><strong>Cs1Dy</strong> – Marketing and professional eater.</li>
                <li><strong>Karburator</strong> – Robotics innovator.</li>
                <li><strong>ded_moon</strong> – Hardware hacker</li>
            </ul>
        `;
    }

    contentContainer.innerHTML = content;
}

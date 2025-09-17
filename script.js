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
                <b>We’re Spicy Voltage</b>
            <p>
                <strong>We’re a group of tech-obsessed teenagers from Romania</strong> who love pushing buttons 
                (sometimes the right ones) and breaking things… on purpose.
            </p>
            <p>
                Whether we’re tackling mind-bending CTF challenges, competing in coding battles, or building circuits 
                that (usually) don’t catch fire, we’re all about <strong>learning, creating, and pushing technology to its limits</strong>.
            </p>
            
            <b>What We Do</b>
            <p>
                From the depths of binary reverse engineering to the peaks of algorithm optimization, 
                we thrive in diverse tech environments. Some of our favorite playgrounds include:
            </p>
            <ul>
                <li>
                    <b><strong>Capture The Flag (CTF) Competitions:</strong></b> Finding vulnerabilities, cracking codes, and 
                    outwitting security measures — it’s like a digital treasure hunt, but with way more coffee.
                </li>
                <li>
                    <b><strong>Competitive Programming:</strong></b> Turning caffeine into optimized code, solving algorithmic 
                    puzzles, and competing to see who can write the cleanest code… or the fastest spaghetti.
                </li>
                <li>
                    <b><strong>Electronics & Hardware Projects:</strong></b> Whether it’s designing custom circuits or building 
                    embedded systems, we love getting our hands dirty (sometimes literally) with hardware.
                </li>
            </ul>
            
            <b>Why We Do It</b>
            <p>
                We’re not just here for the bragging rights (okay, maybe a little). For us, technology is a never-ending 
                puzzle — and we live for the thrill of solving it. Every challenge is an opportunity to learn something 
                new, break a few things along the way, and build back stronger.
            </p>
            <p>
                Plus, there’s nothing quite like that <em>"Eureka!"</em> moment after hours of staring at a screen.
            </p>
            
            <b>Follow Our Journey</b>
            <p>
                We’re constantly documenting our adventures — from late-night debugging marathons to those rare 
                moments when things work on the first try.
            </p>
            <p>
                Join us as we explore the world of <strong>cybersecurity, coding, and electronics</strong>. Whether you’re 
                a fellow tech enthusiast, a curious newcomer, or just here to see what the heck <strong>"Spicy Voltage"</strong> 
                even means, we’d love to have you along for the ride.
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
                <li>    
                    <strong><b>Spicy-Voltage-Toolkit</b></strong> – A powerful and extensible command-line toolkit built for Capture The Flag competitions and cybersecurity practice. 
                    It streamlines tasks like reconnaissance, web exploitation, cryptography, brute-force attacks, 
                    privilege escalation, and OSINT through a fast, menu-driven interface. The toolkit also supports 
                    user-created scripts for added flexibility, making it an essential resource for both aspiring and seasoned ethical hackers.
                    <a href="https://github.com/fl9ppy/SpicyVoltageToolkit.git">https://github.com/fl9ppy/SpicyVoltageToolkit.git</a>
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
                <li><b><strong>PoliHack v14</strong> , <strong>PoliHack v16</strong> && <strong>PoliHack v17</strong></b> - A major tech hackathon organised by OSUT.</li>
                <li><b><strong>iTEC 2024</strong></b> - A student competition in informatics, engineering, and CTF challenges.</li>
                <li><b><strong>ImaginaryCTF 2024</strong></b> - A global CTF event testing various cybersecurity skills.</li>
                <li><b><strong>Unihack 2023</strong></b> - A programming oriented hackathon made by UPT.</li>
                <li><b><strong>Cloudflight Coding Contest</strong></b> - A coding competion held by Cloudflight.</li>
                <li><b><strong>Qube2space</strong></b> - A space engineering competition aimed at students.</li>
                <li><b><strong>Anton Saimac II && III</strong></b> - Engineering and innovation contest organised by FIH.</li>
                <li><b><strong>OSC (Olimpiada de securitate cibernetica)</strong></b> - Romania's cybersecurity olympiad.</li>
                <li><b><strong>UNR 22</strong></b> - Cybersecurity contest.</li>
		<li><b><strong>UniVsThreats 2025</strong></b> - A CTF organised by the UVT-CTF team</li>
		<li><b><strong>BSides Transylvania 2025</strong></b> - Cybersecurity conference held in Cluj-Napoca + CTF</li>
            </ul>
        `;
    } else if (section === "contact") {
        content = `
            <h2>Contact Us</h2>
            <p>Want to collaborate or just say hi? Reach out to <strong>Spicy Voltage</strong> via:</p>
            <ul>
                <li><strong><b>Email:</b></strong> <a href="mailto:spicyvoltage@yahoo.com">spicyvoltage@yahoo.com</a></li>
                <li><strong><b>Instagram:</b></strong> <a href="https://www.instagram.com/spicy_voltage/" target="_blank" rel="noopener noreferrer">@spicy_voltage</a></li>
                <li><strong><b>Discord:</b></strong> <a href="https://discord.gg/k2rakhHk4f" target="_blank" rel="noopener noreferrer">Join our server</a></li>
            </ul>
        `;
    } else if (section === "members") {
        content = `
            <h2>Meet the Team</h2>
            <p>Spicy Voltage is built by a group of talented and passionate hackers, programmers, and engineers:</p>
            <ul>
                <li>
                    <strong><b>fl9ppy</b></strong> 
                    – Tech enthusiast, hacker (I promise I'm not a skiddie) and software developer. Coffee and Kali are my best friends xD. 
                    <img src="images/fl9ppy.jpeg" alt="fl9ppy" class="member-photo">
                </li>
                <li>
                    <strong><b>Zxeniku</b></strong> 
                    – Writes code, breaks code, designs stuff… then takes a nap like nothing happened. 
                    <img src="images/Zxeniku.jpg" alt="Zxeniku" class="member-photo">
                </li>
                <li>
                    <strong><b>Cs1Dy</b></strong> 
                    – Hi I'm Cs1Dy, I do marketing and sometimes code(never) and love spicy food(can't handle my spiciness).
                    <img src="images/Cs1Dy.jpg" alt="Cs1Dy" class="member-photo">
                </li>
                <li>
                    <strong><b>Karburator</b></strong> 
                    – I'm not really the brightest one, therefore I enjoy working with screws and electronical components.
                    <img src="images/karburator.jpg" alt="Karburator" class="member-photo">
                </li>
                <li>
                    <strong><b>ded_moon</b></strong> 
                    – Tinkerer with a passion for maps, tanks, civil engineering, and delightfully impractical solutions.
                    <img src="images/ded_moon.jpg" alt="ded-moon" class="member-photo">
                </li>
                <li>
                    <strong><b>Mr_PLugger</b></strong> 
                    – Hi There , Im Mr_PLugger and I try to plug and unplug things until something explodes. GLHF to catch me.
                    <img src="images/Mr_PLugger.jpeg" alt="Mr_PLugger" class="member-photo">
                </li>
            </ul>
        `;
    } else if (section === "gallery") {
        content = `
            <h2>Photo Gallery</h2>
            <div id="gallery">
                <img src="images/photo1.jpeg" alt="Team at competition">
                <img src="images/photo2.jpeg" alt="Working on a project">
                <img src="images/photo3.jpeg" alt="Robot prototype">
                <img src="images/photo4.jpeg" alt="got lazy, not alt text xD">
                <img src="images/photo5.jpeg" alt="got lazy, not alt text xD">
                <img src="images/photo6.jpg" alt="got lazy, not alt text xD">
                <img src="images/photo7.jpeg" alt="got lazy, not alt text xD">
                <img src="images/photo8.jpeg" alt="got lazy, not alt text xD">
                <img src="images/photo9.jpg" alt="got lazy, not alt text xD">
                <img src="images/photo10.jpg" alt="got lazy, not alt text xD">
                <img src="images/photo11.jpg" alt="got lazy, not alt text xD">
                <img src="images/photo13.jpg" alt="got lazy, not alt text xD">
		</div>
        `;
    }

    contentContainer.innerHTML = content;
}

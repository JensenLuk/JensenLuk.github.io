const homeClick = document.querySelector(".nav-bar ul li:nth-child(1)")
const educationClick = document.querySelector(".nav-bar ul li:nth-child(2)")
const profileClick = document.querySelector(".nav-bar ul li:nth-child(3)")
const skillsClick = document.querySelector(".nav-bar ul li:nth-child(4)")
const logoClick = document.querySelector(".logo")
const container =document.querySelector(".content")


homeClick.addEventListener("click", ()=>{
    homeClick.classList.add("nav-item")
    educationClick.classList.remove("nav-item")
    profileClick.classList.remove("nav-item")
    skillsClick.classList.remove("nav-item")
    container.innerHTML= `
    <div class="container-left">
                <p>HI! THIS IS <span style="color: #316881; font-size: 50px;  border-radius: 20px; padding: 5px 10px; border-style: double;">Jensen</span></p>
                <p>Fresh Graduate from City University of Hong Kong (2023)</p>
                <p style="font-size: 25px;">Majoring In Information Management</p>
                <div class="icon">
                    <a href="https://www.linkedin.com/in/fu-pan-luk-b4015a24a/"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/JensenLuk"><i class="fa-brands fa-github"></i></a>
                    <a href="mailto: jensenluk26@gmail.com"><i class="fa-regular fa-envelope"></i></a>
                </div>
            </div>
            <div class="container-right">
                <img src="./img/icon.png">
            </div>
    `
    container.classList.add("container")
    container.classList.remove("education")
    container.classList.remove("skills")
    container.classList.remove("profile")
})

educationClick.addEventListener("click",()=>{
    educationClick.classList.add("nav-item")
    homeClick.classList.remove("nav-item")
    profileClick.classList.remove("nav-item")
    skillsClick.classList.remove("nav-item")
    container.innerHTML=`
    <ul>
        <li style="font-weight: bold; text-decoration: solid underline; margin-bottom: 1rem;">City university of Hong Kong (CityU)</li>
                <li>	Sep.2021 – Present </li>
                <li>◆ Bachelor's Degree ◆Information Management (ISSN)</li>
                <li>GPA 3.53/4.3</li>
            <br/>
            <li><i class="fa-solid fa-arrow-up"></i></li>
            <br/>
        <li style="font-weight: bold; text-decoration: solid underline; margin-bottom: 1rem;">Hong Kong Community College (HKCC)</li>
            <br/>
                <li>	Sep.2019 – Jun.2021</li>
                <li>◆ Associate Degree ◆ Associate in business</li>
                <li>GPA 3.52/4.3</li>
            <br/>
            <li><i class="fa-solid fa-arrow-up"></i></li>
            <br/>
        <li style="font-weight: bold; text-decoration: solid underline; margin-bottom: 1rem;">Choi Hung Estate Catholic Secondary School(CHECSS)</li>
                <li>	Sep.2013 – July.2019 </li>
    </ul>
    `
    container.classList.remove("container")
    container.classList.add("education")
    container.classList.remove("profile")
    container.classList.remove("skills")
})

skillsClick.addEventListener("click", ()=>{
    skillsClick.classList.add("nav-item")
    educationClick.classList.remove("nav-item")
    profileClick.classList.remove("nav-item")
    homeClick.classList.remove("nav-item")
    container.innerHTML =`
    <div>
        <p style="text-decoration: solid underline; font-weight: bold;">Technical Skills</p>
        <ul>
            <li>Solid understanding of HTML, CSS, and JavaScript</li>
            <li>Basic understanding of Python and SQL</li>
            <li>Fundamental understanding of ReactJS</li>
        </ul>
        </div>
        <div>
            <p style="text-decoration: solid underline; font-weight: bold;">Skills</p>
            <ul>
                <li>Familiar with Microsoft Word, PowerPoint, and Excel</li>
                <li>Familiar with WordPress</li>
                <li>Knowledge in digital marketing and SEO</li>
            </ul>
        </div>
        <div>
            <p style="text-decoration: solid underline; font-weight: bold;">Languages</p>
            <ul>
                <li>English<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></li>
                <li>Cantonese<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></li>
                <li>Mandarin<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></li>
            </ul>
    </div>
    ` 
    container.classList.remove("container")
    container.classList.remove("education")
    container.classList.remove("profile")
    container.classList.add("skills")
})

profileClick.addEventListener("click", ()=>{
    profileClick.classList.add("nav-item")
    educationClick.classList.remove("nav-item")
    homeClick.classList.remove("nav-item")
    skillsClick.classList.remove("nav-item")
    container.innerHTML=`
        <p>Motivated graduate with strong organizational competence, problem-solving abilities, and communication skills</p>
        <br/>
        <p>Passion for programming (Web Development)</p>
        <br/>
        <p>Seeking an entry-level position to utilize my skills and contribute to the company</p>
        <br/>
        <p>Eager to learn from experienced professionals</p>
    `
    container.classList.add("profile")
    container.classList.remove("container")
    container.classList.remove("education")
    container.classList.remove("skills")
})

document.addEventListener("DOMContentLoaded",()=>{
    homeClick.classList.add("nav-item")
    container.innerHTML= `
    <div class="container-left">
                <p>HI! THIS IS <span style="color: #316881; font-size: 50px;  border-radius: 20px; padding: 5px 10px; border-style: double;">Jensen</span></p>
                <p>Fresh Graduate from City University of Hong Kong (2023)</p>
                <p style="font-size: 25px;">Majoring In Information Management</p>
                <div class="icon">
                    <a href="https://www.linkedin.com/in/fu-pan-luk-b4015a24a/"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/JensenLuk"><i class="fa-brands fa-github"></i></a>
                    <a href="mailto: jensenluk26@gmail.com"><i class="fa-regular fa-envelope"></i></a>
                </div>
            </div>
            <div class="container-right">
                <img src="./img/icon.png">
            </div>
    `
    container.classList.add("container")
})

logoClick.addEventListener("click", ()=>{
    homeClick.classList.add("nav-item")
    educationClick.classList.remove("nav-item")
    profileClick.classList.remove("nav-item")
    skillsClick.classList.remove("nav-item")
    container.innerHTML= `
    <div class="container-left">
                <p>HI! THIS IS <span style="color: #316881; font-size: 50px;  border-radius: 20px; padding: 5px 10px; border-style: double;">Jensen</span></p>
                <p>Fresh Graduate from City University of Hong Kong (2023)</p>
                <p style="font-size: 25px;">Majoring In Information Management</p>
                <div class="icon">
                    <a href="https://www.linkedin.com/in/fu-pan-luk-b4015a24a/"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/JensenLuk"><i class="fa-brands fa-github"></i></a>
                    <a href="mailto: jensenluk26@gmail.com"><i class="fa-regular fa-envelope"></i></a>
                </div>
            </div>
            <div class="container-right">
                <img src="./img/icon.png">
            </div>
    `
    container.classList.add("container")
    container.classList.remove("education")
    container.classList.remove("skills")
    container.classList.remove("profile")
})
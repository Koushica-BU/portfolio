import projects from './common/constant.js';
function populateProj() {
    let projectelem = document.getElementById("project_list");
    projectelem.innerHTML = getProjectList();
}

function getProjectList () {
    let html = '';
    projects.forEach((project)=>{
        html+=`<li class="project">
                    <div class="project__wrapper">
                    <img
                        src="${project.img}"
                        class="project__img"
                        alt="${project.title}"
                    />
                    <div class="project__desc">
                        <h3 class="project__desc--title">${project.title}</h3>
                        <h4 class="project__desc--sub-title"> ${project.skills} </h4>
                        <p class="project__desc--para">${project.desc}</p>
                        <div class="project__desc--links">
                        <a href="${project.github}" class="project__desc--link" target="_blank">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="${project.demo}" class="project__desc--link" target="_blank">
                            <i class="fa-solid fa-link"></i>
                        </a>
                        </div>
                    </div>
                    </div>
                </li>`
    })
    return html;
}

populateProj();
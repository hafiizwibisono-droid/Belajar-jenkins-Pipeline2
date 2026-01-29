function addProject() {
    const projectList = document.getElementById("project-list");
    const newProject = prompt("Masukkan nama project baru:");
    if (newProject) {
        const li = document.createElement("li");
        li.innerText = newProject;
        projectList.appendChild(li);
    }
}

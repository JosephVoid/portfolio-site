let projects = [
    {
        name: "Sebsib Office",
        link: "https://www.sebsib.com",
        description: "A website for aggregation of collected field data. Made in mind to replace foreign data collection tools, like SurveyCTO, KoboToolBox. Features includes, Visualization, Exporting to Excel, User/Role management",
        skills: "React | NodeJS | ChartJS | Express | Mongo"
    },
    {
        name: "Sebsib Collect",
        link: "https://sebsib.com/app/Sebsib-Collect.apk",
        description: "An app made for offline availabilty and response capturing. Can capture inputs like multiple choices, image, geolocation, files etc. An alternative to a popluar app called ODK Collect",
        skills: "Flutter | REST API"
    },
    {
        name: "Nearest Branch/ATM location bot",
        link: "https://github.com/JosephVoid/branch-atm-telegram-bot",
        description: "A telegram bot developed for a banks. It lets the customers know where the nearest ATM or Branch is",
        skills: "NodeJS | Telegraf | Express"
    },
]

let experiance = [
    {
        position: "Software & Integration Engineer, Dashen Bank S.C",
        duration: "Feb 2022 - Dec 2023",
        description: "Worked at a locally prestigous coporate bank as an integration and software engineer for their mobile and web channel banking",
        skills: "Used:- IBM Cloud | Spring Boot | NodeJS | C++ | PowerShell"
    },
    {
        position: "Software Engineer, MassDel Delivery",
        duration: "Sept 2021 - Feb 2022",
        description: "Worked at a delivery company as a developer for thier mobile app",
        skills: "Used:- AWS | PHP | React Native | Flutter"
    },
    {
        position: "Web Developer, Beez Social ERP (Remote)",
        duration: "Mar 2020 - Sept 2020",
        description: "Worked at an ERP provider company based in New York, US",
        skills: "Used:- Vue | NodeJS | Firebase"
    },
]

function _(id) {
    return document.getElementById(id);
}

function unselect_menu (id) {
    if (_(id).innerHTML.includes("(<em>*</em>)"))
        _(id).innerHTML = _(id).innerHTML.slice(12)
    _(id).classList.remove("menu-selected");
}

function select_menu (id) {
    let ih = _(id).innerHTML;
    if (!_(id).innerHTML.includes("(<em>*</em>)"))
        _(id).innerHTML = '(<em>*</em>)'+ih;
    _(id).classList.add("menu-selected");
}

function remove_screen (screen) {
    _(screen).style.display = 'none';
}

function show_screen (screen) {
    _(screen).style.display = 'block';
}

function change_sh_name (name) {
    _("sh-text").innerText = "./"+name+".sh"
}

function load_projects () {
    let project_section = _("projects");
    let hmtl_str = "";
    projects.forEach((project) => {
        hmtl_str += '<p class="empty-line">*</p><p class="empty-line">*</p>';
        hmtl_str += '<p class="project-title"><a href="'+project.link+'">'+project.name+'</a></p>';
        hmtl_str += '<p class="empty-line">*</p>';
        project.description.split(".").forEach((pd) => {
            hmtl_str += '<p>'+pd+'</p>'
        })
        hmtl_str += '<p class="empty-line">*</p>';
        hmtl_str += '<p>'+project.skills+'</p>';
        hmtl_str += '<p class="empty-line">*</p>';
    });
    project_section.innerHTML = project_section.innerHTML + hmtl_str;
}

function load_experiance () {
    let experiance_section = _("experiance");
    let hmtl_str = "";
    experiance.forEach((exp) => {
        hmtl_str += '<p class="empty-line">*</p><p class="empty-line">*</p>';
        hmtl_str += '<p class="project-title">'+exp.position+'</p>';
        hmtl_str += '<p>'+exp.duration+'</p>';
        hmtl_str += '<p class="empty-line">*</p>';
        exp.description.split(".").forEach((pd) => {
            hmtl_str += '<p>'+pd+'</p>'
        })
        hmtl_str += '<p class="empty-line">*</p>';
        hmtl_str += '<p>'+exp.skills+'</p>';
        hmtl_str += '<p class="empty-line">*</p>';
    });
    experiance_section.innerHTML = experiance_section.innerHTML + hmtl_str;
}
function unload_except (except) {
    if (except == "projects") {
        _("experiance").innerHTML =  '<p> _______________________________________________________</p><p class="empty-line">*</p><p> Throughout my years...</p><p>_______________________________________________________</p>';
    }
    else if (except == "experiance") {
        _("projects").innerHTML = '<p> _______________________________________________________</p><p class="empty-line">*</p><p> Things I\'ve done...</p><p>_______________________________________________________</p>';
    }
    else {
        _("experiance").innerHTML =  '<p> _______________________________________________________</p><p class="empty-line">*</p><p> Throughout my years...</p><p>_______________________________________________________</p>';
        _("projects").innerHTML = '<p> _______________________________________________________</p><p class="empty-line">*</p><p> Things I\'ve done...</p><p>_______________________________________________________</p>';
    }
}

// Click About Me Menu Item
_("about-menu").addEventListener('click', (e) => {
    unselect_menu("project-menu");
    unselect_menu("exp-menu");
    select_menu("about-menu");
    remove_screen("projects");
    remove_screen("experiance");
    show_screen("about");
    unload_except();
    change_sh_name("about-me");
})

// Click Projects Menu Item
_("project-menu").addEventListener('click', (e) => {
    unselect_menu("about-menu");
    unselect_menu("exp-menu");
    select_menu("project-menu");
    remove_screen("about");
    remove_screen("experiance");
    show_screen("projects");
    unload_except("projects");
    load_projects();
    change_sh_name("my-projects");
})

// Click Experiance Menu Item
_("exp-menu").addEventListener('click', (e) => {
    unselect_menu("about-menu");
    unselect_menu("project-menu");
    select_menu("exp-menu");
    remove_screen("projects");
    remove_screen("about");
    show_screen("experiance");
    unload_except("experiance");
    load_experiance();
    change_sh_name("my-experiance");
})

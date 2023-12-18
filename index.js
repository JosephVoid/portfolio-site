let projects = [
    {
        name: "JSON item selector NPM package",
        link: "https://www.npmjs.com/package/json-item-selector",
        description: "An npm package that simplifies the redundant task of creating logic based on a given JSON file items. Mostly useful for location selection and game/chat dialog",
        skills: "TypeScript | Github Actions CI/CD | NodeJS | Semantic Release"
    },
    {
        name: "Sebsib Office & Forms",
        link: "https://www.sebsib.com",
        description: "A website for aggregation of collected field data. Made in mind to replace foreign data collection tools, like SurveyCTO, KoboToolBox. Features includes, Visualization, Exporting to Excel, User/Role management",
        skills: "React | NodeJS | ChartJS | Express | Mongo"
    },
    {
        name: "Sebsib API",
        link: "https://github.com/SebsibOfficial",
        description: "A RESTfull API, with around 30 endpoints. It functions as part of the whole sebsib ecosystem and provides for Sebsib Office, Sebsib Forms and Sebsib Collect. Also includes Admin Panels",
        skills: "NodeJS | REST API | MongoDB | Express"
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
        description: "Worked at a locally prestigious corporate bank as an integration and software engineer for thier mobile and web channel banking",
        skills: "Used:- IBM Cloud | Spring Boot | NodeJS | C++ | PowerShell"
    },
    {
        position: "Software Engineer, MassDel Delivery",
        duration: "Sept 2021 - Feb 2022",
        description: "Worked at a delivery company as a developer for their mobile app",
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
    _("sh-text").innerText = ""
    type_it("sh-text", "./"+name+".sh", 50)
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

function type_it(id, txt, speed) {
    let type_idx = 0;
    setInterval(() => {
        if (type_idx < txt.length) {
            document.getElementById(id).innerText += txt.charAt(type_idx);
            type_idx++;
        }
        else
            clearInterval()
    }, speed);
}

function go_up_down (dir) {
    let idx = 0;
    for (const kid of _("menu-list").children) {
        if (kid.classList.contains("menu-selected") && dir == "down"){
            _("menu-list").children.item(idx+1)?.classList.add("menu-selected");
            if (_("menu-list").children.item(idx+1))
                _("menu-list").children.item(idx).classList.remove("menu-selected");
            return _("menu-list").children.item(idx+1).id;
        }
        else if (kid.classList.contains("menu-selected") && dir == "up"){
            _("menu-list").children.item(idx-1)?.classList.add("menu-selected");
            if (_("menu-list").children.item(idx-1))
                _("menu-list").children.item(idx).classList.remove("menu-selected");
            return _("menu-list").children.item(idx-1).id;
        }
        idx++;
    }
    
}

function go_to_screen (menu_id) {
    switch (menu_id) {
        case "about-menu":
            go_to_about();
            break;
        case "project-menu":
            go_to_project();
            break;
        case "exp-menu":
            go_to_experiance();
            break;
        default:
            break;
    }
    
}

function go_to_about () {
    unselect_menu("project-menu");
    unselect_menu("exp-menu");
    select_menu("about-menu");
    remove_screen("projects");
    remove_screen("experiance");
    setTimeout(() => show_screen("about"), 1200);
    unload_except();
    window.scrollTo(0, 0);
    change_sh_name("about-me");
}

function go_to_experiance () {
    unselect_menu("about-menu");
    unselect_menu("project-menu");
    select_menu("exp-menu");
    remove_screen("projects");
    remove_screen("about");
    setTimeout(() => show_screen("experiance"), 1200);
    unload_except("experiance");
    load_experiance();
    window.scrollTo(0, 0);
    change_sh_name("my-experiance");
}

function go_to_project () {
    unselect_menu("about-menu");
    unselect_menu("exp-menu");
    select_menu("project-menu");
    remove_screen("about");
    remove_screen("experiance");
    setTimeout(() => show_screen("projects"), 1200);
    unload_except("projects");
    load_projects();
    window.scrollTo(0, 0);
    change_sh_name("my-projects");
}

// Click About Me Menu Item
_("about-menu").addEventListener('click', (e) => {
    go_to_about();
})

// Click Projects Menu Item
_("project-menu").addEventListener('click', (e) => {
    go_to_project();
})

// Click Experiance Menu Item
_("exp-menu").addEventListener('click', (e) => {
    go_to_experiance();
})

var selected_menu_state = "";

window.addEventListener("load", () => {
    selected_menu_state = "about-menu";
})

var focused;
window.addEventListener("keydown", (e) => {
    if (e.key == "ArrowDown") {
        e.preventDefault();
        focused = go_up_down("down");
        console.log(focused);
    }
    else if (e.key == "ArrowUp") {
        e.preventDefault();
        focused = go_up_down("up");
        console.log(focused);
    }
    else if (e.key == "Enter") {
        console.log(focused);
        focused ? go_to_screen(focused) : null;
    }
})

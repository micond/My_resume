var bio = {
    "name": "Michal Ondrasek",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+421(0)905421825",
        "email": "michal.ondrasek@gmail.com",
        "github": "micond",
        "twitter": "Twitter#$%",
        "location": "Bratislava"
    },
    "welcomeMessage": "Too clever is dumb. - <strong>Ogden Nash</strong> ",
    "skills": [
        "super awesomeness", "hard sleeper", "Crazy?", "Guardian of the galaxy"
    ],
    "bioPic": "images/prof1.jpg",
};

bio.display = function() {
    var formatedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts:last").append(formatedmobile);
    $("#footerContacts:last").append(formatedmobile);
    var formatedemail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts:last").append(formatedemail);
    $("#footerContacts:last").append(formatedemail);
    var formatedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts:last").append(formatedgithub);
    $("#footerContacts:last").append(formatedgithub);
    var formatedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts:last").append(formatedtwitter);
    $("#footerContacts:last").append(formatedtwitter);
    var formatedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts:last").append(formatedlocation);
    $("#footerContacts:last").append(formatedlocation);
    var formatedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header:last").append(formatedbioPic);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header:last").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header:last").prepend(formattedName);
    var formattewelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header:last").append(formattewelcomeMessage);
    if (bio.skills.length > 0) {
        $("#header:last").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills:last").append(formattedSkill);
        });
    }
};
bio.display();

var work = {
    "jobs": [{
        "employer": "AT&T",
        "title": "GCS BizOps Solution Engineer",
        "location": "Bratislava",
        "dates": "Nov 1. 2016 - Present",
        "description": "Solution engineering for developers, tool design and process logic"
    }, {
        "employer": "AT&T",
        "title": "Process Engineer",
        "location": "Poprad",
        "dates": "Sep 1. 2014 - Nov 1. 2016",
        "description": "Process engineering - User/process and tooling analysis, RCA"
    }],
};

work.display = function() {
    $("#workExperience:last").append(HTMLworkStart);
    work.jobs.forEach(function(job) {
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);

    });
};
work.display();

var projects = {
    "projects": [{
        "title": "Billing",
        "dates": "Jan 1. 2016 - Jul 1. 2016",
        "description": "Billing issues within service delivery - analysis and RCA",
        "images": ["http://placehold.it/200x100", "http://placehold.it/200x100"]
    }, {
        "title": "Front-end portfolio",
        "dates": "present",
        "description": "Internal Front-end web development",
        "images": ["http://placehold.it/200x100", "http://placehold.it/200x100"]
    }],
};

projects.display = function() {
    for (var project in projects.projects) {
        if (projects.projects.hasOwnProperty(project)) {
            $("#projects:last").append(HTMLprojectStart);
            var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedprojectTitle);
            var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedprojectDates);
            var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedprojectDescription);
            if (projects.projects[project].images.length > 0) {
                projects.projects[project].images.forEach(function(image) {
                    formattedprojectImage = HTMLprojectImage.replace("%data%", image);
                    $(".project-entry:last").append(formattedprojectImage);
                });
            }
        }
    }
};

projects.display();

var education = {
    "schools": [{
        "name": "Žilinská Univerzita",
        "location": "Žilina",
        "degree": "Bachelor",
        "major": ["Telecomunication management ", "English ", "Elektrotechnology "],
        "dates": "Sep 1. 1999 - Jun 31. 2004",
        "URL": "https://www.uniza.sk/"
    }, {
        "name": "Udacity",
        "location": "Kežmarok",
        "degree": "Front-end web developer",
        "major": ["HTML ", "CSS ", "JavaScript ", "jQuery ", "NodeJS ", "Python "],
        "dates": "Oct 15. 2016 - present",
        "URL": "https://www.udacity.sk/"

    }],
    "OnlineCourses": [{
        "title": "Intro to Coputer Science",
        "School": "Udacity",
        "dates": "Jan 1. 2016 - Nov 1. 2016",
        "URL": "https://www.udacity.com/course/intro-to-computer-science--cs101"
    }],
};
education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var school in education.schools) {
        if (education.schools.hasOwnProperty(school)) {
            var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedschoolNameDegree = formattedschoolName + formattedschoolDegree;
            $(".education-entry:last").append(formattedschoolNameDegree);
            var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            $(".education-entry:last").append(formattedschoolDates);
            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(formattedschoolLocation);
            var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
            $(".education-entry:last").append(formattedschoolMajor);
        }
    }

    if (education.OnlineCourses.length > 0) {
        for (var data in education.OnlineCourses) {
            if (education.schools.hasOwnProperty(school)) {
                $(".education-entry:last").append(HTMLonlineClasses);
                var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.OnlineCourses[data].title);
                var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.OnlineCourses[data].School);
                var formattedonlineTitleSchool = (formattedonlineTitle + formattedonlineSchool);
                $(".education-entry:last").append(formattedonlineTitleSchool);
                var formattedonlineDates = HTMLonlineDates.replace("%data%", education.OnlineCourses[data].dates);
                $(".education-entry:last").append(formattedonlineDates);
                var formattedonlineURL = HTMLonlineURL.replace("%data%", education.OnlineCourses[data].URL);
                $(".education-entry:last").append(formattedonlineURL);
            }
        }
    }
};
education.display();

$("#main").append(internationalizeButton);

function inName() {
    var splitName = bio.name.split(" ");
    InternationalizeName = ((splitName[0] = (splitName[0].slice(0, 1).toUpperCase()) +
        (splitName[0].slice(1).toLowerCase())) + " " + splitName[1].toUpperCase());
    return InternationalizeName;
}

$("#mapDiv").append(googleMap);

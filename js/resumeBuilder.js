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
    "biopic": "images/prof1.jpg",
};

var data = "%data%";

bio.display = function() {
    var formatedmobile = HTMLmobile.replace([data], bio.contacts.mobile);
    var formatedemail = HTMLemail.replace(data, bio.contacts.email);
    var formatedgithub = HTMLgithub.replace(data, bio.contacts.github);
    var formatedtwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    var formatedlocation = HTMLlocation.replace(data, bio.contacts.location);
    $("#topContacts:last, #footerContacts:last").append(formatedmobile, formatedemail, formatedgithub, formatedtwitter, formatedlocation);
    var formatedbioPic = HTMLbioPic.replace(data, bio.biopic);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattewelcomeMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $("#header:last").append(formatedbioPic, formattewelcomeMessage).prepend(formattedName, formattedRole);
    if (bio.skills.length > 0) {
        $("#header:last").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            formattedSkill = HTMLskills.replace(data, skill);
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
        var formattedTitle = HTMLworkTitle.replace(data, job.title);
        var formattedEmployer = HTMLworkEmployer.replace(data, job.employer);
        var formattedDates = HTMLworkDates.replace(data, job.dates);
        var formattedLocation = HTMLworkLocation.replace(data, job.location);
        var formattedDescription = HTMLworkDescription.replace(data, job.description);
        $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedLocation, formattedDescription);

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
    for (var project = 0; project < projects.projects.length; project++) {
        // alert(project);
        if (projects.projects.hasOwnProperty(project)) {
            $("#projects:last").append(HTMLprojectStart);
            var formattedprojectTitle = HTMLprojectTitle.replace(data, projects.projects[project].title);
            var formattedprojectDates = HTMLprojectDates.replace(data, projects.projects[project].dates);
            var formattedprojectDescription = HTMLprojectDescription.replace(data, projects.projects[project].description);
            $(".project-entry:last").append(formattedprojectTitle, formattedprojectDates, formattedprojectDescription);
            var project_images = projects.projects[project].images;
            if (project_images.length > 0) {
                project_images.forEach(function(image) {
                    formattedprojectImage = HTMLprojectImage.replace(data, image);
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
        "majors": ["Telecomunication management ", "English ", "Elektrotechnology "],
        "dates": "Sep 1. 1999 - Jun 31. 2004",
        "url": "https://www.uniza.sk/"
    }, {
        "name": "Udacity",
        "location": "Kežmarok",
        "degree": "Front-end web developer",
        "majors": ["HTML ", "CSS ", "JavaScript ", "jQuery ", "NodeJS ", "Python "],
        "dates": "Oct 15. 2016 - present",
        "url": "https://www.udacity.sk/"

    }],
    "onlineCourses": [{
        "title": "Intro to Coputer Science",
        "School": "Udacity",
        "dates": "Jan 1. 2016 - Nov 1. 2016",
        "url": "https://www.udacity.com/course/intro-to-computer-science--cs101"
    }],
};
education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var school = 0; school < education.schools.length; school++) {
        if (education.schools.hasOwnProperty(school)) {
            var formattedschoolName = HTMLschoolName.replace(data, education.schools[school].name);
            var formattedschoolDegree = HTMLschoolDegree.replace(data, education.schools[school].degree);
            var formattedschoolDates = HTMLschoolDates.replace(data, education.schools[school].dates);
            var formattedschoolLocation = HTMLschoolLocation.replace(data, education.schools[school].location);
            var formattedschoolMajors = HTMLschoolMajor.replace(data, education.schools[school].majors);
            $(".education-entry:last").append(formattedschoolName + formattedschoolDegree, formattedschoolDates, formattedschoolLocation, formattedschoolMajors);
        }
    }

    if (education.onlineCourses.length > 0) {
        for (var course = 0; course < education.onlineCourses.length; course++) {
            if (education.onlineCourses.hasOwnProperty(course)) {
                var formattedonlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[course].title);
                var formattedonlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[course].School);
                var formattedonlineDates = HTMLonlineDates.replace(data, education.onlineCourses[course].dates);
                var formattedonlineURL = HTMLonlineURL.replace(data, education.onlineCourses[course].url);
                $(".education-entry:last").append(HTMLonlineClasses, formattedonlineTitle + formattedonlineSchool, formattedonlineDates, formattedonlineURL);
            }
        }
    }
};
education.display();

//Creates internationalize button at the bottom of the page. (Capitalize Surname after button is pressed).
$("#main").append(internationalizeButton);



//Add google maps with locations from (bio,education,work).
$("#mapDiv").append(googleMap);

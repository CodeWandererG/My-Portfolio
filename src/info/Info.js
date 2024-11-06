import self from "../img/self.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;

export const info = {
    firstName: "Gurjeet",
    lastName: "Singh",
    initials: "js", 
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        {
            emoji: "💼",
            text: "Software Engineer at MagicBricks"
        },
        {
            emoji: "📧",
            text: "gsingh94179@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }

    ],
    bio: "Hello! I'm Gurjeet. I'm a software engineer at MagicBricks. I studied Electronics and communications at Delhi Technological University, I enjoy to solve coding problems. ",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
    ],
    portfolio: [ 
        {
            title: "Quiz Project",
            source: "https://github.com/CodeWandererG/Quiz-project", 
            image: "http://localhost:3000/static/media/mock5.c9b5f54e8517e13fc897.png"
        },
        {
            title: "Investment Calculator Project",
            source: "https://github.com/CodeWandererG/Investment-Calculator-Project",
            image: "http://localhost:3000/static/media/mock5.c9b5f54e8517e13fc897.png"
        },
        {
            title: "Tic-Tac-Toe Game",
            source: "https://github.com/CodeWandererG/LearningProject",
            image: "http://localhost:3000/static/media/mock5.c9b5f54e8517e13fc897.png"
        },
        {
            title: "Employee Management Project",
            source: "https://github.com/CodeWandererG/employee_management_prj",
            image: "http://localhost:3000/static/media/mock5.c9b5f54e8517e13fc897.png"
        },
        {
            title: "Expense Tracker Project",
            source: "https://github.com/CodeWandererG/Expense_Tracker_Project",
            image: "http://localhost:3000/static/media/mock5.c9b5f54e8517e13fc897.png"
        },
        {
            title: "Excel Clone",
            source: "https://github.com/CodeWandererG/excel-clone-main",
            image: "http://localhost:3000/static/media/mock5.c9b5f54e8517e13fc897.png"
        },
        {
            title: "Web-Scrapping",
            source: "https://github.com/CodeWandererG/webscrapcode/tree/main",
            image: "http://localhost:3000/static/media/mock5.c9b5f54e8517e13fc897.png"
        },
        {
            title: "Pizza Website",
            source: "https://github.com/CodeWandererG/pizza-website",
            image: "http://localhost:3000/static/media/mock5.c9b5f54e8517e13fc897.png"
        }
        
    ]
}
import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Hemanth",
    lastName: "Thunder",
    initials: "HM", // the example uses first and last, but feel free to use three or more if you like.
    position: "An AI/ML Developer", // this is your job title or main role
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: "💼",
            text: "AI/ML Developer at Ailaysa"
        },
        {
            emoji: '🌎',
            text: 'Based in the India, working globally'
        },

        {
            emoji: "📧",
            text: "hemanthmurugan21@gmail.com"
        },
        {
            emoji: '☕',
            text: 'Fueled by coffee'
        },
    ],
    socials: [
 
        {
            link: "https://github.com/Hemanthkumar2112",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://huggingface.co/Hemanth-thunder",
            icon: "fa fa-huggingface",
            label: 'huggingface'
        },
        {
            link: "https://www.kaggle.com/hemanthkumar21",
            icon: "fa fa-kaggle",
            label: 'kaggle'
        }
 

    ],
    bio: `Hi, I'm Hemanth Kumar, an AI and ML developer with extensive expertise in Python, Django, and the REST framework. I have a strong passion for building scalable solutions and transforming cutting-edge AI innovations into practical business models.
            I've actively contributed to Tamil NLP and machine translation, working on various language pairs using vanilla Transformer models from the ground up. My focus is on applying AI in an agentic way, ensuring each task is optimized for efficiency and impact.`,
    skills:
        {
            proficientWith: ['AI/ML', 'Python', 'github', 'HuggingFace', 'Pytorch', 'css3', 'figma'],
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
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Tamil-Mistral-7B",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://huggingface.co/Hemanth-thunder/Tamil-Mistral-7B-Instruct-v0.1", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Gemma2-2B-Translation-Agent",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/Hemanthkumar2112/Gemma2-2B-Translation-Agent",
            image: mock2
        },
        {
            title: "English-Tamil-Translation",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Tamil Spell Checker",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        // {
        //     title: "Project 5",
        //     // live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}
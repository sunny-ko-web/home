// Navigation Bar SECTION
const navBar = {
  show: false,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sunny",
  middleName: " & ",
  lastName: "Anderson",
  message: " If I say happy Valentine's day, that means I can't wait for the next Valentine's day with you. If I say happy 8 months, that means I want more months and years of happiness with you - Anderson Lee ",
  icons: [
    // {
    //   image: "fa-github",
    //   url: "https://github.com/hashirshoaeb",
    // },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/hashirshoaeb",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/hashirshoaeb/",
    // },
    // {
    //   image: "fa-linkedin",
    //   url: "https://www.linkedin.com/in/hashirshoaeb/",
    // },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: false,
  heading: "About Me",
  imageLink: require("../editable-stuff/hashirshoaeb.png"),
  imageSize: 375,
  message:
    "My name is Hashir Shoaib. I’m a graduate of 2020 from National University of Sciences and Technology at Islamabad with a degree in Computer Engineering. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  resume: false,
};

// Stories Section
const stories = []

const headings = [
  "This is her!",
  "Tainan Part 1",
  "Tainan Part 2",
  "Bellevue",
  "And she loves boba!",
  "Vancouver Wa ha ha ha",
  "Now!",
  "Next..."
];
const messages = [
  "This is Sunny, the wonderful girlfriend that I fortunately met. We started our journey on Jun. 16th last year. Although it was online and definitely a difficult start, we still made it through and it's been almost 8 months now!!! I just want to say thank you for bearing with me for this long and thank you for all the supports that you gave me when I was really frustrated or sick. Although I was not patient sometimes, I really want to let you know that I love you no matter what. I'm glad to give you the first ever Valentine's day with this special document of us! If you don't like it, too bad it's permanent hehe. Let's review what memories we have created through in these 8 months!",
  "During the summer, you came to Tainan, the place that I had always been telling you about. Thank you for coming and spending those three days with meeee. Although I was only able to spend one day in Taipei with you and changed the dates all the time, you still came to find me in Tainan! It was really cool to tour you around to eat 牛肉湯 twice and go to the museum on the first day! Although we didn't spend much time alone, I still felt satisfied when I saw your smile during the trip. I was imagining more days like that to come and maybe we can go somewhere else.",
  "Why is there Tainan Part2? Because I love this picture and the day when we were playing cards in the car and waiting for the sunset there. Remember the day when we originally planned to buy 伴手禮 and we ended up buying 麥芽餅 and went to the weird salt production place to get ice-cream and wait for sunset. We were walking around, playing cards in the car, complaining about how hot it was, and finally went to 嘉義 to eat your last dinner there. Everything was crazy that day. ",
  "Then we went to bellevue to eat the delicious Taiwanese food. We walked for nearly 25 minutes from the bus stop to get there. So full because we ordered more than 5 meals I think. But it was soooooooo good. I really want to go there again! Would you come with me again and walk for 25 more minutes again? And then! We got boba from MeetFresh, which you think is the best MeetFresh you have ever had. I'm so proud of that hehe. I'm sorry that was the only time that you felt like we are dating. I want to say sorry I can't be close to what you like. I am trying to be better but I am becoming busier and busier as I told you last week. I hope that doesn't stop you from loving meeee....",
  "Of course, Sunny loves boba. I am glad that you are addicted to it because I can always see your smile whenever you have boba. I'm sorry to ruin your joy for boba a couple weeks ago. I hope you are still excited at it!!! FYI, I'll keep getting boba for us no matter what hehe. Let's explore the best boba in Seattle and Taiwan. I can't wait to run a boba marathon date.",
  "Here it comes the winter break. It was crazy that we went out nearly every day for near two weeks. We spent three solid days in Vancouver with really unpleasant weather and wet shoes. But what we got was a bunch of good snacks and milk tea!!! And the Japanese BBQ and the food truck were really good. I want to go back there with you again and get the same sandwich from the food truck and have it somewhere around beatiful Spring Vancouver. I hope you never forget about this memory because you better not!!!",
  "Whaaaaaaaaaaaaat! It's been 8 months. I guess we both change in some ways and I have more thoughts about us now. I am really thankful that you are fine with us figuring a way to be together instead of dumping me away when I don't have time for you. Thank you for bearing with me, a nerd and a not romantic guy. This is me, and I am glad that you still like it hehe. I will keep being me while not letting you hate me okay and loving no matter what.",
  "What's next? I think we'll keep creating more memories. I'm down to go with the Sunnyside Ave N hehe. I can't wait to have more updates on here. Happy happy happy Valentine's day! Also also also, you have a 鴨鴨 coming! The rule is: (1) You can't throw it away (2) You can't return it back to me no matter what even when you are mad. (3) You should treat this 鴨鴨 as if you are treating me."
];
const imageLinks = [
  require("../editable-stuff/you.png"),
  require("../editable-stuff/tainan.png"),
  require("../editable-stuff/tainanbeach.png"),
  require("../editable-stuff/bellevue.png"),
  require("../editable-stuff/boba.png"),
  require("../editable-stuff/vancouver.png"),
  require("../editable-stuff/recent.png"),
  require("../editable-stuff/next.png")
];

const imageRatios = [
  1.25,
  1.25,
  1.25,
  1.25,
  1.25,
  0.85,
  0.85,
  1.25
];

const imageSize = 350

let leftRight = true;

for (let i = 0; i < headings.length; i++) {
  stories.push({
    show: true,
    heading: headings[i],
    imageLink: imageLinks[i],
    imageSize: imageSize,
    imageRatio: imageRatios[i],
    message: messages[i],
    pic_left: leftRight,
    pic_right: !leftRight,
  });
  leftRight = !leftRight;
}

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/hashirshoaeb.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/hashirshoaeb.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: false,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "hashirshoaeb@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: true,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, stories };

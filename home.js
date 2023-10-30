//Code wrote By:Devonna Howell
//This project is intended for my portfolio. It isn't intended to be used for a movie website. 
//:) Happy coding 

/* add intro to page if preferred  
window.addEventListener('load',(event)=>{
    let body = document.body;
    let mainBody = body.innerHTML;
    body.innerHTML = <this can be an image or gif 
        setTimeout(() => {
            document.body.innerHTML = mainBody;
            console.log('6secs')
          }, "5000");
});
*/
var directedLink = {
    link: ''
};
let likes = false;
//database for front page components
let flockGainProject = {
    title: 'Flock Gain',
    description: "A placeholder text is a clue, suggestion, or brief description that describes the expected value of an input field. Labels, as shown below, are a form of identification for a text field. They describe the purpose and/or function of form elements.",
    basedon: 'Recent Projects',
    headerImage: 'https://lh6.googleusercontent.com/0mVYz6z5FQZu54zEirRP3xEGEpmWnQVDXHwH-Iku7rwcgxxlp0J7Z7L2IrZtmPtqSoD06vfmnHehyS7WXbAumzb2ZNZU2Hjcn6ZP3R0o2_wVrqbvLcI3mog4IWbwOzgMDyBIPJpX'
};
let project2 = {
    title: 'Project Two',
    description: "A placeholder text is a clue, suggestion, or brief description that describes the expected value of an input field. Labels, as shown below, are a form of identification for a text field. They describe the purpose and/or function of form elements.",
    basedon: 'Recent Projects',
    headerImage:  'https://lh6.googleusercontent.com/0mVYz6z5FQZu54zEirRP3xEGEpmWnQVDXHwH-Iku7rwcgxxlp0J7Z7L2IrZtmPtqSoD06vfmnHehyS7WXbAumzb2ZNZU2Hjcn6ZP3R0o2_wVrqbvLcI3mog4IWbwOzgMDyBIPJpX'
};
let project3 = {
    title: 'Project Three',
    description: "A placeholder text is a clue, suggestion, or brief description that describes the expected value of an input field. Labels, as shown below, are a form of identification for a text field. They describe the purpose and/or function of form elements.",
    basedon: 'Recent Projects',
    headerImage:  'https://lh6.googleusercontent.com/0mVYz6z5FQZu54zEirRP3xEGEpmWnQVDXHwH-Iku7rwcgxxlp0J7Z7L2IrZtmPtqSoD06vfmnHehyS7WXbAumzb2ZNZU2Hjcn6ZP3R0o2_wVrqbvLcI3mog4IWbwOzgMDyBIPJpX'
};
let project4 = {
    title:'Project Four',
    description: "A placeholder text is a clue, suggestion, or brief description that describes the expected value of an input field. Labels, as shown below, are a form of identification for a text field. They describe the purpose and/or function of form elements.",
    basedon: 'Recent Projects',
    headerImage:  'https://lh6.googleusercontent.com/0mVYz6z5FQZu54zEirRP3xEGEpmWnQVDXHwH-Iku7rwcgxxlp0J7Z7L2IrZtmPtqSoD06vfmnHehyS7WXbAumzb2ZNZU2Hjcn6ZP3R0o2_wVrqbvLcI3mog4IWbwOzgMDyBIPJpX'
};
let project5 = {
    title: 'Project Five',
    description: "Project description goes here. The project description should include a summary of the project and it's abilities. What makes it unique and how does it make a difference in the world.",
    basedon: 'Recent Projects',
    headerImage:  'https://lh6.googleusercontent.com/0mVYz6z5FQZu54zEirRP3xEGEpmWnQVDXHwH-Iku7rwcgxxlp0J7Z7L2IrZtmPtqSoD06vfmnHehyS7WXbAumzb2ZNZU2Hjcn6ZP3R0o2_wVrqbvLcI3mog4IWbwOzgMDyBIPJpX'
};
let frontEnd = {
    title: 'Front End',
    description: "A placeholder text is a clue, suggestion, or brief description that describes the expected value of an input field. Labels, as shown below, are a form of identification for a text field. They describe the purpose and/or function of form elements.",
    basedon: 'My Front End Skills',
    headerImage:  'https://lh6.googleusercontent.com/0mVYz6z5FQZu54zEirRP3xEGEpmWnQVDXHwH-Iku7rwcgxxlp0J7Z7L2IrZtmPtqSoD06vfmnHehyS7WXbAumzb2ZNZU2Hjcn6ZP3R0o2_wVrqbvLcI3mog4IWbwOzgMDyBIPJpX'
};
let backEnd = {
    title: 'Back End',
    description: "A placeholder text is a clue, suggestion, or brief description that describes the expected value of an input field. Labels, as shown below, are a form of identification for a text field. They describe the purpose and/or function of form elements.",
    basedon: 'My Back End Skills',
    headerImage:  'https://lh6.googleusercontent.com/0mVYz6z5FQZu54zEirRP3xEGEpmWnQVDXHwH-Iku7rwcgxxlp0J7Z7L2IrZtmPtqSoD06vfmnHehyS7WXbAumzb2ZNZU2Hjcn6ZP3R0o2_wVrqbvLcI3mog4IWbwOzgMDyBIPJpX'
};
let fullStack = {
    title: 'Full Stack',
    description: "A placeholder text is a clue, suggestion, or brief description that describes the expected value of an input field. Labels, as shown below, are a form of identification for a text field. They describe the purpose and/or function of form elements.",
    basedon: 'My Full Stack Skills',
    headerImage:  'https://lh6.googleusercontent.com/0mVYz6z5FQZu54zEirRP3xEGEpmWnQVDXHwH-Iku7rwcgxxlp0J7Z7L2IrZtmPtqSoD06vfmnHehyS7WXbAumzb2ZNZU2Hjcn6ZP3R0o2_wVrqbvLcI3mog4IWbwOzgMDyBIPJpX'
};
let algorithms = {
    title: 'Algorithms',
    description: "A placeholder text is a clue, suggestion, or brief description that describes the expected value of an input field. Labels, as shown below, are a form of identification for a text field. They describe the purpose and/or function of form elements.",
    basedon: 'My Algorithm Skills',
    headerImage:  'https://lh6.googleusercontent.com/0mVYz6z5FQZu54zEirRP3xEGEpmWnQVDXHwH-Iku7rwcgxxlp0J7Z7L2IrZtmPtqSoD06vfmnHehyS7WXbAumzb2ZNZU2Hjcn6ZP3R0o2_wVrqbvLcI3mog4IWbwOzgMDyBIPJpX'
};
let scientificComputing  = {
    title: 'Scientic Computing',
    description: "A placeholder text is a clue, suggestion, or brief description that describes the expected value of an input field. Labels, as shown below, are a form of identification for a text field. They describe the purpose and/or function of form elements.",
    basedon: 'My Scientific Computing Skills',
    headerImage:  'https://lh6.googleusercontent.com/0mVYz6z5FQZu54zEirRP3xEGEpmWnQVDXHwH-Iku7rwcgxxlp0J7Z7L2IrZtmPtqSoD06vfmnHehyS7WXbAumzb2ZNZU2Hjcn6ZP3R0o2_wVrqbvLcI3mog4IWbwOzgMDyBIPJpX'
};
let college = {
    title: 'College',
    description: "A placeholder text is a clue, suggestion, or brief description that describes the expected value of an input field. Labels, as shown below, are a form of identification for a text field. They describe the purpose and/or function of form elements." ,
    basedon: 'My Education',
    headerImage:  'https://lh6.googleusercontent.com/0mVYz6z5FQZu54zEirRP3xEGEpmWnQVDXHwH-Iku7rwcgxxlp0J7Z7L2IrZtmPtqSoD06vfmnHehyS7WXbAumzb2ZNZU2Hjcn6ZP3R0o2_wVrqbvLcI3mog4IWbwOzgMDyBIPJpX'
};
let cert1 = {
    title: 'Web Design Cert',
    description: "A placeholder text is a clue, suggestion, or brief description that describes the expected value of an input field. Labels, as shown below, are a form of identification for a text field. They describe the purpose and/or function of form elements.",
    basedon: 'My Education',
    headerImage:  'https://lh6.googleusercontent.com/0mVYz6z5FQZu54zEirRP3xEGEpmWnQVDXHwH-Iku7rwcgxxlp0J7Z7L2IrZtmPtqSoD06vfmnHehyS7WXbAumzb2ZNZU2Hjcn6ZP3R0o2_wVrqbvLcI3mog4IWbwOzgMDyBIPJpX'
};
let cert2 = {
    title: 'JavaScript Cert',
    description: "A placeholder text is a clue, suggestion, or brief description that describes the expected value of an input field. Labels, as shown below, are a form of identification for a text field. They describe the purpose and/or function of form elements.",
    basedon: 'My Education',
    headerImage:  'https://lh6.googleusercontent.com/0mVYz6z5FQZu54zEirRP3xEGEpmWnQVDXHwH-Iku7rwcgxxlp0J7Z7L2IrZtmPtqSoD06vfmnHehyS7WXbAumzb2ZNZU2Hjcn6ZP3R0o2_wVrqbvLcI3mog4IWbwOzgMDyBIPJpX'
};
let cert3 ={
    title: 'Data Analyst Cert',
    description: "A placeholder text is a clue, suggestion, or brief description that describes the expected value of an input field. Labels, as shown below, are a form of identification for a text field. They describe the purpose and/or function of form elements.",
    basedon: 'My Education',
    headerImage:  'https://lh6.googleusercontent.com/0mVYz6z5FQZu54zEirRP3xEGEpmWnQVDXHwH-Iku7rwcgxxlp0J7Z7L2IrZtmPtqSoD06vfmnHehyS7WXbAumzb2ZNZU2Hjcn6ZP3R0o2_wVrqbvLcI3mog4IWbwOzgMDyBIPJpX'
};
let cert4 = {
    title: 'Back End Cert',
    description: "A placeholder text is a clue, suggestion, or brief description that describes the expected value of an input field. Labels, as shown below, are a form of identification for a text field. They describe the purpose and/or function of form elements.",
    basedon: 'My Education',
    headerImage:  'https://lh6.googleusercontent.com/0mVYz6z5FQZu54zEirRP3xEGEpmWnQVDXHwH-Iku7rwcgxxlp0J7Z7L2IrZtmPtqSoD06vfmnHehyS7WXbAumzb2ZNZU2Hjcn6ZP3R0o2_wVrqbvLcI3mog4IWbwOzgMDyBIPJpX'
};
//event listeners for front page navigation links
document.getElementById('pageSkills').addEventListener('click', () =>{
    localStorage.removeItem("links");
    directedLink.link = 'pageSkills';
    localStorage.setItem('links', JSON.stringify(directedLink.link));
    location.href = 'pages.html';
});
document.getElementById('pageEducation').addEventListener('click', ()=>{
    localStorage.removeItem("links");
    directedLink.link = 'pageEducation';
    localStorage.setItem('links', JSON.stringify(directedLink.link));
    location.href = 'pages.html';
}); 
document.getElementById('pageResume').addEventListener('click', ()=>{
    localStorage.removeItem("links");
    directedLink.link = 'pageResume';
    localStorage.setItem('links', JSON.stringify(directedLink.link));
    location.href = 'pages.html';
});
document.getElementById('pageContact').addEventListener('click', ()=>{
    localStorage.removeItem("links");
    directedLink.link = 'pageContact';
    localStorage.setItem('links', JSON.stringify(directedLink.link));
    location.href = 'pages.html';
});
// event listener for navigation hover effect
document.getElementById('navigation').addEventListener('mouseover',()=>{
    let changeCss = document.createElement('style');
    document.head.appendChild(changeCss);
    let moveNavigation = document.querySelector('style');
    moveNavigation.innerHTML = '.nav-links{margin:auto 20%; font-size: 20px;}'
    document.querySelector('.gg-home').classList.remove('gg-home');
    document.getElementById('home').innerHTML = 'Home';
    document.querySelector('.gg-database').classList.remove('gg-database');
    document.getElementById('pageSkills').innerHTML = 'Skills';
    document.querySelector('.gg-organisation').classList.remove('gg-organisation');
    document.getElementById('pageEducation').innerHTML = 'Education';
    document.querySelector('.gg-briefcase').classList.remove('gg-briefcase');
    document.getElementById('pageResume').innerHTML = 'Resume';
    document.querySelector('.gg-mail').classList.remove('gg-mail');
    document.getElementById('pageContact').innerHTML = 'Contact';
});
document.getElementById('navigation').addEventListener('mouseout',()=>{
    let moveNavigation = document.querySelector('style');
    moveNavigation.remove();
    document.getElementById('home').classList.add('gg-home');
    document.getElementById('home').innerHTML = '';
    document.getElementById('pageSkills').classList.add('gg-database');
    document.getElementById('pageSkills').innerHTML = '';
    document.getElementById('pageEducation').classList.add('gg-organisation');
    document.getElementById('pageEducation').innerHTML = '';
    document.getElementById('pageResume').classList.add('gg-briefcase');
    document.getElementById('pageResume').innerHTML = '';
    document.getElementById('pageContact').classList.add('gg-mail');
    document.getElementById('pageContact').innerHTML = '';
});
//event listener for navigation links hover color change
document.getElementById('home').addEventListener('mouseover',()=>{
    document.getElementById("home").style.color = "red";
});
document.getElementById('navigation').addEventListener('mouseout',()=>{
    document.getElementById("home").style.color = "white";
});

document.getElementById('pageSkills').addEventListener('mouseover',()=>{
    document.getElementById("pageSkills").style.color = "red";
});
document.getElementById('navigation').addEventListener('mouseout',()=>{
    document.getElementById("pageSkills").style.color = "white";
});
document.getElementById('pageEducation').addEventListener('mouseover',()=>{
    document.getElementById("pageEducation").style.color = "red";
});
document.getElementById('navigation').addEventListener('mouseout',()=>{
    document.getElementById("pageEducation").style.color = "white";
});
document.getElementById('pageResume').addEventListener('mouseover',()=>{
    document.getElementById("pageResume").style.color = "red";
});
document.getElementById('navigation').addEventListener('mouseout',()=>{
    document.getElementById("pageResume").style.color = "white";
});
document.getElementById('pageContact').addEventListener('mouseover',()=>{
    document.getElementById("pageContact").style.color = "red";
});
document.getElementById('navigation').addEventListener('mouseout',()=>{
    document.getElementById("pageContact").style.color = "white";
});
// front page thumbs up like event listener & functions
document.querySelector('.bi-hand-thumbs-up').addEventListener('click', ()=>{
     if(!likes){
    document.querySelector('.bi-hand-thumbs-up').classList.remove('bi-hand-thumbs-up');//document.querySelector('style');
    document.querySelector('.thumbs-up').classList.add('bi-hand-thumbs-up-fill');
    let liked = document.getElementById('liked')
    let amountOfLikes = liked.innerHTML ;
    amountOfLikes++;
    liked.innerHTML = amountOfLikes;
    likes = true;
    }
    else{
        document.querySelector('.bi-hand-thumbs-up-fill').classList.remove('bi-hand-thumbs-up-fill');//document.querySelector('style');
        document.querySelector('.thumbs-up').classList.add('bi-hand-thumbs-up');
        let liked = document.getElementById('liked')
        let amountOfLikes = liked.innerHTML ;
        amountOfLikes--;
        liked.innerHTML = amountOfLikes;
        likes = false;
    }   
})

// function to change header element for each component  
function selected(project){
    let title = document.querySelector('.title');
    title.innerHTML = `${project.title}`;
    let description = document.querySelector('.description');
    description.innerHTML = `${project.description}`;
    let basedOn = document.querySelector('.based-on');
    basedOn.innerHTML= `Based on your intrest in: <span>${project.basedon}</span>`;
    let addCss = document.createElement('style');
    document.head.appendChild(addCss);
    let headerBackground = document.querySelector('style');
    headerBackground.innerHTML = `header{background-image: linear-gradient(to left, rgba(255,0,0,0), rgb(8, 0, 0) 70%), url("${project.headerImage}")}`;
    window.scrollTo(0, 0);
};
//Code wrote By:Devonna Howell

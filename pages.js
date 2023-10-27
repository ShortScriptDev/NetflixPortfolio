let resume = {
    pageImg: 'https://i.ibb.co/s2dDrB6/F1697-C29-6969-493-C-8885-0-E5-A8-BA9121-C.jpg',
    aboutImg: 'https://i.ibb.co/RQQTwG7/IMG-0498.png',
    pageHeader: 'The Details',
    pageDescription: 'Git ~ Wireframing ~ DNS management ~ Testing, debugging ~ Front-end frameworks ~ Responsive design ~ User experience ~ User interface ~ Document object model ~ APIs ~ Jest ~ Enzyme HTML ~ CSS ~ JavaScript ~ jQuery ~ PHP ~ SQL ~ Ruby ~ CSS ~ C++ ~ Java ~ Python ~ HTML5',
    otherSkills: 'Soft Skills: Communication, Adaptability, Visual thinking, Collaboration, Creativity, Enthusiasm, Leadership, Negotiation, Patience, Time management.'
};
let contact = {
    pageImg: 'https://i.ibb.co/s2dDrB6/F1697-C29-6969-493-C-8885-0-E5-A8-BA9121-C.jpg',
    aboutImg: 'https://i.ibb.co/q7SzHSy/IMG-0499.png',
    pageHeader: 'Contact Me',
    pageDescription: '<form><inputs/></form>', //add a form
    otherSkills: ''
};
let education = {
    pageImg: 'https://i.ibb.co/D9cm1VX/75-C9-ACFC-4-D32-4-C95-8-BE1-E6761472-D2-FA.jpg',
    aboutImg: 'https://i.ibb.co/Kyz3ZVL/IMG-0500.png',
    pageHeader: 'Degree type: Bachelors in Computer Science <br> School name: Central State Univeristy. <br>Location: Wilberforce, Ohio. <br> Achieved Honors & Deans List',
    pageDescription:,
    otherSkills: ''
};
let skills = {
    pageImg: 'https://i.ibb.co/D9cm1VX/75-C9-ACFC-4-D32-4-C95-8-BE1-E6761472-D2-FA.jpg',
    aboutImg: 'https://i.ibb.co/yRs3NpH/IMG-0497.png',
    pageHeader: 'Developer Skills',
    pageDescription: 'Git ~ Wireframing ~ DNS management ~ Testing, debugging ~ Front-end frameworks ~ Responsive design ~ User experience ~ User interface ~ Document object model ~ APIs ~ Jest ~ Enzyme HTML ~ CSS ~ JavaScript ~ jQuery ~ PHP ~ SQL ~ Ruby ~ CSS ~ C++ ~ Java ~ Python ~ HTML5',
    otherSkills: '<li><span class="skill-title">Soft Skills: </span><span>Communication, Adaptability, Visual thinking, Collaboration, Creativity, Enthusiasm, Leadership, Negotiation, Patience, Time management.</span> </li><li><span class="skill-title">Type of Development: </span><span>Full-stack, Back-end, Front-end & Web design</span></li>'
};

document.getElementById('pageEducation').addEventListener('click', ()=>{
    addId('pageEducation');
});
document.getElementById('pageResume').addEventListener('click', ()=>{
    addId('pageResume');
});
document.getElementById('pageContact').addEventListener('click', ()=>{
    addId('pageContact');
});
document.getElementById('pageSkills').addEventListener('click', ()=>{
    addId('pageSkills');
});
function navSelector(){
    document.getElementById('selected').removeAttribute('id');
};
function addId(clicked){
    document.querySelector('.selected').classList.remove('selected');
    if (clicked === 'pageEducation'){
        document.getElementById('pageEducation').classList.add('selected');
        //placeholder for pageImg
    }
    else if(clicked === 'pageResume'){
        document.getElementById('pageResume').classList.add('selected');
        let pageImg ='https://i.ibb.co/Tv9gtdC/E258-B917-FA6-F-4-F3-C-A28-D-34-C31-C3-F5532.jpg';
    }else if(clicked === 'pageContact'){
        document.getElementById('pageContact').classList.add('selected');
    }else if(clicked === 'pageSkills'){
        document.getElementById('pageSkills').classList.add('selected');
    }
}
function pageData(){

}


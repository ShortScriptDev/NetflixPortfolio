let directedLink = JSON.parse(localStorage.getItem('links')) || {
    link: ''
};
let resume = {
    pageImg: 'https://i.ibb.co/Tv9gtdC/E258-B917-FA6-F-4-F3-C-A28-D-34-C31-C3-F5532.jpg',
    aboutImg: 'https://i.ibb.co/Kyz3ZVL/IMG-0500.png',
    pageHeader: 'Resume',
    pageDescription: 'Git ~ Wireframing ~ DNS management ~ Testing, debugging ~ Front-end frameworks ~ Responsive design ~ User experience ~ User interface ~ Document object model ~ APIs ~ Jest ~ Enzyme HTML ~ CSS ~ JavaScript ~ jQuery ~ PHP ~ SQL ~ Ruby ~ CSS ~ C++ ~ Java ~ Python ~ HTML5',
    otherSkills: '<li><span class="skill-title">Soft Skills: </span><span>Communication, Adaptability, Visual thinking, Collaboration, Creativity, Enthusiasm, Leadership, Negotiation, Patience, Time management.</span> </li><li><span class="skill-title">Type of Development: </span><span>Full-stack, Back-end, Front-end & Web design</span></li>'
};
let contact = {
    pageImg: 'https://i.ibb.co/s2dDrB6/F1697-C29-6969-493-C-8885-0-E5-A8-BA9121-C.jpg',
    aboutImg: 'https://i.ibb.co/RQQTwG7/IMG-0498.png',
    pageHeader: 'Contact Me',
    pageDescription: 'Degree type: Bachelors in Computer Science <br> School name: Central State Univeristy. <br>Location: Wilberforce, Ohio. <br> Achieved Honors & Deans List', //add a form
    otherSkills: '<li><span class="skill-title">Soft Skills: </span><span>Communication, Adaptability, Visual thinking, Collaboration, Creativity, Enthusiasm, Leadership, Negotiation, Patience, Time management.</span> </li><li><span class="skill-title">Type of Development: </span><span>Full-stack, Back-end, Front-end & Web design</span></li>'
};
let education = {
    pageImg: 'https://i.ibb.co/D9cm1VX/75-C9-ACFC-4-D32-4-C95-8-BE1-E6761472-D2-FA.jpg',
    aboutImg: 'https://i.ibb.co/q7SzHSy/IMG-0499.png',
    pageHeader: 'Education',
    pageDescription:'Degree type: Bachelors in Computer Science <br> School name: Central State Univeristy. <br>Location: Wilberforce, Ohio. <br> Achieved Honors & Deans List',
    otherSkills: '<li><span class="skill-title">Soft Skills: </span><span>Communication, Adaptability, Visual thinking, Collaboration, Creativity, Enthusiasm, Leadership, Negotiation, Patience, Time management.</span> </li><li><span class="skill-title">Type of Development: </span><span>Full-stack, Back-end, Front-end & Web design</span></li>'
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
function addId(clicked){
    document.querySelector('.selected').classList.remove('selected');
    if (clicked === 'pageEducation'){
        document.getElementById('pageEducation').classList.add('selected');
        pageData(education); 
        //placeholder for pageImg
    }
    else if(clicked === 'pageResume'){
        document.getElementById('pageResume').classList.add('selected');
        pageData(resume);
    }else if(clicked === 'pageContact'){
        document.getElementById('pageContact').classList.add('selected');
        pageData(contact);
    }else if(clicked === 'pageSkills'){
        document.getElementById('pageSkills').classList.add('selected');
        pageData(skills);
    }
}
function pageData(pages){
    let addCss = document.createElement('style');
    document.head.appendChild(addCss);
    let pageMainImage = document.querySelector('style');
    pageMainImage.innerHTML = `.page-imgs{background-image: linear-gradient(to right, rgba(255,0,0,0) 60%, rgb(0, 0, 0) 100%), url('${pages.pageImg}')}`;
    document.querySelector('.about-img').src = `${pages.aboutImg}`;
    document.querySelector('.page-header').innerHTML = `${pages.pageHeader}`;
   let see = document.querySelector('.page-description').innerHTML = `${pages.pageDescription}`;
   let see1 = document.querySelector('.other-skills').innerHTML = `${pages.otherSkills}`;
}
document.onload = addId(directedLink);


const searchicon= document.querySelector('.search');
const ulhide= document.querySelector('ul');
const searchinput= document.querySelector('.search-input');


const usericon=  document.querySelector('.usericon');
const question=  document.querySelector('.fa-question');
const logo=  document.querySelector('.logo');




searchicon.addEventListener('click',()=>{
    ulhide.classList.toggle('hide');
    searchinput.classList.toggle('search-inputblock');
    usericon.classList.toggle('alldisplaynone')
    question.classList.toggle('alldisplaynone')
    logo.classList.toggle('alldisplaynone')

})


//btn Click and go to playstire pages 

const applinks=[
    'https://play.google.com/store/apps/details?id=com.cookingcity.chef.kitchen.craze.fever&pcampaignid=merch-FCC-gpg-dynastylaunch-cooking-city-websky',
    'https://play.google.com/store/apps/details?id=com.devsisters.cba',
   ' https://play.google.com/store/apps/details?id=com.gameloft.anmp.disney.speedstorm'
]

const install=  document.querySelectorAll('.Installbtn button');

applinks.forEach((data,i)=>{
    [...install][i].addEventListener('click',()=>{
       console.log(window.location.href=data) 
    })
})





//automatically year Change function------
const year= document.querySelector(".year");
getFullYear(year)
function getFullYear(year){
    year.innerText=new Date().getFullYear()
}


//mouse effect  code---------

const eff=document.querySelector(".ef-1")

const efs=document.querySelector(".ef-2")

const eft=document.querySelector(".ef-3")

document.body.addEventListener('mousemove',(e)=>{
    eff.style.top=`${e.y}px`
    eff.style.left=`${e.x}px`
    efs.style.top=`${e.y}px`
    efs.style.left=`${e.x}px`
    eft.style.top=`${e.y}px`
    eft.style.left=`${e.x}px`
})
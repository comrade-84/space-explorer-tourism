const roleEl = document.querySelector('.role');
const nameEl = document.querySelector('.name');
const nameInfoEl = document.querySelector('.name-info');
const creImg = document.querySelector('.crewImg');
const crewTabs = document.querySelectorAll('.tab');
// console.log(crewTabs);
const crewOneEl = document.querySelector('#crew-1');
const crewTwoEl = document.querySelector('#crew-2');
const crewThreeEl = document.querySelector('#crew-3');
const crewFourEl = document.querySelector('#crew-4');



// const homeEl = document.querySelector('.home');
// const destinationEl = document.querySelector('.destination');
// const crewEl = document.querySelector('.crew');
// const technologyEl = document.querySelector('.tech');



// //  function for loading spinner and redirection
// const addLoadingAndRedirect = (element, targetUrl) => {
    
//     element.addEventListener('click', function (e) {
//         e.preventDefault();
//         element.innerHTML = `
//         <div class="d-flex justify-content-center">
//             <div class="spinner-border bg-light " role="status">
//                 <span class="visually-hidden">Loading...</span>
//             </div>
//         </div>
//         `;
//         setTimeout(() => {
//             window.location.href = targetUrl;
//         }, 1000); 
//     });
// };




// // Apply the function to each element
// addLoadingAndRedirect(homeEl, '/index.html');
// addLoadingAndRedirect(destinationEl, '/destination.html');
// addLoadingAndRedirect(crewEl, '/crew.html');
// addLoadingAndRedirect(technologyEl, '/tech.html');





const getData = async function () {
    const response = await fetch('/data.json');
    datas = await response.json();
    const crewData = datas.crew;
    // console.log(crewData);
crewTabs.forEach(crewTab => {
    crewTab.addEventListener('click', function() {
        crewTabs.forEach(tabItem => {
            tabItem.classList.remove('active');
        });
        crewTab.classList.add('active')
    })
});

roleEl.innerHTML = crewData[0].role;
nameEl.innerHTML = crewData[0].name;
nameInfoEl.innerHTML = crewData[0].bio;
creImg.src = `${crewData[0].images.png}`;

const switchDatas = function(index){
    roleEl.innerHTML = crewData[index].role;
      roleEl.classList.remove('animate__backInLeft', 'animate__animated');
    void roleEl.offsetWidth;
    roleEl.classList.add('animate__backInLeft', 'animate__animated');




    nameEl.innerHTML = crewData[index].name;
    nameEl.classList.remove('animate__backInLeft', 'animate__animated');
    void nameEl.offsetWidth;
    nameEl.classList.add('animate__backInLeft', 'animate__animated');





    nameInfoEl.innerHTML = crewData[index].bio;
nameInfoEl.classList.remove('animate__backInLeft', 'animate__animated');
    void nameInfoEl.offsetWidth;
    nameInfoEl.classList.add('animate__backInLeft', 'animate__animated');



    creImg.src = `${crewData[index].images.png}`;

    creImg.classList.remove('animate__backInRight', 'animate__animated');
    void creImg.offsetWidth;
    creImg.classList.add('animate__backInRight', 'animate__animated');
}

crewOneEl.addEventListener('click', () => switchDatas(0));
crewTwoEl.addEventListener('click', () => switchDatas(1));
crewThreeEl.addEventListener('click', () => switchDatas(2));
crewFourEl.addEventListener('click', () => switchDatas(3));


}

getData();


const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
const closeIcon = document.querySelector('.icon-close');
menuIcon.addEventListener('click', () => {
    navLinks.classList.add('active'); 
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
});
closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('active'); 
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
})
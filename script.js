const desImg = document.querySelector('.destination-img');
console.log(desImg);



const homeEl = document.querySelector('.home');
const destinationEl = document.querySelector('.destination');
const crewEl = document.querySelector('.crew');
const technologyEl = document.querySelector('.tech');



//  function for loading spinner and redirection
const addLoadingAndRedirect = (element, targetUrl) => {
    
    element.addEventListener('click', function (e) {
        e.preventDefault();
        element.innerHTML = `
        <div class="d-flex justify-content-center">
            <div class="spinner-border bg-light" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        `;
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 1000); 
    });
};




// Apply the function to each element
addLoadingAndRedirect(homeEl, '/index.html');
addLoadingAndRedirect(destinationEl, '/destination.html');
addLoadingAndRedirect(crewEl, '/crew.html');
addLoadingAndRedirect(technologyEl, '/tech.html');


let datas;
const miniNavs = document.querySelectorAll('.mini-nav');
const moonTab = document.getElementById('moon');
const marsTab = document.getElementById('mars');
const europaTab = document.getElementById('europa');
const titanTab = document.getElementById('titan');
const desTitle = document.querySelector('.des-title');
const desInfo = document.querySelector('.des-info');
const distanceValue = document.querySelector('.dis-value');
const timeValue = document.querySelector('.time-value');
const desCount = document.querySelector('.des-num');

// const desTitle = document.querySelector('.des-title');

const getData = async function () {
    const response = await fetch('/data.json');
    datas = await response.json();
    const destinationsData = datas.destinations;
    
    miniNavs.forEach(nav => {
        nav.addEventListener('click', () => {
            
            miniNavs.forEach(navItem => navItem.classList.remove('active'));

            
            nav.classList.add('active');
        });
    });

    desTitle.innerHTML = destinationsData[0].name;
    desInfo.innerHTML = destinationsData[0].description;
    distanceValue.innerHTML = destinationsData[0].distance;
    timeValue.innerHTML = destinationsData[0].travel;
    desImg.src = `${destinationsData[0].images.png}`;





    const updateContent = (index) => {
    desTitle.innerHTML = destinationsData[index].name;
    desTitle.classList.remove('animate__lightSpeedInRight', 'animate__animated');
    void desTitle.offsetWidth;
    desTitle.classList.add('animate__lightSpeedInRight', 'animate__animated');
    desInfo.innerHTML = destinationsData[index].description;
      desInfo.classList.remove('animate__zoomIn', 'animate__animated');
    void desInfo.offsetWidth;
    desInfo.classList.add('animate__zoomIn', 'animate__animated');
    distanceValue.innerHTML = destinationsData[index].distance;
      distanceValue.classList.remove('animate__lightSpeedInRight', 'animate__animated');
    void distanceValue.offsetWidth;
    distanceValue.classList.add('animate__lightSpeedInRight', 'animate__animated');
  timeValue.classList.remove('animate__lightSpeedInRight', 'animate__animated');
    void timeValue.offsetWidth;
    timeValue.classList.add('animate__lightSpeedInRight', 'animate__animated');

    timeValue.innerHTML = destinationsData[index].travel;
    desImg.classList.remove('animate__animated', 'animate__fadeInLeft');

    // Trigger reflow to restart the animation
    void desImg.offsetWidth;


    desImg.classList.add('animate__animated', 'animate__fadeInLeft');

    desImg.src = destinationsData[index].images.png;
    desCount.textContent = `0${index + 1}`;
};
    

    moonTab.addEventListener('click', () => updateContent(0));
    marsTab.addEventListener('click', () => updateContent(1));
    europaTab.addEventListener('click', () => updateContent(2));
    titanTab.addEventListener('click', () => updateContent(3));

};
getData();

const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.icon-close');
const navLinks = document.querySelector('.nav-links');

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



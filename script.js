const desImg = document.querySelector('.destination-img');
console.log(desImg);

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
            // Remove 'active' class from all navigation elements
            miniNavs.forEach(navItem => navItem.classList.remove('active'));

            // Add 'active' class to the clicked navigation element
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
        desInfo.innerHTML = destinationsData[index].description;
        distanceValue.innerHTML = destinationsData[index].distance;
        timeValue.innerHTML = destinationsData[index].travel;
        desImg.classList.add('animate__bounceInDown');
        desImg.src = destinationsData[index].images.png;
        desCount.textContent =`0${index + 1}` ;
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


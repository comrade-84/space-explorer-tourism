

const tabs = document.querySelectorAll('.tab');
const techOneEl = document.querySelector('#tech1');
const techTwoEl = document.querySelector('#tech2');
const techThreeEl = document.querySelector('#tech3');
const nameEl = document.querySelector('.name');
const infoEl = document.querySelector('.info');
const imgEl = document.querySelector('.tech-image');




const getData = async function () {
    const response = await fetch('/data.json');
    datas = await response.json();
    const techData = datas.technology;
    console.log(techData); 
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(tabItem => {
                tabItem.classList.remove('active');
            })
            tab.classList.add('active');
        })
    })

    nameEl.textContent = techData[0].name;
    infoEl.textContent = techData[0].description;
    imgEl.src = techData[0].images.portrait;

    const switchDatas = function(index) {
        nameEl.textContent = techData[index].name;
        infoEl.textContent = techData[index].description;
        imgEl.src = techData[index].images.portrait;

    }
    techOneEl.addEventListener('click', () => switchDatas(0)
    );
    techTwoEl.addEventListener('click', () => switchDatas(1)
)
techThreeEl.addEventListener('click', () => switchDatas(2)
)
}
getData();

const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.icon-close')
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
});
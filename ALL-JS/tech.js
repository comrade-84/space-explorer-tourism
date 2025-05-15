

const tabs = document.querySelectorAll('.tab');
const techOneEl = document.querySelector('#tech1');
const techTwoEl = document.querySelector('#tech2');
const techThreeEl = document.querySelector('#tech3');
const nameEl = document.querySelector('.name');
const infoEl = document.querySelector('.info');
const imgEl = document.querySelector('.tech-image');
const titleEl = document.querySelector('.title');




// const homeEl = document.querySelector('.home');
// const destinationEl = document.querySelector('.destination');
// const crewEl = document.querySelector('.crew');
// const technologyEl = document.querySelector('.tech');



//  function for loading spinner and redirection
// const addLoadingAndRedirect = (element, targetUrl) => {
    
//     element.addEventListener('click', function (e) {
//         e.preventDefault();
//         element.innerHTML = `
//         <div class="d-flex justify-content-center">
//             <div class="spinner-border bg-light" role="status">
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
    const techData = datas.technology;
    console.log(techData);
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(tabItem => {
                tabItem.classList.remove('active');
            })
            tab.classList.add('active');
        })
    })

    nameEl.innerHTML = techData[0].name;
    infoEl.innerHTML = techData[0].description;
    imgEl.src = techData[0].images.portrait;
    titleEl.innerHTML = 'the terminologies';

    const switchDatas = function (index) {
        nameEl.textContent = techData[index].name;
        infoEl.textContent = techData[index].description;
        imgEl.src = techData[index].images.portrait;
        titleEl.innerHTML = 'the terminologies';

    }
    techOneEl.addEventListener('click', () => {
        infoEl.innerHTML = `
        <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
        `;
        nameEl.textContent = '';
        imgEl.src = '';
        titleEl.innerHTML = '';
        setTimeout(() => {
            switchDatas(0);
        }, 1000);
    }
    );

    techTwoEl.addEventListener('click', () => {
        infoEl.innerHTML = `
        <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
        `;
        nameEl.textContent = '';
        imgEl.src = '';
        titleEl.innerHTML = '';
        setTimeout(() => {
            switchDatas(1);
        }, 1000);
    }
    );

        techThreeEl.addEventListener('click', () => {
        infoEl.innerHTML = `
        <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
        `;
        nameEl.textContent = '';
        imgEl.src = '';
        titleEl.innerHTML = '';
        setTimeout(() => {
            switchDatas(2);
        }, 1000);
    }
    );


   
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
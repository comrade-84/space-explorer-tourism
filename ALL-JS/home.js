const exploreLink = document.querySelector('.right');
exploreLink.addEventListener('click', function () {
    exploreLink.innerHTML = `
    <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
    `;
    setTimeout( () => {window.location.href = '/All-htm/destination.html'}, 2000);
    
});

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





const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.icon-close');
const navLinks = document.querySelector('.nav-links');
const home = document.querySelector('.home-content');
menuIcon.addEventListener('click', () => {
    navLinks.classList.add('active'); 
    home.classList.add('margin');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
});
closeIcon.addEventListener('click', function() {
    navLinks.classList.remove('active'); 
    home.classList.remove('margin');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
})
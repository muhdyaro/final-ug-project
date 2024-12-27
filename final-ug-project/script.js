let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
})

window.addEventListener('scroll', () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
})
const header = document.querySelector('header');
window.onscroll = function (){
    if(document.documentElement.scrollTop > 5){
        header.style.height = '70px';
        header.style.backgroundColor = '#fff';
    }else{
        header.style.height = '100px';
        header.style.backgroundColor = 'transparent';
    }
}
//light box
const lightBox = document.querySelector('.lightbox'),
itemBox = document.querySelectorAll('.thumbnail'),
totalItemBox = itemBox.length;
let lightBoxImage = lightBox.querySelector('.lightbox-img');
let itemIndex = 0;

for(let i = 0; i < totalItemBox; i++){
    itemBox[i].addEventListener('click', () => {
        itemIndex = i;
        changeImage();
        toggleLightBox();
    })
}
const nextSlide = () =>{
    if(itemIndex === totalItemBox - 1){
        itemIndex = 0;
    }else{
        itemIndex++;
    }
    changeImage();
}
const prevSlide = () =>{
    if(itemIndex === 0){
        totalItemBox - 1;
    }else{
        itemIndex--;
    }
    changeImage();
}
const toggleLightBox = () =>{
    lightBox.classList.toggle('open')
}
const changeImage = () =>{
    imgSrc = itemBox[itemIndex].querySelector('img').getAttribute('src');
    lightBoxImage.src = imgSrc;
}
//closing lightbox
const closelightBox = document.querySelector('.lightbox-close');
lightBox.addEventListener('click', (e) => {
    if(e.target === closelightBox){
        toggleLightBox();
    }
})



  // Example: Fetch data from an API
  const apiUrl = 'https://api.example.com/data'; // Replace with your API URL
  const boxContainer = document.getElementById('box-container');

  async function fetchGameData() {
      try {
          const response = await fetch(apiUrl);
          const data = await response.json();

          // Assuming the API response is an array of items
          data.forEach(item => {
              // Create a clickable box with the API link
              const boxLink = document.createElement('a');
              boxLink.href = item.link; // Link from API
              boxLink.target = '_blank'; // Open in new tab
              boxLink.classList.add('box-link');

              // Create box content
              boxLink.innerHTML = `
                  <div class="box">
                      <img src="${item.image}" alt="Game Image">
                      <div class="content">
                          <p>${item.description}</p>
                      </div>
                  </div>
              `;

              // Append the clickable box to the container
              boxContainer.appendChild(boxLink);
          });
      } catch (error) {
          console.error('Error fetching game data:', error);
      }
  }

  // Fetch game data on page load
  fetchGameData();
</script>
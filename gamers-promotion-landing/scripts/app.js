async function getAllStreamers () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const streamers = await res.json();
    
    streamers.forEach(streamer => streamersToHTML(streamer));
    reassignEvents();
}


function streamersToHTML({id,name}){
    const path = document.getElementById('panel1')
    const html = 
    `    
    <section class="panel" id="panel${id}">
        <div class="player-panel">
            <div class="player-img">
                <img src="static/img/m0nesy (1).png" >
            </div>
            <div class="player-info">
                <h2>${name}</h2>
                <p>Информация о первом стримере на Twitch. Здесь можно добавить описание, расписание стримов, популярные игры и другую связанную информацию.</p>
            </div>
        </div>
    </section> 
    `
    path.insertAdjacentHTML("afterend", html)
}


function reassignEvents() {
    const panels = document.querySelectorAll('.player-panel');
    panels.forEach(panel => {
        panel.onmouseover = function() {
            panel.style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
            panel.style.transform = 'scale(1.01)';
            panel.style.boxShadow = '0 0 5px rgba(255, 255, 255, 0.2)';
        };
        panel.onmouseout = function() {
            panel.style.backgroundColor = 'rgba(255, 255, 255, 0.067)'; // Исправить ошибку в исходном коде: '#rgba' на 'rgba'
            panel.style.transform = 'scale(1)';
            panel.style.boxShadow = 'none';
        };
    });
}


document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('.search-box input[type="text"]');
    const phrases = ["Find Streamer...", "Search Games...", "Enter Username..."];
    let phraseIndex = 0;
    let letterIndex = 0;
    let currentPhrase = [];
    let isDeleting = false;
    let isEnd = false;
    let cursor = '|';
  
    function type() {
      isEnd = false;
      searchInput.placeholder = currentPhrase.join('') + cursor;
  
      if (!isDeleting && letterIndex <= phrases[phraseIndex].length) {
        currentPhrase.push(phrases[phraseIndex][letterIndex]);
        letterIndex++;
        searchInput.placeholder = currentPhrase.join('') + cursor;
      }
  
      if(isDeleting && letterIndex <= phrases[phraseIndex].length) {
        currentPhrase.pop(phrases[phraseIndex][letterIndex]);
        letterIndex--;
        searchInput.placeholder = currentPhrase.join('') + cursor;
      }
  
      if (letterIndex == phrases[phraseIndex].length) {
        isEnd = true;
        isDeleting = true;
      }
  
      if (isDeleting && letterIndex === 0) {
        currentPhrase = [];
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
  
      const speedUp = Math.random() * (80 - 50) + 50;
      const normalSpeed = Math.random() * (300 - 200) + 200;
      const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;
      setTimeout(type, time);
    }
  
    type();
  });

  
  

window.addEventListener('DOMContentLoaded', getAllStreamers);




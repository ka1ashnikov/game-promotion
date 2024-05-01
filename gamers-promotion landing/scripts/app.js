async function getAllStreamers () {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const streamers = await res.json();
    
    streamers.forEach(streamer => streamersToHTML(streamer));
    reassignEvents();
}


function streamersToHTML({id,title}){
    const path = document.getElementById('panel1')
    const html = 
    `    
    <section class="panel" id="panel${id}">
        <div class="player-panel">
            <div class="player-img">
                <img src="static/img/m0nesy (1).png" >
            </div>
            <div class="player-info">
                <h2>${title}</h2>
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
            panel.style.backgroundColor = 'rgba(255, 255, 255, 0.11)';
            panel.style.transform = 'scale(1.01)';
            panel.style.boxShadow = '0 0 5px rgba(255, 255, 255, 0.2)';
        };
        panel.onmouseout = function() {
            panel.style.backgroundColor = 'rgba(255, 255, 255, 0.11)'; // Исправить ошибку в исходном коде: '#rgba' на 'rgba'
            panel.style.transform = 'scale(1)';
            panel.style.boxShadow = 'none';
        };
    });
}


window.addEventListener('DOMContentLoaded', getAllStreamers);




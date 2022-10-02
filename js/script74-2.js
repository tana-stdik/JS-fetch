  /* Задание  74.2:
https://www.boredapi.com/api/activity
Этот АПИ возвращает случайное занятие, Пример:
{"activity":"Plant a tree","type":"recreational","participants":1,
"price":0.3,"link":"","key":"1942393","accessibility":0.3}
Ваша задача сделать рамочку в которой бы отображалась эта информация. 
И соответственно сделать fetch с помощью которого мы получаем данные и отображаем
 их в рамочке. Рамочку сделать фиксированного размера в зависимости от экрана 
 (bootstrap в помощь)
*/

async function enterActivity() {
  let url = "http://www.boredapi.com/api/activity/";
  let response = await fetch(url);
  let userInfo = await response.json();
  if(document.getElementById("main")===null) {
    document.querySelector(".btn").insertAdjacentHTML("afterend",
    `<main id="main">
      <div id="bored">
        <div>
          <p class="text">Activity: ${userInfo.activity}</p>
        </div>
        <div>
          <p class="text">Type: ${userInfo.accessibility}</p>
        </div>
        <div>
          <p class="text">Type: ${userInfo.type}</p>
        </div>
        <div>
          <p class="text">Participants: ${userInfo.participants}</p>
        </div>
        <div>
          <p class="text">Price: ${userInfo.price}</p>
        </div>
        <div>
          <p class="text">Link: ${userInfo.link}</p>
        </div>
        <div>
          <p class="text">Key: ${userInfo.key}</p>
        </div>
      </div>
    </main>
  `);
  bored.style.cssText = 
    ` border: 2px solid rgb(134, 104, 86);
     border-radius: 10px;
     background-color: white;
     width: 300px;
     color:rgb(234, 96, 11);
     text-align: center;
     margin: 0 auto;
     `;
  }
}

function onLoadHandler(){
  document.querySelector(".btn").onclick = enterActivity;
 }

window.onload = onLoadHandler;
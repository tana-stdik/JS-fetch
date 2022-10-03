/*Задание 77:
Потренируемся с новыми знаниями про параметры:
Создадим маленький генератор мемов. На этом API
https://cataas.com/#/  , есть подходящий нам запрос: 
/cat/says/:text?size=:size&color=:color   (последний в списке Basic),  
:text  это то что будет написано на картинке, :size - размер текста,  
:color- цвет текста. Ваша задача, создать HTML страничку, на которой 
пользователь может ввести эти параметры, и получить в ответ сгенерированный 
мем. Обратите внимание что чтобы получить в ответ данные, к параметрам 
необходимо добавить &json=true, например:
https://cataas.com/cat/says/hello?size=50&color=red&json=true
Подсказка 1: В ответе есть данные url. Это место где ледит картинка, 
и откуда мы ее всегда можем достать. url  присылается например вот так: 
/cat/5ab107b488b001000f9168f8/says/hello?color=red&size=50   и чтобы он 
работал необходимо добавить к нему https://cataas.com/,  например ссылка 
на картинку сгенерированную мной :  
https://cataas.com/cat/5ab107b488b001000f9168f8/says/hello?color=red&size=50  */

async function catRandom() {
  let url = "https://cataas.com/cat?json=true";
  let response = await fetch(url);
  let cat = await response.json();

  let saysValue = document.getElementById("says").value;
  let colorValue = document.getElementById("color").value;
  let sizeValue = document.getElementById("size").value;

  if (document.getElementById("main") === null) {
    document.querySelector(".btn").insertAdjacentHTML("afterend",
      `<main id="main">
      <div id="border">?color=red&size=50
        <img id="img" src="https://cataas.com${cat.url}/says/${saysValue}?color=${colorValue}&size=${sizeValue}">
      </div>
    </main>
  `);
    border.style.cssText =
      `displey: blok; 
    margin: 0 auto;
     `;
    img.style.cssText =
      ` border: 2px solid rgb(134, 104, 86);
     border-radius: 10px;
     displey: blok; 
    margin: 0 auto;
     `;
  }
}

function onLoadHandler() {
  document.querySelector(".btn").onclick = catRandom;
}

window.onload = onLoadHandler;
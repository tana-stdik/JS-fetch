/*Задание 74:
Сделайте запрос на https://catfact.ninja/fact  и полученный факт 
покажите на html страничке. Текст нужно как-нибудь оформить 
(например добавить цвет, и сделать курсивом)*/

async function ninjaFact() {
  let url = "https://catfact.ninja/fact";
  let response = await fetch(url);
  let userInfo = await response.json();
  document.getElementById("result").innerText += userInfo.fact + "\n" + "\n";
  document.getElementById("result").style.color = "#0919aa";
  result.style.cssText = 
    ` color: #0919aa;
    background-color: white;
     width: 100%;
     text-align: center;
     `;
}
  
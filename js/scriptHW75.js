   /* Задание 75:

Представим что мы разрабатываем каталог Авиалиний. На страничке которую мы разрабатываем, 
нам необходимо иметь возможность добавлять новую авиалинию в наш каталог. Делать это мы 
будем с помошью вот этого АПИ:
https://www.instantwebtools.net/fake-rest-api#create-airline

Ваша задача написать форму для ввода этих данных, и при нажатии на кнопку "Добавить", 
сделать запрос на https://api.instantwebtools.net/v1/airlines
Ответ вывести в консоль. Если всё прошло успешно, добавляем под форму текст зелёного
 цвета и пишем "Компания добавлена успешно!", иначе красного цвета с "Что-то пошло не так, 
 попробуйте еще"*/

 async function enterAirlineId() {
    var inputId1 = document.getElementById("inputId").value;
    console.log(inputId1);
    let url = "https://api.instantwebtools.net/v1/airlines/" + inputId1;
    let response = await fetch(url);
    let compInfo = await response.json();
    console.log(compInfo);
    console.log(compInfo.id);
    var name = document.getElementById("name").value;
    console.log(name);
    console.log(compInfo.country);
    console.log(compInfo.logo);
    console.log(compInfo.slogan);
    console.log(compInfo.head_quaters);
    console.log(compInfo.website);
    console.log(compInfo.established);

    if (name == compInfo.name) {
      alert("Вы вошли в систему");
     
    } else {
      alert("Компания не зарегистрирована.");
      var obj = document.getElementById("header"); 
      obj.style.display = "none";     
document.getElementById("header").insertAdjacentHTML("afterend",
`  <main>
     <h2 id="reply">Регистрация</h2>
     <form id="form-airline">
       <div class="entry-field">
         <label for="name">Имя компании:</label>
         <input type="text" id="name" />
       </div>
       <div class="entry-field">
         <label for="country">Страна:</label>
         <input type="text" id="country" />
       </div>
       <div class="entry-field">
         <label for="logo">Лого:</label>
         <input type="text" id="logo" />
       </div>
       <div class="entry-field">
         <label for="slogan">Слоган:</label>
         <input type="text" id="slogan" />
       </div>
       <div class="entry-field">
         <label for="head_quaters">Головной офис:</label>
         <input type="text" id="head_quaters" />
       </div>
       <div class="entry-field">
         <label for="website">Вебсайт:</label>
         <input type="text" id="website" />
       </div>
       <div class="entry-field">
         <label for="established">Год основания:</label>
         <input type="number" id="established" />
       </div>
       <button  type="button" id="btn-register" class="btn">Зарегистрировать компанию</button>
     </form>
   </main>
` );/**/
    } 
  }
  document.getElementById("btn-enter").onclick = enterAirlineId;

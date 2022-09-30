/* 1. Написать Html страничку на которой будет кнопка логин, и поля 
для ввода имени и айди. 
2. При нажатии на кнопку, отправляется запрос вот на API. reqres.in . 
С использованием id, которое было введено. 
3. При получении ответа, сравниваем введённое имя с полученным именем, 
и если они совпадают, делаем Alert со словами «вы вошли в систему.».
Если не совпадают, то пишем «неверные данные, попробуйте снова».
4. После этого, если вход выполнен успешно на страничке появляется 
рамка в которой есть имя, фамилия, мейл и аватарка пользователя. 
(Типа профиль в соц сети)
*/
async function enterLogin() {
  var inputId1 = document.getElementById("inputId").value;
  console.log(inputId1);
  let url = "https://reqres.in/api/users/" + inputId1;
  let response = await fetch(url);
  let userInfo = await response.json();
  console.log(userInfo);
  console.log(userInfo.data.first_name);
  var firstName = document.getElementById("first-name").value;
  console.log(firstName);
  console.log(userInfo.data.last_name);
  console.log(userInfo.data.email);
  console.log(userInfo.data.avatar);

  if (firstName == userInfo.data.first_name) {
    alert("Вы вошли в систему");
    document.getElementById("p1").textContent = "First name: " + userInfo.data.first_name;
    document.getElementById("p2").textContent = "Last name: " + userInfo.data.last_name;
    const image = document.createElement('img')
    image.src = userInfo.data.avatar;
    document.getElementById("profil").appendChild(image);
    profil.style.cssText = 
    ` border: 2px solid red;
     border-radius: 10px;
     width: 300px;
     text-align: center;
     `;
  } else {
    alert("Неверные данные, попробуйте снова");
  }
}
document.querySelector(".btn").onclick = enterLogin; 
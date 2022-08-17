window.addEventListener('load',()=>{ 
    var card = document.getElementById('preload');        
 
    setTimeout(function(){ 
         
    card.style.display = 'none'; 
         
    const URL = 'https://api.github.com/'; 
    const USER_PER_PAGE = 16; 
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]

  fetch(`${URL}search/users?q=${randomCharacter}&per_page=${USER_PER_PAGE}&page=0&`) 
  .then ((result)=>result.json())   
  .then((data)=>{ 
    const userData = data.items
    .map(user=> {
        return  `
        <div class="user">
        <img width='100' height='100' href="" src='${user.avatar_url}'/>
        <div id="usersLogin">User name: ${user.login} </div>
        <a href="${user.html_url}">link to github</a> 
        <button id="fav">Favorites</button> 
        <button id="showRepos"> show repos</button> 
        </div>
        `;
           
        }
    ).join('');

    document.querySelector('#card').insertAdjacentHTML('afterbegin', userData)
     
}) 
}, 1200); 
  
      })
//------------------------------------------------------------------------------------------------------------------
// let form = document.getElementById('searchForm');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   let search = document.getElementById('search').value;
//   let pureName = search.split(' ').join('');

//   fetch('https://api.github.com/users/' + pureName)
//     .then((result) => result.json())
//     .then((data) => {
//       console.log(data);
//     function userInfoCard(user){
//     document.getElementById('img').innerHTML = `
//     <img width='100' height='100' href="" src='${data.avatar_url}'/>
//     `;
//     document.getElementById('avatar').innerHTML =
//     ` <div id="usersLogin">User name: ${data.login} </div> 
//     <a href="${data.html_url}">link to github</a> `

//     document.getElementById('btn').innerHTML=
//     `<button id="Liked"> Liked</button> 
//      <button id="showReposit"> show repos</button> 
//      `
// }
  
//     });
// })

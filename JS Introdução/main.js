
axios.get('https://api.github.com/users/jpars26')
  .then(function(response){

    console.log(response)
  })

  .catch(function(error){
    console.warn(error)
  })











//REQUISIÇOE AJAX

// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github/users/diego3g')
// xhr.send(null)

// xhr.onreadystatechange = function() {
//   // 4 é a variavel que significa que quando a resposta voltou para nós
//     if(xhr.readyState === 4)
//     console.log(JSON.parse(xhr.responseText));
// }




// //REQUISIÇÃO PROMISSE
// var minhaPromise = function () {

//   return new Promise(function(resolve, rejetc) {
//    var xhr = new XMLHttpRequest()
//     xhr.open('GET', 'https://api.github.com/users/jpars26')
//      xhr.send(null)
    
//     xhr.onreadystatechange = function() {
//       // 4 é a variavel que significa que quando a resposta voltou para nós
//         if(xhr.readyState === 4){
//           if(xhr.status === 200){
//             resolve(JSON.parse(xhr.responseText))
//           } else {
//             rejetc('Erro na requisição')
//           }
//         }

//   }
// })
// }

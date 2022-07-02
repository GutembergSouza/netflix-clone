
async function loadMovies(){


    var baseUrlImg = "https://image.tmdb.org/t/p/w500";
    let api_key = "aa496275075023e3767907289b1469e3";
    let api_tokken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTQ5NjI3NTA3NTAyM2UzNzY3OTA3Mjg5YjE0NjllMyIsInN1YiI6IjYxZDU5ZjgzOWRlZmRhMDA4ZDAwYmZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0cgiRmUtlf4kX-pqZCXZryK_9w6RbHz3SeeOMXnkaoQ";

    let list_id = 1;
    var requestHeaderUri = "https://api.themoviedb.org/4/list/"+list_id+"?api_key="+api_key+"&page=1&language=pt-BR"
    var requestAuthorization = "Bearer " + api_tokken;
    var data = JSON.stringify({});
    var xhr = new XMLHttpRequest();

    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        
        var response = this.response
        var responseJson = JSON.parse(response)
        var arrFilmes = responseJson.results  

         filmes = document.getElementById('filme')

        for(let i=0; i< arrFilmes.length; i++){
          
          let posterPath = arrFilmes[i]["poster_path"]
          var imgUrl = baseUrlImg+posterPath;

          let saida =`<div class="item"><a target="_blank" href=""> <img src="${imgUrl}" alt=""></a> </div>`         
          let div = document.createElement('div')
          div.className = "item"
          div.innerHTML=saida    

          filmes.appendChild(div)
        }

      }
    });

    //https://api.themoviedb.org/4/list/1?api_key=aa496275075023e3767907289b1469e3&page=1

    xhr.open("GET", requestHeaderUri);
    xhr.setRequestHeader("content-type", "application/json;charset=utf-8");
    xhr.setRequestHeader("authorization", requestAuthorization);
    xhr.send(data);
    

}


loadMovies()
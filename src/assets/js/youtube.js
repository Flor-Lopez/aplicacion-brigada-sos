$(document).ready(function(){

  var API_KEY = "AIzaSyDKcszj4qry6Cx_zh9WfLSCf8Ol6KPEOQM";

  var video = '';

  // var videos = $("#videos");

  $("#form").submit(function(event){
    event.preventDefault()
    // alert("form is submitted");

    var search = $("#search").val()

    videoSearch(API_KEY, search,9)

  })

  function videoSearch(key,search,maxResults){

    $("#videos").empty();


    $.get("https://www.googleapis.com/youtube/v3/search?key="+ key
    + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + "primeros auxilios" + search, function(data){
      console.log(data)

      data.items.forEach(item => {
        video = `

        <iframe width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0"  allowfullscreen></iframe>
        `

        $("#videos").append(video)

      });

    })

  }

});


// Clave de Api  de Youtube
// AIzaSyDKcszj4qry6Cx_zh9WfLSCf8Ol6KPEOQM

// Instalar Dependencia para el chatbot
// npm install api-ai-javascript -D
// npm install @types/api-ai-javascript

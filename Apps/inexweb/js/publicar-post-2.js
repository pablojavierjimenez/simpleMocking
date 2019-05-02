$(function(){

  var tituloPost;
  var contenidoPost;

  var contador;
  var numeroPost;


  $("#publidar-btn").click(function(){

      if ($('#titulo-post').val()!='')
      {
       tituloPost = "<h2 class='post-title'>"+$('#titulo-post').val()+"</h2>";
        }
        else{ 
          tituloPost = ''; 
      };



    var contenidoPost = $('#contenido-post').val();
    if (tituloPost == '' && contenidoPost == '') {   
        $('#post-list').prepend("<div class='falta'>che no podes publicar porque no escribiste nada</div>" ); $('.falta').fadeOut(4000);
    }else{    
          var nuevoPost = '<article class="box"><img src="img/placeholder.png" alt="">'+ tituloPost + '<p>'+ contenidoPost +'</p></article>';

    $("#post-list").prepend(nuevoPost);

    $('#titulo-post').val('');
    $('#contenido-post').val('');

      



      var numeroPost = localStorage.listadoPosts+contador;

      if (numeroPost) {
          #ya esxiste en el local storage tome el nombre y le sume+1

      }
      else{

          contador++;

          var post1 = {};

          post1.titulo = tituloPost;
          post1.contenido = contenidoPost;
          listadoPosts = [];
          listadoPosts.push(post1);

          JSON.stringify(listadoPosts);

          localStorage.setItem('listadoPosts',JSON.stringify(listadoPosts));
          localStorage.getItem('listadoPosts');
          listadoPosts = JSON.parse(window.localStorage.getItem('listadoPosts'));
          if(lisadoPosts){
              listadoPosts.push(post1);
              window.localstorage.setItem('listadoPosts',JSON.stringify(listadoPosts));

          }
          else {
              var listadoPosts = [];
               listadoPosts.push(post1);
              window.localstorage.setItem('listadoPosts',JSON.stringify(listadoPosts));


          }

      }


      ;
    


  }

  });

});

 listadoPosts = JSON.parse(window.localStorage.getItem('listadoPosts'));
 $.each(listadoPosts,function(i,datos){
  console.log(datos);

 })
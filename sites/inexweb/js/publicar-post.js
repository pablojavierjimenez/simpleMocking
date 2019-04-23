$(function(){
  var idPost ="idPost";
  var cont = 0;
  var tituloPost;
  var contenidoPost;
  var fotoUrl='';


  function javier(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          
          fotoUrl = e.target.result;
          console.log(fotoUrl);
         var foto = document.createElement('span');
          foto.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('list').insertBefore(foto);
             
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }
  document.getElementById('files').addEventListener('change', javier, false);

/////////////// BOTON PUBLICAR ////////////////////////

  $("#publidar-btn").click(function prependPost(){

    //lleno las variables con el contenido de los input values
      tituloPost    = $('#titulo-post').val();        console.log(tituloPost);
      contenidoPost = $('#contenido-post').val();     console.log(contenidoPost);
    //----------------------------------------------//

    //-------------- comprueba el titulo -----------//
      
      if (tituloPost!==''){

          //si el titulo no esta vacio creo el titulo
          tituloPost="<h2 class='post-title'>"+$('#titulo-post').val()+"</h2>";

          }else{

          //si el titulo esta vacio lo dejo como un campovacio
          tituloPost = '';
          console.log('el titulo estaba vacio');
      }
    //----------------------------------------------//

    //-------------- comprueba el contenido --------//
      if (contenidoPost!==''){

          //si el titulo no esta vacio creo el titulo
          contenidoPost = "<p class='post-cotenido'>"+contenidoPost+"</p>";

          }else{

          //si el titulo esta vacio lo dejo como un campovacio
          contenidoPost = '';
          console.log('el contenido estaba vacio');
      }
    //----------------------------------------------//

    //-------------- comprueba la foto -------------//
      var fotoPost;
      console.log(fotoUrl);

      if (fotoUrl !== ''){

          //si el titulo no esta vacio creo el titulo
          fotoPost = '<div class="basic-bg"  id="imgPst-'+idPost+'"><img src="' + fotoUrl + '" alt="" class="post-img"></div>';

          }else{

          //si el titulo esta vacio lo dejo como un campovacio
          fotoPost = '';
          console.log('la foto estaba vacia');
      }
    //----------------------------------------------//


  //////////// imprimir la Publicacion///////////////

      if (tituloPost ==='' && contenidoPost ===''){
          $('#post-list').prepend("<div class='falta'>che no podes publicar porque no escribiste nada</div>" );
          $('.falta').fadeOut(4000);

          }else{
            cont++;             

          var nuevoPost = '<article class="box post" id="'+idPost+cont+'">'+fotoPost+ tituloPost +contenidoPost+'</article>';

          /////////////LOCAL storadge////////////

        var PostItems =[];
        var itemPost = "{'"+idPost+cont+"':['tituloPost':'"+tituloPost+",'contenidoPost':'"+contenidoPost+",'fotoPost':'"+fotoPost+"]}";
          console.log('itemPost contiene: ' + itemPost);

          //////////////////////////////////////

          $('.falta').remove();
          $("#post-list").prepend(nuevoPost);
          $('#titulo-post').val('');
          $('#contenido-post').val('');
          $('#files').val('');
          $('#list').html('');
          
          fotoUrl ='';
          console.log(fotoUrl);
      }
  /////////// FIN imprimir la Publicacion///////////
    }
////////////// FIN BOTON PUBLICAR //////////////////
  );

});
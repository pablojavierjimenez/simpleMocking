

$().ready(function(){

  $("#publidar-btn").click(function(){

  			console.log('entro a la funcion publicar');


  	var tituloPost;
  		if ($('#titulo-post').val()!=''){
  		 tituloPost="<h2>"+$('#titulo-post').val()+"</h2>";
  		 console.log('el titulo contiene'+tituloPost);

  		  }
  		  else{ 
  		  	console.log('el titulo estaba vacio');
  		  	tituloPost = ""; 
  		  };

  	var contenidoPost = $('#contenido-post').val(); console.log(contenidoPost);

    $("#post-list").append('<article class="box"><img src="img/placeholder.png" alt="">'+ tituloPost + '<p>'+ contenidoPost +'</p></article>' );

    $('#titulo-post').val('');
    $('#contenido-post').val('');

    $("#titulo-post").focus();


  });

});

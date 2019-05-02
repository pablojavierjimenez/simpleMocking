

$().ready(function(){



  $("#agregar").click(function(){
	var cambioPrecio = $("#precio").val()*2;
	var contenido = [$("#codigo").val(), $("#familia").val(), $("#cantidad").val(), cambioPrecio];

	$("#imprimir").append("<tr>\n<td>"+ contenido[0]+ "</td>\n<td>"+ contenido[0]+"</td>\n<td>"+ contenido[1]+"</td>\n<td>"+cambioPrecio+"</td>\n<td>http://www.sirenasxmayor.com.ar/img/productos/"+ contenido[0]+".jpg</td>\n</tr>\n");

    $("#imagenesGllery").append("<div class='producto'><div class='titolo-img'>"+ contenido[0]+"</div><div><img src='http://www.sirenasxmayor.com.ar/img/productos/mini/"+ contenido[0]+".jpg' class='imagenes-tumb'/></div></div class='producto'>");

    $("#formulario").html("<div class='cajatexto'><div class='label'>codigo</div><input class='form-imput' id='codigo' type='text'></div><div class='cajatexto'><div class='label'>familia</div><input class='form-imput' id='familia' type='text'></div><div class='cajatexto'><div class='label'>cantidad</div><input class='form-imput' id='cantidad' type='text'></div><div class='cajatexto'><div class='label'>precio</div><input class='form-imput' id='precio' type='text'></div>");

    $("#codigo").focus();


  });

});

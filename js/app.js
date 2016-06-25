$(document).ready(function(){

	$("#caja").click(function(){
		alert("Le di click a la caja");
	});

	$("#botonPrincipal").click(function(){
		console.log("Presiono el boton");
	});

	$("#nombre").keypress(function(){
		console.log("Presiono una tecla");
	});

	$("#mostrar").click(function(){

		//$(".contenedor").show("fast");
		$(".contenedor").slideDown("slow");

	});

	$("#ocultar").click(function(){
		$(".contenedor").hide("slow");
	});

	$("#formulario").submit(function(even){

		var empleado = $("#empleado").val();
		var cedula   = $("#cedula").val();
		var descripcion = $("#descripcion").val();


		console.log("Empleado: "+empleado+"  Cedula: "+cedula+" Descripcion: "+descripcion);


		even.preventDefault();
	});

	$("#limpiar").click(function(){
		$("#empleado").val("");
		$("#cedula").val("");
		$("#descripcion").val("");
		$("#empleado").focus();
	});


	$("#llamada").click(function(){
		var heroe = $("#heroe").val();
		console.log(heroe);
		var apikey = "8b40fe5cf0f3a280eb380639ea859d9d";

		var ajax = $.get("http://gateway.marvel.com:80/v1/public/characters?name="+heroe+"&apikey="+apikey, function(data){
			
			var results = data.data.results;
			var objeto  = results[0];
			var comics  = objeto.comics.items;
			var opcionesSelect = "";
		
			console.log(comics);

			comics.forEach(function(elem){
				console.log(elem.name);

				opcionesSelect += "<option value="+elem.resourceURI+">"+elem.name+"</option>";
			});


			$("#marvel").html(opcionesSelect);

		});
	});

	/*
	$(window).resize(function(){
		$("body").prepend("<div>"+$(window).width()+"</div>");
	})
	*/

	$("#marvel").change(function(){
		var valor = "";

		valor = $("#marvel option:selected").text();

		$("#elementoselect").text(valor);
	})

	$("#divmouse").hover(function(){
		$(this).removeClass("mouseFuera");
		$(this).addClass("mouseSobre");
	}, function(){
		$(this).removeClass("mouseSobre");
		$(this).addClass("mouseFuera");
	});




	// $("#id") => Selector ID
	// $("div") => Selector elemento
	// $(".nombreclase") =>Selector de clase
	/*
	<div id="ejemplo">
		<p class="classejemplo">
			<div>Hola</div>
		</p>
	</div> */

	// $("div#ejemplo p.classejemplo div")
	  

});




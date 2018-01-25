(function main(){

	$(".btn--recherche").click(function(){
		var need = $(".ipt--recherche").val();
		$.ajax({
			url:'https://swapi.co/api/people/?search='+need,
			success: function (data){
			console.log(data)
			console.log(data.results[0].vehicles)

			var templategen = $('#template--gen').html()
			Mustache.parse(templategen)
			$('.hidden--gen').append(Mustache.render(templategen, {results :data.results}));

			$.ajax({
			 	url: data.results[0].homeworld,
			 	success: function (planet){
			 	var templatehome = $('#template--home').html()
			 	Mustache.parse(templatehome)
				$('.hidden--home').append(Mustache.render(templatehome, {homeworld :planet}));
			 	},
			});//Fin .ajax

			$.ajax({
				url: data.results[0].species[0],
			 	success: function (specie){
			 	var templatespec = $('#template--species').html()
			 	Mustache.parse(templatespec)
			 	$('.hidden--species').append(Mustache.render(templatespec, {spec :specie}));
			 	},

			});//Fin .ajax

			for (var i = 0; i < data.results[0].vehicles.length; i++) {

			$.ajax({
			 	url: data.results[0].vehicles[i],
			 	success: function (vehicule){ 		
			 	var templatevehi = $('#template--vehicles').html()
			 	Mustache.parse(templatevehi)
			 	$('.hidden--vehicles').append(Mustache.render(templatevehi, {vehicle :vehicule}));
			 	},
			});//Fin .ajax
			}//Fin boucle for...
					
			},

		});//Fin .ajax






	});//Fin .click

})();//Fin function main


//  {count: 0, next: null, previous: null, results: Array(0)}
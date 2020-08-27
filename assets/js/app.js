


  // hide content fce                     
  $(document).ready(function(){
	  $(".content").hide().fadeIn(2000);
	  
	  //burger fce
	  $(".burger").on('click', function(){
   
		//vysunutí menu
		$(".menu").toggleClass("show");
	  
		// cross burger
		$(".burger").toggleClass("toggle");
	  });

	//kotva fce 

	$('.menu li >a').on('click', function (e) {
		var target = this.hash

		$('html, body').animate({
			scrollTop: $(target).offset().top - 75}, // můžu nahradit i tímto: .$("konkretni id").height() - tohle dám jen místo toho čísla 75
			500, 'swing', function () {
				var stringed = target.toString()
				var trimmed = stringed.substring(1)

				window.location.hash = '/'+trimmed;
		});
	});
	
});

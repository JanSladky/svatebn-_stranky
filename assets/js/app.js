


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
		$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();

		var target = this.hash;
		var target = $(target);

		$('html, body').animate({
			scrollTop: $(this.hash).offset().top - 75},
			500, 'swing', function () {
				window.location.hash = target;

		});

	});

	//responzivní menu
	if ($(window).width() < 991) {
		$('#navbarNavDropdown').addClass('collapse');

	};
});

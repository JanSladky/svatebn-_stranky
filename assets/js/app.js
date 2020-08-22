//burger fce
$(".burger").on('click', function(){
   
    //vysunutí menu
    $(".menu").toggleClass("show");
  
    // cross burger
    $(".burger").toggleClass("toggle");
  });

  // hide content fce                     
  $(document).ready(function(){
	  $(".content").hide().fadeIn(2000);

	//kotva fce 
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();

		var target = this.hash;
		var target = $(target);

		$('html, body').animate({
			'scrollTop': target.offset().top},
			1000, 'swing', function () {
				window.location.hash = target;

			});

	});

	reklama
	$('#main').addClass("reklama");


	//responzivní menu
	if ($(window).width() < 991) {
		$('#navbarNavDropdown').addClass('collapse');

	};




});

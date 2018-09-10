$(window).load(function () {
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function () {
	var vw;
	$(window).resize(function () {
		vw = $(window).width() / 2;
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b11').animate({ top: 240, left: vw - 350 }, 500);
		$('#b22').animate({ top: 240, left: vw - 250 }, 500);
		$('#b33').animate({ top: 240, left: vw - 150 }, 500);
		$('#b44').animate({ top: 240, left: vw - 50 }, 500);
		$('#b55').animate({ top: 240, left: vw + 50 }, 500);
		$('#b66').animate({ top: 240, left: vw + 150 }, 500);
		$('#b77').animate({ top: 240, left: vw + 250 }, 500);
	});

	function playsound() {
		$('.song')[0].play();
		$('.song')[0].pause();

		setTimeout(function () {
			$('.song')[0].currentTime = 0;
			$('.song')[0].play();
		}, 100);
	}

	$('#turn_on').click(function () {
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(500).promise().done(function () {
			$('#play').click();
		});
	});
	$('#play').click(function () {
		var audio = $('.song')[0];
		audio.play();
		// $('.song').prop("volume", 0.5);
		$('.song').prop("volume", 1);
		$('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color', '#FFF');
		$('body').addClass('peach-after');
		// $(this).fadeOut('slow').delay(6000).promise().done(function () {
		// 	$('#bannar_coming').fadeIn('slow');
		// });
		$(this).delay(16000).promise().done(function () {
			$('#bannar_coming').click();
		});
	});

	// Let's Decorate
	$('#bannar_coming').click(function () {
		$('.bannar').addClass('bannar-come');
		// $(this).fadeOut('slow').delay(6000).promise().done(function () {
		// 	$('#balloons_flying').fadeIn('slow');
		// });
		$(this).delay(8000).promise().done(function () {
			$('#balloons_flying').click();
		});
	});

	function loopOne() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		// $('#b1').animate({ left: 450px, bottom: 500px });

		$('#b1').delay(1000).animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b2').delay(1000).animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b3').delay(1000).animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b4').delay(1000).animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b5').delay(1000).animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b6').delay(1000).animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b7').delay(1000).animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopSeven();
		});
	}

	$('#balloons_flying').click(function () {
		$('.balloon-border').animate({ top: -500 }, 10000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();

		// $(this).fadeOut('slow').delay(5000).promise().done(function () {
		// 	$('#cake_fadein').fadeIn('slow');
		// });
		$(this).delay(12000).promise().done(function () {
			$('#cake_fadein').click();
		});
	});

	// Most Delicious Cake Ever
	$('#cake_fadein').click(function () {
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(6000).promise().done(function () {
			$('#light_candle').click();
		});
	});

	$('#light_candle').click(function () {
		$('.fuego').fadeIn('slow');

		$(this).fadeOut('slow').delay(3000).promise().done(function () {
			$('.balloon-border').css("display", "none");
			$('#wish_message').fadeIn('slow');
		});

	});

	// $('#wish_message_ask').click(function () {
	// 	$(this).fadeOut('slow').delay(4000).promise().done(function () {
	// 		$('#wish_message').fadeIn('slow');
	// 	});
	// });

	// Happy Birthday [Button]
	$('#wish_message').click(function () {
		vw = $(window).width() / 2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id', 'b11');
		$('#b2').attr('id', 'b22')
		$('#b3').attr('id', 'b33')
		$('#b4').attr('id', 'b44')
		$('#b5').attr('id', 'b55')
		$('#b6').attr('id', 'b66')
		$('#b7').attr('id', 'b77')
		$('#b11').animate({ top: 240, left: vw - 350 }, 1000);
		$('#b22').animate({ top: 240, left: vw - 250 }, 1000);
		$('#b33').animate({ top: 240, left: vw - 150 }, 1000);
		$('#b44').animate({ top: 240, left: vw - 50 }, 1000);
		$('#b55').animate({ top: 240, left: vw + 50 }, 1000);
		$('#b66').animate({ top: 240, left: vw + 150 }, 1000);
		$('#b77').animate({ top: 240, left: vw + 250 }, 1000);
		$('.balloons').css('opacity', '0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(4000).promise().done(function () {
			$('#story').fadeIn('slow');
		});
	});

	$('#story').click(function () {
		$(this).fadeOut('slow').delay(2000).promise().done(function () {
			$('.fuego').fadeOut(3000).delay(500).promise().done(function () {
				$('.cake').fadeOut(3000);
				$('.message').fadeIn(10000);
			});
		});

		// $('.cake').fadeOut('slow').promise().done(function () {
		// 	// $('.message').fadeIn('slow');
		// });

		var i;

		function msgLoop(i) {
			$("p:nth-child(" + i + ")").fadeOut(2500).delay(800).promise().done(function () {

				// console.log(i + ":" + $("p:nth-child(" + i + ")").html());
				i = i + 1;

				$("p:nth-child(" + i + ")").fadeIn(1000).delay(800);
				if (i == 12) {
					$("p:nth-child(14)").fadeOut('1000000').delay(2000).promise().done(function () {
						$('#playAgain').fadeIn('slow');
					});



				}
				else {
					msgLoop(i);
				}

			});
			// body...
		}

		msgLoop(0);

	});

	$('#playAgain').click(function () {
		var audio = $('.song')[0];
		audio.play();

	});
});




//alert('hello');

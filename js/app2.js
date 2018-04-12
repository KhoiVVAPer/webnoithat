$(document).ready(function() {
    $('body').removeClass('preloading');
    $('body').css('color', 'white');
    $('#preload').delay(1000).fadeOut('fast');
	var done = false;
	var firstClick = true;
	function checkTime(i) 
	{
   	 	if (i < 10) {
  	    	i = "0" + i;
    	}
   	 	return i;
	}
	var lap = setInterval(function (){
		var today = new Date();
    	// Giờ, phút, giây hiện tại
	    var h = today.getHours();
	    var m = today.getMinutes();
	    var s = today.getSeconds();
	    // Chuyển đổi sang dạng 01, 02, 03
	    m = checkTime(m);
	    s = checkTime(s);
	    $('.hienthigio').html(h + ':' + m + ':' + s);
	},500);

	$('.noidungthem').slideUp(0);
	$(window).scroll(function(event) {
		/* Act on the event */
		if($('.open-menu-btn').offset().top > 180 && !done){
			$('.products').css('visibility','visible');
			$('.products').css('opacity','1');
			TweenMax.staggerFrom($('.item'),0.4,{left:100,opacity:0},0.2);
			done = true;	
		}
	});
	$('.xemthem').click(function(event) {
		/* Act on the event */
		if(done){
			$('.noidungthem').slideDown();
			TweenMax.staggerFrom($('.noidungthem .more-item'),0.4,{left:100,opacity:0},0.2);
			$(this).hide(0);
		}
	});	
	$('.open-menu-btn').click(function(){
		$(this).hide();
		$('.menu-an').css({
			right : '0px',
			opacity : '1'
		});
	})
	$('.menu-an p.close-menu-btn').click(function(event) {
		/* Act on the event */
		$('.open-menu-btn').show();
		$('.menu-an').css({
			right : '-200px',
			opacity : '0'
		});
	});
	$('.module h3').click(function(){
	    $(this).next().slideToggle();
	});

	$('a.pic').fancybox();

	$('.nenxanh').click(function(){
		$(this).prev().trigger('click');
	});

	$("a[rel=product-img]").fancybox({
				'transitionIn'		: 'none',
				'transitionOut'		: 'none',
				'titlePosition' 	: 'over',
				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
				}
			});

	$('button.event-on-overlay').click(function(event) {
		/* Act on the event */
		if($(this).val() == '07'){
			$('.contact-box').css('top','0');	
		}else if($(this).val() == '12'){
			$('.contact-box').css('transform' ,'scale(1.2)');
			$('.menu-items li').css('transition','0s');
			$('.productImg').css('transition', '0s');
			$('.off-light').css({background : '#2f558e',transition : '0.2s'});
			$('.contact-box h3').css({border : 'none',background: '#2f558e'});
			$('.login-form').css({border : 'none',background: '#2f558e'});
			$('form#login label').css({color:'white'});
			$('.phantren').css('visibility','hidden');
			$('.container').css('visibility', 'hidden');
		}else if($(this).val() == '18'){
			$('.phantren').css('transition','0.5s');
			$('.phantren').css('transform','scale(0.7)');
			$('.contact-box').css('transform','scale(1.1)');
			$('.container').css('visibility', 'hidden');
		}else{
			$('.contact-box').css({
				top: '22%',
				transform: 'scale(1)'
			});
		}
		$('.contact-box').addClass('vs');
		$('.contact-box').css({ 
			animationName: 'option' + $(this).val(),
			animationDuration: '0.5s'
		});
		$('.off-light').addClass('go');

	});

	$('.off-light').click(function(event) {
		/* Act on the event */
		$(this).removeClass('go');
		$('.contact-box').removeClass('vs');
		$('.contact-box').css('animationName','');
		$('.contact-box').css('transform','scale(1)');
		$('.menu-items li').css('transition','0.5s');
		$('.off-light').css('background','#0e0e0e94');
		$('.login-form').css('background', 'white');
		$('.contact-box h3').css('background', '#2f558e');
		$('.phantren').css('visibility','visible');
		$('.phantren').css('transform','scale(1)');	
		$('.container').css('visibility', 'visible');
		$('form#login label').css({color:'#312f2c'});
	});
	$('button#countdown').click(function(event) {
		/* Act on the event */
		var messagebox = setInterval(function(){
			$('.contact-box').addClass('vs');
			$('.contact-box').css({ 
				animationName: 'option01',
				animationDuration: '0.5s'
			});
			$('.off-light').addClass('go');
		},5000);
	});
	var $password = $("#password");
	var $confirmPassword = $("#cfpass");
	var $userName = $("#username");
	//Hide hints

	function isUserNameValid(){
		return $userName.val().length >= 6;
	}
	function isPasswordValid() {
	  return $password.val().length >= 6;
	}

	function arePasswordsMatching() {
	  return $password.val() === $confirmPassword.val();
	}

	function canSubmit() {
	  return isPasswordValid() && arePasswordsMatching();
	}

	function passwordEvent(){
	    //Find out if password is valid  
	    if(isPasswordValid()) {
	      //Hide hint if valid
	      $password.next().css('opacity', '0');
	    } else {
	      //else show hint
	      $password.next().css('opacity', '1');
	    }
	}

	function usernameEvent(){
		if(isUserNameValid()) {
	      //Hide hint if valid
	      $userName.next().css('opacity', '0');
	    } else {
	      //else show hint
	      $userName.next().css('opacity', '1');
	    }
	}

	function confirmPasswordEvent() {
	  //Find out if password and confirmation match
	  if(arePasswordsMatching()) {
	    //Hide hint if match
	    $confirmPassword.next().css('opacity', '0');
	  } else {
	    //else show hint 
	    $confirmPassword.next().css('opacity', '1');
	  }
	}

	$userName.focus(usernameEvent).keyup(usernameEvent);
	//When event happens on password input
	$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent);

	//When event happens on confirmation input
	$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);

});


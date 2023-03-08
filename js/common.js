$(document).ready(function(){
    
    jQuery(function($){
       $(".user_phone").mask("+7(999) 999-9999");
    });
	
	$('.checkboxes').find('.check-icon').click(function(){
	
      	if( $(this).find('input').is(':checked') ) {
            $(this).removeClass('active');
            $(this).find('input').removeAttr('checked');
        } else {
            $(this).addClass('active');
            $(this).find('input').attr('checked', true);
        }
	
	});
    
    // // RadioButton
    // $('.callback-time_radio').find('.radio').each(function(){
    //     $(this).click(function(){
    //         var valueRadio = $(this).html();
    //         $(this).parent().find('.radio').removeClass('active');
    //         $(this).addClass('active');
    //         $(this).parent().find('input').val(valueRadio);
    //         if(valueRadio == 'По времени'){
    //             $('.modal-callback_time').slideDown(200);
    //         }
    //         else{
    //             $('.modal-callback_time').slideUp(200);
    //         }
    //     });
    // });
    
    // $('.case-slider').slick({
    //     dots: true,
    //     arrows: true,
    //     slidesToShow: 1
	// });
	
	// $('.case-slider').on('beforeChange', function(){
	//     $('.case-box').removeClass('active');
	// 	$('.case-more').removeClass('active').text('Развернуть и читать далее');
		
	// });
	
	
	// $('.case-more').on('click', function(){
		
	// 	var thisParent = $(this).closest('.case-box');
		
	// 	if($(this).hasClass('active')){
	// 		$(this).removeClass('active').text('Развернуть и читать далее');
	// 		thisParent.removeClass('active');
			
	// 	}
		
	// 	else{
	// 		$(this).addClass('active').text('Скрыть');
	// 		thisParent.addClass('active');
	// 	}
		
	// });
	
	
	
	
	
	
	/* --modal-callback-modal-- */
    
	$('.phone-link').click( function(event){
		event.preventDefault();
		$('#overlay').fadeIn(300,
			function(){
				$('.modal-phones') 
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200);
				$('body').css('overflow', 'hidden');
		});
	});
	
	$('.head-btn').click( function(event){
		event.preventDefault();
		$('#overlay').fadeIn(300,
			function(){
				$('.modal-consult') 
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200);
				$('body').css('overflow', 'hidden');
		});
	});

	$('.btn-save1').click( function(event){
		event.preventDefault();
		$('#overlay').fadeIn(300,
			function(){
				$('.modal-save1') 
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200);
				$('body').css('overflow', 'hidden');
		});
	});
	

	$('.price-btn').click( function(event){
		event.preventDefault();
        var thisVal = $(this).closest('.price-box').find('.price-box_head').text();
        $('.modal-order').find('.order-form_val').val(thisVal);
		$('#overlay').fadeIn(300,
			function(){
				$('.modal-order') 
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200);
				$('body').css('overflow', 'hidden');
		});
	});
	
	$('.step-btn').click( function(event){
		event.preventDefault();
        var thisVal = $(this).closest('.step-box').find('.step-box_head').text();
        $('.modal-order2').find('.order-form_val').val(thisVal);
		$('#overlay').fadeIn(300,
			function(){
				$('.modal-order2') 
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200);
				$('body').css('overflow', 'hidden');
		});
	});
	
	$('.footer-callback a').click( function(event){
		event.preventDefault();
		$('#overlay').fadeIn(300,
			function(){
				$('.modal-callback') 
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200);
				$('body').css('overflow', 'hidden');
		});
	});

    
    $('.modal_close, #overlay').click( function(){
		$('.modal-phones, .modal-theme, .modal-callback')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('#overlay').fadeOut(300);
				}
			);
		$('body').css('overflow', 'visible');
	});
	
	$(document).scroll(function(){
		if($(document).scrollTop() > 50){
			$('.mobile-btn').addClass('bottom');
		}
		else{
			$('.mobile-btn').removeClass('bottom');
		}
	})
    
    
    $('.modal-callback_type').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.callback-type_val').val($(this).find('.modal-callback_type-inn').text());
    });

	$('.consult-type_box').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.consult-type_val').val($(this).find('.consult-type_text').text());
    });
	
});
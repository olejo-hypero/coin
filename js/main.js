$(document).ready(function(){
	$('.slider-init').slick({
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: true,
		slidesToShow: 1,
		dots: true,
		appendArrows: '.slider__nav',
		appendDots: '.slider__nav',
		responsive: [
		{
			breakpoint: 991,
			settings: {
	        dots: false,
	        appendArrows: '.slider__nav-mobile',
	      }
		},
	    {
	      breakpoint: 767,
	      settings: {
	        dots: false,
	        appendArrows: '.slider__nav-mobile',
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        dots: false,
	        appendArrows: '.slider__nav-mobile',
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

	var textarea = document.querySelector('textarea');

	textarea.addEventListener('keyup', function(){
	  if(this.scrollTop > 0){
	    this.style.height = this.scrollHeight + "px";
	  }
	});

	var finalDate = '2020/08/08';

	$('.stats__block--time').countdown(finalDate)
   	.on('update.countdown', function(event) {

   		$(this).html(event.strftime('<div class="stats__hours-wrapper"><span class="stats__hours">%H</span>часы</div><span class="stats__del">:</span>' + 
   										 	 '<div class="stats__minutes-wrapper"><span class="stats__minutes">%M</span>мин.</div><span class="stats__del">:</span>' +
   										 	 '<div class="stats__seconds-wrapper"><span class="stats__seconds">%S</span>сек.</div>'));

   });  

   	$('.datetime__block--time').countdown(finalDate)
   	.on('update.countdown', function(event) {

   		$(this).html(event.strftime('<div class="datetime__hours-wrapper"><span class="datetime__hours">%H</span>часы</div><span class="datetime__del">:</span>' + 
   										 	 '<div class="datetime__minutes-wrapper"><span class="datetime__minutes">%M</span>мин.</div><span class="datetime__del">:</span>' +
   										 	 '<div class="datetime__seconds-wrapper"><span class="datetime__seconds">%S</span>сек.</div>'));

   });  

   	$('.btn-toggle').click(function(){
		$('.mobile-menu').toggleClass('mobile-menu--active');
		$('body').toggleClass('body-overflow');
	});

	$(document).on('click', function (e) {
		if (!$(e.target).closest(".header .container").length) {
			$('.mobile-menu').removeClass('mobile-menu--active');
			$('.mobile-menu').removeClass('mobile-menu--disable');
			$('body').removeClass('body-overflow');
		}
		e.stopPropagation()
	});

	$('.lang').click(function(){
		$(this).toggleClass('lang--active');
	});

	$(".personal-form__row--edit").click(function() {
          $(this).find("~ .personal-form__dropped").toggleClass('personal-form__dropped--active');
    });

    $('.questions__block').click(function () {
        $(this).toggleClass('questions__block--active').find('.questions__question').next().slideToggle();
        $(this).find('.questions__question').toggleClass('questions__question--active');
    });

    $('.table-balance__row').on('mousedown', function(){
    	if($(this).find('.draw-modal').length>0) {
    		$('.draw-modal').hide().parents('.table-balance__row').find('.table-balance__column').removeClass('table-balance__column--active');
		    $(this).find('.draw-modal').show().addClass('shown');
		    $(this).find('.table-balance__column').addClass('table-balance__column--active');
    	}
    });

    $('.draw-modal__close').click(function(){
    	$('.draw-modal').hide();
    	$('.table-balance__column').removeClass('table-balance__column--active');
    });

    $('select').each(function(){
	    var $this = $(this), numberOfOptions = $(this).children('option').length;
	  
	    $this.addClass('header__lang--hide'); 
	    $this.wrap('<div class="header__lang lang"></div>');
	    $this.after('<div class="lang__styled"></div>');

	    var $styledSelect = $this.next('div.lang__styled');
	    $styledSelect.text($this.children('option').eq(0).text());
	  
	    var $list = $('<ul />', {
	        'class': 'lang__options'
	    }).insertAfter($styledSelect);
	  
	    for (var i = 0; i < numberOfOptions; i++) {
	        $('<li />', {
	            text: $this.children('option').eq(i).text(),
	            rel: $this.children('option').eq(i).val()
	        }).appendTo($list);
	    }
	  
	    var $listItems = $list.children('li');
	  
	    $styledSelect.click(function(e) {
	        e.stopPropagation();
	        $('div.lang__styled.lang__styled--active').not(this).each(function(){
	            $(this).removeClass('lang__styled--active').next('ul.lang__options').hide();
	        });
	        $(this).toggleClass('lang__styled--active').next('ul.lang__options').toggle();
	    });
	  
	    $listItems.click(function(e) {
	        e.stopPropagation();
	        $styledSelect.text($(this).text()).removeClass('lang__styled--active');
	        $this.val($(this).attr('rel'));
	        $list.hide();
	        //console.log($this.val());
	    });
	  
	    $(document).click(function() {
	        $styledSelect.removeClass('lang__styled--active');
	        $list.hide();
	    });

	});

	$('.lang__options').find('li').addClass('lang__item');
	$('.winners__list').find('.winners__item').addClass('wow');

	$('.sign').click(function(){
		new WOW().init();
	});

	// $(document).on('click', function (e) {
	// 	if (!$(e.target).closest(".header__wrap").length) {
	// 		$('.mobile-menu').removeClass('mobile-menu--active');
	// 		$('.mobile-menu').addClass('mobile-menu--disable');
	// 		$('body').removeClass('body-overflow');
	// 	}
	// 	e.stopPropagation()
	// });
})
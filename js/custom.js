jQuery(document).ready(function(){
	jQuery('.counter').counterUp({
            delay: 10,
            time: 1000
    });
	
	
	jQuery(".owl .owl-carousel").owlCarousel({
	'items':'1',
	'autoplay':true,
	'autoplayTimeout':5000,
	'loop':true,
	'smartSpeed':3000,
	'autoplayHoverPause':true,
	'fluidSpeed':2000
	});
	
	jQuery(".blog-section .owl-carousel").owlCarousel({
	'items':'3',
	'autoplay':false,
	'autoplayTimeout':5000,
	'loop':true,
	'smartSpeed':3000,
	'autoplayHoverPause':true,
	'fluidSpeed':2000,
	'lazyLoad':true
	});
	
	

	
	
	jQuery(window).load(function(){
		var width=jQuery(window).width();
		if(width>=1050){
			jQuery(".team-members .owl-carousel").owlCarousel({
			'items':'4',
			'autoplay':true,
			'autoplayTimeout':5000,
			'loop':true,
			'smartSpeed':2000,
			'autoplayHoverPause':true,
			'fluidSpeed':1000,
			'lazyLoad':true
			});
		}
		if(width>=990&&width<=1050){
			jQuery(".team-members .owl-carousel").owlCarousel({
			'items':'3',
			'autoplay':true,
			'autoplayTimeout':5000,
			'loop':true,
			'smartSpeed':2000,
			'autoplayHoverPause':true,
			'fluidSpeed':1000,
			'lazyLoad':true
			});
		}
		else{
			jQuery(".team-members .owl-carousel").owlCarousel({
			'items':'2',
			'autoplay':true,
			'autoplayTimeout':5000,
			'loop':true,
			'smartSpeed':2000,
			'autoplayHoverPause':true,
			'fluidSpeed':1000,
			'lazyLoad':true
			});
		}
	});
	
	
	jQuery(".credits .owl-carousel").owlCarousel({
	'items':'4',
	'autoplay':true,
	'loop':true,
	'smartSpeed':5000,
	'autoplayHoverPause':true,
	'fluidSpeed':1000,
	'lazyLoad':true
	});
	
	
	jQuery(".conversion .optimize").hide();
	jQuery(".owl .owl-dots").hide();

	jQuery(".conversion .col-md-4").hover(function(){
    jQuery(".col-md-4 .optimize").show(1500);
    jQuery(".col-md-4 .rest").hide(1500);
	},function(){
        jQuery(".col-md-4 .rest").show(1500);
		jQuery(".col-md-4 .optimize").hide(1500);

	});
	
	
	
	var offset=$('.header-menu').offset().top;
	jQuery(window).scroll(function(){
	var scrollpos=$(window).scrollTop();
	if(scrollpos>=(offset+20)){
		jQuery('.header-menu').addClass("fixed");
		
	}else{
		jQuery('.header-menu').removeClass("fixed");	
	}
	});	

	
	

	
	var workheight=jQuery('.portfolio .informations .works').height();
	
	jQuery('.portfolio .informations .col-md-4 .works img').hover(function(){
			var height=jQuery(this).height();
			jQuery(this).css({'margin-top':-height+workheight});
	},function(){
			jQuery(this).css({'margin-top':'0'});
	});
	
	
	
	
	
	

	
	
	/* isotop*/
	jQuery(window).load(function(){
    var jQuerycontainer = jQuery('.portfolioContainer .row');
    jQuerycontainer.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
   jQuery('.gallery a').click(function(){
        jQuery('.gallery .current').removeClass('current');
		jQuery(this).addClass('current');
 
        var selector = jQuery(this).attr('data-filter');
        jQuerycontainer.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
	});
	
	

	
});

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('hours').innerHTML =
    h;
	document.getElementById('minutes').innerHTML =
    m;
	document.getElementById('seconds').innerHTML =
    s;
    var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
startTime();


/**
 * 
 */


$(document).ready(function(){
	
		var menu_active_top=$(".menu-template21").find(".menu_active").offset().top;
		
	   $('.menu-template21').animate({
	        scrollTop: menu_active_top>500 ? menu_active_top : 0
	    }, 500);

	 
	 
//// panel toggle ////
	 
	 $(document).ready(function(){
		 
		 
		 
		 $(".panel[data='toolbar']").each(function(){
			 
			 $(this).find(".panel-heading>.panel-title:first").after('<div class="pull-right inline"> '
					 +'<button type="button" data="panel-toggle" class="btn btn-default btn-xs"> <i class="fa fa-minus"></i> </button>   ' 
					 +'<button type="button" data="panel-close" class="btn btn-danger btn-xs"> <i class="fa fa-close"></i> </button>'
					 +'</div>');
		 });
		 
		 	$(".box[data='toolbar']").each(function(){
			 
			 $(this).find(".box-header>.box-title:first").after('<div class="pull-right inline"> '
					 +'<button type="button" data="box-toggle" class="btn btn-default btn-xs"> <i class="fa fa-minus"></i> </button>   ' 
					 +'<button type="button" data="box-close" class="btn btn-danger btn-xs"> <i class="fa fa-close"></i> </button>'
					 +'</div>');
		 });
		 

		 $("[data='panel-toggle']").click(function(){ $(this).parent().parent().parent().find(".panel-body").toggle("fast"); });
		 $("[data='panel-close']").click(function(){ $(this).parent().parent().parent().remove(); });
		 
		 $("[data='box-toggle']").click(function(){ $(this).parent().parent().parent().find(".box-body").toggle("fast"); });
		 $("[data='box-close']").click(function(){ $(this).parent().parent().parent().remove(); });



		 });
	 
//// panel toggle ////
	 
	 
	/// left menu ///
	 



   		$(".dropdown-t21>li>a").click(function(){  

	      		var menu= $(this).next(".dropdown-t21:first")

	      	///
	      	
	      		var display=menu.css("display");
				if( display=="none" ){
					
	      		var i=$(this).find(".fa-angle-down");
	      		
	      		i.addClass("fa-angle-up").removeClass("fa-angle-down");

				}else{
					var i=$(this).find(".fa-angle-up");
					
		      		i.addClass("fa-angle-down").removeClass("fa-angle-up");
				}
		///
		
		
	      		menu.slideToggle("fast");
	      		
		
				
	      		var li =$(this).parent()

	      		$(".dropdown-t21>li").removeClass("menu_active");
	      		li.addClass("menu_active");
	      		 });

	      
	 
	/// left menu ///
	 
	 
	 
	 
	
});
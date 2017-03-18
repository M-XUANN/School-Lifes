

$(document).ready(function() {
  $("#a1").click(function() {
    $("#part1").show();
    $("#part2").hide();
    $("#part3").hide();
    $("#part4").hide();
  });
  $("#a2").click(function() {
    $("#part2").show();
    $("#part1").hide();
    $("#part3").hide();
    $("#part4").hide();
  });
  $("#a3").click(function() {
    $("#part3").show();
    $("#part2").hide();
    $("#part1").hide();
    $("#part4").hide();
  });
  $("#a4").click(function() {
    $("#part4").show();
    $("#part2").hide();
    $("#part1").hide();
    $("#part3").hide();
  });

});



$(function(){
	var total=$('.tab_pic ul li').length;
	$('.tab_pic ul li').eq(0).addClass('on');
	$('.tab_txt ul li').eq(0).addClass('on');
	$('.tab_pic ul').width(total*450);
	$('.tab_txt ul').width(total*520);
	$('.next').click(function(){
		var num=$('.tab_pic ul li').length;
	  var index=$('.tab_pic ul li.on').index('.tab_pic ul li');
		var on=index+1<num?index+1:0;
		var pwidth=parseInt(on*450);
		var twidth=parseInt(on*520);
		$('.tab_pic ul li').eq(on).addClass('on').siblings().removeClass('on');
		$('.tab_pic ul').stop().animate({left: -pwidth}, "slow");
		$('.tab_txt ul li').eq(on).addClass('on').siblings().removeClass('on');
		$('.tab_txt ul').stop().animate({left: -twidth}, "slow");
	});
	$('.prev').click(function(){
		var num=$('.tab_pic ul li').length;
	    var index=$('.tab_pic ul li.on').index('.tab_pic ul li');
		var on=index==0?num-1:index-1;
		var pwidth=parseInt(on*450);
		var twidth=parseInt(on*520);
		$('.tab_pic ul li').eq(on).addClass('on').siblings().removeClass('on');
		$('.tab_pic ul').stop().animate({left: -pwidth}, "slow");
		$('.tab_txt ul li').eq(on).addClass('on').siblings().removeClass('on');
		$('.tab_txt ul').stop().animate({left: -twidth}, "slow");
	});
	
})

$(function(){
	var _index5=0;
$("#four_flash .but_right img").click(function(){
	_index5++;
	var len=$(".flashBg ul.mobile li").length;
	if(_index5+5>len){
		$("#four_flash .flashBg ul.mobile").stop().append($("ul.mobile").html());
	}
	$("#four_flash .flashBg ul.mobile").stop().animate({left:-_index5*326},1000);
	});

	
$("#four_flash .but_left img").click(function(){
	if(_index5==0){
		$("ul.mobile").prepend($("ul.mobile").html());
		$("ul.mobile").css("left","-1380px");
		_index5=6
	}
	_index5--;
	$("#four_flash .flashBg ul.mobile").stop().animate({left:-_index5*326},1000);
	});
	
});

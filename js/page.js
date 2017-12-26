$(function(){
	//index
	$(".footer div").click(function(){
		$(this).find(".list").toggle();
		$(this).siblings("div").find(".list").hide();
	})
	
	//留言信箱
	//翻页样式变化
	$(".page_list li").click(function(){
		$(this).addClass("now").siblings("li").removeClass("now");
	})
	$(".page_list li.arrow_left,.page_list li.arrow_right").click(function(){
		$(this).removeClass("now");
	})
	
	
	//搜索框获得焦点转变成搜索页面，给body添加focus样式控制页面的一些变化
	$(".search_form .search_txt").focus(function(){
//		$(".message_list").hide();
		$(".message_body").addClass("body_foucus");
		$(".search_wrap").css("position","absolute");
		$(window).scrollTop(0);
	})
	$(".search_form .search_txt").blur(function(){
		$(".search_wrap").css("position","fixed");
	})
	$("body").on("touchmove",function(){
		$(".search_txt").blur();
	})
	//点击取消恢复原样式
	$(".message_search .cancel").click(function(){
		$(".message_body").removeClass("body_foucus");
		$(".message_list_search").hide();
		$(".message_search .search_form .search_txt").val("");
	})
	
	//点击清空搜索框
	$(".message_search .search_form .close").click(function(){
		$(".message_search .search_form .search_txt").val("");
		$(".message_search .search_form .search_txt").focus();
	})
	
	//监听虚拟键盘的提交事件
	$(".search_form").submit(function(){
		$(".message_list_search").show();
		$(".message_search .search_form .search_txt").blur();
		return false;
	})
	
	//写留言验证码
	
	var code ; //在全局 定义验证码      
	function createCode(){       
	    code = "";      
	    var codeLength = 5;//验证码的长度              
	    var selectChar = new Array(1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');      
	      
	    for(var i=0;i<codeLength;i++) {      
	        var charIndex = Math.floor(Math.random()*60);      
	        code +=selectChar[charIndex];      
	    }      
	    if(code.length != codeLength){
	        createCode();      
	    }      
	   	return code;     
	}  
	
	$(".yz").text(createCode());
	$(".yz").click(function(){
		var x = createCode();
		$(this).text(x)
	})
	
	//单选框选定
	$(".write_message .write_form div .radio input").click(function(){
		$(this).closest(".radio").siblings(".radio").find("input").prop("checked",false);
	})



	//20171225
	//地市中心主页tab切换
	//点击效果切换
	$(".content_main .content_change li").click(function(){
		$(this).addClass("now").siblings("li").removeClass("now");
	})
	
	//end

		
	//20171226	
	//个人公积金
	//tab切换
	$(".tab_ul li").click(function(){
		$(this).addClass("new").siblings().removeClass("new");
		$(this).parent().parent().next("div").find(".detail_info").eq($(this).index()).show().siblings().hide();
	})
	//end
	
	
	//合作楼盘js
	//楼盘地址切换
	$(".estate_ads .ads_list li").click(function(){
		$(this).addClass("now").siblings("li").removeClass("now");
	})
	//搜索改变搜索框样式
	$(".estate_search .estate_form input").focus(function(){
		$(this).width("80%").siblings(".close").show().parent().siblings(".cancel").show();
	})
	$(".estate_search .cancel").click(function(){
		$(".estate_search .estate_form input").blur();
		$(".estate_search .estate_form input").width("100%").siblings(".close").hide().parent().siblings(".cancel").hide();
	})
	//滚动收起输入框
	$("body").on("touchmove",function(){
		$(".estate_form input").blur();
		$(".estate_search .estate_form input").width("100%").siblings(".close").hide().parent().siblings(".cancel").hide();
	})
	//清空搜素框
	$(".estate_search .estate_form .close").click(function(){
		$(".estate_search .estate_form input").val("");
		$(".estate_search .estate_form input").focus();
	})
	//合作楼盘js end
	
	
	//贷款计算器
	//计算

	
	
})
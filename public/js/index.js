$(document).ready(function(){
	$.ajax({     
	    type: "get",     
	    url: "http://wthrcdn.etouch.cn/weather_mini?city=上海市",       
	    dataType: "json", 
	    success: function(data) {   
	    	 console.log( data)
	           var week=data['data']['forecast'][0]['date'];
	           	   week=week.substring(week.length,week.length-3);//星期
	           var wendu=data['data']['wendu'];//当前温度
	           var type=data['data']['forecast'][0]['type'];//天气状况
	           var high=data['data']['forecast'][0]['high'];//最高温度
	           	   high=high.replace('高温','');
	       	       high=high.replace('℃','');
	           var low=data['data']['forecast'][0]['low'];//最高温度
	           		low=low.replace('低温','');
	           		low=low.replace('℃','');
	           	$('#week').text(week);	
	          	$('#type').text(type);
	          	$('#high').text(high);	
	          	$('#low').text(low);
	    },     
	    error: function(err) {     
           console.log('请求出错');
	    }
	    
	 });
	$.ajax({     
	    type: "GET",    
	    data:{},
	    url: "http://api.help.bj.cn/apis/weather?id=101020100",       
	     dataType:'json',
    	 processData: false, 
	    success: function(data) {  
	    	JSON.stringify(data)
	    	  console.log( data)
	    	  var lev=data['pm25'];//空气质量
//	    	  var val=data['pm25'];//空气质量数据
	    	  var city=data['city']//城市
	    	  $('#lev').text(lev);
//	          $('#val').text(val);
	          $('#city').text(city);
	    },     
	    error: function(XMLHttpRequest, textStatus, errorThrown) {
		 console.log(XMLHttpRequest.status);
		console.log(XMLHttpRequest.readyState);
		 console.log(textStatus);
		   }
	    
	 });
//	数据
		function getData(){
			var url = tenantUrl + "m-index.html";
			var data = { 
				"unique":localStorage.getItem("unique")
			};
			httpHelper.post(url, data, function(data){
//			   var data= JSON.parse(data)
	            console.log(data)
	           $('#name').text(data['name']);//姓名
	           $('#department').text(data['department']);//部门
	           var userId=data['id'];
	           $('#userId').text(userId);//员工工号
	           var notAudited=data['notAudited'];//未审核消息
	           notAudited>0 ? $('#notAudited').show() : $('#notAudited').hide();
	           $('#notAudited').text(notAudited);
	           $('#announcement').text(data['announcement']);//公告
	           $('#announcementime').text(data['announcementime']);//公告时间
	           var header=data['header'];
	           header!=null ?  $('#headerImg').attr('src',tenantUrl+header) : $('#headerImg').attr('src','images/index/header.png')
	    
			
			});
		}
		getData();//获取数据
//	 header
	$(window).bind("scroll",function(){
        var $header = $("#header");
            var t =88,m=0;
        	m = Math.min(document.documentElement.scrollTop || document.body.scrollTop, t) / t;
       		if(m==0){
		        $header.css({"background":"rgba(255, 255, 255, 0)"}) ;
		        $('#header h1').css("color","rgba(255, 255, 255,1)");
		        $('.message img').attr('src','images/index/message.png')
      		 }else{
		        $header.css({"background":"rgba(255, 255, 255, " + m + ")"}) ;
		        $('#header h1').css("color","rgba(42, 42, 42, " + m + ")");
		        $('.message img').attr('src','images/index/messageBlock.png')
       		}
    });
//  功能
	 $('#remain').on('click',function(){
	 	window.location.href="template/remain.html";
	 });//待办事宜
	 $('#examineing').on('click',function(){
	 	window.location.href="template/reviewList.html";
	 });//审核中
	 $('#examined').on('click',function(){
	 	window.location.href="template/examinedList.html";
	 });//已审核
	 $('#workManage').on('click',function(){
	 	window.location.href="template/workManage.html"
	 });//事务管理
	 $('#affairs').on('click',function(){
	 	window.location.href="template/affairs.html"
	 });//人事管理
	 $('#finance').on('click',function(){
	 	window.location.href="template/finance.html"
	 });//财务管理
	 $('#vadio').on('click',function(){
	 	window.location.href="template/vadio.html"
	 });//公告
	 
//  footer
	$('#index').on('click',function(){
		window.location.href='index.html'
	});//首页
	$('#massage').on('click',function(){
		window.location.href='template/message.html'
	});//消息
	$('#addressList').on('click',function(){
		window.location.href='template/addressList.html'
	});//通讯录
	$('#personal').on('click',function(){
		window.location.href='template/personal.html'
	});//个人中心
});

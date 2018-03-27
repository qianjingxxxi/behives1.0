$(document).ready(function(){
	
//  弹框
$('.closeBtn').on('click',function(){
	$('#dialog').hide();
})
    
//  footer
	$('#index').on('click',function(){
		window.location.href='../index.html'
	});//首页
	$('#massage').on('click',function(){
		window.location.href='message.html'
	});//消息
	$('#addressList').on('click',function(){
		window.location.href='addressList.html'
	});//通讯录
	$('#personal').on('click',function(){
		window.location.href='personal.html'
	});//个人中心
});

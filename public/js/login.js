
$(document).ready(function(){
	var verify={
		user:function(){
			var user = $('#user').val();
			var phoneReg = new RegExp(/^1(3|4|5|7|8)\d{9}$/);
			if(phoneReg.test(user)) {
				$('#user').val(user);
			} else {
				$('#user').val("请输入正确的账号");
				$('#user').css('color', 'red');
				setTimeout(function() {
					$('#user').val("");
					$('#user').css('color', '#000');
				}, 1500);
				return;
			}
		},
		userBlur:function(){
			var userBlur = $('#user').val();
			if(userBlur == "" || userBlur == "请输入正确的账号") {
				$('#user').val("");
				$('#user').css('color', '#000');
			} else {
				$('#user').val(userBlur);
			}
		},
		fls:function(){
			var fls=true;
			var user = $('#user').val();
			var pass = $('#password').val();
			var phoneReg = new RegExp(/^1(3|4|5|7|8)\d{9}$/);
			var res = $('#track').hasClass('track-on');
			if(!phoneReg.test(user)){
				fls=false;
			}
			if(pass==""){
				fls=false;
			}
			if(!res){
				fls=false;
			}
			return fls;
			
		},
		btnColor:function(){
			var fls=verify.fls();
			fls==true ? $('#submit').addClass('addBg') : $('#submit').removeClass('addBg');
			fls==true ? $('#submit input').css('color','#fff') : $('#submit input').css('color','#000');
//			console.log(fls)
		},
		formData:function(){
			var type=localStorage.getItem('type');
			var user = $('#user').val();
			var pass = $('#password').val();
			var code = $('#code').val();
			var fls=verify.fls();
//			console.log('用户:'+user+"----"+'密码:'+pass+"----"+'验证码:'+type+"----")
			if(fls){
//				$.getJSON("http://oa.aoxiwl.com/m-login.html",function(json){ 
//			//要求远程请求页面的数据格式为： ?(json_data) //例如： //?([{"_name":"湖南省","_regionId":134},{"_name":"北京市","_regionId":143}]) alert(json[0]._name); 
//			}); 
				var url = tenantUrl + "m-login.html";
				var data = { 
					"id": user,
					"pass":pass,
					"type":type
				};
				httpHelper.post(url, data, function(data){
						window.location.href='index.html'  ;
						var unique=data['unique'];
	  					localStorage.setItem("unique", unique);
	  					console.log(data['code'])
					
				});
			
			} 
		}
	}
	$(function(){
		$('#user').focusout(verify.user);//ID失去焦点验证
		$('#user').focus(verify.userBlur);//ID获取焦点验证
		$('input').focusout(verify.btnColor);//登录按钮颜色验证
		$('#submit').click(verify.formData);//提交数据
		var obj=document.getElementById('btn');
		obj.addEventListener('touchend', function(event) {
			verify.btnColor();
     // 如果这个元素的位置内只有一个手指的话
	    if (event.targetTouches.length == 1) {
		　　 event.preventDefault();
	        }
		}, false);
	})
	
})



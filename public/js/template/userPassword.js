var lists={
	getData:function(){
		var pass=$('#import input').val();
		var pass1=$('#password').val();
		var pass2=$('#passwordDtw').val();
		var url = tenantUrl + "m-user-userchp.html";
		var data = { 
			"unique":localStorage.getItem("unique"),
			"pass":pass,
			"pass1":pass1,
			"passs2":pass2
		};
		httpHelper.post(url, data, function(data){
			console.log(data)
			var t=data['t'];
			if(t==2){
				$('#dialog').hide();
				$('#hint').hide();
				$('.mareH').css('display','block');
//				setTimeout(function() {
//					$('#mark').css('display','none');
//				}, 1000);
			}else{
				$('#hint').show();
				$('.mareH').css('display','none');
			}
		});
	},
	fls:function(){
		var pass=$('#password').val();
		var passwordDtw=$('#passwordDtw').val();
		var Reg = new RegExp(/^.{6,}$/);
		var fls=true;
		if(pass==""){
			fls=false;
		}
		if(passwordDtw==""){
			fls=false;
		}
		if(pass!=passwordDtw){
			fls=false;
		}
		if(!Reg.test(pass)){
			fls=false;
		}
		if(!Reg.test(passwordDtw)){
			fls=false;
		}
		return fls;
	},
	passwordDtw:function(){
		var pass=$('#password').val();
		var passwordDtw=$('#passwordDtw').val();
		var o=$(this).val();
		var Reg = new RegExp(/^.{6,}$/);
		console.log(Reg.test(o))
		if(passwordDtw!=pass){
			var $val="<p id='mark' class='mark'>两次密码输入不一致</p>";
			$(this).parent('li').append($val);
			setTimeout(function() {
				$('#mark').remove();
			}, 1500);
				
		}else if(!Reg.test(o)){
			var $val="<p id='mark' class='mark'>请输入至少六位密码</p>";
			$(this).parent('li').append($val);
			setTimeout(function() {
				$('#mark').remove();
			}, 1500);
		}
		else{
			$('#passwordDtw').val(passwordDtw);
			$('#password').val(pass);
		}
	},
	passwordDtwBlur:function(){
		$('#mark').remove();
	},
	btnColor:function(){
		var fls=lists.fls();
		fls==true ? $('#submit').addClass('addBg') : $('#submit').removeClass('addBg');
	},
	formData:function(){
		var fls=lists.fls();
		if(fls){
			$('#dialog').show();
			
		}else{
			$('#dialog').hide();
		}
	},
	importVal:function(){
		$('#hint').hide();
	}
//	numSix:function(){
//		var o=$(this).val();
//		var Reg = new RegExp(/^.{6,}$/);
//		console.log(Reg.test(o))
//		if(Reg.test(o)){
//			$(this).val(o);
//		}else{
//			$(this).val("密码至少六位");
//			$(this).css('color', 'red');
//			setTimeout(function() {
//				$(this).val("");
//				$(this).css('color', '#000');
//			}, 1500);
//			return;
//		}
//	}
}
$(function(){
	$('#passwordDtw').focusout(lists.passwordDtw);//两次密码是否一致
	$('#passwordDtw').focus(lists.passwordDtwBlur);//两次密码是否一致
	$('#password').focusout(lists.passwordDtw);//两次密码是否一致
	$('#password').focus(lists.passwordDtwBlur);//两次密码是否一致
	$('input').focusout(lists.btnColor);//按钮颜色
	$('input').focusout(lists.numSix);//按钮颜色
	$('.submit').click(lists.formData);
	$('#sure').click(lists.getData);
	$('.import input').focus(lists.importVal)
})

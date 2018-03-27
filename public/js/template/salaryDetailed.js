var salary={
	getData:function(){
		var url = tenantUrl + "m-fina-payd.html";
		var data = {
			"url":"http://oa.aoxiwl.com/salary.html" + collid,
		};	
		httpHelper.post(url, data, function(data) {
			console.log(data)
		});
	},
	html:function(){
		var collid=window.location.search;
		var collid=collid.replace('?collid=', "");
		var url = tenantUrl + "m-fina-payd.html";
		console.log(localStorage.getItem("unique"))
		console.log(collid)
		var data = {
			"unique":localStorage.getItem("unique"),
			"id":collid
		};	
		httpHelper.post(url, data, function(data) {
			var html='';
			html+='<li>';
			html+='<label> <span>ID工号</span>:</label>';
			html+='<p>'+data['uid']+'</p>';
			html+='</li>';
			html+='<li>';
			html+='<label> <span>姓名</span>:</label>';
			html+='<p>'+data['name']+'</p>';
			html+='</li>';
			html+='<li>';
			html+='<label> <span>职位</span>:</label>';
			html+='<p>'+data['obj']+'</p>';
			html+='</li>';
			html+='<li>';
			html+='<label> <span>部门</span>:</label>';
			html+='<p>'+data['bname']+'</p>';
			html+='</li>';
			html+='<li>';
			html+='<label> <span>基本工资</span>:</label>';
			html+='<p>'+data['bascpay']+'</p>';
			html+='</li>';
			html+='<li>';
			html+='<label> <span>绩效工资</span>:</label>';
			html+='<p>'+data['jipay']+'</p>';
			html+='</li>';
			html+='<li>';
			html+='<label> <span>应发工资</span>:</label>';
			html+='<p>'+data['yingpay']+'</p>';
			html+='</li>';
			html+='<li>';
			html+='<label> <span>实际出勤（天）</span>:</label>';
			html+='<p>'+data['sjdays']+'</p>';
			html+='</li>';
			html+='<li>';
			html+='<label> <span>事假</span>:</label>';
			html+='<p>'+data['shijiadays']+'</p>';
			html+='</li>';
			html+='<li>';
			html+='<label> <span>病假</span>:</label>';
			html+='<p>'+data['bingdays']+'</p>';
			html+='</li>';
			html+='<li>';
			html+='<label> <span>迟到</span>:</label>';
			html+='<p>'+data['chidays']+'</p>';
			html+='</li>';
			html+='<li>';
			html+='<label> <span>社保</span>:</label>';
			html+='<p>'+data['shebao']+'</p>';
			html+='</li>';
			html+='<li>';
			html+='<label> <span>公积金</span>:</label>';
			html+='<p>'+data['gongjijin']+'</p>';
			html+='</li>';
			html+='<li>';
			html+='<label> <span>其他</span>:</label>';
			html+='<p>'+data['other']+'</p>';
			html+='</li>';
			html+='<li>';
			html+='<label> <span>补贴</span>:</label>';
			html+='<p>'+data['butie']+'</p>';
			html+='</li>';
			html+='<li>';
			html+='<label> <span>实发工资</span>:</label>';
			html+='<p>'+data['shipay']+'</p>';
			html+='</li>';
			html+='<li>';
			html+='<label> <span>开户行</span>:</label>';
			html+='<p>'+data['bankname']+'</p>';
			html+='</li>';
			html+='<li>';
			html+='<label> <span>银行卡号</span>:</label>';
			html+='<p>'+data['bankid']+'</p>';
			html+='</li>';
			html+='<li>';
			html+='<label> <span>身份证号</span>:</label>';
			html+='<p>'+data['idcard']+'</p>';
			html+='</li>';
			html+='<li>';
			html+='<label> <span>开始时间</span>:</label>';
			html+='<p>'+data['createtime']+'</p>';
			html+='</li>';
			html+='<li>';
			html+='<label> <span>开始时间</span>:</label>';
			html+='<p>'+data['endtime']+'</p>';
			html+='</li>';
			$('#salary').append(html);
		});
		
	}
}
$(function(){
	salary.html();
})

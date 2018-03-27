var collid;
var remainDetailed={
	getData:function(){
		var url = tenantUrl + "m-audit-show.html";
		var data = {
			"url":"http://oa.aoxiwl.com/remain.html" + collid,
		};	
		httpHelper.post(url, data, function() {
			console.log(data)
		});
	},
	getId:function(){
		var collid=window.location.search;
		var collid=collid.replace('?collid=', "");
		var url = tenantUrl + "m-audit-show.html";
		var data = {
			"unique":localStorage.getItem("unique"),
			"id":collid
		};	
		httpHelper.post(url, data, function(data) {
			console.log(data)
			var header=tenantUrl+data['examineImg']
			var html="";
			html +="<div class='title'>";
			html +="<div>";
			html +="<label>标题：</label>";
			html +="<p>"+data['examineTitle']+"</p>";
			html +="</div>";	
			html +="<div>";
			html +="<label>内容：</label>";
			html +="<div id='see' class='see'>";
			html +="<img src="+header+" alt='see' />";
			html +="<p>点击查看详情</p>";
			html +="</div>";
			html +="</div>";
			html +="</div>";	
			html +="<div class='apply'>";
			html +="<div>";
			html +="<label>申请人：</label>";
			html +="<p><span>"+data['examineDept']+"</span><span>"+data['examineObj']+"</span><span>"+data['examineName']+"</span></p>";
			html +="</div>";
			html +="<div>";
			html +="<label>申请时间：</label>";
			html +="<p>"+data['examineTime']+"</p>";
			html +="</div>";
			html +="</div>";
			html +="<button class='save'>保存为图片</button>";
			html +="<button id='pass' class='pass'>通过</button>";
			html +="<button id='reject' class='reject'>驳回</button>";
			$('#remian').append(html);
//			点击查看大图
//			$('#see').on('click',function(){
//				var swiper = new Swiper('.swiper-container', {
//					slidesPerView: 1,
//					nextButton: '.swiper-button-next',
//					prevButton: '.swiper-button-prev',
//					pagination: '.swiper-pagination',
//					paginationType: 'fraction',
//				});
//			})
	$('#pass').click(remainDetailed.pass);//通过
	$('#reject').click(remainDetailed.reject);//驳回
		});
	},
	pass:function(){
		console.log(pass)
		var url = tenantUrl + "m-audit-setok.html";
		var data = {
			"unique":localStorage.getItem("unique"),
			"id":collid
		};	
		httpHelper.post(url, data, function() {
			console.log(data);
			window.location.href='remain.html'
		});
	},
	reject:function(){
		var url = tenantUrl + "m-audit-setnot.html";
		var data = {
			"unique":localStorage.getItem("unique"),
			"id":collid
		};	
		httpHelper.post(url, data, function() {
//			console.log(data)
			window.location.href='remain.html'
		});
	}
}
$(function(){
	remainDetailed.getData();
	remainDetailed.getId();
})

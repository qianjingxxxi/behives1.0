
var list={
	getData:function(){
		var url = tenantUrl + "m-fina-pay.html";
		var data = { 
			"unique":localStorage.getItem("unique")
		};
		httpHelper.post(url, data, function(data){
			console.log(data)
			list.HTMLVal(data)
		});
	},
	HTMLVal:function(data){
		console.log(data)
	}
}
$(function(){
	salary.getData();
})
$('#historyLists').on('click',function(){
	window.location.href='examineing.html'
})
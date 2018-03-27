var collid;
var listDetailed={
	getData:function(){
		var url = tenantUrl + "m-news-showd.html";
		var data = {
			"url":"http://oa.aoxiwl.com/vadio.html" + collid,
		};	
		httpHelper.post(url, data, function() {
			console.log(data)
		});
	},
	getId:function(){
		var collid=window.location.search;
		var collid=collid.replace('?collid=', "");
		var url = tenantUrl + "m-news-showd.html";
		var data = {
			"unique":localStorage.getItem("unique"),
			"id":collid
		};	
		httpHelper.post(url, data, function(data) {
			console.log(data)
			var html="";
				html +="<h2>"+data['title']+"</h2>";
				html +="<p>"+data['content']+"</p>";
			$('#listDetailed').append(html);

		});

	},

}
$(function(){
	listDetailed.getData();
	listDetailed.getId();
})

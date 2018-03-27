var lists={
	getData:function(){
		var url = tenantUrl + "m-chat-show.html";
		var data = { 
			"unique":localStorage.getItem("unique")
		};
		httpHelper.post(url, data, function(data){
			console.log(data)
			lists.HTMLVal(data)
		});
	},
	HTMLVal:function(data){
		var html="";
		for(var i=0;i<data.length;i++){
//			console.log(data[i]['id'])
			var ht="",ml=""
			if(data.length>0){	
				ht += "<li onclick='lists.sendPage("+data[i]['id']+")'>";
				ht += "<span class='time'>"+data[i]['time']+"</span>";
				ht += "<div class='vadioCon'>";
				ht +="<h2>"+data[i]['title']+"</h2>";
				ht +="<div>";
				ht +="<p>"+data[i]['content']+"</p>";
				ht +="</div>";
				ht += "</div>";
				ht +="</li>";
			}else{
				ml +=""
			}
		html +=	ht+ml;
		}
		$('#list').after(html)
	},
	sendPage:function(collid){
		window.location.href = "vadioDetailed.html?collid=" + collid;
	}
}
$(function(){
	lists.getData();
})

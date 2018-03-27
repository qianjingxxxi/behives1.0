var salary={
	getData:function(){
		var url = tenantUrl + "m-fina-pay.html";
		var data = { 
			"unique":localStorage.getItem("unique")
		};
		httpHelper.post(url, data, function(data){
			console.log(data)
			salary.HTMLVal(data)
		});
	},
	HTMLVal:function(data){
		var html="";
		for(var i=0;i<data.length;i++){
//			console.log(data[i]['id'])
			var ht="",ml=""
			if(data.length>0){	
				ht += "<tr onclick='salary.sendPage("+data[i]['id']+")'>";
				ht += "<td>"+data[i]['id']+"</td>";
				ht += "<td>"+data[i]['name']+"</td>";
				ht += "<td>"+data[i]['obj']+"</td>";
				ht += "<td>"+data[i]['yingpay']+"</td>";
				ht += "<td>"+data[i]['shipay']+"</td>";
				ht += "</tr>";
			}else{
				ml +=""
			}
		html +=	ht+ml;
		}
		$('#list').after(html)
	},
	sendPage:function(collid){
		window.location.href = "salaryDetailed.html?collid=" + collid;
	}
}
$(function(){
	salary.getData();
})

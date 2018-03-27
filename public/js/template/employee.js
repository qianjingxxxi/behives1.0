
var employee={
	html:function(){
		var html="";
		html+="<tr>";
		html+="<td>0001</td>";
		html+="<td>0001</td>";
		html+="<td>0001</td>";
		html+="<td>0001</td>";
		html+="</tr>";
		$('#employee').append(html);
	},
	getdata:function(){
		var url = tenantUrl + "/m-user-list.html";
		var data = { 
			"unique":localStorage.getItem("unique")
		};
		httpHelper.post(url, data, function(data){
			console.log(data)
			
		});
	}
}
$(function(){
	employee.html();//页面
})

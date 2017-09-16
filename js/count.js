(function(){
	
	var xhr = new XMLHttpRequest();
	xhr.open('POST','js/1.php');
	xhr.send(null);
	
	xhr.onreadystatechange = function(){
		
		if(xhr.readyState == 4 && xhr.status == 200 ){
			
			alert('注册成功')
			
		}
		
	}
	
})();

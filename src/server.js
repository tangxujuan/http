let http = require("http");
let qs = require("querystring");

let server = http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	
	console.log(request.method, request.url);
	
	// 根据不同请求url显示不同信息
	// / 			显示首页
	// /login		显示登录表单
	// /xxx			显示404错误
	/*
	if(request.url=="/"){
		response.write("index.html");
	}else if(request.url=="/login"){
		response.write("login");
	}else{
		response.write("404");
	}
	*/
	response.write("welcome");
	response.end();
});

let port = process.argv[2] || 3000;
server.listen(port, function() {
	console.log("http://localhost:" + port);
});
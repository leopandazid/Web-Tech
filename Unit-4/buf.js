var myurl = url.parse(request.url)
var pathname = myurl.pathname;
var query = request.query;
var host = myurl.host;
fs.writeFile("requestlog.txt", host + pathname + query, function (err) {
});

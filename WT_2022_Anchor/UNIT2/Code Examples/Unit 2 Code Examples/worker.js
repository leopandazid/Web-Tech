this.onmessage=function(event){
	console.log("Message Received:" +event.data);
}

setInterval function() {
	postMessage({"msg" :"Sending data at:", "tstamp":new Date().getTime()})
	
}

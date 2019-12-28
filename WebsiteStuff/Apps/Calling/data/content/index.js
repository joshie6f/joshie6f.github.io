function StartCall(){
	var button1 = document.getElementById('button1');
	button1.parentNode.removeChild(button1);
	
	
	var receiverNum = document.getElementById('receiver').innerText;
	var senderNum = document.getElementById('sender').innerText;
	
	document.write(receiverNum);
	document.write(senderNum);
	
	console.log(receiverNum);
	console.log(senderNum);
}
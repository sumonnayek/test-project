document.querySelector('#display-button').addEventListener('click', () => {
	let element = document.querySelector('.container11');
	if(element.classList.contains('messenger-active')) {
		element.classList.remove('messenger-active');
		element.classList.add('messenger-inactive');
	} else {
		element.classList.remove('messenger-inactive');
		element.classList.add('messenger-active');
	}
});

const send = document.querySelector('.send-button');
const chat = document.querySelector('.chat-space');
const message = document.querySelector('.input-msg');
var Q1 = "what is your name?";
var Q2 = "how are you?";
var Q3 = "how is todays weather";
var Q4 = "at what time it will be dark outsidedfsdfsdfsfsdf";

function inputLength() {
	return message.value.length;
}
function msg() {
	if(inputLength()>0) {
		msgCheck();
	}
}
function sendMsg() {
	// crete chat node
	const div = document.createElement('div');
	//add class to div
	div.className = "msg-box-div";
	//add P to send msg
	const span = document.createElement('span');
	//add class to span
	span.className = "msg-box-send";
    //Create text node and append to p
    span.appendChild(document.createTextNode(message.value));
    //append chat box to msg box
    div.appendChild(span);
    //append division to chat box
	chat.appendChild(div);
	
}

function receiveMsg(answer) {
	// create chat node
	const div = document.createElement('div');
	//add class to div
	div.className = "msg-box-div";
	//add P to send msg
	const span = document.createElement('span');
	//add class to span
	span.className = "msg-box-receive";
    //Create text node and append to span
    span.appendChild(document.createTextNode(answer));
    //append span to msg box div
    div.appendChild(span);
    //append division to chat box
	chat.appendChild(div);
	let container = document.querySelector(".chat-space");
	container.scrollTop = container.scrollHeight;
	return chat;
}
function msgCheck() {
	sendMsg();
	if(message.value == Q1) {
		receiveMsg("hi, I am Robert");
	}
	else if(message.value == Q2) {
		receiveMsg("I am Good, thanks. How are you?");
	}
	else if(message.value == Q3) {
		receiveMsg("today it's raining ");
	}
	else if(message.value == Q4) {
		receiveMsg("at your location it will be dark at 6.45pm");
	}
	else{
		receiveMsg("Please enter a valid question");
	}
	message.value = "";
	scrollToBottom();
}
send.addEventListener('click',msg)
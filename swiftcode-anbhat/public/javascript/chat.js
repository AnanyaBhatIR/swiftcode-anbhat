var app = angular.module('chatApp', ['ngMaterial']);

app.controller('chatController', function ($scope) {

	$scope.messages = [
	{
		sender: "BOT",
		text: "Hi, What can i do for You?",
		time: "3:40 AM"
	},
	{
		sender: "USER",
		text: "Hi, How are You?",
		time: "3:41 AM"
	}
	];

	var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");
	exampleSocket.onmessage  =   function  (event) {
           var jsonData = JSON.parse(event.data);
           console.log(jsonData);
       };
})
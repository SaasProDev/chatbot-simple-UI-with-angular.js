var botui = new BotUI('delivery-bot');
var goto_1 = function(){
botui.message
.bot({
delay:500,
content:'Hey there, Got a question? then we will help you get'
})
.then(function(){
return botui.action.button({
delay:1000,
addMessage:false,
action:[{
text : 'I want to chat to sales',
value : '2'},{
text : 'I want to chat to support',
value : '3'},]
});}).then(function(res){
if(res.value == '2') {botui.message.human({
delay : 500,
content: res.text
});
goto_2();
} else if(res.value == '3') {botui.message.human({
delay : 500,
content: res.text
});
goto_3();
}});
}
var goto_2 = function(){
}
var goto_3 = function(){
}
goto_1();
var goto_1 = function(){
}
var goto_2 = function(){
}
var goto_3 = function(){
}
goto_1();

function redirect_donate(){
	alert("You are redirected to donation page!");
}

document.getElementById('button').addEventListener('click' , function(){
	redirect_donate(this);
});
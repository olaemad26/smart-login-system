var enterEmail1 = document.getElementById("enterEmail1");
var enterPass1 = document.getElementById("enterPass1");
var btnLogin = document.getElementById("btnLogin");
var enterName = document.getElementById("enterName");
var enterEmail2 = document.getElementById("enterEmail2");
var enterPass2 = document.getElementById("enterPass2");
var btnSub = document.getElementById("btnSub");
var inputs = document.getElementsByClassName("form-control");
var signArr = [];
var SignUp = document.getElementById("SignUp");
var SignIn = document.getElementById("SignIn");
var login=document.getElementById("login");
var formTwo = document.getElementById("formTwo");
var formOne = document.getElementById("formOne");
var formThree = document.getElementById("formThree");
var signUpArr = [];
var pf=document.getElementById("pf");
var pf2=document.getElementById("pf2");
var head=document.getElementById("head");
var logout=document.getElementById("logout");

SignUp.addEventListener("click", getSignUP)

function getSignUP() {
    formOne.classList.add("d-none");
    formTwo.classList.remove("d-none");
}
SignIn.addEventListener("click", getSignIn)

function getSignIn() {
    formOne.classList.remove("d-none");
    formTwo.classList.add("d-none");
    
}

function saveData() {
    var signUpObj = {
        name: enterName.value,
        email: enterEmail2.value,
        password: enterPass2.value
    }
    signUpArr.push(signUpObj);
    localStorage.setItem("signUp", JSON.stringify(signUpArr));
    pf2.classList.remove("d-none");
    
}
btnSub.addEventListener("click", saveData);

function getClear() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}

btnLogin.addEventListener("click",getLogin)
function getLogin(){
    var save=JSON.parse(localStorage.getItem("signUp"));
    console.log(save)
    for(var i=0;i<save.length;i++){
        if(enterEmail1.value==save[i].email&&enterPass1.value==save[i].password){
            login.classList.add("d-none");
            formThree.classList.remove("d-none");
            head.innerHTML=`<h2 class="text-info py-5 px-5">Welcome ${save[i].name}</h2> ` 
        }
        else{
            pf.classList.remove("d-none");
        }
    }
}
logout.addEventListener("click",getSignOut)
function getSignOut(){
    login.classList.remove("d-none");
    formThree.classList.add("d-none");
    getClear();
}
// enterEmail1.addEventListener("keydown",function(){
//     enterEmail1.style.backgroundColor="red"
// })
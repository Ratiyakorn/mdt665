function getParams() {
    var idx = document.URL.indexOf('?');
    var params = new Array();
    if (idx != -1) {
        var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
        for (var i=0; i<pairs.length; i++) {
            nameVal = pairs[i].split('=');
            params[nameVal[0]] = nameVal[1];
        }
   }
    return params;
}

window.onload = loginLoad;
function loginLoad(){
  // วิธีใช้ getParams()
  var parameter = getParams();
  var clickbutton = document.getElementById("myLogin");
  clickbutton.onsubmit = checkLogin;
  console.log(parameter.username);
  console.log(parameter.password1);
}

function checkLogin(){
  var parameter = getParams();
  var u = document.forms["myLogin"]["username"].value;
  var p = document.forms["myLogin"]["password"].value;

  var a = parameter.username;
  var b = parameter.password1;

  if (u==a && p == b){
      alert("True");
      return true;
  }

  else{
      alert("Wrong");
      return false;
  }
  

  //ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}

          
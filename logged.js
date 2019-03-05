function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        document.cookie="check=false"
      console.log('User signed out.');
    });
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
/*
var chk = getCookie("check");
console.log('3.0');
console.log(getCookie("check"));
console.log(document.cookie);
console.log(getCookie("username"));
if (chk === "true") {
document.querySelector('.signinbtn').setAttribute('style','display:none;');
document.querySelector('.pcontent').setAttribute('style','display:block;');
document.querySelector('.pcontent').innerHTML = ;
} else {

}*/
if (auth2.isSignedIn.get()) {
    var profile = auth2.currentUser.get().getBasicProfile();
    document.querySelector('.signinbtn').setAttribute('style','display:none;');
    document.querySelector('.pcontent').setAttribute('style','display:block;');
    document.querySelector('.pcontent').innerHTML = profile.getName();
}  
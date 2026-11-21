let isloggedin=true;
let roles="guest";
if(isloggedin){
    if(roles==="admin"){
        console.log("welcome")
    }else{
        console.log("welcome,user!")
    }
}else{
    console.log("please login")
}
function register(){
    var user = rUsername.value
    localStorage.setItem('username',user)
    var pswd = rpswd.value
    localStorage.setItem('password',pswd)

    alert('Register successfully')
    window.location = "index.html"
}


function login(){
    var user =lUsername.value
    var pswd =lpswd.value

    if(user == localStorage.getItem('username')){
        if(pswd == localStorage.getItem('password')){
            alert('Login Successfull')
            window.location = "domrHome.html"
        }else{
            alert('Invalid Password')
        }
    }else{
        alert('Invalid username')
    }
}



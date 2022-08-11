let user = JSON.parse(window.localStorage.getItem('user'));
console.log(user);



const loginForm = document.querySelector('form')

function login(e){
    e.preventDefault();
    console.log("clicked submit")
    document.getElementById('error').innerHTML=''

    let username = document.getElementById('username');
    let password = document.getElementById('password');

    let loggingIn ={
        name: username.value,
        password: password.value
    }
    axios.post('/users/login', loggingIn).then(res => {
      console.log(res.data)
      window.localStorage.setItem('user',JSON.stringify(res.data))
      location.href = '/client/index2.html'
    }).catch(function (error) {
        console.log(JSON.stringify(error))
        document.getElementById('error').innerHTML='<b>Unsuccesful Attempt. Please try again.</b>'
      });
}
loginForm.addEventListener('submit', login)


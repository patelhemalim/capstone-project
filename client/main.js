let user = JSON.parse(window.localStorage.getItem('user'));
console.log(user);
//const {SERVER_PORT} = process.env

// function addUser(e) {
//     e.preventDefault()

//     let newUser = {
//         user: addInput.value
//     }

//     axios.put(`http://localhost:4005/api/users/${user.username}`, newUser).then(res => {

//         window.localStorage.setItem('user', JSON.stringify(res.data))
//     })
// }
// addForm.addEventListener('submit', addUser)


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


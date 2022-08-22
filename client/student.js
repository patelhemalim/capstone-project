const form = document.querySelector('form')
const addStudent = document.getElementById('addstudent')
const studentList = document.querySelector('#student-list')



function getStudents() {
    studentList.innerHTML = ''

    axios.get('/students/')
        .then(res => {
            res.data.forEach(elem => {
                let studentCard = `<div class="student-card">
                    <h2>Name: ${elem.name} <br>  Age: ${elem.age}  <br> Grade:  ${elem.grade}  <br> Classroom Teacher: ${elem.teacher} </h2>
                    <button onclick="deleteStudent(${elem['student_id']})">Delete</button>
                    </div>
                `

                studentList.innerHTML += studentCard
            })
        })
}

function deleteStudent(id) {
    axios.delete(`/students/${id}`)
        .then(() => getStudents())
        .catch(err => console.log(err))
}

getStudents()




function submitHandler(e) {
    e.preventDefault()
    let studentName = document.querySelector('#name')
    let age = document.querySelector('#age')
    let grade = document.querySelector('#grade')
    let teacher = document.querySelector('#teacher')

    let bodyObj = {
        studentName: studentName.value,
        age: age.value,
        grade: grade.value,
        teacher: teacher.value
    }

    axios.post('/students', bodyObj)
        .then(() => {
            studentName.value = ''
            age.value = ''
            grade.value = ''
            teacher.value = ''
            getStudents()

        })
}


form.addEventListener('submit', submitHandler)



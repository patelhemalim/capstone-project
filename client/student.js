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



let TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    let that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    let elements = document.getElementsByClassName('typewrite');
    for (let i=0; i<elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-type');
        let period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
//const baseURL = `http://localhost:4005/api/students`

const studentList = document.querySelector('#student-list')

function getStudents() {
    axios.get('/students')
        .then(res => {
            res.data.forEach(student => {
                const option = document.createElement('option')
                option.setAttribute('value', student['student_id'])
                option.textContent = student.name
                studentList.appendChild(option)
            })
        })
}
getStudents()

const form = document.querySelector('form')

function getReport() {

    document.getElementById('reportform').reset();

    axios.get(`/reportcard/${studentList.value}`)
        .then(res => {
            res.data.forEach(reportCard => {
                console.log(reportCard)
                var checkboxes = document.getElementsByName('learner_type')
                checkboxes.forEach((item) => {
                    if (item.value == reportCard.learner_type.toString()) item.checked = true
                })

                selectElement('present_gp1', reportCard.present_gp1);
                selectElement('present_gp2', reportCard.present_gp2);
                selectElement('present_gp3', reportCard.present_gp3);
                selectElement('present_gp4', reportCard.present_gp4);
                selectElement('absent_gp1', reportCard.absent_gp1);
                selectElement('absent_gp2', reportCard.absent_gp2);
                selectElement('absent_gp3', reportCard.absent_gp3);
                selectElement('absent_gp4', reportCard.absent_gp4);
                selectElement('m1', reportCard.math_gp1);
                selectElement('m2', reportCard.math_gp2);
                selectElement('m3', reportCard.math_gp3);
                selectElement('m4', reportCard.math_gp4);
                selectElement('r1', reportCard.reading_gp1);
                selectElement('r2', reportCard.reading_gp2);
                selectElement('r3', reportCard.reading_gp3);
                selectElement('r4', reportCard.reading_gp4);
                selectElement('w1', reportCard.writing_gp1);
                selectElement('w2', reportCard.writing_gp2);
                selectElement('w3', reportCard.writing_gp3);
                selectElement('w4', reportCard.writing_gp4);
                selectElement('svlm1', reportCard.speaking_gp1);
                selectElement('svlm2', reportCard.speaking_gp2);
                selectElement('svlm3', reportCard.speaking_gp3);
                selectElement('svlm4', reportCard.speaking_gp4);
                selectElement('l1', reportCard.language_gp1);
                selectElement('l2', reportCard.language_gp2);
                selectElement('l3', reportCard.language_gp3);
                selectElement('l4', reportCard.language_gp4);
                selectElement('s1', reportCard.science_gp1);
                selectElement('s2', reportCard.science_gp2);
                selectElement('s3', reportCard.science_gp3);
                selectElement('s4', reportCard.science_gp4);
                selectElement('ss1', reportCard.social_stidies_gp1);
                selectElement('ss2', reportCard.social_stidies_gp2);
                selectElement('ss3', reportCard.social_stidies_gp3);
                selectElement('ss4', reportCard.social_stidies_gp4);
                selectElement('mc1', reportCard.music_gp1);
                selectElement('mc2', reportCard.music_gp2);
                selectElement('mc3', reportCard.music_gp3);
                selectElement('mc4', reportCard.music_gp4);
                selectElement('art1', reportCard.visual_art_gp1);
                selectElement('art2', reportCard.visual_art_gp2);
                selectElement('art3', reportCard.visual_art_gp3);
                selectElement('art4', reportCard.visual_art_gp4);
                selectElement('p1', reportCard.physical_education_gp1);
                selectElement('p2', reportCard.physical_education_gp2);
                selectElement('p3', reportCard.physical_education_gp3);
                selectElement('p4', reportCard.physical_education_gp4);
                selectElement('li1', reportCard.library_gp1);
                selectElement('li2', reportCard.library_gp2);
                selectElement('li3', reportCard.library_gp3);
                selectElement('li4', reportCard.library_gp4);
                selectElement('wr1', reportCard.work_habit_gp1);
                selectElement('wr2', reportCard.work_habit_gp2);
                selectElement('wr3', reportCard.work_habit_gp3);
                selectElement('wr4', reportCard.work_habit_gp4);
                selectElement('ses1', reportCard.social_emotional_skills_gp1);
                selectElement('ses2', reportCard.social_emotional_skills_gp2);
                selectElement('ses3', reportCard.social_emotional_skills_gp3);
                selectElement('ses4', reportCard.social_emotional_skills_gp4);
                selectElement('comments', reportCard.comments);
            })
        })
}

form.addEventListener('submit', submitHandler)

function submitHandler(e) {
    e.preventDefault()
    let present_gp1 = document.querySelector('#present_gp1')
    let present_gp2 = document.querySelector('#present_gp2')
    let present_gp3 = document.querySelector('#present_gp3')
    let present_gp4 = document.querySelector('#present_gp4')

    let absent_gp1 = document.querySelector('#absent_gp1')
    let absent_gp2 = document.querySelector('#absent_gp2')
    let absent_gp3 = document.querySelector('#absent_gp3')
    let absent_gp4 = document.querySelector('#absent_gp4')

    let m1 = document.querySelector('#m1')
    let m2 = document.querySelector('#m2')
    let m3 = document.querySelector('#m3')
    let m4 = document.querySelector('#m4')

    let r1 = document.querySelector('#r1')
    let r2 = document.querySelector('#r2')
    let r3 = document.querySelector('#r3')
    let r4 = document.querySelector('#r4')

    let w1 = document.querySelector('#w1')
    let w2 = document.querySelector('#w2')
    let w3 = document.querySelector('#w3')
    let w4 = document.querySelector('#w4')

    let svlm1 = document.querySelector('#svlm1')
    let svlm2 = document.querySelector('#svlm2')
    let svlm3 = document.querySelector('#svlm3')
    let svlm4 = document.querySelector('#svlm4')

    let l1 = document.querySelector('#l1')
    let l2 = document.querySelector('#l2')
    let l3 = document.querySelector('#l3')
    let l4 = document.querySelector('#l4')

    let s1 = document.querySelector('#s1')
    let s2 = document.querySelector('#s2')
    let s3 = document.querySelector('#s3')
    let s4 = document.querySelector('#s4')

    let ss1 = document.querySelector('#ss1')
    let ss2 = document.querySelector('#ss2')
    let ss3 = document.querySelector('#ss3')
    let ss4 = document.querySelector('#ss4')

    let mc1 = document.querySelector('#mc1')
    let mc2 = document.querySelector('#mc2')
    let mc3 = document.querySelector('#mc3')
    let mc4 = document.querySelector('#mc4')

    let art1 = document.querySelector('#art1')
    let art2 = document.querySelector('#art2')
    let art3 = document.querySelector('#art3')
    let art4 = document.querySelector('#art4')

    let p1 = document.querySelector('#p1')
    let p2 = document.querySelector('#p2')
    let p3 = document.querySelector('#p3')
    let p4 = document.querySelector('#p4')

    let li1 = document.querySelector('#li1')
    let li2 = document.querySelector('#li2')
    let li3 = document.querySelector('#li3')
    let li4 = document.querySelector('#li4')

    let wr1 = document.querySelector('#wr1')
    let wr2 = document.querySelector('#wr2')
    let wr3 = document.querySelector('#wr3')
    let wr4 = document.querySelector('#wr4')


    let ses1 = document.querySelector('#ses1')
    let ses2 = document.querySelector('#ses2')
    let ses3 = document.querySelector('#ses3')
    let ses4 = document.querySelector('#ses4')

    let learner_type = document.getElementsByName('learner_type')

    var checkboxes = document.getElementsByName('learner_type')
    checkboxes.forEach((item) => {
        if (item.checked == true) learner_type = item
    })

    let comments = document.querySelector('#comments')
    document.getElementById('success').innerHTML=''
    document.getElementById('error').innerHTML=''

    let bodyObj = {
        student_id: studentList.value,
            
        math_gp1: m1.value,
        math_gp2: m2.value,
        math_gp3: m3.value,
        math_gp4: m4.value,

        reading_gp1: r1.value,
        reading_gp2: r2.value,
        reading_gp3: r3.value,
        reading_gp4: r4.value,

        writing_gp1: w1.value,
        writing_gp2: w2.value,
        writing_gp3: w3.value,
        writing_gp4: w4.value,

        speaking_gp1: svlm1.value,
        speaking_gp2: svlm2.value,
        speaking_gp3: svlm3.value,
        speaking_gp4: svlm4.value,

        language_gp1: l1.value,
        language_gp2: l2.value,
        language_gp3: l3.value,
        language_gp4: l4.value,

        science_gp1: s1.value,
        science_gp2: s2.value,
        science_gp3: s3.value,
        science_gp4: s4.value,

        social_stidies_gp1: ss1.value,
        social_stidies_gp2: ss2.value,
        social_stidies_gp3: ss3.value,
        social_stidies_gp4: ss4.value,

        music_gp1: mc1.value,
        music_gp2: mc2.value,
        music_gp3: mc3.value,
        music_gp4: mc4.value,

        visual_art_gp1: art1.value,
        visual_art_gp2: art2.value,
        visual_art_gp3: art3.value,
        visual_art_gp4: art4.value,

        physical_education_gp1: p1.value,
        physical_education_gp2: p2.value,
        physical_education_gp3: p3.value,
        physical_education_gp4: p4.value,

        library_gp1: li1.value,
        library_gp2: li2.value,
        library_gp3: li3.value,
        library_gp4: li4.value,

        work_habit_gp1: wr1.value,
        work_habit_gp2: wr2.value,
        work_habit_gp3: wr3.value,
        work_habit_gp4: wr4.value,

        social_emotional_skills_gp1: ses1.value,
        social_emotional_skills_gp2: ses2.value,
        social_emotional_skills_gp3: ses3.value,
        social_emotional_skills_gp4: ses4.value,

        present_gp1: present_gp1.value,
        present_gp2: present_gp2.value,
        present_gp3: present_gp3.value,
        present_gp4: present_gp4.value,

        absent_gp1: absent_gp1.value,
        absent_gp2: absent_gp2.value,
        absent_gp3: absent_gp3.value,
        absent_gp4: absent_gp4.value,

        learner_type: learner_type.value,
        comments: comments.value
    }

    axios.post('/reportcard', bodyObj)
        .then(() => {
            present_gp1.value = ''
            present_gp2.value = ''
            present_gp3.value = ''
            present_gp4.value = ''

            absent_gp1.value = ''
            absent_gp2.value = ''
            absent_gp3.value = ''
            absent_gp4.value = ''

            m1.value = ''
            m2.value = ''
            m3.value = ''
            m4.value = ''

            r1.value = ''
            r2.value = ''
            r3.value = ''
            r4.value = ''

            w1.value = ''
            w2.value = ''
            w3.value = ''
            w4.value = ''

            svlm1.value = ''
            svlm2.value = ''
            svlm3.value = ''
            svlm4.value = ''

            l1.value = ''
            l2.value = ''
            l3.value = ''
            l4.value = ''

            s1.value = ''
            s2.value = ''
            s3.value = ''
            s4.value = ''

            ss1.value = ''
            ss2.value = ''
            ss3.value = ''
            ss4.value = ''

            art1.value = ''
            art2.value = ''
            art3.value = ''
            art4.value = ''

            p1.value = ''
            p2.value = ''
            p3.value = ''
            p4.value = ''

            li1.value = ''
            li2.value = ''
            li3.value = ''
            li4.value = ''

            wr1.value = ''
            wr2.value = ''
            wr3.value = ''
            wr4.value = ''

            ses1.value = ''
            ses2.value = ''
            ses3.value = ''
            ses4.value = ''

            comments.value = ''
            document.getElementById('success').innerHTML='<b>Report card saved successfully!!!</b>'
            getReport()
        }).catch(function (error) {
            document.getElementById('error').innerHTML='<b>Please try again.</b>'
          });
}
function selectElement(id, valueToSelect) {
    let element = document.getElementById(id);
    element.value = valueToSelect;
}

function printReportCard(){
    window.open(`./index5.html?student_id=${studentList.value}`, 'Report Card','height=' + screen.height + ',width=' + screen.width + ',resizable=yes,scrollbars=yes,toolbar=yes,menubar=yes,location=yes')
}
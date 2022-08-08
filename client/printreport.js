//const baseURL = `http://localhost:4005/api/students`

getReport()


function getReport() {
    // const params = { id: studentList.value };

    axios.get(`/reportcard/35`)
        .then(res => {
            res.data.forEach(reportCard => {
                console.log(reportCard)
                var checkboxes = document.getElementsByName('learner_type')
                checkboxes.forEach((item) => {
                    if (item.value == reportCard.learner_type.toString()) item.checked = true
                })
                selectElement('student_id', reportCard.student_id);
                selectElement('name', reportCard.name);
                selectElement('age', reportCard.age);
                selectElement('grade', reportCard.grade);
                selectElement('school', reportCard.school);
                selectElement('teacher', reportCard.teacher);

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
function selectElement(id, valueToSelect) {
    let element = document.getElementById(id);
    element.innerHTML = valueToSelect;
    console.log(element)
}

function print(){
    window.open(`./index5.html?student_id=${studentList.value}`, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes')
}
require('dotenv').config();
const { CONNECTION_STRING } = process.env;


const Sequelize = require('sequelize');

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialet: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    seed: (req, res) => {
        sequelize.query(`

        CREATE TABLE  students (
            student_id SERIAL PRIMARY KEY,
            name varchar(100) NOT NULL,
            age INTEGER NOT NULL,
            grade VARCHAR(100) NOT NULL,
            school VARCHAR(100) NOT NULL,
            teacher VARCHAR(100) NOT NULL
            );
            
            CREATE TABLE report_card (
                report_card_id SERIAL PRIMARY KEY,
                student_id INTEGER NOT NULL REFERENCES students(student_id),
                math_gp1 INTEGER NOT NULL,
                math_gp2 INTEGER NOT NULL,
                math_gp3 INTEGER NOT NULL,
                math_gp4 INTEGER NOT NULL,
                reading_gp1 INTEGER NOT NULL,
                reading_gp2 INTEGER NOT NULL,
                reading_gp3 INTEGER NOT NULL,
                reading_gp4 INTEGER NOT NULL,
                writing_gp1 INTEGER NOT NULL,
                writing_gp2 INTEGER NOT NULL,
                writing_gp3 INTEGER NOT NULL,
                writing_gp4 INTEGER NOT NULL,
                speaking_gp1 INTEGER NOT NULL,
                speaking_gp2 INTEGER NOT NULL,
                speaking_gp3 INTEGER NOT NULL,
                speaking_gp4 INTEGER NOT NULL,
                language_gp1 INTEGER NOT NULL,
                language_gp2 INTEGER NOT NULL,
                language_gp3 INTEGER NOT NULL,
                language_gp4 INTEGER NOT NULL,
                science_gp1 INTEGER NOT NULL,
                science_gp2 INTEGER NOT NULL,
                science_gp3 INTEGER NOT NULL,
                science_gp4 INTEGER NOT NULL,
                social_stidies_gp1 INTEGER NOT NULL,
                social_stidies_gp2 INTEGER NOT NULL,
                social_stidies_gp3 INTEGER NOT NULL,
                social_stidies_gp4 INTEGER NOT NULL,
                music_gp1 INTEGER NOT NULL,
                music_gp2 INTEGER NOT NULL,
                music_gp3 INTEGER NOT NULL,
                music_gp4 INTEGER NOT NULL,
                visual_art_gp1 INTEGER NOT NULL,
                visual_art_gp2 INTEGER NOT NULL,
                visual_art_gp3 INTEGER NOT NULL,
                visual_art_gp4 INTEGER NOT NULL,
                physical_education_gp1 INTEGER NOT NULL,
                physical_education_gp2 INTEGER NOT NULL,
                physical_education_gp3 INTEGER NOT NULL,
                physical_education_gp4 INTEGER NOT NULL,
                library_gp1 INTEGER NOT NULL,
                library_gp2 INTEGER NOT NULL,
                library_gp3 INTEGER NOT NULL,
                library_gp4 INTEGER NOT NULL,
                work_habit_gp1 INTEGER NOT NULL,
                work_habit_gp2 INTEGER NOT NULL,
                work_habit_gp3 INTEGER NOT NULL,
                work_habit_gp4 INTEGER NOT NULL,
                social_emotional_skills_gp1 INTEGER NOT NULL,
                social_emotional_skills_gp2 INTEGER NOT NULL,
                social_emotional_skills_gp3 INTEGER NOT NULL,
                social_emotional_skills_gp4 INTEGER NOT NULL,
                CONSTRAINT student_unique UNIQUE (student_id));
            
            CREATE TABLE attendance (
                attenance_id SERIAL PRIMARY KEY,
                student_id INTEGER NOT NULL REFERENCES students(student_id),
                present_gp1 INTEGER NOT NULL,
                present_gp2 INTEGER NOT NULL,
                present_gp3 INTEGER NOT NULL,
                present_gp4 INTEGER NOT NULL,
                absent_gp1 INTEGER NOT NULL,
                absent_gp2 INTEGER NOT NULL,
                absent_gp3 INTEGER NOT NULL,
                absent_gp4 INTEGER NOT NULL,
                CONSTRAINT attendance_unique UNIQUE (student_id)
                );
                
                CREATE TABLE learner (
                    lerner_id SERIAL PRIMARY KEY,
                    learner_type INTEGER NOT NULL,
                    comments VARCHAR(200),
                    student_id INTEGER NOT NULL REFERENCES students(student_id),
                   CONSTRAINT learner_unique UNIQUE (student_id)
                    );

        INSERT INTO students (name,age,grade,school,teacher)
        VALUES ('Amino Miller',8,'3','Creative STEM Academy','Ms.Hema'),
         ('Bina Patel',9,'3','Creative STEM Academy','Ms.Hema'),
     ('Carly Buctul',8,'3','Creative STEM Academy','Ms.Hema'),
         ('Diana Gloss',8,'3','Creative STEM Academy','Ms.Hema'),
         ('Haya Thomas',9,'3','Creative STEM Academy','Ms.Hema'),
        ('Jitu Parmar',9,'3','Creative STEM Academy','Ms.Hema'),
        ('Ketul Barlowe',8,'3','Creative STEM Academy','Ms.Hema'),
        ('Kareena Caddel',8,'3','Creative STEM Academy','Ms.Hema'),
         ('Monil Katz',9,'3','Creative STEM Academy','Ms.Hema'),
         ('Misha Laurier',8,'3','Creative STEM Academy','Ms.Hema'),
         ('Maya Madden',8,'3','Creative STEM Academy','Ms.Hema'),
         ('Minesh Elrod',8,'3','Creative STEM Academy','Ms.Hema'),
         ('Niru Whitlock',9,'3','Creative STEM Academy','Ms.Hema'),
         ('Quinn Smith',8,'3','Creative STEM Academy','Ms.Hema'),
         ('Radha Williams',8,'3','Creative STEM Academy','Ms.Hema'),
         ('Sachin Jones',8,'3','Creative STEM Academy','Ms.Hema');

 `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    },
    getStudents: (req, res) => {
        sequelize.query(`SELECT * FROM students`).then(dbRes => {
            res.status(200).send(dbRes[0])

        }).catch(err => console.log('error seeding DB', err))
    },
    createStudent: (req, res) => {
        const { studentName, age, grade, teacher } = req.body;
        sequelize.query(`INSERT INTO students (name,age,grade,school,teacher)
    VALUES('${studentName}',${age},'${grade}','Creative STEM Academy','${teacher}')`).then(dbRes => {
            res.status(200).send(dbRes[0])

        }).catch(err => console.log('error seeding DB', err))

    },

    deleteStudent: (req, res) => {
        const { id } = req.params;
        sequelize.query(`DELETE FROM students WHERE student_id = ${id}`).then(dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log('error seeding DB', err))
    },

    getReport: (req, res) => {
        const { id } = req.params;
        sequelize.query(`select students.*,report_card.*,learner.*,attendance.* from students 
    JOIN report_card ON students.student_id = report_card.student_id 
    JOIN learner ON students.student_id = learner.student_id
    JOIN attendance ON students.student_id = attendance.student_id
    WHERE students.student_id = ${id}`).then(dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log('error seeding DB', err))
    },
    createOrUpdateReportCard: (req, res) => {

        const { student_id, math_gp1, math_gp2, math_gp3, math_gp4, reading_gp1, reading_gp2, reading_gp3, reading_gp4, writing_gp1, writing_gp2, writing_gp3, writing_gp4, speaking_gp1, speaking_gp2, speaking_gp3, speaking_gp4, language_gp1, language_gp2, language_gp3, language_gp4, science_gp1, science_gp2, science_gp3, science_gp4, social_stidies_gp1, social_stidies_gp2, social_stidies_gp3, social_stidies_gp4, music_gp1, music_gp2, music_gp3, music_gp4, visual_art_gp1, visual_art_gp2, visual_art_gp3, visual_art_gp4, physical_education_gp1, physical_education_gp2, physical_education_gp3, physical_education_gp4, library_gp1, library_gp2, library_gp3, library_gp4, work_habit_gp1, work_habit_gp2, work_habit_gp3, work_habit_gp4, social_emotional_skills_gp1, social_emotional_skills_gp2, social_emotional_skills_gp3, social_emotional_skills_gp4, present_gp1, present_gp2, present_gp3, present_gp4, absent_gp1, absent_gp2, absent_gp3, absent_gp4, learner_type, comments } = req.body;

        sequelize.query(`INSERT INTO report_card (student_id,math_gp1,math_gp2,math_gp3,math_gp4,reading_gp1,reading_gp2,reading_gp3,reading_gp4,writing_gp1,writing_gp2,writing_gp3,writing_gp4,speaking_gp1,speaking_gp2,speaking_gp3,speaking_gp4,language_gp1,language_gp2,language_gp3,language_gp4,science_gp1,science_gp2,science_gp3,science_gp4,social_stidies_gp1,social_stidies_gp2,social_stidies_gp3,social_stidies_gp4,music_gp1,music_gp2,music_gp3,music_gp4,visual_art_gp1,visual_art_gp2,visual_art_gp3,visual_art_gp4,physical_education_gp1,physical_education_gp2,physical_education_gp3,physical_education_gp4,library_gp1,library_gp2,library_gp3,library_gp4,work_habit_gp1,work_habit_gp2,work_habit_gp3,work_habit_gp4,social_emotional_skills_gp1,social_emotional_skills_gp2,social_emotional_skills_gp3,social_emotional_skills_gp4)
    VALUES(${student_id},${math_gp1},${math_gp2},${math_gp3},${math_gp4},${reading_gp1},${reading_gp2},${reading_gp3},${reading_gp4},${writing_gp1},${writing_gp2},${writing_gp3},${writing_gp4},${speaking_gp1},${speaking_gp2},${speaking_gp3},${speaking_gp4},${language_gp1},${language_gp2},${language_gp3},${language_gp4},${science_gp1},${science_gp2},${science_gp3},${science_gp4},${social_stidies_gp1},${social_stidies_gp2},${social_stidies_gp3},${social_stidies_gp4},${music_gp1},${music_gp2},${music_gp3},${music_gp4},${visual_art_gp1},${visual_art_gp2},${visual_art_gp3},${visual_art_gp4},${physical_education_gp1},${physical_education_gp2},${physical_education_gp3},${physical_education_gp4},${library_gp1},${library_gp2},${library_gp3},${library_gp4},${work_habit_gp1},${work_habit_gp2},${work_habit_gp3},${work_habit_gp4},${social_emotional_skills_gp1},${social_emotional_skills_gp2},${social_emotional_skills_gp3},${social_emotional_skills_gp4})
    ON CONFLICT (student_id) DO UPDATE SET math_gp1=${math_gp1},math_gp2=${math_gp2},math_gp3=${math_gp3},math_gp4=${math_gp4},reading_gp1=${reading_gp1},reading_gp2=${reading_gp2},reading_gp3=${reading_gp3},reading_gp4=${reading_gp4},writing_gp1=${writing_gp1},writing_gp2=${writing_gp2},writing_gp3=${writing_gp3},writing_gp4=${writing_gp4},speaking_gp1=${speaking_gp1},speaking_gp2=${speaking_gp2},speaking_gp3=${speaking_gp3},speaking_gp4=${speaking_gp4},language_gp1=${language_gp1},language_gp2=${language_gp2},language_gp3=${language_gp3},language_gp4=${language_gp4},science_gp1=${science_gp1},science_gp2=${science_gp2},science_gp3=${science_gp3},science_gp4=${science_gp4},social_stidies_gp1=${social_stidies_gp1},social_stidies_gp2=${social_stidies_gp2},social_stidies_gp3=${social_stidies_gp3},social_stidies_gp4=${social_stidies_gp4},music_gp1=${music_gp1},music_gp2=${music_gp2},music_gp3=${music_gp3},music_gp4=${music_gp4},visual_art_gp1=${visual_art_gp1},visual_art_gp2=${visual_art_gp2},visual_art_gp3=${visual_art_gp3},visual_art_gp4=${visual_art_gp4},physical_education_gp1=${physical_education_gp1},physical_education_gp2=${physical_education_gp2},physical_education_gp3=${physical_education_gp3},physical_education_gp4=${physical_education_gp4},library_gp1=${library_gp1},library_gp2=${library_gp2},library_gp3=${library_gp3},library_gp4=${library_gp4},work_habit_gp1=${work_habit_gp1},work_habit_gp2=${work_habit_gp2},work_habit_gp3=${work_habit_gp3},work_habit_gp4=${work_habit_gp4},social_emotional_skills_gp1=${social_emotional_skills_gp1},social_emotional_skills_gp2=${social_emotional_skills_gp2},social_emotional_skills_gp3=${social_emotional_skills_gp3},social_emotional_skills_gp4=${social_emotional_skills_gp4} WHERE report_card.student_id=${student_id}`).then(dbRes => {
            console.log(dbRes[0])
        }).catch(err => console.log('error seeding DB', err))



        sequelize.query(`INSERT INTO attendance (student_id,present_gp1,present_gp2,present_gp3,present_gp4,absent_gp1,absent_gp2,absent_gp3,absent_gp4)
    VALUES(${student_id},${present_gp1},${present_gp2},${present_gp3},${present_gp4},${absent_gp1},${absent_gp2},${absent_gp3},${absent_gp4})
    ON CONFLICT (student_id) DO UPDATE SET present_gp1 = ${present_gp1},present_gp2= ${present_gp2},present_gp3= ${present_gp3},present_gp4= ${present_gp4},absent_gp1=${absent_gp1},absent_gp2=${absent_gp2},absent_gp3=${absent_gp3},absent_gp4=${absent_gp4} WHERE attendance.student_id=${student_id}`).then(dbRes => {
            console.log(dbRes[0])
        }).catch(err => console.log('error seeding DB', err))

        sequelize.query(`INSERT INTO learner (student_id,learner_type,comments)
    VALUES(${student_id},${learner_type},'${comments}')
    ON CONFLICT (student_id) DO UPDATE SET learner_type=${learner_type},comments='${comments}' WHERE learner.student_id=${student_id}`).then(dbRes => {
            console.log(dbRes[0])
        }).catch(err => console.log('error seeding DB', err))

    },


}



class Course {
    constructor(
        name,
        classes = []
    ){
        this.name = name;
        this.classes = classes;
    }
}

const cursoProgBasica = new Course({
    name: 'Curso Gratis de Programacion Basica'
})

const cursoDefinitivoHTML = new Course({
    name: 'Curso Definitivo de HTML y CSS'
})

const cursoPracticoHTML = new Course({
    name: 'Curso Practico de HTML y CSS'
})

class LearningPaths{
    constructor(
        name,
        courses = []
    ){
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPaths({
    name: 'Escuela de Desarrollo Web',
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ]
})

const escuelaData = new LearningPaths({
    name: 'Escuela de Data Science',
    courses: [
        cursoProgBasica,
        'Curso DataBusiness',
        'Curso DataViz',
    ]
})

const escuelaVgs = new LearningPaths({
    name: 'Escuela de Videojuegos',
    courses: [
        cursoProgBasica,
        'Curso de Unity3D',
        'Curso de Unreal Engine',
    ]
})

class Student {
    constructor(
        name, 
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    ){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const rodolfo = new Student({
    name: 'Rodolfo',
    email: 'rgonzalezjimenez8@gmail.com',
    username: 'rodolfogonzalez_',
    learningPaths: [
        escuelaWeb
    ]
})
class Comment {
    constructor({
        content,
        studentName,
        studentRole = "Estudiante",
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar(){
        console.log(this.studentName + " (" + this.studentRole + ") " );
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}

function videoPlay(id){
    const urlSecreta = "https://platzi.com " + id;
    console.log("Se está reproduciendo desde la url secreta " + urlSecreta)
}

function videoStop(id){
    const urlSecreta = "https://platzi.com " + id;
    console.log("Pausamos la url " + urlSecreta)
}

class PlatziClass{
    constructor({
        name,
        videoId
    }){
        this.name = name;
        this.videoId = videoId
    }

    reproducir(){
        videoPlay(this.videoId);
    }

    pausar(){
        videoStop(this.videoId)
    }
}

class Course {
    constructor(
        name,
        classes = [],
        isFree = false,
        lang = "Spanish"
    ){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name(){
        return this._name;
    }

    set name(nuevoNombre){
        if (nuevoNombre == "Lo que no quiero que sea"){
            console.error("NOOOOOO")
        } else {
            this._name = nuevoNombre;
        }
    }
}

const cursoProgBasica = new Course({
    name: 'Curso Gratis de Programacion Basica',
    isFree: true,

})

const cursoDefinitivoHTML = new Course({
    name: 'Curso Definitivo de HTML y CSS'
})

const cursoPracticoHTML = new Course({
    name: 'Curso Practico de HTML y CSS',
    lang: "English"
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

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,

        });
        
        comment.publicar();
    }
}

class FreeStudent extends Student{
    constructor(props){
        super(props);
    }

    approvedCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos " + this.name + " solo puedes tomar cursos gratis")
        }
    }
}

class BasicStudent extends Student{
    constructor(props){
        super(props);
    }

    approvedCourse(newCourse){
        if(newCourse.lang !== "English"){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos " + this.name + " no puedes tomar cursos en ingles")
        }
    }
}

class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }

    approvedCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student{
    constructor(props){
        super(props);
    }

    approvedCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "Profesor"

        });
        
        comment.publicar();
    }
}


const rodolfo1 = new ExpertStudent({
    name: 'Rodolfo',
    email: 'rgonzalezjimenez8@gmail.com',
    username: 'rodolfogonzalez_',
    learningPaths: [
        escuelaWeb
    ]
})

const rodolfo2 = new BasicStudent({
    name: 'Rodolfo',
    email: 'rgonzalezjimenez8@gmail.com',
    username: 'rodolfogonzalez_',
    learningPaths: [
        escuelaWeb
    ]
})

const rodolfo3 = new FreeStudent({
    name: 'Rodolfo',
    email: 'rgonzalezjimenez8@gmail.com',
    username: 'rodolfogonzalez_',
    learningPaths: [
        escuelaWeb
    ]
})

const admin = new TeacherStudent({
    name: 'Admin',
    email: 'rgonzalezjimenez8@gmail.com',
    username: 'rodolfogonzalez_',
    learningPaths: [
        escuelaWeb
    ]
})

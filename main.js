const rodolfo = {
    name: 'Rodolfo',
    age: 18,
    cursosAprobados: [
        'Curso Definitivo de HTML y CSS',
        'Curso Practico de HTML y CSS'
    ], 
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito)
    }
};

function Students(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    /*this.aprobarCurso = function (nuevoCursito){
        this.cursosAprobados.push(nuevoCursito)
    }*/
}

Students.prototype.aprobarCurso = function (nuevoCursito){
    this.cursosAprobados.push(nuevoCursito)
}

const jesus = new Students(
    'Jesus Gonzalez',
    14,
    [
        'Curso de Introduccion a la produccion de videojuegos',
        'Curso de creacion de personajes'
    ]

)

//Prototipos con la sintaxis de las clases

class Students2 {
    constructor({
        name, 
        age, 
        cursosAprobados = [],
        email,
    }){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.email = email;
    }

    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito)
    }
}


const dexi = new Students2({
    name: 'Dexi',
    age: 50,
    cursosAprobados: [
        'Curso de Analisis de Negocios para Ciencia de Datos',
        'Curso de principios de visualizacion de Datos par BI'
    ],
    email: 'dexi@gmail.com'
})

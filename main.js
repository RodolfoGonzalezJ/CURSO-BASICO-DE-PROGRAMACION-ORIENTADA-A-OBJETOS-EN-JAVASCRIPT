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

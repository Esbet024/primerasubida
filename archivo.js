const opciones = {
	idcurso:{
		demand: true,
		alias:'i'
	},
	nombre:{
		demand: true,
		alias: 'n'
	},
	cedula:{
		demand: true,
		alias:'c'
	}

}
const {Materia1,Materia2,Materia3}=require ('./cursos');
const fs = require('fs');

const argv= require('yargs')
			.command('registrar','realizar registro',opciones)
			.argv

nombre=argv.nombre;
cedula=argv.cedula;
id=argv.idcurso;
let crearArchivo1 = (cursos) =>{
	texto = 'el estudiante '+ nombre+ '  \n' +' con cedula de ciudadania '+ cedula+
			' se ha inscrito al curso '+Materia1.nombre+ ' ,con una duracion de '+Materia1.duracion+ ' y un valor de '+Materia1.valor;
	fs.writeFile('inscripcion.txt',texto,(err)=>{
		if(err) throw (err);
		console.log('se ha creado el archivo')
	});
}
let crearArchivo2 = (cursos) =>{
	texto = 'el estudiante '+ nombre+ '\n'+' con cedula de ciudadania '+ cedula+
			' se ha inscrito al curso '+Materia2.nombre+ ' ,con una duracion de '+Materia2.duracion+ ' y un valor de '+Materia2.valor;
	fs.writeFile('inscripcion.txt',texto,(err)=>{
		if(err) throw (err);
		console.log('se ha creado el archivo')
	});
}
let crearArchivo3 = (cursos) =>{
	texto = 'el estudiante '+ nombre+ '\n'+'con cedula de ciudadania '+ cedula+
			' se ha inscrito al curso '+Materia3.nombre+ ' ,con una duracion de '+Materia3.duracion+ ' y un valor de '+Materia2.valor;
	fs.writeFile('inscripcion.txt',texto,(err)=>{
		if(err) throw (err);
		console.log('se ha creado el archivo')
	});
}
if(id==1){
	crearArchivo1(Materia1);
}else if(id==2){
	crearArchivo2(Materia2);
}else if(id==3){
	crearArchivo3(Materia3);
}else{
	console.log("el curso no se encuentra registrado, intentelo nuevamente");
}

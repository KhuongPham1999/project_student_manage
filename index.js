var fs = require('fs');
var readlineSync = require('readline-sync');
var students = [];

function showMenu(){
	console.log("1. Show all students");
	console.log("2. Create a new student");
	console.log("3. Save and Exit");
	var question = readlineSync.question("Your choose: ");
	switch(question){
		case "1":
			showAllStudents();
			showMenu();
			break;
		case "2":
			createStudent();
			showMenu();
			break;
		case "3":
			saveAndExit();
			break;
		default:
			console.log("Wrong select!");
			showMenu();
			break;
	}
}

function readData(){
	var content = fs.readFileSync("./data.json");
	students = JSON.parse(content);
}

function showAllStudents(){
	for(var student of students){
		console.log(student.name, student.age);
	}
}

function createStudent(){
	var name = readlineSync.question("Name: ");
	var age = readlineSync.question("Age: ");
	var student = {
		name: name,
		age: parseInt(age)
	};
	students.push(student);
}

function saveAndExit(){
	var contents = JSON.stringify(students);
	fs.writeFileSync("./data.json", contents, { encoding:'utf8' });
}

function main(){
	readData();
	showMenu();
}
main();
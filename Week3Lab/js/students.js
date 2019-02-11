function initializeStudents() {
    var data = getTestStudents();
    displayStudents(data.students);
}

function getTestStudents() {
    return JSON.parse(testStudents);
}

function displayStudents(students) {

    for (i = 0; i < students.length; i++) {

        console.log('id: ' + students[i].id);

        var studId = students[i].id;
        var eMail = students[i].email;
        var outdata = "<tr><td>" + studId + "</td><td>" + eMail + "</td></tr>";

        $("table tbody").append(outdata);
    }
}

var testStudents = '{"students": [{"id": "95123654","email": "roger.smith@oit.edu"},{"id": "95131658","email": "mark.hamilton@oit.edu},{"id": "95178549","email": "brandon.cartwright@oit.edu},{"id": "95145625","email": "glen.sullivan@oit.edu},{"id": "95133652","email": "cat.peterson@oit.edu}]}'
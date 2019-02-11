function initializePersons() {
    var data = getTestPersons();
    displayPersons(data.persons);
}

function getTestPersons() {
    return JSON.parse(testPersons);
}

function displayPersons(persons) {

    for (i = 0; i < persons.length; i++) {

        console.log('first name: ' + persons[i].fname);

        var firstName = persons[i].fname;
        var midInit = persons[i].midInt;
        var lastName = persons[i].lname;
        var outdata = "<tr><td>" + firstName + "</td><td>" + midInit + "</td><td>" + lastName + "</td></tr>";

        $("table tbody").append(outdata);
    }
}

var testStudents = '{"persons": [{"fname": "Roger","midInt": "A","lname": "Smith"}, {"fname": "Mark","midInt": "J","lname": "Hamilton"}, {"fname": "Brandon","midInt": "H","lname": "Cartwright"}, {"fname": "Glen","midInt": "M","lname": "Sullivan"}, {"fname": "Catherine","midInt": "S","lname": "Peterson"}]}'
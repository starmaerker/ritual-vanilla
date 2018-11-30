var database = firebase.database();
var db;
let data = {};

function collectData() {

    let name = document.getElementsByName("name");
    let email = document.getElementsByName("email");
    let age = document.getElementsByName("age");
    let date = document.getElementsByName("date");


    data[name[0].name] = name[0].value;
    data[email[0].name] = email[0].value;
    data[age[0].name] = age[0].value;
    data[date[0].name] = date[0].value;


    /*
    alert(db.email + " " + email[0].value);

    if (db.email ===  email[0].value) {
        alert("This email already submitted the survey.");
    } else {
        
        database.ref().child('user-data').update(data);
    }
    */

    writeUserData(date[0].value, name[0].value, email[0].value, age[0].value);


}

function writeUserData(date, name, email, age) {
    firebase.database().ref('test/' + date).set({
        username: name,
        email: email,
        age: age
    });
}

function updateFirebase(name, value) {
    //database.ref().child('user-data').push().key

    database.ref().child('user-data').update({
        [name]: value,
    });
}

var snap = function retrieveFromFirebase() {
    return database.ref().child('user-data').once('value').then(function (snapshot) {
        db = snapshot.val();
        testFn(db);
    });
}

function testFn(input) {
    alert(input.email);
}

// snap();


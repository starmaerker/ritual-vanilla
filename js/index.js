function collectData() {    
    let data = {};
    let name = document.getElementsByName("name");
    let email = document.getElementsByName("email");
    let age = document.getElementsByName("age");

    data[name[0].name] = name[0].innerHTML;
    data[email[0].name] = email[0].innerHTML;
    data[age[0].name] = age[0].innerHTML;

    console.log(data);
  
}

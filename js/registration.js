function reg() {
    var errors = ""
    var reg1 = /^\D{3}/;
    var reg2 = /(\d+).(\d+).(\d+)/;
    var reg3 = /\d/g;
    var reg4 = /^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/
    var reg5 = /^\w{8}/
    var lastnameBool = reg1.test(document.regForm.lastname.value);
    var firstnameBool = reg1.test(document.regForm.firstname.value);
    var fathersnameBool = reg1.test(document.regForm.fathersname.value);
    var nicknameBool = reg1.test(document.regForm.nickname.value);
    var birthdayBool = reg2.test(document.regForm.birthday.value);
    var phonenumberBool = document.regForm.phonenumber.value.match(reg3)
    var emailBool = reg4.test(document.regForm.email.value);
    var passwordBool = reg5.test(document.regForm.password.value);
    if (phonenumberBool == null) {
        phonenumberBool = false;
    }
    else if (phonenumberBool.length == 11) {
        phonenumberBool = true;
    }
    else {
        phonenumberBool = false;
    }

    if (!lastnameBool) errors += "\nФамилия должна состоять от 3 букв или более.";
    if (!firstnameBool) errors += "\nИмя должно состоять от 3 букв или более.";
    if (!fathersnameBool) errors += "\nОтчество должно состоять от 3 букв или более.";
    if (!nicknameBool) errors += "\nПсевдоним должен состоять от 3 букв и более.";
    if (!birthdayBool) errors += "\nНеправильный формат даты рождения. Необходим DD.MM.YYYY.";
    if (!phonenumberBool) errors += "\nНомер телефона должен состоять из 11 цифр.";
    if (!emailBool) errors += "\nНеверный формат электронного адреса.";

    if (!passwordBool) errors += "\nПароль должен состоять минимум из 8 символов.";
    else if (passwordBool == true &&
        document.regForm.password.value !=
        document.regForm.passwordtwo.value)
        errors += "\nПароли не совпадают.";

    if (errors == "") errors = "Успешно";
    alert(errors);
}
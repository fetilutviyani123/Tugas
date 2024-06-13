function handleGetFormData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("city ").value;
    let zipCode = document.getElementById("zipCode").value;
    let status = document.getElementById("status").value;
    if (name === "") {
        alret ("Nama harus diisi");
        return false;
    }
    if (email === "") {
        alret("Email harus diisi");
        return false;
    }
    else if(!emailPattern.test(email)) {
        alret("Format email tidak valid");
        return false;
    }
    if (city === "") {
        alret ("City harus diisi");
        return false;
    }

    alret ("formulir berhasil dikirim");
    return true;
    }

    function isNumber(str){
        for (let i = 0; i < str.length; i++){
            if (isNaN(str[i]) || str[i] === ''){
                return false;
            }
        }
        return true;
    }

    function checkboxIsChecked(){
        var checkbox = document.getElementById("status");
        if (checkbox.checked){
            return true;
        } else {
            return false;
        }
    }
    function checkCheckbox(){
        if(checkboxIsChecked()){
            alret("Checbox dicentang");
        }else{
            alret("Checkbox tidak dicentang");
        }
    }    
    function validateFormData(data){
        let isObjectValid = data !== null;
        let iszipCodeValid =isNumber(data.zipCode);
        let isstatuschecked = checkboxIsChecked();    
    }
    function submitForm(){
        var formData = {
            name: document.getElementById("name").value,
            city: document.getElementById("city").value,
            email: document.getElementById("email").value,
            zipCode: document.getElementById("zipCode").value,
            status: document.getElementById("status").value
        };
        if (validateFormData(formData)) {
            alret ("Fomulir valid dan siap dikirim!");
        } else{
            alret ("Formulir tidak valid");
        }

        }

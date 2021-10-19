function populate_dropdowns() {
    let birth_day_array = [' ']
    for (let i = 1; i < 32; i++) {
        birth_day_array.push(i.toString())
    }
    let birth_month_array = [' ', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December']

    let birth_year_array = [' '];
    for (let i = 1970; i < 2011; i++) {
        birth_year_array.push(i.toString())
    }

    let birth_day_select = document.getElementById("birth_day");
    for (index in birth_day_array) {
        birth_day_select.options[birth_day_select.options.length] = new Option(birth_day_array[index])
    }
    let birth_month_select = document.getElementById('birth_month');
    for (index in birth_month_array) {
        birth_month_select.options[birth_month_select.options.length] = new Option(birth_month_array[index])
    }
    let birth_year_select = document.getElementById('birth_year');
    for (index in birth_year_array) {
        birth_year_select.options[birth_year_select.options.length] = new Option(birth_year_array[index])
    }
}

function submit_form(e) {
    e.preventDefault();
    let required_fields = ['username', 'email', 'number', 'pass', 'gender', 'birth_month', 'birth_day', 'birth_year']
    let invalid_outputs = ['a valid username', 'a valid email address', 'a valid phone number', 'a valid password']
    let field_outputs = ['Username', 'Email', 'Phone Number', 'Password', 'Gender', 'Birthday', 'Birthday', 'Birthday']
    let output = document.getElementById('form_results')
    output.innerHTML = '';
    for(let i = 0; i < required_fields.length; i++) {
        let element = document.getElementById(required_fields[i])
        let invalid = false;
        if(i < 4) {
            if(element.value.length === 0) {
                output.innerHTML += "Please enter <span class='error'>" + field_outputs[i] + "</span><br>"
            }
            else if(i===0) {
                if(element.value.length < 4 || element.value.length > 12 || !username_check(element.value)) {
                    invalid = true;
                }
            }
            else if(i===1) {
                if(!email_check(element.value)) {
                    invalid = true;
                }
            }
            else if(i===2) {
                if(!number_check(element.value)) {
                    invalid = true;
                }
            }
            else {
                if(!password_check(element.value)) {
                    invalid = true;
                }
            }
        }
            if(invalid) {
                output.innerHTML += "Please enter <span class='invalid'>" + invalid_outputs[i] + "</span><br>";
            }
        else if(i===4) {
            if(document.getElementById('male').checked===false &&
                document.getElementById('female').checked===false &&
                document.getElementById('other').checked===false) {
                output.innerHTML += "Please enter <span class='error'>" + field_outputs[i] + "</span><br>"
            }
        }
        else {
            if(element.selectedIndex===0) {
                output.innerHTML += "Please enter <span class='error'>" + field_outputs[i] + "</span><br>"
                break;
            }
        }
    }
    if(document.getElementById('form_results').innerHTML.length===0) {
        console.log(document.getElementById('pass').value)
        console.log(document.getElementById('pass_confirm').value)
        if(document.getElementById('pass').value !== document.getElementById('pass_confirm').value) {
            alert('Passwords do not match.');
        }
        else {
            document.location.href = 'https://github.com/mslater21/mslater21.github.io'
        }
    }
}

function reset_form(e) {
    document.getElementById('form_results').innerHTML = '';
    return true;
}

function username_check(input_text) {
    let allowed = /^[0-9a-z]+$/
    return input_text.match(allowed);
}

function email_check(input_text) {
    let allowed = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!input_text.match(allowed)) {
        return false;
    }
    else {
        let domain = input_text.split('.')[1];
        if(domain !== 'net' && domain !== 'com' && domain !== 'org' && domain !== 'edu') {
            return false;
        }
    }
    return true;
}

function number_check(input_text) {
    let allowed = /^[0-9]{3}[-][0-9]{3}[-][0-9]{4}$/;
    return input_text.match(allowed);
}

function password_check(input_text) {
    return !!(input_text.match(/\d/) && input_text.match(/[!@#$%^&*(),."'<>?+=\-_{}~]/) && input_text.match(/[A-Z]/)
        && input_text.match(/[a-z]/));

}
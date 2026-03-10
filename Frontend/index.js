const validateData = async () => {
    let error = [];
    if (!userData.firstName) {
        error.push('กรุณากรอกชื่อ');
    }
    if (!userData.lastName) {
        error.push('กรุณากรอกนามสกุล');
    }
    if (!userData.age) {
        error.push('กรุณากรอกอายุ');
    }
    if (!userData.gender) {
        error.push('กรุณาเลือกเพศ');
    }
    if (!userData.interests) {
        error.push('กรุณาเลือกความสนใจอย่างน้อย 1 อย่าง');
    }
    if (!userData.description) {
        error.push('กรุณากรอกคำอธิบายเกี่ยวกับตัวคุณ');
    }
    return error;
    
}
const submitData = async () => {
    let firstNameDOM = document.querySelector('input[name=firstname');
    let lastNameDOM = document.querySelector('input[name=lastname');
    let ageNameDOM = document.querySelector('input[name=age]');
    let ganderNameDOM = document.querySelector('input[name=gender]:checked');
    let interestNameDOM = document.querySelectorALL('input[name=interest]:checked');
    let descriptionNameDOM = document.querySelector('textarea[name=description]');

 let messageDOM = document.getElementById('message')
    try {
        let interest = ''
        for (let i = 0; i < interestDOMs.length; i++) {
            interest += interestDOMs[i].value
            if (i != interestDOMs.length - 1) {
                interest += ','
            }
        }

        let userData = {
            firstName: firstNameDOM.value,
            lastName: lastNameDOM.value,
            age: ageDOM.value,
            gender: genderDOM.value,
            description: descriptionDOM.value,
            interests: interest
        }
        console.log('submitData', userData);

        const errors = validateData(userData);
        if (errors.length > 0) {
            throw {
                message: 'กรุณากรอกข้อมูลให้ครบถ้วน',
                errors: errors
            }
        }

        const response = await axios.post('http://localhost:8000/users', userData);
        console.log('response', response);
        messageDOM.innerText = 'บันทึกข้อมูลสำเร็จ';
        messageDOM.className = 'message success';
    } catch (error) {
        console.log('error message', error.message);
        console.log('error', error.errors);
        if (error.response) {
            console.log('error response', error.response);
            error.message = error.response.data.message;
            error.errors = error.response.data.errors;

        }

        let htmlData = '<div>'
        htmlData += `<div>${error.message}</div>`;
        htmlData += '<ul>';
        for (let i = 0; i < error.errors.length; i++) {
            htmlData += `<li>${error.errors[i]}</li>`;
        }
        htmlData += '</ul>';
        htmlData += '</div>';


        messageDOM.innerHTML = htmlData;
        messageDOM.className = 'message danger';
    }
}
function submitData () {
    let firstNameDOM = document.querySelector('input[name=firstname');
    let lastNameDOM = document.querySelector('input[name=lastname');
    let ageNameDOM = document.querySelector('input[name=age]');
    let ganderNameDOM = document.querySelector('input[name=gender]:checked');
    let interestNameDOM = document.querySelectorALL('input[name=interest]:checked');
    let descriptionNameDOM = document.querySelector('input[name=description]');

 let interest=''
    for(let i=0; i<interestDOM.length; i++){
        interest+=interestDOM[i].value
        if(i!=interestDOM.length-1) {
            interest+=","
        }
    }    


    let userData={
        firstName:firstNameDOM.value,
        lastName:lastNameDOM.value,
        age:ageDOM.value,
        gender:genderDOM.value,
        description:descriptionDOM.value,
        interest:interest
    }
    console.log('submitData',userData);
}
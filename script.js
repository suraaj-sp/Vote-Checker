document.getElementById('voterForm').addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('fullname').value.trim();
    const age = parseInt(document.getElementById('age').value, 10);
    const nationality = document.getElementById('nationality').value.trim().toLowerCase();

    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('hidden','success','error');

    const isNameValid = name.length > 0;
    const isAgeValid = age >= 18;
    const isNationalityValid = nationality === 'indian';

    if(isNameValid && isAgeValid && isNationalityValid){
        resultDiv.classList.add('success');
        resultDiv.innerHTML = `<strong>Congratulations, ${name}! 🎉</strong><br>
      You meet all requirements and are eligible to vote.
    `;
    }
    else{
        let reasons = [];
        if(!isNameValid){
            reasons.push('Please enter your name.');
        }
        if(!isAgeValid){
            reasons.push('You must be at least 18 years old.');
        }
        if(!isNationalityValid){
            reasons.push('Nationality must be Indian.');
        }

        resultDiv.classList.add('error');
        resultDiv.innerHTML = `<strong>Sorry, ${name || 'User'}. You are NOT eligible to vote. ❌</strong><br>
      <ul style="text-align: left; margin-top: 8px; padding-left: 20px;">
        ${reasons.map(reason => `<li>${reason}</li>`).join('')}
      </ul>`;
    }
});
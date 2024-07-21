let persons = [];

function addNewPerson() {

  let nameInput = document.querySelector('#name_person');
  let surnameInput = document.querySelector('#surname_person');
  let ageInput = document.querySelector('#age_person');
  let nationalityInput = document.querySelector('#nationality_person');

  let personList = document.querySelector('#personList');

  let ageComparisonMessage = document.querySelector('#ageComparisonMessage');

  let name = nameInput.value;
  let surname = surnameInput.value;
  let age = ageInput.value;
  let nationality = nationalityInput.value;


  if (name === '' || surname === '' || isNaN(age) || nationality === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }


  let listItem = document.createElement('li');
  listItem.textContent = `Nome e Sobrenome: ${name} ${surname}, Idade: ${age}, Nacionalidade: ${nationality}`;

  personList.appendChild(listItem);

  nameInput.value = '';
  surnameInput.value = '';
  ageInput.value = '';
  nationalityInput.value = '';


  let person = {
    name: name,
    surname: surname,
    age: age,
    nationality: nationality
  };
  persons.push(person);


  let oldestPerson = persons.reduce((oldest, person) => {
    return person.age > oldest.age ? person : oldest;
  }, persons[0]);


  if (persons.length === 1) {
    oldestPersonMessage.textContent = `A pessoa mais velha é ${oldestPerson.name} ${oldestPerson.surname} tem ${oldestPerson.age} anos.`;
  } else {
    oldestPersonMessage.textContent = `A pessoa mais velha é ${oldestPerson.name} ${oldestPerson.surname} tem ${oldestPerson.age} anos.`;
  }



}
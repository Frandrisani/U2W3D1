// PRIMO ESERCIZIO - USER

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.email = _location;
  }

  compareAge(firstUser, secondUser) {
    if (firstUser > secondUser) {
      return firstUser + " è più vecchio di " + secondUser;
    } else {
      return secondUser + " è più vecchio di " + firstUser;
    }
  }
}

const user1 = new User("Mario", "Rossi", 30, "Italy");
const user2 = new User("Franco", "Verdi", 15, "Italy");
const user3 = new User("Luigi", "Bianchi", 24, "Italy");
const user4 = new User("Giacomo", "Arancioni", 7, "Italy");
const user5 = new User("Veronica", "Blu", 57, "Italy");

console.log(user1, user1.compareAge(user4.age, user1.age));

// -------------------------------------- SECONDO ESERCIZIO - USER ------------------------------------------

const namePetInput = document.getElementById("namePet");
const ownerPetInput = document.getElementById("ownerPet");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");
const saveButton = document.querySelector("form button");

// creiamo un array che conterrà le schede create dal form
const registro = [];

class Pet {
  constructor(_petName, _owneName, _species, _breed) {
    this.petName = _petName;
    this.owneName = _owneName;
    this.species = _species;
    this.breed = _breed;
  }
}

const fillRowWithCards = function () {
  const row = document.getElementById("scheda");
  row.innerHTML = "";
  registro.forEach((scheda) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col");
    newCol.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Scheda utente</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary"> Nome animale: ${scheda.petName}</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary"> Nome propretario: ${scheda.owneName}</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">Specie: ${scheda.species}</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">Razza: ${scheda.breed}</h6>
            </div>
        </div>
        `;
    row.appendChild(newCol);
  });

  namePetInput.value = "";
  ownerPetInput.value = "";
  speciesInput.value = "";
  breedInput.value = "";
};

const formReference = document.getElementsByTagName("form")[0];
formReference.addEventListener("submit", function (e) {
  e.preventDefault();

  const animaleregistrato = new Pet(
    ownerPetInput.value,
    speciesInput.value,
    breedInput.value
  );

  console.log("CONTATTO CREATO", animaleregistrato);
  registro.push(animaleregistrato);
  fillRowWithCards();
});

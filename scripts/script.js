console.log("clicked");

// spinner show function
const showSpinner = () => {
  document.getElementById("spinner").classList.remove("hidden");
};
const hideSpinner = () => {
  document.getElementById("spinner").classList.add("hidden");
};
// load categories btn
const loadCategories = () => {
  showSpinner();
  setTimeout(() => {
    try {
      fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
        .then((res) => res.json())
        .then((data) => {
          displayCategories(data.categories);
          hideSpinner();
        });
    } catch (err) {
      console.log(err);
      hideSpinner();
    }
  }, 2000);
};
// load all pets from api
const loadAllPets = () => {
  showSpinner();
  setTimeout(() => {
    try {
      fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
        .then((res) => res.json())
        .then((data) => {
          displayAllPets(data.pets);
          hideSpinner();
        });
    } catch (err) {
      console.log(err);
      hideSpinner();
    }
  }, 2000);
};

// display load categories btn
const displayCategories = (categories) => {
  console.log(categories);
  const categoryContainer = document.getElementById("btn-categories");
  categories.forEach((item) => {
    const buttonsContainer = document.createElement("div");
    buttonsContainer.innerHTML = `
        <button class='px-8 py-5 flex justify-center gap-5 items-center border border-[#0E7A811A] rounded-md category-btn'>
        <img class='w-10' src=${item.category_icon} alt="btn-image"
       <p class='font-bold text-2xl'> ${item.category}</p>
        </button>
        `;
    categoryContainer.append(buttonsContainer);
  });
};

//display all pet with api and show them in cards
const displayAllPets = (pets) => {
  const cardContainer = document.getElementById("pets-card");
  cardContainer.innerHTML = "";
  pets.forEach((pet) => {
    const petCard = document.createElement("div");
    petCard.classList = "card card-compact border border-gray-200";
    petCard.innerHTML = `
      
       <figure class="px-2 pt-2">
    <img
      src=${pet.image}
      alt="petImage"
      class="rounded-xl w-full" />
  </figure>
  <div class="card-body items-start border-b ">
    <h2 class="card-title">${pet.pet_name}</h2>
  <div class='flex justify-center items-center gap-2 text-base text-[#131313B3]'>
  <img class='w-8' src='https://img.icons8.com/?size=100&id=jQkL4uOqbTW7&format=png&color=000000' alt='icon'/>
  ${pet.breed == undefined ? "No Breed" : `<p>Breed: ${pet.breed}</p>`}
  </div>
  <div class='flex justify-center items-center gap-2 text-base text-[#131313B3]'>
   <img class='w-8' src='https://img.icons8.com/?size=100&id=23&format=png&color=000000' alt='icon'/>
  ${
    pet.date_of_birth == undefined ||
    pet.date_of_birth == null ||
    pet.date_of_birth == " "
      ? "No BirthDate"
      : `<p>BirthDate: ${pet.date_of_birth}</p>`
  }

  </div>
   <div class='flex justify-center items-center gap-2 text-base text-[#131313B3]'>
  <img class='w-8' src='https://img.icons8.com/?size=100&id=1665&format=png&color=000000' alt='icon'/>
  ${
    pet.gender == undefined || pet.gender == " "
      ? "No Gender Found"
      : `<p>Gender: ${pet.gender}</p>`
  }
  </div>
  <div class='flex justify-center items-center gap-2 text-base text-[#131313B3]'>
  <img class='w-8' src='https://img.icons8.com/?size=100&id=7165&format=png&color=000000' alt='icon'/>
  ${
    pet.price == null || pet.price == " "
      ? "No priceFound"
      : `<p>Gender: ${pet.price} $</p>`
  }
  </div>

  <div class='flex gap-3 '>
   <button class="px-3 py-2 text-center border border-[#0E7A811A] rounded-md text-[#0E7A81] font-semibold text-lg">
     <img class='w-8' src='https://img.icons8.com/?size=100&id=24816&format=png&color=000000' alt='icon'/>
   </button>
    <button class="px-3 py-2 text-center border border-[#0E7A811A] rounded-md text-[#0E7A81] font-semibold text-lg">Adopt</button>
     <button class="px-3 py-2 text-center border border-[#0E7A811A] rounded-md text-[#0E7A81] font-semibold text-lg">Details</button>
  </div>
  </div>
      `;
    cardContainer.append(petCard);
  });
};

loadCategories();
loadAllPets();

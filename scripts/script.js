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
// load prt details by click details btn
const loadDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/peddy/pet/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayLoadDetails(data.petData);
  becomeInactive(data);
};
// display load details by click detais btn
const displayLoadDetails = (petData) => {
  const modalContainer = document.getElementById("modal-content");
  modalContainer.innerHTML = `
<img 
      src=${petData.image}
      alt="petImage"
      class="rounded-xl w-full" />
      <div class='text-center my-5'>
       <h2 class="text-center text-4xl font-bold my-5 ">${petData.pet_name}</h2>
  <div class='flex justify-center items-center gap-2 text-base text-[#131313B3]'>
  <img class='w-8' src='https://img.icons8.com/?size=100&id=jQkL4uOqbTW7&format=png&color=000000' alt='icon'/>
  ${petData.breed == undefined ? "No Breed" : `<p>Breed: ${petData.breed}</p>`}
  </div>
  <div class='flex justify-center items-center gap-2 text-base text-[#131313B3]'>
   <img class='w-8' src='https://img.icons8.com/?size=100&id=23&format=png&color=000000' alt='icon'/>
  ${
    petData.date_of_birth == undefined ||
    petData.date_of_birth == null ||
    petData.date_of_birth == " "
      ? "No BirthDate"
      : `<p>BirthDate: ${petData.date_of_birth}</p>`
  }

  </div>
   <div class='flex justify-center items-center gap-2 text-base text-[#131313B3]'>
  <img class='w-8' src='https://img.icons8.com/?size=100&id=1665&format=png&color=000000' alt='icon'/>
  ${
    petData.gender == undefined || petData.gender == " "
      ? "No Gender Found"
      : `<p>Gender: ${petData.gender}</p>`
  }
  </div>
  <div class='flex justify-center items-center gap-2 text-base text-[#131313B3]'>
  <img class='w-8' src='https://img.icons8.com/?size=100&id=7165&format=png&color=000000' alt='icon'/>
  ${
    petData.price == null || petData.price == " "
      ? "No priceFound"
      : `<p>Gender: ${petData.price} $</p>`
  }
  </div>
      
      
      </div>
      <p class='my-5'>
      <span class='font-bold text-xl'>Detailed Information:</span>
      ${petData.pet_details}
      </p>

`;
  document.getElementById("myModal").showModal();
};

// load categories pet by click category btn
const loadCategoriesPets = (category) => {
  showSpinner();
  setTimeout(() => {
    try {
      fetch(
        `https://openapi.programming-hero.com/api/peddy/category/${category}`
      )
        .then((res) => res.json())
        .then((data) => {
          activeClassRemove();
          const activeBtn = document.getElementById(`btn-${category}`);
          activeBtn.classList.add("active");

          displayAllPets(data.data);
          hideSpinner();
        });
    } catch (err) {
      console.log(err);
      hideSpinner();
    }
  }, 1000);
};

// display load categories btn
const displayCategories = (categories) => {
  console.log(categories);
  const categoryContainer = document.getElementById("btn-categories");
  categories.forEach((item) => {
    const buttonsContainer = document.createElement("div");
    buttonsContainer.innerHTML = `
        <button id="btn-${item.category}" onclick="loadCategoriesPets('${item.category}')" class='px-8 py-5 flex justify-center gap-5 items-center border border-[#0E7A811A] rounded-md category-btn'>
        <img class='w-10' src=${item.category_icon} alt="btn-image"/>
       <p class='font-bold text-2xl'> ${item.category}</p>
        </button>
        `;
    categoryContainer.append(buttonsContainer);
  });
};

// display only image by click on image
const loadDisplayImage = (imageId) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${imageId}`)
    .then((res) => res.json())
    .then((data) => {
      const petData = data.petData;
      const petImageContainer = document.getElementById("pet-img");
      const imgElement = document.createElement("img");
      imgElement.src = petData.image;
      imgElement.classList = "rounded-xl w-40 h-40 object-cover";
      petImageContainer.append(imgElement);
    });
};

//display all pet with api and show them in cards
const displayAllPets = (pets) => {
  const allPetCard = document.getElementById("all-card");
  const cardContainer = document.getElementById("pets-card");
  cardContainer.innerHTML = "";
  // if there is no pets
  if (pets.length == 0) {
    allPetCard.classList.remove("grid");
    cardContainer.classList.remove("grid");
    cardContainer.innerHTML = `
    <div
      class="flex flex-col gap-4 min-h-[300px] w-full justify-center items-center"
    >
      <img src="./images/error.webp" alt="" />
      <h4 class="text-center text-2xl font-bold">
        Opps! There ia no bird content here
      </h4>
    </div>
  
  
  `;
    return;
  } else {
    cardContainer.classList.add("grid");
    allPetCard.classList.add("grid");
  }

  pets.forEach((pet) => {
    const petCard = document.createElement("div");
    petCard.classList = "card items-center card-compact border border-gray-100";
    petCard.innerHTML = `
      
       <figure class="px-2 pt-2">
    <img onclick="loadDisplayImage('${pet.petId}')"
      src=${pet.image}
      alt="petImage"
      class="rounded-xl w-full" />
  </figure>
  <div class="card-body items-start border-b ">
    <h2 class="card-title font-bold">${pet.pet_name}</h2>
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

  <div class='flex justify-center gap-2 '>
   <button onclick='becomeInactive(this)' class="px-2 py-2 text-center border border-[#0E7A811A] rounded-md  text-lg">
  
   <img class='w-6' src='https://img.icons8.com/?size=100&id=2744&format=png&color=000000' alt='icon'/>
   </button>
    <button onclick='congratulateBtn()' class="px-2 py-2 text-center border border-[#0E7A811A] rounded-md text-[#0E7A81] font-semibold text-lg">Adopt</button>

     <button onclick='loadDetails("${
       pet.petId
     }")' class="px-2 py-2 text-center border border-[#0E7A811A] rounded-md text-[#0E7A81] font-semibold text-lg">Details</button>
  </div>
  </div>
      `;
    cardContainer.append(petCard);
  });
  const sortPetsByPrice = () => {
    pets.sort((a, b) => b.price - a.price);
    displayAllPets(pets);
  };
  const sortButton = document.getElementById("sort-button");
  sortButton.addEventListener("click", () => {
    sortPetsByPrice();
    sortButton.classList =
      "bg-[#0E7A81] px-8 py-5 text-center text-white border border-[#0E7A811A] rounded-md";
  });
};

// like button become inactive
const becomeInactive = (event) => {
  event.classList.add("inactive");
};

// congratulate card
const congratulateBtn = () => {
  const countDownCard = document.getElementById("countdown-card");
  const countdownTimer = document.getElementById("countDown-timer");
  countDownCard.classList.remove("hidden");

  let countDown = 3;
  countdownTimer.textContent = countDown;
  const interval = setInterval(() => {
    countDown -= 1;
    countdownTimer.textContent = countDown;
    if (countDown === 0) {
      clearInterval(interval);
      countDownCard.classList.add("hidden");
    }
  }, 1000);
};

// from category btn active class remove
const activeClassRemove = () => {
  const buttons = document.getElementsByClassName("category-btn");
  for (let btn of buttons) {
    btn.classList.remove("active");
  }
};

loadCategories();
loadAllPets();

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
loadCategories();

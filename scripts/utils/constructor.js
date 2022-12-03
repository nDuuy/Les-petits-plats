export { RecipesCard };

// Create recipies cards

class RecipesCard {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    if (recipe.image) {
      this.image = recipe.image;
    } else {
      this.image = "greyBackground.jpg";
    }
    this.servings = recipe.servings;
    this.ingredients = recipe.ingredients;
    this.time = recipe.time;
    this.description = recipe.description;
    this.appliance = recipe.appliance;
    this.ustensils = recipe.ustensils;
  }

  buildCard() {

    // create article for each food 
    const card = document.createElement("article");
    card.className = 'recipeCard'

    // div for img of food
    const FoodImg = document.createElement('div')
    FoodImg.className = 'image'

    // food img
    const ImgFood = document.createElement('img')
    ImgFood.setAttribute("src", "./images/greyBackground.jpg")

    // div textContent 
    const txtContent = document.createElement('div')
    txtContent.className = 'textContent'

    // div textContentUp 
    const txtContentUp = document.createElement('div')
    txtContentUp.className = 'textContentUp'

    // title 
    const h2 = document.createElement('h2')
    h2.textContent = `${this.name}`
    h2.className = 'name'

    // cooking time
    const timeParagraphe = document.createElement('p')
    timeParagraphe.className = 'time'

    // cooking time img
    const timeImg = document.createElement('img')
    timeImg.className = 'clock'
    timeImg.setAttribute("src", "./images/clock.svg")
    timeImg.setAttribute("alt", "${this.time} min")

    // textContentDown div
    const txtContentDown = document.createElement('div')
    txtContentDown.className = 'textContentDown'

    // ingredients ul
    txtContentDown.innerHTML = `
    <ul class="ingredients">
      ${this.ingredients.map((element) =>

      ` <li>
              <span>${element.ingredient}</span> :
              ${"quantity" in element ? element.quantity : ""}
              ${"unit" in element ? element.unit : ""}`)}
          </li>
    </ul>`

    // food description
    const fooDescription = document.createElement('p')
    fooDescription.textContent = `${this.description}`
    fooDescription.className = 'description'



    // create ellements in article
    card.appendChild(FoodImg)
    FoodImg.appendChild(ImgFood)
    card.appendChild(txtContent)

    // create ellements in txtContent div
    txtContent.appendChild(txtContentUp)
    txtContent.appendChild(txtContentDown)

    // create ellements in txtContentUp div
    txtContentUp.appendChild(h2)
    txtContentUp.appendChild(timeParagraphe)
    timeParagraphe.appendChild(timeImg)

    // create ellements in txtContentDown div
    txtContentDown.appendChild(fooDescription)

    return card
  }
}

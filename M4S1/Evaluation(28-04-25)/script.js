document.addEventListener('DOMContentLoaded', showRecipies);

let recipeform = document.getElementById('form')
let reciecontsiner = document.getElementById('recipe')
let filter = document.getElementById('filter')

recipeform.addEventListener('submit', saveRecipe)

filter.addEventListener('change', showRecipies)

function saveRecipe(e) {
    e.preventDefault();

    let name = document.getElementById('name').value
    let ing = document.getElementById('img').value
    let category = document.getElementById('category').value
    let steps = document.getElementById('steps').value


    let newrecipe = { name, ing, category, steps }
    let recipe = JSON.parse(localStorage.getItem('recipes'))
    recipe.push(newrecipe)
    localStorage.setItem('recipes', JSON.stringify(recipe))

    showRecipies()

}
function showRecipies() {
    let recipies = JSON.parse(localStorage.getItem('recipe'))
    let catogarys = filter.value
    CSSContainerRule.innerHtml = '';

    recipies.filter(recipe => category == 'All' || recipe.category == seletedcatogary)
        .forEach(recipe => {
            let card = document.createElement('div')
            card.className = 'grid';
            card.innerHTML = `
                <span class="grid">${recipe.category}</span>
                < h3 > ${ recipe.name }</h3 >
                <h4>Ingredients:</h4>
                <table border="1" cellpadding="5">
                    ${recipe.ingredients.split('\n').map(item => <tr><td>${item}</td></tr>).join('')}
                </table>
                <h4>Preparation:</h4>
                <p>${recipe.steps}</p>
            `;
            reciecontsiner.appendChild(card);
            
            });
            }
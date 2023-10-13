import './recipe-item.js';

class RecipeContainer extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'});
    }

    set recipes(recipes) {
        this._recipes = recipes;
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = '';
        this._shadowRoot.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
            
                :host {
                    margin-top: clamp(1.5rem, calc(1vw + 2rem), 3rem);
                    margin-inline: calc(15% / 2);
                    display: grid;
                    grid-template-columns: auto auto auto;
                    gap: clamp(1em, calc(1vw + 1em), 3rem);
                }
                
                @media and screen (min-width: 56rem) {
                    :host {
                        grid-template-columns: auto auto auto;
                        flex: 0 0 100%;
                        width: 69%;
                        left: 0;
                        margin-top: clamp(1.5rem, calc(1vw + 2rem), 3rem);
                        flex-wrap: wrap;
                        gap: clamp(1em, calc(1vw + 1em), 3rem);
                        margin-inline: 0;}
                }
            
                @media and screen (max-width: 38rem) {
                    :host {
                        grid-template-columns: auto auto;
                    }
                }
            </style>  
        `;

        this._recipes.forEach(recipe => {
            const recipeItemElement = document.createElement('recipe-item');
            recipeItemElement.recipe = recipe;
            this._shadowRoot.appendChild(recipeItemElement);
        })
    }

    renderError(message) {
        this._shadowRoot.innerHTML = `
            <style>
                .error-message {
                    font-weight: normal;
                    color: #1E1E1E;
                    user-select: none;
                }
            </style>
        `;
        this._shadowRoot.innerHTML += `<h4 class="error-message">${message}</h4>`;
    }
}

customElements.define('recipe-container', RecipeContainer);
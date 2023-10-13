import '../component/recipe-container.js';

class CategoryItem extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'});
    }

    // connectedCallback() {
    //     this.render();
    // }

    set category(category) {
        this._category = category;
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.clickRender(); 
    }

    get value() {
        const recipeContainer = document.createElement('recipe-container');
        // if(recipeContainer.)
        return recipeContainer.recipes;
    }

    render() {
        this._shadowRoot.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                :host {
                    display: block;
                    position: relative;
                    // gap: clamp(1rem, calc(1vw + 1.5rem), 3rem);
                    // padding: 0;
                    // align-items: center;
                    // overflow-x: auto;
                    // overflow-y: hidden;
                    // margin-inline: clamp(1rem, calc(1vw + 1rem), 1.5rem);
                }

                a {
                    font-size: clamp(14px, calc(1vw + .5rem), 2rem);
                    text-decoration: none;
                    color: #1E1E1E;
            </style>
            <div class="${this._category.idCategory}">
                <a href="#">${this._category.strCategory}</a>
            </div>
        `;
    }

    clickRender() {
        this.render();
        this._shadowRoot.addEventListener('click', this._clickEvent);
    }
}

customElements.define('category-item', CategoryItem);
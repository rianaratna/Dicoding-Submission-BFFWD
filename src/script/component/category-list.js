import './category-item.js';

class CategoryList extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'});
    }

    set categories(categories) {
        this._categories = categories;
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    gap: clamp(.8rem, calc(1vw + 1.5rem), 3rem);
                    align-items: center;
                    overflow-x: auto;
                    overflow-y: hidden;
                    width: 70%;
                }

                @media screen and (min-width: 41rem) {
                    :host {
                        width: 80%;
                    }
                }
            </style>
            
        `;
        this._categories.forEach(category => {
            const categoryItemElement = document.createElement('category-item');
            categoryItemElement.category = category;
            this._shadowRoot.appendChild(categoryItemElement);
        })
    }
}

customElements.define('category-list', CategoryList);
class RecipeItem extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'});
    }

    set recipe(recipe) {
        this._recipe = recipe;
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :host {
            margin-inline: calc(15% / 2);
            font-size: clamp(1em, calc(1vw + .8em), 3em);
            color: #FFFFFF;
        }
        
        figure {
            width: 100%;
            position: relative;
            transform: scale(1);
            transition: all .3s ease-in-out;
        }
        
        .food-image {
            width: 100%;
            height: clamp(10em, calc(2vw + 10em), 50em);
            object-fit: cover;
            object-position: center;
            border-radius: clamp(.5em, calc(1vw + .5em), 1.25em);
        }
        
        .img-food-caption {
            position: absolute;
            background: linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.8));
            display: flex;
            align-items: flex-end;    
            padding-block: clamp(1em, calc(1vh + .5em), 2.5em);
            left: 0;
            top: 0;
            width: 100%;
            height: clamp(10em, calc(2vw + 10em), 50em);
            border-radius: clamp(.5em, calc(1vw + .5em), 1.25em);
        }
        
        figure:hover {
            transform: scale(1.1);
        }
        
        .recipe-title {
            margin: 0;
            margin-inline: calc(15% / 2);
            font-size: clamp(1em, calc(1vw + .8em), 3em);
            color: var(--white);
        }

        @media (min-width: 56rem){
            .img-food-caption,
            .food-image {
                height: clamp(10em, calc(2vw + 15em), 50em);
            }
        
            .img-food-caption {
                padding-block: clamp(1em, calc(1vh + 1.5em), 2.5em);
            }
        
            .recipe-title {
                font-size: clamp(1em, calc(1vw + 1em), 3em);
            }
        }
        
        <article id="ID - ${this._recipe.idMeal}">
            <figure>
                <img src="${this._recipe.strMealThumb}" alt="${this._recipe.strMeal}" class="food-image">
                <figcaption class="img-food-caption">
                    <h3 class="recipe-title">${this._recipe.strMeal}</h3>
                </figcaption>
            </figure>
        </article>
        `;
    }
}

customElements.define('recipe-item', RecipeItem)
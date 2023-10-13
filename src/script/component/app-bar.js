import './search-bar.js';

class AppBar extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'});
    }
    
    set info(info) {
        this._info = info;
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: sans-serif;
            }
            
            h2 {
                margin: 0;
            }

            :host {
                display: block;
                position: fixed;
                z-index: 999;
                transition: all 200ms linear;
                background-color: rgba(0,0,0,.5);
                backdrop-filter: blur(2.5px);
                width: 100vw;
            }

            .container {
                width: 100%;
                padding-block: clamp(1rem, calc(1vh + 1.5rem), 4rem);
            }
            
            .logo-container,
            .search-and-filter {
                width: 85%;
                margin: 0 auto;
                display: flex;
            }
            
            :host.upper-scroll {
                background-color: rgba(0,0,0,1);
            }
            
            .search-and-filter {
                padding-block-start: clamp(1rem, calc(1vh + 1rem), 4rem);
                gap: clamp(1rem, calc(1vw + 1rem), 2rem);
            }
            
            .logo-container {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: .5rem;
            }
            
            .logo-typography {
                font-weight: 900;
                font-size: clamp(.5rem, calc(1.5vw + .5rem), 3rem);
                color: #FF9B50;
                text-shadow: 2px 2px 0px #C63D2F, 1px 1px 0px #E25E3E;
            }
            
            .logo-icon {
                width: clamp(1rem, calc(2vw + .5rem), 3rem);
            }
            
            .filter-icon {
                display: flex;
                align-items: center;
                scale: .6;
            }
            
            .filter-button {
                min-height: 2rem;
                height: clamp(2rem, calc(4vw + 1rem), 5rem);
                width: clamp(2rem, calc(4vw + 1.5rem), 5rem);    
                background-image: url(../../assets/filter-alt.svg);
                background-size: clamp(1rem, calc(1vw + 1rem), 4rem);
                background-repeat: no-repeat;
                background-position: center;
                background-color: rgba(30, 30, 30, 0.60);
                border-radius: clamp(.5rem, calc(1vw + .2rem), 1rem);
                border: 2px solid #FF9B50;
                box-shadow: var(--btn-box-shadow);
                backdrop-filter: blur(2.5px);
            
            }
            
            
            @media screen and (min-width: 56rem) {
                :host {
                    width: 100%;
                }
            
                .container > * + * {
                    padding-block: 0;
                }
            
                .container {
                    display: flex;
                    padding-block: clamp(1rem, calc(1vh + 1.5rem), 4rem);
                    padding-inline: calc(15% / 2);
                }

                .logo-container {
                    justify-content: left;
                    margin-inline-end: 0;
                    width: clamp(30rem, calc(1vw + 1rem), 80rem);
                }
                .search-and-filter {
                    width: 100%;
                    padding-inline-start: clamp(0rem, calc(2vw + .2rem), 5rem);
                }
            }

        </style>
        
        <div class="container">
            <div class="logo-container">
                <img src="../../assets/orange.svg" alt="" class="logo-icon">
                <h2 class="logo-typography">MealDB Recipe</h2>
            </div>
            <div class="search-and-filter">
                <search-container></search-container>
                <button class="filter-button filled-button"></button>
            </div>
        </div>
        `;
    }
}

customElements.define('app-bar', AppBar)
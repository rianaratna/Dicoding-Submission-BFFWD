class SearchBar extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    set inputEvent(event) {
        this._inputEvent = event;
        this.render();
    }

    get value() {
        return this._shadowRoot.querySelector('.search-element').value;
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
                width: 100%;
            }

            .search-element {
                width: 100%;
                padding-inline-start: clamp(2.5rem, calc(4vw + .5rem), 4rem);
                padding-inline-end: clamp(1rem, calc(1vw + .5rem), 1.5rem);
                height: clamp(2rem, calc(4vw + 1rem), 5rem);
                background-image: url(../../assets/search.svg);
                background-repeat: no-repeat;
                background-position-x: clamp(1rem, calc(1vw + .5rem), 1.5rem);
                background-position-y: center;
                background-size: clamp(.5rem, calc(1vw + .5rem), 2rem);
                background-color: rgba(30, 30, 30, 0.60);
                border-radius: clamp(.5rem, calc(1vw + .2rem), 1rem);
                border: 2px solid #FF9B50;
                color: #FFFFFF;
                font-size: clamp(.6rem, calc(1vw + .3rem), 1.2em);
                backdrop-filter: blur(2.5px);
            }

        </style>
        
        <input type="search" class="search-element text-field" placeholder="Try to search . . .">
        `;

        this._shadowRoot.querySelector('.search-element').addEventListener('input', this._inputEvent);
    }
}

customElements.define('search-container', SearchBar)
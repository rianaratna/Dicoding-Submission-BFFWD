class Jumbotron extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'});
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
                }
                
                :host {
                    display: block;
                    // padding: 15em 0 10em 0;
                    padding-top: 50%;
                    padding-bottom: 30%;
                    // background: #1E1E1E;
                    width: 100%;
                    // height: 30em;
                    height: clamp(20em, calc(3vw + 25em), 80em);

                    overflow: hidden;
                }

                .overlay {
                    position: absolute;
                    height: clamp(20em, calc(3vw + 25em), 80em);
                    display: flex;
                    align-items:center;
                    padding-block-start: clamp(7em, calc(1vw + 1em), 10em);
                }

                .primary-title {
                    width: 80%;
                    margin: auto auto;
                    color: white;
                    text-align: center;
    
                    font-size: clamp(2rem, calc(4vw + 1rem), 6rem);
                }
                
                @supports (background-blend-mode: multiply) {
                    :host {
                        background: 
                            url(../../../assets/banner.jpg),
                            radial-gradient(#2e2e2e, #000000);
                        background-blend-mode: multiply;
                        background-attachment: fixed;
                        background-size: cover;
                        background-position: center center;
                    }
                }
                
                @media screen and (min-width: 56rem) {
                    :host,
                    .overlay {
                        height: clamp(30em, calc(3vw + 40em), 80em);
                    }
                }

                @media screen and (min-width: 104rem){
                    :host,
                    .overlay {
                        height: clamp(30em, calc(3vw + 50em), 80em);
                    }
                }
            </style>
            
            <div class = "overlay">
                <h1 class="primary-title">Deliciously Easy Recipes at Your Fingertips</h1>
            </div>
        `;  
    }
}

customElements.define('jumbotron-container', Jumbotron);
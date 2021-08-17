customElements.define('scoreboard-ce',
    class extends HTMLElement {
        constructor() {
            super();
            const shadowRoot = this.attachShadow({ mode: 'open' });

            // Apply external styles to the shadow dom
            const linkElem = document.createElement('link');
            linkElem.setAttribute('rel', 'stylesheet');
            linkElem.setAttribute('href', 'style.css');
            // Attach the created element to the shadow dom
            shadowRoot.appendChild(linkElem);

            // Get the template DOM and attach it
            let template = document.getElementById('scoreboard');
            let templateContent = template.content;
            shadowRoot.appendChild(templateContent.cloneNode(true));}
    }
);


(()=>{
'use strict';
const temp = document.createElement('template');
temp.innerHTML = `
<style>
    .container {
        flex:none;
        user-select:none;
        overflow: hidden;
        margin: 8px 16px;
        width: 300px;
        height: 400px;
        border-radius: 8px;
        box-shadow: 0px 4px 4px rgba(0,0,0,0.24);
        background-color: #fff;
        transition: all 0.4s ease-out;
    }
    .container:hover{
        box-shadow: 0px 12px 12px rgba(0,0,0,0.16);
        transform: translateY(-6px);
    }
    img {
        width: 300px;
        height: 300px;
    }
    #title{
        margin:0px 24px;
        font-size: 24px;
    }
    #sub-title{
        margin:0px 24px;
        font-size: 16px;
        color: #555;
        font-weight: normal;
    }
</style>

<div class="container">
    <img id="img" alt="img" draggable=false>
    <div style="display:flex;justify-content:center;flex-direction:column;height:80px;">
        <h2 id="title"></h2>
        <h5 id="sub-title"></h5>
    </div>
</div>
`;

class Card extends HTMLElement{
    constructor(){
        super();

        this._shadow = this.attachShadow({mode:'closed'});
        this._shadow.appendChild(temp.content.cloneNode(true));
        setTimeout(()=>{
            (this._shadow.getElementById('img')).src = this.getAttribute('img');
            (this._shadow.getElementById('title')).innerText = this.getAttribute('title');
            (this._shadow.getElementById('sub-title')).innerText = this.getAttribute('sub-title');
        },0);
    }
};

window.customElements.define('my-card',Card);
})();
class Crypto{
    constructor(_parent,_name,_id,_price)
    {
        this.parent = _parent
        this.name = _name
        this.id = _id
        this.price = Number(_price)
        this.imgUrl = "https://files.coinmarketcap.com/static/widget/coins_legacy/64x64/"+this.id+".png"
    
    }

    addToHTML(){
        var newbox = document.createElement("div")
        newbox.className = "box"
        this.parent.appendChild(newbox);
        newbox.innerHTML += "<img src = '" + this.imgUrl + "'>"
        newbox.innerHTML += "<h3>"+this.name+"</h3>"
        newbox.innerHTML += "<div> Price: " + this.price.toFixed(2) + "</div>"

    }
}

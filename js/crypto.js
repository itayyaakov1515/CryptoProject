window.onload = function(){
    //  var new_coin = new Crypto(id_parent,"Bitcoin","bitcoin",3000)
    //  new_coin.addToHTML()
    //  var new_coin = new Crypto(id_parent,"Ethereum","ethereum",1800)
    //  new_coin.addToHTML()  
    do_ajax() 
}
function do_ajax(){
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4)
        {
            console.log(JSON.parse(this.response))
            var coins_arr = JSON.parse(this.response);
            creatAllCoins(coins_arr)
        }
    }
    const url = "http://fs1.co.il/bus/bitcoin.php"
    xmlHttp.open("GET",url,true)
    xmlHttp.send()

}
function creatAllCoins(coins_arr){
    for(var i = 0;i<coins_arr.length;i++){
        var item = coins_arr[i]
        var new_coin = new Crypto(id_parent,item.name,item.id,item.price_usd)
        new_coin.addToHTML()
    }
}
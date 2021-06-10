class Player{

    constructor(){

    }
    getCount(){
    var playerCountRef= database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
        playerCount=data.val()
    })
    }
    updateCount(){
       database.ref('/').update({
       playerCount: count
       })
    }
}
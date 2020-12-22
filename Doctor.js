class Doctor{
    constructor(){}

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }

    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        if(gameState===0){
            patient=new Patient();
            var patientCountRef=await database.ref('patientCount').once("value");
            if(patientCountRef.exists()){
                patientCount=patientCountRef.val();
                patient.getCount();
            }

            form=new Form();
            form.display();
        }
    }
}
class Patient{
    constructor(){
        this.index=null;
        this.name=null;
        this.hour=null;
    }

    getCount(){
        var patientCountRef=database.ref('patientCount');
        patientCountRef.on("value",(data)=>{
            patientCount=data.val();
        })
    }

    updateHour(){
        database.ref('/').update({
            hour: Form.button1
        });
    }

    updateCount(count){
        database.ref('/').update({
            patientCount: count
        });
    }

    update(){
        var patientIndex="patients/patient" +this.index;
        database.ref(patientIndex).set({
            name:this.name,
            hour:this.hour
        })
    }

    static getPatientInfo(){
        var patientInfoRef=database.ref('patients');
        patientInfoRef.on("value",(data)=>{
            allPatients=data.val();
        })
    }
}
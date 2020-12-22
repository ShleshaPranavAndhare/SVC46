class Form{
    constructor() {
        this.input=createInput("Name of the Patient");
        this.button1=createButton("10:00 AM");
        this.button2=createButton("10:30 AM");
        this.button3=createButton("11:00 AM");
        this.button4=createButton("11:30 AM");
        this.button5=createButton("12:00 PM");
        this.button6=createButton("12:30 PM");
        this.button7=createButton("1:00 PM");
        this.button8=createButton("1:30 PM");
        this.button9=createButton("2:00 PM");
        this.button10=createButton("2:30 PM");
        this.button11=createButton("3:00 PM");
        this.button12=createButton("3:30 PM");
        this.button13=createButton("4:00 PM");
        this.button14=createButton("4:30 PM");
        this.button15=createButton("5:00 PM");
        this.button16=createButton("5:30 PM");
        this.button17=createButton("6:00 PM");

        this.button=createButton("Register");
        this.greeting=createElement('h2');
        this.title=createElement('h2');
    }

    hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    this.title.hide();
    }

    display(){
        this.title.html("Health Care App");
        this.title.position(displayWidth/3+200, 120);

        this.input.position(displayWidth-850, displayHeight/2-50);
        this.button.position(displayWidth-850, displayHeight/2+300);

        this.button1.position(displayWidth-850,displayHeight/2+80);
        this.button2.position(displayWidth-750,displayHeight/2+80);
        this.button3.position(displayWidth-650,displayHeight/2+80);
        this.button4.position(displayWidth-550,displayHeight/2+80);
        this.button5.position(displayWidth-450,displayHeight/2+80);
        this.button6.position(displayWidth-350,displayHeight/2+80);
        this.button7.position(displayWidth-250,displayHeight/2+80);
        this.button8.position(displayWidth-150,displayHeight/2+80);
        this.button9.position(displayWidth-850,displayHeight/2+150);
        this.button10.position(displayWidth-750,displayHeight/2+150);
        this.button11.position(displayWidth-650,displayHeight/2+150);
        this.button12.position(displayWidth-550,displayHeight/2+150);
        this.button13.position(displayWidth-450,displayHeight/2+150);
        this.button14.position(displayWidth-350,displayHeight/2+150);
        this.button15.position(displayWidth-250,displayHeight/2+150);
        this.button16.position(displayWidth-150,displayHeight/2+150);
        this.button17.position(displayWidth-50,displayHeight/2+150);

        //this.hour1=this.button1;

        this.button.mousePressed(()=>{

            this.input.hide();
            this.button.hide();
            this.button1.hide();
            patient.name=this.input.value();
            patient.hour=this.button1.value();
            patientCount+=1;
            patient.index = patientCount;
            patient.update();
            patient.updateHour();
            patient.updateCount(patientCount);
            this.greeting.html("Hello " + patient.name)
            this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        });

    }
}
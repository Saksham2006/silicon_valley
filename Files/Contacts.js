class Contacts{
    constructor(){
        this.newContact1 = createInput('Enter contact number');
        this.newContact2 = createInput('Enter contact number');
        this.newContact3 = createInput('Enter contact number');
        this.newContact4 = createInput('Enter contact number');
        this.newContact5 = createInput('Enter contact number');

        this.contact1 = null;
        this.contact2 = null;
        this.contact3 = null;
        this.contact4 = null;
        this.contact5 = null;
    }
    hideContacts(){
        this.newContact1.hide();
        this.newContact2.hide();
        this.newContact3.hide();
        this.newContact4.hide();
        this.newContact5.hide();

        this.contact1.hide();
        this.contact2.hide();
        this.contact3.hide();
        this.contact4.hide();
        this.contact5.hide();
    }
    display(){
      this.newContact1.position = (500,300);
      this.newContact2.position = (500,350);
      this.newContact3.position = (500,400);
      this.newContact4.position = (500,450);
      this.newContact5.position = (500,500);

      this.contact1.position = (400,300);
      this.contact2.position = (400,350);
      this.contact3.position = (400,400);
      this.contact4.position = (400,450);
      this.contact5.position = (400,500);

      this.newContact1.value = this.contact1;

      if(this.contact1 == null){
        text("Contact1", 400, 500);
        }
        else{
           text("Contact 1- "+this.contact1, 400, 500);
        }
        if(this.contact2 == null){
          text("Contact2", 400, 500);
          }
          else{
             text("Contact 2- "+this.contact2, 400, 500);
          }
          if(this.contact3 == null){
            text("Contact3", 400, 500);
            }
            else{
               text("Contact 3- "+this.contact3, 400, 500);
            }
            if(this.contact4 == null){
              text("Contact4", 400, 500);
              }
              else{
                 text("Contact 4- "+this.contact4, 400, 500);
              }
              if(this.contact5 == null){
                text("Contact5", 400, 500);
                }
                else{
                   text("Contact 5- "+this.contact5, 400, 500);
                }
    }
}
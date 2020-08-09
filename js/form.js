class Form{
    constructor(){
      this.title = createElement('h1');
      this.title2 = createElement('h1');
      this.startButton = createButton('Start');
      this.helper = null;
      }
    hide(){
      this.title.hide();
      this.startButton.hide();
    }
    buttons(){
      this.helperButton.mousePressed(()=>{
        appState = "child";
        child = new Child();
      });
      this.parentButton.mousePressed(()=>{
        appState = "parent";
        parent = new Parent(); 
      });
    }
    display(){
      this.title.html("Welcome to");
      this.title2.html("Dear Parents")
      this.title.position(560, 70);
      this.title2.position(560, 100);

      this.startButton.position(550,350);
      this.startButton.size(200,40);

      this.startButton.mousePressed(()=>{
      this.title.hide();
      this.title2.hide();
      this.startButton.hide();

      this.input = createInput("Name"); 
      this.input.position(520, 200);
      this.input.size(200);
      this.input.Visibility=255;

      this.submit = createButton('Submit');
      this.submit.position(520,250);

      this.submit.mousePressed(()=>{
      this.submit.hide();
      this.input.hide();

      this.msg = createElement('h2');
      this.msg.html("Please choose");
      this.msg.position(550,100);

      this.helperButton = createButton('Child');
      this.parentButton = createButton('Parent');
      this.helperButton.position(550, 200);
      this.helperButton.size(200,40);
      this.parentButton.position(550, 350);
      this.parentButton.size(200,40);
      this.parentButton.Visibility=255;
      this.helperButton.Visibility=255;
      
      this.helperButton.mousePressed(()=>{
      this.helperButton.hide();
      this.parentButton.hide();
      this.msg.hide();

      this.greeting = createElement('h3');
      this.greeting2 = createElement('h3');
      this.chat = createButton('Chat');
      this.order = createButton('Orders');
      this.contacts = createButton('Contacts');
      this.about = createButton('About');
      this.reminders = createButton('Reminders');
      this.greeting.html("Welcome, You can use the menu");
      this.greeting2.html("button to open this");

      this.greeting.position(510,100);
      this.greeting2.position(510,120);
      this.chat.position=(500, 100);
      this.chat.size(200,40);
      this.order.position=(500, 200);
      this.order.size(200,40);
      this.contacts.position=(500, 300);
      this.contacts.size(200,40);
      this.about.position=(500, 400);
      this.settings.size(200,40);
      this.reminders.position=(500,500);
      this.reminders.size(200,40);
        });
      this.parentButton.mousePressed(()=>{
      this.helperButton.hide();
      this.parentButton.hide();
      this.msg.hide();

      this.greeting = createElement('h3');
      this.greeting2 = createElement('h3');
      this.chat = createButton('Chat');
      this.order = createButton('Orders');
      this.contacts = createButton('Contacts');
      this.about = createButton('About');
      this.reminders = createButton('Reminders');
      this.greeting.html("Welcome, You can use the menu");
      this.greeting2.html("button to open this");
      
      this.greeting.position(510,100);
      this.greeting2.position(510,120);
      this.chat.position=(500, 100);
      this.chat.size(200,40);
      this.order.position=(500, 200);
      this.order.size(200,40);
      this.contacts.position=(500, 300);
      this.contacts.size(200,40);
      this.about.position=(500, 400);
      this.settings.size(200,40);
      this.reminders.position=(500,500);
      this.reminders.size(200,40);
        });
      this.helper = this.input.value();
       });
      });
    }
}
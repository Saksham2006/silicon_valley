class Order{
    constructor(){
        this.submit = createButton('Submit order');
        this.groceries = createElement('h3');
        this.gradd = createButton()
        this.medicenes = createButton('Medicenes');
        this.rice = createButton('Rice');
        this.wheat = createButton('Wheat Flour');
        this.fruits = createButton('Fruits');
        this.textOrder = createInput("Note/Anything else to order?");
        this.textOrderValue = createElement('h3');
    }
    display(){
        this.submit.position(560,500);
        this.groceries.position(400,500);
        this.rice.position(420,500);
        this.wheat.position(440,500);
        this.fruits.position(460,500);
        this.textOrder.position(480,500);
        this.textOrderValue = this.textOrder.value();
        this.textOrderValue.update();
        this.textOrderValue.html("Value");
        
    }
}
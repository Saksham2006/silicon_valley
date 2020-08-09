class About{
    constructor(){
        this.helpMsg = createElement('h3');
    }
    display(){
        this.helpMsg.html("This app is designed to help parents and their children communicate");
        this.helpMsg.position(500,200);
    }
}
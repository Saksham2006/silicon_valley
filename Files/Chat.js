class Chat{
    constructor(){
        this.msgBox= createInput("Message");
        this.msgText= createElement('h3');
        this.videoCall = createButton('Video Call');
        this.voiceCall = createButton('Voice Call');
    }
    display(){
     this.msgBox.position(700,600);
     msgValue = this.msgBox.value();
     msgValue.update();
     this.msgText.html(msgValue);
     this.msgText.position(300,600);
     this.msgText.size(70)
     this.videoCall.position(700,650);
     this.videoCall.size(70);
     this.voiceCall.position(700,700);
     this.videoCall.size(70);
    }
}
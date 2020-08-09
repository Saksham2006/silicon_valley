class Reminder{
    constructor(){
        this.reminder1time = createInput("Type date/time");
        this.reminder2time = createInput("Type date/time");
        this.reminder3time = createInput("Type date/time");
        this.reminder4time = createInput("Type date/time");
        this.reminder5time = createInput("Type date/time");
        this.reminder1 = createElement('h2');
        this.reminder2 = createElement('h2');
        this.reminder3 = createElement('h2');
        this.reminder4 = createElement('h2');
        this.reminder5 = createElement('h2');
    }
    display(){
        this.reminder1.html(this.reminder1time.value());
        this.reminder1.position(300,500);

        this.reminder2.html(this.reminder2time.value());
        this.reminder2.position(300,500);

        this.reminder3.html(this.reminder3time.value());
        this.reminder3.position(300,500);

        this.reminder4.html(this.reminder4time.value());
        this.reminder4.position(300,500);

        this.reminder5.html(this.reminder5time.value());
        this.reminder5.position(300,500);
    }
}
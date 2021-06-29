class Form{
   constructor(){
    this.input=createInput("Name")
    this.button = createButton("PLAY")
    this.greeting = createElement('h3')
    
   }

   hide(){
   this.input.hide();
    this.button.hide();
    this.greeting.hide();
   }

   display(){
       var tittle = createElement('h2');
       tittle.html("car Racing Game");
       tittle.position(130,0);

      
      this.input.position(130,160);      
       this.button.position(250,200);

      
      this.button.mousePressed(()=>{
           this.button.hide();
           this.input.hide();

           player.name = this.input.value();
           playerCount+= 1;
           player.index = playerCount;

           player.update();
           player.updateCount(playerCount);

           this.greeting.html("Hello "+ player.name);
           this.greeting.position(130,160);
       });
   }
}
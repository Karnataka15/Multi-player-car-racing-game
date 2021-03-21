class Form
{
    constructor()
    {
        this.input = createInput("Enter your name: ");
        this.button = createButton("Click here");
        this.greeting = createElement("h2");
        this.reset = createButton("reset game");
    }

    hide()
    {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    show()
    {
        var title = createElement("h1");
        title.html("Multiplayer Car Racing Game");
        title.position(displayWidth/2-50, 0);
        this.input.position(displayWidth/2-40, displayHeight/2-80);
        this.button.position(displayWidth/2+30, displayHeight/2-50);
        this.reset.position(displayWidth-100, 20);

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playercountsketch += 1;
            player.index = playercountsketch;
            player.writeplayerinfo();
            player.updatecount(playercountsketch);

            this.greeting.html("Welcome to the game "+player.name);
            this.greeting.position(displayWidth/2-30, displayHeight/2-60);
        });

        this.reset.mousePressed(() => {
            player.updatecount(0);
            game.updategamestate(0);
            database.ref("/").update({
                "allplayers" : null,
                "carsatend" : null
            });
        });
    }
}

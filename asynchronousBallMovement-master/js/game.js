class Game
{
    constructor(){}

    readgamestate()
    {
        database.ref("gamestate").on("value", (data) => {
            gamestatesketch = data.val();
        });
    }

    updategamestate(count)
    {
        database.ref("/").update({
            "gamestate" : count
        });    
    }

    async start()
    {
        if(gamestatesketch === 0)
        {
            player = new Player();
            var playercountref = await database.ref("playercount").once("value");
            if(playercountref.exists())
            {
                playercountsketch = playercountref.val();
                player.readcount();
            }

            form = new Form();
            form.show();
        }

        car1 = createSprite(100, 500);
        car1.addImage(car1i);

        car2 = createSprite(300, 500);
        car2.addImage(car2i);

        car3 = createSprite(500, 500);
        car3.addImage(car3i);

        car4 = createSprite(700, 500);
        car4.addImage(car4i);
        
        cars = [car1, car2, car3, car4];

    }

    play()
    {
        form.hide();
        Player.getplayerinfo();
        player.readcarsatend();
        if(allplayers !== undefined)
        {
            background("#c68767");
            image(tracki, 0, -displayHeight*4, displayWidth, displayHeight*5);
            var carindex = 0;

            var x = 175;
            var y;

            for(var plr in allplayers)
            {
                carindex = carindex + 1;
                x = x + 225;
                y = displayHeight-allplayers[plr].distance;

                cars[carindex - 1].x = x;
                cars[carindex - 1].y = y;

                if(carindex === player.index)
                {
                    stroke(10);
                    fill("red");
                    ellipse(x, y, 60, 60);
                    cars[carindex - 1].shapeColor = "red";

                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[carindex-1].y;
                }
            }    
                if(keyIsDown(UP_ARROW) && player.index !== null)
                {
                    console.log(y);
                    console.log(player.distance);
                    player.distance += 10;
                    player.writeplayerinfo();
                }
            
        } 

        if(player.distance > 4320){
            gamestatesketch = 2;
            player.rank += 1;
            Player.updatecarsatend(player.rank);
          }
          drawSprites();

    }
    end(){
        console.log("Game Ended");
        console.log("Your rank is "+player.rank);
      }

      
}
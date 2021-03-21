class Player 
{
    constructor()
    {
        this.name = null;
        this.index = null;
        this.distance = 0;
        this.rank = 0;
    }

    readcount()
    {
        database.ref("playercount").on("value",(data) => {
            playercountsketch = data.val();
        });
    }

    updatecount(count)
    {
        database.ref("/").update({
            "playercount" : count
        });  
    }

    writeplayerinfo()
    {
        var playerinfo = "allplayers/player"+this.index;
        database.ref(playerinfo).set({
            "name" : this.name,
            "distance" : this.distance
        });
    }

    static getplayerinfo()
    {
        database.ref("allplayers").on("value", (data) => {
            allplayers = data.val();
        });
    }

    readcarsatend()
    {
        database.ref("carsatend").on("value", (data) => {
            this.rank = data.val();
        });
    }

    static updatecarsatend(rank)
    {
        database.ref("/").update({
            "carsatend" : rank
        });
    }
}
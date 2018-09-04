// Write your Javascript code.
(function () {

    //var ModeModel = {
    //    KillDeath : ko.observable(""),
    //    AverageDamage : ko.observable(""),
    //    WinRation : ko.observable("")
    //};

    function ModeModel() {
        this.KillDeath= ko.observable(""),
        this.AverageDamage= ko.observable(""),
        this.WinRation= ko.observable("")
    };

    var StatsModel = {
        playerName: ko.observable(""),
        SoloFPP: new ModeModel(),
        DuoFPP: new ModeModel(),
        SquadFPP: new ModeModel(),
        SoloTPP: new ModeModel(),
        DuoTPP: new ModeModel(),
        SquadTPP: new ModeModel()
    };

    ko.applyBindings(StatsModel);


    function getPlayer(playerName, region) {
        var base = "http://pubgservicelayer.azurewebsites.net/api/pubg/playerstats/";
        $.getJSON(base + playerName + "/season/division.bro.official.2018-09/region/" + region, function (data) {

            StatsModel = ko.mapping.fromJS(data);
        });
    };


    console.log(StatsModel.playerName);
    
} ());
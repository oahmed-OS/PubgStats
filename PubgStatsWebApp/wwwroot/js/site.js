// Write your Javascript code.
(function () {

    var ModeModel = {
        KillDeath : ko.observable("").
        AverageDamage : ko.observable("").
        WinRation =:ko.observable("")
    };

    var StatsModel = {
        playerName : ko.observable(""),
        SoloFPP: new ModeModel(),
        DuoFPP: new ModeModel(),
        SquadFPP: new ModeModel(),
        SoloTPP: new ModeModel(),
        DuoTPP: new ModeModel(),
        SquadTPP: new ModeModel()
    }

} ());
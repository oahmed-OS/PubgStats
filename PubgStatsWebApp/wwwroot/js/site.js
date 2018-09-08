// Write your Javascript code.
(function () {

    function ModeModel(data) {
        var self = this;
        this.KillDeath = ko.observable((typeof data === 'undefined') ? 0 : data.killDeath);
        this.AverageDamage = ko.observable((typeof data === 'undefined') ? 0 : data.averageDamage);
        this.WinRatio = ko.observable((typeof data === 'undefined') ? 0 : data.winRatio);
    };

    function StatsModel() {
        var self = this;
        self.playerName = ko.observable('meow');
        self.SoloFPP = ko.observable();
        self.DuoFPP = ko.observable();
        self.SquadFPP = ko.observable();
        self.SoloTPP = ko.observable();
        self.DuoTPP = ko.observable();
        self.SquadTPP = ko.observable();
    };

    var modeMapping = {
        'soloFPP': {
            create: function (options) {
                return new ModeModel(options.data);
            }
        },
        'duoFPP': {
            create: function (options) {
                return new ModeModel(options.data);
            }
        },
        'squadFPP': {
            create: function (options) {
                return new ModeModel(options.data);
            }
        },
        'soloTPP': {
            create: function (options) {
                return new ModeModel(options.data);
            }
        },
        'duoTPP': {
            create: function (options) {
                return new ModeModel(options.data);
            }
        },
        'squadTPP': {
            create: function (options) {
                return new ModeModel(options.data);
            }
        }
    };

    var ViewModel = {
        Player: ko.observable(new StatsModel())
    }

    function getPlayer(playerName, region) {
        var base = "http://pubgservicelayer.azurewebsites.net/api/pubg/playerstats/";
        $.getJSON(base + playerName + "/season/division.bro.official.2018-09/region/" + region, function (data) {
            var playerStats = new StatsModel();
            playerStats = ko.mapping.fromJS(data, modeMapping);
            ViewModel.Player(playerStats);
        });
    };



    $('#searchPlayer').submit(function (event) {
        var name = $('#playerInput').val();
        getPlayer(name, '10');
        event.preventDefault();
    });

    //getPlayer("cronaldo97", "10");
    ko.applyBindings(ViewModel);
    
} ());
// evilService.js
module.exports = function EvilService(dependencies) {
    this.dependencies = dependencies;

    this.random = dependencies.random;

    var data = [
        {
            count: 0,
            trackId: "INSTALL-BAIDU",
            friendly_url: "instalar-baidu",
            title: "instalar o BAIDU!",
            img: "https://s3.amazonaws.com/elasticbeanstalk-us-east-1-141499087849/static/baidu.jpg",
            css: {
                background: "303030",
                accent: "d32f2f",
                accent_dark: "FDD835"
            }
        },
        {
            count: 0,
            trackId: "UBER-TAXI",
            friendly_url: "chamar-taxi-e-uber-ao-mesmo-tempo",
            title: "chamar taxi e Uber ao mesmo tempo!",
            img: "https://s3.amazonaws.com/elasticbeanstalk-us-east-1-141499087849/static/uber.jpg",
            css: {
                background: "303030",
                accent: "F9A825",
                accent_dark: "F57F17"
            }
        },
        {
            count: 0,
            trackId: "WHILE-TRUE",
            friendly_url: "fazer-while-true-no-codigo",
            title: "fazer WHILE true no código",
            img: "https://s3.amazonaws.com/elasticbeanstalk-us-east-1-141499087849/static/whiletrue.jpg",
            css: {
                background: "303030",
                accent: "00E676"
            }
        },
        {
            count: 0,
            trackId: "ABRIR-IE",
            friendly_url: "abrir-o-ie",
            title: "abrir o IE",
            img: "https://s3.amazonaws.com/elasticbeanstalk-us-east-1-141499087849/static/ie8.jpg",
            css: {
                background: "303030",
                accent: "0288D1"
            }
        }
    ];

    var newEvil = function() {
        var randomInt = random.randomInt(0,data.length);
        return data[randomInt];
    };

    var doEvil = function (friendlyUrl) {
        var evil = findByFriendlyURL(friendlyUrl);
        evil.count = evil.count+1;
    };

    var findByFriendlyURL = function(friendlyUrl) {
        for (var i = 0; i < data.length; i++) {
            var evil = data[i];
            if(evil.friendly_url === friendlyUrl){
                return evil;
            }
        }
        return {};
    };

    return {
        newEvil: newEvil,
        doEvil: doEvil,
        findByFriendlyURL: findByFriendlyURL
    }
};

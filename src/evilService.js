// evilService.js
module.exports = function EvilService(dependencies) {
    this.dependencies = dependencies;

    this.random = dependencies.random;

    var data = [
        {
            count: 0,
            friendly_url: "instalar-baidu",
            title: "instalar o BAIDU!",
            img: "https://s3.amazonaws.com/elasticbeanstalk-us-east-1-141499087849/static/baidu.jpg",
            css: {
                background: "303030",
                accent: "F44336",
                accent_dark: "B71C1C"
            }
        },
        {
            count: 0,
            friendly_url: "chamar-taxi-e-uber-ao-mesmo-tempo",
            title: "chamar taxi e Uber ao mesmo tempo!",
            img: "https://s3.amazonaws.com/elasticbeanstalk-us-east-1-141499087849/static/uber.jpg",
            css: {
                background: "303030",
                accent: "F44336",
                accent_dark: "B71C1C"
            }
        },
        {
            count: 100,
            friendly_url: "fazer-while-true-no-codigo",
            title: "fazer WHILE true no código",
            img: "https://s3.amazonaws.com/elasticbeanstalk-us-east-1-141499087849/static/whiletrue.jpg",
            css: {
                background: "303030",
                accent: "F44336",
                accent_dark: "B71C1C"
            }
        },
        {
            count: 0,
            friendly_url: "abrir-o-ie",
            title: "abrir o IE",
            img: "https://s3.amazonaws.com/elasticbeanstalk-us-east-1-141499087849/static/ie8.jpg",
            css: {
                background: "303030",
                accent: "F44336",
                accent_dark: "B71C1C"
            }
        },
        {
            count: 0,
            friendly_url: "escutar-funk-proibidao-no-spotify-no-ultimo-volume",
            title: "escutar funk proibidão no spotify no ultimo volume",
            img: "https://s3.amazonaws.com/elasticbeanstalk-us-east-1-141499087849/static/bondetigrao.jpg",
            css: {
                background: "303030",
                accent: "F44336",
                accent_dark: "B71C1C"
            }
        },
        {
            count: 0,
            friendly_url: "passar-correndo-na-frente-dos-camelos-e-gritar-o-rapa",
            title: "passar correndo na frente dos camelos e gritar OOOh Rapaaaa!",
            img: "http://oglobo.globo.com/fotos/2011/09/15/15_MHG_RIO_camelo.jpg",
            css: {
                background: "303030",
                accent: "F44336",
                accent_dark: "B71C1C"
            }
        },
        {
            count: 0,
            friendly_url: "passar-sorvete-no-arroz",
            title: "passar sorvete no arroz",
            img: "https://i.ytimg.com/vi/H52kepS9tO4/hqdefault.jpg",
            css: {
                background: "303030",
                accent: "F44336",
                accent_dark: "B71C1C"
            }
        },
        {
            count: 0,
            friendly_url: "engordar-para-valer",
            title: "engordar para valer",
            img: "https://i.ytimg.com/vi/H52kepS9tO4/hqdefault.jpg",
            css: {
                background: "303030",
                accent: "F44336",
                accent_dark: "B71C1C"
            }
        },
        {
            count: 0,
            friendly_url: "peidar-na-fila-do-banco-e-sair-correndo",
            title: "peidar na fila do banco e sair correndo",
            img: "http://www.polemicaparaiba.com.br/wp-content/uploads/2015/09/fila-de-banco.jpg",
            css: {
                background: "303030",
                accent: "F44336",
                accent_dark: "B71C1C"
            }
        },
        {
            count: 0,
            friendly_url: "ir-no-mcdonalds-e-pedir-uma-salada",
            title: "ir no McDonalds e pedir uma salada",
            img: "https://venancios.files.wordpress.com/2013/04/gordo.jpg",
            css: {
                background: "303030",
                accent: "F44336",
                accent_dark: "B71C1C"
            }
        },
        {
            count: 0,
            friendly_url: "fazer-um-site-de-maldade",
            title: "fazer um site de maldade",
            img: "https://i.ytimg.com/vi/oR13iPNv9wI/hqdefault.jpg",
            css: {
                background: "303030",
                accent: "0288D1"
            }
        },
        {
            count: 0,
            friendly_url: "colocar-filtro-do-cachorro",
            title: "colocar o filtro do cachorro",
            img: "http://static1.purebreak.com.br/articles/1/30/98/1/@/154968-kendall-jenner-tambem-adora-usar-o-filtr-950x0-1.jpg",
            css: {
                background: "303030",
                accent: "0288D1"
            }
        },
        {
            count: 0,
            friendly_url: "pegar-homem-pegar-mulher",
            title: "hoje é dia de pegar homem, pegar mulher! BORA",
            img: "https://i.ytimg.com/vi/M81ke9svVXo/hqdefault.jpg",
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

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
            count: 42,
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
            count: 87,
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
            count: 9,
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
            count: 52,
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
            count: 17,
            friendly_url: "passar-correndo-na-frente-dos-camelos-e-gritar-o-rapa",
            title: "passar correndo nos camelos e gritar OOOh Rapaaaa!",
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
            count: 12,
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
            count: 2,
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
            count: 3,
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
            count: 1,
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
            title: "pegar homem, pegar mulher! BORAA",
            img: "https://i.ytimg.com/vi/M81ke9svVXo/hqdefault.jpg",
            css: {
                background: "303030",
                accent: "0288D1"
            }
        },
        {
            count: 0,
            friendly_url: "pisar-na-grama",
            title: "pisar na grama",
            img: "http://redeemancipa.org.br/wp-content/uploads/2012/12/n%C3%A3o-pise.jpg",
            css: {
                background: "303030",
                accent: "0288D1"
            }
        },

        {
            count: 0,
            friendly_url: "logar-no-notebook-com-capslock-ligado",
            title: "logar no notebook com o capslock ligado",
            img: "https://secure.logitech.com/assets/32508/35/k800-top.jpg",
            css: {
                background: "303030",
                accent: "0288D1"
            }
        },

        {
            count: 0,
            friendly_url: "visualizar-e-nao-responder",
            title: "visualizar e não responder",
            img: "http://lounge.obviousmag.org/monica_montone/assets_c/2015/10/visualizar%20e%20n%C3%A3o%20responder%20(1)-thumb-800x600-125118.png",
            css: {
                background: "303030",
                accent: "0288D1"
            }
        },

        {
            count: 0,
            friendly_url: "like-proprio-video",
            title: "dar like no próprio video",
            img: "http://www.uhull.com.br/wp-content/uploads/2008/10/017_pics-399x263.jpg",
            css: {
                background: "303030",
                accent: "0288D1"
            }
        },

        {
            count: 0,
            friendly_url: "curtir-proprio-comentario",
            title: "curtir o proprio comentário",
            img: "http://www.uhull.com.br/wp-content/uploads/2008/10/017_pics-399x263.jpg",
            css: {
                background: "303030",
                accent: "0288D1"
            }
        },

        {
            count: 0,
            friendly_url: "nao-respoder-amem-no-grupo-da-familia",
            title: "não responder amém no grupo da famila",
            img: "https://www.whatsapp.com/img/v2/logo-promo.jpg",
            css: {
                background: "303030",
                accent: "0288D1"
            }
        },

        {
            count: 0,
            friendly_url: "mandar-video-de-gemido-para-avo",
            title: "mandar video de gemido para a Avó",
            img: "http://www.tribunahoje.com/vgmidia/imagens/21533_ext_arquivo.jpg",
            css: {
                background: "303030",
                accent: "0288D1"
            }
        },

        {
            count: 0,
            friendly_url: "espalhar-que-o-whatsapp-sera-pago",
            title: "espalhar que o whatsapp será pago",
            img: "http://franquiaautomatica.com/blog/wp-content/uploads/2014/07/whatsapp-pago-whatsapp-gratis-whatsapp-vai-ser-pago.jpg",
            css: {
                background: "303030",
                accent: "0288D1"
            }
        },

        {
            count: 0,
            friendly_url: "dar-like-em-baranga-no-tinder",
            title: "dar like em baranga no Tinter",
            img: "http://www.eonline.com/eol_images/Entire_Site/2014817/rs_560x415-140917143530-1024.Tinder-Logo.ms.091714_copy.jpg",
            css: {
                background: "303030",
                accent: "0288D1"
            }
        },

        {
            count: 0,
            friendly_url: "mandar-indireta-para-o-vizinho-com-o-nome-da-rede-wifi",
            title: "mandar indireta para o vizinho com o nome da rede wifi",
            img: "http://img.ibxk.com.br/ns/rexposta/2015/05/14/14213459278002.jpg",
            css: {
                background: "303030",
                accent: "0288D1"
            }
        },

        {
            count: 0,
            friendly_url: "pedir-vida-no-candycrush",
            title: "pedir vida no Candy Crush",
            img: "http://i2.wp.com/candycrushsodasagatips.com/wp-content/uploads/2014/10/candy-crush-soda-level-13-new-screenshot.png",
            css: {
                background: "303030",
                accent: "0288D1"
            }
        },

        {
            count: 0,
            friendly_url: "alterar-fonte-notepad",
            title: "alterar o fonte no notepad",
            img: "http://www.tutorials4u.com/html/graphics/notepad/notepad-new-page.jpg",
            css: {
                background: "303030",
                accent: "0288D1"
            }
        },

        {
            count: 0,
            friendly_url: "debug-em-producao",
            title: "fazer debug em produção",
            img: "http://i.istockimg.com/file_thumbview_approve/68886757/6/stock-photo-68886757-it-background-binary-code-a08.jpg",
            css: {
                background: "303030",
                accent: "0288D1"
            }
        },

        {
            count: 0,
            friendly_url: "fechar-chamado-no-ultimo-dia-do-sla",
            title: "fechar o chamado no ultimo dia do SLA",
            img: "http://i.istockimg.com/file_thumbview_approve/68886757/6/stock-photo-68886757-it-background-binary-code-a08.jpg",
            css: {
                background: "303030",
                accent: "0288D1"
            }
        },

        {
            count: 0,
            friendly_url: "fazer-style-inline",
            title: "fazer style inline",
            img: "http://img.pandawhale.com/56193-Whenever-I-try-to-open-blinds-1kSs.gif",
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

    var evilsDone = function () {
        return data.map(evil => evil.count ).reduce((first, second) => first + second);
    };

    var totalEvils = function () {
        return data.length;
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
        evilsDone: evilsDone,
        totalEvils: totalEvils,
        newEvil: newEvil,
        doEvil: doEvil,
        findByFriendlyURL: findByFriendlyURL
    }
};

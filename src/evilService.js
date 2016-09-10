// evilService.js
module.exports = function EvilService(dependencies) {
    this.dependencies = dependencies;

    this.random = dependencies.random;
    this.cache = dependencies.cache;

    var data = [
        {
            count: 0,
            friendly_url: "instalar-baidu",
            title: "instalar o BAIDU!",
            img: "http://antivirusbaixar.com/wp-content/uploads/2015/10/baixar-baidu.png",
        },
        {
            count: 87,
            friendly_url: "chamar-taxi-e-uber-ao-mesmo-tempo",
            title: "chamar taxi e Uber ao mesmo tempo!",
            img: "http://static1.businessinsider.com/image/542eedabeab8ea7c105c0cc4-480/uber-vs-taxi-title-card.png",
        },
        {
            count: 0,
            friendly_url: "fazer-while-true-no-codigo",
            title: "fazer WHILE true no código",
            img: "https://s31.postimg.io/dghsy71aj/Screen_Shot_2016_07_12_at_22_27_08.png",
        },
        {
            count: 9,
            friendly_url: "abrir-o-ie",
            title: "abrir o IE",
            img: "http://www.saveie6.com/_img/img_aboutie6.gif",
        },
        {
            count: 52,
            friendly_url: "escutar-funk-proibidao-no-spotify-no-ultimo-volume",
            title: "escutar funk proibidão no spotify no ultimo volume",
            img: "https://i.ytimg.com/vi/hrGSmH2VQ0I/hqdefault.jpg",
        },
        {
            count: 17,
            friendly_url: "passar-correndo-na-frente-dos-camelos-e-gritar-o-rapa",
            title: "passar correndo nos camelôs e gritar OOOh Rapaaaa!",
            img: "http://oglobo.globo.com/fotos/2011/09/15/15_MHG_RIO_camelo.jpg",
        },
        {
            count: 0,
            friendly_url: "passar-sorvete-no-arroz",
            title: "passar sorvete no arroz",
            img: "https://i.ytimg.com/vi/H52kepS9tO4/hqdefault.jpg",
        },
        {
            count: 12,
            friendly_url: "engordar-para-valer",
            title: "engordar para valer",
            img: "https://i.ytimg.com/vi/H52kepS9tO4/hqdefault.jpg",
        },
        {
            count: 2,
            friendly_url: "peidar-na-fila-do-banco-e-sair-correndo",
            title: "peidar na fila do banco e sair correndo",
            img: "http://www.polemicaparaiba.com.br/wp-content/uploads/2015/09/fila-de-banco.jpg",
        },
        {
            count: 3,
            friendly_url: "ir-no-mcdonalds-e-pedir-uma-salada",
            title: "ir no McDonalds e pedir uma salada",
            img: "https://venancios.files.wordpress.com/2013/04/gordo.jpg",
        },
        {
            count: 1,
            friendly_url: "fazer-um-site-de-maldade",
            title: "fazer um site de maldade",
            img: "https://i.ytimg.com/vi/oR13iPNv9wI/hqdefault.jpg",
        },
        {
            count: 0,
            friendly_url: "colocar-filtro-do-cachorro",
            title: "colocar o filtro do cachorro",
            img: "http://static1.purebreak.com.br/articles/1/30/98/1/@/154968-kendall-jenner-tambem-adora-usar-o-filtr-950x0-1.jpg",
        },
        {
            count: 0,
            friendly_url: "pegar-homem-pegar-mulher",
            title: "pegar homem, pegar mulher! BORAA",
            img: "https://i.ytimg.com/vi/M81ke9svVXo/hqdefault.jpg",
        },
        {
            count: 0,
            friendly_url: "pisar-na-grama",
            title: "pisar na grama",
            img: "http://redeemancipa.org.br/wp-content/uploads/2012/12/n%C3%A3o-pise.jpg",
        },

        {
            count: 0,
            friendly_url: "logar-no-notebook-com-capslock-ligado",
            title: "logar no notebook com o capslock ligado",
            img: "https://secure.logitech.com/assets/32508/35/k800-top.jpg",
        },

        {
            count: 0,
            friendly_url: "visualizar-e-nao-responder",
            title: "visualizar e não responder",
            img: "http://lounge.obviousmag.org/monica_montone/assets_c/2015/10/visualizar%20e%20n%C3%A3o%20responder%20(1)-thumb-800x600-125118.png",
        },

        {
            count: 0,
            friendly_url: "like-proprio-video",
            title: "dar like no próprio video",
            img: "http://www.uhull.com.br/wp-content/uploads/2008/10/017_pics-399x263.jpg",
        },

        {
            count: 0,
            friendly_url: "curtir-proprio-comentario",
            title: "curtir o próprio comentário",
            img: "http://www.uhull.com.br/wp-content/uploads/2008/10/017_pics-399x263.jpg",
        },

        {
            count: 0,
            friendly_url: "nao-respoder-amem-no-grupo-da-familia",
            title: "não responder amém no grupo da famila",
            img: "https://www.whatsapp.com/img/v2/logo-promo.jpg",
        },

        {
            count: 0,
            friendly_url: "mandar-video-de-gemido-para-avo",
            title: "mandar video de gemido para a Avó",
            img: "http://www.tribunahoje.com/vgmidia/imagens/21533_ext_arquivo.jpg",
        },

        {
            count: 0,
            friendly_url: "espalhar-que-o-whatsapp-sera-pago",
            title: "espalhar que o whatsapp será pago",
            img: "http://franquiaautomatica.com/blog/wp-content/uploads/2014/07/whatsapp-pago-whatsapp-gratis-whatsapp-vai-ser-pago.jpg",
        },

        {
            count: 0,
            friendly_url: "dar-like-em-baranga-no-tinder",
            title: "dar like em baranga no Tinter",
            img: "http://www.eonline.com/eol_images/Entire_Site/2014817/rs_560x415-140917143530-1024.Tinder-Logo.ms.091714_copy.jpg",
        },

        {
            count: 0,
            friendly_url: "mandar-indireta-para-o-vizinho-com-o-nome-da-rede-wifi",
            title: "mandar indireta para o vizinho com o nome da rede wifi",
            img: "http://img.ibxk.com.br/ns/rexposta/2015/05/14/14213459278002.jpg",
        },

        {
            count: 0,
            friendly_url: "pedir-vida-no-candycrush",
            title: "pedir vida no Candy Crush",
            img: "http://i2.wp.com/candycrushsodasagatips.com/wp-content/uploads/2014/10/candy-crush-soda-level-13-new-screenshot.png",
        },

        {
            count: 0,
            friendly_url: "alterar-fonte-notepad",
            title: "alterar o fonte no notepad",
            img: "http://www.tutorials4u.com/html/graphics/notepad/notepad-new-page.jpg",
        },

        {
            count: 0,
            friendly_url: "debug-em-producao",
            title: "fazer debug em produção",
            img: "http://i.istockimg.com/file_thumbview_approve/68886757/6/stock-photo-68886757-it-background-binary-code-a08.jpg",
        },

        {
            count: 0,
            friendly_url: "fechar-chamado-no-ultimo-dia-do-sla",
            title: "fechar o chamado no ultimo dia do SLA",
            img: "http://i.istockimg.com/file_thumbview_approve/68886757/6/stock-photo-68886757-it-background-binary-code-a08.jpg",
        },

        {
            count: 0,
            friendly_url: "fazer-style-inline",
            title: "fazer style inline",
            img: "http://img.pandawhale.com/56193-Whenever-I-try-to-open-blinds-1kSs.gif",
        },

        {
            count: 0,
            friendly_url: "discordar-waze",
            title: "discordar do waze e se dar mal",
            img: "http://neurogadget.net/wp-content/uploads/2015/10/Google-Maps-Waze.jpg",
        },

        {
            count: 4,
            friendly_url: "mandar-funcionario-embora",
            title: "mandar algum funcionário embora",
            img: "http://bbb17.co/wp-content/uploads/2015/07/vota%C3%A7%C3%A3o-bbb-16.jpg",
        }

    ];

    /** THIS NEED TO BE FIXED **/
    function newEvil(err, callback) {
        var randomInt = random.randomInt(0,data.length);
        findByFriendlyURL(data[randomInt].friendly_url, callback)
    }

    var doEvil = function (friendlyUrl, callback) {

        findByFriendlyURL(friendlyUrl, function(err, evil){
            evil.count = evil.count + 1;
            cacheEvil(err, evil, function(err, evil){

                increaseEvilsDone(err, function(err){
                    callback(err, evil)
                })
            });
        });


    };

    function evilsDone(err, callback) {

        cache.get("evilsDone", function(err, data){
            if (err) {
                return callback(err, null);
            }

            var evilsDone = 0;
            if(data){
                evilsDone = data;
            }else {
                cache.set("evilsDone", 0, 0, function(err){});
            }
            console.log("[DEBUG] evilsDone", evilsDone)
            callback(null, evilsDone)
        })
    }

    var totalEvils = function () {
        return data.length;
    };

    var findByFriendlyURL = function(friendlyUrl, callback) {
        console.log("[DEBUG] findByFriendlyURL", friendlyUrl)
        var evil
        var data = getData();
        for (var i = 0; i < data.length; i++) {
            if(data[i].friendly_url === friendlyUrl){
                evil = data[i];
            }
        }
        if(!evil){
            return callback({ error: 'Evil not found' }, {});
        }

        cache.get(evil.friendly_url, function(err, evilCount){
            if (err) {
                return callback(err, {});
            }

            evil.count = 0;
            if(evilCount){
                evil.count = evilCount;
            }
            console.log("[DEBUG] FOUND ", friendlyUrl, evil.count)
            callback(null, evil)
        })

    };

    function getData(){
        return data;
    }

    var cacheEvil = function(err, evil, callback){
        console.log("[DEBUG] CACHING evil=" + evil.friendly_url);
        if(err){
            console.log("[ERROR] CACHING evil" + evil.friendly_url + ",err" + err);
            return callback(err)
        }

        // CACHE EVIL
        cache.set(evil.friendly_url, evil.count, 0, function(err){
            if(err){
                console.error("FAILED TO CACHE: " + evil.friendly_url + "=" + evil.count + ", err=" + err);
            }else {
                console.log("CACHE OK: " + evil.friendly_url + "=" + evil.count);
            }
            callback(err, evil)
        });
    };


    function increaseEvilsDone(err, callback){
        cache.incr('evilsDone', 1, function (err) {
            if(err){
                console.error(err)
            }
            callback(err);
        });
    }

    return {
        getData: getData,
        evilsDone: evilsDone,
        totalEvils: totalEvils,
        newEvil: newEvil,
        doEvil: doEvil,
        findByFriendlyURL: findByFriendlyURL
    }
};

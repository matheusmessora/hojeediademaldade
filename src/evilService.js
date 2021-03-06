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
            img: "http://antivirus.baidu.com/r/image/2014-08-25/22a52239c422616442d2c35540ff1361.jpg",
            // links: [3,9],
            linkedEvils: []
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
            img: "https://davescomputertips.com/wp-content/uploads/2014/04/IE-logo.jpg",
            // links: [0,9],
            linkedEvils: []
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
            // links: [0, 3],
            linkedEvils: []
        },
        {
            count: 0,
            friendly_url: "colocar-filtro-do-cachorro",
            title: "colocar o filtro do cachorro",
            img: "http://static1.purebreak.com.br/articles/1/30/98/1/@/154968-kendall-jenner-tambem-adora-usar-o-filtr-950x0-1.jpg",
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
            img: "http://brcdn02.mundotkm.com/2014/11/whatsapp.jpg",
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
            img: "https://s3.amazonaws.com/static-hojediademaldade/amem.jpg",
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
            friendly_url: "dar-like-no-tinder",
            title: "dar like no Tinder",
            img: "http://data.pixiz.com/output/preview/400x400/0/5/1/3/3150_eeceb.jpg",
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
            img: "https://i.imgur.com/Q3cUg29.gif",
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
            img: "https://i.ytimg.com/vi/PDcpkaYzluM/maxresdefault.jpg",
        },

        {
            count: 0,
            friendly_url: "ir-trabalhar-com-conjuntivite",
            title: "ir trabalhar com conjuntivite",
            img: "http://i1.allaboutvision.com/i/buysmart-2016/eye-drop-into-eye-330x260.jpg",
        },

        {
            count: 0,
            friendly_url: "rezar-para-o-sistema-funcionar",
            title: "rezar para o sistema funcionar",
            img: "http://www.brasil247.com/images/3/ad/3adea494d1938a46057802bae893b6cea1a181a2.jpg",
        },

        {
            count: 0,
            friendly_url: "pedir-milkshake-de-ovomaltine-no-bobs",
            title: "pedir milkshake de ovomaltine no Bob's",
            img: "http://extra.globo.com/incoming/20110124-a0f-5a1/w640h360-PROP/milk-shake-bobs.jpg",
        },

        {
            count: 0,
            friendly_url: "ganhar-desconto-na-netshoes",
            title: "ganhar desconto na NETSHOES",
            img: "http://imgemail.netshoes.com.br/20161111/vespertino/img/destaque_vespertino.jpg",
        },

        {
            count: 0,
            friendly_url: "otimizar-meu-site",
            title: "otimizar meu site com um tema profissional de Wordpress",
            adpage: "centive"
        },

        {
            count: 0,
            friendly_url: "fazer-o-urro",
            title: "fazer o URRO",
            img: "https://memecrunch.com/meme/4JXHF/faz-o-urro/image.png?w=400&c=1",
        },

        {
            count: 0,
            friendly_url: "jogar-mu-com-os-amigos",
            title: "jogar MU com os amigos",
            img: "http://uploadcdn.webzen.com/Files/Clara/portal-inquiry-notice/2012/03/21/20120321FONREJSSE6V202E4.jpg",
        },

        {
            count: 0,
            friendly_url: "fazer-chapinha-e-tomar-chuva",
            title: "fazer a chapinha e tomar chuva",
            img: "https://ifwewerefamous.files.wordpress.com/2011/07/258430.jpg",
        },

        {
            count: 0,
            friendly_url: "esquecer-facebook-aberto",
            title: "esquecer o facebook aberto",
            img: "http://geradormemes.com/media/created/llmfyy.jpg",
        },

        {
            count: 0,
            friendly_url: "tomar-cuidado-com-o-vao-entre-o-trem-e-a-plataforma",
            title: "tomar cuidado com o vão entre o trem e a plataforma",
            img: "https://reticenciajornalistica.files.wordpress.com/2013/02/linha-7-rubi-abismo-entre-o-trem-e-a-plataforma1.jpg",
        },

        {
            count: 0,
            friendly_url: "achar-dragonite-com-cp-baixo",
            title: "achar Dragonite com CP baixo",
            img: "http://i.imgur.com/egqSR0J.png",
        },

        {
            count: 0,
            friendly_url: "nao-seguir-a-dieta",
            title: "não seguir a dieta",
            img: "https://i.ytimg.com/vi/nb9GMm7QtlM/maxresdefault.jpg",
        }
,

        {
            count: 0,
            friendly_url: "blackfriday-no-shopping-trem",
            title: "blackfriday no shopping trem",
            img: "https://s3.amazonaws.com/static-hojediademaldade/shoppingtrem.jpg",
        }



        
    ];

    /** THIS NEED TO BE FIXED **/
    function newEvil(err, loadLinks, callback) {
        var randomInt = random.randomInt(0,data.length);
        findByFriendlyURL(data[randomInt].friendly_url, loadLinks, callback)
    }

    var totalEvils = function () {
        return data.length;
    };

    var findByIndex = function(index){
        return data[index];
    };

    var findByFriendlyURL = function(friendlyUrl, loadLinks, callback) {
        var evil;
        var data = getData();
        for (var i = 0; i < data.length; i++) {
            if(data[i].friendly_url === friendlyUrl){
                evil = data[i];
            }
        }
        if(!evil){
            console.log("[EVIL] friendlyUrl not found", friendlyUrl)
            return callback({ error: 'Evil not found' }, {});
        }else {
            if(loadLinks){
                if(evil.links){
                    for (var i = 0; i < evil.links.length; i++) {
                        evil.linkedEvils.push(findByIndex(evil.links[i]))
                    }
                    callback(null, evil);
                }else {
                    evil.linkedEvils = [];
                    newEvil(null, false, function(err, firstLinked){
                        evil.linkedEvils.push(firstLinked);

                        newEvil(err, false, function(err, secondLinked){
                            evil.linkedEvils.push(secondLinked);
                            callback(err, evil)
                        });
                    })
                }

            }else {
                callback(null, evil);
            }
        }
    };

    function getData(){
        return data;
    }

    return {
        getData: getData,
        totalEvils: totalEvils,
        newEvil: newEvil,
        findByFriendlyURL: findByFriendlyURL
    }
};

module.exports = function ADService(dependencies) {
    this.dependencies = dependencies;
    this.random = dependencies.random;

    var data = [
        {
            name: "centive",
            html: {
                rectangle: '<a href="https://go.hotmart.com/B5117128A"><img src="http://centive.com.br/wp-content/uploads/2015/04/centiveavante-retangulo-gif-a.gif" border="0" width="300" height="250" /></a>',
                banner: '<a href="https://go.hotmart.com/B5117128A"><img src="http://centive.com.br/wp-content/uploads/2015/04/centiveavante-cabecalho-gif-a.gif" border="0" width="728" height="90" /></a>'
            }
        },
        {
            name: "posthaus",
            html: {
                rectangle: '<script language="JavaScript1.1" type="text/javascript" src="http://www.afiliados.posthaus.com.br/get_banner.jsp?mkt=PH5838&bann=187"></script>',
                banner: '<script language="JavaScript1.1" type="text/javascript" src="http://www.afiliados.posthaus.com.br/get_banner.jsp?mkt=PH5838&bann=198"></script>'
            }

        },
        {
            name: "magazine",
            html: {
                rectangle: '<div class="magazine medium-rectangle" data-mvc-banner="medium-rectangle"></div>',
                banner: '<div class="magazine leaderboard" data-mvc-banner="leaderboard"></div>'
            }
        }
    ];

    function getAd(callback) {
        var randomInt = random.randomInt(0,data.length);
        callback(data[randomInt]);
    }

    return {
        getAd: getAd
    }
};

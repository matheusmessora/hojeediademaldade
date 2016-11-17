// evilService.js
module.exports = function IPService(dependencies) {
    this.dependencies = dependencies;

    this.cache = dependencies.cache;

    var countIPevil = function (ip, callback) {
        var cacheKey = "ip-" + ip;

        cache.get(cacheKey, function(err, data){
            if (err) {
                console.log(err);
                return callback(err, null);
            }

            if(data){
                data++;
                cache.incr(cacheKey, 1, function(err){
                    if(err) console.log(err);
                });
                console.log("[IP-SERVICE] INCR countIP", cacheKey, data);
            }else {
                data = 1;
                var ONE_DAY = 86400
                cache.set(cacheKey, data, ONE_DAY, function(err){
                    if(err) console.log(err);
                });
                console.log("[IP-SERVICE] SET countIP", cacheKey, data);
            }
            callback(null, data)
        })


    };

    return {
        countIPevil: countIPevil
    }
};

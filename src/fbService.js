module.exports = function FBService(dependencies) {
    this.dependencies = dependencies;
    this.cache = dependencies.cache;

    var cacheKey = "fb-social";
    var userKeyPrefix = "fb-social-";

    init();

    function getIDs(callback) {
        cache.get(cacheKey, function(err, data){
            callback(err, data);
        });
    }

    function getByID(id, callback) {
        cache.get(userKeyPrefix + id, function(err, data){
            callback(err, data);
        });
    }

    function saveId(id, calback){
        getIDs(function(err, data){
            console.log("[FB-SERVICE] saveID get", id, data)
            if(!data.includes(id)){
                data = data + "," + id;
                cache.set(cacheKey, data, 0, function(err){
                    console.log("[FB-SERVICE] saveID new", cacheKey, id, data);
                    calback(err);
                })
            }else {
                console.log("[FB-SERVICE] saveID already exists", cacheKey, id, data);
                calback(err);
            }
        });
    }


    function init() {
        cache.del(cacheKey, function(err){
            getIDs(function(err, data){
                if(!data){
                    cache.set(cacheKey, "000000000000", 0, function(err){});
                }
            });
        })
    }



    var save = function (user, callback) {
        var userKey = userKeyPrefix + user.id;

        cache.set(userKey, user, 0, function(err){
            if(err) {
                console.log(err);
                callback(err)
            }
            else {
                console.log("[FB-SERVICE] save", userKey, user);

                saveId(user.id, callback);
            }
        });
    };

    return {
        save: save,
        getIDs: getIDs,
        getByID: getByID
    }
};

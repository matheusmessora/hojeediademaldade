module.exports = function SugestionService(dependencies) {
    this.dependencies = dependencies;
    this.cache = dependencies.cache;

    var cacheKeyPrefix = "sugestion-";

    var save = function (sugestion, callback) {
        var key = cacheKeyPrefix + sugestion.id;

        cache.get(key, function(err, data){
            if(data){
                data.sugestions.push(sugestion.sugestion);
            }else {
                sugestion = [sugestion.sugestion]
                data = {
                    id: sugestion.id,
                    sugestions: sugestion
                }
            }

            cache.set(key, data, 0, function(err){
                if(err) {
                    console.log(err);
                    callback(err)
                }
                else {
                    console.log("[SUGESTION-SERVICE] save", key, data);
                    callback();
                }
            });
        })
    };


    var getByID = function(id, callback) {
        var key = cacheKeyPrefix + id;
        cache.get(key, function(err, data){
            callback(err, data);
        });
    }

    return {
        save: save,
        getByID: getByID
    }
};

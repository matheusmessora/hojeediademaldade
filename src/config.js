module.exports = function(){
    switch(process.env.NODE_ENV){
        case 'production':
            return {
                memcached: {
                    ip: 'diademaldadecache.rfozey.cfg.use1.cache.amazonaws.com:11211'
                }
            };

        default:
            return {
                memcached: {
                    ip: '192.168.99.100:11211'
                }
            };
    }
};
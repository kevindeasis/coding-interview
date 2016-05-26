module.exports = function (){
    switch(process.env.NODE_ENV){
        case 'development':
            return {env:'development'};
        case 'staging':
            return {env:'staging'}
        case 'production':
            return {env:'production'};
        default:
            return {};
    }
}
module.exports = function (rep, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headres', 'Origin, X-Requested-Wit, Content-Type, Accept')
    next()
}
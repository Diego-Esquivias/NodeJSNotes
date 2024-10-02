const logger = (req, res, next) => {
    const method  = req.method
    const url = req.url
    const time = 'Date: ' + (new Date().getUTCMonth()+ 1) + ' / ' + new Date().getUTCDate() + ' / ' + new Date().getUTCFullYear() + ' | Time: ' + new Date().getHours() + ':' + new Date().getMinutes()
    console.log(method, url, time)
    next()
}
module.exports = logger;
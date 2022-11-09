module.exports.home = function (req, res)
{
    return res.render('home', {
        title:'home'
    });
}
module.exports.app = function (req, res)
{
    return res.render('app', {
        title:'apps'
    });
}

module.exports.trash = function (req, res)
{
    return res.render('trash', {
        title:'trash'
    });
}
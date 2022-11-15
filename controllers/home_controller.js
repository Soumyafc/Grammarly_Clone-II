module.exports.home = function (req, res)
{
    return res.render('home', {
        title: 'home',
        layout: "layout"
    });
}
module.exports.app = function (req, res)
{
    return res.render('app', {
        title: 'apps',
        layout: "layout"
    });
}

module.exports.trash = function (req, res)
{
    return res.render('trash', {
        title: 'trash',
        layout: "layout"
    });
}

module.exports.texteditor = function (req, res)
{
    return res.render('newtexteditor', {
        title: "texteditor",
        layout: "blank-layout"
    })
}
module.exports = {
    url: "/contact",
    protocol: "GET",
    run: (app, req, res) => {

        switch (req.query.success) {
            case "0":
                res.render('contact', {success: false});
            break;
            case "1":
                res.render('contact', {success: true});
            break;
            default:
                res.render('contact', {success: undefined});
            break;
        };
        
    },
};
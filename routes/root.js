module.exports = {
    url: "/",
    protocol: "GET",
    run: (app, req, res) => {

        res.render('examples');
        
    },
};
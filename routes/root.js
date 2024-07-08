module.exports = {
    url: "/",
    method: "GET",
    run: (app, req, res) => {

        res.render('examples');
        
    },
};
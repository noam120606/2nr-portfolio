module.exports = {
    url: "/exemples",
    protocol: "GET",
    run: (app, req, res) => {

        res.render('examples');
        
    },
};
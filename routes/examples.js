module.exports = {
    url: "/exemples",
    method: "GET",
    run: (app, req, res) => {

        res.render('examples');
        
    },
};
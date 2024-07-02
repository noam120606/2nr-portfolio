module.exports = {
    url: "/terms",
    protocol: "GET",
    run: (app, req, res) => {

        res.render('terms');
        
    },
};
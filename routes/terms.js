module.exports = {
    url: "/terms",
    method: "GET",
    run: (app, req, res) => {

        res.render('terms');
        
    },
};
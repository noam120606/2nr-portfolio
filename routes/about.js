module.exports = {
    url: "/about",
    protocol: "GET",
    run: (app, req, res) => {

        res.render('about');
        
    },
};
module.exports = {
    url: "/about",
    method: "GET",
    run: (app, req, res) => {

        res.render('about');
        
    },
};
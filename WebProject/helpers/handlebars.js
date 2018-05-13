var register = function(Handlebars){
    var helpers = {
        foo: function(req, res){
            res.send('foo help function');
        }
    };

    if(Handlebars && typeof Handlebars.registerHelper == "function"){
        for(var prop in helpers){
            Handlebars.registerHelper(prop, helpers[prop]);
        }
    }else{
        return helpers;
    }
}

module.exports.register = register;
module.exports.helpers=register(null);
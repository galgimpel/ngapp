
'use strict';


var fs = require('fs');



function get(req, res, next) {
    var obj;

    fs.readFile('./data.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        res.status(200).send(obj);
    });
}

function update(req, res, next) {

    let fileData = req.body;

    fs.readFile('./data.json', 'utf8', function (err, data) {
        if (err) throw err;
        var obj = JSON.parse(data);

        console.log(fileData);
        obj.forEach(item => {
            let user = fileData.find(c => c.id === item.id);
            if (user) {
                item.description = user.description;
                item.name = user.name;
            }
        });


        fs.writeFile('./data.json', JSON.stringify(obj), function (err) {
            if (err) return console.log(err);
            // console.log(JSON.stringify(obj));
            // console.log('writing to ' + 'data.json');
            // let obj2 = JSON.parse(obj);
            res.status(200).send();

        });

    });


}


module.exports.users = {
    get: get,
    update: update
}
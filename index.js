const express = require('express');
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({
    extended: false,
});
const jsonfile = require('jsonfile')
    
const app = express();

app.set('view engine', 'pug');

let vars = null;

app.use('/images', express.static(`${__dirname}/assets/images`));
app.use('/styles', express.static(`${__dirname}/assets/styles`));
app.use('/scripts', express.static(`${__dirname}/assets/scripts`));


app.use('/dashboard', (request, response) => {
    vars = jsonfile.readFileSync('./render.json')
    response.render('dashboard', vars)
})

app.post('/addTask', urlencodedParser, (req, res) => {
    if(!req.body){
        res.sendStatus(400);
        return;
    }

    let { title, description, expires, priority, field } = req.body;

    priority = priority ?? "high";

    console.log(priority)

    jsonfile.readFile('./render.json', (err, data) => {
        if(err){
            throw err;
        } else {
            let usersObj = data;

            console.log(priority)

            usersObj.tasks[field].push({
                title: title,
                description: description,
                expires: expires,
                priority: priority
            })

            jsonfile.writeFile('./render.json', usersObj, { spaces: 2 }, (err) => {
                if(err){
                    throw err;
                }
            })
        }
    })

    res.redirect('/dashboard')

})

app.listen(5000)

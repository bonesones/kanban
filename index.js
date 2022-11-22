const express = require('express');
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({
    extended: false,
});
const jsonfile = require('jsonfile')
    
const app = express();

app.set('view engine', 'pug');

let vars = null;

let increment = 7;

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

    let { title, description, expires, priority = "high", field } = req.body;


    jsonfile.readFile('./render.json', (err, data) => {
        if(err){
            throw err;
        } else {
            let usersObj = data;

            usersObj.tasks[field].push({
                title: title,
                description: description,
                expires: expires,
                priority: priority,
                id: increment++
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


app.delete("/removeTask/:tasks/:id",(req, res) => {
    
    const { id: taskId , tasks} = req.params;

    jsonfile.readFile('./render.json', (err, data) => {
        if(err){
            throw err;
        } else {
            let usersObj = data;

            let currentTask = usersObj.tasks[tasks].findIndex(({ id }) => id == taskId)

            usersObj.tasks[tasks].splice(currentTask, 1);

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

const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.use('/images', express.static(`${__dirname}/assets/images`));
app.use('/styles', express.static(`${__dirname}/assets/styles`));



app.use('/dashboard', (request, response) => {
    response.render('dashboard', {
        title: "Test list",
        users: 0
    })
})

app.listen(3000)

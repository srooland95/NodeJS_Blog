const express = require('express');
const app = express();

// listen for request
app.listen(3000);

// register view engine
app.set('view engine', 'ejs')

//  get views
app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];

  res.render('index', { title: 'Blogs', blogs});
})

app.get('/about', (req,res) => {
  res.render('about', { title: 'About'});
})

app.get('/blog/create', (req, res) => {
  res.render('create', { title: 'Create blog'});
})

// 404 error
app.use((req, res) => {
  res.status(404).render('404', { title: '404'});
})
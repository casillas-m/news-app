const axios = require('axios');
require('dotenv').config();

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

class News {
  getAll(req, res) {
    let query;
    if(req.query.q)query = req.query.q;
    else query = ""
    console.log('Query params: ', req.query.test);
    const url = `${apiUrl}everything?q=${query}&sortBy=publishedAt&apiKey=${apiKey}`;
    axios.get(url).then(response => {
      res.send(response.data.articles);
    }).catch(e => {
      res.send('Oops! Failed!')
      res.end();
    })
  }

  getHeadlines(req, res) {//***** */
    console.log('------------------------------------');
    console.log(req.query);
    console.log('------------------------------------');
    let country;
    if(req.query.country !== undefined)country = req.query.country;
    else country = "mx"
    const url = `${apiUrl}top-headlines?country=${country}&apiKey=${apiKey}`;
    axios.get(url).then(response => {
      res.send(response.data.articles);
    }).catch(e => {
      res.send('Oops! Failed!')
      res.end();
    })
  }

  getSources(req, res){
    const url = `${apiUrl}sources?apiKey=${apiKey}`;
    axios.get(url).then(response => {
      res.send(response.data.articles);
    }).catch(e => {
      res.send('Oops! Failed!')
      res.end();
    })
  }

  getById(req, res) {
    res.send('Traer la noticia ' + req.params.noticiaID);
  }
}

module.exports = new News();


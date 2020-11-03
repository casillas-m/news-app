const axios = require('axios');
require('dotenv').config();

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

class News {
  getAll(req, res) {
    let query = req.query.q || "bitcoin"
    let source = req.query.source || ""
    console.log('Query params: ', query);
    const url = `${apiUrl}everything?q=${query}${source!==""?`&sources=${source}`:""}&apiKey=${apiKey}`;
    axios.get(url).then(response => {
      res.send(response.data.articles);
    }).catch(e => {
      res.send('Oops! Failed!')
      res.end();
    })
  }

  getHeadlines(req, res) {//***** */
    let country = req.query.country || "mx"
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
      res.send(response.data.sources);
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


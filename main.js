const mongoose = require('mongoose');
const articleModel = require('./models/article');
const url = 'mongodb://localhost:27017/articlesTable';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(url, options);
const db = mongoose.connection;

db.on('eror', (err) => {
    console.log('Db erore: ', err);
});

db.once('open', () => {
    console.log('Conected DB');
});

db.once('close', () => {
    console.log('DB close');
});

const createNewArticle = async (nameArticle, bodyArticle) => {
    const article = new articleModel;
    article.name = nameArticle;
    article.body = bodyArticle;

    const doc = await article.save();
}

const findArticle = async (nameArticle) => {
    const doc = await articleModel.find( {name: nameArticle});
    console.log(doc);
}

changeArticle

createNewArticle('Собаки', 'Песики говорят гав-гав и тяв-тяв');
findArticle('Коты');


const posts = require('./data/posts');

module.exports = (req, res, next) => {
  if (req.method === 'GET' && req.url.indexOf('/user-post') !== -1) {
    const splittedUrl = req.originalUrl.split('/');
    const id = splittedUrl[splittedUrl.length - 1];
    return res.json(posts.filter(post => post.user === +id));
  }

  next();
};

const { app } = require('./app');


// const { Post } = require('./models/post.model');
// const { User } = require('./models/user.model');


const { db } = require('./utils/database');


db.authenticate()
  .then(() => console.log('Database authenticated'))
  .catch(err => console.log(err));


// User.hasMany(Post);
// Post.belongsTo(User);

db.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err));


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});

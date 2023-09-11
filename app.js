const express= require('express');
const app = express()
const port = 3000
const sequelize = require('./config/database.js')

app.use(express.json());


const personRoutes = require('./routes/person');
app.use('/api/person', personRoutes)

// Sync the database to create tables if they don't exist
sequelize.sync().then(() => {
    console.log('Database synchronized');
  }).catch((error) => {
    console.error('Error synchronizing database:', error);
  });

app.listen(port, () => {
    console.log(`server running on, http://localhost:${port}`)
})

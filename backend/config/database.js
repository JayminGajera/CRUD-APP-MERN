const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then(() => {console.log('Db connected successfully')})
    .catch((error) => {console.log('Error in db connection');
        console.log (error.message);
        process.exit(1);}); 
}

module.exports = dbConnect;
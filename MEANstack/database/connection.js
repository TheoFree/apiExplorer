const mongoose = require('mongoose');


module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, { useUnifiedTopology: true ,useNewUrlParser:true});
        console.log('database connected');
    }
    catch (e) {
        console.log("Database connectivity Error", e);
        throw new Error(e);
    }

}
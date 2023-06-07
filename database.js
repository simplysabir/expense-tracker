const mongoose = require('mongoose');
mongoose.set("strictQuery", true);

const connectToDB = async (url) => {
    
    return mongoose.connect(url);
}

module.exports = {
    connectToDB,
}
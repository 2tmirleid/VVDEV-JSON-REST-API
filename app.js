const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./postgreSQL/settings');
const fileUpload = require('express-fileupload');
const model = require('./postgreSQL/models/model');
const mainRouter = require('./routes/main.router');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

let dateNow = new Date().toISOString().
                    replace(/T/, ' ').
                    replace(/\..+/, '');

const urlencodedParser = bodyParser.urlencoded({
    extended: true
});

app.use(urlencodedParser);
app.use(bodyParser.json());
app.use('/api', mainRouter);
app.use(fileUpload({}));

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
    } catch(e) {
        console.log(`>_${e}`);
    }
    console.log(`[${dateNow}] [Successful connected to PostgreSQL]`);
}


function start() {
    connectDB();
    app.listen(PORT, () => {
        console.log(`[${dateNow}] [Application started]`);
        console.log(`[${dateNow}] [http://localhost:${PORT}]`)
    })
}

start();
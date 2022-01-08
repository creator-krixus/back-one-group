const express = require('express');
const app = express();
const conection = require('./config/configDB');
const documents = require('./config/documentsApi');
const apiRoutes = require('./router');
require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

app.set('port', process.env.PORT || 7000);
documents(app);
app.use(express.json());
app.use(morgan('dev'))
app.use(cors());
app.use(helmet());


conection(app);
apiRoutes(app)

app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`)
})
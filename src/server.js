const express = require('express');

const app = express();

app.use(express.json());

require('./controllers/userController')(app);

app.listen(3000, () => console.log('Server is running on port 3000.'));
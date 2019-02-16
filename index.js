const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
    res.send('hi');
});


const PORT = process.env.PORT || 5002;
app.listen(PORT);
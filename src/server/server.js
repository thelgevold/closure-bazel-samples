let express = require('express');
let compression = require('compression');

const app = express();

app.use(compression());

app.use('/', express.static(__dirname));

app.get('/', (_req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

const port = 7002;
app.listen(port, () => console.log(`api listening on port ${port}`));
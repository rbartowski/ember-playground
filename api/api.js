var express = require('express'),
  app = express(),
  advertisers = require('./mockdata/advertisers.json'),
  doges = require('./mockdata/dogeImages.json'),
  creatives = require('./mockdata/creatives.json');

var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  res.header("Access-Control-Allow-Methods", "GET");
  next();
};

function getAdvertiser(id) {
  var k;

  for (k = 0; k < advertisers.length; k++) {
    if(advertisers[k].id === id) {
      return advertisers[k];
    }
  }
}

function getCreative(id) {
  var k;

  for (k = 0; k < creatives.length; k++) {
    if(creatives[k].id === id) {
      return creatives[k];
    }
  }
}

function getCreativesByAdvertiser(advertiserId) {
  var k,
  resultCreatives = [];

  for (k = 0; k < creatives.length; k++) {
    if(creatives[k].advertiser === advertiserId) {
      resultCreatives.push(creatives[k]);
    }
  }

  return resultCreatives;
}

app.use(allowCrossDomain);

app.get('/advertisers', function(req, res) {
  res.send({'advertisers': advertisers});
});

app.get('/advertisers/:id', function(req, res) {
  res.send({'advertiser' : getAdvertiser(req.params.id)});
});

app.get('/creatives/advertiser/:advertiserId', function(req, res) {
  res.send({ 'creatives' : getCreativesByAdvertiser(req.params.advertiserId) });
});

app.get('/creatives/:id', function(req, res) {
  res.send(getCreative(req.params.id));
});

app.get('/doges', function(req, res) {
  res.send(doges);
});

app.listen(3000);
console.log('Listening on port 3000...');;
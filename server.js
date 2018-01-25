const express = require('express');
const path = require('path');
var favicon = require('serve-favicon');
// const PeerConnect = require('peer-connect')

// App setup
const PORT = process.env.PORT || 3000;
const app = express();
const server = app.listen(PORT, () =>
  console.log(`App listening on port ${PORT}...`)
);

// favicon
app.use(favicon(path.join(__dirname, '/build/assets/images', 'favicon.ico')));

// Serve static files
app.use('/build', express.static(path.join(__dirname, '/build/')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});



// Allow for cross origin resource sharing
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// PeerConnect configuration
// const peerConfig = {
//   // how many peers must be connected before loading assets from peers
//   // if threshold = 3, fourth client will load from peers
//   threshold: 1,
//   //load images p2p
//   peerImages: true,
//   //load videos p2p
//   peerVideos: false,
//   // asset file formats to exclude from peers
//   excludeFormats: ['gif'],
//   // load images above the fold from server if foldLoading: true
//   foldLoading: true,
//   // toggle geolocation for pairing peers
//   geolocate: true,
//   // route for video assets
//   videoRoute: './client/videos',
//   //where you want to create torrent files
//   torrentRoute: './client',
//   //domain name
//   domainName: 'https://webseed.btorrent.xyz',
// };

// PeerConnect(server, app, peerConfig);

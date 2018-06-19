import WebServer from './web.server';

const webServer = new WebServer();

try {
  webServer.start()
    .then(() => {
      console.log('server started');
    });
} catch(e) {
  console.error(e);
  console.log(' Error while starting server');
}

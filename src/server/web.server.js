import express from 'express';

class WebServer {
  constructor() {
    this.app = express();
    this.app.use(express.static('dist/public'));
  }

  // To start web server.
  start() {
    return new Promise((resolve, reject) => {
      try{
        this.server = this.app.listen(8000, () => {
          resolve();
        });
      } catch(e) {
        console.error(e);
        reject(e);
      }
    });
  }

  // To stop web server
  stop() {
    return new Promise((resolve, reject) => {
      try {
        this.server.close(() => {
          resolve();
        });
      } catch(e) {
          console.log(e);
          reject(e);
      }
    });
  }

}

export default WebServer;

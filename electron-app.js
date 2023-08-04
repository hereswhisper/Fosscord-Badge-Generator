const { app, BrowserWindow } = require('electron')
const runWeb = require('./web');
const createWindow = () => {
    const win = new BrowserWindow({
      width: 900,
      height: 700,
      title: "Fosscord Badge Generator UI"
    })
    
    win.loadURL('http://localhost:5000')
}
function boot() {
    runWeb();
    app.whenReady().then(() => {
        createWindow();
    });
}
boot()
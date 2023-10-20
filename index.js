const {app, BrowserWindow} = require('electron');

let mainWindow;
app.on("ready", ()=>{
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    mainWindow.loadFile(`${app.getAppPath()}\\build\\index.html`);
})
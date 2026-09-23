const { app , BrowserWindow} = require('electron');
const path = require('path');

function createWindow(){
const win = new BrowserWindow({
    width:214,
    height:228,
    resizable:false,
    maximizable:false,
    fullscreenable:false,
    frame:false,
    transparent:true,
    resizable:false,
    webPreferences:{
        contextIsolation:false,
        nodeIntegration: true,
    }
});
    win.loadFile('index.html');
}
app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});


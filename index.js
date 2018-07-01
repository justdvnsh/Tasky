const electron = require('electron');
const path = require('path');
const { app, BrowserWindow, Tray, ipcMain } = electron;
const TimerTray = require('./app/timer_tray');
const mainWindow = require('./app/main_window');

let mainWindow;
let tray;

app.on('ready', () => {
    app.dock.hide();
    mainWindow = new mainWindow({
        height: 600,
        width: 400,
        resizable: false,
        frame: false
    }, `file://${__dirname}/src/index.html`);

    const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png'
    const iconPath = path.join(__dirname , '.src/assets/${iconName}');

    tray = new TimerTray(iconPath);
});

ipcMain.on('update-timer', ( event, timeLeft ) => {
    tray.setTitle(timeLeft);
})
import { app } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
import { ipcMain, BrowserWindow } from 'electron';
const isProd: boolean = process.env.NODE_ENV === 'production';
const isWindows = process.platform === "win32";
import { initialize, enable as enableRemote } from "@electron/remote/main";
initialize();

let mainWindow
if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  mainWindow = createWindow('main', {
    width: 1000,
    height: 800,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: "#262626",
      symbolColor: '#74b1be',
      height: 28
    }
  });

  // Load the ChartJS chart after the app has loaded
  mainWindow.webContents.on('did-finish-load', () => {
    const chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };

    mainWindow.webContents.send('chart-data', chartData);
  });
  

  mainWindow.setMenuBarVisibility(false);
  mainWindow.setAutoHideMenuBar(true);

  mainWindow.setMinimumSize(1200, 800)
  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});


ipcMain.on('get-document', (event) => {
  const win = BrowserWindow.getFocusedWindow()
  event.reply('document', win.webContents.executeJavaScript('document'))
});
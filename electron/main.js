const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
function create() {
  Menu.setApplicationMenu(null);
  const w = new BrowserWindow({ width: 1000, height: 820, backgroundColor: '#14110f', title: 'Atlas GM' });
  w.loadFile(path.join(__dirname, '..', 'www', 'index.html'));
}
app.whenReady().then(create);
app.on('window-all-closed', () => app.quit());

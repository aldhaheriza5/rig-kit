const { app, BrowserWindow, shell } = require("electron");
const path = require("path");

function isWeb(url) {
  return /^https?:\/\//i.test(url);
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1240,
    height: 820,
    minWidth: 420,
    minHeight: 500,
    backgroundColor: "#141418",
    autoHideMenuBar: true,
    title: "Rig Kit",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  // Links (guides, files) open in the user's normal browser, never inside the app.
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (isWeb(url)) shell.openExternal(url);
    return { action: "deny" };
  });
  win.webContents.on("will-navigate", (event, url) => {
    if (url !== win.webContents.getURL()) {
      event.preventDefault();
      if (isWeb(url)) shell.openExternal(url);
    }
  });

  win.loadFile(path.join(__dirname, "index.html"));
}

app.whenReady().then(createWindow);
app.on("window-all-closed", () => app.quit());

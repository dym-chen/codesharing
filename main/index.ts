import { app, BrowserWindow } from "electron";
import * as path from "path";

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // optional
    },
  });

  // load local index.html (compiled React UI)
  mainWindow.loadFile(path.join(__dirname, "../index.html"));
}

app.on("ready", createWindow);
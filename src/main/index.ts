import { electronApp, is, optimizer } from '@electron-toolkit/utils'
import { app, BrowserWindow, ipcMain, shell } from 'electron'
import net from 'net'
import path, { join } from 'path'

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
  const win = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.ts'), // Ensure this path is correct!
      contextIsolation: true,
      nodeIntegration: false
    }
  })

  win.loadURL('file://' + __dirname + '/index.html')
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// ipcMain.handle('print-receipt', async (_, printerIP: string) => {
//   try {
//     let printer = new ThermalPrinter({
//       type: PrinterTypes.EPSON,
//       interface: `tcp://${printerIP}`, // 🛜 Use the IP from React!
//       characterSet: CharacterSet.SLOVENIA,
//       removeSpecialCharacters: false,
//       lineCharacter: '-',
//       options: {
//         timeout: 5000
//       }
//     })

//     printer.alignCenter()
//     printer.println('🧾 YOUR STORE')
//     printer.drawLine()
//     printer.alignLeft()
//     printer.println('Item A             10.00')
//     printer.println('Item B              5.00')
//     printer.drawLine()
//     printer.println('TOTAL             15.00')
//     printer.newLine()
//     printer.println('Thank You!')
//     printer.cut()

//     const isConnected = await printer.isPrinterConnected()
//     if (!isConnected) {
//       throw new Error('Printer not connected!')
//     }

//     await printer.execute()
//     return { success: true }
//   } catch (err: any) {
//     console.error('Print Error:', err)
//     return { success: false, error: err.message }
//   }
// })

// ipcMain.handle('print:send-raw-data', async (_, printerIP: string, rawData: Uint8Array) => {
//   console.log('🚀 ~ ipcMain.handle ~ rawData:', rawData)
//   try {
//     const client = new net.Socket()

//     return new Promise((resolve, reject) => {
//       client.connect(9100, printerIP, () => {
//         client.write(rawData)
//         client.end()
//         resolve({ success: true })
//       })

//       client.on('error', (err) => {
//         console.error('TCP Send Error:', err)
//         reject({ success: false, error: err.message })
//       })
//     })
//   } catch (err: any) {
//     console.error('Send Error:', err)
//     return { success: false, error: err?.message }
//   }
// })

ipcMain.handle('print:send-raw-data', async (_event, printerIP, rawData) => {
  return new Promise((resolve) => {
    const client = new net.Socket()

    client.connect(9100, printerIP, () => {
      client.write(Buffer.from(rawData))
      client.end()
      resolve({ success: true })
    })

    client.on('error', (err) => {
      // ✅ Return plain object with string
      resolve({ success: false, error: err.message || 'Unknown error' })
    })
  })
})

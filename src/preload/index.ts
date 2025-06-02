import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  sendRawDataToPrinter: (printerIP: string, rawData: Uint8Array) =>
    ipcRenderer.invoke('print:send-raw-data', printerIP, rawData)
})

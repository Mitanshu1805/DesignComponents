export {}

declare global {
  interface Window {
    electronAPI: {
      sendRawDataToPrinter: (
        printerIP: string,
        rawData: Uint8Array
      ) => Promise<{
        success: boolean
        error?: string
      }>
    }
  }
}

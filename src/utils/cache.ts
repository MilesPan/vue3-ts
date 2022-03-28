class LocalCache {
  setCache(key: string, value: any, isLocalStorage = true) {
    const storage = isLocalStorage ? window.localStorage : window.sessionStorage
    storage.setItem(key, JSON.stringify(value))
  }
  getCache(key: string, isLocalStorage = true) {
    const storage = isLocalStorage ? window.localStorage : window.sessionStorage
    const value = storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  deleteCache(key: string, isLocalStorage = true) {
    const storage = isLocalStorage ? window.localStorage : window.sessionStorage
    storage.removeItem(key)
  }
  clearCache(isLocalStorage = true) {
    const storage = isLocalStorage ? window.localStorage : window.sessionStorage
    storage.clear()
  }
}
export default new LocalCache()

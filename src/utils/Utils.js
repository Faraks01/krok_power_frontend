class Utils {
  static normalizeApiAssetsUrl(url) {
    return `${window.location.origin}/api/${url}`
  }
}

export default Utils

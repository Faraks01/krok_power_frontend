class Utils {
  static normalizeApiAssetsUrl(url) {
    return url.replace(/api/m, window.location.host);
  }
}

export default Utils

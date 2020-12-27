class Utils {
  static normalizeApiAssetsUrl(url) {
    return `${window.location.origin}/api/${url}`
  }

  static urlParser(str) {
    const regex = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;

    const r = str.match(regex);

    if (r !== null) {
      return r[0];
    }

    return null;
  }
}

export default Utils

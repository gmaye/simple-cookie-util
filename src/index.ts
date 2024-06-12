export class CookieUtil {
  static get(key: any, isJson?: boolean): any {
    let encKey;
    if (typeof document === 'undefined') {
      return null;
    }
    if (key instanceof RegExp) {
      encKey = key.source;
    } else {
      encKey = encodeURIComponent(String(key));
    }
    const matches = document.cookie.match('(^|; )' + encKey + '=([^;]*)');
    if (matches) {
      let cookie = matches[2];
      try {
        cookie = decodeURIComponent(cookie);
      } catch (e) {
        console.warn('CookiesUtil: Error decoding cookie value: ' + cookie, e);
      }
      if (isJson) {
        try {
          cookie = JSON.parse(cookie);
        } catch (e) {
          console.warn('CookiesUtil: Error parsing json string', e);
        }
      }
      return cookie;
    }
    return null;
  }

  static set(key: string, value: any, attr?: any): any {
    let encValue = value;
    if (typeof document === 'undefined') {
      return null;
    }
    const attributes = { path: '/', ...attr };
    if (typeof attributes.expires === 'number') {
      attributes.expires = new Date(
        new Date().getTime() + attributes.expires * 864e5,
      );
    }
    attributes.expires = attributes.expires
      ? attributes.expires.toUTCString()
      : '';
    const encKey = encodeURIComponent(String(key));
    if (typeof encValue === 'object') {
      encValue = JSON.stringify(encValue);
    }
    encValue = encodeURIComponent(String(encValue));
    let stringifiedAttributes = '';
    Object.keys(attributes).forEach((attributeName) => {
      stringifiedAttributes += '; ' + attributeName;
      if (attributes[attributeName] !== true) {
        stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
      }
    });
    document.cookie = encKey + '=' + encValue + stringifiedAttributes;
    return document.cookie;
  }

  static remove(key: string) {
    CookieUtil.set(key, '', { expires: -1 });
  }
}

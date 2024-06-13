class p {
  static get(n, r) {
    let o;
    if (typeof document > "u")
      return null;
    n instanceof RegExp ? o = n.source : o = encodeURIComponent(String(n));
    const t = document.cookie.match("(^|; )" + o + "=([^;]*)");
    if (t) {
      let e = t[2];
      try {
        e = decodeURIComponent(e);
      } catch (i) {
        console.warn("CookiesUtil: Error decoding cookie value: " + e, i);
      }
      if (r)
        try {
          e = JSON.parse(e);
        } catch (i) {
          console.warn("CookiesUtil: Error parsing json string", i);
        }
      return e;
    }
    return null;
  }
  static set(n, r, o) {
    let t = r;
    if (typeof document > "u")
      return null;
    const e = { path: "/", ...o };
    typeof e.expires == "number" && (e.expires = new Date(
      (/* @__PURE__ */ new Date()).getTime() + e.expires * 864e5
    )), e.expires = e.expires ? e.expires.toUTCString() : "";
    const i = encodeURIComponent(String(n));
    typeof t == "object" && (t = JSON.stringify(t)), t = encodeURIComponent(String(t));
    let c = "";
    return Object.keys(e).forEach((s) => {
      c += "; " + s, e[s] !== !0 && (c += "=" + e[s].split(";")[0]);
    }), document.cookie = i + "=" + t + c, document.cookie;
  }
  static remove(n) {
    p.set(n, "", { expires: -1 });
  }
}
export {
  p as CookieUtil
};

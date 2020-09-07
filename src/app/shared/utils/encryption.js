import CryptoJS from 'crypto-js';

/*global KEY */
/*eslint no-undef: "error"*/

export function encrypt(message) {
  var cipher = CryptoJS.AES.encrypt(message, KEY).toString();
  return encodeURIComponent(cipher);
}

export function decrypt(cipher) {
  try {
    let dec_cipher = decodeURIComponent(cipher);
    var bytes = CryptoJS.AES.decrypt(dec_cipher, KEY);
    let res = bytes.toString(CryptoJS.enc.Utf8);
    return res;
  } catch (error) {
    window.location.href = '/error';
  }
}
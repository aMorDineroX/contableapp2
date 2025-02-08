const crypto = require('crypto');

function generateSecret(length = 32) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from(crypto.getRandomValues(new Uint8Array(length)))
    .map((x) => chars[x % chars.length])
    .join('');
}

console.log('Generated Secret:', generateSecret());
console.log(crypto.randomBytes(32).toString('hex'));

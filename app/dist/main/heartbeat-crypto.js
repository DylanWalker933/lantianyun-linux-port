"use strict";

const DELTA = 2654435769;

function int32(value) {
  return value | 0;
}

function toUint32Array(text, includeLength) {
  const length = text.length;
  let wordLength = length >> 2;
  if (length & 3) wordLength += 1;
  const words = includeLength ? new Array(wordLength + 1) : new Array(wordLength);
  if (includeLength) words[wordLength] = length;
  for (let index = 0; index < length; index += 1) {
    words[index >> 2] = (words[index >> 2] | 0) | (text.charCodeAt(index) << ((index & 3) << 3));
  }
  return words;
}

function fixKey(words) {
  while (words.length < 4) words.push(0);
  return words;
}

function mx(sum, next, previous, index, keyIndex, keyWords) {
  return ((previous >>> 5) ^ (next << 2)) +
    ((next >>> 3) ^ (previous << 4)) ^
    ((sum ^ next) + (keyWords[(index & 3) ^ keyIndex] ^ previous));
}

function encryptWords(words, keyWords) {
  const length = words.length;
  const last = length - 1;
  let previous = words[last];
  let sum = 0;
  let rounds = Math.floor(6 + 52 / length) | 0;
  while (rounds > 0) {
    sum = int32(sum + DELTA);
    const keyIndex = (sum >>> 2) & 3;
    let index = 0;
    for (; index < last; index += 1) {
      const next = words[index + 1];
      previous = words[index] = int32(words[index] + mx(sum, next, previous, index, keyIndex, keyWords));
    }
    const next = words[0];
    previous = words[last] = int32(words[last] + mx(sum, next, previous, last, keyIndex, keyWords));
    rounds -= 1;
  }
  return words;
}

function decryptWords(words, keyWords) {
  const length = words.length;
  const last = length - 1;
  let next = words[0];
  let rounds = Math.floor(6 + 52 / length);
  let sum = int32(rounds * DELTA);
  while (sum !== 0) {
    const keyIndex = (sum >>> 2) & 3;
    let index = last;
    for (; index > 0; index -= 1) {
      const previous = words[index - 1];
      next = words[index] = int32(words[index] - mx(sum, next, previous, index, keyIndex, keyWords));
    }
    const previous = words[last];
    next = words[0] = int32(words[0] - mx(sum, next, previous, 0, keyIndex, keyWords));
    sum = int32(sum - DELTA);
  }
  return words;
}

function wordsToBuffer(words, includeLength) {
  let byteLength = words.length << 2;
  if (includeLength) {
    const marker = words[words.length - 1] >>> 0;
    byteLength -= 4;
    if (marker < byteLength - 3 || marker > byteLength) {
      throw new Error("Invalid TEA padding");
    }
    byteLength = marker;
  }
  const output = Buffer.allocUnsafe(byteLength);
  let offset = 0;
  for (const word of words) {
    if (offset < byteLength) output[offset++] = word & 255;
    if (offset < byteLength) output[offset++] = (word >>> 8) & 255;
    if (offset < byteLength) output[offset++] = (word >>> 16) & 255;
    if (offset < byteLength) output[offset++] = (word >>> 24) & 255;
  }
  return output;
}

function decryptFromBase64(base64, key) {
  const binary = Buffer.from(String(base64 || ""), "base64").toString("latin1");
  const keyBinary = Buffer.from(String(key || ""), "utf8").toString("latin1");
  const words = decryptWords(toUint32Array(binary, false), fixKey(toUint32Array(keyBinary, false)));
  return wordsToBuffer(words, true).toString("utf8");
}

function encryptToBase64(text, key) {
  const binary = Buffer.from(String(text || ""), "utf8").toString("latin1");
  const keyBinary = Buffer.from(String(key || ""), "utf8").toString("latin1");
  const words = encryptWords(toUint32Array(binary, true), fixKey(toUint32Array(keyBinary, false)));
  return wordsToBuffer(words, false).toString("base64");
}

module.exports = {
  decryptFromBase64,
  encryptToBase64
};

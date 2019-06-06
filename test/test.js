import PasswordQuality from '../lib/PasswordQuality.js';
import assert from "assert";

PasswordQuality.PopularPasswords.load(require('fs').readFileSync('./lib/MostPopularPasswords.txt', 'utf-8').split('\n'))

assert(PasswordQuality('password') === 11);
assert(PasswordQuality('123321') === 9);
assert(PasswordQuality('eLu9QV66Lws9UUCr') === 83);
assert(PasswordQuality('p@VgV.W@9HF*N.zF') === 89);
assert(PasswordQuality('114514') === 14);
assert(PasswordQuality('20190602') === 22);
assert(PasswordQuality('pM2BHg2pA.-oY23KrZnjtAQ.pnEu8DXBf.P4Hf.hh_b7jwDN4e') === 285);
assert(PasswordQuality('滑稽') === 32);
assert(PasswordQuality('t3XKczXFIOrqHRr_') === 92);

console.log('Ran all test suites.')
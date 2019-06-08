import PasswordQualityCalculator from '../lib/PasswordQualityCalculator.js';
import assert from "assert";

PasswordQualityCalculator.PopularPasswords.load(require('fs').readFileSync('./lib/MostPopularPasswords.txt', 'utf-8').split('\n'))

assert(PasswordQualityCalculator('password') === 11);
assert(PasswordQualityCalculator('123321') === 9);
assert(PasswordQualityCalculator('eLu9QV66Lws9UUCr') === 83);
assert(PasswordQualityCalculator('p@VgV.W@9HF*N.zF') === 89);
assert(PasswordQualityCalculator('114514') === 14);
assert(PasswordQualityCalculator('20190602') === 22);
assert(PasswordQualityCalculator('pM2BHg2pA.-oY23KrZnjtAQ.pnEu8DXBf.P4Hf.hh_b7jwDN4e') === 285);
assert(PasswordQualityCalculator('滑稽') === 32);
assert(PasswordQualityCalculator('t3XKczXFIOrqHRr_') === 92);

console.log('Ran all test suites.')
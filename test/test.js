import PasswordBenchmark from '../lib/PasswordBenchmark.js';
import assert from "assert";

PasswordBenchmark.PopularPasswords.load(require('fs').readFileSync('./lib/MostPopularPasswords.txt', 'utf-8').split('\n'))

assert(PasswordBenchmark('password') === 11);
assert(PasswordBenchmark('123321') === 9);
assert(PasswordBenchmark('eLu9QV66Lws9UUCr') === 83);
assert(PasswordBenchmark('p@VgV.W@9HF*N.zF') === 89);
assert(PasswordBenchmark('114514') === 14);
assert(PasswordBenchmark('20190602') === 22);
assert(PasswordBenchmark('pM2BHg2pA.-oY23KrZnjtAQ.pnEu8DXBf.P4Hf.hh_b7jwDN4e') === 285);
assert(PasswordBenchmark('滑稽') === 32);
assert(PasswordBenchmark('t3XKczXFIOrqHRr_') === 92);

console.log('Ran all test suites.')
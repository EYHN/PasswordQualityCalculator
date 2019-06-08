import MostPopularPasswords from 'raw-loader!./MostPopularPasswords.txt'

const root = typeof self !== 'undefined' ? self : this;

if (root && root.PasswordBenchmark) {
  root.PasswordBenchmark.PopularPasswords.load(
    MostPopularPasswords.split('\n')
  );
}

export default MostPopularPasswords;
import MostPopularPasswords from 'raw-loader!./MostPopularPasswords.txt'

if (window && window.PasswordBenchmark) {
  window.PasswordBenchmark.PopularPasswords.load(
    MostPopularPasswords.split('\n')
  );
}

export default MostPopularPasswords;
import MostPopularPasswords from 'raw-loader!./MostPopularPasswords.txt'

const root = typeof self !== 'undefined' ? self : this;

if (root && root.PasswordQualityCalculator) {
  root.PasswordQualityCalculator.PopularPasswords.load(
    MostPopularPasswords.split('\n')
  );
}

export default MostPopularPasswords;
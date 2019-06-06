import MostPopularPasswords from 'raw-loader!./MostPopularPasswords.txt'

if (window && window.PasswordQuality) {
  window.PasswordQuality.PopularPasswords.load(
    MostPopularPasswords.split('\n')
  );
}

export default MostPopularPasswords;
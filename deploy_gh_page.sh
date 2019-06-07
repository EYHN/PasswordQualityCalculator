
mkdir ./deploy-gh-page
cp -rf ${DeployPath} ./deploy-gh-page
cd ./deploy-gh-page

git init
git config --global push.default matching
git config --global user.email "${GitHubEmail}"
git config --global user.name "${GitHubUser}"

git add --all .

git commit -m "Auto deploy github page - `date`"
git push --quiet --force https://${GitHubKEY}@github.com/${GitHubRepo}.git master:${DeployBranch}
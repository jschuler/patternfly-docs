```sh
# Puppeteer is used to create screenshots, it requires chromium to be installed
## install chromium using brew
brew install chromium
## check the chromium path, should point to /opt/homebrew/bin/chromium
which chromium
## export out the path
export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
export PUPPETEER_EXECUTABLE_PATH=`which chromium`

# yarn
yarn install

# npm
npm i --legacy-peer-deps
npm run develop
```
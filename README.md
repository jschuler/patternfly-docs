```sh
# Create extension documentation for patternfly.org

You can clone this repo as a self-contained starter to create documentation for patternfly.org.

The more direct approach would be to follow the directions at https://www.npmjs.com/package/@breakaway/documentation-framework to install the docs-framework as a devDependency in your project.

## Clone into your extension repo
git clone --depth=1 https://github.com/jschuler/patternfly-docs.git <FOLDER_NAME>
## Move to the appropriate directory
cd <FOLDER_NAME>

## OR using gh CLI
gh repo create --public --template https://github.com/jschuler/patternfly-docs.git <FOLDER_NAME>

## Remove git history (optional)
git rm --cached <FOLDER_NAME>

# First time setup: Puppeteer is used to create screenshots, it requires chromium to be installed on your machine

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
npm install
```
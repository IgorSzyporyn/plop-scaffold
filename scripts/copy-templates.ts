const ncp = require('ncp')
const path = require('path')
const fs = require('fs')

// Check if target folder exists - if not create it
if (!fs.existsSync(path.normalize('./dist'))) {
  fs.mkdirSync(path.normalize('./dist'))
}

if (!fs.existsSync(path.normalize('./dist/templates'))) {
  fs.mkdirSync(path.normalize('./dist/templates'))
}

// Copy command:init templates
ncp(
  path.normalize('./src/commands/init/templates'),
  path.normalize('./dist/templates/init')
)

// Copy command:project-cli templates
ncp(
  path.normalize('./src/commands/project-cli/templates'),
  path.normalize('./dist/templates/project-cli')
)

// Copy command:react templates
ncp(
  path.normalize('./src/commands/react/templates'),
  path.normalize('./dist/templates/react')
)

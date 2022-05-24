// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;

  switch(license) {
    case 'Apache 2.0 License':
      badge = `
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
`;
      break;
    case 'Eclipse Public License 1.0':
      badge = `
[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)
`;
      break;
    case 'GNU GPL v3':
      badge = `
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
`;
      break;
    case 'IBM Public License Version 1.0':
      badge = `
[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
`;
      break;
    case 'The MIT License':
      badge = `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
`;
      break;
    case 'Mozilla Public License 2.0':
      badge = `
[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
`;
      break; 
    default:
      badge = ''; 
      break;
  }

  return badge;
}

// If there is no license, return an empty string
function renderLicenseLink(license) { debugger
  let link;

  switch(license) {
    case 'Apache 2.0 License':
      link = `[${license}](https://opensource.org/licenses/Apache-2.0)
      `;
      break;
    case 'Eclipse Public License 1.0':
      link = `[${license}](https://opensource.org/licenses/EPL-1.0)
      `;
      break;
    case 'GNU GPL v3':
      link = `[${license}](https://www.gnu.org/licenses/gpl-3.0)
      `;
      break;
    case 'IBM Public License Version 1.0':
      link = `[${license}](https://opensource.org/licenses/IPL-1.0)
      `;
      break;
    case 'The MIT License':
      link = `[${license}](https://opensource.org/licenses/MIT)
      `;
      break;
    case 'Mozilla Public License 2.0':
      link = `[${license}](https://opensource.org/licenses/MPL-2.0)
      `;
      break; 
    default:
      link = ''; 
      break;
  }

  return link;
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license || license === 'None') {
    return '';
  }

  return `

## License
`;
}

//Gets the data from the prompts and uses it to populate the templates
//The license data is parsed and the template is formated accordingly
async function generateMarkdown(data) {
  return `\
# ${data.name}
${renderLicenseBadge(data.license)}
## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.instructions}

## Usage

${data.usage}${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
## Contributing

${data.contribution}

## Testing

${data.testing}

## Questions

For more information, feel free to contact me:

https://github.com/${data.username}
${data.email}`;
}

module.exports = generateMarkdown;
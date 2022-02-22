function licenseGenerator(license) {
    switch(license) {
        case "MIT":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        case "Apache-2.0":
            return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        case "GPL-3.0":
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        case "BSD-2-Clause":
            return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
        case "BSD-3-Clause":
            return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
        case "Mozilla Public License 2.0":
            return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
}

const generator = (data) => {

return `# ${data.projectName}
## Table of Contents
1. [Description](#Description)
2. [Installation](#Installation) 
3. [Usage](#Usage)
4. [License](#License)
5. [Contributing](#Contributing)
6. [Tests](#Tests)
7. [Questions](#Questions)

## Description
${data.description}
## Installation
${data.instructions}
## Usage
${data.usageInformation}
## License
${licenseGenerator(data.licenseList)}
## Contributing
${data.contributors}
## Tests
${data.testInstructions}
## Questions
https://github.com/${data.username}

Please email me at ${data.email} for any additional questions.
`
}

module.exports = generator;
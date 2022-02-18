const generator = (data) => {
    return `
    ## ${data.projectName}
    ## ${data.description}
    ## ${data.instructions}
    `
}

module.exports = generator;
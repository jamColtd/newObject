function component() {
    const element = document.createElement('div')

    element.innerHTML = _.join(['hello','webpack'],'')

    return element
}
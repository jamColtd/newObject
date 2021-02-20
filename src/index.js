import _ from 'loadsh'

function component() {
    const element = document.createElement('div')

    // loadsh,现在通过一个script 引入
    element.innerHTML = _.join(['hello','webpack'],'')

    return element
}
document.body.appendChild(component())
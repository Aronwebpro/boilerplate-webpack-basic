import _ from 'lodash';

import './css/style.css';


function component() {
const element = document.createElement('div');

// Lodash, now imported by this script
element.innerHTML = _.join(['Starter File', 'webpack'], ' ');
// element.innerHTML = 'Labas';
element.classList.add('hello');

return element;
}

document.getElementById('root').appendChild(component());
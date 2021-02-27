import itemTemplaters from '../templates/gallery-items.hbs';

import gallery from '../menu.json';

const markup = itemTemplaters(gallery);
const galerryRef = document.querySelector('.js-menu')

galerryRef.insertAdjacentHTML('beforeend', markup);
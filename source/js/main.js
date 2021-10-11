
import {initPhoneMask} from './modules/phone-mask.js';
import {toggleModal} from './modules/modal.js';
import {toggleFooterMenu, closeFooterMenu} from './modules/menu.js';
import {saveLocalStorage} from './modules/validate.js';

initPhoneMask();
toggleModal();
closeFooterMenu();
toggleFooterMenu();
saveLocalStorage();

import {initInnerLinks} from './vendor.js';
initInnerLinks();

export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    showMessage(type) {
        Message[type]({
            content: type,
            duration: 3000,
            type: type,
            closable: false,
            hideIcon: true,
        });
    }
}
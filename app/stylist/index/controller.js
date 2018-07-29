import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

    links: computed(function () {
        return [ 'about', 'portfolio', 'pricing' ];
    })
    
});

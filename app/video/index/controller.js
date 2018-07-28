import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

    videoLinks: computed(function () {
        return [ 'about', 'portfolio', 'pricing' ].map(key => ({
            title: key.camelize(),
            url: `#${key}`
        }));
    })
});

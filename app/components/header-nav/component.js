import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    tagName: 'header',
    classNames: [ 'header-nav' ],

    formattedLinks: computed('links', function () {
        return this.links.map(option => ({
            href: `#${option}`,
            name: option.replace('-', ' ').capitalize()
        }))
    })
});

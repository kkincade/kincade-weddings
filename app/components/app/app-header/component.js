import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    tagName: 'header',
    elementId: 'app-header',

    icons: computed('media.isMobile', function () {
        let icons =  [ 'about', 'contact', 'stylist', 'video' ];

        return this.media.isMobile ? icons.filter(icon => icon !== 'stylist' && icon !== 'video') : icons;
    })
});
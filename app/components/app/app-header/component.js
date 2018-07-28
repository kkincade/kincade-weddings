import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
    media: service(),

    tagName: 'header',
    elementId: 'app-header',

    icons: computed('media.isMobile', function () {
        let icons =  [ 'about', 'contact', 'stylist', 'video' ];

        return this.media.isMobile ? icons.filter(icon => icon !== 'stylist' && icon !== 'video') : icons;
    })
});
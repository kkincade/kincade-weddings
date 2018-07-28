import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    tagName: 'header',
    elementId: 'app-header',

    icons: computed('media.{isMobile,isTablet}', function () {
        let icons =  [ 'about', 'contact', 'stylist', 'video' ];

        return this.get('media.isMobile') ? icons.filter(icon => icon !== 'stylist' && icon !== 'video') : icons;
    })
});
import Component from '@ember/component';
import { observer } from '@ember/object';

export default Component.extend({

    // region Property Overrides

    tagName: 'section',

    classNames: [ 'section-header' ],

    // endregion

    // region Hooks

    init() {
        this._super(...arguments);

        this.observeTitle();
    },

    // endregion

    // region Observers

    observeTitle: observer('title', function () {
        this.set('elementId', this.title.toLowerCase().replace(' ', '-'));
    })

    // endregion

});

import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { A } from '@ember/array';

/**
 * Returns an object with key/value pairs for each contact-request field.
 *
 * @private
 * @memberof
 *
 * @returns {models.ContactRequest}
 */
function getContactRequestInfo() {
    const fields = [ 'name', 'emailAddress', 'weddingDate', 'servicesInterestedIn', 'venue', 'content' ];

    return fields.reduce((cache, fieldName) => {
        cache[fieldName] = this.get(fieldName);
        return cache;
    }, {});
}

export default Controller.extend({

    name: '',
    emailAddress: '',
    weddingDate: '',
    servicesInterestedIn: computed(function () {
        return A();
    }),
    venue: '',
    content: '',

    interestedInOptions: computed(function () {
        return [ 'Videography', 'Styling', 'Both' ];
    }),

    actions: {
        /**
         * POSTS the contact-request to the server.
         */
        sendContactRequest() {
            console.log('send request');

            return this.store.createRecord('contactRequest', getContactRequestInfo.call(this)).save();
        }
    }
});

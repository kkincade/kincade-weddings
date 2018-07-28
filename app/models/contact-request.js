import DS from 'ember-data';

/**
 * @classdesc Represents the data sent in a contact request form.
 *
 * @class ContactRequest
 * @memberof models
 */
export default DS.Model.extend({

    /**
     * The main information of the request.
     *
     * @type {String}
     */
    content: DS.attr('string', { defaultValue: '' }),

    /**
     * The email address of the person initiating the contact request.
     *
     * @type {String}
     */
    emailAddress: DS.attr('string', { defaultValue: '' }),

    /**
     * The name of the person initiating the contact request.
     *
     * @type {String}
     */
    name: DS.attr('string', { defaultValue: '' }),

    /**
     * The services they are requesting more information about.
     *
     * @type {Array<String>}
     */
    servicesInterestedIn: DS.attr(),

    /**
     * The date of the wedding.
     *
     * @type {String}
     */
    weddingDate: DS.attr('date', { defautlValue: new Date() }),

    /**
     * The location of the wedding.
     *
     * @type {String}
     */
    venue: DS.attr('string', { defaultValue: '' }),

});
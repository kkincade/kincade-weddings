import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
    this.route('about');
    this.route('contact');
    this.route('beauty');
    this.route('video', function() {
        this.route('portfolio');
    });
    this.route('stylist', function() {
        this.route('portfolio');
    });
});

export default Router;

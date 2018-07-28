import Route from '@ember/routing/route';

export default Route.extend({

    afterModel() {
        document.body.classList.add('index');
    },

    actions: {
        willTransition() {
            document.body.classList.remove('index');
        }
    }
});
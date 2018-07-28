import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        onProfileClick(routeName) {
            this.transitionToRoute(routeName);
        }
    }
});
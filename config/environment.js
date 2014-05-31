module.exports = function(environment) {
  var ENV = {
    baseURL: '/',
    locationType: 'hash',
    FEATURES: {
      // Here you can enable experimental features on an ember canary build
      // e.g. 'with-controller': true
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.FIREBASE_NAMESPACE = "smiler-dev-micah";

    // LOG_MODULE_RESOLVER is needed for pre-1.6.0
    ENV.LOG_MODULE_RESOLVER = true;

    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_MODULE_RESOLVER = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'production') {
    ENV.FIREBASE_NAMESPACE = "smiler";

  }

  ENV.FIREBASE_URL = "https://" + ENV.FIREBASE_NAMESPACE + ".firebaseio.com";

  return ENV;
};

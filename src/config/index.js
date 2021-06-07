const LOCAL = {
  API_URL: 'http://localhost:8081'
};
const DEV = {
  API_URL: 'http://localhost:8081'
};
const PRODUCTION = {
  API_URL: 'http://localhost:8082'
};

export const EnvironmentTypes = {
  LOCAL,
  DEV,
  PRODUCTION,
};

export const ENV = (() => {
  switch (process.env.REACT_APP_BUILD_ENV) {
    case 'prod':
      console.log('prodzz');
      return PRODUCTION;
    case 'dev':
      console.log('devzz');
      return DEV;
    default:
      console.log('defaultzz');
      return LOCAL;
  }
})();

/* [출처] https://gist.github.com/koo6357/e95193f14dfe2d93a54b6421e5137ac7 */

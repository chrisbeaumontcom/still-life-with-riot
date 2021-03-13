import ReactGA from 'react-ga';

export const initGA = () => {
  console.log('GA init');
  ReactGA.initialize('UA-xxxxxxxxx-1');
};
export const logPageView = (path) => {
  console.log(`ReactGA Logging pageview for ${path}`);
  ReactGA.set({ page: path });
  ReactGA.pageview(path);
};
export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};
export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};

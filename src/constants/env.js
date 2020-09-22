/** Build environment */
export const BUILD_ENV = process.env.NODE_ENV;
export const IS_DEVELOPMENT = BUILD_ENV === 'development';
export const IS_PRODUCTION = BUILD_ENV === 'production';

/** Permission */
export const API_KEY = process.env.REACT_APP_API_KEY;

/** App */
export const PORT = process.env.REACT_APP_PORT;
export const API_URL = process.env.REACT_APP_API_URL || undefined;
export const API_VERSION = process.env.REACT_APP_API_VERSION || undefined;

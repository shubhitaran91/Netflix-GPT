export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_medium.jpg";
export const SIGN_IN_BACKGROUND_IMAGE =
  "https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png";

export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const SUPPORTED_LANGUAGES = [
  { name: "English", identifier: "en" },
  { name: "Hindi", identifier: "hindi" },
  { name: "Spanish", identifier: "spanish" },
];

export const API_KEY = process.env.REACT_APP_OPENAI_KEY;
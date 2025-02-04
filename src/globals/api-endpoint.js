const CONFIG = {
  BASE_URL: 'http://localhost:3000',
};

const API_ENDPOINT = {
  MPASI: `${CONFIG.BASE_URL}/api/mpasi`,
  DETAILMPASI: (id) => `${CONFIG.BASE_URL}/api/mpasi/${id}`,
  SEARCHMPASI: (query) => `${CONFIG.BASE_URL}/api/mpasi?q=${query}`,
  KATEGORIMPASI: (query) => `${CONFIG.BASE_URL}/api/mpasi?kategori=${query}`,
  ARTIKEL: `${CONFIG.BASE_URL}/api/artikel`,
  DETAILARTIKEL: (id) => `${CONFIG.BASE_URL}/api/artikel/${id}`,
  SEARCHARTIKEL: (query) => `${CONFIG.BASE_URL}/api/artikel?q=${query}`,
  KATEGORIARTIKEL: (query) => `${CONFIG.BASE_URL}/api/artikel?kategori=${query}`,
};

module.exports = API_ENDPOINT;

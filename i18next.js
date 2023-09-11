const i18next = require('i18next');

const path = require('path');

// recibiremos los parametros que vienen al usarlo para diferenciar el json


i18next


   .init({
      lng: 'es',
      fallbackLng: 'es',
      resources: {
        en: {
          // detectamos el nombre del archivo ya que son distintos


          translation: require(path.join(__dirname, 'locales/en/people.json')) || require(path.join(__dirname, 'locales/en/starship.json'))
        },
        es: {
          translation: require(path.join(__dirname, 'locales/es/people.json')) || require(path.join(__dirname, 'locales/es/starship.json'))
        },
      },
    });
      // debug: true,

module.exports = i18next;

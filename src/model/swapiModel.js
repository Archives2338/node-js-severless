const i18n = require('i18next');
// const i18next = require('i18next');
const path = require('path');

class SwapiModel {
  constructor(responseSwapi) {

    this.responseSwapi = responseSwapi;
    i18n


   .init({
      lng: 'es',
      fallbackLng: 'es',
      ns: ['translation'],
      resources: {
        en: {
          // detectamos el nombre del archivo ya que son distintos


          translation: require("../../locales/en/people.json")},
        es: {
          translation: require("../../locales/es/people.json")
        },
      },
    });

    }

    transLateJson() {
      const responseTranslate = {}

      for(let key in this.responseSwapi) {
         // le agregamos o modificamos el resources



         // le asignaremos la primera traduccion del arreglo translation

          let keyTranslate = i18n.t(key,{key:this.responseSwapi[key]})

          responseTranslate[keyTranslate] = this.responseSwapi[key];
      }

      return responseTranslate;


    }


}

module.exports = SwapiModel;

const i18next = require('i18next');


class StarshipModel {

  constructor(responseSwapi) {


    this.responseSwapi = responseSwapi;
    i18next
    .init({
      lng: 'es',
      fallbackLng: 'es',
      ns: ['translation'],
      resources: {
        en: {
          // detectamos el nombre del archivo ya que son distintos
          translation : require("../../locales/en/starship.json")
        },
        es: {
          translation: require("../../locales/es/starship.json")
        },
      },
    });
  }

  translateStarshipJson() {
    const responseTranslate = {}

    for(let key in this.responseSwapi) {
       // le agregamos o modificamos el resources


       let keyTranslate = i18next.t(key,{key:this.responseSwapi[key]});

        responseTranslate[keyTranslate] = this.responseSwapi[key];
    }

    return responseTranslate;

  }

}
module.exports = StarshipModel;

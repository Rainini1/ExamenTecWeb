/**
 * Created by Alex on 14/8/2017.
 */
declare var module:any;

module.exports = {
  attributes: {
    nombre:{
      type:'string'
    },
    fkIdPizza: {
      model: 'Pizza'
    }
  }

}

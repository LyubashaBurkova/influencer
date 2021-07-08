import FieldService from './data/FieldService';

const fieldService = new FieldService();

const fetch = () => {
  return fieldService.getInfluencers();
}

export default {
  fetchInfluencers () {
      return fetch()  
  }
}

// import { updateObject } from "../../shared/utility";

const initState = {
  language: null, // could be en / ru
  user: {
    id: null,
    email: null,
    token: null
  },
  activeFilter: [], // Active filter element
  // each element of above is:
  kindOfFoodId: '',
  mainIngredientId: '',
  cookingWayId: '',

  kindOfFood: [], // Arrais of js object appropriate filter alements:
  //  {
  //    id: '', // KOF + timestamp
  //    en: '',
  //    ru: ''
  //  }
  mainIngredient: [], // MI + timestamp
  cookingWay: [], // CW + timestamp

  loading: false,
  error: null
};

const generalReducer = (state = initState, action) => {
  switch (action.type) {
    default: return state;
  }
}

export default generalReducer;


// import { updateObject } from "../../shared/utility";

const initState = {
  recipes: [],
  activeRecipe: null,
  loaing: false,
  error: false
};

  // recipe js object structure
  // id: '', // RCP  + timestamp
  // kindOfFoodId: "", //Kind of food - meat, fish, vegeterian, etc.
  // mainIngredientId: "", //kind of main ingredient - zander, pork, beef, etc.
  // cookingWayId: "" // Way of cooking - grill, boiling, frying, etc.
  // actions: []

  // actoins js object structure:
  // actionTitle: '',
  // actionDescription: ''

const recipeInfoReducer = (state = initState, action) => {
  switch (action.type) {
    default: return state;
  }
}

export default recipeInfoReducer;


import { updateObject } from "../../shared/utility";

const initState = {
  filter: { // Generated on initiation from available recipes in DB.
            // it should be limiting list.
    recipeTag: "", //Kind of food - meat, fish, vegeterian, etc.
    mainIngredient: "", //kind of main ingredient - zander, pork, beef, etc.
    cookingWay: "" // Way of cooking - grill, boiling, frying, etc.
  },
  user: {
    id: null,
    token: null
  },
  loading: false,
  error: null
};

const navigationReducer = (state = initState, action) => {
  switch (action.type) {
    default: return state;
  }
}

export default navigationReducer;

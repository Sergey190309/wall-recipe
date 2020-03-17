
import { updateObject } from "../../shared/utility";

const initState = {
  recipes: [],
  activeRecipe: null,
  loaing: false,
  error: false
};

const informaitonReducer = (state = initState, action) => {
  switch (action.type) {
    default: return state;
  }
}

export default informaitonReducer;

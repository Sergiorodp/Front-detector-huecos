import { createStore } from "redux";

import { initialState } from "reducers/usersReducer";

// reducers 
import userRedux from "reducers/usersReducer";

export const store = createStore(userRedux, initialState)
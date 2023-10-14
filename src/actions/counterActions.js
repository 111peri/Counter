
import {types} from "../reducers/type";

export const increment = () => {
    return { type: types.INCREMENT };
};

export const decrement = () => {
    return { type: types.DECREMENT };
};

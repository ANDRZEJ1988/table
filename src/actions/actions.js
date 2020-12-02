import {SEARCH} from "./actions-type";

export const searchAction = (data) => {
    return ({
        type: SEARCH,
        payload: data
    })
};

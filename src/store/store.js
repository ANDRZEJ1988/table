import {createStore} from "redux";

export const initiaState = {
    data: [{
        code: 'PH1',
        description: 'Sumsung',
        length: 80,
        width: 50,
        height: 40,
        weight: 2
    },
        {
            code: 'PH2',
            description: 'Lg',
            length: 70,
            width: 55,
            height: 44,
            weight: 3
        },
        {
            code: 'PH3',
            description: 'Sony',
            length: 100,
            width: 90,
            height: 75,
            weight: 11
        },
        {
            code: 'PH4',
            description: 'Philips',
            length: 88,
            width: 66,
            height: 52,
            weight: 9
        },
    ]
};
const reducer = (state = initiaState, action) => {
    switch (action.type) {
        case 'SEARCH':
            return {...state, data: action.payload}
        default:
            return state
    }
};
export const store = createStore(reducer);

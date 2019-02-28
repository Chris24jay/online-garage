const initialState= {
    username: '',
    garageId: [],
    garage: [],
    vehicles: [],
    cart: [],
}

const UPDATE_USER = 'UPDATE_USER';

//action builders
export function updateUser(userObj){
    return{
        type: UPDATE_USER,
        payload: userObj
    }
}

export default function reducer(state=initialState, action) {
    const{type, payload} = action; 
    switch(type) {
        case UPDATE_USER:
        const {username} = payload
        return{...state, username}
        default: 
        return state; 
    }
}

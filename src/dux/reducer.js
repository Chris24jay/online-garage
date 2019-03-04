const initialState= {
    id: 0,
    username: '',

    garageId: [],
    garage: [],
    vehicles: [],
    cart: [],
}

const UPDATE_USER = 'UPDATE_USER';

//action builders
export function updateUser(userObj){
    console.log('this is the updateUser action builder', userObj)
    return{
        type: UPDATE_USER,
        payload: userObj
    }
}

export default function reducer(state=initialState, action) {
    const{type, payload} = action; 
    switch(type) {
        case UPDATE_USER:
            const {user_id, username} = payload
            return{...state, id: user_id, username}
        default: 
        return state; 
    }
}

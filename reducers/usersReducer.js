export const initialState = {
    isUser : false,
    data : {
        user : {
            name : 'loading...'
        }
    }
}

// functions reducers
export const setUser = ( user ) => {
    return {
        type : '@users/set',
        payload : { isUser : true , data : user}
    }
}

const reducer = {
    'create' : ( user ) => {
        return user
    },
    'set' : ( user ) => {
        return user
    }
}

const userRedux = ( state = initialState , action ) =>{

    if( action.type === '@users/create') return reducer['create'](action.payload)
    if ( action.type === '@users/set') return reducer['set'](action.payload)
    return state

}

export default userRedux
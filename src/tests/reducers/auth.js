import authReducer from '../../reducers/auth'


test('should set auth state for log in and log out', () => {
    const state = authReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual([])
})

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: '123987'
    }
    const state = authReducer(undefined, action)
    expect(state.uid).toEqual(action.uid)
})

test('should test logout reducer', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({ uid: 'anything'}, action)
    expect(state).toEqual({})
})

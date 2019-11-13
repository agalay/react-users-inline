import { userAPI } from '../../api'

const actions = {
    
    setUsers : users => ({type: "USER:SET_DATA", payload:users}),
    removeUser: id => ({type: 'USER:REMOVE_ITEM', payload: id}), 
   
    fetchUsers: () => async dispatch => {
        let data = await userAPI.get();
        dispatch(actions.setUsers(data));
     },
    fetchRemoveUser: id => dispatch => {
        if (global.confirm('Вы действительно хотите удалить статью?')) {
            dispatch(actions.removeUser(id));
            userAPI.remove(id);
        }
    },

    
}

export default actions;
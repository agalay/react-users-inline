import { userAPI } from "../../api";

const actions = {
  setUsers: users => ({ type: "USER:SET_USER", payload: users }),
  removeUser: id => ({ type: "USER:REMOVE_USER", payload: id }),
  editUserRed: user => ({ type: "USER:EDIT_USER", payload: user }),

  fetchUsers: () => async dispatch => {
    let data = await userAPI.get();
    dispatch(actions.setUsers(data));
  },
  fetchRemoveUser: id => dispatch => {
    if (global.confirm("Вы действительно хотите удалить статью?")) {
      dispatch(actions.removeUser(id));
      userAPI.remove(id);
    }
  },
  editUser: data => async dispatch => {
    let res = await userAPI.put(data);
    dispatch(actions.editUserRed(res));
  }
};

export default actions;

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { userActions } from "../redux/actions";
import { CardList } from "../components";

const CardContainer = ({ fetchUsers, fetchRemoveUser, editUser, items }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <CardList items={items} onRemove={fetchRemoveUser} editUser={editUser} />
  );
};

export default connect(
  ({ users }) => users,
  userActions
)(CardContainer);

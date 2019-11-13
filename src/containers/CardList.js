import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../redux/actions';
import { CardList } from '../components'

const CardContainer = ({fetchUsers, fetchRemoveUser, items}) => {
    useEffect(() => {
        fetchUsers();
      }, []);

      return (
          <CardList items={items} onRemove={fetchRemoveUser}/>
      )
}

export default connect(
    ({ users }) => users,
    userActions,
  )(CardContainer);

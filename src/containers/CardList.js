import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../redux/actions';
import { CardList } from '../components'

// const CardContainer = ({fetchUsers, items}) => {
//     useEffect(() => {
//         fetchUsers();
//       }, []);

//       return (
//           <CardList items={items}/>
//       )
// }

class CardContainer extends React.Component {
    
    componentDidMount() {
        const { fetchUsers } = this.props;
            fetchUsers()
        }
    render() { 
        return (  <CardList items={this.props.items}/> );
    }
}


export default connect(
    ({ users }) => users,
    userActions,
  )(CardContainer);

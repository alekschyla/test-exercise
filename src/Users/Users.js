import React, {Component} from 'react';
import User from "./User";

class Users extends Component {
    state = {
        users: [],
    };

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data => {
                this.setState({users: data.results})
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.users &&
                    this.state.users.map(
                        user => (
                            <User
                                user={user}
                                key={user.login.uuid}
                            />
                        )
                    )
                }
            </div>
        );
    }
}

export default Users;
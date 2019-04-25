import React from 'react';

import ListItem from '@material-ui/core/ListItem/index';
import ListItemText from '@material-ui/core/ListItemText/index';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/index';
import Avatar from '@material-ui/core/Avatar/index';

const User = (props) => {
    return (
            <ListItem
                alignItems="flex-start"
                style={{
                    marginBottom: '20px',
                }}
            >
                <ListItemAvatar>
                    <Avatar
                        alt={props.user.name.first + ' ' + props.user.name.last}
                        src={props.user.picture.thumbnail}
                    />
                </ListItemAvatar>
                <ListItemText
                    primary={<strong>{props.user.name.first + ' ' + props.user.name.last}</strong>}
                    secondary={props.user.email}
                />
            </ListItem>
    );
};

export default User;
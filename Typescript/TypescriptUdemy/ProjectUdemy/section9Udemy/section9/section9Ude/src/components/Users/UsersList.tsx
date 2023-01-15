import React from "react";

import Card from "../UI/Card";

import classes from './UsersList.module.css';


const UsersList = (props: any) => {
    return <Card className={classes.users}>
        <ul>
            {props.users.map((user: any) =>
                <li key={user.id}>{user.name} ({user.age} Years old)</li>
            )}
        </ul>
    </Card>
};

export default UsersList;
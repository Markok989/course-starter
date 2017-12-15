import React, { Component, PropTypes } from 'react';
//import MobileTearSheet from '../../../MobileTearSheet';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Toggle from 'material-ui/Toggle';


const NestedListRow = ({ ch }) => {
    return (

        <ListItem
            key={ch.id}
            primaryText={ch.label}
            leftIcon={< ActionGrade />}
        />
    );
}

export default NestedListRow;
import React, { Component, PropTypes } from 'react';
//import MobileTearSheet from '../../../MobileTearSheet';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Toggle from 'material-ui/Toggle';
import NestedListRow from './NestedListRow'

const NestedList = ({ ch }) => {
    /* return (
         {
             [
                 chapter.lessons.map((ch) => {
                     return (
                         <ListItem
                             key={ch.id}
                             primaryText={ch.label}
                             leftIcon={< ActionGrade />}
                         />
                     );
                 })
             ]
         }
 
     );
 }
 */




    return (
        <div>
            {
                ch.map((ch) =>
                    <NestedListRow key={ch.id} ch={ch} />
                )}
        </div>
    );
}



export default NestedList;
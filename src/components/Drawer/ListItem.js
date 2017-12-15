import React from 'react';
//import MobileTearSheet from '../../../MobileTearSheet';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';

class ListNested extends React.Component {

    state = {
        open: false,
    };

    handleToggle = () => {
        this.setState({
            open: !this.state.open,
        });
    };

    handleNestedListToggle = (item) => {
        this.setState({
            open: item.state.open,
        });
    };

    render() {
        return (
            <div>
                
                <br />
                <div>
                    <List>
                        <Subheader>Nested List Items</Subheader>
                       
                        <ListItem
                            primaryText="Inbox"
                            leftIcon={<ContentInbox />}
                            initiallyOpen={true}
                            primaryTogglesNestedList={true}
                            nestedItems={[
                                <ListItem
                                    key={1}
                                    primaryText="Starred"
                                    leftIcon={<ActionGrade />}
                                />,                               
                            ]}
                        />
                    </List>
                </div>
            </div>
        );
    }
}

export default ListNested;
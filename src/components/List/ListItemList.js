import React, { Component, PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ContentAddBox from 'material-ui/svg-icons/content/add-box';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Toggle from 'material-ui/Toggle';
import { Link } from 'react-router-dom';

import ListItemRow from './ListItemRow';

import * as chapterActions from '../../actions/chapterActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class ListItemList extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            id: '',
            numChapter: 0,
            chapters: [],
            numLessons: 1,
            lessons: [],
            chapterId: '',
            id: '',
            lesson: ''
        };
    }

    handleChange = (event) => {
        this.setState({ chapter: event.target.value });
    }

    //pre nego sto se renderuje komponenta nasetujem id

/*
    componentWillMount() {
        if (this.state.id === '' && this.state.chapterId === '')
            this.setState(
                {
                    id: this.props.id,
                    chapterId: this.props.chapterId
                }
            );
    }

    //Okidam akciju u redux store-u nakon sto nasetujem state u ovoj komponenti
    componentDidUpdate() {
        this.props.actions.updateChapterSuccess(
            {
                id: this.state.id,
                value: this.state.chapter
            }
        );
    }
*/



    render() {
        const { chapters, removeQuestion, addChapter } = this.props;
        return (
            <div>
                {
                    chapters.map((chapter) =>
                        <ListItemRow
                            key={chapter.id}
                            chapter={chapter}
                        />
                    )
                }
                <ListItem
                    rightIcon={
                        < ContentAddBox
                            onClick={() => { }} />}
                >
                    <input
                        placeholder="Add Chapter"
                    />
                </ListItem >
            </div >
        );
    }





    id = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    }


    removeChpter = (id) => {
        const chapters = this.state.chapters.filter(
            chapter => chapter.id != id);
        this.setState({ chapters });
    }



    addChapter = () => {
        const ID = this.id();
        const chapters = [
            ...this.state.chapters,
            { id: ID }
        ];
        this.setState({
            chapters
        });
    }

}




function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(chapterActions, dispatch)
    };
}



export default connect(null, mapDispatchToProps)(ListItemList);
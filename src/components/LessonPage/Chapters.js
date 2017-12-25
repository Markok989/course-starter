import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as chapterActions from '../../actions/chapterActions';
import Lessons from './Lessons';

class Chapters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            chapter: '',
            numLessons: 1,
            lessons: []
        };
    }

    handleChange = (event) => {
        this.setState({ chapter: event.target.value });
    }

    componentWillMount() {
        if (this.state.id === '') this.setState({ id: this.props.id });
    }

    componentDidUpdate() {
        this.props.actions.updateChapterSuccess(
            {
                id: this.state.id,
                value: this.state.chapter
            }
        );
    }

    render() {
        const { id, removeChapter } = this.props;

        return (
            <div className="panel panel-default nested-fields">
                <div className="panel-body">
                    <div>
                        <Lessons
                            key={lesson.id}
                            id={lesson.id}
                            removeLesson={this.removeLesson}
                            chapterId={this.state.id}
                        />
                    </div>
                    <input
                        type="submit"
                        value="Remove Chapter"
                        className="btn btn-default"
                        onClick={() => removeChapter(id)} />

                    <input
                        type="submit"
                        value="Add Lesson"
                        className="btn btn-default"
                        onClick={this.addLesson} />
                </div>
            </div>
        );
    }

    removeLesson = (id) => {
        if (this.state.lessons.length > 0) {
            const lessons = this.state.lessons.filter(
                lesson => lesson.id != id
            );
            this.setState({ lessons });
        }
    }


    addLesson = () => {
        const ID = this.id();
        const lessons = [
            ...this.state.lessons,
            { id: ID }
        ];
        this.setState({
            lessons
        });
    }

    id = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
}



function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(chapterActions, dispatch)
    };
}


export default connect(null, mapDispatchToProps)(Questions);
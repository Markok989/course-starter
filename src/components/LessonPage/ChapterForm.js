import React from 'react';
import Chapters from './Chapters';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from '../../actions/listActions';

class ChapterForm extends React.Component {

    constructor(props, context) {
        super(props, context);


        this.state = {
            numChapter: 0,
            chapters: [],
            chapterName: ''
        };
    }

    handleChange = (event) => {
        this.setState({ chapterName: event.target.value });
    }

    // render metoda koja pokazuje sadrzaj komponente
    render() {
        return (
            <div className="panel-body">
                <div className="panel panel-default nested-fields">
                    <div className="panel-body">
                        <TextInput
                            name="title"
                            label="Title"
                            value={this.state.title}
                            onChange={this.handleChange} />
                    </div>
                </div>
                <div>
                    <Questions key={question.id} id={question.id} removeQuestion={this.removeQuestion} />
                </div>

                <input
                    type="submit"
                    value="Add Chapter"
                    className="btn btn-default"
                    onClick={this.addChapter} />
                <div className="form-actions">
                    <hr />

                    <input type="submit"
                        value="Create Quiz"
                        className="btn btn-primary"
                        onClick={this.createQuiz} />
                </div>
            </div>
        );
    }


    removeChapter = (id) => {
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


    id = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    }



    prepareDataForRequest(listTitle, cha, les) {
        let list = {
            id: this.id(),
            chapterName: listTitle,
            chapters: []
        };
        cha.forEach(chapter => {
            let lesson = les.filter(lesson => lesson.chapterId === chapter.id);

            let cha = Object.assign({}, chapter);
            cha.lessons = [...lessons];
        });
        return list;
    }



    createList() {
        console.log("udjem ovde");
        let lessons = this.props.lessons;
        let chapters = this.props.chapters;
        let listTitle = this.state.chapterName;
        let data = this.prepareDataForRequest(listTitle, chapters, lessons);

        // let json = JSON.stringify(data);
        // console.log(json);
        this.props.actions.saveQuiz(data).then(() => {
            toastr.success("zavrseno cuvanje");
        })
            .catch(error => {
                toastr.error(error);
                // console.log("greske prilikom cuvanja quiz-a");
            });
    }
}

// u ovom slucaju koristi se vise stanja,
// zbog lakse manipulacije oba stanja se stavaljju u jedan element res,

function mapStateToProps(state, ownProps) {
    let res = {
        questions: state.questions,
        answers: state.answers
    };
    return res;
}

// mapDispatchToProps vezuje (bindActionCreators) akciju(quizActions) i poziva je
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(quizActions, dispatch)
    };
}

// connect za povezivanje funkcija mapStateToProps i mapDispatchToProps za ovu komponentu
export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);


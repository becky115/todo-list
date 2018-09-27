import React, { Component } from 'react';
import TodoInput from '../components/TodoInput';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//액션 생성 함수들을 한꺼번에 불러옵니다
import * as inputActions from '../modules/input';
import * as todoActions from '../modules/todos';


class TodoInputContainer extends Component {

	id = 1;
	getId = () => {
		return ++ this.id;
	};

	handleChange = (e) => {
		const { value } = e.target;
		const { InputActions } = this.props;
		InputActions.setInput(value);
	};

	handleInsert = () => {
		const {InputActions, TodosActions, value} = this.props;
		const todo = {
			id: this.getId(),
			text: value,
			done: false
		};

		TodosActions.insert(todo);
		InputActions.setInput('');
	};


	render() {
		console.log(this.props);
		const { value } = this.props;
		const { handleChange, handleInsert } = this;

		console.log(this.props, this);

		return (
			<TodoInput
				onChange={ handleChange }
				onInsert={ handleInsert }
				value={ value }
			/>
		);
	}
}

//mapStateProps와 mapDispatchToProps 함수에 대한 레퍼런스 따로 안 만들고 내부에 정의
export default connect(
	(state) => ({
		value: state.input.get('value')
	}),

	(dispatch) => ({
		InputActions: bindActionCreators(inputActions, dispatch),
		TodosActions: bindActionCreators(todoActions, dispatch)
	})
)(TodoInputContainer);


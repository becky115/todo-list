import React, {Component} from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';


class App extends Component {
	state = {
		input: '', //input값
		//일정 데이터 초깃값
		todos: [
			{id:0, text: 'react study', done: true},
			{id:1, text: 'exercise', done: false}
		]
	};

	//일정 데이터 안에 들어가는 id값
	id = 1;
	getId = () => {
		return ++ this.id;
	};

	handleChange = (e) => {
		const { value } = e.target;
		this.setState({
			input: value
		});
	};

	handleInsert = (e) => {
		const {todos, input} = this.state;

		const newTodo = {
			text: input,
			done: false,
			id: this.getId()
		};

		this.setState({
			input: '',
			todos: [...todos, newTodo]
		})
	};
	//to do 아이템 토글하기
	handleToggle = (id) => {
		console.log("handleToggle")
		//id로 배열의 인덱스를 찾음
		const { todos } = this.state;
		const index = todos.findIndex(todo => todo.id === id);

		//찾은 데이터의 done 값을 반전시킴
		const toggled = {
			...todos[index],
			done: !todos[index].done
		};

		//slice를 사용하여 찾은 index전후의 데이터들 복사
		//그리고 그사이에는 변경된 todo 객체를 넣어줌
		this.setState({
			todos: [
				...todos.slice(0, index),
				toggled,
				...todos.slice(index + 1, todos.length)
			]
		})

	};

	handleRemove = (id) => {
		console.log("handleRemove")
		const { todos } = this.state;
		const index = todos.findIndex(todo => todo.id === id);

		console.log("index:", index)

		this.setState({
			todos: [
				...todos.slice(0, index),
				...todos.slice(index + 1, todos.length)
			]
		});
	};

	render() {
		const { input, todos } = this.state;

		const {
			handleChange,
			handleInsert,
			handleToggle,
			handleRemove
		} = this;

		return (
			<PageTemplate>
				<TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
				<TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
			</PageTemplate>
		);
	}
}

export default App;

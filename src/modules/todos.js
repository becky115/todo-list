import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

const initialState = List([
	Map({
		id: 0,
		text: 'study',
		done: true
	}),
	Map({
		id: 1,
		text: 'styling',
		done: false
	})
]);

//리듀서
export default handleActions({
	[INSERT]: (state, action) => {
		//payload안에 있는 id, text, done의 레퍼런스를 만들어줌
		//레퍼런스를 만들지 않고 바로 push(Map(action.payload))를 해도 되지만
		// 이 액션이 어떤 데이터를 처리하는지 쉽게 볼 수 있도록 하는작업

		console.log("insert: " + state);
		console.log("insert: " + action);
		const {id, text, done} = action.payload;

		return state.push(Map({
			id,
			text,
			done
		}));
	},

	[TOGGLE]: (state, action) => {
		const {payload: index} = action;
		//= const index = action.paryload;

		//return state.setIn([index, 'done'], !state.getIn([0, index]);
		return state.updateIn([index, 'done'], done => !done);
	},

	[REMOVE]: (state, action) => {
		const {payload: index} = action;
		return state.delete(index);
	}
});
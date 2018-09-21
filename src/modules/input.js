import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

//액션 타입정의
const SET_INPUT = 'input/SET_INPUT';

//액션 생성함수 만들기
export const setInput = createAction(SET_INPUT);

//리듀서의 초기상태 정의
const initialState = Map({
	value: ''
});

//리듀서 만들기
export default handleActions({
	[SET_INPUT]: (state, action) => {
		return state.set('value', action.payload)
	}
}, initialState);
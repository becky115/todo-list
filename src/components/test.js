const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = (diff) => ({
	type: INCREMENT,
	diff: diff
});ㅋㅋ


const decrement = (diff) => ({
	type: DECREMENT,
	diff: diff
});

const initialState = {
	number: 0
};

//state가 undefined이면 initialState
function counter(state = initialState, action) {
	switch(action.type) {
		case INCREMENT:
			return Object.assign({}, state, {
				number: state.number + action.diff
			});
		case DECREMENT:
			// return Object.assign({}, state, {
			// 	number: state.number - action.diff
			// });
			return {
				...state,
				number: state.number - action.diff
			};
		default:
			return state;
	}
}

/**
 <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.0/redux.js"></script>
 **/
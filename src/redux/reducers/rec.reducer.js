const initialState = {
	recommendations: [],
};

export default function recReducer(state = initialState, action) {
	console.log(1);
	switch (action.type) {
		case "ADD_RECOMMENDATION":
			return {
				...state,
				recommendations: action.payload,
			};
		default:
			return state;
	}
}

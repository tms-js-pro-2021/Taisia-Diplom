const initialState = {
	userId: null,
};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case "AUTH_USER":
			console.log(action.payload);
			return {
				...state,
				userId: action.payload,
			};
		default:
			return state;
	}
}

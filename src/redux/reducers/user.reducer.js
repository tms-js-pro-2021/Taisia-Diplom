const initialState = {
	user_registration: false,
};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case "REGISTER_USER":
			console.log(action.payload);
			return {
				...state,
				user_registration: true,
			};
		default:
			return state;
	}
}

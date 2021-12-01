const initialState = {
	sideMenu: false,
  modalType: null
};

export default function appReducer(state = initialState, action) {
  console.log(1)
	switch (action.type) {
		case "TOGGLE_MENU":
			return {
				...state,
				sideMenu: !state.sideMenu,
			};
      case "SET_MODAL_TYPE":
			return {
				...state,
				modalType: action.payload
			};
		default:
			return state;
	}
}
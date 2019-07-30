import { EDITPRO, ADDEDU, ADDEXP } from '../type';

const profileReducer = (state, action) => {
	switch (action.type) {
		case EDITPRO:
			return {
				...state,
				...action.payload,
			};
		case ADDEDU:
			return {
				...state,
				...action.payload,
			};
		case ADDEXP:
			return {
				...state,
				...action.payload,
			};

		default:
			break;
	}
};
export default profileReducer;

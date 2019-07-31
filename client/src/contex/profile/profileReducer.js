import { EDITPRO, ADDEDU, ADDEXP, GETPRO } from '../type';

const profileReducer = (state, action) => {
	switch (action.type) {
		case EDITPRO:
			return {
				...state,
				data: { ...action.payload },
			};
		case ADDEDU:
			return {
				...state,
				data: { ...action.payload },
			};
		case ADDEXP:
			return {
				...state,
				data: { ...action.payload },
			};
		case GETPRO:
			return {
				...state,
				data: { ...action.payload },
			};

		default:
			break;
	}
};
export default profileReducer;

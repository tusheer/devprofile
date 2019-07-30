import { EDITPRO } from '../type';

const profileReducer = (state, action) => {
	switch (action.type) {
		case EDITPRO:
			return {
				...state,
				...action.payload,
			};

		default:
			break;
	}
};
export default profileReducer;

export default function personReducer(state, action) {
    switch (action.type) {
        case 'add':
            if (Validator(action.personNew)) {
                return [...state, action.personNew];
            }
            return state;
        case 'remove':
            return state.filter(x => x.id !== action.id);
        default:
            return state;
    }
}

const Validator = (data) => {
    if (data?.name !== '' && data?.age !== '' && data?.gender !== '') {
        if (data?.name.length > 3 && data?.age.length > 1 && data?.gender.length > 3) {
            return true;
        }
    }
    return false;
};
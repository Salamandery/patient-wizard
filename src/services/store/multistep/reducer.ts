import producer from 'immer';

const INITIAL_STATE = {
    step: 1,
}

export default function multistep(action, state=INITIAL_STATE) {
    return producer(state, draft => {
        switch(action.type) {
            case '@step/UPDATE_PROFILE_SUCCESS': {
                draft.step = action.payload.step;
                break;
            }
            case '@step/SIGN_IN_SUCCESS': {
                draft.step = action.payload.step;
                break;
            }
            case '@step/SIGN_OUT_REQUEST': {
                draft.step = action.payload.step;
                break;
            }
            default: {
              break;
            }
        }
    });
};
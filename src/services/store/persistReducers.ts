import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
    const persistedReducer = persistReducer({
        key: 'atomiccodes@patient',
        storage,
        whitelist: ['multistep'],
    }, reducers);

    return persistedReducer;
}
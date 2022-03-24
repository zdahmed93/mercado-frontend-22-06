import {
    SET_ALL_ITEMS,
    SELECT_ITEM,
    REMOVE_ITEM,
    UPDATE_ITEM,
    ADD_ITEM
} from '../types/itemsTypes';


export const setAllItems = (items) => ({ type: SET_ALL_ITEMS, payload: items });

export const selectItem = (item) => ({ type: SELECT_ITEM, payload: item });

export const removeItem = (itemId) => ({ type: REMOVE_ITEM, payload: itemId });

export const updateItem = (itemId, data) => ({ type: UPDATE_ITEM, payload: { id: itemId, data } });

export const addItem = (item) => ({ type: ADD_ITEM, payload: item });

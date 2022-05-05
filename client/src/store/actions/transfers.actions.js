import axios from 'axios';

import { transfersActions } from '../slices/transfers.slice';

const API_URL = "http://localhost:4000/api/v1/transfers";

export const getUsersTransfers = userId => {
	return async dispatch => {
		try {
			axios.get(API_URL )
			dispatch(transfersActions.getTransfers());
		} catch (error) {
			console.log(error);
		}
	};
};

export const newTransfer = (accountNumber, amount) => {
	return async dispatch => {
		try {
			axios.get(API_URL);
			dispatch(transfersActions.newTransfer());
		} catch (error) {
			console.log(error);
		}
	};
};

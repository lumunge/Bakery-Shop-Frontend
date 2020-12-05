import { MAIL_LIST } from '../types';

export const mailList = (client) => (dispatch) => {
    fetch('/api/clients', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(client)
    }).then((res) => res.json())
    .then((data) => {
        dispatch({
            type: MAIL_LIST,
            payload: data
        });
    })
}
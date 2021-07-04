import { MAIL_LIST } from '../types';

export const sendMail = (mail) => (dispatch) => {
    fetch('/api/mailing-list', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(mail)
    }).then((res) => res.json())
    .then((data) => {
        dispatch({
            type: MAIL_LIST,
            payload: data
        });
    })
}
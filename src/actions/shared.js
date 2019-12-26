import * as API from '../utils/api';
import { receiveUsers } from './users';
import { receiveTweets } from './tweets';
import { receivedAuth } from './authUsers'
import { showLoading , hideLoading } from 'react-redux-loading';


export const UserID = 'tylermcginnis'

export function handleInitialData() { 
    return dispatch => { 
        dispatch(showLoading())
        return API.getInitialData().then(
            ({tweets, users}) => { 
                dispatch(receiveUsers(users));
                dispatch(receiveTweets(tweets))
                dispatch(receivedAuth(UserID))
                dispatch(hideLoading())
            }
        )
    }
}
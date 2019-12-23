import * as API from '../utils/api';
import { receiveUsers } from './users';
import { receiveTweets } from './tweets';
import { receivedAuth } from './authUsers'


export const UserID = 'tylermcginnis'

export function handleInitialData() { 
    return dispatch => { 
        return API.getInitialData().then(
            ({tweets, users}) => { 
                dispatch(receiveUsers(users));
                dispatch(receiveTweets(tweets))
                dispatch(receivedAuth(UserID))
            }
        )
    }
}
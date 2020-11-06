import * as ActionTypes from './ActionTypes';
//import { CAMPSITES } from '../shared/campsites';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    }
});

export const fetchCampsites = () => dispatch => {

    dispatch(campsitesLoading());

    return fetch(baseUrl + 'campsites')
    .then(response => response.json())
    .then(campsites => dispatch(addCampsites(campsites)));
};
  
    // setTimeout(() => {
    //     dispatch(addCampsites(CAMPSITES));
    // }, 2000);
    //**** THE FOLLOWING ADDED IN 3. Exercise: Fetch from Server - WEEK 5 */
    //This returns a Promise
    //**  * .then(response => response.json()) - then menthod use the json method to convert to Javascript (array of campsites)
    // then(campsites => dispatch(addCampsites(campsites))) - this is chained to the previous 'then' to grab 
    // the response and dispatch the campsites argument with at campsites to use as payloads
    
//**** THE FOLLOWING ADDED IN 3. Exercise: Fetch from Server - WEEK 5 */
export const fetchComments = () => dispatch => {    
    return fetch(baseUrl + 'comments')
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)));
};
//----------DESCRIPTION FOR FUNCTION fetchComments
// -------- return fetch(baseUrl + 'comments') - returns a Promise for an array of comments objects
// -------- .then(response => response.json())
// --------- .then(comments => dispatch(addComments(comments)));
// ---------will convert to JAvascript array and then dispatch to the comments store
export const fetchPromotions = () => dispatch => {
    dispatch(promotionsLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => response.json())
        .then(promotions => dispatch(addPromotions(promotions)));
};


export const campsitesLoading = () => ({
    type: ActionTypes.CAMPSITES_LOADING
});

export const campsitesFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});

export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
});

export const commentsFailed = errMess => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});


export const promotionsLoading = () => ({
    type: ActionTypes.PROMOTIONS_LOADING
});

export const promotionsFailed = errMess => ({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess
});

export const addPromotions = promotions => ({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions
});
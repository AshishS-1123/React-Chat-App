import actionTypes from "../constants/actionTypes"

export function postMessage(reciever, message) {

  return (dispatch, getState) => {

    dispatch({
      type: actionTypes.POST_MESSAGE,
      payload: {
        reciever,
        message
      }
    })
  }
}

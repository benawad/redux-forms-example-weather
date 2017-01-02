function weather(state = {}, action) {
  switch(action.type) {
    case 'WEATHER_FETCHED':
      return action.result;
    default:
      return state;
  }
}

export default weather;

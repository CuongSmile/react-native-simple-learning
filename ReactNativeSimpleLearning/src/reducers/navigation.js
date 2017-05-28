import { NavigationActions } from 'react-navigation';

import { App } from '../app';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = App.router.getActionForPathAndParams('Login');
const tempNavState = App.router.getStateForAction(firstAction);
const secondAction = App.router.getActionForPathAndParams('Home');
const initialNavState = App.router.getStateForAction(
  firstAction,
  tempNavState
);

export default function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = App.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    case 'Home':
      nextState = App.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' , params : action.params}),
        state
      );
      break;
    default:
      nextState = App.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

import { createStackNavigator } from 'react-navigation';
import { routes as requestMoneyRoutes } from 'modules/request-money/navigation/RequestMoneyNavigator';

const routes = {
  ...requestMoneyRoutes,
};

export const AppNavigator = createStackNavigator(routes);
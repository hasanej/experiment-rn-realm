import React, from 'react';

import { createStackNavigator } from 'react-navigation';
import Home from './pages/screen/Home';
import RegisterUser from './pages/RegisterUser';
import ViewAllUser from './pages/ViewAllUser';
import ViewUser from './pages/ViewUser';
import UpdateUser from './pages/UpdateUser';
import DeleteUser from './pages/DeleteUser';

const App = createStackNavigator ({
  HomeActivity: {
    screen: Home,
    navigateOptions: {
      title: "Home",
      headerStyle: { backgroundColor: '#3A59B7' },
      headerTintColor: '#FFF',
    },
  },
  ViewUserActivity: {
    screen: ViewUser,
    navigateOptions: {
      title: "User Data",
      headerStyle: { backgroundColor: '#3A59B7' },
      headerTintColor: '#FFF',
    },
  },
  ViewAllUserActivity: {
    screen: ViewAllUser,
    navigateOptions: {
      title: "User List",
      headerStyle: { backgroundColor: '#3A59B7' },
      headerTintColor: '#FFF',
    },
  },
  UpdateUserActivity: {
    screen: UpdateUser,
    navigateOptions: {
      title: "Update User",
      headerStyle: { backgroundColor: '#3A59B7' },
      headerTintColor: '#FFF',
    },
  },
  DeleteUserActivity: {
    screen: DeleteUser,
    navigateOptions: {
      title: "Delete User",
      headerStyle: { backgroundColor: '#3A59B7' },
      headerTintColor: '#FFF',
    },
  },
  RegisterUserActivity: {
    screen: RegisterUser,
    navigateOptions: {
      title: "Register User",
      headerStyle: { backgroundColor: '#3A59B7' },
      headerTintColor: '#FFF',
    },
  },
});

export default App;

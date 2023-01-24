import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../screens/Profile';
import Donations from '../screens/Donations';
import CustomDrawer from '../components/CustomDrawer';
import Donees from '../screens/Donees';
import OrderSummary from '../screens/OrderSummary';
import DonationItems from '../screens/DonationItems';
import Notifications from '../screens/Notifications';
import TrackingVolunteer from '../screens/TrackingVolunteer';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import Donee_History from '../screens/Donee_History';
import Tax_Deduction from '../screens/Tax_Deduction';
import Donation_History_Details from '../screens/Donation_History_Details';

const Drawer = createDrawerNavigator();

const Main = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Donations" component={Donations} />
      <Drawer.Screen name="Donees" component={Donees} />
      <Drawer.Screen name="DonationItems" component={DonationItems} />
      <Drawer.Screen name="OrderSummary" component={OrderSummary} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="TrackingVolunteer" component={TrackingVolunteer} />
      <Drawer.Screen name="DoneeHistory" component={Donee_History} />
      <Drawer.Screen name="TaxDeduction" component={Tax_Deduction} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen
        name="Donation_History_Details"
        component={Donation_History_Details}
      />
    </Drawer.Navigator>
  );
};
export default Main;

import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screens/Profile';
import Donations from '../screens/Donations';

const Drawer = createDrawerNavigator();

const Main = () => {
    return (
        <Drawer.Navigator initialRouteName="Profile">
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Donations" component={Donations} />
        </Drawer.Navigator>
    );
};
export default Main();

const styles = StyleSheet.create({
    notification: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

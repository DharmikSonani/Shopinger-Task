import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBar } from './BottomTabBar';
import { COLOR } from '../../helpers/colors';
import { Screens } from '../helper';
import HospitalScreen from '../../screens/HospitalScreen/HospitalScreen';
import { BOTTOM_TAB_BARSATI_ICON, BOTTOM_TAB_CART_ICON, BOTTOM_TAB_HOME_ICON, BOTTOM_TAB_MENU_ICON, BOTTOM_TAB_PATIENT_ICON } from '../../assets/assets';
import MenuScreen from '../../screens/MenuScreen/MenuScreen';
import CartScreen from '../../screens/CartScreen/CartScreen';
import PatientScreen from '../../screens/PatientScreen/PatientScreen';
import BarsatiScreen from '../../screens/BarsatiScreen/BarsatiScreen';

const Tab = createBottomTabNavigator();

const TabBar = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: COLOR.TRANSPARANT,
                },
                tabBarShowLabel: false,
                headerShown: false,
            }}
            tabBar={(props) => (<BottomTabBar {...props} />)}
        >
            {
                TabScreens.map((screen, i) =>
                    <Tab.Screen
                        key={i}
                        name={screen.name}
                        component={screen.component}
                        options={{
                            headerShown: false,
                            params: {
                                title: screen?.title,
                                icon: screen?.icon,
                                aspectRatio: screen?.aspectRatio,
                            }
                        }}
                    />
                )
            }
        </Tab.Navigator>
    )
}

export default TabBar

const TabScreens = [
    {
        name: Screens.HospitalScreen,
        component: HospitalScreen,
        icon: BOTTOM_TAB_HOME_ICON,
        aspectRatio: 0.85,
        title: `Hospital`,
    },
    {
        name: Screens.MenuScreen,
        component: MenuScreen,
        icon: BOTTOM_TAB_MENU_ICON,
        aspectRatio: 0.8,
        title: `Menu`,
    },
    {
        name: Screens.CartScreen,
        component: CartScreen,
        icon: BOTTOM_TAB_CART_ICON,
        aspectRatio: 0.8,
        title: `Cart`,
    },
    {
        name: Screens.PatientScreen,
        component: PatientScreen,
        icon: BOTTOM_TAB_PATIENT_ICON,
        aspectRatio: 1,
        title: `Patient`,
    },
    {
        name: Screens.BarsatiScreen,
        component: BarsatiScreen,
        icon: BOTTOM_TAB_BARSATI_ICON,
        aspectRatio: 0.8,
        title: `Barsati`,
    },
]
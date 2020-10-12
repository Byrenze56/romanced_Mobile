import { BottomTabBar } from "@react-navigation/bottom-tabs"
import { createAppContainer, createStackNavigator } from 'react-navigation';



const RootStackScreen = createStackNavigator();

export const AuthStack = () => {
    <AuthStack.Navigator>
        <AuthStack.Screen
            name=''
            component= {Login}
            options= {{
                headerShown: false,
                title: '',
                headerTransparent: true,
            }}
        />
    </AuthStack.Navigator>


}

export const RootStackScreen = () => {
    <RootStackScreen.Navigator>
        <RootStack.Screen
            name=''
            component={BottomTabNavigation}
            options={{headerShown:false, title:'', headerTransparent: true}}
        />
    <RootStack.Screen
            name=''
            component={}
            options={{headerShown:false, title:'', headerTransparent: true}}
        />
    </RootStackScreen.Navigator>


}

const AccountSettingsStackScreen = () => {
    <AccountSettingsStackScreen.Navigator>
        <AccountSettingsStackScreen.Screen
            name='AccountInfo'
            component={InfoPageComponent}
            options={{
                headerShown: false,
                title: ''
            }}
        />
     <AccountSettingsStackScreen.Screen
            name='Order'
            component={OrderPageComponent}
            options={{
                headerShown: false,
                title: ''
            }}
        />
    </AccountSettingsStackScreen.Navigator>
}

const ShopStack = () => {
    <ShopStack.Navigator>
        <ShopStack.Screen
            name='Products'
            component={ProductsScreenComponent}
            options={{
                headerShown:false,
                title:'',
                headerTransparent:true,
            }}
        />
        <ShopStack.Screen
            name='Product'
            component={ProductPageComponent}
            options={{
                headerShown:false,
                title:'',
                headerTransparent:true,
            }}
        />
            <ShopStack.Screen
            name='Description'
            component={DescriptionPageComponent}
            options={{
                headerShown:false,
                title:'',
                headerTransparent:true,
            }}
        />
    </ShopStack.Navigator>
}

export const BottomTabNavigation = () => {
    <BottomTabNavigation.Navigator>
        <BottomTabNavigation.Screen
             name=''
             component={}
             options={{
                 headerShown:false,
                 title:'',
                 headerTransparent:true,
             }}
        />
         <BottomTabNavigation.Screen
             name=''
             component={}
             options={{
                 headerShown:false,
                 title:'',
                 headerTransparent:true,
             }}
        />
         <BottomTabNavigation.Screen
             name=''
             component={}
             options={{
                 headerShown:false,
                 title:'',
                 headerTransparent:true,
             }}
        />
         <BottomTabNavigation.Screen
             name=''
             component={}
             options={{
                 headerShown:false,
                 title:'',
                 headerTransparent:true,
             }}
        />
    </BottomTabNavigation.Navigator>
}

export const TopTabs = () => {
    <TopTabs.Navigator>
        <TopTabs.Screen
            name=''
            component={}
            options={{
                headerShown:false,
                title:'',
                headerTransparent: true,
            }}
        />
    </TopTabs.Navigator>
}
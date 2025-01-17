import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '@screens/Home'
import Questions from '@screens/Questions'
import NavHeaderLeft from './NavHeaderLeft'

// 화면 전환에 필요한 타입 정의
export type RootStackParamList = {
  Home: undefined
  Questions: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home Screen', headerShown: false }}
        />
        <Stack.Screen
          name="Questions"
          component={Questions}
          options={{
            headerTitle: '',
            headerTransparent: true,
            headerLeft: () => <NavHeaderLeft />,
            contentStyle: { backgroundColor: '#FFF' },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

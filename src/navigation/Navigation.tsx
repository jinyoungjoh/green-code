import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '@screens/Home'
import Questions from '@screens/Questions'
import { PlantRecommendation } from '@models/plants'
import Recommendation from '@screens/Recommendation'
import { screenOptions } from '@styles/web'

// 화면 전환에 필요한 타입 정의
export type RootStackParamList = {
  Home: undefined
  Questions: undefined
  Recommendation: {
    plantInfo: PlantRecommendation
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home Screen',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Questions"
          component={Questions}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Recommendation"
          component={Recommendation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

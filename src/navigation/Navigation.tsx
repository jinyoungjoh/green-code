import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '@screens/Home'
import Questions from '@screens/Questions'
import NavHeaderLeft from './NavHeaderLeft'
import { PlantRecommendation } from '@models/plants'
import Recommendation from '@screens/Recommendation'
import NavHeaderRight from './NavHeaderRight'

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
        <Stack.Screen
          name="Recommendation"
          component={Recommendation}
          options={({ navigation }) => {
            return {
              headerTitle: '',
              headerTransparent: true,
              headerLeft: () => <></>,
              headerRight: () => <NavHeaderRight navigation={navigation} />,
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

import { useEffect, useState } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import { Asset } from 'expo-asset'
import fonts from '@assets/fonts'
import images from '@assets/images'

const ResourcePreloader = ({ children }: { children: React.ReactNode }) => {
  const [isReady, setIsReady] = useState(false)
  const [fontsLoaded] = useFonts(fonts)

  useEffect(() => {
    const loadResources = async () => {
      try {
        await SplashScreen.preventAutoHideAsync()

        const imagePromises = [...Object.values(images.plants)].map((image) =>
          Asset.fromModule(image).downloadAsync(),
        )

        await Promise.all(imagePromises)
        setIsReady(fontsLoaded)

        if (fontsLoaded) {
          await SplashScreen.hideAsync()
        }
      } catch (e) {
        console.warn(e)
      }
    }

    loadResources()
  }, [fontsLoaded])

  if (!isReady) {
    return null
  }

  return <>{children}</>
}

export default ResourcePreloader

import { useMemo } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Navigation, INavigation } from '../navigation'
import { PageNames } from '../../const'

export const useAppNavigation = (): INavigation<PageNames> => {
    const navigation = useNavigation<NavigationProp<Record<string, any>>>()
    const appNavigation = useMemo(
        () => new Navigation<PageNames>(navigation),
        [navigation]
    )
    return appNavigation
}
import { PageNames, useAppNavigation, useColors } from '@/shared'

export const useFolderPreview = (path: string) => {
    const colors = useColors()
    const textColor = colors.white
    const navigation = useAppNavigation()
    const handlePress = () => {
        navigation.goTo(PageNames.FOLDER, { path })
    }
    return {
        textColor,
        handlePress,
    }
}
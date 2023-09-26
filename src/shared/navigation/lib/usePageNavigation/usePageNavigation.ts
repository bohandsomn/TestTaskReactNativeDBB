import { useMemo } from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { PageNames } from '../../const'
import { IPageNavigation, PageNavigation } from '../pageNavigation'

export const useAppPageNavigation = (): IPageNavigation<PageNames> => {
    const route = useRoute<RouteProp<Record<PageNames, object>>>()
    const pageNavigation = useMemo(() => new PageNavigation<PageNames>(route), [route])
    return pageNavigation
}
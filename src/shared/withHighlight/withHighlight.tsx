import { FC } from 'react'
import { IWithHighlight } from './type'
import { View, Text, SectionList } from '@gluestack-ui/themed'

export function withHighlight<Props extends IWithHighlight>(
    Component: FC<Props>,
): FC<Props> {
    const useComponentWithHighlight = ({ rules }: IWithHighlight) => {
        const errors = rules
            ?.map((rule) => rule())
            .filter((error): error is string => !!error)
        return {
            errors,
        }
    }
    const ComponentWithHighlight: FC<Props> = (props) => {
        const { errors } = useComponentWithHighlight(props)
        return (
            <View>
                <Component {...props} />
                {errors?.map((error) => (
                    <Text color="$error300" key={error}>
                        {error}
                    </Text>
                ))}
                {/* {errors && (
                    <SectionList
                        data={errors}
                        renderItem={({ item: error }) => (
                            <Text color="$error300" key={error as string}>
                                {error as string}
                            </Text>
                        )}
                    />
                )} */}
            </View>
        )
    }
    return ComponentWithHighlight
}

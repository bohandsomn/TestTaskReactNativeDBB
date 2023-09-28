import { InputField } from '@gluestack-ui/themed'
import { IWithHighlight } from '../../withHighlight'

type IInputProps = Parameters<typeof InputField>[0]

export interface IAppInputProps extends IInputProps, IWithHighlight { }
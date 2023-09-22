import type { TextFieldProps } from 'react-aria-components';
import { Text } from 'react-aria-components';
import { AriaTextField } from './client-react-aria';
import Input from './Input';
import Label from './Label';
import { cn } from '@lib/utils';

interface Props extends TextFieldProps {
	label?: string;
	description?: string;
	errorMessage?: string;
	labelClassName?: string;
	inputClassName?: string;
}

export default function TextField({
	label,
	labelClassName,
	inputClassName,
	description,
	errorMessage,
	...props
}: Props) {
	const invalid = errorMessage != null;
	return (
		<AriaTextField {...props} isInvalid={invalid}>
			<Label className={cn('mb-0.5', labelClassName)}>{label}</Label>
			<Input
				className={cn(inputClassName, { 'border-negative-500': invalid })}
			/>
			{description ? (
				<Text slot="description" className="text-neutral-700 text-xs mt-0.5">
					{description}
				</Text>
			) : null}
			{invalid ? (
				<Text slot="errorMessage" className="text-negative-500 text-xs mt-0.5">
					{errorMessage}
				</Text>
			) : null}
		</AriaTextField>
	);
}

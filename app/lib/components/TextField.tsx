import { cn } from '@lib/utils';
import { forwardRef } from 'react';
import type { TextFieldProps } from 'react-aria-components';
import { Text } from 'react-aria-components';
import { Controller, useFormContext } from 'react-hook-form';
import Input from './Input';
import Label from './Label';
import { AriaTextField } from './client-react-aria';

interface Props extends TextFieldProps {
	name: string;
	label?: string;
	description?: string;
	errorMessage?: string;
	labelClassName?: string;
	inputClassName?: string;
}

const TextField = forwardRef<HTMLInputElement, Props>(function TextField(
	{
		label,
		labelClassName,
		inputClassName,
		description,
		errorMessage,
		...props
	}: Props,
	ref
) {
	const methods = useFormContext();
	if (methods) {
		const error = methods.formState.errors[props.name];
		const invalid = error != null;
		return (
			<Controller
				name={props.name}
				control={methods.control}
				rules={{ minLength: 10 }}
				render={({ field }) => (
					<>
						<AriaTextField
							{...{ ...field, ref: undefined }}
							{...props}
							isInvalid={invalid}
						>
							<Label className={cn('mb-0.5', labelClassName)}>{label}</Label>
							<Input
								ref={field.ref}
								name={props.name}
								className={cn(inputClassName, {
									'border-negative-500': invalid,
								})}
							/>
							{description ? (
								<Text
									slot="description"
									className="text-neutral-700 text-xs mt-0.5"
								>
									{description}
								</Text>
							) : null}
							{invalid ? (
								<Text
									slot="errorMessage"
									className="text-negative-500 text-xs mt-0.5"
								>
									{errorMessage}
								</Text>
							) : null}
						</AriaTextField>
						{field.value}
					</>
				)}
			/>
		);
	}

	const invalid = errorMessage != null;
	return (
		<AriaTextField ref={ref} {...props} isInvalid={invalid}>
			<Label className={cn('mb-0.5', labelClassName)}>{label}</Label>
			<Input
				ref={ref}
				name={props.name}
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
});

export default TextField;

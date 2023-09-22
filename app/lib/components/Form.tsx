import React from 'react';
import {
	FieldValues,
	FormProvider,
	SubmitHandler,
	UseFormProps,
	useForm,
} from 'react-hook-form';

type Props<T extends FieldValues> = Omit<
	React.DetailedHTMLProps<
		React.FormHTMLAttributes<HTMLFormElement>,
		HTMLFormElement
	>,
	'onSubmit'
> & {
	onSubmit?: SubmitHandler<T>;
	options?: UseFormProps<T>;
};

export default function Form<T extends FieldValues>({
	onSubmit,
	options,
	...props
}: Props<T>) {
	const methods = useForm<T>(options);
	return (
		<FormProvider {...methods}>
			<form
				{...props}
				onSubmit={onSubmit ? methods.handleSubmit(onSubmit) : undefined}
			></form>
		</FormProvider>
	);
}

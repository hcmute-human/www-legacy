import { cn } from '@lib/utils';
import { InputProps } from 'react-aria-components';
import { AriaInput } from './client-react-aria';

const baseClass =
	'border border-neutral-300 px-2 py-0.5 rounded transition-[background-color_outline] ease-in-out';

export default function Input({ className, ...props }: InputProps) {
	return (
		<AriaInput {...props} className={cn(baseClass, className)}></AriaInput>
	);
}

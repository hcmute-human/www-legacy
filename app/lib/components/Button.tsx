import { cn } from '@lib/utils';
import { ButtonProps } from 'react-aria-components';
import { AriaButton } from './client-react-aria';

const baseClass =
	'bg-primary-500 px-4 py-0.5 rounded-lg text-neutral-100 transition-[background-color_outline] ease-in-out rac-hover:bg-primary-600';

export default function Button({ className, ...props }: ButtonProps) {
	return <AriaButton {...props} className={cn(baseClass, className)} />;
}

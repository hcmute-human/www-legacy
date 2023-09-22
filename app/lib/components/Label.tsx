import { cn } from '@lib/utils';
import { LabelProps } from 'react-aria-components';
import { AriaLabel } from './client-react-aria';

const baseClass = 'text-sm text-neutral-700';

export default function Label({ className, children, ...props }: LabelProps) {
	return (
		<AriaLabel {...props} className={cn(baseClass, className)}>
			{children}
		</AriaLabel>
	);
}

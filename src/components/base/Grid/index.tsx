import styles from './index.module.scss';
import { ReactNode } from 'react';

import { GridProps } from './GridProps';

export const Grid = ({ className, ...props }: GridProps): ReactNode => {
	return (
		<div {...props} className={`${className} ${styles.grid} ${styles[`grid-${props.proportions}`]}`}></div>
	);
};
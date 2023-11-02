import styles from './index.module.scss';
import { ReactNode } from 'react';

export const Page = ({ children }: { children: ReactNode }): ReactNode => {
	return (
		<div className={styles.page}>
			{children}
		</div>
	);
};
import styles from './index.module.scss';
import React from 'react';

import { Label, Title1, Body1, Button, Icon, Image, Title3, Title4 } from '@fb24m/ui/components';
import { Advantage } from './Advantage';

export const Welcome = (): React.ReactElement => {
	return (
		<div className={styles.wrapper}>
			<div className={`${styles.container} container`}>
				<div className={styles.content}>
					<Title3 className={styles.subtitle}>привет,</Title3>
					<Title1 className={styles.title}>Это сайт про фронтенд</Title1>
					<Body1 className={styles.description}>
						Расскажу о новостях из мира фронтенда, библиотеках и решениях, а также о своей жизни разработчика. Познакомимся поближе.
					</Body1>
					<Button as='a' href='#about' appearance='Primary'>Привет</Button>
				</div>
				<div className={styles.transition}></div>
			</div>
		</div>
	);
};
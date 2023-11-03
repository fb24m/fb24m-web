import styles from './index.module.scss';
import { ReactNode } from 'react';

import { Body1, Card, Image, Title4 } from '@fb24m/ui/components';
import { ReviewProps } from './ReviewProps';

export const Review = (props: ReviewProps): ReactNode => {
	return (
		<Card>
			<div className={styles.author}>
				<Image className={styles.avatar} absoluteSrc src={props.avatar} alt="" />
				<div className={styles.info}>
					<Title4>{props.author}</Title4>
					<Body1>{props.date}</Body1>
				</div>
			</div>
			<Body1>{props.content}</Body1>
		</Card>
	);
}
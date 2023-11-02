import styles from './index.module.scss';
import React from 'react';

import { Body1, Card, Icon, Title4 } from '@fb24m/ui/components';

export interface PetCardProps {
	title: string
	content: string
	url: string
	icon: string
}

export const PetCard = (props: PetCardProps): React.ReactElement => (
	<a href={props.url}>
		<Card className={styles.wrapper} size="normal">
			<Icon name={props.icon} size='big' />
			<div className={styles.content}>
				<Title4 dangerouslySetInnerHTML={{ __html: props.title }}></Title4>
				<Body1 dangerouslySetInnerHTML={{ __html: props.content }}></Body1>
			</div>
		</Card>
	</a>
)


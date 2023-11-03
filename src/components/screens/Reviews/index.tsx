import styles from './index.module.scss';
import { ReactNode } from 'react';

import { Label, Title2, Card, Image, Title3, Title4, Box, Button } from '@fb24m/ui/components';
import { Grid } from '@/components/base/Grid';
import { Review } from './Review/index';
import { useQuery } from '@tanstack/react-query';
import { WordpressService } from '@/services/Wordpress';

export const ReviewsBlock = (): ReactNode => {
	const { isLoading, isError, isSuccess, data } =
		useQuery({ queryKey: ['reviews'], queryFn: () => WordpressService.getReviews() });

	if (isLoading) return <>Подождите...</>
	if (isError) return <>Ошибка</>
	if (!isSuccess || !data) return <>Как это случилось?.. срочно, пишите в хелп по сайту! help@fb24m.ru</>

	return (
		<div className="container">
			<Label>портфолио</Label>
			<Title2>Отзывы</Title2>
			<Grid proportions="1-1-1">
				{data.data.map(item => <Review
					key={item.id}
					avatar={item.acf.avatar_url}
					author={item.acf.author}
					content={item.acf.content}
					date={item.acf.date} />)}
			</Grid>
			<Box>
				<Button appearance='Primary' as='a' href='https://kwork.ru/user/fb24m#reviews' target='_blank'>Все отзывы</Button>
			</Box>
		</div>
	);
}
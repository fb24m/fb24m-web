import { useQuery } from '@tanstack/react-query';
import { WordpressService } from '../../services/Wordpress';
import { NotFoundError } from '../Error';
// import styles from './index.module.scss';
import React from 'react';

import { PetCard } from './PetCard';
import { Box } from '@fb24m/ui/components';

export const Pet = (): React.ReactElement => {
	const { isLoading, isError, isSuccess, data, error } = useQuery(['page'], () => WordpressService.getPetProjects());

	if (isLoading) return <>Подождите...</>
	else if (isError) { console.log(error); return <>Ошибка.</> }

	if (isSuccess && data.data[0]) return (
		<Box direction='column' className="container">
			{data.data.map((item) =>
				<PetCard icon={item.acf.icon} title={item.title.rendered} content={item.content.rendered} url={item.acf.url} />
			)}
		</Box>
	)

	else return <NotFoundError />
};
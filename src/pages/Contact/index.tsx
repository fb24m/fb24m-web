import styles from './index.module.scss';
import { ReactNode, useEffect, useState } from 'react';
import { Body1, Title1, Icon, Box } from '@fb24m/ui/components';

const useMedia = (breakpoint: string) => {
	const [media, setMedia] = useState(window.matchMedia(breakpoint));

	const updateMedia = () => {
		console.log('Обновлено состояние');
		setMedia(window.matchMedia(breakpoint));
	}

	useEffect(() => {
		window.addEventListener('resize', updateMedia);

		return () => {
			window.removeEventListener('resize', updateMedia);
		}
	}, []);

	return media;
}

const Table = ({ children, className, ...props }: { className?: string, children: ReactNode }) => {
	const { matches: isTablet } = useMedia('(max-width: 768px)');

	if (isTablet) return (
		<div className={styles.tableWrapper}>
			{children}
		</div>
	)
	else return (
		<div className={styles.tableWrapper}>
			<table {...props} className={`${styles.table} ${className}`}>
				<tbody>
					{children}
				</tbody>
			</table>
		</div>
	)
}
const TableRow = ({ children, className, ...props }: { className?: string, children: ReactNode }) => {
	const { matches: isTablet } = useMedia('(max-width: 768px)');

	if (isTablet) return (
		<div className={`${styles.row} ${className}`} {...props}>
			{children}
		</div>
	);
	else return (
		<tr className={`${styles.row} ${className}`} {...props}>
			{children}
		</tr>
	);
}
const TableCell = ({ children, className, wrap, ...props }: { wrap?: boolean, className?: string, children?: ReactNode }) => {
	const { matches: isTablet } = useMedia('(max-width: 768px)');

	if (isTablet) return (
		<div className={`${styles.cellContainer} ${wrap ? styles.cellWrap : ''}`}>
			{children}
		</div>
	);
	else return (
		<td className={`${styles.cell} ${className}`} {...props}>
			<div className={`${styles.cellContainer} ${wrap ? styles.cellWrap : ''}`}>
				{children}
			</div>
		</td>
	);
}

export const ContactPage = (): ReactNode => {
	return (
		<Box direction='column' className="container" >
			<Title1>Контакты</Title1>
			<Body1 className={styles.description}>Что-то сломалось? Или вы просто хотите связаться со мной? На этой страницы вы найдете контакты на все случаи жизни. В таблице они распологаются в порядке необходимости</Body1>
			<Table>
				<TableRow>
					<TableCell><Icon name="help" /> Хелп по сайту</TableCell>
					<TableCell>help@fb24m.ru</TableCell>
					<TableCell wrap>Если на сайте что-то не работает</TableCell>
				</TableRow>
				<TableRow>
					<TableCell><Icon name="laptop" /> Рабочая почта</TableCell>
					<TableCell>hello@fb24m.ru</TableCell>
					<TableCell wrap>Если хотите сделать обсудить проект, задать вопрос или сделать заказ</TableCell>
				</TableRow>
				<TableRow>
					<TableCell><Icon name="send" /> Телеграм</TableCell>
					<TableCell>@fb24m</TableCell>
					<TableCell wrap>Любые вопросы в т.ч и по сайту</TableCell>
				</TableRow>
				<TableRow>
					<TableCell><Icon name="code" /> Github</TableCell>
					<TableCell>https://github.com/ifb24m</TableCell>
					<TableCell wrap>Исходный код всех проектов</TableCell>
				</TableRow>
			</Table>
		</Box >
	);
};
import styles from './index.module.scss';
import { ReactNode } from 'react';
import { Body1, Title1, Icon, Box } from '@fb24m/ui/components';

const Table = ({ children, className, ...props }: { className?: string, children: ReactNode }) => (
	<div className={styles.tableWrapper}>
		<table {...props} className={`${styles.table} ${className}`}>
			<tbody>
				{children}
			</tbody>
		</table>
	</div>
);
const TableRow = ({ children, className, ...props }: { className?: string, children: ReactNode }) => (
	<tr className={`${styles.row} ${className}`} {...props}>
		{children}
	</tr>
);
const TableCell = ({ children, className, ...props }: { className?: string, children?: ReactNode }) => (
	<td className={`${styles.cell} ${className}`} {...props}>
		<div className={styles.cellContainer}>
			{children}
		</div>
	</td>
);

export const ContactPage = (): ReactNode => {
	return (
		<Box direction='column' className="container" >
			<Title1>Контакты</Title1>
			<Body1 className={styles.description}>Что-то сломалось? Или вы просто хотите связаться со мной? На этой страницы вы найдете контакты на все случаи жизни. В таблице они распологаются в порядке необходимости</Body1>
			<Table>
				<TableRow>
					<TableCell><Icon name="help" /> Хелп по сайту</TableCell>
					<TableCell>help@fb24m.ru</TableCell>
					<TableCell>Если на сайте что-то не работает</TableCell>
				</TableRow>
				<TableRow>
					<TableCell><Icon name="laptop" /> Рабочая почта</TableCell>
					<TableCell>hello@fb24m.ru</TableCell>
					<TableCell>Если хотите сделать обсудить проект, задать вопрос или сделать заказ</TableCell>
				</TableRow>
				<TableRow>
					<TableCell><Icon name="send" /> Телеграм</TableCell>
					<TableCell>@fb24m</TableCell>
					<TableCell>Любые вопросы в т.ч и по сайту</TableCell>
				</TableRow>
				<TableRow>
					<TableCell><Icon name="code" /> Github</TableCell>
					<TableCell>https://github.com/ifb24m</TableCell>
					<TableCell>Исходный код всех проектов</TableCell>
				</TableRow>
			</Table>
		</Box >
	);
};
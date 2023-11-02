import './index.scss';

import { Welcome } from '@/components/screens/WelcomeOld';
import { About } from '@/components/screens/About';
import { Contact } from '@/components/screens/Contact';
import { Portfolio } from '@/components/screens/Portfolio';

import { Page } from '@/components/base/Page';

export const Home = (): JSX.Element => {
	return (
		<Page>
			<Welcome />
			<About />
			<Portfolio />
			<Contact />
		</Page>
	);
}
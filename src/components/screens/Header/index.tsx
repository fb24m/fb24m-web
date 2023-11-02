import styles from './index.module.scss';
import './scroll.scss';
import React from 'react';

import { Link, Button, Icon, Image, useModal, Alignment, Box } from '@fb24m/ui/components';
import { useState, useContext } from 'react';
import { SettingsContext } from '@/contexts/SettingsProvider';
import { ContactForm } from '@/components/blocks/ContactForm/index';
import { getOppositeTheme } from '@/functions/getOppositeTheme';

import { WhatsNewPopup } from '@/components/popups/WhatsNewPopup';

const toggleState = <T,>(value: T, setter: Function, newValue: T) => {
	if (value === '') setter(newValue);
	else setter('');
}

const toggleTheme = () => {
	if (localStorage.getItem('color-theme') === 'light') {
		localStorage.setItem('color-theme', 'dark');
	}
	else {
		localStorage.setItem('color-theme', 'light');
	}
	location.reload();
}

export const Header = (): React.ReactElement => {
	const [contactPopup, toggleContactPopup] = useModal();
	const [whatsNewPopup, toggleWhatsNewPopup] = useModal();

	const [headerClass, setHeaderClass] = useState('');
	const settings = useContext(SettingsContext);

	const toggleMenuOpened = () => {
		toggleState(headerClass, setHeaderClass, `_menu-opened ${styles.menuOpened}`);
	}

	return (
		<>
			<header className={`${styles.wrapper} ${headerClass} header`}>
				<div className={`${styles.container} container`}>
					<button className={styles.menuClose} onClick={toggleMenuOpened}><Icon name='menu' /></button>
					<div className={`${styles.logoBlock} logoBlock observe`}>
						<Link href="/" appearance={false}><>
							<Image absoluteSrc src={settings.site_icon_url} alt="" className={`${styles.logo} headerLogo`} onClick={toggleMenuOpened} />
							{settings.name}
						</></Link>
					</div>
					<ul className={styles.list}>
						<li className={`observe ${styles.item}`}><Link href="/blog">Блог</Link></li>
						<li className={`observe ${styles.item}`}><Link href="/portfolio">Портфолио</Link></li>
						<li className={`observe ${styles.item}`}><Link href="/contact">Связаться</Link></li>
						<li className={`observe ${styles.item}`}><Link href="/pet">Пет-проекты</Link></li>
						<li className={`observe ${styles.item}`}><Button appearance='Link' onClick={() => toggleWhatsNewPopup()}>Что нового</Button></li>
					</ul>
					<Box align={Alignment.end} justify={Alignment.end}>
						<Button onClick={() => toggleContactPopup()}
							className={`shrink observe icon-mobile ${styles.button} ${styles.iconMobile}`}
							icon={<Icon name='phone_enabled' />}
							as='button'
							appearance='Primary'><span>Связаться</span></Button>
						<Button
							onClick={toggleTheme}
							className={`shrink observe ${styles.button} ${styles.iconOnly}`}
							icon={<Icon name={`${getOppositeTheme()}_mode`} />}
							as='button'
							appearance='Secondary'> </Button>
					</Box>
				</div>
			</header>

			<ContactForm bind={contactPopup} as='popup' buttonsJustify={Alignment.end}
				buttons={<Button icon={<Icon name='cancel' />} appearance='Secondary' onClick={() => toggleContactPopup()}>Закрыть</Button>} />
			<WhatsNewPopup togglePopup={toggleWhatsNewPopup} bind={whatsNewPopup} />
		</>
	);
};
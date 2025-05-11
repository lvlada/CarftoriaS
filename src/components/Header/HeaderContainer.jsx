import { Header } from './Header';
import { IconMagnifyingGlass } from '@/assets';

const HeaderContainer = () => {
  const navigationLinks = [
    { to: '#', ariaLabel: 'pretraga', text: 'Pretraga', icon: IconMagnifyingGlass },
    { to: '#', ariaLabel: 'kategorije', text: 'Kategorije' },
    { to: '#', ariaLabel: 'zakaži uslugu', text: 'Zakaži uslugu' },
    { to: '#', ariaLabel: 'prijava/registracija', text: 'Prijava/Registracija' }
  ];

  return <Header navigationLinks={navigationLinks} />;
};

export { HeaderContainer };

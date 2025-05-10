import { HeroSection } from './HeroSection';
import HeroImage1 from '@/assets/HeroImage1.png';
import HeroImage2 from '@/assets/HeroImage2.png';

const HeroSectionContainer = () => {
  return (
    <>
      <HeroSection
        imagePosition={'left'}
        image={HeroImage1}
        title="Pronađi svog zanatliju!"
        description="Craftoria je digitalna platforma koja povezuje korisnike sa zanatlijama širom Srbije. Namenjena je osobama koje žele brzo, jednostavno i sigurno da pronađu proverenog zanatliju – bilo da se radi o popravci, narodnoj nošnji ili staklu!"
        link="Pretraga >"
      />
      <HeroSection
        imagePosition={'right'}
        image={HeroImage2}
        title="Vizija"
        description="Cilj platforme je da korisnicima omogući da na jednom mestu pregledaju zanatlije, njihove usluge, ocene i raspoloživost, kao i da zanatlijama olakša pristup novim klijentima i modernizuje njihovo poslovanje. Građani Srbije koji traže kvalitetne zanatske usluge, kao i turisti zainteresovani za autentične rukotvorine. Želimo da lokalne zajednice i opštine ožive zanate."
        link="Vidi sve >"
      />
    </>
  );
};

export { HeroSectionContainer };

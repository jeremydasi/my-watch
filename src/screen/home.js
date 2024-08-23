import '../style/home.css'
import Carousel from '../component/carousel/carousel'
import festinaHommeBleu from '../assets/festina-montre-homme-bleu.svg'
import festinaHommeClassique from '../assets/festina-montre-homme-classique.svg'
import festinaHommeOrNoir from '../assets/festina-montre-homme-or-bleu.svg'
import festinaFemmeRose from'../assets/festina-montre-femme-rose.svg'
import festinaFemmeDiamant from '../assets/festina-montre-femme-diamant.svg'
import tommyHommeBleu from '../assets/Tommy-montre-homme-bleu.svg'
import tommyHommeNoir from '../assets/Tommy-montre-noir-homme.svg'
import tommyFemmeRose from '../assets/Tommy-montre-rose-femme.svg'
import tommyFemmeOr from '../assets/Tommy-montre-or-femme.svg'
import tommyFemmeArgent from '../assets/Tommy-montre-argent-femme.svg'
import bossHommeBleu from '../assets/boss-montre-homme.svg'
import bossHommeNoir from '../assets/boss-montre-noir-homme.svg'
import bossHommeCuivreNoir from '../assets/boss-montre-or-noir-homme.svg'
import bossFemmeBlanc from '../assets/boss-montre-rose-femme.svg'
import bossFemmeOr from'../assets/boss-montre-or-femme.svg'

function Home() {
    const images = [festinaHommeBleu, festinaHommeClassique, festinaHommeOrNoir, festinaFemmeRose, festinaFemmeDiamant, tommyHommeBleu, 
        tommyHommeNoir, tommyFemmeRose, tommyFemmeOr, tommyFemmeArgent, bossHommeBleu, bossHommeNoir, bossHommeCuivreNoir, 
        bossFemmeBlanc, bossFemmeOr ];

    return(
        <div className='aPropos'>
            <div>
                <h1>Accueil</h1>
            </div>
            <div>
                <Carousel images={images} />
            </div>
            <div className='txt'>
                <p>L’Orloge vous propose d’acheter des montres de plusieurs 
                    marques très connu.</p>

                <p>Nous vendons des montres de la marque Festina d'origine Espagnol mais fondé en Suisse.</p>

                <p>Ou d'Irlande comme la célèbre marque Tommy Hilfiger.</p>

                <p>Ainsi que la marque hugo boss originaire d'Allemagne.</p>

                <p>Notre boutique est accessible à tous et pour tous, des passionné comme les
                    moins passionné puisse venir trouver leur bonheur chez L’Or’Loge.</p>
            </div>
        </div>
    )
}

export default Home
import '../style/boutique.css'
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

function Boutique() {
    return(
        <div>
            <div className='containerTitle'>
                <h1 className='title'>Boutique</h1>
            </div>

            <div className='containerImg'>
                <div className='image'>
                    <img src={festinaHommeBleu} alt='montre festina bleu' />
                    <p className='descriptionMontre'>Montre Festina pour homme Chrono Sport Bleu 149 €</p>
                </div>
                <div className='image'>
                    <img src={festinaHommeClassique} alt='montre festina classique' />
                    <p className='descriptionMontre'>Montre Festina pour homme Classique Bleu 79 €</p>
                </div>
                <div className='image'>
                    <img src={festinaHommeOrNoir} alt='montre festina or et bleu' />
                    <p className='descriptionMontre'>Montre Festina pour homme Chrono Sport Bleu 179 €</p>
                </div>
                <div className='image'>
                    <img src={festinaFemmeRose} alt='montre festina rose' />
                    <p className='descriptionMontre'>Montre Festina pour femme Boyfriend Rose 89 €</p>
                </div>
                <div className='image'>
                    <img src={festinaFemmeDiamant} alt='montre festina diamant' />
                    <p className='descriptionMontre'>Montre Festina pour femme Boyfriend Collection Nacré 159 € </p>
                </div>
            </div>

            <div className='containerImg'>
                <div className='image'>
                    <img src={tommyHommeBleu} alt='montre tommy hilfiger bleu' />
                    <p className='descriptionMontre'>Montre Tommy Hilfiger Bleu pour homme 179 €</p>
                </div>
                <div className='image'>
                    <img src={tommyHommeNoir} alt='montre tommy hilfiger noir' />
                    <p className='descriptionMontre'>Montre Tommy Hilfiger Noir pour homme 219 €</p>
                </div>
                <div className='image'>
                    <img src={tommyFemmeRose} alt='montre tommy hilfiger rose' />
                    <p className='descriptionMontre'>Montre Tommy Hilfiger rose pour femme 199 €</p>
                </div>
                <div className='image'>
                    <img src={tommyFemmeOr} alt='montre tommy hilfiger or' />
                    <p className='descriptionMontre'>Montre Tommy Hilfiger Or pour femme 169 €</p>
                </div>
                <div className='image'>
                    <img src={tommyFemmeArgent} alt='montre tommy hilfiger argent' />
                    <p className='descriptionMontre'>Montre Tommy Hilfiger Ella Argenté pour femme 129 €</p>
                </div>
            </div>

            <div className='containerImg'>
                <div className='image'>
                    <img src={bossHommeBleu} alt='montre hugo boss bleu' />
                    <p className='descriptionMontre'>Montre Hugo Boss Hero Bleu pour homme 379 €</p>
                </div>
                <div className='image'>
                    <img src={bossHommeNoir} alt='montre hugo boss classique' />
                    <p className='descriptionMontre'>Montre Hugo Boss Champion Noir pour homme 479 €</p>
                </div>
                <div className='image'>
                    <img src={bossHommeCuivreNoir} alt='montre hugo boss cuivre et noir' />
                    <p className='descriptionMontre'>Montre Hugo Boss Champion cuivre et Noir pour homme 479 €</p>
                </div>
                <div className='image'>
                    <img src={bossFemmeBlanc} alt='montre hugo boss blanc' />
                    <p className='descriptionMontre'>Montre Hugo Boss essena Blanc pour femme 279 €</p>
                </div>
                <div className='image'>
                    <img src={bossFemmeOr} alt='montre hugo boss or' />
                    <p className='descriptionMontre'>Montre Hugo Boss Sena Vert pour femme 249 €</p>
                </div>
            </div>
        </div>
    )
}

export default Boutique
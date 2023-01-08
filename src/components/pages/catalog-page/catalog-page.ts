import { FiltersChain } from './../../filters-chain/filters-chain';
import { TopMenu } from '@/components/top-menu/top-menu';
import { CardFull } from './../../cards/card-full/card-full';
import { Container } from '@/components/container/container';
import { BaseComponent } from '@/templates/base-component';

export class CatalogPage extends BaseComponent {
  container: Container;
  private cardFull: CardFull = new CardFull({
    id: '0001',
    brandName: 'CeraVe',
    productName: 'Micellar Cleansing Water',
    description: `The mild formula of Cerave micellar water is suitable
     for cleansing the skin of the face and eye contour from impurities
      and cosmetics. The product effectively cleanses the epidermis
       without the use of water, and also strengthens its protective barrier
        and compensates for the lack of moisture. CeraVe Micellar Cleansing
         Water is suitable for people with sensitive, allergy-prone skin,
          as confirmed by the ECARF (European Center for Allergy Research).`,
    ingredients: `Aqua/Water, Glycerin, Hexylene Glycol, Poloxamer 184,
     Disodium Cocoamphodiacetate, Disodium EDTA, Niacinamide, Polyaminopropyl
      Biguanide, Sodium Lauroyl Lactylate, BHT, Ceramide NP, Phenoxyethanol,
       Ceramide AP, Phytosphingosine, Cholesterol, Xanthan Gum, Carbomer,
        Ethylhexylglycerin, Ceramide EOP`,
    starIngredient: 'Ceramide',
    pics: [
      'assets/product-images/0001/cerave-hydrating-micellair-water-1.jpeg',
      'assets/product-images/0001/cerave-hydrating-micellair-water-2.jpeg',
    ],
    price: 20,
    bestseller: true,
    segment: 'Drugstore (Europe)',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 230,
  });
  private topMenu: TopMenu = new TopMenu();
  private filtersChain: FiltersChain = new FiltersChain();
  private cardsWrapper: BaseComponent;

  constructor(private props: Record<string, string>) {
    super('div', { className: 'catalog' });

    this.container = new Container('catalog__container');
    this.append(this.container);

    this.container.append(this.topMenu);

    this.container.append(this.filtersChain);

    this.cardsWrapper = new BaseComponent('div', { className: 'cards_wrapper' });

    this.container.append(this.cardsWrapper);

    this.cardsWrapper.append(this.cardFull);
  }
}

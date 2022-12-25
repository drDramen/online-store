import { Product } from './../interfaces/product';

export const products: Product[] = [
  {
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
  },
  {
    id: '0002',
    brandName: 'CeraVe',
    productName: 'Facial Moisturising Lotion for Normal to Dry Skin SPF25',
    description: `Cerave SPF25 lotion provides intensive hydration throughout
     the day and protection from UVA and UVB rays. The product contains a
      complex of components that maintain the hydrobalance of the epidermis
       and restore its protective layer. CeraVe Facial Moisturizing Lotion
        for Normal to Dry Skin SPF25 spreads easily over the skin, absorbs
         quickly and leaves no residue on clothing. MVE technology involves
          the gradual release of ingredients over a long period of time.`,
    ingredients: `Aqua/Water, Homosalate, Glycerin, Octocrylene, Ethylhexyl
     Salicylate, Niacinamide, Silica, Butyl Methoxydibenzoylmethane, Dimethicone,
      Cetearyl Alcohol, PEG-100 Stearate, Glyceryl Stearate, Phenoxyethanol,
       Stearic Acid, Behentrimonium Methosulfate, Caprylyl Glycol, Palmitic Acid,
        Ammonium Polyacryloyldimethyl Taurate, Xanthan Gum, Disodium EDTA, Tocopherol,
         Sodium Lauroyl Lactylate, Myristic Acid, Sodium Hyaluronate, Ceramide NP,
          Ceramide AP, Phytosphingosine, Cholesterol, Carbomer, Ethylhexylglycerin, Ceramide EOP`,
    starIngredient: 'Ceramide',
    pics: [
      'assets/product-images/0002/cerave-facial-moisture-lotion-spf-1.jpg',
      'assets/product-images/0002/cerave-facial-moisture-lotion-spf-2.jpg',
    ],
    price: 22,
    bestseller: true,
    segment: 'Drugstore (Europe)',
    category: 'Cream',
    for: 'Face',
    availableAmount: 348,
  },
  {
    id: '0003',
    brandName: 'CeraVe',
    productName: 'Moisturising Cream for Dry to Very Dry Skin',
    description: `Thanks to its rich, yet light and non-greasy texture, Cerave Moisturizing
     Cream is quickly absorbed, eliminates discomfort and replenishes the lack of moisture
      in the stratum corneum. MVE technology provides a gradual release of the ingredients
       of the formula, which provides long-term hydration and restoration of the skin's
        protective layer. CeraVe Moisturizing Cream for Dry to Very Dry Skin is well
         tolerated by sensitive, allergy-prone skin as assessed by ECARF (European
           Center for Allergy Research).`,
    ingredients: `Aqua, Glycerin, Cetearyl Alcohol, Caprylic/Capric Triglyceride,
     Cetyl Alcohol, Ceteareth-20, Petrolatum, Potassium Phosphate, Ceramide NP, Ceramide AP,
      Ceramide EOP, Carbomer, Dimethicone, Behentrimonium Methosulfate, Sodium Lauroyl Lactylate,
       Sodium Hyaluronate, Cholesterol, Phenoxyethanol, Disodium EDTA, Dipotassium Phosphate, Tocopherol,
        Phytosphingosine, Xanthan Gum, Ethylhexylglycerin`,
    starIngredient: 'Ceramide',
    pics: [
      'assets/product-images/0003/cerave-moisture-cream-1.avif',
      'assets/product-images/0003/cerave-facial-moisture-lotion-spf-2.jpg',
    ],
    price: 22,
    bestseller: true,
    segment: 'Drugstore (Europe)',
    category: 'Cream',
    for: 'Face',
    availableAmount: 212,
  },
  {
    id: '0004',
    brandName: 'CeraVe',
    productName: 'SA Skin Smoothing Cleanser For Dry, Rough, Bumpy Skin',
    description: `Repair dry, rough and uneven skin with CeraVe SA Skin Smoothing Cleanser.
     The tool forms a thick foam, which perfectly washes away all dirt and make-up residues
      from the epidermis. The salicylic acid included in the composition gently dissolves
       dead cells without disturbing the natural balance of the dermis and accelerating
        its renewal. Cerave SA Softening Cleansing Gel intensively moisturizes the skin
         during cleansing, leaving it incredibly soft, smooth and soft.`,
    ingredients: `Aqua/Water, Sodium Lauroyl Sarcosinate, Cocamidopropyl Hydroxysultaine,
     Glycerin, Niacinamide, Gluconolactone, Sodium Methyl Cocoyl Taurate, PEG-150
      Pentaerythrityl Tetrastearate, Ceramide NP, Ceramide AP, Ceramide EOP, Carbomer,
       Calcium Gluconate, Salicylic Acid, Sodium Benzoate, Sodium Lauroyl Lactylate, Cholesterol,
        Phenoxyethanol, Disodium EDTA, Tetrasodium EDTA, Hydrolyzed Hyaluronic Acid,
         Phytosphingosine, Xanthan Gum, Ethylhexylglycerin`,
    starIngredient: 'Ceramide',
    pics: [
      'assets/product-images/0004/cerave-sa-smoothing-cleanser-1.jpg',
      'assets/product-images/0004/cerave-sa-smoothing-cleanser-2.jpg',
    ],
    price: 20,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 172,
  },
  {
    id: '0005',
    brandName: 'CeraVe',
    productName: 'SA Cream for Rough & Bumpy Skin',
    description: `An effective way to improve dry, rough and uneven skin is to use CeraVe
     SA Cream for Rough & Bumpy Skin. Components specially selected by dermatologists in
      optimal concentrations provide intensive care for the epidermis, delicately
       exfoliating and removing dead cells, softening rough areas without disturbing
        the natural hydrolipid balance. The tool helps to moisturize the dermis and
         prevents repeated loss of moisture, thereby preventing the further development
          of dryness and the appearance of peeling. Cerave SA softening cream has a pleasant
           texture, is perfectly applied and absorbed without leaving greasy marks.`,
    ingredients: `Water, Urea, Glyceryl Stearate SE, Cetearyl Alcohol, Butyrospermum Parkii (Shea)
     Butter, Glycerin, Niacinamide, Cetyl Alcohol, PEG-100 Stearate, Limnanthes Alba (Meadowfoam)
      Seed Oil, Laureth-9, Gossypium Herbaceum (Cotton) Seed Oil, Behentrimonium Methosulfate,
       C12-13 Alkyl Lactate, 1,2-Hexanediol, Dimethicone, Ceramide NP, Ceramide AP,
        Ceramide EOP, Carbomer, Glyceryl Stearate, Sodium Hydroxide, Sodium Lauroyl
         Lactylate, Cholesterol, Tasmannia Lanceolata Fruit/Leaf Extract, Phenoxyethanol,
          Disodium EDTA, Tocopherol, Hydroxyacetophenone, Hydrogenated Olive Oil,
           Hydrolyzed Hyaluronic Acid, Citric Acid, Phytosphingosine, Xanthan Gum, Ethylhexylglycerin`,
    starIngredient: 'Ceramide',
    pics: [
      'assets/product-images/0005/cerave-sa-cream-1.jpg',
      'assets/product-images/0005/cerave-sa-cream-2.jpg',
    ],
    price: 28,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Cream',
    for: 'Face',
    availableAmount: 225,
  },
  {
    id: '0006',
    brandName: 'CeraVe',
    productName: 'Hydrating Cleanser for Normal to Dry Skin',
    description: `Soft hypoallergenic cleansing cream-gel Cerave is suitable for gentle
     cleansing of dehydrated dry sensitive skin. The product effectively removes impurities,
      makeup and sebum, helps to restore the hydrolipidic mantle, and intensively moisturizes.
       CeraVe Hydrating Cleanser for Normal to Dry Skin is non-foaming. MVE technology involves
        the gradual release of the components of the formula, which ensures long-term hydration
         of the stratum corneum. The high tolerability and hypoallergenicity of the product is
          confirmed by the ECARF (European Center for Allergy Research).`,
    ingredients: `Aqua/Water, Glycerin, Cetearyl Alcohol, Phenoxyethanol, Stearyl Alcohol,
     Cetyl Alcohol, Peg-40 Stearate, Behentrimonium Methosulfate, Glyceryl Stearate, Polysorbate 20,
      Ethylhexylglycerin, Potassium Phosphate, Disodium EDTA, Dipotassium Phosphate, Sodium Lauroyl
       Lactylate, Ceramide NP, Ceramide AP, Phytosphingosine, Cholesterol, Sodium Hyaluronate,
        Xanthan Gum, Carbomer, Tocopherol, Ceramide Eop`,
    starIngredient: 'Ceramide',
    pics: [
      'assets/product-images/0006/cerave_hydrating_cleanser_for_normal_to_dry_skin-1.jpg',
      'assets/product-images/0006/cerave_hydrating_cleanser_for_normal_to_dry_skin-2.jpg',
      'assets/product-images/0006/cerave_hydrating_cleanser_for_normal_to_dry_skin-3.jpg',
    ],
    price: 12,
    bestseller: true,
    segment: 'Drugstore (Europe)',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 432,
  },
  {
    id: '0007',
    brandName: 'CeraVe',
    productName: 'Facial Moisturising Lotion for Normal to Dry Skin',
    description: `Ultra-light moisturizing lotion Cerave maintains optimal hydrobalance of
     the epidermis throughout the day, and also strengthens the natural protective barrier
      of the skin. Thanks to MVE technology, the active components of the formula are gradually
       released. CeraVe Facial Moisturizing Lotion for Normal to Dry Skin contains a unique
        complex of ceramides and skin care ingredients that relieve discomfort, restore softness,
         elasticity and comfort to the skin.`,
    ingredients: `Purified Water, Glycerin, Caprylic/Capric Triglycerides, Niacinamide,
     Cetearyl Alcohol, Ceramide 3, Ceramide 6 II, Ceramide 1, Phytosphingosine,
      Hyaluronic Acid, Sodium Hydroxide, Dimethicone, Behentrimonium Methosulfate,
       Ceteareth-20, Polyglyceryl-3 Diisostearate, Cholesterol, Xanthan Gum, Carbomer,
        Disodium EDTA, Dipotassium Phosphate, Potassium Phosphate, Sodium Lauroyl Lactylate`,
    starIngredient: 'Ceramide',
    pics: [
      'assets/product-images/0007/cerave-moisture-lotion-normal-dry-1.jpg',
      'assets/product-images/0007/cerave-moisture-lotion-normal-dry-2.jpg',
      'assets/product-images/0007/cerave-moisture-lotion-normal-dry-3.jpg',
    ],
    price: 22,
    bestseller: true,
    segment: 'Drugstore (Europe)',
    category: 'Cream',
    for: 'Face',
    availableAmount: 458,
  },
  {
    id: '0008',
    brandName: 'Skadi',
    productName: 'Lotion for Sensitive Skin',
    description: `Deep hydration of the skin when using milk is achieved through
     a combination of natural moisturizing factor components, ceramides and oils
      rich in essential fatty acids. Physiological lamellar emulsion based on
       lecithin maintains the protective properties of sensitive skin without
        compromising its barrier function.`,
    ingredients: `Aqua (water), Squalane, Vitis vinifera L. (Grape Seed Oil),
     Behenyl alcohol (and) Glyceryl stearate (and)  Lecithin (and) Glycine soja
      (soybean) sterols, Ceramide Complex (Ceramide 1, Ceramide 2, Ceramide 3,
         Ceramide 6-II, Butylene Glycol, Hydrogenated Lecithin, Caprylic Glycerides
          Polyglyceryl-10 Esters), Cannabis Sativa Oil,  Lysine (and)  Histidine (and)
            Arginine (and)  Aspartic acid (and)  Threonine (and)  Serine (and)
             Glutamic acid (and)  Proline (and)  Glycine (and)  Alanine (and)
               Valine (and)  Methionine (and) Isoleucine (and)  Leucine,
                Tyrosine (and)  Phenylalanine (and)  Cysteine, Butyrospermum
                 Parkii (Shea) Butter,  Glycerin, Dex-Panthenol, Betaine,
                  Sodium acrylates copolymer, Benzyl Alcohol (and) Ethylhexylglycerin,
                   Allantoin, Arabinogalactan, Sodium hyaluronate(H-M), Tocopherol, Lactic acid`,
    starIngredient: 'Ceramide',
    pics: [
      'assets/product-images/0008/skadi-lotion-1.jpg',
      'assets/product-images/0008/skadi-lotion-2.jpg',
    ],
    price: 35,
    bestseller: false,
    segment: 'Russian',
    category: 'Cream',
    for: 'Face',
    availableAmount: 81,
  },
  {
    id: '0009',
    brandName: 'Skadi',
    productName: 'Antioxidant Face Cream legere',
    description: `Deep hydration is achieved through a combination of cascade moisturizers
     (amino acids, hyaluronic acid) and skin barrier enhancing ingredients with a physiological
      ratio of fatty acids in oils specially selected for oily skin. The high content of β-sitosterols
       in sabal palm extract improves the condition of oily skin, reduces inflammation, sebum secretion
        and at the same time promotes the synthesis of type 1 collagen. Highly concentrated (in terms
           of flavonoid content) extracts of turmeric and chaga, as well as raspberries and dihydroquercetin
            - a powerful bunch of antioxidants. Arabinogalactan supports the skin microbiome. Physiological
             emulsion based on lecithin with a complex of ceramides in the form of "hectosomes"
              - for greater stability and bioavailability.`,
    ingredients: `Aqua (water), Niacinamide, Sesamum Indicum Seed Oil, Cannabis Sativa Seed Oil,
     Ceramide Complex (Disteardimonium Hectorite, Polyglyceryl-10 stearate, Caprylic/Capric Triglyceride,
      BP ceramide PC-104/ Hydroxypropyl Bispalmitamide MEA, Ceramide NP, Phytosterols, Stearic Acid) ,
       Lysine (and)  Histidine (and)  Arginine (and)  Aspartic acid (and)  Threonine (and)  Serine (and)
        Glutamic acid (and)  Proline (and)  Glycine (and)  Alanine (and)  Valine (and)  Methionine (and)
         Isoleucine (and)  Leucine, Tyrosine (and)  Phenylalanine (and)  Cysteine, SC-CO2 Rubus idaeus Extract,
          Lecithin (and) Sodium acrylates copolymer, Serenoa Serrulata Fruit extract, Arabinogalactan, Glycerin,
           Dihydroquercetin, Benzyl Alcohol (and) Ethylhexylglycerin, Sodium hyaluronate(L-M), Sodium hyaluronate(H-M),
            Lactic acid, SC-CO2 Curcuma longa (Turmeric) Root extract, SC-CO2  Fungus betulinus Extract, Tocopherol`,
    starIngredient: 'Ceramide',
    pics: [
      'assets/product-images/0009/skadi-cream-antiox-legere-1.jpg',
      'assets/product-images/0009/skadi-cream-antiox-legere-2.jpg',
    ],
    price: 41,
    bestseller: true,
    segment: 'Russian',
    category: 'Cream',
    for: 'Face',
    availableAmount: 77,
  },
  {
    id: '0010',
    brandName: 'Skadi',
    productName: 'Cleansing Milk',
    description: `Makeup Remover Milk gently removes stubborn makeup or sunscreen
     from the skin. Panthenol and allantoin relieve irritation, taurine has a positive
      effect on the structure of eyebrow and eyelash hairs. Cornflower CO2 extract
       strengthens the vascular wall, removes swelling and redness.`,
    ingredients: `Aqua, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Vitis Vinifera
     (Grape) Seed Oil, Glyceryl Stearate, Glycerin, Allantoin, Panthenol, Xanthan gum,
      Taurine, Tocopheryl Acetate, SC-CO2 Centaurea cyanus Extract, Ethylhexylglycerin,
       Phenoxyethanol`,
    starIngredient: 'Ceramide',
    pics: [
      'assets/product-images/0010/skadi-cleansing-milk-1.jpg',
      'assets/product-images/0010/skadi-cleansing-milk-2.jpg',
    ],
    price: 11,
    bestseller: false,
    segment: 'Russian',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 46,
  },
  {
    id: '0011',
    brandName: 'Skadi',
    productName: 'Peptide Eye Cream',
    description: `The cream perfectly moisturizes and nourishes the skin of the eyelids
     thanks to cascade moisturizers and components that strengthen the skin's barrier
      function. A high percentage of peptides provides a quick visible effect of smoothing
       the skin, prevents glycation processes, improves elasticity and firmness, reduces
        swelling and sagging in the eyelid area.`,
    ingredients: `Aqua (water),NMF (sodium PCA, glucose, glutamic acid, dextrin,
       alanine, lysine,  glycine, aspartic acid, water), Cetearyl Olivate, Sorbitan Olivate,
        Eyeseryl ™ (Water (Aqua), Acetyl Tetrapeptide-5), Argania spinosa oil, Ceramide Complex(Ceramide NP,
           Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Sodium Lauroyl Lactylate, Carbomer, Xanthan Gum),
            Coffea Arabica Seed Oil, Cannabis Sativa Seed Oil, Betaine, Eyeliss ™ ( Aqua (Water) - Glycerin -
             Hesperidin MethylChalcone - Steareth-20 - Dipeptide-2 - Palmitoyl Tetrapeptide-7),
              Vegetable Glycerin, Panthenol, Rubixyl™ (Water, Glycerin, Hexapeptide 48-HCL),
               Phenoxyethanol, Ethylhexylglycerin, Sodium hyaluronate(L-M),Sodium hyaluronate(M-M),
                Camellia sinensis (Green Tea) Leaf CO2 Extract , Succinic acid`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0011/skadi-peptide-eye-cream-1.jpg',
      'assets/product-images/0011/skadi-peptide-eye-cream-2.jpg',
    ],
    price: 55,
    bestseller: true,
    segment: 'Russian',
    category: 'Eye Cream',
    for: 'Face',
    availableAmount: 22,
  },
  {
    id: '0012',
    brandName: 'Skadi',
    productName: 'Moisturising Lysate Toner',
    description: `Maintains a constant level of skin hydration even in
     dry air due to cascading physiological humidifiers.
    Prebiotics help to strengthen the skin's own protective functions.`,
    ingredients: `Salvia officinalis water, NMF (sodium PCA, glucose, glutamic acid, dextrin,
       alanine, lysine, glycine),Lactobacillus Ferment Lysate( Probiotic), Vegetable Glycerin,
        Bifidobacterium Ferment Lysate( Probiotic),Dex- Panthenol,Inulin,Propionibacterium Ferment
         Lysate( Probiotic), Biotin, Sodium hyaluronate(L-M), Sodium hyaluronate(M-M), Sodium Benzoate,
          Potassium Sorbate`,
    starIngredient: 'Lysate',
    pics: [
      'assets/product-images/0012/skadi-toner-lysate-1.jpg',
      'assets/product-images/0012/skadi-toner-lysate-2.jpg',
    ],
    price: 31,
    bestseller: false,
    segment: 'Russian',
    category: 'Toner',
    for: 'Face',
    availableAmount: 46,
  },
  {
    id: '0013',
    brandName: 'Skadi',
    productName: 'Cream with Ceramides, Centella, Prebiotics',
    description: `The cream maintains an optimal level of skin hydration regardless of environmental
     humidity, and also gradually evens out skin tone with regular use. Strengthens the barrier functions
      of the skin and improves the condition of oily skin. The cream is also suitable for combination
       skin at any time and normal skin is great for summer.`,
    ingredients: `Aqua (water),NMF (sodium PCA, glucose, glutamic acid, dextrin, alanine,
       lysine, glycine),Sesamum indicum seed oil, Niacinamide, Cannabis Sativa Seed Oil,Ceramide Complex(Ceramide NP,
         Ceramide AP, Ceramide EOP, Phytosphingosine, Cholesterol, Sodium Lauroyl Lactylate, Carbomer, Xanthan Gum),
          Vegetable Glycerin, Isoamyl Laurate (and) Isoamyl Cocoate ,Lecithin, SC-CO2 Vanilla Tahitensis (Vanilla)
           Extract,Ammonium Acryloyldimethyltaurate/VP Copolymer, Oleanolic Acid, Benzyl Alcohol (and) Glyceryl
            Laurate Resveratrol,Inulin,SC-CO2 Glycyrrhiza Uralensis (Licorice) Root Extract,SC-CO2 Centella Asiatica Root Extract`,
    starIngredient: 'Centella',
    pics: [
      'assets/product-images/0013/skadi-cream-centella-1.jpg',
      'assets/product-images/0013/skadi-cream-centella-2.jpg',
    ],
    price: 51,
    bestseller: false,
    segment: 'Russian',
    category: 'Cream',
    for: 'Face',
    availableAmount: 62,
  },
  {
    id: '0014',
    brandName: 'Skadi',
    productName: 'Antioxidant Cream for Dry to Normal Skin',
    description: `Deep hydration is achieved through the combination of cascade moisturizers
     (amino acids and hyaluronic acid) and components that enhance the barrier function of
      the skin, with a physiological ratio of fatty acids in vegetable oils. Phytosterols
       promote the synthesis of type 1 collagen. Highly concentrated (in terms of flavonoid content)
        extracts of turmeric and chaga, as well as raspberries and dihydroquercetin - a powerful
         bunch of antioxidants. Arabinogalactan supports the skin microbiome. Lamellar emulsion with
          a complex of ceramides in the form of "hectosomes" - for greater stability, physiology
           and bioavailability.`,
    ingredients: `Aqua (water), Vitis Vinifera (Grape) Seed Oil, Behenyl alcohol (and) Glyceryl
     stearate (and)  Lecithin (and) Glycine soja (soybean) sterols, Prunus Amygdalus Dulcis
      (Sweet Almond) Oil, Persea gratissima (Avocado) oil,  Ceramide Complex (Disteardimonium Hectorite,
         Polyglyceryl-10 stearate, Caprylic/Capric Triglyceride, BP ceramide PC-104/ Hydroxypropyl
          Bispalmitamide MEA, Ceramide NP, Phytosterols, Stearic Acid) , Lysine (and)  Histidine (and)
            Arginine (and)  Aspartic acid (and)  Threonine (and)  Serine (and) Glutamic acid (and)
              Proline (and)  Glycine (and)  Alanine (and)  Valine (and)  Methionine (and) Isoleucine
               (and)  Leucine, Tyrosine (and)  Phenylalanine (and)  Cysteine, Arabinogalactan, SC-CO2
                Rubus idaeus Extract, Allantoin, Sorbitol, Dihydroquercetin, Glycerin, Lecithin, Sodium
                 acrylates copolymer, Benzyl Alcohol (and) Ethylhexylglycerin, Sodium hyaluronate(L-M),
                  Sodium hyaluronate(H-M), Lactic acid, SC-CO2 Curcuma longa (Turmeric) Root extract,
                   SC-CO2  Fungus betulinus Extract, Tocopherol`,
    starIngredient: 'Ceramide',
    pics: [
      'assets/product-images/0014/skadi-cream-normal-dry-1.jpg',
      'assets/product-images/0014/skadi-cream-normal-dry-2.jpg',
    ],
    price: 42,
    bestseller: true,
    segment: 'Russian',
    category: 'Cream',
    for: 'Face',
    availableAmount: 48,
  },
  {
    id: '0015',
    brandName: 'Skadi',
    productName: 'Peptides Serum Blocking Mimic',
    description: `Laconic targeted serum with peptides in a high dosage. At the same time,
     it helps to block facial expressions (especially effective in the forehead, between
       the eyebrows and in the corners of the eyes) and the synthesis of type 1 collagen
        while protecting your own collagen from degradation. Prolongs the effect of Botox,
         and also allows you to delay injections. Taurine and centella in the composition
          additionally protect your own collagen from glycation and reduce oxidative stress.`,
    ingredients: `Aqua (water), Syn-Ake (Glycerin, Aqua, Dipeptide Diaminobutyroyl
       Benzylamide Diacetate), Syn-Coll (Glycerin, Aqua, Tripeptide-5), Lysolecithin,
        Taurine, Sorbitol, Glycerin, SC-CO2 Centella Asiatica Leaf extract, Sclerotium gum,
         Xanthan gum, Pullulan, Phenoxyethanol, Ethylhexylglycerin`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0015/skadi-blocking-mimic-serum-1.jpg',
      'assets/product-images/0015/skadi-blocking-mimic-serum-2.jpg',
    ],
    price: 27,
    bestseller: false,
    segment: 'Russian',
    category: 'Serum',
    for: 'Face',
    availableAmount: 12,
  },
  {
    id: '0016',
    brandName: 'Skadi',
    productName: 'PHA Serum',
    description: `Evens out skin tone and texture. Improves complexion.
     Protects against glycation processes, reduces oxidative stress.`,
    ingredients: `Aqua (water), Gluconolactone, Punica granatum (pomegranate) seed extract,
     Saccharomyces/Xylinum/Black Tea Ferment, Ecogel (Lysolecithin (and) Sclerotiumgum (and)
      Xanthan gum (and) Pullulan), Taurine, Sorbitol, Glycerin, Alpha-lipoic Acid,
       Phenoxyethanol, Ethylhexylglycerin`,
    starIngredient: 'PHA Gluconolactone',
    pics: [
      'assets/product-images/0016/skadi-pha-1.jpg',
      'assets/product-images/0016/skadi-pha-2.jpg',
    ],
    price: 26,
    bestseller: false,
    segment: 'Russian',
    category: 'Exfoliating',
    for: 'Face',
    availableAmount: 22,
  },
  {
    id: '0017',
    brandName: 'Skadi',
    productName: 'Vitamin C Serum',
    description: `The serum has a complex rejuvenating effect due to the synthesis of
     collagen, evening out skin tone, tightening the skin and accelerated regeneration.`,
    ingredients: `Aqua (water), Sodium Ascorbyl Phosphate, Cordyceps Sinensis (Mushroom) 
    Extract/Lentinus Edods (Mushroom) Extract/Tremella Fuciformis (Mushroom) Extract/Ganoderma
     Lucidum (Mushroom) Extract, Ecogel (Lysolecithin (and) Sclerotiumgum (and) Xanthan gum
      (and) Pullulan), Taurine, Sorbitol, Glycerin, SC-CO2 Vanilla Tahitensis (Vanilla) Extract,
       Ferulic Acid, Lactic Acid,  Phenoxyethanol, Ethylhexylglycerin, Tocopherol`,
    starIngredient: 'Vitamin C',
    pics: [
      'assets/product-images/0017/skadi-vitamin-c-1.jpg',
      'assets/product-images/0017/skadi-vitamin-c-2.jpg',
    ],
    price: 30,
    bestseller: false,
    segment: 'Russian',
    category: 'Serum',
    for: 'Face',
    availableAmount: 17,
  },
  {
    id: '0100',
    brandName: 'Bioderma',
    productName: 'Sensibio Gel Moussant',
    description: `Transparent gel Bioderma Sensibio Gel Moussant delicately
     cleanses sensitive skin of the face from dirt, makeup, excess sebum.
      Thanks to its neutral pH, soothing and softening ingredients, it is
       suitable for the eye area. Patented D.A.F. (Dermatological Advanced 
        Formulation) lowers the reactivity threshold.
    After washing with Bioderma Sensibio Gel Moussant, there are no such 
    problems as redness and tightness of the skin. The face looks fresh and rested.`,
    ingredients: `Aqua/Water/Eau, Sodium Cocoamphoacetate, Propanediol, 
    Sodium Lauroyl Sarcosinate, Citric Acid, Coco-Glucoside, 
    Glyceryl Oleate, Sodium Citrate, Peg-90 Glyceryl Isostearate, 
    Mannitol, Xylitol, Laureth-2, Rhamnose, Fructooligosaccharides, 
    Tocopherol, Hydrogenated Palm Glycerides Citrate, Lecithin, 
    Ascorbyl Palmitate`,
    starIngredient: '',
    pics: [
      'assets/product-images/0100/bioderma-gel-muss-sensibio-1.jpg',
      'assets/product-images/0100/bioderma-gel-muss-sensibio-2.jpg',
    ],
    price: 28,
    bestseller: true,
    segment: 'Drugstore (Europe)',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 180,
  },
  {
    id: '0101',
    brandName: 'Bioderma',
    productName: 'Sensibio Micelle Solution',
    description: `Bioderma Sensibio Micelle solution
     (Bioderma Sensibio H2O Cleansing Water) for fragile, thin, sensitive 
     skin prone to skin redness. Micellar solution Sensibio H20 qualitatively 
     and quickly cleanses the skin of the face and eye contour by microemulsifying 
     impurities and makeup, while maintaining the hydrolipidic balance of 
     the stratum corneum of the skin. Soothes and moisturizes the skin. 
     Does not contain alkali, alcohol, phenoxyethanol and fragrances; pH neutral.`,
    ingredients: `Aqua/water/eau, Peg-6 Caprylic/capric Glycerides,
     Fructooligosaccharides, Mannitol, Xylitol, Rhamnose, Cucumis Sativus
      (cucumber) Fruit Extract, Propylene Glycol, Cetrimonium Bromide, Disodium Edta`,
    starIngredient: '',
    pics: [
      'assets/product-images/0101/bioderma-sensibio-h2o-makeup-removing-micelle-solution-1.jpg',
      'assets/product-images/0101/bioderma-sensibio-h2o-makeup-removing-micelle-solution-2.jpg',
    ],
    price: 32,
    bestseller: true,
    segment: 'Drugstore (Europe)',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 110,
  },
  {
    id: '0102',
    brandName: 'Bioderma',
    productName: 'Sébium Gel moussant actif',
    description: `Especially for the cleansing of oily skin prone to acne, 
    the Bioderma laboratory offers a solution with an optimal combination
     of keratolytic effect and good tolerance - Intensive Action Gel Active.
     The soap-free formula with zinc gluconate, salicylic acid and glycolic
      acid has a physiological pH level, deeply cleanses pores, improves
       skin texture, evens out tone and eliminates shine. Bioderma Sébium
        Gel moussant actif, during the cleansing phase, acts on both
         the causes of acne and the consequences.`,
    ingredients: `Aqua/Water/Eau, Caprylyl/Capryl Glucoside, Propanediol, Glycerin,
     Zinc Gluconate, Salicylic Acid, Glycolic Acid, Coco-Glucoside, Glyceryl Oleate,
      Cellulose Gum, Sodium Hydroxide, Citric Acid, Fragrance (Perfume), Inulin,
       Xanthan Gum, Mannitol, Sodium Citrate, Xylitol, Cellulose, Fructose,
        Glucose, Rhamnosis, Sodium Metabisulphite, Fructooligosaccharides,
         Tocopherol, Hydrogenated Palm Glycerides Citrate`,
    starIngredient: '',
    pics: [
      'assets/product-images/0102/bioderma-sébium-gel-moussant-actif-1.jpg',
      'assets/product-images/0102/bioderma-sébium-gel-moussant-actif-2.jpg',
    ],
    price: 22,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 118,
  },
  {
    id: '0103',
    brandName: 'Bioderma',
    productName: 'Sebium purifying foaming gel',
    description: `Sébium Foaming Gel gently cleanses and purifies the skin without
     drying it : containing zinc and copper sulphates, it cleanses the epidermis,
      reduces the appearance of irregularities, and absorbs excess of sebum.
       Its ultra-gentle, soap-free formula respects the skin's balance and
        its physiological pH is maintained. The patented natural complex
         contributes to raise the skin's tolerance threshold.`,
    ingredients: `Water (Aqua), Sodium Cocoamphoacetate, Sodium Laureth Sulfate,
     PEG-200 Hydrogenated Glyceryl Palmate, PEG-40 Glyceryl Cocoate, Disodium EDTA,
      Citric Acid, Zinc Sulfate, Sodium Coceth Sulfate, PEG-7 Glyceryl Cocoate,
       Copper Sulfate, Ginkgo Biloba Extract, Sodium Chloride, Xylitol,
        Fructooligosaccharides, Mannitol, Rhamnose, Sodium Hydroxide,
         Propylene Glycol, Sodium Methylparaben, Sodium Propylparaben, Fragrance (Parfum)`,
    starIngredient: '',
    pics: [
      'assets/product-images/0103/bioderma-sébium-gel-moussant-actif-1.jpg',
      'assets/product-images/0103/bioderma-sébium-gel-moussant-actif-2.jpg',
    ],
    price: 23,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 220,
  },
  {
    id: '0104',
    brandName: 'Bioderma',
    productName: 'Hydrabio water Micelle solution',
    description: `The high efficiency and tolerance of micellar water Bioderma
     Hydrabio H2O is provided with micelles of fatty acid esters, which are
      identical to the phospholipids of skin cell membranes. Micelles restore
       the hydrolipidic film of the epidermis, effectively cleanse the skin
        even from waterproof cosmetics without the appearance of signs of
         discomfort and dryness. Bioderma Hydrabio water Micelle solution
          is suitable for removing sebum, cosmetics and impurities without rinsing with water.`,
    ingredients: `Aqua/water/eau, Glycerin, Peg-6 Caprylic/capric Glycerides,
     Disodium Edta, Mannitol, Xylitol, Cetrimonium Bromide, Rhamnose, Niacinamide,
      Hexyldecanol, Sodium Hydroxide, Pyrus Malus (apple) Seed Extract,
       Brassica Campestris (rapeseed) Sterols, Tocopherol, Fragrance (parfum)`,
    starIngredient: '',
    pics: [
      'assets/product-images/0104/bioderma-hydrabio-water-micelle-solution-1.jpg',
      'assets/product-images/0104/bioderma-hydrabio-water-micelle-solution-2.jpg',
      'assets/product-images/0104/bioderma-hydrabio-water-micelle-solution-3.jpg',
      'assets/product-images/0104/bioderma-hydrabio-water-micelle-solution-4.jpg',
    ],
    price: 30,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 220,
  },
  {
    id: '0105',
    brandName: 'Bioderma',
    productName: 'Atoderm Gentle Shower Gel',
    description: `The ideal solution for the daily hygiene of the whole family
     - Atoderm Shower Gel from Bioderma in large volume! Recommended by
      dermatologists for normal to dry sensitive skin in babies, children
       and adults. The mild formula of Bioderma Atoderm Ultra-Gentle shower
        gel cleanses without disturbing the lipid balance, moisturizing and
         softening ingredients make the skin soft and supple. The gel has
          a creamy foamy texture and a delicate aroma, is highly tolerable
           and rinses off well.
    The product is developed in accordance with the principles of
     NAOS - instead of over-treatment, it helps the skin restart its natural
      mechanisms to function properly. The Skin protect complex has a dual
       biological action: moisturizing and restoring. Stimulation of the synthesis
        of hyaluronic acid allows to increase the level of skin hydration, and the
         restoration of the lipid word provides protection for the epidermis for a long time.`,
    ingredients: `Aqua/water/eau, Sodium Laureth Sulfate, Coco-Betaine, Sodium
     Lauroyl Sarcosinate, Glycerin, Methylpropanediol, Coco-Glucoside, Glyceryl
      Oleate, Disodium EDTA, Citric Acid, Capryloyl Glycine, Copper Sulfate,
       Xylitylglucoside, Anhydroxylitol, Xylitol, Niacinamide, Glucose,
        Fructooligosaccharides, Mannitol, Tocopherol, Hydrogenated Palm
         Glycerides Citrate, Lecithin, Rhamnose, Ascorbyl Palmitate, Fragrance (Parfum)
    `,
    starIngredient: '',
    pics: [
      'assets/product-images/0105/bioderma-atoderm-gentle-shower-gel-1.jpg',
      'assets/product-images/0105/bioderma-atoderm-gentle-shower-gel-2.jpg',
      'assets/product-images/0105/bioderma-atoderm-gentle-shower-gel-3.jpg',
    ],
    price: 35,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Cleanser',
    for: 'Body',
    availableAmount: 80,
  },
  {
    id: '0106',
    brandName: 'Bioderma',
    productName: 'Atoderm Intensive gel-creme',
    description: `Bioderma Atoderm Gel-Cream Intensive is the first soothing
     daily skin care product adapted to the needs of patients with atopic
      skin in warm seasons, as well as in humid or tropical climates. It
       has a revolutionary texture, leaving an instant feeling of freshness
        on the skin. Thanks to its light, non-greasy and non-sticky texture,
         it is quickly absorbed and does not leave marks on clothes.`,
    ingredients: `Aqua/Water, Glycerin, Niacinamide, Sodium Polyacrylate,
     Dipotassium Glycyrrhizate, Hydrogenated Polydecene, Pentylene Glycol,
      1,2-Hexanediol, Caprylyl Glycol, Mannitol, Polysorbate 20, Xylitol,
       Rhamnose, Sodium Citrate, Polyquaternium-51, Fructooligosaccharides,
        Caprylic/Capric Triglyceride, Laminaria Ochroleuca Extract`,
    starIngredient: '',
    pics: [
      'assets/product-images/0106/bioderma-atoderm-intensive-gel-creme-1.jpg',
      'assets/product-images/0106/bioderma-atoderm-intensive-gel-creme-2.jpg',
    ],
    price: 28,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Cream',
    for: 'Body',
    availableAmount: 113,
  },
  {
    id: '0107',
    brandName: 'Bioderma',
    productName: 'Sensibio DS+ Gel',
    description: `Cleanses the skin without causing irritation.
    It has an antifungal effect, limiting the proliferation of microflora.
    Restores the hydro-lipid balance, normalizing the barrier function of the skin.
    Does not contain fragrances.`,
    ingredients: `Aqua/Water/Eau, Sodium Laureth Sulfate, Coco-Betaine,
     Sodium Lauroyl Sarcosinate, Mannitol, Xylitol, Rhamnose, Fructooligosaccharides,
      Laminaria Ochroleuca Extract, Zinc Gluconate, PEG-90 Glyceryl Isostearate,
       Sodium Chloride, Coco-Glucoside, Glyceryl Oleate, Capryloyl Glycine,
        Decylene Glycol, Caprylic/Capric Triglyceride, Laureth-2, Ammonium
         Glycyrrhizate, Lysine Azelate, Pyridoxine Hcl, Undecyl Alcohol,
          Citric Acid, Disodium EDTA, Sodium Hydroxide`,
    starIngredient: '',
    pics: [
      'assets/product-images/0107/bioderma-sensibio-ds-gel-1.jpg',
      'assets/product-images/0107/bioderma-sensibio-ds-gel-2.jpg',
    ],
    price: 28,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 56,
  },
  {
    id: '0108',
    brandName: 'Bioderma',
    productName: 'Hydrabio Perfecteur SPF 30',
    description: `Multifunctional product Bioderma Hydrabio Perfecteur SPF30
     visibly improves the appearance of the skin and protects it from UVA,
      UVB rays. The care contains the Aquagenium biological complex, which
       instantly and permanently moisturizes the epidermis. Thanks to the
        delicate, velvety texture of the product, the active ingredients
         penetrate deeply into the skin, restoring its ability to retain
          moisture. Bioderma Hydrabio Perfector evens out complexion and
           conceals minor imperfections. The tool can be used as a base for make-up.`,
    ingredients: `Water, Glycerin, Octocrylene, Ethylhexyl Salicylate, Cyclopentasiloxane,
     Dimethicone, Dipropylene Glycol, Butyl Methoxydibenzoylmethane, Cetyl Alcohol,
      Polymethylsilsesquioxane, Niacinamide, Phenylbenzimidazole Sulfonic Acid, Styrene/Acrylates
       Copolymer, Arachidyl Alcohol, Hdi/Trimethylol Hexyllactone Crosspolymer, Arginine,
       Cyclohexasiloxane, Behenyl Alcohol, C30-45 Alkyl Cetearyl Dimethicone Crosspolymer, Mica (Ci 77019),
       Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Pentylene Glycol, Tocopheryl Acetate,
        Arachidyl Glucoside, Ci 77891 (Titanium Dioxide), Disodium Edta, Peg-8 Laurate, Salicylic Acid,
         Mannitol, Xylitol, Hexyldecanol, Sodium Hydroxide, Rhamnose, Polysorbate 60, Sorbitan Isostearate,
          Pyrus Malus (Apple) Seed Extract, Brassica Campestris (Rapeseed) Sterols, Red 33 (Ci 17200),
           Tocopherol, Fragrance`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0108/bioderma-hydrabio-perfecteur-spf-1.jpg',
      'assets/product-images/0108/bioderma-hydrabio-perfecteur-spf-2.jpg',
    ],
    price: 38,
    bestseller: true,
    segment: 'Drugstore (Europe)',
    category: 'Cream',
    for: 'Face',
    availableAmount: 380,
  },
  {
    id: '0109',
    brandName: 'Bioderma',
    productName: 'Hydrabio Gel-Crème',
    description: `Does dehydrated skin cause discomfort? Feeling of burning
     and tightness, peeling, dull color, loss of elasticity -
      all these problems can be solved by Bioderma Gel-Cream Hydrabio!
    The product based on the Aquagenium patent provides instant and
     long-lasting moisturizing effect, the skin is saturated with moisture,
      becomes elastic and radiant. Thanks to the biomimetic emulsion, the active
       ingredients of the Bioderma Hydrabio Gel-Crème cream penetrate into the deeper
        layers of the skin and provide maximum effectiveness. The tool helps to
         restore the natural mechanism of moisturizing and water balance of the
          skin. The cream has a light texture and pleasant aroma.`,
    ingredients: `Water, Glycerin, Octocrylene, Ethylhexyl Salicylate, Cyclopentasiloxane,
     Dimethicone, Dipropylene Glycol, Butyl Methoxydibenzoylmethane, Cetyl Alcohol,
      Polymethylsilsesquioxane, Niacinamide, Phenylbenzimidazole Sulfonic Acid, Styrene/Acrylates
       Copolymer, Arachidyl Alcohol, Hdi/Trimethylol Hexyllactone Crosspolymer, Arginine,
       Cyclohexasiloxane, Behenyl Alcohol, C30-45 Alkyl Cetearyl Dimethicone Crosspolymer, Mica (Ci 77019),
       Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Pentylene Glycol, Tocopheryl Acetate,
        Arachidyl Glucoside, Ci 77891 (Titanium Dioxide), Disodium Edta, Peg-8 Laurate, Salicylic Acid,
         Mannitol, Xylitol, Hexyldecanol, Sodium Hydroxide, Rhamnose, Polysorbate 60, Sorbitan Isostearate,
          Pyrus Malus (Apple) Seed Extract, Brassica Campestris (Rapeseed) Sterols, Red 33 (Ci 17200),
           Tocopherol, Fragrance`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0109/bioderma-gydrabio-gel-creme-1.jpg',
      'assets/product-images/0109/bioderma-gydrabio-gel-creme-2.jpg',
    ],
    price: 36,
    bestseller: true,
    segment: 'Drugstore (Europe)',
    category: 'Cream',
    for: 'Face',
    availableAmount: 460,
  },
  {
    id: '0110',
    brandName: 'Bioderma',
    productName: 'Hydrabio Mask',
    description: `Provides the most deep and long-term hydration of the skin.
    Contains the patented Aquagenium® complex - normalizes the processes of natural skin hydration.
    The light texture of the mask leaves a pleasant feeling of softness and protection.
    Non-comedogenic.
    Hypoallergenic.`,
    ingredients: `Water (Aqua), Glycerin, Cyclomethicone, Dicaprylyl Ether,
     Dimethicone, Xylitol, Glycol Palmitate, Corn Starch Modified, Arachidyl Alcohol,
      Xylitylglucoside, Anhydroxylitol, Niacinamide, Pyrus Malus (Apple) Fruit Extract,
      Rhamnose, Laminaria Ochroleuca Extract, Cyclopentasiloxane, Glyceryl Stearate,
       PEG-100 Stearate, Behenyl Alcohol, Cetyl Alcohol, Titanium Dioxide, Arachidyl
        Glucoside, Fructooligosaccharides, Disodium EDTA, Mannitol, Xanthan Gum,
         Hexyldecanol, C30-45 Alkyl Cetearyl Dimethicone Crosspolymer, Alumina,
          Stearic Acid, Caprylic/Capric Triglyceride, Chlorphenesin, Phenoxyethanol, Fragrance (Parfum)`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0110/bioderma-hydrabio-mask-1.jpg',
      'assets/product-images/0110/bioderma-hydrabio-mask-2.jpg',
    ],
    price: 32,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Mask',
    for: 'Face',
    availableAmount: 174,
  },
  {
    id: '0111',
    brandName: 'Bioderma',
    productName: 'Hydrabio Creme',
    description: `A real salvation for dry, flaky skin that has lost its shine
     and healthy appearance - Hydrabio cream from Bioderma! Now you can forget
      about discomfort, burning sensation and tightness, your skin will become
       smooth, soft and radiant.
    Bioderma Hydrabio Crème not only moisturizes the dermis, it restores the
     skin's natural hydration mechanism, providing both instant comfort and
      long-term hydration. Thanks to its rich creamy texture, the product
       intensively nourishes the skin, and due to the mimetic emulsion,
        the active ingredients penetrate deep into the dermis, showing maximum
         effectiveness. The skin is saturated with moisture, becomes soft and radiant.
    Pleasant, fresh aroma brings additional pleasure. The cream does not
     contain alcohol, has excellent tolerance. Bioderma Hydrabio Cream
      is ideal as a make-up base.`,
    ingredients: `Aqua/Water/Eau, Glycerin, Isododecane, Cyclopentasiloxane,
     Propylene Glycol Dicaprylate/Dicaprate, Dimethicone, Propanediol, Xylitol,
      Cetyl Palmitate, Hydrogenated Polydecene, Niacinamide, Tridecyl Trimellitate,
       Arachidyl Alcohol, Polymethylsilsesquioxane, Glyceryl Dibehenate, Behenyl Alcohol,
        Hdi/Trimethylol Hexyllactone Crosspolymer, Tribehenin, Dimethicone/Vinyl Dimethicone
         Crosspolymer, Pentylene Glycol, Tocopheryl Acetate, Arachidyl Glucoside, Acrylates/C10-30
          Alkyl Acrylate Crosspolymer, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer,
           Glyceryl Behenate, Disodium Edta, Squalane, Salicylic Acid, Sodium Hydroxide, Mannitol,
            Sodium Hyaluronate, Hexyldecanol, Tocopherol, Polysorbate 60, Rhamnose, Helianthus
             Annuus (Sunflower) Seed Oil, Pyrus Malus (Apple) Seed Extract, Brassica Campestris
              (Rapeseed) Sterols, Fragrance (Parfum)`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0111/bioderma-hydrabio-cream-1.jpg',
      'assets/product-images/0111/bioderma-hydrabio-cream-2.jpg',
      'assets/product-images/0111/bioderma-hydrabio-cream-3.jpg',
    ],
    price: 30,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Cream',
    for: 'Face',
    availableAmount: 280,
  },
  {
    id: '0112',
    brandName: 'Bioderma',
    productName: 'Hydrabio Tonique Moisturising toning lotion',
    description: `Innovation Bioderma, the biological patented Aquagenium complex,
     affects the mechanisms that lead to the accumulation of moisture,
      its retention on the surface, which is necessary to preserve the natural balance.
    Restores, moisturizes for a long time, the skin returns tone, softness and radiance.
    The innovative liquid and transparent texture of Hydrabio Toning Lotion provides
     a pleasant feeling of freshness to the skin after its application.`,
    ingredients: `Water (Aqua), Glycerin, Polysorbate 20, Allantoin, Pyrus Malus (Apple)
     Fruit Extract, Xylitol, Mannitol, Rhamnose, Fructooligosaccharides, Citric Acid,
      Niacinamide, Hexyldecanol, Sodium Hydroxide, Cetrimonium Bromide, Disodium Edta,
       Fragrance (Parfum)`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0112/bioderma-hydrabio-toner-1.jpg',
      'assets/product-images/0112/bioderma-hydrabio-toner-2.jpg',
      'assets/product-images/0112/bioderma-hydrabio-toner-3.jpg',
    ],
    price: 30,
    bestseller: true,
    segment: 'Drugstore (Europe)',
    category: 'Toner',
    for: 'Face',
    availableAmount: 328,
  },
  {
    id: '0113',
    brandName: 'Bioderma',
    productName: 'Hydrabio Lait Moisturising cleansing milk',
    description: `The unique texture combines the softness of cosmetic milk and the
     freshness of water, making the use of the product as comfortable as possible.
    Due to the content of the patented Aquagenium® complex based on liquid crystals,
     it normalizes the processes of natural skin hydration.
    Perfectly tolerated by the skin of the face and eye contour. Contains hypoallergenic
     fragrance. Does not promote the appearance of comedones.`,
    ingredients: `Aqua/Water/Eau, Glycerin, Cetearyl Isononanoate, Paraffinum
     Liquidum/Mineral Oil/Huile Minerale, Acrylates/C10-30 Alkyl Acrylate Crosspolymer,
      Ethylhexylglycerin, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer,
       Disodium EDTA, Squalane, Xylitol, Sodium Hydroxide, Niacinamide, Hexyldecanol, Polysorbate
        60, Sorbitan Isostearate, Fructooligosaccharides, Mannitol, Caprylic/Capric
         Triglyceride, Rhamnose, Laminaria Ochroleuca Extract, Pyrus Malus (Apple) Seed
          Extract, Brassica Campestris (Rapeseed) Sterols, Tocopherol, Phenoxyethanol, Fragrance (Parfum)`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0113/bioderma-hydrabio-lait-moisturising-cleansing-milk-1.jpg',
      'assets/product-images/0113/bioderma-hydrabio-lait-moisturising-cleansing-milk-2.jpg',
    ],
    price: 30,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 126,
  },
  {
    id: '0114',
    brandName: 'Bioderma',
    productName: 'Hydrabio Serum',
    description: `Bioderma Hydrabio Serum is a dense, rich texture product designed
     to intensely moisturize and reduce the reactivity of extremely dehydrated,
      sensitive skin. Its formula contains the patented Aquagenium® complex, which
       activates the natural hydration mechanism.
    Serum Bioderma Hydrabio Serum makes even very dry skin soft, supple, radiant
     with health. Complex D.A.F. improves its barrier functions, thereby reducing
      transdermal moisture loss and the risk of developing inflammatory processes,
       allergic reactions.`,
    ingredients: `Aqua/Water/Eau, Glycerin, Xylitol, Sodium Polyacrylate, Dimethicone,
     Cyclopentasiloxane, Trideceth-6, Disodium EDTA, Niacinamide, PEG/PPG-18/18 Dimethicone,
     Fructooligosaccharides, Mannitol, Sodium Hyaluronate, Hexyldecanol, Caprylic/Capric
     Triglyceride, Rhamnose, Laminaria Ochroleuca Extract, Pyrus Malus (Apple) Seed Extract,
        Brassica Campestris (Rapeseed) Sterols, Tocopherol, Chlorphenesin, Phenoxyethanol,
         Fragrance (Parfum)`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0114/bioderma-hydrabio-serum-1.jpg',
      'assets/product-images/0114/bioderma-hydrabio-serum-2.jpg',
    ],
    price: 42,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Serum',
    for: 'Face',
    availableAmount: 26,
  },
  {
    id: '0115',
    brandName: 'Bioderma',
    productName: 'Bioderma Sébium Night Peel',
    description: `While you sleep, the skin is renewed, becomes smoother, more uniform,
     healthy and radiant - dreams come true with Sebium Night Peeling! The healing
      concentrate provides effective gentle peeling at home, reduces the number of
       comedones and rashes, tightens pores, restores radiance and a uniform complexion.
        Glycolic acid at a concentration of 15% has a natural exfoliating effect, keratolytic
         properties and high tolerance. That is why it is often used by dermatologists in salon
          peels. The Fluidactiv® patent enhances the effectiveness of Bioderma Sébium Night
           Peel against breakouts and blackheads, improves sebum quality and prevents clogged pores.`,
    ingredients: `Aqua/Water/Eau, Glycolic Acid (15%), Sodium Hydroxide, Panthenol,
     Ammonium Acryloyldimethyltaurate/VP Copolymer, Dipropylene Glycol, Hydroxyethylcellulose,
      Mannitol, Propyl Gallate, Xylitol, Sodium Metabisulfite, Rhamnose, Fructooligosaccharides,
       Caprylic/Capric Triglyceride, Laminaria Ochroleuca Extract, Fragrance (Parfum)`,
    starIngredient: '',
    pics: [
      'assets/product-images/0115/bioderma-sebium-night-peel-1.jpg',
      'assets/product-images/0115/bioderma-sebium-night-peel-2.jpg',
    ],
    price: 33,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Exfoliating',
    for: 'Face',
    availableAmount: 26,
  },
  {
    id: '0116',
    brandName: 'Bioderma',
    productName: 'Sébium Sensitive Soin Apaisant anti-imperfections',
    description: `Thanks to SeboRestore technology (Patent Fluidactiv ™ - Bakuchiol),
     the product restores the balanced composition of sebum, as a result, the natural
      functions of sebum are strengthened - moisturizing and preventing inflammatory
       elements. Sébium Sensitive also eliminates already existing inflammations,
        preventing the appearance of post-acne. As a result of using the product,
         the skin calms down, inflammatory elements disappear, redness and oily sheen
          disappears, the face becomes matte and acquires a healthy shade. The product
           is highly tolerable, has a non-greasy, non-sticky texture and is quickly
            absorbed. Can be used as a make-up base.`,
    ingredients: `Aqua/Water/Eau, Glycerin, Methyl Methacrylate Crosspolymer,
     Dipropylene Glycol, Zinc Gluconate, Coco-Caprylate/Caprate, Vinyl Dimethicone/Methicone
      Silsesquioxane Crosspolymer, Caprylic/Capric Triglyceride, Arachidyl Alcohol, Behenyl
       Alcohol, Polyacrylate Crosspolymer-6, Sodium Polyacrylate, Glycyrrhetinic Acid,
        Propylene Glycol, Arachidyl Glucoside, Bakuchiol, Laminaria Ochroleuca
         Extract, Mannitol, Xylitol, Sodium Metabisulfite, Rhamnose, Ginkgo
          Biloba Leaf Extract, Tocopherol, Fructooligosaccharides, Fragrance (Parfum)`,
    starIngredient: '',
    pics: [
      'assets/product-images/0116/bioderma-sebium-sensitive-1.jpg',
      'assets/product-images/0116/bioderma-sebium-sensitive-2.jpg',
    ],
    price: 21,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Cream',
    for: 'Face',
    availableAmount: 41,
  },
  {
    id: '0117',
    brandName: 'Bioderma',
    productName: 'Sebium Solution Micellaire',
    description: `Micellar water effectively cleanses pores of sebum, normalizes its composition and quantity.
     Does not contain alkalis and alcohol, and therefore does not dry the skin.
      Does not require rinsing, has an anti-inflammatory and antibacterial effect.`,
    ingredients: `Water, PEG-6 Caprylic/Capric Glycerides, Sodium Citrate, Zinc Gluconate,
     Copper Sulfate, Ginkgo Biloba Leaf Extract, Mannitol, Xylitol, Rhamnose,
      Fructooligosaccharides, Propylene Glycol, Citric Acid, Disodium EDTA,
       Cetrimonium Bromide, Fragrance`,
    starIngredient: '',
    pics: [
      'assets/product-images/0117/bioderma-sebium-solution-micellaire-1.jgp',
      'assets/product-images/0117/bioderma-sebium-solution-micellaire-2.jpg',
    ],
    price: 18,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 10,
  },
  {
    id: '0118',
    brandName: 'Bioderma',
    productName: 'Sebium Global intensive purifying care',
    description: `Bioderma Sebium Global intensive purifying care is a unique
     product that eliminates the causes of inflammation and acne by normalizing the composition of sebum.
    Bioderma Sebium Global intensive healing care formula includes a new generation patented Fluidactiv
     complex, which contains the most powerful antibacterial and anti-inflammatory drug - Bakuchiol.
      Thanks to its action, the quantity and quality of sebum is normalized, which prevents
       the appearance of pimples, pustules and blackheads.`,
    ingredients: `Aqua/Water/Eau, C12-13 Alkyl Lactate, Dipropylene Glycol, Citric Acid,
     Cyclopentasiloxane, Sodium Hydroxide, Glycerin, Zinc Gluconate, Methyl Methacrylate
      Crosspolymer, Salicylic Acid, Arachidyl Alcohol, Dimethicone, Mannitol, Xylitol,
       Rhamnose, Fructooligosaccharides, Laminaria Ochroleuca Extract, Ginkgo Biloba Leaf
        Extract, Behenyl Alcohol, Glyceryl Stearate, PEG-100 Stearate, Silica, Hydroxyethyl
         Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Xanthan Gum, Arachidyl Glucoside,
          C30-45 Alkyl Cetearyl Dimethicone Crosspolymer, Glycyrrhetinic Acid, Propylene Glycol,
           Polysorbate 60, Caprylic/Capric Triglyceride, Bakuchiol, Squalane, Fragrance (Parfum)`,
    starIngredient: '',
    pics: [
      'assets/product-images/0118/bioderma-sebium-global-intensive-purifying-care-1.jgp',
      'assets/product-images/0118/bioderma-sebium-global-intensive-purifying-care-2.jpg',
    ],
    price: 20,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Exfoliating',
    for: 'Face',
    availableAmount: 312,
  },
  {
    id: '0119',
    brandName: 'Bioderma',
    productName: 'Sébium Lotion',
    description: `The innovative product of the Bioderma laboratory - Sebium Lotion - has a complex
     effect on problem skin: it moisturizes, regulates the secretion of the sebaceous glands
      and maintains natural pH. The patented Fluidactive component improves the quality of sebum,
       relieves inflammation, and prevents the formation of comedones. With regular use of Bioderma
        Sébium Lotion, the skin acquires a healthy glow, evens out complexion, and oily sheen and
         acne disappear. Sebium lotion is suitable for use after shaving to prevent skin inflammation.`,
    ingredients: `Aqua/Water/Eau, PEG-11 Methyl Ether Dimethicone, Butylene Glycol, Glycerin,
     Fomes Officinalis (Mushroom) Extract, Capryloyl Glycine, Polysorbate 20, Sodium Citrate,
      Zinc Gluconate, Salicylic Acid, Sodium Hydroxide, Mannitol, Sodium Metabisulfite, Xylitol,
       Rhamnose, Pyridoxine Hcl, Propyl Gallate, PEG-40 Hydrogenated Castor Oil, Fructooligosaccharides,
        Phenoxyethanol, Fragrance (Parfum)`,
    starIngredient: '',
    pics: [
      'assets/product-images/0119/bioderma-sebium-lotion-1.jgp',
      'assets/product-images/0119/bioderma-sebium-lotion-2.jpg',
    ],
    price: 27,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Exfoliating',
    for: 'Face',
    availableAmount: 400,
  },
  {
    id: '0120',
    brandName: 'Bioderma',
    productName: 'Sebium Hydra Moisturizing cream',
    description: `After aggressive cosmetic procedures, dermatological treatment with
     the use of drying preparations, the skin loses moisture, its protective qualities
      decrease. As a result, the face begins to peel off, there is discomfort from tightness,
       burning and itching.
    To restore the normal hydrobalance of dehydrated oily, combination, problematic
     skin, Bioderma specialists created Bioderma Sebium Hydra Cream. It contains the
      patented D.A.F. (Dermatological Advanced Formulation), which strengthens the barrier
       properties of the epidermis. Another patented complex - Fluidactiv® - normalizes
        the quality of sebum, prevents clogging of pores.`,
    ingredients: `Aqua/Water/Eau, Glycerin, Paraffinum Liquidum/Mineral Oil/Huile Minerale,
     Ethylhexyl Palmitate, Dipropylene Glycol, Xylitol, Bis-PEG/PPG-16/16 PEG/PPG-16/16 Dimethicone,
      Sodium Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Mannitol, Rhamnose, Fructooligosaccharides,
       Laminaria Ochroleuca Extract, Glycyrrhetinic Acid, Allantoin, Ceramide 3, Tocopheryl Acetate,
        Isohexadecane, Caprylic/Capric Triglyceride, Polysorbate 80, Disodium EDTA, Cetrimonium Bromide,
         Methylparaben, Fragrance (Parfum)`,
    starIngredient: '',
    pics: [
      'assets/product-images/0120/bioderma-sebium-hydra-1.jgp',
      'assets/product-images/0120/bioderma-sebium-hydra-2.jpg',
    ],
    price: 20,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Cream',
    for: 'Face',
    availableAmount: 180,
  },
  {
    id: '0121',
    brandName: 'Bioderma',
    productName: 'Bioderma Sebium Pore Refiner',
    description: `Bioderma Sebium Pore Refiner is specifically designed to combat
     the deformation and expansion of pores. It contains the patented Fluidactiv® complex,
      which normalizes the composition of sebum, reduces the activity of the sebaceous
       glands and prevents clogging of their excretory ducts.
    Due to its light texture, Bioderma Sebium Pore Concentrate is quickly absorbed. After
     its application, the oily sheen disappears, the face looks well-groomed. Every day
      the pores become less noticeable, inflammatory elements and black spots disappear,
       the color and texture of the skin evens out.`,
    ingredients: `Aqua/Water/Eau, Methyl Methacrylate Crosspolymer, Dipropylene Glycol,
     Cyclopentasiloxane, Cyclohexasiloxane, Dimethicone, Glycerin, Butylene Glycol,
      Fomes Officinalis (Mushroom) Extract, Sodium Polyacrylate, Salicylic Acid,
       Dodecyl Gallate, Ginkgo Biloba Leaf Extract, Mannitol, Xylitol, Rhamnose,
        Fructooligosaccharides, Laminaria Ochroleuca Extract, Silica, Trideceth-6,
         C30-45 Alkyl Cetearyl Dimethicone Crosspolymer, Lauryl Peg/Ppg- 18/18 Methicone,
          Caprylic/Capric Triglyceride, Mineral Oil (Paraffinum Liquidum), Pentylene Glycol,
           1,2-Hexanediol, Peg/Ppg-18/18 Dimethicone, Caprylyl Glycol, Propylene Glycol,
            Sodium Hydroxide, Citric Acid, Disodium Edta, Fragrance (Parfum)`,
    starIngredient: '',
    pics: [
      'assets/product-images/0121/bioderma-sebium-pore-refiner-1.jgp',
      'assets/product-images/0121/bioderma-sebium-pore-refiner-2.jpg',
    ],
    price: 24,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Exfoliating',
    for: 'Face',
    availableAmount: 166,
  },
  {
    id: '0122',
    brandName: 'Bioderma',
    productName: 'Sébium Mat Control',
    description: `Bioderma Sébium Mat Control is a new treatment for problem skin that
     works in three directions: moisturizing, matting, smoothing. After applying the
      product, the skin instantly becomes matte. Oily sheen does not appear within 8 hours,
       the skin structure improves day by day.
    The active ingredients of Bioderma Sebium Mat Control improve the texture of the skin,
     tighten pores, regulate the production of sebum, the excess of which leads to the
      appearance of oily sheen. The patented Fluidactiv complex acts on the biological
       mechanisms that improve the quality of sebum and thus prevent clogging of pores.
        The ultra-light texture is quickly absorbed and leaves a feeling of freshness.
         Bioderma Sébium Mat Control can be used as a make-up base. The product has been
          dermatologically tested and can be used by people with sensitive skin.`,
    ingredients: `Aqua/Water, Glycerin, Cyclopentasiloxane, Methyl Methacrylate Crosspolymer,
     Cyclohexasiloxane, Dipropylene Glycol, Polymethylsilsesquioxane, PEG-10 Dimethicone,
      Hdi/Trimethylol Hexyllactone Crosspolymer, Butylene Glycol, Sodium Chloride,
       Vinyl Dimethicone/Methicone Silsesquioxane Crosspolymer, C30-45 Alkyl Cetearyl Dimethicone
        Crosspolymer, Zinc Gluconate, Disodium EDTA, Salicylic Acid, Mannitol, Xylitol, Rhamnose,
         Xanthan Gum, Sodium Hydroxide, Dodecyl Gallate, Pyridoxine Hcl, Fomes Officinalis
          (Mushroom) Extract, PEG-40 Hydrogenated Castor Oil, Phenoxyethanol, Fragrance`,
    starIngredient: '',
    pics: [
      'assets/product-images/0122/bioderma-sebium-mat-control-1.jgp',
      'assets/product-images/0122/bioderma-sebium-mat-control-2.jpg',
    ],
    price: 26,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Cream',
    for: 'Face',
    availableAmount: 195,
  },
  {
    id: '0123',
    brandName: 'Bioderma',
    productName: 'Sensibio AR Cream',
    description: `Soft cream Bioderma Sensibio AR cream instantly soothes irritated skin,
     reduces redness and prevents their appearance. The patented complex of active ingredients
      Rozactiv® affects the capillary dilation mechanism, which causes permanent redness.
       The likelihood of the appearance and development of diffuse redness is reduced.
    Bioderma Sensibio AR cream protects sensitive, dry, thinned, fragile skin from external
     factors, intensively moisturizes it. The cream is perfectly tolerated due to the optimally
      selected composition, which includes only mild components. Non-greasy light texture makes
       the application of the cream comfortable.`,
    ingredients: `Aqua/Water/Eau, Paraffinum Liquidum/Mineral Oil/Huile Minerale, Glycerin,
     Tridecyl Trimellitate, Glycol Palmitate, Caprylic/Capric Triglyceride, Canola/Canola Oil/Huile De Colza,
      Triceteareth-4 Phosphate, Fructooligosaccharides, Mannitol, Xylitol, Glycol Stearate, Peg-2 Stearate,
       Propylene Glycol, Glycyrrhetinic Acid, Pentylene Glycol, Acrylates/C10-30 Alkyl Acrylate Crosspolymer,
        1,2-Hexanediol, Caprylyl Glycol, Disodium Edta, Xanthan Gum, Glycine Soja (Soybean) Germ Extract, Allantoin,
         Laminaria Ochroleuca Extract, Rhamnose, Ginkgo Biloba Leaf Extract, Sodium Hydroxide, Camellia Sinensis Leaf Extract, Citric Acid`,
    starIngredient: '',
    pics: [
      'assets/product-images/0123/bioderma-sensibio-ar-cream-1.jgp',
      'assets/product-images/0123/bioderma-sensibio-ar-cream-2.jpg',
    ],
    price: 27,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Cream',
    for: 'Face',
    availableAmount: 244,
  },
  {
    id: '0124',
    brandName: 'Bioderma',
    productName: 'Sensibio Soothing Mask',
    description: `The patented formula Toleridine ® has a strong anti-inflammatory effect.
     It restores the protective barrier of the skin, protecting it from negative environmental influences.
    Sensibio mask eliminates signs of inflammation, redness, intensively moisturizes the skin.
    It is optimally tolerated, also by the skin of the eyelids.
    Does not contain surfactants, and fragrances, hypoallergenic.
    Non-comedogenic (does not contribute to the appearance of comedones, does not clog skin pores).`,
    ingredients: `Aqua/Water/Eau, Glycerin, Cetearyl Isononanoate, Isohexadecane, Glycol Palmitate,
     Caprylic/Capric Triglyceride, Triceteareth-4 Phosphate, Fructooligosaccharides, Mannitol,
      Xylitol, Glycyrrhetinic Acid, Rhamnose, Laminaria Ochroleuca Extract, Glycol Stearate,
       PEG-2 Stearate, Pentylene Glycol, Titanium Dioxide, Acrylates/C10-30 Alkyl Acrylate Crosspolymer,
        Caprylyl Glycol, 1,2-Hexanediol, Disodium EDTA, Xanthan Gum, Sodium Hydroxide, Alumina, Stearic Acid`,
    starIngredient: '',
    pics: [
      'assets/product-images/0124/bioderma-sensibio-mask-1.jgp',
      'assets/product-images/0124/bioderma-sensibio-ar-cream-2.jpg',
    ],
    price: 25,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Mask',
    for: 'Face',
    availableAmount: 11,
  },
  {
    id: '0125',
    brandName: 'Bioderma',
    productName: 'Sensibio AR BB Cream',
    description: `This is the first BB cream designed for irritated skin.
     The main effect that you get when using Sensibio AR cream:
    removal of irritations caused by stress, climate change, hot food;
    alignment and improvement of complexion;
    moisturizing the skin of the face, strengthening the protective barrier;
    protection from UV rays, which is especially important for skin prone to irritation.
    Thanks to the presence of SPF 30 filters, the cream protects against the negative effects of ultraviolet rays.`,
    ingredients: `Aqua/Water/Eau, Glycerin, Cyclopentasiloxane, Dimethicone, Octocrylene, Titanium Dioxide (Ci 77891),
     Hdi/Trimethylol Hexyllactone Crosspolymer, Titanium Dioxide, Dipropylene Glycol, PEG-10 Dimethicone, Sorbitol,
      Caprylic/Capric Triglyceride, Butyl Methoxydibenzoylmethane, Cyclohexasiloxane, Canola Oil, Mannitol,
       Xylitol, Rhamnose, Laminaria Ochroleuca Extract, Camellia Sinensis Leaf Extract, Glycyrrhetinic Acid,
        Glycine Soja (Soybean) Germ Extract, Ginkgo Biloba Leaf Extract, Allantoin, Propylene Glycol,
         Iron Oxides (Ci 77492), Dimethicone/Polyglycerin-3 Crosspolymer, Silica, Disteardimonium Hectorite, Dimethicone/Vinyl
          Dimethicone Crosspolymer, 1,2-Hexanediol, Caprylyl Glycol, Trimethoxycaprylylsilane, Hydrogenated Lecithin,
           Propylene Carbonate, Iron Oxides (Ci 77499), PVP, Sodium Phytate, Sodium Citrate, Tocopherol, Sodium Chloride,
            Pentylene Glycol, Iron Oxides (Ci 77491), Xanthan Gum, Sodium Hydroxide, Lecithin, Citric Acid, Fragrance (Parfum)`,
    starIngredient: '',
    pics: [
      'assets/product-images/0125/bioderma-sensibio-ar-bb-1.jgp',
      'assets/product-images/0125/bioderma-sensibio-ar-bb-2.jpg',
    ],
    price: 35,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Cream',
    for: 'Face',
    availableAmount: 26,
  },
  {
    id: '0126',
    brandName: 'Bioderma',
    productName: 'Sensibio Eye Contour Gel',
    description: `The active ingredients of Toleridine ® provide an anti-inflammatory effect.
     Reduce hypersensitivity of the skin. Quickly quench the feeling of discomfort and irritation.
      Reduces puffiness. Due to the pronounced hydrating properties, it smoothes fine wrinkles.
       Reflective particles visually reduce the depth of wrinkles. Hypoallergenic, does not contain
        dyes and preservatives. Optimal skin and eye tolerance. It is a good base for makeup.
         Compatible with contact lenses.`,
    ingredients: `Water (Aqua), Glycerin, Dimethicone, Polyethylene, Tridecyl Trimellitate,
     Caprylic/Capric Triglyceride, Isostearyl Alcohol, Butylene Glycol Cocoate, Fructooligosaccharides,
      Mannitol, Xylitol, Caffeine, Sodium Hyaluronate, Glycyrrhetinic Acid, Rhamnose, Laminaria Ochroleuca
       Extract, Acrylates/ C10-30 Alkyl Acrylate Crosspolymer, Pentylene Glycol, Caprylyl Glycol,
        1,2-Hexanediol, Disodium Edta, Sodium Hydroxide, Ethylcellulose`,
    starIngredient: '',
    pics: [
      'assets/product-images/0126/bioderma-sensibio-eye-cream-1.jgp',
      'assets/product-images/0126/bioderma-sensibio-eye-cream-2.jpg',
    ],
    price: 24,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Eye Cream',
    for: 'Face',
    availableAmount: 201,
  },
  {
    id: '0127',
    brandName: 'Bioderma',
    productName: 'Sensibio Défensive Crème active apaisante légère',
    description: `Tingling, burning sensation and tightness, itching - more than 60% of
     the world's population experiences similar signs of skin sensitivity. In addition
      to the natural violation of the biological function of the skin, urban residents
       face an acquired problem due to the influence of aggressive environmental factors.
        Cream Bioderma Sensibio Defensive will help in solving the problem of sensitivity,
         photosensitivity of the skin and their combination, regardless of the cause of the appearance.
          The product eliminates tingling in 30 seconds and soothes the skin for a long time, restores
           comfort. Défensive technology is aimed at enhancing the natural protective functions of the
            epidermis, in the future it strengthens the mechanism of self-defense against aggressive
             environmental factors. Cream with a light refreshing texture quickly penetrates the skin,
              has a high tolerance, tested under dermatological control. Excellent base for make-up.`,
    ingredients: `Aqua/Water/Eau, Glycerin, Dicaprylyl Ether, Propylheptyl Caprylate, Butylene Glycol,
     Glyceryl Stearate Citrate, Glycol Palmitate, Squalane, Sucrose Stearate, Mangifera Indica (Mango)
      Seed Butter, Pentylene Glycol, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Caprylyl Glycol,
       Carnosine, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Mannitol, Xylitol,
        Tocopherol, Salvia Miltiorrhiza Flower/Leaf/Root Extract, Rhamnose, Glycine Soja (Soybean)
         Oil, Polysorbate 60, Sorbitan Isostearate, Palmitoyl Tetrapeptide-10`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0127/bioderma-sensibio-defensive-1.jgp',
      'assets/product-images/0127/bioderma-sensibio-defensive-2.jpg',
    ],
    price: 18,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Cream',
    for: 'Face',
    availableAmount: 480,
  },
  {
    id: '0128',
    brandName: 'Bioderma',
    productName: 'Sensibio Défensive Crème active apaisante riche',
    description: `Tingling, burning sensation and tightness, itching - more than 60% of the
     world's population experiences similar signs of skin sensitivity. In addition to the
      natural violation of the biological function of the skin, urban residents face
       acquired sensitivity due to the influence of aggressive environmental factors.
        Cream Bioderma Sensibio Defensive will help in solving the problem of sensitivity,
         photosensitivity of the skin and their combination, regardless of the cause of
          the appearance. The product eliminates tingling in 30 seconds and soothes the
           skin for a long time, restores comfort. Défensive technology is aimed at
            enhancing the natural protective functions of the epidermis, in the future
             it strengthens the mechanism of self-defense against aggressive environmental
              factors. Cream with a rich enveloping texture nourishes and softens the skin,
               is highly tolerated, tested under dermatological control. Excellent base for make-up.`,
    ingredients: `Aqua/Water/Eau, Glycerin, Dicaprylyl Ether, Glycol Palmitate, Butylene
     Glycol, Cetyl Palmitate, Glyceryl Stearate Citrate, Squalane, Sucrose Stearate, Tridecyl
      Trimellitate, Glyceryl Dibehenate, Polysorbate 60, Pentylene Glycol, Tribehenin, Glyceryl Behenate,
       Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Caprylyl Glycol, Carnosine, Hydroxyethyl
        Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Mannitol, Xylitol, Tocopherol, Salvia
         Miltiorrhiza Flower/Leaf/Root Extract, Rhamnose, Glycine Soja (Soybean) Oil, Sorbitan
          Isostearate, Sodium Hydroxide, Palmitoyl Tetrapeptide-10`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0128/bioderma-sensibio-defensive-riche-1.jgp',
      'assets/product-images/0128/bioderma-sensibio-defensive-riche-2.avif',
    ],
    price: 19,
    bestseller: false,
    segment: 'Drugstore (Europe)',
    category: 'Cream',
    for: 'Face',
    availableAmount: 167,
  },
  {
    id: '0129',
    brandName: 'Youth to the People',
    productName: 'Superfood Cleanser',
    description: `The daily green juice cleanse for your face.
      The powerful, but gentle daily face wash is formulated
      with superfood antioxidants from kale, spinach, and green tea
       - to give your skin the ultimate cleanse. It works effectively
        to prevent buildup in pores, remove makeup,
      and balance pH without drying or stripping.
      This is the green juice cleanse for your face.`,
    ingredients: `Water/Aqua/Eau , Cocamidopropyl Hydroxysultaine ,
       Sodium Cocoyl Glutamate , Sorbeth-230 Tetraoleate ,
       Polysorbate 20 , Sodium Chloride , Aloe Barbadensis
       Leaf (Aloe Vera) Juice Powder , Brassica Oleracea Acephala
       (Kale) Leaf Extract , Spinacia Oleracea (Spinach) Leaf Extract ,
       Camellia Sinensis (Green Tea) Leaf Extract , Medicago Sativa
       (Alfalfa) Extract , Chamomilla Recutita (Matricaria) Flower
       Extract , Tetrahexyldecyl Ascorbate (Vitamin C) , Glycerin ,
       Panthenol (Vitamin B5) , Tocopheryl Acetate (Vitamin E) ,
        Decyl Glucoside , Sorbitan Laurate , Tetrasodium Glutamate
        Diacetate , Gluconolactone , Ethylhexylglycerin , Maltodextrin ,
        Citric Acid , Phenoxyethanol , Potassium Sorbate ,
        Sodium Benzoate , Gardenia Jasminoides (Jasmine) Fruit Extract ,
        Fragrance/Parfum , Sodium Hydroxide , Sodium Glycolate ,
        Sodium Formate , Hexyl Cinnamal , Linalool , Limonene ,
        Chlorophyllin-Copper Complex (CI 75810)`,
    starIngredient: 'Vitamin C',
    pics: [
      'assets/product-images/0001/yttp-SuperfoodCleanser-1.jpg',
      'assets/product-images/0001/yttp-SuperfoodCleanser-2.jpg',
      'assets/product-images/0001/yttp-SuperfoodCleanser-3.jpg',
      'assets/product-images/0001/yttp-SuperfoodCleanser-4.jpg',
    ],
    price: 36,
    bestseller: true,
    segment: 'USA / Canada',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 200,
  },
];

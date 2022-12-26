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
    id: '0018',
    brandName: 'Manyo',
    productName: 'Manyo Galac Niacin 2.0 Essence',
    description: `The serum has a complex rejuvenating effect due to the synthesis of
     collagen, evening out skin tone, tightening the skin and accelerated regeneration.`,
    ingredients: `Galactomyces Fermentation Filtrate (93.69%), Niacinamide (4%), Panthenol,
     Sodium Hyaluronate, 1,2-hexanediol, Butylene Glycol, Virginia Poongnyeonhwasu,
      Ethylhexylglycerin, Chrysanthemum Flower Extract , algin, glutathione, pentylene glycol, purified water`,
    starIngredient: 'Galactomyces',
    pics: [
      'assets/product-images/0018/manyo-galac-niacin-1.jpg',
      'assets/product-images/0018/manyo-galac-niacin-2.jpg',
    ],
    price: 37,
    bestseller: true,
    segment: 'Korean',
    category: 'Serum',
    for: 'Face',
    availableAmount: 285,
  },
  {
    id: '0019',
    brandName: 'Manyo',
    productName: 'Herbgreen Cleansing Oil',
    description: `Hydrophilic oil based on herbal extracts for problem skin Manyo Herbgreen
     Cleansing Oil - effectively cleanses the skin of makeup and impurities. Prevents the
      formation of comedones and blackheads. Due to its texture, the oil penetrates deep
       into the pores, dissolving and eliminating impurities. The cleansing oil strengthens
        the skin's protective layer, improves complexion, does not leave a sticky or greasy
         film on the skin, and does not contain artificial ingredients.`,
    ingredients: `Glycine Soja (Soybean) Oil, Sorbeth-30 Tetraoleate, Isoamyl Laurate,
     Caprylic/Capric Triglyceride, Camellia Sinensis Leaf Oil, Olea Europaea (Olive)
      Fruit Oil, Vitis Vinifera (Grape) Seed Oil, Artemisia Vulgaris Oil, Salvia Officinalis (Sage)
       Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Glyceryl Caprylate, Prunus Amygdalus Dulcis
        (Sweet Almond) Oil, Moringa Pterygosperma Seed Oil, Melaleuca Alternifolia (Tea Tree)
         Leaf Oil, Eucalyptus Globulus Leaf Oil, Rosmarinus Officinalis (Rosemary) Leaf Oil,
          Lavandula Angustifolia (Lavender) Oil, Tocopherol, Camellia Sinensis Leaf Extract,
           Camellia Sinensis Leaf Water, Artemisia Vulgaris Extract, Carica Papaya (Papaya)
            Fruit Extract, Pogostemon Cablin Oil, Olibanum`,
    starIngredient: '',
    pics: [
      'assets/product-images/0019/manyo-herb-cleansing-oil-1.jpg',
      'assets/product-images/0019/manyo-herb-cleansing-oil-2.jpg',
      'assets/product-images/0019/manyo-herb-cleansing-oil-3.jpg',
    ],
    price: 36,
    bestseller: false,
    segment: 'Korean',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 136,
  },
  {
    id: '0020',
    brandName: 'Manyo',
    productName: 'Pure Deep Cleansing Foam',
    description: `Manyo Pure Deep Cleansing Foam Ceramide Cleansing Foam Hypoallergenic
     formula contains natural surfactants to create a wonderfully soft and supple foam.
      It removes up to 99% of impurities from the surface of the skin, while the flower
       complex and ceramides help to moisturize and protect the integrity of the skin barrier.`,
    ingredients: `Purified water, glycerin, myristic acid, stearic acid, lauric acid,
     potassium hydroxide, butylene glycol, glycol distearate, potassium cocoyl glycolate,
      glyceryl stearate S, coco-betaine , Ceramide N.P., Milk Protein Extract, Giant Cypress
       Leaf Extract, Elm Root Extract, Perilla Root Extract, Yeoju Fruit Extract, Okra Fruit
        Extract, Noni Fruit Extract, Chrysanthemum Flower Extract, Portmary Gold Flower Extract,
         Evening Primrose Extract , Lavender flower extract, rosemary leaf extract, oregano extract,
          thyme flower / leaf / stem extract, common jasmine extract, sodium hyaluronate,
           morning glory daffodil extract, caprylyl glycol, lotus water, pentylene glycol,
            chamomile flower Extract, polyquaternium-10, polyquaternium-7, star anise extract,
             golden extract, sodium bicarbonate, sorbitan olive, beads wax, 1 , 2-hexanediol,
              dipropylene glycol, ethylhexylglycerin, sunflower seed oil, sodium chloride,
               common jasmine oil, ylang-ylang flower oil, sodium benzoate, tocopherol`,
    starIngredient: 'Ceramide',
    pics: [
      'assets/product-images/0020/manyo-pure-deep-cleansing-foam-1.jpg',
      'assets/product-images/0020/manyo-pure-deep-cleansing-foam-2.jpg',
      'assets/product-images/0020/manyo-pure-deep-cleansing-foam-3.jpg',
    ],
    price: 28,
    bestseller: false,
    segment: 'Korean',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 92,
  },
  {
    id: '0021',
    brandName: 'Manyo',
    productName: 'Cleansing Soda Foam',
    description: `Manyo Cleansing Soda Foam is a creamy, refreshing cleansing foam
     with natural herbs that gently but effectively cleanses the skin of oil, make-up
      residue and impurities. It will make the skin soft and balanced, eliminate
       imperfections and roughness of the skin, and protect against inflammation.`,
    ingredients: `Camellia Sinensis Leaf Water, Myristic Acid, Glycerin, Sodium Hyaluronate,
     Lauric Acid, Caprylic/Capric Triglyceride, Aloe Barbadensis Leaf Water, Stearic Acid,
      Potassium Hydroxide, Diatomaceous Earth, Kaolin, Isoamyl Laurate, Sodium Bicarbonate,
       Zea Mays (Corn) Starch, Sodium PCA, Glycol Distearate, Beeswax, Glyceryl Stearate,
        Saponaria Officinalis Leaf Extract, Decyl Glucoside, Olea Europaea (Olive)
         Fruit Oil, Camellia Sinensis Leaf Powder, Morus Alba Root Extract, Chlorella
          Vulgaris Powder, Red Ginseng Extract, Carica Papaya (Papaya) Fruit Extract,
           Phaseolus Radiatus Seed Powder, Anthemis Nobilis Flower Powder, Lactuca
            Scariola Sativa (Lettuce) Leaf Extract, Phaseolus Radiatus Seed Extract,
             Citrus Limon (Lemon) Fruit Water, Glycyrrhiza Glabra (Licorice) Root Extract,
              Portulaca Oleracea Extract, Zanthoxylum Piperitum Fruit Extract, Pulsatilla
               Koreana Extract, Usnea Barbata (Lichen) Extract, Dioscorea Opposita (Wild Yam)
                Root Extract, Oryza Sativa (Rice) Bran Extract, Lavandula Angustifolia
                 (Lavender) Oil, Melaleuca Alternifolia (Tea Tree) Leaf Oil, Camellia
                  Sinensis Leaf Extract, Citrus Aurantium Dulcis (Orange) Oil`,
    starIngredient: '',
    pics: [
      'assets/product-images/0021/manyo-cleansing-soda-foam-1.jpg',
      'assets/product-images/0021/manyo-cleansing-soda-foam-2.jpg',
      'assets/product-images/0021/manyo-cleansing-soda-foam-3.jpg',
    ],
    price: 29,
    bestseller: false,
    segment: 'Korean',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 55,
  },
  {
    id: '0022',
    brandName: 'Manyo',
    productName: 'Vitamin Tree Brightening Pack',
    description: `Manyo Vitamin Tree Brightening Pack is a hydrating and nourishing
     night mask with natural vitamins, honey, propolis and royal jelly that softens,
      smoothes skin and stimulates cell renewal so you wake up with fresher, more even-toned skin.`,
    ingredients: `Altai sea buckthorn water, Yuzu fruit extract, lemon fruit water, Niacinamide,
     betaine, sleroglucan, xanthan gum, glycerin, isoamyl laurate, Cetearyl olivate, sorbitan olivate,
      Arachidyl alcohol, behenyl alcohol, arachine glucoside, Cetearyl alcohol, Cetearyl glucoside,
       rosehip seed oil, tocopherol, annual sunflower seed oil, sea buckthorn oil, Royal jelly extract,
        bean fruit extract, camu-camu fruit extract, common physalis fruit extract, rosehip fruit extract,
         dry acai extract, pomegranate extract, licorice root extract, honey, Japanese pepper fruit extract,
          Korean lumbago extract, Usnea borodovidna extract, honey and propolis extract, orange extract,
           anisic acid, lactic acid`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0022/manyo-vitamin-tree-mask-1.jpg',
      'assets/product-images/0022/manyo-vitamin-tree-mask-2.jpg',
      'assets/product-images/0022/manyo-vitamin-tree-mask-3.jpg',
      'assets/product-images/0022/manyo-vitamin-tree-mask-4.jpg',
    ],
    price: 24,
    bestseller: false,
    segment: 'Korean',
    category: 'Mask',
    for: 'Face',
    availableAmount: 19,
  },
  {
    id: '0023',
    brandName: 'Manyo',
    productName: 'Bifida Complex Ampoule Gel Cleanser',
    description: `Manyo Bifida Complex Ampoule Gel Cleanser is a natural, slightly
     acidic foam gel for removing makeup and daily skin cleansing. The formula
      protects the skin barrier, which is easily damaged during cleansing, while
       plant enzymes and micelles remove impurities from deep within the pores.`,
    ingredients: `Water, sodium olefin sulfinate C14-16, lauryl betaine,
     glycerin, sodium chloride, lactobacilli/ ginseng root enzyme 
     filtrate, lactobacilli/ soy milk enzyme filtrate, butylene glycol,
      sodium hyaluronate, hydroxypropyltrimonium hyaluronate, hydrolyzed hyaluronic acid,
       sodium acetyl-hyaluronate, hyaluronic acid, sodium hyaluronate crosspolymer, potassium
        hyaluronate, hydrogenated lecithin, Centella asiatica extract, green tea leaf extract,
         1,2-hexanediol, rosemary extract, allantoin, xylitol, ginseng fruit extract, soapberry
          extract, guar hydroxypropyltrimonium chloride, maltodextrin, hexylene glycol, propylene
           glycol laurate, ceramide np, bifida enzyme lysate(1,000 ppm), glucose, sodium
            bicarbonate, phytosteryl / octyldodecyl lauroyl glutamate, papain, xylitylglucoside,
             anhydroxylitol, fructan, ethylhexylglycerol, gluconolactone, Caprylic/Caprylic triglyceride,
              sodium metabisulfite, levulinic acid, licorice root extract, chamomile extract,
               caprylyl glycol, laurylpyridinium chloride, xanthan gum, disodium salt of
                ethylenediaminetetraacetic acid, Japanese rhinuria root extract, extract of Baikal skullcap roots`,
    starIngredient: 'Lysate',
    pics: [
      'assets/product-images/0023/manyo-bifida-gel-cleanser-1.jpg',
      'assets/product-images/0023/manyo-bifida-gel-cleanser-2.jpg',
      'assets/product-images/0023/manyo-bifida-gel-cleanser-3.jpg',
      'assets/product-images/0023/manyo-bifida-gel-cleanser-4.jpg',
    ],
    price: 41,
    bestseller: true,
    segment: 'Korean',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 68,
  },
  {
    id: '0024',
    brandName: 'Manyo',
    productName: 'Bifida Ampoule Mist',
    description: `Mist for the face with bifidobacteria Manyo Bifida Ampoule Mist -
     moisturizes and nourishes the skin, increases its protective functions by 93%,
      soothes and prevents the formation of wrinkles and acne. Gives the skin a
       radiant and healthy look. Contains no alcohol and dermatologically tested.`,
    ingredients: `Milk-flowered peony extract, bifida enzyme lysate 20%, pumpkin
     lactobacilli filtrate 10%, butylene glycol, sodium hyaluronate, soy extract enzyme,
      fellinus extract, acetyl Hexapeptide-8, fermentated aureobasidium budding filtrate,
       Palmitoyl dipeptide, Palmitoyl Tripeptide-1, shiitake extract, trametes multicolored
        extract, copper Tripeptide-1, allantoin, panthenol, glycerin, common physalis extract,
         black tea extract, PU'er tea extract, epigallocatechin gallate, red ginseng root eestrac,
          common ginseng extract, alginic acid, Dioscorea Cayenne extract, methyl glucet-20, caffeine,
           Japanese pepper fruit extract, Korean lumbago extract, Usnea borodovidnaya extract,
            caprylyl glycol, Baikal skullcap extract, anise extract, adenosine`,
    starIngredient: 'Lysate',
    pics: [
      'assets/product-images/0024/manyo-bifida-mist-1.jpg',
      'assets/product-images/0024/manyo-bifida-mist-2.jpg',
      'assets/product-images/0024/manyo-bifida-mist-3.jpg',
    ],
    price: 51,
    bestseller: false,
    segment: 'Korean',
    category: 'Toner',
    for: 'Face',
    availableAmount: 57,
  },
  {
    id: '0025',
    brandName: 'Manyo',
    productName: 'Bifida Biome Concentrate Cream',
    description: `Manyo Factory Bifida Biome Concentrate Cream is the perfect
     cream for daily use. The synergistic effect of highly effective ingredients
      restores vitality, freshness and youthful appearance to the skin. It protects
       the skin from damage, while at the same time it has an anti-aging effect,
        nourishes, moisturizes and gives the skin a healthy glow. Delicate texture
         on contact with the skin instantly melts quickly absorbed.`,
    ingredients: `Bifida Ferment Lysate (62%), Butylene Glycol, Caprylic/Capric
     Triglyceride, Cetyl Ethylhexanoate, Glycerin, Squalane, Niacinamide, 1,2-Hexanediol,
      Cetearyl Alcohol, Polyglyceryl-2 Stearate, Cutibacterium Granulosum Ferment Extract
       Filtrate(10,000Ppm), Coco-Caprylate/Caprate, Lactobacillus/Pumpkin Fruit Ferment
        Filtrate, Aureobasidium Pullulans Ferment, Betaine, Panthenol, Acetyl Hexapeptide-8,
         Palmitoyl Tripeptide-1, Copper Tripeptide-1, SH-Polypeptide-1, SH-Oligopeptide-1,
          Glyceryl Stearate, Stearyl Alcohol, Polyglyceryl-3 Methylglucose Distearate, Ceramide NP,
           Ceramide AP, Ceramide AS, Ceramide NS, Ceramide EOP, Epigallocatechin Gallate, Glyceryl
            Stearate SE, Sorbitan Stearate, Dipropylene Glycol, Isopropyl Myristate, Sodium Carbomer,
             Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Glyceryl
              Caprylate, Sodium Hyaluronate, Hydroxypropyltrimonium Hyaluronate,
               Hydrolyzed Hyaluronic Acid, Potassium Hyaluronate, Hydrolyzed
                Sodium Hyaluronate, Sodium Hyaluronate Crosspolymer, Hyaluronic Acid,
                 Sodium Acetylated Hyaluronate, Water, Ethylhexylglycerin, Scutellaria
                  Baicalensis Root Extract, Panax Ginseng Callus Culture Extract,
                   Panax Ginseng Root Extract, Hydrogenated Lecithin, Phytosphingosine,
                    Cholesterol, Hydrolyzed Algin, Stearic Acid, Physalis Alkekengi
                     Fruit Extract, Foeniculum Vulgare (Fennel) Fruit Extract,
                      Phosphatidylcholine, Illicium Verum (Anise) Fruit Extract,
                       Caramel, Dextrin, Rosa Damascena Flower Oil, Caffeine, Adenosine`,
    starIngredient: 'Lysate',
    pics: [
      'assets/product-images/0025/manyo-bifida-biom-cream-1.jpg',
      'assets/product-images/0025/manyo-bifida-biom-cream-2.jpg',
    ],
    price: 81,
    bestseller: true,
    segment: 'Korean',
    category: 'Cream',
    for: 'Face',
    availableAmount: 28,
  },
  {
    id: '0026',
    brandName: 'Manyo',
    productName: 'Galactomy Peeling Gel',
    description: `Peeling roll with galactamisis and enzymes Manyo Galactomy
     Peeling Gel - 94.44% consists of natural ingredients that provide gentle
      exfoliation, cleansing and narrowing of pores without overdrying and injuring the skin.`,
    ingredients: `Purified water, cellulose, methylpropanediol, 1,2-hexanediol,
     fermented galactomisis filtrate, butylene glycol, protease, Perilla leaf extract,
      lemon balm extract, marshmallow / root leaf extract, borage extract, common Jasmine
       Extract, hydrogenated lecithin, hydrolyzed hyaluronic acid, NPI ceramide,
        fructooligosaccharide, lecithin, beta-glucan, glycerin, DIPROPYLENE glycol,
         xylyl glucoside, anhydroxylite, xylitol , Centella asiatica extract, Fig extract,
          budella extract, algae extract, thyme extract, nasturtium leaf extract, trometamine,
           glucose, polyglyceryl-10-laurate, carbomer, Ethylhexylglycerin`,
    starIngredient: 'Enzyme',
    pics: [
      'assets/product-images/0026/manyo-galactomy-peeling-gel-1.jpg',
      'assets/product-images/0026/manyo-galactomy-peeling-gel-2.jpg',
    ],
    price: 19,
    bestseller: false,
    segment: 'Korean',
    category: 'Exfoliating',
    for: 'Face',
    availableAmount: 8,
  },
  {
    id: '0027',
    brandName: 'Manyo',
    productName: 'Pure Aqua Peel',
    description: `Manyo Pure Aqua Peel PHA facial peeling gel gently exfoliates
     dead skin cells. Contains deeply moisturizing ingredients to quickly restore
      skin's lack of moisture. Makes skin radiant & smooth.`,
    ingredients: `Purified water, cellulose, dipropylene glycol, betaine, 1,2-hexanediol,
     glycerin, sodium hyaluronate, pot marigold flower extract, ceramide n-p, corn starch,
      glucolactone, gold iris extract, lotus flower Extract, butylene glycol, hydrolyzed
       hyaluronic acid, sodium acetylated hyaluronate, polyglyceryl-10 laurate, polyglyceryl-10
        myristate, glyceryl caprylate, ethylhexylglycerin , Caprylyl glycol, hydrogenated
         lecithin, phytosteryl / octyldodecyllauroyl glutamate, caprylic / capric triglyceride,
          gardenia extract, sodium carbomer, maltodextrin, common jasmine oil, ylang-ylang flower oil`,
    starIngredient: 'Enzyme',
    pics: [
      'assets/product-images/0027/manyo-pure-aqua-peel-1.jpg',
      'assets/product-images/0027/manyo-pure-aqua-peel-2.jpg',
      'assets/product-images/0027/manyo-pure-aqua-peel-2.jpg',
    ],
    price: 20,
    bestseller: false,
    segment: 'Korean',
    category: 'Exfoliating',
    for: 'Face',
    availableAmount: 13,
  },
  {
    id: '0028',
    brandName: 'Manyo',
    productName: 'Biome Ampoule Toner',
    description: `Manyo Biome Ampoule Toner is a highly concentrated toner specifically
     formulated to protect and restore healthy skin. Leaves skin smooth, soft & supple without stickiness.`,
    ingredients: `Water, butylene glycol, glycerin, Pro-pandiol, pentylene glycol,
     witch hazel extract, Lactobacillus lysate, Lactobacillus fermentation lysate,
      Lactobacillus / pumpkin sourdough extract, sucrose enzyme filtrate, betaine,
       allantoin, panthenol, ceramide np, hyaluronic acid, hydrolyzed hyaluronic acid,
        hydrolyzed glycosaminoglycans, sodium hyaluronate, sodium hyaluronate crosspolymer,
         hydrogenated lecithin, Bifidobacterium filtrate, Bifidobacterium lysate, xylitol,
          anhydroxylitol, xylitylglucoside, glucose, 1,2-hexanediol, willow bark extract,
           lactobionic acid, sugar cane extract, cutibacterium granulosum (10ppb) enzyme extract filtrate,
            fructooligosaccharides, Capri-lik / Caprylic triglyceride, benzylglycol, Tocopherols, ethylhexylglycerol,
             xanthan gum, EDTA disodium, Irish moss extract, Chlorella extract`,
    starIngredient: 'Lysate',
    pics: [
      'assets/product-images/0028/manyo-biome-toner-1.jpg',
      'assets/product-images/0028/manyo-biome-toner-2.jpg',
    ],
    price: 22,
    bestseller: true,
    segment: 'Korean',
    category: 'Toner',
    for: 'Face',
    availableAmount: 99,
  },
  {
    id: '0029',
    brandName: `I'm From`,
    productName: 'Fig Cleansing Balm',
    description: `I'm from Fig Cleansing Balm contains carefully selected fresh figs grown
     in the warm region of Yong-am, South Korea. Used as the first step in cleansing, it
      gently yet effectively dissolves and removes makeup, sunscreen, dirt and excess oil,
       leaving skin clean and hydrated.`,
    ingredients: `Cetyl Ethylhexanoate, Polyethylene, Synthetic Wax, Ficus carica (fig)
     Fruit Extract, Peg-10 Isostearate, Peg-20 Glyceryl Triisostearate, Caprylic/Capric
      Triglyceride, Fragrance, Sorbitan Sesquioleate, Caprylyl Glycol, Ethylhexylglycerin,
       Moringa Oleifera Seed Oil, Curcuma longa (turmeric) Root Extrac, Melia Azadirachta
        Flower Extract, Melia Azadirachta Leaf extract, Melia Azadirachta Bark Extract,
         Corallina Officinalis Extract, Ocimum Sanctum Leaf Extract`,
    starIngredient: '',
    pics: [
      'assets/product-images/0029/iam-from-cleansing-fig-balm-1.jpg',
      'assets/product-images/0029/iam-from-cleansing-fig-balm-2.jpg',
    ],
    price: 28,
    bestseller: false,
    segment: 'Korean',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 43,
  },
  {
    id: '0030',
    brandName: `I'm From`,
    productName: 'Rice Mask',
    description: `Renewing mask with rice I'm From Rice Mask actively regenerates the skin,
     restores, delicately exfoliates and cleanses from various types of impurities. The
      mask does not dry the skin, does not cause irritation, redness, does not provoke new inflammations.`,
    ingredients: `Water, Glycerin, Dipropylene Glycol, Oryza Sativa (Rice) Powder(41,000ppm),
     Cetearyl Ethylhexanoate, Oryza Sativa (Rice) Hull Powder(30,000ppm), 1,2-Hexanediol,
      Synthetic Beeswax, Synthetic Wax, Stearic Acid, Betaine, Cetyl Alcohol, Butyrospermum
       Parkii (Shea) Butter, Hydrogenated Poly(C6-14 Olefin), Centella Asiatica Extract,
        Ficus Carica (Fig) Fruit Extract, Oryza Sativa (Rice) Bran Extract(1,000ppm),
         Oryza Sativa (Rice) Extract(1,000ppm), Laminaria Japonica Extract, Eclipta
          Prostrata Leaf Extract, Ulmus Davidiana Root Extract, Amaranthus Caudatus
           Seed Extract, Hydrogenated Lecithin, Palmitic Acid, Sorbitan Stearate,
            Glyceryl Stearate, Sodium Polyacrylate, Dimethicone, Cyclopentasiloxane,
             Xanthan Gum, Magnesium Aluminum Silicate, Allantoin, Tocopheryl Acetate,
              Butylene Glycol, Disodium Edta, Hydrolyzed Hyaluronic Acid, Myristic Acid,
               Fructooligosaccharides, Lecithin, Beta-Glucan, Ceramide Np, Peg-100 Stearate,
                Hydroxyacetophenone, Ethylhexylglycerin`,
    starIngredient: 'Centella',
    pics: [
      'assets/product-images/0030/iam-from-rice-mask-1.jpg',
      'assets/product-images/0030/iam-from-rice-mask-2.jpg',
    ],
    price: 12,
    bestseller: false,
    segment: 'Korean',
    category: 'Mask',
    for: 'Face',
    availableAmount: 38,
  },
  {
    id: '0031',
    brandName: `I'm From`,
    productName: 'Pear Serum',
    description: `I'm From Pear Serum Moisturizing Face Serum with pear enzyme refreshes the skin,
     fills it with useful vitamins and minerals, and also deeply moisturizes and returns a
      healthy color. It also helps to relieve signs of fatigue, smoothes fine wrinkles and eliminates peeling.`,
    ingredients: `Pyrus Ussuriensis Leaf Extract 83%, Glycerin, Methylpropanediol,
     Water, Butylene Glycol, Dipropylene Glycol, Glycereth-26, Chondrus Crispus Extract,
      Saccharum Officinarum (Sugarcane) Extract, Pyrus Pyrifolia (Pear) Fruit Extract (0.1%),
       Sodium Hyaluronate, Theobroma Cacao (Cocoa) Seed Extract, Hydroxyethyl Urea, Panthenol,
        1,2-Hexanediol, Polyglyceryl-10 Laurate, Acrylates/C10-30 Alkyl Acrylate Crosspolymer,
         Caprylyl Glycol, Tromethamine, Sodium Phytate, Allantoin, Dextrin, Xanthan Gum`,
    starIngredient: '',
    pics: [
      'assets/product-images/0031/iam-from-pear-serum-1.jpg',
      'assets/product-images/0031/iam-from-pear-serum-2.jpg',
      'assets/product-images/0031/iam-from-pear-serum-3.jpg',
      'assets/product-images/0031/iam-from-pear-serum-4.jpg',
    ],
    price: 20,
    bestseller: false,
    segment: 'Korean',
    category: 'Serum',
    for: 'Face',
    availableAmount: 6,
  },
  {
    id: '0032',
    brandName: `I'm From`,
    productName: 'Beet Purifying Mask',
    description: `I'm From Beet Purifying Mask is a wash-off mask containing 1.5% red beet
     enzyme from Tamyang, South Korea. Soft, creamy clay moisturizing formula unclogs pores
      and controls sebum for a clear complexion.`,
    ingredients: `Water, Kaolin, Dipropylene Glycol, Propanediol, Cetyl Alcohol,
     Cellulose, Caprylic/Capric Triglyceride, 1,2-Hexanediol, Arachidyl Alcohol,
      Glyceryl Stearate, Isononyl Isononanoate, Palmitic Acid, Beta Vulgaris (Beet)
       Root Powder, Stearic Acid, Behenyl Alcohol, Arachidyl Glucoside, Bentonite,
        Cocos Nucifera (Coconut) Shell Powder, Vitis Vinifera (Grape) Seed Powder,
         Hydroxyacetophenone, Polyacrylate-13, Xanthan Gum, Hydrogenated Polyisobutene,
          Potassium Cetyl Phosphate, Ethylhexylglycerin, Fragrance, Disodium Edta,
           Iron Oxides(Ci 77491), Polyglyceryl-10 Laurate, Ethylhexyl Palmitate,
            Myristic Acid, Sorbitan Isostearate, Glucose, Panthenol, Beta Vulgaris
             (Beet) Root Extract, Sucrose, Tocopherol, Citric Acid, Gluconolactone`,
    starIngredient: 'Enzyme',
    pics: [
      'assets/product-images/0032/iam-from-beet-mask-1.jpg',
      'assets/product-images/0032/iam-from-beet-mask-2.jpg',
      'assets/product-images/0032/iam-from-beet-mask-3.jpg',
      'assets/product-images/0032/iam-from-beet-mask-4.jpg',
    ],
    price: 32,
    bestseller: false,
    segment: 'Korean',
    category: 'Mask',
    for: 'Face',
    availableAmount: 8,
  },
  {
    id: '0033',
    brandName: `I'm From`,
    productName: 'Beet Energy Ampoule',
    description: `I'm From Beet Energy Ampoule, a beet-based radiance serum, 
    restores skin tone, evens out tone and deeply moisturizes in an instant.
    The composition of the serum includes beetroot extract (81.5%), grown
     in the picturesque county in South Korea - Tamyang. This extract is
      obtained using the cold decoction extraction method, so all the
       beneficial substances contained in the beetroot remain intact.
    Serum deeply fills the skin with useful vitamins and microelements,
     improves skin elasticity and gives it a healthy glow. Features a lightweight
      texture that glides on easily and absorbs quickly.`,
    ingredients: `Beta Vulgaris (Beet) Root Extract, Glycerin, Squalane, Propanediol,
     1,2-Hexanediol, Niacinamide, Acrylates/C10-30 Alkyl Acrylate Crosspolymer,
      Tromethamine, Xanthan Gum, Panthenol, Adenosine, Allantoin, Carnosine`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0033/iam-from-beet-serum-1.jpg',
      'assets/product-images/0033/iam-from-beet-serum-2.jpg',
      'assets/product-images/0033/iam-from-beet-serum-3.jpg',
    ],
    price: 32,
    bestseller: false,
    segment: 'Korean',
    category: 'Serum',
    for: 'Face',
    availableAmount: 15,
  },
  {
    id: '0034',
    brandName: `I'm From`,
    productName: 'Mugwort Essence',
    description: `I'm From Mugwort Essence Essence - Soothing Facial Essence -
     Contains 100% concentrated wormwood extract grown in Ganghwa, South Korea
      to treat skin problems and improve skin texture for clear, smooth skin.
       The essence also has a unique, refreshing scent and is free of harmful additives.
    This soothing essence is made from just one ingredient - mugwort extract.
     Wormwood is an ingredient long known from traditional Korean medicine.
      It effectively soothes and heals the skin, has anti-inflammatory and
       antibacterial properties. Considered to be the ideal ingredient for
        sensitive and acne-prone skin.`,
    ingredients: `Artemisia Princeps Extract 100%`,
    starIngredient: '',
    pics: [
      'assets/product-images/0034/iam-from-mugwort-toner-1.jpg',
      'assets/product-images/0034/iam-from-mugwort-toner-2.jpg',
    ],
    price: 21,
    bestseller: false,
    segment: 'Korean',
    category: 'Toner',
    for: 'Face',
    availableAmount: 42,
  },
  {
    id: '0035',
    brandName: `I'm From`,
    productName: 'Vitamin Tree Water-Gel',
    description: `I'm from Vitamin Tree Water-Gel Vitamin Moisturizing Face Gel
     contains 68% sea buckthorn extract, perfectly moisturizes the skin, fills
      it with useful vitamins and trace elements. The light texture of the gel
       is quickly absorbed, does not weigh down and leaves behind a feeling of
        hydration for the whole day.`,
    ingredients: `Hippophae Rhamnoides Extract, Glycerin. Butylene Glycol, Methylpropanediol,
     Dipropylene Glycol, Water, Niacinamide, 1,2-Hexanediol, Cyclopentasiloxane,
      Hippophae Rhamnoides Fruit Extract, Cyclohexasiloxane, Sodium Polyacryloyldimethyl
       Taurate, Biosaccharide gum-1, Sodium Hyaluronate, Panthenol, Dipotassium Glycyrrhizate,
        Hydrogenated Polydecene, Trideceth-10, Portulaca Oleracea Extract, Hamamelis Virginiana (Witch Hazel)
         Extract, Chamomilla Recutita (Matricaria) Flower Extract, Saussurea Involucrata Extract,
          Rubus Chamaemorus Fruit Extract, Selaginella Lepidophylla Extract, Carbomer, Arginine,
           Allantoin, Bambusa Vulgaris Water, Nelumbo Nucifera Flower Water, Aloe Barbadensis Leaf
            Water, Pentylene Glycol, Boswellia Serrata Resin Extract, Ethylhexylglycerin,
             Ethyl Ascorbyl Ether, Phenoxyethanol`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0035/iam-from-vitamin-tree-water-gel-1.jpg',
      'assets/product-images/0035/iam-from-vitamin-tree-water-gel-2.jpg',
    ],
    price: 28,
    bestseller: true,
    segment: 'Korean',
    category: 'Cream',
    for: 'Face',
    availableAmount: 88,
  },
  {
    id: '0036',
    brandName: `I'm From`,
    productName: 'Ginseng Eye Cream',
    description: `Anti-aging eye cream with ginseng I'm from Ginseng Eye Cream
     restores dry and lost skin under the eyes, deeply nourishes and relieves
      peeling and dryness. The cream has a light creamy texture, absorbs quickly
       and leaves behind a feeling of moisture for the whole day.`,
    ingredients: `Water, Butylene Glycol, Caprylic/Capric Triglyceride, Glycerin,
     Red Ginseng Extract, Cetearyl Olivate, Simmondsia Chinensis (Jojoba) Seed Oil,
      Butyrospermum Parkii (Shea) Butter, Cetearyl Alcohol, Sorbitan Olivate, Beeswax,
       Methylpropanediol, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate
        Copolymer, Isododecane, Betaine, Xanthan Gum, Usnea Barbata (Lichen) Extract,
         Sodium Hyaluronate, Angelica Gigas Root Extract, Panax Ginseng Root Extract,
          1,2-Hexanediol, Caprylyl Glycol, Dimethicone, Dimethicone/Vinyl Dimethicone
           Crosspolymer, Glyceryl Caprylate, Soluble Collagen, Dipotassium Glycyrrhizate,
            Allantoin, Adenosine, Disodium EDTA, Pulsatilla Koreana Extract, Zanthoxylum
             Piperitum Fruit Extract, Ethylhexylglycerin, Sorbitan isostearate, Squalane,
              Sodium Acetylated Hyaluronate, Hydrolyzed Hyaluronic Acid, Fragrance`,
    starIngredient: '',
    pics: [
      'assets/product-images/0036/iam-from-ginseng-eye-cream-1.jpg',
      'assets/product-images/0036/iam-from-ginseng-eye-cream-2.jpg',
    ],
    price: 38,
    bestseller: true,
    segment: 'Korean',
    category: 'Eye Cream',
    for: 'Face',
    availableAmount: 18,
  },
  {
    id: '0037',
    brandName: `I'm From`,
    productName: 'Ginseng Serum',
    description: `I'm from Ginseng Serum Anti-Aging Ginseng Serum is formulated
     for aging skin that needs deep nourishment and hydration. The light honey
      texture of the product is easily distributed over the skin, quickly absorbed
       and does not leave a sticky feeling on the skin.`,
    ingredients: `Water, Red Ginseng Extract (7.98 %), Butylene Glycol, Betaine, 1,2- Hexanediol,
     Camelia Sinensis Leaf Extract, Glycerin, Panax Ginseng Seed Oil, Glycyrrhiza Uralensis (licorice)
      Root Extract, Paeonia Albiflora Rootextract, Angelica Gigas Root Extract, Rheum Palmatum Root Extract,
       Angelica Pubescens Root Extract, Schizonepeta Tenuifolia Extract, Phellodendron Amurfnse Bark
        Extract, Hydroxyethylcellulose, Cyclopentasiloxane, Dimethiconol Bis-peg-18 Methyl Ether
         Dimethyl Silane. Ethoxydiglycol, Acrylates / C10-30 Alkyl Acrylate Crosspolymer, Tromethamine,
          Peg-60 Hydrogenated Castor Oil, Ethylhexylglycerin, Hydrolyzed Glycosaminoglycans,
           Hyaluronic Acid, Giyceryl Polyacrylate, Adenosine, Disodium EDTA`,
    starIngredient: '',
    pics: [
      'assets/product-images/0037/iam-from-ginseng-serum-1.jpg',
      'assets/product-images/0037/iam-from-ginseng-serum-2.jpg',
    ],
    price: 25,
    bestseller: false,
    segment: 'Korean',
    category: 'Serum',
    for: 'Face',
    availableAmount: 14,
  },
  {
    id: '0038',
    brandName: `I'm From`,
    productName: 'Mugwort Cream',
    description: `I'm from Mugwort Cream soothing face cream based on wormwood
     perfectly soothes irritated skin, tones, evens out tone and fights breakouts.
      The light creamy texture of the cream is quickly absorbed and leaves a
       feeling of moisture all day long.`,
    ingredients: `Artemisia Princeps Extract, Propanediol, Cyclopentasiloxane,
     Glycerin, Cetyl Ethylhexanoate, Cyclohexasiloxane, Stearic Acid, Butyrospermum Parkii
      (Shea) Butter, Butylene Glycol, Hydrogenated Lecithin, Arachidyl Alcohol, Arachidyl
       Glucoside, Pinus Palustris Leaf Extract, Ulmus Davidiana Root Extract, Ulmus
        Davidiana Root Extract, Oenothera Biennis (Evening Primrose) Flower Extract,
         Water, 1,2-Hexanediol, Caprylhydroxamic Acid, C14-28 Alkyl Acid, Stearyl
          Alcohol, Behenyl Alcohol, Polyglyceryl-2 Stearate, Glyceryl Stearate,
           Panthenol, Dipotassium Glycyrrhizate, Allatoin, Boswellia Serrata
            Resin Extract, Ammonium Acryloyldimethyltaurate/ VP Copolymer,
             Hydroxyethyl Acrylate/ Sodium Acryloydimethyl Taurate Copolymer,
              Dimethiconol, Saccharamyces/ Viscum Album (Misletoe) Ferment Extract,
               Lactobacillus/ Soybean Ferment Extract, Saccharomyces/ Viscum Album (Misletoe)
                Ferment Extract, Lactobacillus/ Soybean Ferment Extract, Saccharomyces/ Imperata
                 Cylindrica Root Ferment Extract, Disodium EDTA, Polyglutamic Acid, Pueraria
                  Lobata Root Extract, Artemisia Vulgaris Oil`,
    starIngredient: '',
    pics: [
      'assets/product-images/0038/iam-from-mugwort-cream-1.jpg',
      'assets/product-images/0038/iam-from-mugwort-cream-2.jpg',
    ],
    price: 40,
    bestseller: false,
    segment: 'Korean',
    category: 'Cream',
    for: 'Face',
    availableAmount: 3,
  },
  {
    id: '0039',
    brandName: `I'm From`,
    productName: 'Rice Cream',
    description: `I'm from Rice Cream is a simple yet powerful moisturizer formulated
     with 41% rice bran extract, rich in ceramides. It effectively controls sebum,
      retains moisture and firms the skin. The cream has a silky creamy texture that
       instantly melts into the skin, giving it a healthy glow.`,
    ingredients: `Rice bran water (41%), purified water, glycerin, butylene glycol, cetyl
     ethyl hexanoate, pentaerythrityl tetraethyl hexanoate, hydrogenated polyaisobutene,
      synthetic bead wax, shea butter, polyglyceryl-3 Methyl Glucose Distearate,
       Vinyl Dimethicone, Pentylene Glycol, 1,2-Nucleic Acid Diol, Sodium Hyaluronate,
        Hydrolyzed Hyaluronic Acid, Rice Bran Oil (8ppm), Glyceryl Stearate,
         Ammonium Acryloyldimethyltaurate/V Picopolymer, Bisabolol, Cetearylolivate,
          Panthenol, Sorbitanolibate, Caprylyl Glycol, Ethylhexyl Glycerin, Adenosine,
           Trisodium Ethylene Diaminida Iseoksi Nate, Ceramide Np, Tocopherol, Phytosphingosine,
            Caprylic/Capric Triglyceride, Hydrogenated Lecithin, Behenyl Alcohol, Xanthan Gum`,
    starIngredient: '',
    pics: [
      'assets/product-images/0039/iam-from-rice-cream-1.jpg',
      'assets/product-images/0039/iam-from-rice-cream-2.jpg',
      'assets/product-images/0039/iam-from-rice-cream-3.jpg',
    ],
    price: 37,
    bestseller: false,
    segment: 'Korean',
    category: 'Cream',
    for: 'Face',
    availableAmount: 5,
  },
  {
    id: '0040',
    brandName: `I'm From`,
    productName: 'Rice Serum',
    description: `I'm from Rice Serum brightens and deeply hydrates skin to prevent dryness and flaking.
     The light and refreshing texture instantly melts into the skin, leaving a feeling of freshness and moisture.`,
    ingredients: `Aspergillus / rice germ fermentation extract filtrate (73%), propanediol, glycerin,
     methylpropanediol, cyclopentasiloxane, 1,2-hexanediol, niacinamide, caprylylmethicone, purified water,
      cyclo Hexasiloxane, Betaine, Squalane, Ammonium Acryloyl Dimethyl Taurate/V Pico Polymer,
       C12-14 Pares-12, Panthenol, C30-45 Alkylcetearyl Dimethicone Crosspolymer, Allantoin,
        Ethylhexyl Glycerin , Tranexamic Acid, Dipotassium Glycyrrhizate, Xanthan Gum, Adenosine,
         Disodium Dithiazole, Pentylenglycol, Alpha-Glucan Oligosaccharide, Hydrolyzed Hyaluronic
          Acid, Madecassoside, Sodium Hyaluronate, Purslane Extract, Hydroxypropyl Cyclodextrin, Glutathione`,
    starIngredient: '',
    pics: [
      'assets/product-images/0040/iam-from-rice-serum-1.jpg',
      'assets/product-images/0040/iam-from-rice-serum-2.jpg',
      'assets/product-images/0040/iam-from-rice-serum-3.jpg',
    ],
    price: 32,
    bestseller: false,
    segment: 'Korean',
    category: 'Serum',
    for: 'Face',
    availableAmount: 18,
  },
  {
    id: '0041',
    brandName: `I'm From`,
    productName: 'Fig Boosting Essence',
    description: `I'm from Fig Boosting Essence - Contains 62.7% Fig Boosting Essence to help deliver
     moisture deep into the skin while purifying excess oil and dead skin cells.
      In addition, it improves the absorption of the next stages of skin care.`,
    ingredients: `Ficus Carica (Fig) Fruit Extract, Dipropylene Glycol, Glycerin, Propanediol,
     1,2-Hexanediol, Water, Pentylene Glycol, Chlorella Vulgaris Extract, Sodium Hyaluronate,
      Glycine Soja (Soybean) Seed Extract, Polyglyceryl-10 Laurate, Glucose, Panthenol,
       Butylene Glycol, Ethylhexylglycerin, Diphenyl Dimethicone, Fructooligosaccharides,
        Fructose, Triethylhexanoin, Allantoin, Betaine Salicylate,
         Hydrogenated Lecithin, Octanediol, Tocopherol, Xanthan Gum, Disodium EDTA`,
    starIngredient: '',
    pics: [
      'assets/product-images/0041/iam-from-fig-essence-1.jpg',
      'assets/product-images/0041/iam-from-fig-essence-2.jpg',
      'assets/product-images/0041/iam-from-fig-essence-3.jpg',
    ],
    price: 26,
    bestseller: false,
    segment: 'Korean',
    category: 'Toner',
    for: 'Face',
    availableAmount: 14,
  },
  {
    id: '0042',
    brandName: `I'm From`,
    productName: 'Rice Toner',
    description: `Nourishing toner with rice extract I'm From Rice Toner forms
     a protective barrier on the skin, preventing moisture loss, restores dry and
      tired skin. Formulated with pesticide-free organic rice from Yeoju, South
       Korea to hydrate, brighten and rejuvenate dry, dull and irritated skin.`,
    ingredients: `Rice extract, Methylpropanediol, Triethylhexanoin, Hydrogenated poly
     (C6-14 olefin), Niacinamide, Pentylene glycol, Common Purslane extract,
      Rice bran extract, Japanese elm bark extract, Amaranthus caudatus seed
       extract, Hydrogenated lecithin, Distilled water, Polyglyceryl-10-myristate,
        Butylene glycol, Adenosine, Cellulose gum, Ethylhexylglycerin, 1,2-Hexanediol.`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0042/iam-from-rice-toner-1.jpg',
      'assets/product-images/0042/iam-from-rice-toner-2.jpg',
    ],
    price: 28,
    bestseller: false,
    segment: 'Korean',
    category: 'Toner',
    for: 'Face',
    availableAmount: 12,
  },
  {
    id: '0043',
    brandName: `I'm From`,
    productName: 'Rice Mask',
    description: `I'm From Rice Mask is a revitalizing rice mask formulated with specially grown rice
     in Yeoju City. Rice has a number of healing properties for the skin: it regenerates and
      increases firmness and elasticity. The mask gently cleanses and exfoliates
       the skin without drying or irritating it.`,
    ingredients: `Water, Glycerin, Dipropylene glycol, Oryza sativa (rice) powder,
     Cetearyl ethylhexanoate, Oryza sativa (rice) hull powder, Beeswax, 1,2-hexanediol,
      Stearic acid, Butyrospermum parkii (shea) butter, Betaine, Cetyl alcohol, Hydrogenated
       poly(c6-14 olefin), Saccharomyces ferment filtrate, Dimethicone, Cyclopentasiloxane,
        Phenoxyethanol, Sorbitan stearate, Glyceryl stearate, Methylpropanediol, Sodium polyacrylate,
         Xanthan gum, Peg-100 stearate, Allantoin, Fragrance, Oryza sativa (rice) bran extract,
          Oryza sativa (rice) extract, Tocopheryl acetate, Algae extract, Eclipta prostrata
           leaf extract, Avena sativa (oat) kernel extract, Cynara scolymus (artichoke) leaf
            extract, Pteris multifida extract, Amaranthus caudatus seed extract, Ulmus davidiana
             root extract, Butylene glycol, Magnesium aluminum silicate, Ethylhexylglycerin,
              Disodium edta, Hydrogenated lecithin, Polyquaternium-51, Hydrolyzed hyaluronic
               acid, Beta-glucan, Hydrogenated polyisobutene, Squalane, Alcohol, Argania spinosa
                kernel oil, Isononyl isononanoate, Polyglyceryl-10 stearate, Cetearyl alcohol,
                 Fructooligosaccharides, Polyglyceryl-2 dipolyhydroxystearate, Lecithin,
                  Inulin lauryl carbamate, Disodium stearoyl glutamate`,
    starIngredient: '',
    pics: [
      'assets/product-images/0043/iam-from-rice-mask-1.jpg',
      'assets/product-images/0043/iam-from-rice-mask-2.jpg',
      'assets/product-images/0043/iam-from-rice-mask-3.jpg',
    ],
    price: 26,
    bestseller: false,
    segment: 'Korean',
    category: 'Mask',
    for: 'Face',
    availableAmount: 13,
  },
  {
    id: '0044',
    brandName: `I'm From`,
    productName: 'Honey Mask',
    description: `I'm From Honey Mask is the ideal face mask for dry, irritated and
     dehydrated skin in need of quick nourishment. Lovely grown and harvested honey
      from Mount Chirisan deeply nourishes, softens and restores environmentally damaged skin.`,
    ingredients: `Honey, Caprylic/Capric Triglyceride, PEG-7 Glyceryl Cocoate,
     Disteardimonium Hectorite, Macadamia Integrifolia Seed Oil, Helianthus Annuus (Sunflower)
      Seed Oil, Pentylene Glycol, Microcrystalline Wax, Polysorbate 20, Butyrospermum Parkii
       (Shea) Butter, Beeswax, Tocopheryl Acetate, Argania Spinosa Kernel Extract, Corylus Avellana
        (Hazel) Seed Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Snail Secretion Filtrate, Water,
         Bambusa Vulgaris Water, Nelumbo Nucifera Flower Water, Aloe Barbadensis Leaf Water, Propolis
          Extract, Beta-Glucan, Bee Venom, Citrus Paradisi (Grapefruit) Fruit Extract, Sophora
          Angustifolia Root Extract, Eugenia Caryophyllus (Clove) Flower Extract, Eucalyptus
           Globulus Leaf Extract, Punica Granatum Fruit Extract, Bambusa Vulgaris Extract,
            Butylene Glycol, Glycerin`,
    starIngredient: '',
    pics: [
      'assets/product-images/0044/iam-from-honey-mask-1.jpg',
      'assets/product-images/0044/iam-from-honey-mask-2.jpg',
      'assets/product-images/0044/iam-from-honey-mask-3.jpg',
      'assets/product-images/0044/iam-from-honey-mask-4.jpg',
    ],
    price: 22,
    bestseller: false,
    segment: 'Korean',
    category: 'Mask',
    for: 'Face',
    availableAmount: 6,
  },
  {
    id: '0045',
    brandName: `I'm From`,
    productName: 'Fig Scrub Mask',
    description: `Regular mask - scrub with fig powder and black sugar I'm From
     Fig Scrub Mask gently cleanses the skin of impurities, dead cells and sebum.
      Contains powdered figs grown in the warm region of Yeonam, South Korea. Thanks
       to its carefully thought-out texture, the mask effectively cleanses the skin
        without irritating or injuring it.`,
    ingredients: `Caprylic/Capric Triglyceride, Sucrose, PEG-7 Glyceryl Cocoate,
     Stearalkonium Hectorite, C13-15 Alkane, Ficus Carica (Fig) Fruit Powder (1,2%),
      Euphorbia Cerifera (Candelilla) Wax, Prunus Amygdalus Dulcis (Sweet Almond) Seed Meal,
       Fragrance(Parfum), Juglans Regia (Walnut) Shell Powder, Caprylyl Glycol, Caramel`,
    starIngredient: '',
    pics: [
      'assets/product-images/0045/iam-from-fig-mask-1.jpg',
      'assets/product-images/0045/iam-from-fig-mask-2.jpg',
      'assets/product-images/0045/iam-from-fig-mask-3.jpg',
    ],
    price: 22,
    bestseller: false,
    segment: 'Korean',
    category: 'Mask',
    for: 'Face',
    availableAmount: 9,
  },
  {
    id: '0046',
    brandName: `I'm From`,
    productName: 'Mugwort Mask',
    description: `I'm From Mugwort Mask is a purifying mask that instantly soothes irritated
     and sensitive skin. Formulated with a mugwort harvest from Ganghwa County in South Korea,
      this mask helps detoxify the skin and replenishes it with essential vitamins and minerals.`,
    ingredients: `Water, Butylene Glycol, Glycerin, Artemisia Princeps Leaf Powder, 1,2-Hexanediol,
     Cordyceps Sinensis Extract, Polygonum Cuspidatum Root Extract, Scutellaria Baicalensis
      Root Extract, Methylpropanediol, Ligularia Fishceri Leaf Extract, Rosa Davurica Bud
       Extract, Camellia Sinensis Leaf Extract, Glycyrrhiza Glabra (Licorice) Root Extract,
        Chamomilla Recutita (Matricaria) Flower Extract, Rosmarinus Officinalis (Rosemary)
         Leaf Extract, Centella Asiatica Extract, Glyceryl Polyacrylate, Sodium Polyacrylaste,
          Carbomer, Arginine, Phenoxyethanol, Allantoin, Dipotassium Glycyrrhizate, Panthenol,
           Xanthan Gum, Disodium EDTA`,
    starIngredient: '',
    pics: [
      'assets/product-images/0046/iam-from-mugwort-mask-1.jpg',
      'assets/product-images/0046/iam-from-mugwort-mask-2.jpg',
      'assets/product-images/0046/iam-from-mugwort-mask-3.jpg',
      'assets/product-images/0046/iam-from-mugwort-mask-4.jpg',
    ],
    price: 21,
    bestseller: false,
    segment: 'Korean',
    category: 'Mask',
    for: 'Face',
    availableAmount: 10,
  },
  {
    id: '0047',
    brandName: `Dear, Klairs`,
    productName: 'All-Day Airy Sunscreen SPF50+ PA++++',
    description: `Light face sunscreen Dear, Klairs All-Day Airy Sunscreen SPF50+ PA++++ -
     airy texture and reliable UV protection in one bottle. The light texture of the
      cream creates a weightless coating.`,
    ingredients: `Aqua (Water), Dibutyl Adipate, Butyloctyl Salicylate, Diethylamino Hydroxybenzoyl
     Hexyl Benzoate, Polysilicone-15, C12-15 Alkyl Benzoate, Ethylhexyl Triazone,
      Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Polymethylsilsesquioxane, Glycerin,
       Niacinamide, Polyglyceryl-6 Stearate, Cetearyl Olivate, Microcrystalline Cellulose,
        Panthenol, Silica, Sorbitan Olivate, Dipropylene Glycol, Hydroxyacetophenone,
         Poly C10-30 Alkyl Acrylate, Polyglyceryl-6 Behenate, Allantoin, Caprylyl Glycol,
          Stearyl Alcohol, Glyceryl Stearate, Acrylates/C10-30 Alkyl Acrylate Crosspolymer,
           Tromethamine, Adenosine, Cetearyl Alcohol, Disodium EDTA, Butylene Glycol,
            Portulaca Oleracea Extract, Aloe Barbadensis Leaf Extract, Dioscorea Japonica
             Root Extract, Laminaria Japonica Extract, Viola Mandshurica Flower Extract,
              Ulmus Davidiana Root Extract, Dipotassium Glycyrrhizate, Lepidium Meyenii Root Extract,
               1,2-Hexanediol, Lycium Chinense Fruit Extract, Fragaria Chiloensis (Strawberry)
                Fruit Extract, Berberis Vulgaris Root Extract, Morus Nigra Fruit Extract`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0047/dear-klairs-sunscreen-1.jpg',
      'assets/product-images/0047/dear-klairs-sunscreen-2.jpg',
    ],
    price: 32,
    bestseller: false,
    segment: 'Korean',
    category: 'Cream',
    for: 'Face',
    availableAmount: 18,
  },
  {
    id: '0048',
    brandName: `Dear, Klairs`,
    productName: 'Gentle Black Facial Cleanser',
    description: `Creamy foam for deep skin cleansing Klairs Gentle Black Facial Cleanser has
     a delicate creamy texture for delicate and deep cleansing of the skin. The product
      thoroughly cleanses the surface of the skin from various types of contaminants,
       while not drying or clogging pores.`,
    ingredients: `Water, Glycerin, Sodium Cocoyl Glycinate, Sodium Lauroyl Glutamate,
     1,2-Hexanediol, Hydroxypropyl Starch Phosphate, Lauryl Betaine, Hydroxyacetophenone,
      Ethylhexylglycerin, Sodium Chloride, Decylene Glycol, Butylene Glycol, Dipropylene Glycol,
       Laminaria Japonica Extract, Eclipta Prostrata Leaf Extract, Nigella Sativa Seed Extract,
        Hydrogenated Lecithin, Fructooligosaccharides, Amaranthus Caudatus Seed Extract, Ulmus
         Davidiana Root Extract, Beta-Glucan, Ficus Carica (Fig) Fruit Extract, Centella Asiatica
          Extract, Rubus Fruticosus (Blackberry) Fruit Extract, Hydrolyzed Hyaluronic Acid,
           Tuber Melanosporum Extract, Tocopherol, Ceramide Np, Glycine Soja (Soybean) Seed
            Extract, Aspartic Acid, Acetyl Hexapeptide-8`,
    starIngredient: 'Centella',
    pics: [
      'assets/product-images/0048/dear-klairs-black-facial-cleanser-1.jpg',
      'assets/product-images/0048/dear-klairs-black-facial-cleanser-2.jpg',
    ],
    price: 23,
    bestseller: false,
    segment: 'Korean',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 22,
  },
  {
    id: '0049',
    brandName: `Dear, Klairs`,
    productName: 'Fundamental Watery Oil Drop',
    description: `Dear, Klairs Fundamental Watery Oil Drop anti-aging serum for the
     radiance of the skin of the face - deeply moisturizes and nourishes the skin,
      keeps the skin nourished and soft for a long time. Serum helps retain moisture
       in skin cells, prevents dehydration, eliminates dryness and flaking.`,
    ingredients: `Aqua(Water), Glycerin, Butylene Glycol, Camellia Sinensis Leaf Water,
     Oryza Sativa (Rice) Extract, Bifida Ferment Extract, Betaine, Dipropylene Glycol,
      Sorbitol, 1,2-Hexanediol, Aspergillus/Rice Ferment Extract, Camellia Sinensis Leaf
       Extract, Dipotassium Glycyrrhizate, Sorbitan Sesquioleate, Ethylhexylglycerin,
        Sodium Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Sodium Hyaluronate,
         Hydroxyethylcellulose, Xanthan Gum, Arginine, Carbomer, Tocopheryl Acetate,
          Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Laminaria Japonica Extract,
           Ceramide NP, Hydrogenated Lecithin, Copper Tripeptide-1, Acetyl Hexapeptide-8`,
    starIngredient: 'Lysate',
    pics: [
      'assets/product-images/0049/dear-klairs-watery-oil-drop-1.jpg',
      'assets/product-images/0049/dear-klairs-watery-oil-drop-2.jpg',
    ],
    price: 28,
    bestseller: false,
    segment: 'Korean',
    category: 'Serum',
    for: 'Face',
    availableAmount: 20,
  },
  {
    id: '0050',
    brandName: `Dear, Klairs`,
    productName: 'Gentle Black Fresh Cleansing Oil',
    description: `Moisturizing hydrophilic oil Dear, Klairs Gentle Black Fresh Cleansing
     Oil is a high-quality and deep cleansing for every day without skin irritation.
      The oil cleanses all types of dirt: whether it be foundation, dust or sebum.
       In addition to a thorough cleansing, the product also cares for the skin - all thanks
        to blackcurrant, bean and black sesame oils, which are sources of
         vitamins and minerals that transform the skin.`,
    ingredients: `Helianthus Annuus(Sunflower) Seed Oil, Caprylic/Capric
     Triglyceride, PEG-20 Glyceryl Triisostearate, Vitis Vinifera (Grape)
      Seed Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Ribes Nigrum (Black Currant) Seed Oil`,
    starIngredient: '',
    pics: [
      'assets/product-images/0050/dear-klairs-black-cleansing-oil-1.jpg',
      'assets/product-images/0050/dear-klairs-black-cleansing-oil-2.jpg',
    ],
    price: 29,
    bestseller: false,
    segment: 'Korean',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 17,
  },
  {
    id: '0051',
    brandName: `Dear, Klairs`,
    productName: 'Fundamental Water Gel Cream',
    description: `Based on green tea hydrolate, Klairs Fundamental Water Gel Cream
     provides deep nourishment and hydration for all skin types, including
      dehydrated ones. The tool has a weightless texture that is instantly
       absorbed and does not leave a sticky film on the face.`,
    ingredients: `Camellia Sinensis Leaf Water, Butylene Glycol, Glycerin,
     Aqua (Water), Ethylhexyl Palmitate, Cetyl Ethylhexanoate, 1,2-Hexanediol,
      Pentaerythrityl Tetraethylhexanoate, Panthenol, Oryza Sativa (Rice) Extract,
       HibiscusEsculentus Fruit Extract, Camellia Sinensis Leaf Extract, Laminaria Japonica
        Extract, Artemisia Vulgaris Extract, Centella Asiatica Extract, Rosmarinus Officinalis
         (Rosemary) Leaf Extract, Phytosphingosine, Caproyl Sphingosine, Tocopherol,
          Glyceryl glucoside, Hydrolyzed Hyaluronic Acid, Trehalose, Jojoba Esters, Helianthus Annuus
           (Sunflower) Seed Oil, Hydrolyzed Jojoba Esters, Glyceryl Acrylate/Acrylic Acid Copolymer,
            Cetyl Alcohol, Hydrogenated Lecithin, Ammonium Acryloyldimethyltaurate/VP Copolymer,
             Hydrogenated Polydecene, Ethylhexylglycerin, Cyclohexasiloxane`,
    starIngredient: 'Centella',
    pics: [
      'assets/product-images/0051/dear-klairs-water-gel-cream-1.jpg',
      'assets/product-images/0051/dear-klairs-water-gel-cream-2.jpg',
    ],
    price: 14,
    bestseller: false,
    segment: 'Korean',
    category: 'Cream',
    for: 'Face',
    availableAmount: 17,
  },
  {
    id: '0052',
    brandName: `Dear, Klairs`,
    productName: 'Rich Moist Foaming Cleanser',
    description: `Based on green tea hydrolate, Klairs Fundamental Water Gel Cream
     provides deep nourishment and hydration for all skin types, including
      dehydrated ones. The tool has a weightless texture that is instantly
       absorbed and does not leave a sticky film on the face.`,
    ingredients: `Aqua (Water), Sodium Lauroyl Sarcosinate, Glycerin, Propylene Glycol,
     Lauric Acid, Caprylic/Capric Triglyceride, Dimethyl Sulfone, Betaine, Stearic Acid,
      Glycyrrhiza Glabra (Licorice) Root Extract, Potassium Hydroxide, Chamaecyparis
       Obtusa Water, Ananas Sativus (Pineapple) Fruit Extract, Butylene Glycol,
        Chlorphenesin, Melaleuca Alternifolia (Tea Tree) Leaf Oil, Paeonia Suffruticosa
         Root Extract, Illicium Verum (Anise) Fruit Extract, Nelumbium Speciosum Flower
          Extract, Citrus Paradisi (Grapefruit) Fruit Extract, Scutellaria Baicalensis
           Root Extract, 1,2-Hexanediol, Capric Acid, Sodium Hyaluronate, Citric Acid,
            Panthenol, Pyridoxine HCl, Palmitic Acid, Arachidic Acid, Propanediol,
             Oleic Acid, Lysine HCl, Sodium Ascorbyl Phosphate, Acetyl Methionine,
              Theanine, Proline, Corchorus Olitorius Leaf Extract, Hibiscus Mutabilis
               Flower Extract, Linum Usitatissimum (Linseed) Seed Extract, Hibiscus
                Esculentus Fruit Extract, Arctium Lappa Root Extract, Apium Graveolens
                 (Celery) Extract, Brassica Rapa (Turnip) Leaf Extract, Oryza Sativa
                  (Rice) Bran Extract, Brassica Oleracea Capitata (Cabbage) Leaf Extract,
                   Daucus Carota Sativa (Carrot) Root Extract, Brassica Oleracea Italica
                    (Broccoli) Extract, Solanum Lycopersicum (Tomato) Fruit/Leaf/Stem
                     Extract, Aloe Barbadensis Leaf Juice, Tocopheryl Acetate, Papain,
                      Portulaca Oleracea Extract, Centella Asiatica Extract, Hydrolyzed
                       Pea Protein, Phytosterols, Lecithin, Squalane, Olea Europaea
                        (Olive) Fruit Oil, Beta-Glucan, Ceramide NP, Butyrospermum Parkii
                         (Shea) Butter, Panax Ginseng Callus Culture Extract`,
    starIngredient: '',
    pics: [
      'assets/product-images/0052/dear-klairs-moist-foaming-cleanser-1.jpg',
      'assets/product-images/0052/dear-klairs-moist-foaming-cleanser-2.jpg',
    ],
    price: 24,
    bestseller: false,
    segment: 'Korean',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 14,
  },
  {
    id: '0053',
    brandName: `Dear, Klairs`,
    productName: 'Rich Moist Soothing Cream',
    description: `Dear, Klairs Rich Moist Soothing Cream is an all-weather moisturizer
     designed to combat sensitive skin in all seasons.`,
    ingredients: `Water, Caprylic/Capric Triglyceride, Glycerin, Cetyl Alcohol, Cyclopentasiloxane,
     Glyceryl Stearate, Sodium Hyaluronate, Cetyl Ethylhexanoate, Stearic Acid, Butyrospermum
      Parkii (Shea Butter), Simmondsia Chinensis (Jojoba) Seed Oil, Beta-Glucan, Sorbitan
       Sesquioleate, Microcrystalline Wax, Betaine, PEG-100 Stearate, Ceramide 3,
        Polyquaternium-51, Sorbitan Stearate, Dimethicone, Tocopheryl Acetate, Carbomer,
         Arginine, Illicium Verum(Anise) Fruit Extract, Citrus Paradisi(Grapefruit)
          Fruit Extract, Nelumbium Speciosum Flower Extract, Paeonia Suffruticosa Root
           Extract, Scutellaria Baicalensis Root Extract, Chlorphenesin, Disodium Adenosine
            Triphosphate, Algin, Carica Papaya (Papaya) Fruit Extract, Citric Acid, Portulaca
             Oleracea Extract, Natto Gum, Centella Asiatica Extract, Althaea Rosea Flower
              Extract, Aloe Barbadensis Leaf Extract, Disodium EDTA, Apium Graveolens (Celery)
               Extract, Brassica Oleracea Capitata (Cabbage) Leaf Extract, Brassica Oleracea
                Italica (Broccoli) Extract, Brassica Rapa (Turnip) Leaf Extract, Daucus Carota
                 Sativa (Carrot) Root Extract, Oryza Sativa (Rice) Bran Extract, Solanum
                  Lycopersicum (Tomato) Fruit/Leaf/Stem Extract, Lysine HCL, Proline,
                   Sodium Ascorbyl Phosphate, Acetyl Methionine, Theanine, Lavandula
                    Angustifolia (Lavender) Oil, Eucalyptus Globulus Leaf Oil, Pelargonium
                     Graveolens Flower Oil, Citrus Limon (Lemon) Peel Oil, Citrus Aurantium
                      Dulcis (Orange) Peel Oil, Cananga Odorata Flower Oil`,
    starIngredient: 'Vitamin C',
    pics: [
      'assets/product-images/0053/dear-klairs-rich-moist-cream-1.jpg',
      'assets/product-images/0053/dear-klairs-rich-moist-cream-2.jpg',
    ],
    price: 33,
    bestseller: false,
    segment: 'Korean',
    category: 'Cream',
    for: 'Face',
    availableAmount: 21,
  },
  {
    id: '0054',
    brandName: `Dear, Klairs`,
    productName: 'Blue Calming Cream',
    description: `Dear Klairs Midnight Blue Calming Cream - instantly soothes and hydrates sensitive skin.`,
    ingredients: `Water, Cetyl Ethylhexanoate, Butylene Glycol, Glycerin, Sodium Hyaluronate,
     Caprylic/Capric Triglyceride, Centella Asiatica Extract, Sorbitan Stearate, Cetyl Alcohol,
      Butyrospermum Parkii (Shea) Butter, Argania Spinosa Kernel Oil, Simmondsia Chinensis (Jojoba)
       Seed Oil, Sorbitan Sesquioleate, Glyceryl Stearate, Stearic Acid, Portulaca Oleracea Extract,
        Anthemis Nobilis Flower Extract, Ceramide NP, Polysorbate 60, Candelilla Cera, Chlorphenesin,
         Tocopheryl Acetate, Xanthan Gum, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Morus Alba
          Root Extract, Tromethamine, Brassica Oleracea Italica (Broccoli) Extract, Guaiazulene,
           Acetyl Hexapeptide-8, Lecithin, Acetyl Glutamine, sh-Oligopeptide-1, sh-Oligopeptide-2,
            sh-Polypeptide-1, sh-Polypeptide-9, sh-Polypeptide-11, Bacillus/Soybean/Folic
             Acid Ferment Extract, Caprylyl Glycol, 1,2-Hexanediol`,
    starIngredient: 'Centella',
    pics: [
      'assets/product-images/0054/dear-klairs-blue-midnight-cream-1.jpg',
      'assets/product-images/0054/dear-klairs-blue-midnight-cream-2.jpg',
      'assets/product-images/0054/dear-klairs-blue-midnight-cream-3.jpg',
      'assets/product-images/0054/dear-klairs-blue-midnight-cream-4.jpg',
    ],
    price: 30,
    bestseller: true,
    segment: 'Korean',
    category: 'Cream',
    for: 'Face',
    availableAmount: 66,
  },
  {
    id: '0055',
    brandName: `Dear, Klairs`,
    productName: 'Supple Preparation All Over Lotion',
    description: `Klairs Supple Preparation All Over Lotion Ceramide Hydrating Lotion deeply
     hydrates dry and sensitive skin by creating a protective barrier that prevents moisture
      from evaporating. The lotion gives the skin a feeling of hydration for the whole
       day without an oily and sticky film!`,
    ingredients: `Water, Glycerin, Caprylic/Capric Triglyceride, Sodium Hyaluronate,
     Butyrospermum Parkii (Shea Butter), Cetyl Ethylhexanoate, Simmondsia Chinensis (Jojoba)
      Seed Oil, Glyceryl Stearate, Sorbitan Stearate, Cetyl Alcohol, Stearic Acid, Beta-Glucan,
       Sorbitan Sesquioleate, Microcrystalline Wax, Cyclopentasiloxane, Betaine, Ceramide NP,
        Polyquaternium-51, PEG-100 Stearate, Illicium Verum(Anise) Fruit Extract,
         Citrus Paradisi(Grapefruit) Fruit Extract, Nelumbium Speciosum Flower Extract,
          Paeonia Suffruticosa Root Extract, Scutellaria Baicalensis Root Extract,
           Dimethicone, Tocopheryl Acetate, Chlorphenesin, Carbomer, Arginine,
            Citric Acid, Ethylhexylglycerin, Portulaca Oleracea Extract, Althaea
             Rosea Flower Extract, Aloe Barbadensis Leaf Extract, Apium
              Graveolens (Celery) Extract, Brassica Oleracea Capitata (Cabbage)
               Leaf Extract, Brassica Oleracea Italica (Broccoli) Extract, Brassica
                Rapa (Turnip) Leaf Extract, Daucus Carota Sativa (Carrot) Root Extract,
                 Oryza Sativa (Rice) Bran Extract, Solanum Lycopersicum (Tomato) Fruit/Leaf/Stem
                  Extract, Natto Gum, Centella Asiatica Extract, Disodium EDTA, Lysine HCL,
                   Proline, Sodium Ascorbyl Phosphate, Acetyl Methionine, Theanine`,
    starIngredient: 'Ceramide',
    pics: [
      'assets/product-images/0055/dear-klairs-supple-preparation-all-over-lotion-1.jpg',
      'assets/product-images/0055/dear-klairs-supple-preparation-all-over-lotion-2.jpg',
      'assets/product-images/0055/dear-klairs-supple-preparation-all-over-lotion-3.jpg',
      'assets/product-images/0055/dear-klairs-supple-preparation-all-over-lotion-4.jpg',
    ],
    price: 40,
    bestseller: false,
    segment: 'Korean',
    category: 'Cream',
    for: 'Body',
    availableAmount: 12,
  },
  {
    id: '0056',
    brandName: `Dear, Klairs`,
    productName: 'Supple Unscented Toner',
    description: `Klairs Supple Unscented Toner is specially formulated for sensitive
     and reactive skin. The toner does not contain alcohol, fragrances or other
      ingredients that can cause irritation or redness.`,
    ingredients: `Water, Butylene Glycol, Dimethyl Sulfone, Betaine, Caprylic/Capric
     Triglyceride, Natto Gum, Sodium Hyaluronate, Disodium EDTA, Centella Asiatica Extract,
      Glycyrrhiza Glabra (Licorice) Root Extract, Polyquaternium-51, Chlorphenesin, Tocopheryl
       Acetate, Carbomer, Panthenol, Arginine, Luffa Cylindrica Fruit/Leaf/Stem Extract,
        Beta-Glucan, Althaea Rosea Flower Extract, Aloe Barbadensis Leaf Extract,
         Hydroxyethylcellulose, Portulaca Oleracea Extract, Lysine HCL, Proline,
          Sodium Ascorbyl Phosphate, Acetyl Methionine, Theanine, Copper Tripeptide-1`,
    starIngredient: 'Centella',
    pics: [
      'assets/product-images/0056/dear-klairs-supple-prep-toner-unscented-1.jpg',
      'assets/product-images/0056/dear-klairs-supple-prep-toner-unscented-2.jpg',
      'assets/product-images/0056/dear-klairs-supple-prep-toner-unscented-3.jpg',
      'assets/product-images/0056/dear-klairs-supple-prep-toner-unscented-4.jpg',
    ],
    price: 29,
    bestseller: false,
    segment: 'Korean',
    category: 'Toner',
    for: 'Face',
    availableAmount: 62,
  },
  {
    id: '0057',
    brandName: `Dear, Klairs`,
    productName: 'Rich Moist Sooting Serum',
    description: `Klairs Rich Moist Sooting Serum helps to make your skin care even
     more effective! Serum soothes the skin, deeply nourishes it and prevents moisture loss.`,
    ingredients: `Water, Sodium Hyaluronate, Butylene Glycol, Dimethyl Sulfone, Betaine,
     Natto Gum, Propanediol, Polyquaternium-51, Disodium EDTA, Centella Asiatica Extract,
      Glycyrrhiza Glabra (Licorice) Root Extract, Carbomer, Arginine, PEG-60 Hydrogenated
       Castor Oil, Lysine HCL, Proline, Sodium Ascorbyl Phosphate, Acetyl Methionine,
        Theanine, Chlorphenesin, Tocopheryl Acetate, Illicium Verum(Anise) Fruit Extract,
         Citrus Paradisi(Grapefruit) Fruit Extract, Nelumbium Speciosum Flower Extract,
          Paeonia Suffruticosa Root Extract, Scutellaria Baicalensis Root Extract, Panthenol,
           Luffa Cylindrica Fruit/Leaf/Stem Extract, Beta-Glucan, Althaea Rosea Flower Extract,
            Aloe Barbadensis Leaf Extract, Lavandula Angustifolia (Lavender) Oil, Eucalyptus
             Globulus Leaf Oil, Pelargonium Graveolens Flower Oil, Citrus Limon (Lemon)
              Peel Oil, Citrus Aurantium Dulcis (Orange) Peel Oil, Cananga Odorata Flower Oil,
               Portulaca Oleracea Extract, Apium Graveolens (Celery) Extract,
                Brassica Oleracea Capitata (Cabbage) Leaf Extract, Brassica Oleracea
                 Italica (Broccoli) Extract, Brassica Rapa (Turnip) Leaf Extract, Daucus
                  Carota Sativa (Carrot) Root Extract, Oryza Sativa (Rice) Bran Extract,
                   Solanum Lycopersicum (Tomato) Fruit/Leaf/Stem Extract`,
    starIngredient: 'Centella',
    pics: [
      'assets/product-images/0057/dear-klairs-moist-soothing-serum-1.jpg',
      'assets/product-images/0057/dear-klairs-moist-soothing-serum-2.jpg',
      'assets/product-images/0057/dear-klairs-moist-soothing-serum-3.jpg',
      'assets/product-images/0057/dear-klairs-moist-soothing-serum-4.jpg',
    ],
    price: 23,
    bestseller: false,
    segment: 'Korean',
    category: 'Serum',
    for: 'Face',
    availableAmount: 28,
  },
  {
    id: '0058',
    brandName: `Dear, Klairs`,
    productName: 'Supple Preparation Facial Toner',
    description: `Dear, Klairs Supple Preparation Facial Toner with phyto-oligo complex -
     moisturizes and soothes sensitive skin after cleansing, evens out skin texture,
      maintaining an optimal pH balance, which helps absorption of other products.`,
    ingredients: `Water, Butylene Glycol, Dimethyl Sulfone, Betaine, Caprylic/Capric Triglyceride,
     Natto Gum, Sodium Hyaluronate, Disodium EDTA, Centella Asiatica Extract, Glycyrrhiza
      Glabra (Licorice) Root Extract, Polyquaternium-51, Chlorphenesin, Tocopheryl Acetate,
       Carbomer, Panthenol, Arginine, Luffa Cylindrica Fruit/Leaf/Stem Extract, Beta-Glucan,
        Althaea Rosea Flower Extract, Aloe Barbadensis Leaf Extract, Hydroxyethylcellulose,
         Portulaca Oleracea Extract, Lysine HCL, Proline, Sodium Ascorbyl Phosphate, Acetyl
          Methionine, Theanine, Lavandula Angustifolia (Lavender) Oil, Eucalyptus Globulus
           Leaf Oil, Pelargonium Graveolens Flower Oil, Citrus Limon (Lemon) Peel Oil,
            Citrus Aurantium Dulcis (Orange) Peel Oil, Cananga Odorata Flower Oil, Copper Tripeptide-1`,
    starIngredient: 'Centella',
    pics: [
      'assets/product-images/0058/dear-klairs-supple-prep-toner-1.jpg',
      'assets/product-images/0058/dear-klairs-supple-prep-toner-2.jpg',
      'assets/product-images/0058/dear-klairs-supple-prep-toner-3.jpg',
      'assets/product-images/0058/dear-klairs-supple-prep-toner-4.jpg',
    ],
    price: 36,
    bestseller: true,
    segment: 'Korean',
    category: 'Toner',
    for: 'Face',
    availableAmount: 28,
  },
  {
    id: '0059',
    brandName: `Dear, Klairs`,
    productName: 'Vitamin C Drop',
    description: `Dear Vitamin C Serum 5%, Klairs Vitamin Drop Hypoallergenic Vitamin C
     Serum contains Vitamin C to help brighten skin while also providing anti-aging protection.`,
    ingredients: `Water, Propylen Glycol, Ascorbic Acid, Hydroxyethylcellulose,
     Centella Asiatica Extract, Citrus Junos Fruit Extract, Illicium Verum(Anise)
      Fruit Extract, Citrus Paradisi(Grapefruit) Fruit Extract, Nelumbium Speciosum
       Flower Extract, Paeonia Suffruticosa Root Extract, Scutellaria Baicalensis Root
        Extract, Polysorbate 60, Brassica Oleracea Italica (Broccoli) Extract, Chaenomeles
         Sinensis Fruit Extract, Citrus Aurantium Dulcis (Orange) Oil, Sodium Acrylate/Sodium
          Acryloyldimethyl Taurate Copolymer, Disodium EDTA, Lavandula Angustifolia (Lavender)
           Oil, Camellia Sinensis Callus Culture Extract, Larix Europaea Wood Extract,
            Chrysanthellum Indicum Extract, Rheum Palmatum Root Extract, Asarum Sieboldi
             Root Extract, Quercus Mongolia Leaf Extract, Persicaria Hydropiper Extract,
              Corydalis Turtschaninovii Root Extract, Coptis Chinensis Root Extract, Magnolia
               Obovata Bark Extract, Lysine HCL, Proline, Sodium Ascorbyl Phosphate, Acetyl
                Methionine, Theanine, Lecithin, Acetyl Glutamine, SH-Olgopeptide-1, SH-Olgopeptide-2,
                 SH-Polypeptide-1, SH-Polypeptide-9, SH-Polypeptide-11, Bacillus/Soybean/Folic
                  Acid Ferment Extract, Sodium Hyaluronate, Caprylyl Glycol, Butylene Glycol, 1,2-Hexanediol`,
    starIngredient: 'Vitamin C',
    pics: [
      'assets/product-images/0059/dear-klairs-vitamin-c-drop-1.jpg',
      'assets/product-images/0059/dear-klairs-vitamin-c-drop-2.jpg',
      'assets/product-images/0059/dear-klairs-vitamin-c-drop-3.jpg',
      'assets/product-images/0059/dear-klairs-vitamin-c-drop-4.jpg',
    ],
    price: 18,
    bestseller: true,
    segment: 'Korean',
    category: 'Serum',
    for: 'Face',
    availableAmount: 46,
  },
  {
    id: '0060',
    brandName: `Dear, Klairs`,
    productName: 'Fundamental Nourishing Eye Butter',
    description: `Nourishing eye cream Dear, Klairs Fundamental Nourishing Eye Butter -
     restores tired skin under the eyes, and also eliminates the signs of sleepless nights.
    The powerful formula contains peptides that improve skin elasticity and reduce
     wrinkles. The soft, butter-like texture absorbs quickly, making it ideal even
      for sensitive and oily skin. In addition, the cream does not roll off if you apply makeup on it.`,
    ingredients: `Aqua (Water), Glycerin, Stearic Acid, 1,2-Hexanediol, Helianthus Annuus
     (Sunflower) Seed Oil, Betaine, Caffeine, Phaseolus Angularis Seed Extract, Artemisia
      Princeps Leaf Extract, Camellia Sinensis Leaf Extract, Chaenomeles Sinensis Fruit
       Extract, Chrysanthellum Indicum Extract, Cinnamomum Cassia Bark Extract, Corallina
        Officinalis Extract, Curcuma Longa (Turmeric) Root Extract, Diospyros Kaki Leaf
         Extract, Melia Azadirachta Flower Extract, Melia Azadirachta Leaf Extract, Ocimum
          Sanctum Leaf Extract, Acetyl Hexapeptide-8, Copper Tripeptide-1, Oligopeptide-29,
           Oligopeptide-32, Panthenol, Pantolactone, Hydrogenated Lecithin, Hydroxyethyl
            Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Sodium Hyaluronate, Glyceryl
             Stearate, Sorbitan Isostearate, Cetearyl Alcohol, Propanediol, Arachidic Acid,
              Oleic Acid, Palmitic Acid, Caprylyl/Capryl Glucoside, Ethylhexylglycerin`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0060/dear-klairs-nourishing-eye-butter-1.jpg',
      'assets/product-images/0060/dear-klairs-nourishing-eye-butter-2.jpg',
      'assets/product-images/0060/dear-klairs-nourishing-eye-butter-3.jpg',
    ],
    price: 30,
    bestseller: false,
    segment: 'Korean',
    category: 'Eye Cream',
    for: 'Face',
    availableAmount: 16,
  },
  {
    id: '0061',
    brandName: `Dear, Klairs`,
    productName: 'Midnight Blue Youth Activating Drop',
    description: `Anti-aging night serum Dear, Klairs Midnight Blue Youth Activating Drop -
     promotes cell renewal and improves skin firmness and elasticity.`,
    ingredients: `Water, Butylene Glycol, sh-Oligopeptide-1, sh-Polypeptide-1,
     Vaccinium Angustifolium (Blueberry) Fruit Extract, Lecithin, Sorbitan Sesquioleate,
      1,2-Hexanediol, Caprylyl Glycol, PEG-60 Hydrogenated Castor Oil, Glycerin,
       Chlorphenesin, Guaiazulene, Ethylhexylglycerin, Adenosine`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0061/dear-klairs-blue-drop-midnight-youth-1.jpg',
      'assets/product-images/0061/dear-klairs-blue-drop-midnight-youth-2.jpg',
    ],
    price: 44,
    bestseller: true,
    segment: 'Korean',
    category: 'Serum',
    for: 'Face',
    availableAmount: 26,
  },
  {
    id: '0062',
    brandName: `Dear, Klairs`,
    productName: 'Fundamental Eye Awakening Gel',
    description: `Dear, Klairs Fundamental Eye Awakening Gel - Reduces the
     appearance of dark circles, improves skin tone, reduces puffiness and provides antioxidant protection.`,
    ingredients: `Water, Glycerin, 1,2-hexanediol, Butylene Glycol, Propanediol, Argania Spinosa
     Kernel Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Tocopherol, Caffeine, Phaseolus
      Angularis Seed Extract, Artemisia Princeps Leaf Extract, Camellia Sinensis Leaf
       Extract, Chaenomeles Sinensis Fruit Extract, Chrysanthellum Indicum Extract,
        Cinnamomum Cassia Bark Extract, Diospyros Kaki Leaf Extract, Perilla Frutescens
         Extract, Portulaca Oleracea Extract, Acetyl Hexapeptide-8, Copper Tripeptide-1,
          Oligopeptide-29, Oligopeptide-32, Carbomer, Hydroxyethylcellulose, Hydroxyethyl
           Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Polyglyceryl-10 Laurate,
            Sorbitan Isostearate, Caprylyl/Capryl Glucoside, Sodium PCA, Tromethamine, Ethylhexylglycerin`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0062/dear-klairs-eye-awakening-gel-1.jpg',
      'assets/product-images/0062/dear-klairs-eye-awakening-gel-2.jpg',
      'assets/product-images/0062/dear-klairs-eye-awakening-gel-3.jpg',
    ],
    price: 34,
    bestseller: false,
    segment: 'Korean',
    category: 'Eye Cream',
    for: 'Face',
    availableAmount: 116,
  },
  {
    id: '0063',
    brandName: `Dear, Klairs`,
    productName: 'Daily Softening Cucumber Water',
    description: `The Klairs Daily Skin Softening Skin soothing toner-softner with cucumber water
     perfectly tones the skin, moisturizes and returns comfort after washing. The toner also gently
      exfoliates the skin and allows further care to penetrate deeper.`,
    ingredients: `Cucumis Sativus (Cucumber) Fruit Water, Aqua (Water), Propanediol, 1,2-Hexanediol,
     Pyrus Malus (Apple) Fruit Water, Saccharum Officinarum (Sugarcane) Extract, Glycerin, Betaine,
      Panthenol, Pantolactone, Citric Acid, Sodium Citrate, Disodium EDTA`,
    starIngredient: '',
    pics: [
      'assets/product-images/0063/dear-klairs-daily-softening-cucumber-water-1.jpg',
      'assets/product-images/0063/dear-klairs-daily-softening-cucumber-water-2.jpg',
      'assets/product-images/0063/dear-klairs-daily-softening-cucumber-water-3.jpg',
    ],
    price: 22,
    bestseller: false,
    segment: 'Korean',
    category: 'Toner',
    for: 'Face',
    availableAmount: 83,
  },
  {
    id: '0064',
    brandName: `Dear, Klairs`,
    productName: 'Daily Hydrating Tea Water',
    description: `The Klairs Daily Skin Softening Skin soothing toner-softner with cucumber water
     perfectly tones the skin, moisturizes and returns comfort after washing. The toner also gently
      exfoliates the skin and allows further care to penetrate deeper.`,
    ingredients: `Camellia Sinensis Leaf Water, Aqua (Water), Glycerin, Propanediol, 1,2-Hexanediol,
     Butylene Glycol, Calendula Officinalis Flower Water, Cocos Nucifera (Coconut) Water, Betaine,
      Panthenol, Pantolactone, Trehalose, Sodium PCA, Sodium Citrate, Disodium EDTA`,
    starIngredient: '',
    pics: [
      'assets/product-images/0064/dear-klairs-hydrating-tea-water-1.jpg',
      'assets/product-images/0064/dear-klairs-hydrating-tea-water-2.jpg',
      'assets/product-images/0064/dear-klairs-hydrating-tea-water-3.jpg',
    ],
    price: 22,
    bestseller: false,
    segment: 'Korean',
    category: 'Toner',
    for: 'Face',
    availableAmount: 62,
  },
  {
    id: '0065',
    brandName: `Purito`,
    productName: 'Centella Unscented Toner',
    description: `PURITO Centella Unscented Toner for sensitive skin repairs, deeply
     hydrates and protects the skin. The composition does not contain: essential oils
      and fragrances, so it is suitable for even the most sensitive skin.`,
    ingredients: `Water, Centella Asiatica Extract, Butylene Glycol, Pentylene Glycol, Dipropylene Glycol,
     1,2-Hexanediol, Trehalose, Sodium Hyaluronate, Hamamelis Virginiana (Witch Hazel) Extract,
      Madecassoside, Asiaticoside, Asiatic Acid, Madecassic Acid, Panthenol, Carbomer, Allantoin,
       Arginine, Portulaca Oleracea Extract, Ethylhexylglycerin, Disodium EDTA`,
    starIngredient: 'Centella',
    pics: [
      'assets/product-images/0065/purito-unscented-toner-1.jpg',
      'assets/product-images/0065/purito-unscented-toner-2.jpg',
      'assets/product-images/0065/purito-unscented-toner-3.jpg',
    ],
    price: 30,
    bestseller: false,
    segment: 'Korean',
    category: 'Toner',
    for: 'Face',
    availableAmount: 38,
  },
  {
    id: '0066',
    brandName: `Purito`,
    productName: 'Centella Green Level Calming Toner',
    description: `The composition of the product does not contain a single gram of alcohol,
     so it is ideal for even the most sensitive skin prone to irritation and redness.
      Centella Green Level Calming Toner gently restores moisture levels, fights dehydration and dryness.`,
    ingredients: `Water, Centella Asiatica Extract (strengthens skin barrier),
     Butylene Glycol (humectants), Pentylene Glycol (humectants), Dipropylene Glycol
      (humectants), 1,2- Hexanediol (stabilizers), Trehalose (humectants), Glycerin
       (humectants), Sodium Hyaluronate (humectants), Polyglyceryl-10 Laurate (solubilizers),
        Panthenol (strengthens skin barrier), Carbomer (viscosity increasing agents),
         Polygyceryl-10 Myristate (solubilizers), Allantoin (skin protectant agents),
          Arginine (pH adjusters), Portulaca Oleracea Extract (skin-conditioning agents),
           Ethylhexylglycerin (skin- conditioning agents), Disodium EDTA (stabilizers),
            Citrus Aurantium Bergamia (Bergamot) Fruit Oil (skin-conditioning agents),
             Pelargonium Graveolens Flower Oil (skin-conditioning agents), Cananga
              Odorata Flower Oil (skin-conditioning agents), Rose Flower Oil
               (skin-conditioning agents), Limonene(skin-conditioning agents),
                Citronellol(skin-conditioning agents), Linalool(skin-conditioning agents)`,
    starIngredient: 'Centella',
    pics: [
      'assets/product-images/0066/purito-centella-calming-green-level-toner-1.jpg',
      'assets/product-images/0066/purito-centella-calming-green-level-toner-2.jpg',
      'assets/product-images/0066/purito-centella-calming-green-level-toner-3.jpg',
    ],
    price: 34,
    bestseller: true,
    segment: 'Korean',
    category: 'Toner',
    for: 'Face',
    availableAmount: 46,
  },
  {
    id: '0067',
    brandName: `Purito`,
    productName: 'Centella Green Level Recovery Cream',
    description: `Natural recovery cream with Centella Green Level Recovery Cream normalizes the acid-base
     balance of the skin, moisturizes it and gives a healthy complexion to your face. Healthy fresh skin
      ages and fades much more slowly, remains elastic and elastic for many months.`,
    ingredients: `Centella Asiatica Extract (50%), Water, Caprylic/Capric Triglyceride, Squalane, Glycerin,
     Cetearyl Alcohol, Niacinamide, Macadamia Ternifolia Seed Oil, Butylene Glycol, Hydrogenated lecithin,
      Butyrospermum Parkii Extract, 1,2-Hexanediol, Tribehenin, Stearic Acid, Behenic acid, Argania
       spinosa Kernel Oil, Tromethamine, Spent grain wax, Carbomer, Caprylyl Glycol, Tremella Fuciformis
        Extract, Sodium Hyaluronate, Perilla Ocymoides Seed Extract, Hamamelis Virginiana Extract, Betaine,
         Beta-Glucan, Citrus Aurantium Bergamia Fruit Oil, Xanthan Gum, Sodium carbomer, Hydroxyethylcellulose,
          Cholesterol, Adenosine, Lavandula Angustifolia Oil, Asiaticoside, Asiatic acid, Phytosphingosine,
           Ceramide NP, Madecassic acid, Tocopherol`,
    starIngredient: 'Centella',
    pics: [
      'assets/product-images/0067/purito-centella-green-level-recovery-cream-1.jpg',
      'assets/product-images/0067/purito-centella-green-level-recovery-cream-2.jpg',
      'assets/product-images/0067/purito-centella-green-level-recovery-cream-3.jpg',
    ],
    price: 31,
    bestseller: true,
    segment: 'Korean',
    category: 'Cream',
    for: 'Face',
    availableAmount: 216,
  },
  {
    id: '0068',
    brandName: `Purito`,
    productName: 'Centella Green Level Buffet',
    description: `Is your skin tired and in urgent need of repair? Then the product of the Korean brand Purito
     - Centella Green Level Buffet Serum with Centella - is what you were looking for!
      A natural multifunctional product suitable for all skin types.`,
    ingredients: `Centella Asiatica Extract (49%), Water, Dipropylene glycol, Niacinamide,
     Glycerin, Butylene Glycol, 1,2-Hexanediol, Glycereth-26, Carbomer, Arginine, Sclerotium Gum,
      Hydrolyzed Jojoba Esters, Caprylyl Glycol, Panthenol, Polyglyceryl-10 laurate, Polyglyceryl-10
       myristate, Hydrogenated lecithin, Hydrolyzed collagen, Camellia Sinensis Leaf Extract, Alteromonas
        Ferment Extract, Pancratium Maritimum Extract, Citrus Aurantium Bergamia Fruit Oil, Dipotassium
         Glycyrrhizate, Disodium EDTA, Adenosine, Lavandula Angustifolia Oil, Ceramide NP, Sodium Hyaluronate,
          Asiaticoside, Asiatic acid, Madecassic acid, Palmitoyl Hexapeptide-12, Palmitoyl Tripeptide-1,
           Palmitoyl Tetrapeptide-7, Palmitoyl Dipeptide-10`,
    starIngredient: 'Centella',
    pics: [
      'assets/product-images/0068/purito-centella-green-buffet-1.jpg',
      'assets/product-images/0068/purito-centella-green-buffet-2.jpg',
      'assets/product-images/0068/purito-centella-green-buffet-3.jpg',
      'assets/product-images/0068/purito-centella-green-buffet-4.jpg',
    ],
    price: 32,
    bestseller: true,
    segment: 'Korean',
    category: 'Serum',
    for: 'Face',
    availableAmount: 263,
  },
  {
    id: '0069',
    brandName: `Purito`,
    productName: 'Defence Barrier pH Cleanser',
    description: `You can’t even imagine how much dust and dirt our skin collects during the day! Plus makeup,
     which also does not always allow the pores to breathe. The result is tired skin, clogged pores,
      a dull complexion, and persistent breakouts.`,
    ingredients: `Water, Cocamidopropyl Betaine, Sodium Lauroyl Methyl lsethionate, Butylene Glycol,
     1.2-Hexanediol, Citrus Paradisi (Grapefruit) Fruit Extract, Allantoin, Melaleuca Alternifolia (Tea Tree)
      Leaf Oil, Centella Asiatica Extract, Hydrolyzed Collagen, Royal Jelly Extract, Ethylhexylglycerin,
       Citric Acid, Disodium EDTA`,
    starIngredient: 'Centella',
    pics: [
      'assets/product-images/0069/purito-defence-barrier-1.jpg',
      'assets/product-images/0069/purito-defence-barrier-2.jpg',
      'assets/product-images/0069/purito-defence-barrier-3.jpg',
      'assets/product-images/0069/purito-defence-barrier-4.jpg',
    ],
    price: 14,
    bestseller: false,
    segment: 'Korean',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 312,
  },
  {
    id: '0070',
    brandName: `Purito`,
    productName: 'Sea Buckthorn Vital 70 Cream',
    description: `Purito Sea Buckthorn Vital 70 Cream with vitamins and 70% sea buckthorn extract -
     helps to brighten and visibly soften the skin. Instead of purified water, the formula uses sea
      buckthorn extract, which contains various vitamins that improve skin tone, giving it a fresh and healthy look.`,
    ingredients: `Hippophae Rhamnoides Fruit Extract (70%), Methylpropanediol, Glycerin, Cetyl Ethylhexanoate,
     Macadamia Ternifolia Seed Oil, Niacinamide, Polyglyceryl-3 methylglucose distearate, Cetearyl
      Alcohol, Phenyl Trimethicone, Portulaca Oleracea Extract, Citrus unshiu, Sodium Hyaluronate, Butylene
       Glycol, Adenosine, Panthenol, Citrus aurantium dulcis, Sorbitan Stearate, Glyceryl Stearate SE,
        Methyl methacrylate crosspolymer, 11,2-Hexanediol, Carbomer, Arginine, Ammonium
         Acryloyldimethyltaurate/VP Copolymer, Caprylyl Glycol, Ethylhexylglycerin, Disodium EDTA`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0070/purito-buckthorn-cream-1.jpg',
      'assets/product-images/0070/purito-buckthorn-cream-2.jpg',
      'assets/product-images/0070/purito-buckthorn-cream-3.jpg',
      'assets/product-images/0070/purito-buckthorn-cream-4.jpg',
    ],
    price: 30,
    bestseller: false,
    segment: 'Korean',
    category: 'Cream',
    for: 'Face',
    availableAmount: 213,
  },
  {
    id: '0071',
    brandName: `Purito`,
    productName: 'Centella Green Level Eye Cream',
    description: `Centella Green Level Eye Cream is a product that includes peptides, as well as Centella Asiatica
     (49% of the total composition of the cream), which is a unique soothing and rejuvenating
      component in the composition of the product.`,
    ingredients: `Centella Asiatica Extract (49 %) , Water , Hydrogenated C6-14 Olefin Polymer , Glycerin ,
     Caprylic/Capric Triglyceride , Cetyl Ethylhexanoate , Cetyl Alcohol , 1,2-Hexanediol , Butylene Glycol ,
      Methyl Trimethicone , Dipropylene Glycol , Pentaerythrityl Tetraisostearate , Dipentaerythrityl Hexa C5-9
       Acid Esters, Potassium Cetyl Phosphate , Cetearyl Olivate , Butyrospermum Parkii , Palmitoyl Hexapeptide-12 ,
        Palmitoyl Tripeptide-1 , Palmitoyl Tetrapeptide-7 , Palmitoyl Dipeptide-10, Asiaticoside , Asiatic Acid ,
         Sodium Hyaluronate , Madecassic Acid , Sorbitan Olivate , Stearic Acid , Polyglyceryl-2 Stearate ,
          Tromethamine , Caprylyl Glycol , Glyceryl Stearate , Panthenol , Carbomer , Stearyl Alcohol ,
           Hydrolyzed Collagen , Cholesterol , Acetyl Glucosamine , Argania Spinosa Kernel Oil ,
            Limnanthes Alba Seed Oil (Meadowfoam) , Macadamia Ternifolia Seed Oil , Acrylates/C10-30
             Alkyl Acrylate Crosspolymer , Ceramide Np , Pancratium Maritimum Extract , Citrus Aurantium
              Bergamia Fruit Oil (Bergamot) , Disodium Edta , Adenosine , Lavandula Angustifolia Oil (Lavender)`,
    starIngredient: 'Centella',
    pics: [
      'assets/product-images/0071/purito-eye-centella-cream-1.jpg',
      'assets/product-images/0071/purito-eye-centella-cream-2.jpg',
      'assets/product-images/0071/purito-eye-centella-cream-3.jpg',
      'assets/product-images/0071/purito-eye-centella-cream-4.jpg',
    ],
    price: 19,
    bestseller: false,
    segment: 'Korean',
    category: 'Eye Cream',
    for: 'Face',
    availableAmount: 80,
  },
  {
    id: '0072',
    brandName: `Pyunkang Yul`,
    productName: 'Low pH Pore Deep Cleansing Foam',
    description: `Pyunkang Yul Low pH Pore Deep Cleansing Foam gently cleanses the skin of
     various impurities without drying or causing irritation. The foam is suitable for
      daily use even on the most sensitive skin.`,
    ingredients: `Water, Sodium Cocoyl Isethionate, Glycerin, Coconut Acid, Polyquaternium-67,
     1,2-Hexanediol, Sodium Isethionate, Sodium Methyl Cocoyl Taurate, Litsea Cubeba Fruit Oil,
      Sodium Chloride, Disodium EDTA, Ethylhexylglycerin, Sodium Acetate, Butylene Glycol, Centella
       Asiatica Extract, Portulaca Oleracea Extract, Camellia Sinensis Leaf Extract, Hamamelis
        Virginiana Extract, Sodium Hyaluronate, Beta-Glucan, Melaleuca Alternifolia, Leaf Extract,
         Phaseolus Angularis Seed Extract, Pentylene Glycol, Caprylyl Glycol, Diatomaceous Earth,
          Isopropyl Alcohol, Citric Acid`,
    starIngredient: 'Centella',
    pics: [
      'assets/product-images/0072/pyunkang-yul-cleansing-foam-1.jpg',
      'assets/product-images/0072/pyunkang-yul-cleansing-foam-2.jpg',
    ],
    price: 33,
    bestseller: false,
    segment: 'Korean',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 78,
  },
  {
    id: '0073',
    brandName: `Pyunkang Yul`,
    productName: 'Black Tea Time Reverse Eye Cream',
    description: `Anti-aging eye cream Pyunkang Yul Black Tea Time Reverse Eye Cream is
     a real find for the delicate skin around the eyes. A product with a balanced rich
      composition day after day cares for delicate skin, fights age-related changes,
       relieves dryness and improves elasticity.`,
    ingredients: `Water, Glycerin, Methylpropanediol, Caprylic/Capric Triglyceride,
     Cetearyl Alcohol, Macadamia Ternifolia Seed Oil, Hydrogenated Polydecene, Niacinamide,
      Butyrospermum Parkii (Shea) Butter, Glyceryl Stearate, Beeswax, Saccharomyces/Xylinum/Black Tea Ferment,
       Arachidyl Alcohol, Behenyl Alcohol, Arachidyl Glucoside, Phenyl Trimethicone, Cetearyl Glucoside,
        Sorbitan Stearate, Cellulose Gum, Sodium Hyaluronate, Hydrolyzed Hyaluronic Acid, Sodium Acetylated
         Hyaluronate, Hydroxyethylcellulose, Broussonetia Kazinoki Root Extract, Punica Granatum Fruit
          Extract, Coptis Japonica Extract, Centella Asiatica Extract, Adenosine, Ceramide NP, Yeast
           Beta-Glucan, Copper Tripeptide-1, Acetyl Hexapeptide-8, Hydrogenated Lecithin, Carbomer,
            Butylene Glycol, Hydroxyacetophenone, Myrtus Communis Extract, Tropaeolum Majus Extract,
             Tromethamine, Disodium EDTA, Octyldodecanol, Caprylyl Glycol, Ethylhexylglycerin, 1,2-Hexanediol`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0073/pyunkang-yul-eye-black-tea-cream-1.jpg',
      'assets/product-images/0073/pyunkang-yul-eye-black-tea-cream-2.jpg',
    ],
    price: 38,
    bestseller: true,
    segment: 'Korean',
    category: 'Eye Cream',
    for: 'Face',
    availableAmount: 47,
  },
  {
    id: '0074',
    brandName: `Pyunkang Yul`,
    productName: 'Moisture Cream',
    description: `Moisturizing and regenerating cream Pyunkang Yul Moisture Cream,
     thanks to its composition, which does not contain fragrances, parabens, dyes and
      alcohol, is suitable for daily care of even the most sensitive and problematic skin.`,
    ingredients: `Coptis Japonica Root Extract, Butylene Glycol, Simmondsia Chinensis (Jojoba)
     Seed Oil, Polyglyceryl-3 Methylglucose Distearate, Cetyl Ethylhexanoate, Butylene Glycol
      Dicaprylate/ Dicaprate, Isohexadecane, 1,2-Hexanediol, Cetearyl Alcohol, Glyceryl Stearate,
       Butyrospermum Parkii (Shea) Butter, Sodium Acrylate/Sodium Acryloyldimethyi Taurate
        Copolymer, Polysorbate 80, Glyceryl Caprylate`,
    starIngredient: '',
    pics: [
      'assets/product-images/0074/pyunkang-yul-moisture-cream-1.jpg',
      'assets/product-images/0074/pyunkang-yul-moisture-cream-2.jpg',
      'assets/product-images/0074/pyunkang-yul-moisture-cream-3.jpg',
    ],
    price: 41,
    bestseller: false,
    segment: 'Korean',
    category: 'Cream',
    for: 'Face',
    availableAmount: 12,
  },
  {
    id: '0075',
    brandName: `MEDI-PEEL`,
    productName: 'Bor-Tox Peptide Ampoule',
    description: `Multi-peptide anti-aging serum that significantly reduces
     the signs of aging. It smoothes wrinkles and improves skin texture almost
      instantly without the actual use of Botox or surgery. Smoothes all types
       of wrinkles: fine lines, wrinkles around the eyes, wrinkles on the forehead,
        wrinkles on the neck, nasolabial and purse-string wrinkles - all in one concentrated serum.`,
    ingredients: `Hydrolyzed decollagen, purified water, butylene glycol, hydrogenated
     polyisobutene, 1,2-hexane diol polyacrylamide, lactobacillus / pumpkin fermented
      extract, lactobacillus / soybean fermented extract, C13 -14 Isoparaffin,
       Polysorbate 20, Al Nag, Lactobacillus / Pomegranate Fermented Extract, Lactobacillus
        / Wasabi Root Fermented Extract, Sodium Hyaluronate, Ethyl Hexyl Glycerin, Yeast /
         Grape Fermented Extract, Cabo Mercer, Allantoin, Acrylate / C10-30 Alkyl Acrylate
          Cross-Polymer Yeast Fermentation Filtrate, Laureth-7, BP Bundled Seafood, Disodium
           Ideti, Adenosine, Edelweiss Callus Culture Extract, Fertilizer, Hydroroll Rise
            de elastin gardenia extract, thyme root extract um, chaga mushroom extract.
             Oil Palm Oil, Copper Tripeptide-1 (10ppb), Acetyl Hexapeptide-8 (5ppb),
              Oligopeptide-32 (5ppb), Oligopeptide-29 (1ppb), Palmitoyl Pentapeptide-4 (1ppb)`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0075/medi-peel-bortox-serum-1.jpg',
      'assets/product-images/0075/medi-peel-bortox-serum-2.jpg',
      'assets/product-images/0075/medi-peel-bortox-serum-3.jpg',
    ],
    price: 32,
    bestseller: true,
    segment: 'Korean',
    category: 'Serum',
    for: 'Face',
    availableAmount: 428,
  },
  {
    id: '0076',
    brandName: `MEDI-PEEL`,
    productName: 'Vitamin Dr.Body Lotion',
    description: `Nourishing vitamin body lotion MEDI-PEEL Vitamin Dr.Body Lotion deeply nourishes
     and softens, accelerates the regeneration of skin cells, improves color, tones, quickly
      absorbs into the skin and does not leave a sticky layer on the surface.`,
    ingredients: `Water, Hippophae Rhamnoides Water(10%), Caprylic/Capric Triglyceride,
     Ethylhexyl Stearate, Glycerin, Propanediol, Cyclomethicone, Hydrogenated Poly(C6-14 Olefin),
      Dipropylene Glycol, Polyglyceryl-6 Stearate, Butyrospermum Parkii (Shea) Butter, 1,2-Hexanediol,
       Trehalose, Cetearyl Alcohol, Butylene Glycol, Glyceryl Stearate, Palmitic Acid, Stearic Acid,
        Polyglyceryl-6 Behenate, Carbomer, Tromethamine, Panthenol (1,010ppm), Ethylhexylglycerin,
         Pentylene Glycol, Caprylyl Glycol, Disodium EDTA, Hydrolyzed Jojoba Esters, Camellia Sinensis
          Leaf Extract, Hydrogenated Lecithin, Agrimonia Eupatoria Extract, Polyglyceryl-10 Stearate,
           Adenium Obesum Leaf Cell Extract, Dipotassium Glycyrrhizate, Biosaccharide Gum-1, Centella
            Asiatica Extract, Houttuynia Cordata Extract, Perilla Frutescens Leaf Extract, Salvia
             Hispanica Seed Extract, Citrus Unshiu Fruit Extract, Sodium Ascorbyl Phosphate (5ppm),
              Sodium Hyaluronate, Beta-Glucan, Lactobacillus/Punica Granatum Fruit Ferment Extract,
               Lactobacillus/Soybean Ferment Extract, Saccharomyces/Barley Seed Ferment Filtrate,
                Lactobacillus/Pear Juice Ferment Filtrate, Niacinamide (1ppm), Pancratium Maritimum
                 Extract, Phosphatidylcholine, Ascorbic Acid (100ppb), Folic Acid (100ppb), Biotin
                  (100ppb), Pyridoxine (100ppb), Ceramide NP, Tocopherol (10ppb), Cyanocobalamin
                   (10ppb), Glycine, Glutamic Acid, Linoleic Acid (1ppb), Serine, Thiamine HCl
                    (1ppb), Beta-Carotene (1ppb), Riboflavin (1ppb), Inositol, Lysine, Alanine,
                     Arginine, Threonine, Proline, Yellow 4 (CI 19140), Blue 1 (CI 42090),
                      Fragrance, Limonene, Linalool, Alpha-Isomethyl Ionone, Citral`,
    starIngredient: 'Ceramide',
    pics: [
      'assets/product-images/0076/medi-peel-body-lotion-1.jpg',
      'assets/product-images/0076/medi-peel-body-lotion-2.jpg',
      'assets/product-images/0076/medi-peel-body-lotion-3.jpg',
    ],
    price: 29,
    bestseller: false,
    segment: 'Korean',
    category: 'Cream',
    for: 'Body',
    availableAmount: 317,
  },
  {
    id: '0077',
    brandName: `MEDI-PEEL`,
    productName: 'Silky Shining Salt Body Wash',
    description: `Silky Shining Salt Body Wash exfoliating gel-body scrub cleanses
     the skin of various impurities without causing dryness and damage. Small particles of the
      scrub gently exfoliate, smooth and restore smoothness to the skin, while the delicate
       texture deeply nourishes and softens.`,
    ingredients: `Water, Ammonium Laureth Sulfate, Glycerin, Cocamidopropyl Betaine, Acrylates
     Copolymer, Dimethicone, Arginine, Butylene Glycol, Sodium Chloride(5,000 ppm), Limnanthes
      Alba (Meadowfoam) Seed Oil, Rosa Canina Fruit Oil, Argania Spinosa Kernel Oil, Canola Oil,
       Helianthus Annuus (Sunflower) Seed Oil, Prunus Cerasus (Bitter Cherry) Fruit Extract,
        Tuber Melanosporum Extract, Camellia Sinensis Leaf Extract, Chamomilla Recutita (Matricaria)
         Flower Extract, Centella Asiatica Extract, Lavandula Angustifolia (Lavender) Flower Extract,
          Aloe Barbadensis Leaf Extract, Pinus Palustris Leaf Extract, Ulmus Davidiana Root Extract,
           Oenothera Biennis (Evening Primrose) Flower Extract, Pueraria Lobata Root Extract,
            Lycopodium Clavatum Extract, Equisetum Arvense Extract, Cryptomeria Japonica Leaf Extract,
             Nelumbo Nucifera Leaf Extract, Saccharomyces Ferment, Nelumbium Speciosum Flower Extract,
              Artemisia Annua Extract, Oryza Sativa (Rice) Extract, Vitis Vinifera (Grape) Seed Powder,
               Xylitylglucoside, Anhydroxylitol, Xylitol, Glucose, Sodium Hyaluronate, Sodium Hyaluronate
                Crosspolymer, Hydrolyzed Hyaluronic Acid, Hyaluronic Acid, Hydrolyzed Sodium Hyaluronate,
                 Sea Salt(100 ppm), Hydrated Silica, Titanium Dioxide(CI 77891), Papain, Polyquaternium-7,
                  Laureth-20, Laureth-3, Disodium EDTA, Polyglyceryl-10 Stearate, 1,2-Hexanediol, Caprylyl
                   Glycol, Pentylene Glycol, Hydroxyacetophenone, Ethylhexylglycerin, Sodium Benzoate,
                    CI 17200, CI 14700, Fragrance`,
    starIngredient: '',
    pics: [
      'assets/product-images/0077/medi-peel-silky-shining-body-wash-1.jpg',
      'assets/product-images/0077/medi-peel-silky-shining-body-wash-2.jpg',
      'assets/product-images/0077/medi-peel-silky-shining-body-wash-3.jpg',
    ],
    price: 28,
    bestseller: false,
    segment: 'Korean',
    category: 'Cleanser',
    for: 'Body',
    availableAmount: 110,
  },
  {
    id: '0078',
    brandName: `MEDI-PEEL`,
    productName: 'Bakuchiol Miracle Firming Ampoule',
    description: `Bakuchiol Miracle Firming Ampoule anti-aging facial serum with bakuchiol
     extract solves a whole range of tasks. The product contains an ingredient that is a safe
      analogue of retinol - bakuchiol. Due to this, the serum actively fights age-related skin changes.`,
    ingredients: `Water, Caprylic/Capric Triglyceride, Glycerin, Butylene Glycol, Diglycerin, 1,2-Hexanediol,
     Niacinamide, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Arginine, Polyglyceryl-10 Laurate,
      Adenosine, Disodium EDTA, Sodium Hyaluronate, Polyquaternium-51, Bakuchiol(100 ppm), Carapa
       Guaianensis Seed Oil, Xylitylglucoside, Lilium Candidum Callus Culture Extract, Anhydroxylitol,
        Xylitol, Diospyros Kaki Leaf Extract, Vitis Vinifera (Grape) Fruit Extract, Hydrolyzed
         Collagen, Coffea Arabica (Coffee) Seed Extract, Carthamus Tinctorius (Safflower) Flower
          Extract, Polygonum Cuspidatum Root Extract, Zanthoxylum Piperitum Fruit Extract,
           Castanea Crenata Shell Extract, Camellia Sinensis Leaf Extract, Glucose, Centella
            Asiatica Root Extract, Aronia Melanocarpa Fruit Extract, Centella Asiatica Extract,
             Centella Asiatica Leaf Extract, Resveratrol, Pinus Palustris Leaf Extract, Ulmus
              Davidiana Root Extract, Pueraria Lobata Root Extract, Oenothera Biennis (Evening Primrose)
               Flower Extract, Saccharomyces/Xylinum/Black Tea Ferment, Hydrolyzed Hyaluronic Acid,
                Ethylhexylglycerin, Hexapeptide-9, Nonapeptide-1, Copper Tripeptide-1,
                 Acetyl Hexapeptide-8, Sodium Acetylated Hyaluronate, Tripeptide-1,
                  Palmitoyl Oligopeptide, Palmitoyl Pentapeptide-4, Palmitoyl Tetrapeptide-7,
                   Palmitoyl Tripeptide-1, Palmitoyl Tripeptide-5, Acetyl Tetrapeptide-2,
                    Madecassoside, Asiaticoside, Fragrance`,
    starIngredient: 'Bakuchiol',
    pics: [
      'assets/product-images/0078/medi-peel-backuchiol-1.jpg',
      'assets/product-images/0078/medi-peel-backuchiol-2.jpg',
      'assets/product-images/0078/medi-peel-backuchiol-3.jpg',
    ],
    price: 33,
    bestseller: true,
    segment: 'Korean',
    category: 'Serum',
    for: 'Face',
    availableAmount: 68,
  },
  {
    id: '0079',
    brandName: `MEDI-PEEL`,
    productName: 'Bio Intense Glutathione White Cream',
    description: `The balanced composition of the product works complexly with the skin, gently brightens
     pigmentation and evens out the tone of the face, and also fights age-related skin changes.
      The cream has a pleasant light texture that is instantly absorbed, nourishes the skin for
       a long time and does not roll down when applied on top of makeup.`,
    ingredients: `Purified water, butylene glycol, caprylic/capric triglyceride, beeswax, niacinamide,
     cetearyl alcohol, isononyl isononanoate, arachidyl alcohol, 1,2-hexanediol, polyglycerol
      Lyl-3methylglucose distearate, behenyl alcohol, glyceryl stearate, betaine, simethicone,
       arachidyl glucoside, cetearyl olivate, arginine, carbomer, sorbitan olivate, allantoin,
        glycerin, panthenol, Tocopherol, xanthan gum, glutathione (600 ppm), dipotassium
         glycyrrhizate, ethylhexylglycerin, disodium EDTA, sodium hyaluronate, glucose,
          ethanol, mallow extract, lemon balm leaf extract, lady's mantle extract, western
           Yarrow extract, Speedwell extract, Peppermint leaf extract, Sulfuric primrose extract,
            Lycopodium extract, Horsetail extract, Ceramide NP, Hydrogenated Lecithin, Polyglyceryl-10 Stearate,
             Sodium Hydroxide, Sodium Ascorbyl Phosphate, Biotin, Folic Acid, pyridoxine, cyanocobalamine,
              linoleic acid, riboflavin, beta-carotene, thiamine HCL, copper tripeptide-1, acetylhexapeptide-8,
               palmitoylpentapeptide-4, palmitoyltetrapeptide-7, palmi Toil Tripeptide-1, Fragrance`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0079/medi-peel-glutathione-1.jpg',
      'assets/product-images/0079/medi-peel-glutathione-2.jpg',
      'assets/product-images/0079/medi-peel-glutathione-3.jpg',
    ],
    price: 35,
    bestseller: false,
    segment: 'Korean',
    category: 'Cream',
    for: 'Face',
    availableAmount: 26,
  },
  {
    id: '0080',
    brandName: `MEDI-PEEL`,
    productName: 'Bor-Tox Peptide Cream',
    description: `Anti-aging cream with the effect of Botox MEDI-PEEL Bortox Peptide Cream has the
     strongest composition, which is aimed at skin rejuvenation. The cream tightens the oval of
      the face, improves skin firmness and elasticity, and also has a nourishing and softening effect.
       As an active ingredient, the product contains volufilin, which has the property of lipofilling,
        which provides quick and noticeable results. The cream effectively smoothes existing wrinkles
         and creases, tactilely tightens the skin and tightens the oval of the face.`,
    ingredients: `Water, Butylene Glycol, Hydrogenated Polyisobutene, Behenyl Alcohol, Glycerin,
     Butyrospermum Parkii (Shea) Butter, C14-22 Alcohols, Triethylhexanoin, 1,2-Hexanediol,
      Stearic Acid, Palmitic Acid, Cetearyl Olivate, Ethylhexyl Palmitate, Caprylic/Capric Triglyceride,
       Propanediol, Sorbitan Olivate, C12-20 Alkyl Glucoside, Simethicone, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl
        Taurate Copolymer, Tocopherol, Allantoin, Arginine, Trehalose, Panthenol, Sorbitan Isostearate, Leontopodium
         Alpinum Callus Culture Extract, Saccharomyces/Rice Ferment Filtrate, Lactobacillus Ferment,
          Lactobacillus/Pear Juice Ferment Filtrate, Lactobacillus/Punica Granatum Fruit Ferment Extract,
           Lactobacillus/Soybean Ferment Extract, Saccharomyces/Barley Seed Ferment Filtrate, Lactococcus Ferment,
            Chondrus Crispus Extract, Jania Rubens Extract, Anemarrhena Asphodeloides Root Extract (20 ppm), Malt Extract,
             Hydrolyzed Collagen, Hydrolyzed Elastin, Sodium Hyaluronate , Copper Tripeptide-1(20 ppb),
              Acetyl Hexapeptide-8(10 ppb), Palmitoyl Pentapeptide-4(10 ppb), Palmitoyl Tetrapeptide-7(5 ppb),
               Palmitoyl Tripeptide-1(5 ppb), Ethylhexylglycerin, Adenosine, Polysorbate 60, Disodium EDTA, Fragrance`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0080/medi-peel-bortox-cream-1.jpg',
      'assets/product-images/0080/medi-peel-bortox-cream-2.jpg',
      'assets/product-images/0080/medi-peel-bortox-cream-3.jpg',
    ],
    price: 40,
    bestseller: false,
    segment: 'Korean',
    category: 'Cream',
    for: 'Face',
    availableAmount: 417,
  },
  {
    id: '0081',
    brandName: `MEDI-PEEL`,
    productName: 'Derma Maison Eye Cream',
    description: `Anti-aging eye cream with stem extracts and peptides MEDI-PEEL
     Derma Maison 3X Eye Cream contains the strongest components that deeply nourish the
      skin under the eyes, increase its firmness and elasticity, and also fight mimic wrinkles
       and creases. The cream is perfectly absorbed, does not leave behind a sticky finish and
        can be used under make-up.`,
    ingredients: `Purified water, butylene glycol, caprylic capric triglyceride, glycerin, cetyl
     alcohol, stearic acid, polyglyceryl 3-methylglucose distearate, niacinamide, cyclopenta siloxane,
      birch sap hydrolyzed De collagen, lavender, extract, rosemary extract, oregano flower leaf stem
       extract, thyme extract, decay locust bark extract, broccoli extract, green tea extract, rosemary
        leaf extract, aloe vera leaf juice, spanish licorice root extract, spirulina platensis extract,
         Licorice Root Extract, Snow Riding Extract, Sewage Root Extract, Black Sesame Extract,
          Mud Mushroom Extract, True Angelica Root Extract, Mulberry Bark Extract, Peony Extract,
           Thief Stick Root Extract, Hydroxypropyl Methyl Cellulose, Pullulan, Porphy rhythm crew Extract,
            Squalane, Shea Butter, Ceramide NP, Hydrogenated Polyisobutene, Zimo Root Extract, Acetyl
             Hexapeptide 8, Copper Tripeptide 1, Palmitoyl Pentapeptide 4, Tripeptide 1, Palmitoyl
              Tripeptide 1, Hexapeptide 9 nona peptide 1, palmitoyl tetrapeptide 7, acetyl octapeptide
               3 propane diol, sodium hyaluronate, sodium hyaluronate crosspolymer, hydrolyzed deglycosaminoglycans,
                benzyl glycol, hydrolysate Suede Hyaluronic Acid, Grape Callus Culture Extract,
                 Lotus Callus Culture Extract, Green Tea Callus Culture Extract, Ginseng Callus
                  Culture Extract, Tocopheryl Acetate, Calcium Pantothenate, Sodium Ascorbyl
                   Phosphate, Pyridoxine HCl, Sodium Starchi Octenite Cine , Maltodextrin, silica,
                    ethylhexyl glycerine, hyaluronic acid, hydroxypropyl trimonium hyaluronate,
                     sodium acetylated hyaluronate, macadamia seed oil, jojoba seed oil,
                      avocado oil, lysine, heath Tidon, Al Hag, Aspartic Acid, Threonine,
                       Serine, Glutamic Acid, Proline, Glycine, Alanine, Valine, Methionine,
                        Isoleucine, Leucine Tyrosine, Phenylalanine, Cysteine, Carbomer, Disodium
                         D-Diet, Panthenol, Beta Phosphorus, urea, fipglyceryl stearate, mineral
                          oil, cetyl ethyl hexanoate, dimethicone, cyclohexasiloxane, adenosine
                           tromethamine, 1.2 hexanediol, star anise extract golden extract`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0081/medi-peel-eye-cream-1.jpg',
      'assets/product-images/0081/medi-peel-eye-cream-2.jpg',
      'assets/product-images/0081/medi-peel-eye-cream-3.jpg',
    ],
    price: 47,
    bestseller: false,
    segment: 'Korean',
    category: 'Eye Cream',
    for: 'Face',
    availableAmount: 76,
  },
  {
    id: '0082',
    brandName: `MEDI-PEEL`,
    productName: 'Peptide 9 Volume Bio Tox Ampoule ',
    description: `Anti-aging face serum with peptides MEDI-PEEL Peptide 9 Volume Bio Tox
     Ampoule provides a powerful complex effect on the skin, restores its brightness and
      healthy radiance. Rich in astaxanthin, which is 6,000 times more powerful than
       vitamin C, and 9 types of peptides, it restores firmness and elasticity, restoring
        youthfulness to the skin.`,
    ingredients: `Purified water, glycerin, butylene glycol, niacinamide, sodium lactate,
     1,2-hexanediol, gellan gum, ethylhexyl glycerin, adenosine, disodium EDTA, Dosong fruit
      extract, eucalyptus leaf extract, glyceryl poly Methacrylate, Centella asiatica extract,
       propylene glycol, Hojanggeun root extract, golden extract, propanediol, green tea extract,
        Spanish licorice root extract, sodium hyaluronate crosspolymer, matricaria flower extract,
         rosemary leaf extract, Fructan, Hydrolyzed Glycosaminoglycan, Sodium Hyaluronate, Glycine,
          Serine, Glutamic Acid, Hydrolyzed Elastin, Hydrogenated Polyisobutene, Aspartic Acid,
           Hydrolyzed High Aluronic acid, leucine, white rice flower extract, astaxanthin,
            desamidocollagen, sorbitan laurate, alanine, lysine, arginine, tyrosine, phenylalanine,
             proline, valine, threonine, isoleucine, histidine, cysteine, methionine, Palmitoyl
              Tripeptide-5, Hydrolyzed Collagen, Hydroxyethyl Cellulose, Acetyldipeptide-1 Cetyl Ester,
               Sodium Acetylated Hyaluronate, Palmitoyl Tetrapeptide-7, Palmitoyl Tripeptide-1,
                PalmyToyl oligopeptide, acetylhexapeptide-8, copper tripeptide-1, hyaluronic acid,
                 oligopeptide-29, oligopeptide-32, raspberry ketone, palmitoylpentapeptide-4,
                  zymoroot extract, polysorbate 80 , PEG-60 Hydrogenated Castor Oil, Benzyl Glycol, Ethanol, Fragrance`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0082/medi-peel-volume-bio-ampoule-1.jpg',
      'assets/product-images/0082/medi-peel-volume-bio-ampoule-2.jpg',
      'assets/product-images/0082/medi-peel-volume-bio-ampoule-3.jpg',
    ],
    price: 46,
    bestseller: true,
    segment: 'Korean',
    category: 'Serum',
    for: 'Face',
    availableAmount: 78,
  },
  {
    id: '0083',
    brandName: `MEDI-PEEL`,
    productName: 'Cell Toxing Dermajours Cream ',
    description: `Anti-aging face cream with stem cells MEDI-PEEL Cell Toxing Dermajours Cream slows
     down the aging process in skin cells, prevents the appearance of wrinkles and participates in
      active regenerative processes. The cream also deeply nourishes the skin, making it supple and smooth.`,
    ingredients: `Water, Glycerin, Caprylic/Capric Triglyceride, 1,2-Hexanediol, Cetyl Ethylhexanoate,
     Hydrogenated Polydecene, Methylpropanediol, Niacinamide, Cyclopentasiloxane, Butylene Glycol,
      Cetearyl Alcohol, Butyrospermum Parkii (Shea Butter), Cyclohexasiloxane, PEG-40 Hydrogenated Castor Oil,
       Sorbitan Stearate, Glyceryl Stearate SE, Dimethicone, Beeswax, Glyceryl Stearate, PEG-100 Stearate,
        Lilium Candidum Callus Culture Extract(10,000ppm), Polyacrylate-13, Trehalose, Tromethamine, Carbomer,
         Polyisobutene, Prunus Persica (Peach) Fruit Extract, Crataegus Cuneata Fruit Extract, Pyrus Communis
          (Pear) Fruit Extract, Adenosine, Hedera Helix (Ivy) Extract, Musa Sapientum (Banana) Fruit Extract,
           Vanilla Planifolia Fruit Extract, Malt Extract, Polysorbate 20, Magnolia Officinalis Bark Extract,
            Rosa Damascena Callus Culture Extract(30ppm), Glycine Soja (Soybean) Oil, Sodium Hyaluronate,
             Phosphatidylcholine, Fructan, Caprylyl Glycol, Hydrogenated Lecithin, Palmitoyl Tripeptide-5,
              Sodium Phosphate, Disodium EDTA, Sodium Ascorbyl Phosphate, PPG-26-Buteth-26, Ethylhexylglycerin,
               Lecithin, Acetyl Octapeptide-3, Palmitoyl Tetrapeptide-7, Palmitoyl Pentapeptide-4,
                Palmitoyl Tripeptide-1, Tripeptide-1, Acetyl Hexapeptide-8, Dipeptide Diaminobutyroyl
                 Benzylamide Diacetate, Copper Tripeptide-1, Hexapeptide-9, rh-Oligopeptide-2,
                  rh-Polypeptide-1, rh-Polypeptide-3, rh-Oligopeptide-1, Nonapeptide-1`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0083/medi-peel-cell-toxing-cream-1.jpg',
      'assets/product-images/0083/medi-peel-cell-toxing-cream-2.jpg',
      'assets/product-images/0083/medi-peel-cell-toxing-cream-3.jpg',
    ],
    price: 42,
    bestseller: false,
    segment: 'Korean',
    category: 'Serum',
    for: 'Face',
    availableAmount: 235,
  },
  {
    id: '0084',
    brandName: `MEDI-PEEL`,
    productName: 'Cell Toxing Dermajours Cream',
    description: `Anti-aging face cream with stem cells MEDI-PEEL Cell Toxing Dermajours
     Cream slows down the aging process in skin cells, prevents the appearance of wrinkles
      and participates in active regenerative processes. The cream also deeply nourishes
       the skin, making it supple and smooth.`,
    ingredients: `Water, Glycerin, Caprylic/Capric Triglyceride, 1,2-Hexanediol, Cetyl
     Ethylhexanoate, Hydrogenated Polydecene, Methylpropanediol, Niacinamide, Cyclopentasiloxane,
      Butylene Glycol, Cetearyl Alcohol, Butyrospermum Parkii (Shea Butter), Cyclohexasiloxane,
       PEG-40 Hydrogenated Castor Oil, Sorbitan Stearate, Glyceryl Stearate SE, Dimethicone,
        Beeswax, Glyceryl Stearate, PEG-100 Stearate, Lilium Candidum Callus Culture Extract(10,000ppm),
         Polyacrylate-13, Trehalose, Tromethamine, Carbomer, Polyisobutene, Prunus Persica (Peach)
          Fruit Extract, Crataegus Cuneata Fruit Extract, Pyrus Communis (Pear) Fruit Extract,
           Adenosine, Hedera Helix (Ivy) Extract, Musa Sapientum (Banana) Fruit Extract, Vanilla
            Planifolia Fruit Extract, Malt Extract, Polysorbate 20, Magnolia Officinalis Bark Extract,
             Rosa Damascena Callus Culture Extract(30ppm), Glycine Soja (Soybean) Oil, Sodium Hyaluronate,
              Phosphatidylcholine, Fructan, Caprylyl Glycol, Hydrogenated Lecithin, Palmitoyl Tripeptide-5,
               Sodium Phosphate, Disodium EDTA, Sodium Ascorbyl Phosphate, PPG-26-Buteth-26, Ethylhexylglycerin,
                Lecithin, Acetyl Octapeptide-3, Palmitoyl Tetrapeptide-7, Palmitoyl Pentapeptide-4,
                 Palmitoyl Tripeptide-1, Tripeptide-1, Acetyl Hexapeptide-8, Dipeptide Diaminobutyroyl
                  Benzylamide Diacetate, Copper Tripeptide-1, Hexapeptide-9, rh-Oligopeptide-2,
                   rh-Polypeptide-1, rh-Polypeptide-3, rh-Oligopeptide-1, Nonapeptide-1`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0083/medi-peel-cell-toxing-serum-1.jpg',
      'assets/product-images/0083/medi-peel-cell-toxing-serum-2.jpg',
      'assets/product-images/0083/medi-peel-cell-toxing-serum-3.jpg',
    ],
    price: 45,
    bestseller: false,
    segment: 'Korean',
    category: 'Cream',
    for: 'Face',
    availableAmount: 108,
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

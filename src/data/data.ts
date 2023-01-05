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
    productName: 'Moisturising Lotion SPF25',
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
    productName: 'Moisturising Cream for Dry Skin',
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
    productName: 'Smoothing Cleanser For Dry Skin',
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
    productName: 'Cream for Rough & Bumpy Skin',
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
    productName: 'Hydrating Cleanser for Normal Skin',
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
    productName: 'Moisturising Lotion for Normal Skin',
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
    productName: 'Ceramides, Centella, Prebiotics Cream',
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
    productName: 'Antioxidant Cream for Dry Skin',
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
    category: 'Exfoliant',
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
    productName: 'Bifida Complex Gel Cleanser',
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
    category: 'Exfoliant',
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
    category: 'Exfoliant',
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
    productName: 'All-Day Airy Sunscreen SPF50',
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
    productName: 'Gentle Black Cleansing Oil',
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
    productName: 'Supple Preparation Lotion',
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
    productName: 'Supple Preparation Toner',
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
    productName: 'Nourishing Eye Butter',
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
    productName: 'Glutathione White Cream',
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
    productName: 'Peptide 9 Volume BioTox Ampoule ',
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
    productName: 'Cell Toxing Dermajours Serum',
    description: `Rejuvenating facial serum with stem cells MEDI-PEEL Cell Toxing Dermajours
     Ampoule, acting on the deep layers of the skin, promotes enhanced skin cell regeneration
      and rejuvenation. Increases skin elasticity and firmness, reduces wrinkles and creases.
       In addition, the serum deeply nourishes the skin and strengthens its barrier function.`,
    ingredients: `Water, Betaine, Diglycerin, Butylene Glycol, Niacinamide, 1,2-Hexanediol,
     PEG-60 Hydrogenated Castor Oil, Lilium Candidum Callus Culture Extract, Carbomer, Arginine,
      Ethylhexylglycerin, Adenosine, Sodium Hyaluronate, Disodium EDTA, Hydroxyethylcellulose,
       Malt Extract, Glycerin, Prunus Persica (Peach) Fruit Extract, Crataegus Cuneata Fruit
        Extract, Xanthan Gum, Pyrus Communis (Pear) Fruit Extract, Dipotassium Glycyrrhizate,
         Magnolia Officinalis Bark Extract, Musa Sapientum (Banana) Fruit Extract, Hedera Helix
          (Ivy) Extract, Vanilla Planifolia Fruit Extract, Rosa Damascena Callus Culture
           Extract(30ppm), Glycine Soja (Soybean) Oil, Phosphatidylcholine, Fructan, Caprylyl
            Glycol, Hydrogenated Lecithin, Palmitoyl Tripeptide-5, Sodium Phosphate, Sodium
             Ascorbyl Phosphate, PEG-40 Hydrogenated Castor Oil, PPG-26-Buteth-26, Polysorbate
              20, Lecithin, Palmitoyl Tetrapeptide-7, Acetyl Octapeptide-3, Palmitoyl
               Pentapeptide-4, Palmitoyl Tripeptide-1, Acetyl Hexapeptide-8, Copper Tripeptide-1`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0084/medi-peel-celltox-serum-1.jpg',
      'assets/product-images/0084/medi-peel-celltox-serum-2.jpg',
      'assets/product-images/0084/medi-peel-celltox-serum-3.jpg',
    ],
    price: 51,
    bestseller: false,
    segment: 'Korean',
    category: 'Serum',
    for: 'Face',
    availableAmount: 108,
  },
  {
    id: '0085',
    brandName: `MEDI-PEEL`,
    productName: 'Gluthione 600 White Ampoule',
    description: `The complex whitening agent effectively brightens all dark spots and imperfections,
     moreover, deeply moisturizes the skin. Forget about unpleasant whitening procedures,
      get acquainted with the intensive serum.`,
    ingredients: `Purified water, niacinamide, sunflower seed oil, glutathione (Drg),
     Pepper Steak Extract, Whey Extract, Mallow Extract, Mallow Extract, Lemon Chestnut Extract,
      Speed Well Extract, Sky Root Extract, Indian Gooseberry Fruit Extract Mulberry Bark Extract,
       Virginia Weathered Leaf Extract, Sodium Hyaluronate, Glyceryl Arachidonate, Glycerinolinate,
        Panthenol, Tocofepil Acetate, Sodium Ascorbyl Phosphate, Pyridoxine, Mullic Acid, Thiamine HciL,
         Cyanocobalamin, Biotin, Retinyl Palmitate, Acetyl Hexapeptide-8, Copper Tricopide Tide-1,
          oligomap tide-23, oligomethide tide-32, palmitoyl pentapeptide-4, cetealyl oleate, polyacrylamide,
           sorbitan oleate, 1,2-nucleic acid diol, pasqueflower extract, gree Ficus Fruit Extract,
            Ussian Extract, C13-14 Isoparaffin, Incense , Carbomer, triethanolamine, glycerin,
             laureth-7, butyleneglycol, ethyl soaked glycerin, hydrolyzed lecithin, plyglyceryl-10 stearate`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0085/medi-peel-glutathione-serum-1.jpg',
      'assets/product-images/0085/medi-peel-glutathione-serum-2.jpg',
      'assets/product-images/0085/medi-peel-glutathione-serum-3.jpg',
    ],
    price: 28,
    bestseller: false,
    segment: 'Korean',
    category: 'Serum',
    for: 'Face',
    availableAmount: 62,
  },
  {
    id: '0086',
    brandName: `MEDI-PEEL`,
    productName: 'Aqua Essence Peptide 9',
    description: `Anti-aging emulsion with peptides for the face MEDI-PEEL Aqua
     Essence Emulsion Peptide 9 - provides intensive skin care. Contains 9 varieties
      of peptides to improve elasticity.
    MEDI-PEEL has partnered with the French company Sederma to make the products as
     effective as possible, so each product, when used regularly, will return the skin to a healthy appearance.`,
    ingredients: `Water, methylpropanediol, glycerin, cyclopentasiloxane, cetearyl olivate,
     cyclohexasiloxane, betaine, cetyl ethylhexanoate, sorbitan olivate, canola oil, caprylic/capric
      triglyceride, glyceryl stearate, peg-100 stearate, vitis vinifera (grape) seed oil, prunus
       armeniaca (apricot) kernel oil, hydroxyacetophenone, trehalose, macadamia integrifolia seed oil,
        arginine, carbomer, fragrance, hydroxyethylcellulose, ethylhexylglycerin, adenosine,
         disodium edta, allantoin, desamido collagen, juniperus communis fruit extract, magnolia
          officinalis bark extract, eucalyptus globulus leaf extract, fructan,
           hydrolyzed collagen butylene glycol, hydrogenated polyisobutene, argania spinosa kernel oil,
            propanediol, glyceryl polymethacrylate, sodium hyaluronate crosspolymer, sorbitan laurate,
             propylene glycol, hydrolyzed glycosamonoglycans, 1,2-hexanediol, nonoxynol-12, sodium hyaluronate,
              phenoxyethanol, chondrus crispus extract, benzyl glycol, acetyl dipeptide-1 cetyl ester (0.8 ppm),
               astaxanthin, ethyl hexanediol, hydrolyzed elastin, hydrolyzed hyaluronic acid, palmitoyl
                tripeptide-5 (0.1 ppm), caprylyl glycol, anemarrhena asphodeloides root extract, acetyl
                 hexapeptide-8 (0.01 ppm), copper tripeptide-1 (0.01 ppm), hyaluronic acid, acetyl
                  octapeptide-3 (0.005 ppm), palmitoyl tetrapeptide-7 (0.005 ppm), hexapeptide-9 (0.005 ppm),
                   raspberry ketone, palmitoyl oligopeptide (0.001 ppm), palmitoyl tripeptide-1 (0.001 ppm),
                    palmitoyl pentapeptide-4 (0.001 ppm)`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0086/medi-peel-aqua-essence-emulsion-peptide9-1.avif',
      'assets/product-images/0086/medi-peel-aqua-essence-emulsion-peptide9-2.avif',
      'assets/product-images/0086/medi-peel-aqua-essence-emulsion-peptide9-3.avif',
    ],
    price: 38,
    bestseller: false,
    segment: 'Korean',
    category: 'Toner',
    for: 'Face',
    availableAmount: 53,
  },
  {
    id: '0087',
    brandName: `MEDI-PEEL`,
    productName: 'Melanon X Cream',
    description: `Brightening face cream against pigmentationMEDI-PEEL Melanon X Cream -
     evens out skin tone, reducing and preventing hyperpigmentation.`,
    ingredients: `Water, Butyrospermum Parkii (Shea Butt er), Butylene Glycol, Caprylic /
     Capric Tri glyceride, Hydrogenated Polydecene, B etaine, Dimethicone, Niacinamide,
      Poly glycery-3 Methylglucose Distearate, Ce tearyl Alcohol, Glyceryl Stearate,
       Beeswax, Transw ax Acid, Carnitine, Ascorbi c Acid, Cysteine, Magnesium Ascorbyl
        Phosphate, Alpha-Arbutin, Morus Alba Bark Extract, Trichosanthes kinilowii
         root Extract, Hamamelis Virginiana (Witch H azel) Leaf Extract, Phyllanthus
          Emblica Fruit Extract, Scutellaria Baicalensis Root Extract, Polygonum
           Multiflorum Root Extract, Angelica Gigas Root Extract, Phe llinus Linteus
            Extract, Paeonia Lactiflora Root Extract, Glycynrhiza Glabra (Licoric e)
             Root Extract, Cimicituga Racemosa Root Extract, Sophora Angustifolia Root Extract,
              Sesamum Indicum (Sesame) Seed Extract Extr act, Acetyl Hexapeptide 8, Copper
               Trip eptide-1, Oligopeptide-29, Oligopeptide -32, Palmitoyl Pentapeptide-4,
                Glycerin, Sodium Hyaluronate, Simmondsia Ch in ensis (Jojoba) Seed Oil,
                 Vitis Vinifera (Gr ape) Seed Oil, Tocopheryl Acetate, PEG 100 Stearate,
                  Dimethicone / Vinyl Dimet hicone Crosspolymer, Sucrose Cocoate Sorbitan
                   Stearale, Hydroxyacetophe none, Paratfin, Arginine, Microcrystalline
                    Wax, Ethylhexylbolycen 1,2 Hexanediol, Xanthan Gum, Adenosine
                     Disodium EDTA, Fragrance, Polyethylene, Ethylene / Propylene Copolymer`,
    starIngredient: 'Vitamin C',
    pics: [
      'assets/product-images/0087/medi-peel-melanon-cream-1.avif',
      'assets/product-images/0087/medi-peel-melanon-cream-2.avif',
      'assets/product-images/0087/medi-peel-melanon-cream-3.avif',
    ],
    price: 30,
    bestseller: false,
    segment: 'Korean',
    category: 'Cream',
    for: 'Face',
    availableAmount: 34,
  },
  {
    id: '0088',
    brandName: `MEDI-PEEL`,
    productName: 'Peptide 9 White Cica Essence',
    description: `Oxygen essence with centella MEDI-PEEL Peptide 9 Volume White Cica Essence -
     provides soothing care for sensitive skin and visibly evens out its tone. The multifunctional
      essence penetrates deep into the skin and is much more effective than other products.`,
    ingredients: `Purified water, glycerin, methyl propane diol, methyl perfluoroisobutyl ether, hydrogenated
     polyisobutene, butylene glycol dicaprylate/dicaprate, caprylic/capric triglyceride, methyl purple
      Luobutyl ether, niacinamide, cyclopentasiloxane, cetearyl alcohol, cyclohexasiloxane, oil palm oil,
       sodium myristoyl glutamate, arginine, glyceryl stearate, PG-100 stearate, decyl glucoside, betaine,
        hydrogenated lecithin, hydroxyethyl urea, oil palm kernel oil, dimethicone, decylene glycol,
         ammonium acryloyl dimethyl taurate/v picopolymer , Myristic Acid, Hexylene Glycol, Carbomer,
          Propane Diol, Eucalyptus Leaf Extract, Dusong Fruit Extract, Butylene Glycol, Dimethicone/Vinyl
           Dimethicone Cross Polymer, Glycerylacrylate/Acrylic Acid Polymer, sodium hyaluronate cross polymer,
            urea, allantoin, ammonium lactate, adenosine, Sodium hyaluronate, hydrolyzed glycosaminoglycan,
             laureth-23, propylene glycol, disodium ID, butes-3, centella extract, centella leaf extract,
              chamomile flowers, argan kernel oil , Green tea extract, columbine bark extract, fructans,
               roots/root extracts, sodium benzotriazylbutylphenol sulfonate, benzyl glycol, ethanol,
                decyl alcohol, tris(tetramethylhydroxypiperidinol) Citrate, hydrolyzed hyaluronic acid,
                 glucose, desamido collagen, Hydrolyzed Collagen, Tranexamic Acid, Tributyl Citrate,
                  Trideceth-6, Sodium Polyacrylate, Pentylene Glycol, Hydrogenated Polydecene, Glyceryl
                   Polymethacrylate, Zymo Root Extract, Cypress Leaf extract, Asiaticoside, Oregano leaf
                    extract, White willow bark extract, Hyaluronic acid, Lactobacillus/bean fermentation
                     extract, Broiler bark extract, Golden extract, Purslane extract, sorbitan laurate,
                      polysorbate 20, raspberry ketone, polysorbate 80, irismos extract, hydroxyethylcellulose,
                       acetyldipeptide-1 cetyl ester, astaxanthin, hydrolyzed elastin, palmitoyl Tripeptide-5,
                        madecassoside, madecca acid, acetylhexapeptide-8, copper tripeptide-1, asiatic acid,
                         oligopeptide-29, oligopeptide-32, Palmitoyl tetrapeptide-7, palmitoyl tripeptide-1,
                          palmitoyl oligopeptide, palmitoyl pentapeptide-4, 1,2-hexanediol,
                           ethylhexylglycerin, totalol, caprylyl glycol, fragrance`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0088/medi-peel-peptide9-essence-1.avif',
      'assets/product-images/0088/medi-peel-peptide9-essence-2.avif',
      'assets/product-images/0088/medi-peel-peptide9-essence-3.avif',
    ],
    price: 52,
    bestseller: false,
    segment: 'Korean',
    category: 'Serum',
    for: 'Face',
    availableAmount: 44,
  },
  {
    id: '0089',
    brandName: `MEDI-PEEL`,
    productName: 'Pore 9 Tightening Serum',
    description: `Anti-aging serum for narrowing pores MEDI-PEEL Pore 9 Tightening Serum is
     a special serum with a complex of peptides that tightens pores and gives the skin elasticity.
      You no longer need to worry about enlarged pores and blackheads. the skin becomes incredibly smooth and elastic.`,
    ingredients: `Purified Water, Butylene Glycol, Hydroxypropyl Methyl Cellulose, Pullulan, Fiji-60 Hydrogenated
     Castor Oil, Hydroxyacetophenone, Acrylate / C10-30 Alkyl Acrylate Crosspolymer, Tromethamine ,
      Arsenic extract, thorny agallium root extract, seawater, porphyridium gluentum extract, golden extract,
       ethyl hexyl glycerine, virginia foliar leaf extract, adenosine, betaine, allantoin, flavoring, linalul,
        glycerin, dextrin, dusong Lychee Extract, Lactobacillus / Turmeric Fermentation Filtrate, Salvia Leaf
         Extract, Eucalyptus Leaf Extract, Cacao Extract, Tea Tree Leaf Water, Palmitoyl Tetrapeptide-7,
          Palmitoyl Tripeptide-1, Fructan, Glyceryl Polymetha Krill, buckthorn fruit extract, ussian extract,
           pasqueflower extract, ceramide 3, pro Phenylene Glycol, Hydrogenated Lecithin, Persimmon Leaf
            Extract, Dipropylene Glycol, Grape Extract, Glyceres-20, Coffee Extract, Fuchsia Root Extract,
             Safflower Extract, Green Tea Extract, Chestnut Bark Extract, Sodium Hyaluronate , Pyza H10
              Grape Seed Sterol, 12- Academic Diol, Glyceryl Stearate, Olive Tree Leaf Extract, Spanish
               Licorice Root Extract, Western Dandelion Leaf Extract, Oregano Leaf Extract, Palmitoyl
                Tripeptide-5, Cypress Leaf Extract, cyclic willow bark extract, lactobacillus / bean
                 fermentation extract, broiler bark extract, damask rose extract, rock stone root extract,
                  yacetylhexapeptide-8, caper tripeptide-1, palmitoyl oligomatide, Oligopeptide-2,
                   Oligopeptide-2, Palmitoyl Pentareptide 4`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0089/medi-peel-pore-tightening-serum-1.avif',
      'assets/product-images/0089/medi-peel-pore-tightening-serum-2.avif',
      'assets/product-images/0089/medi-peel-pore-tightening-serum-3.avif',
    ],
    price: 32,
    bestseller: false,
    segment: 'Korean',
    category: 'Serum',
    for: 'Face',
    availableAmount: 81,
  },
  {
    id: '0090',
    brandName: `MEDI-PEEL`,
    productName: 'Herbal Peel Cream Mask',
    description: `MEDI-PEEL Herbal Peel Tox Wash Off Type Cream Mask - A washable creamy peeling mask
     removes dead skin cells and other impurities that cause skin problems, restores bright and smooth
      skin with 41 types of medicinal herbs .`,
    ingredients: `Water, Glycerin, Dipropylene Glycol, Green Tea Powder, Bentonite, Cetyl Ethyl
     Hexanoate, Polysorbate 60, Evergreen Mugwort Powder, Matricaria Extract, BACOPA MONNIERA
      (WATER HYSSOP) EXTRACT , Grape callus culture extract, Lotus callus culture extract,
       Green tea callus culture extract, Licorice root extract, Snow riding extract (DIOSCOREA
         VILLOSA), Mud mushroom extract, Mulberry bark Extract, Peony Extract, Golden Extract,
          Green Tea Extract, Centella Extract, Matricaria Flower Extract, Spanish Licorice Root
           Extract, Rosemary Leaf Extract, HAMAMELIS VIRGINIANA (WITCH HAZEL) EXTRACT, Salvia
            Leaf Extract , Tea Tree Extract, Eucalyptus Leaf Extract, White Willow bark extract,
             Marigold extract, Barley malt extract, Common jasmine extract, Water mint leaf extract,
              Rosemary extract, Mulberry root extract, Thyme extract, Black bean extract, Black
               Sesame Extract, Asianticoside, Madecassid Acid, Centella Leaf Extract, Western
                Dandelion Leaf Extract, Ginkgo Leaf Extract, Chromium Oxide Green, Allantoin,
                 Sodium Hyaluronate, Acetyl Hexapeptide-8, Copper Tripeptide-1, Palmitoyl
                  Pentapeptide-4, Tripeptide-1, Palmitoyl Tripeptide-1, Hexapeptide-9,
                   Nona Peptide- 1, Palmitoyl tetrapeptide 7, acetyl octapeptide-3, Tapepeptide-17,
                    Al H-Ligopeptide-1, Al H-polypeptide-11, Sorbitan Stearate, Stearic Acid,
                     Sodium Acetate, Sodium Acryloyl Dimethyl Taurate Copolymer, Isohexadecane,
                      Plysorbate 80, Glycerin, Caprylyl Glycol, Hydrolyzed Sponge`,
    starIngredient: '',
    pics: [
      'assets/product-images/0090/medi-peel-herbal-mask-1.avif',
      'assets/product-images/0090/medi-peel-herbal-mask-2.avif',
      'assets/product-images/0090/medi-peel-herbal-mask-3.avif',
    ],
    price: 35,
    bestseller: false,
    segment: 'Korean',
    category: 'Exfoliant',
    for: 'Face',
    availableAmount: 14,
  },
  {
    id: '0091',
    brandName: `MEDI-PEEL`,
    productName: 'Hyaluronic Volumy Eye Cream',
    description: `Lifting eye cream with a complex of peptides MEDI-PEEL Peptide balance
     9 Hyaluronic Volumy Eye Cream is a moisturizing and tightening cream for mature skin.
      The cream contains 9 types of peptides and has a pronounced tightening and moisturizing
       effect. Visibly improves the turgor of the delicate area around the eyes and smoothes deep wrinkles.`,
    ingredients: `Water, Methyloropanediol Capryfic/Capric Thiglyceride Glycerin, Dimethicone,
     Niacinamide, Pentaerythrityl Tetraisostarate, Cyclopentasiloxan, Cetearyl Alcohol,
      Cetearyl Olivate, Cydohexasiloxane, Sorbitan Olivate, Glyceryl Stearate, Butyrospemum
       Parki (Shea) Butter, Hydroxypropyl Methylcellulose, PEG-100 Stearate, Pullulan,
        Hydroxyacetophenone, Helianthus Annuus (Sunflower) Seed Oil, Sodium Polyacylate,
         Arginine, Carbomer, Sodium Acylate/Sodium Acryloyldimethyl Taurate Copolymer,
          Cetearyl Glucoside, Isohexadecane, Juniperus Communis Fruit Extract, Eucalyptus
           Globulus Leaf Extract, Trehalose, Ethylhexylglycerin, Xanthan Gum, Polysorbate
            80, Porphyridium Cruentum Extract, Fragrance, Gycine Soja (Soybean) Oil,
             Adenosine, Sodium Hyaluronate (215ppm), Disodium EDTA, Sorbitan Oleate,
              Malt Extract, Propanediol, Sodium Hyaluronate Crosspolymer(60ppm), Bixa
               Orelana Seed oil, Hydrolyzed Glycosaminoglycans, Olea Europaea (Olive)
                Leaf Extract, Gyoymhiza Glabra (Licorice) Root Extract, Taraxacum
                 Officinale (Dandelion) Leaf Extract, Magnolia Officinalis Bark Extract,
                  Fructan, Hydrolyzed Elastin, Hydrolyzed Collagen, Hydrogenated Polyisobutene,
                   Glyceryl Polymethagylate, Benzyl Glycol, Tocopherol, Propylene Glycol,
                    Rosa Damascena Flower Extract, Rhodiola Rosea Root Extract,
                     Hydrolyzed Hyaluronic Acid(15ppm), Usnea Barbata (Lichen) Extract,
                      Zanthoxylum Piperitum Fruit Extract, Pulsatilla Koreana Extract,
                       Butylene Glycol, 1,2-Hexanediol, Raspbery Ketone, Palmitoyl Tripeptide-5/0.1ppm),
                        Hyaluronic Acid(0.075), Palmitoyl Tetrapeptyde-7(0,005ppm), Anemarrhena
                         Asphodeloides Root Extract, Acetyl Hexapetide-8(0,001ppm), Copper Tripeptide
                          -1(00,1ppm), Palmitoyl Oligopeptide(0.001ppm), Palmitoyl Tripeptide-1(0,001ppm),
                           Oligopeptide-29(0,0005ppm), Oligopeptide-32(0,0005ppm), Palmitoyl Pentapeptide-4(0,0001ppm)`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0091/medi-peel-eye-volumy-cream-1.avif',
      'assets/product-images/0091/medi-peel-eye-volumy-cream-2.avif',
      'assets/product-images/0091/medi-peel-eye-volumy-cream-3.avif',
    ],
    price: 39,
    bestseller: false,
    segment: 'Korean',
    category: 'Eye Cream',
    for: 'Face',
    availableAmount: 114,
  },
  {
    id: '0092',
    brandName: `MEDI-PEEL`,
    productName: 'Mezzo Filla Eye Serum',
    description: `Eye serum with peptides MEDI-PEEL Mezzo Filla Eye Serum is a nourishing
     and moisturizing serum for the eye area. It prevents the appearance of creases and
      wrinkles due to dehydration of the skin. Contains a powerful complex with peptides
       to fight the signs of aging and improve skin elasticity. It has a pronounced lifting effect.`,
    ingredients: `Purified water, glycerin, Niacinamide, butylene glycol, Glyceryl methyl
     methacrylate, sodium hyaluronate E, propylene glycol, gellan gum, wax extract,
      hydrogenated polyisobutene, Zymo root extract, Alantoin, Panthenol, Adenosine, Ethanol,
       Palmitoyl Trilptide-1, palmitoyltetrapeptide-7, S-oligopeptide-1, Siegelopeptide-2,
        Siezaparrapeptide-3, Ashpolypeptide-16, polylactic acid, dimethicone / vinyl dicarboxylate-7,
         S-oligopeptide-1, S-oligopeptide- Metacon cross polymer, C12-14Sec-Pareth-7. Hydrogenated
          starch hydrolyzate, Lavender extract, Rosemary extract, Oregano flower / leaf / stem extract,
           Time extract, Porphyridium creutum extract. Carboxymethyl cellulose, dimethicone, mica agar,
            irish moss powder, acalilate / C10-30, polyglyceryl palmitate, Alkyl acrylate crospolymer,
             tromethamine, synthetic fluorofluorophosphite, yellow iron oxide, silica, titanium
              dioxide oxides. Pola Solvent 2, Nitride as Pazard, and Itera Oil. Pifiza-1-piza
               'lauryl glycol ether, Dimotaxyl glycyrrhizae 01E, Dissodium diethite, fragrance`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0092/medi-peel-eye-serum-1.avif',
      'assets/product-images/0092/medi-peel-eye-serum-2.avif',
      'assets/product-images/0092/medi-peel-eye-serum-3.avif',
    ],
    price: 18,
    bestseller: false,
    segment: 'Korean',
    category: 'Eye Cream',
    for: 'Face',
    availableAmount: 40,
  },
  {
    id: '0093',
    brandName: `MEDI-PEEL`,
    productName: 'Volume Cream Peptide 9',
    description: `Cream - lifting MEDI-PEEL Volume TOX Cream Peptide 9 - provides intensive skin
     care with 9 types of peptides to increase skin elasticity. An intensive anti-ageing cream
      that adds radiance to your skin. The product contains not only a complex of 9 types of
       peptides, but also other effective anti-aging ingredients.`,
    ingredients: `Purified Water, Methyl Propane Diol, Glycerin, Dimethicone, Cyclopentasiloxane,
     12-Nucleic Acid Diol, Caprylic / Caproxyl Triglyceride, Cetaryl Alcohol, Cetaryl Olate, Cyclo
      Hexasiloxane Sein, Solbi-Tanol Rebate, Glyceryl Stearate, Pentaerythritol Tetraisostearate,
       Piza-100 Stearate, Cetaryl Glucoside, Arginine, Carbomer, Sodium Acrylate / Sodium Acryloyl
        Dimethyl Taurate Cocolate Polymer, Isohexadecane, Trehalose, Sunflower Seed Oil, Xanthan
         Gum, Adenosine, Polysorbate 80, Sodium Hyaluronate, Disodium Itiate, Solbitan Oleate,
          Stone Soybean Oil, Desamido Collagen , Cypress Fruit Extract, Decadent Thick Bark
           Extract, Eucalyptus Leaf Extract, Fructan, Hydrol Izde collagen, butylene glycol,
            fragrance, hydrogenated polyisobutene, anatose oil, propane diol, glyceryl dooly
             methacrylate, sodium hyaluronate crosspolymer, sorbitan laurate, propylene glycol,
              Hydrolyzed deglycosaminoglycan, nonoxynol-12, phenoxy ethanol, Irish moss extract,
               tocopherol, hydroxyethyl cellulose, benzyl glycol, acetyldipeptide-1 cetyl ester (0.8ppm),
                as Tarzanine, Ethyl Hexanediol, Hydrolyzed Elastin, Hydrolyzed Hyaluronic Acid, Ethyl
                 Hexyl Glycerin, Palmitoyl Tripeptide-5 (0.1ppm), Caprylralglycol, Jimmy Root Extract,
                  Acetyl Hexapeptide-8 (0.01ppm), copper tripeptide-1 (0,01ppm), palmitoyl
                   pentamemide -4001 pp m), hyaluronic acid, acetyl octapeptide-3 (0.005 ppm),
                    palmitoyl tetrapeptide -70005 ppm), hexafeltide -90.005 ppm), raspberry ketone,
                     palmitoyl oligopeptide (0.001 ppm), palmitoyl Tripeptide-1 (0.01ppm)`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0093/medi-peel-volume-tox-cream-1.avif',
      'assets/product-images/0093/medi-peel-volume-tox-cream-2.avif',
      'assets/product-images/0093/medi-peel-volume-tox-cream-3.avif',
    ],
    price: 40,
    bestseller: false,
    segment: 'Korean',
    category: 'Cream',
    for: 'Face',
    availableAmount: 328,
  },
  {
    id: '0094',
    brandName: `MEDI-PEEL`,
    productName: 'Peptide 9 Volume Essence',
    description: `Oxygen essence with peptides for skin elasticity MEDI-PEEL Peptide 9 Volume
     Essence is a multifunctional product that not only instantly moisturizes, but also tightens
      the skin, giving it a powerful boost of energy.`,
    ingredients: `Water, Methylpropanediol, Glycerin, Hydrogenated Polyisob utene, Methyl
     Perfluoroisobutyl Ether, Caprylic/Capric Triglyceride, Methyl Perfluorobutyl Ether,
      Cyclopentasiloxane, Niacinamide, Butylene Glycol Dicaprylate/Dicaprate, Cetearyl Alcohol,
       Cyclohexasiloxane, Elaeis Guineensis (Palm) Oil, Decyl GIucoside, Sodium Myristoyl Glutamate,
        Stearic Acid, Glycery! Stearate, PEG-100 Stearate, Betaine, Hydroxyethyl Urea, Elae is
         Guineensis (Palm) Kernel Oil, Hyoxyedetophenone, Dime thicone Arginine Ammonium
          Acryloyldimethyltaurate/VP C opolymer, Carbomer, Hydrogenatedtecihin, Propanediol,
           J uniperus Communis Fruit Extract, Eucalyps Globulus Leaf E xtract, Dimethicone/Vinyl
            Dimethicone Crospolymer, Glycer yl Acrylate/Acrylic Acid Copolymer, Sodium yaluronate
             Crosspolymer, Ethylhexylglycerin, Allantoin, Ammonium Lactate, Urea, Fragrance, Adenosine,
              Sodium Hyalurhate, Laureth-2 3, Propylene Glycol, Disodium EDTA, Hydrozed Glycosami
               noglycans, Butylene Glycol, Camellia Sinensis Leaf Extract, Ta raxacum Officinale
                (Dandelion) Rhizome/Root Extract, Sodiu m Guaiazulene Sulfonate, Argania Spinosa
                 Kernel Oil, Magn olia Officinalis Bark Extract, Anthem is Nobilis Flower Water,
                  F ructan, Butylphenyl Methylpropional, Benzyl Glycol, Hydroly zed Hyaluronic Acid,
                   Desamido Collagen, Hydrolyzed Elastin, Hydrolyzed Collagen, Decylene Glycol,
                    Sodium Polyacrylate Caprylyl Glycol, Trideceth-6, Pentylene Glycol Hydrogenated
                     Polydecene, Glyceryl Polymethacrylate, Anemarhena Aspho deloides Root Extract,
                      1,2-Hexaned iol, Raspberry Ketone, Hy aluronic Acid, Sorbitan Laurate, Nonoxynol-
                       1 2, Phenoxyetha nol, Hydroxyethylcellulose, Acetyl Dipeptide-1 Cetyl Ester(0.0 8 ppm),
                        Astaxanthin, Ethyl Hexanediol, Acetyl Hexapeptide-8 (0.01 ppm), Copper Tripeptide-1
                         (0.01 ppm), Oligopeptide-29 (0.005 ppm), Oligopeptide-32(0.005 ppm), Palmitoyl
                          Pentap eptide-4(0.001 ppm), Palmitoyl Tripeptide- 1 (0.001 ppm) Pal mitoyl
                           Tetrapeptide-7(0.005 ppm), Palmitoyl Tripeptide-51 ppm), Palmitoyl Oligopeptide(0.001 ppm)`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0094/medi-peel-peptide9-essence-1.avif',
      'assets/product-images/0094/medi-peel-peptide9-essence-2.avif',
      'assets/product-images/0094/medi-peel-peptide9-essence-3.avif',
    ],
    price: 51,
    bestseller: false,
    segment: 'Korean',
    category: 'Serum',
    for: 'Face',
    availableAmount: 216,
  },
  {
    id: '0095',
    brandName: `MEDI-PEEL`,
    productName: 'Collagen Super 10 Cream',
    description: `Night face cream with collagen MEDI-PEEL Collagen Super 10 Sleeping Cream
     - fights signs of premature aging and sagging, restores dehydrated skin.`,
    ingredients: `Purified Water, Glycerin, Niacinamide, Dimethicone, Fiji -240 / E.Diicopolymer
     Bismuth-decyl Tetradeceth-20 Ether, Butylene Glycol, Oat Powder Extract, Dimethicone / Vinyl
      Dimethicone Cross Polymer, Hydroxy Acetophenone, Fiji-10 Dimethicone, Glyceryl Stearate,
       Low Sweet Blueberry Extract, Garlic Extract, Sweet Almond Oil, Squalane, Spinach Extract,
        Tomato Fruit / Leave / Stem Extract, Wine Extract, Blood Easy-60 Hydrogenated Castor Oil,
         Hydrolyzed Collagen, Walnut Extract, Propane Diol, Fiji-100 Stearate, Al-Han, Carbomer,
          Ethyl Hexyl Glycerin, Allantoin, Trehalose, Flavoring, Adenosine Disodium dithiate,
           sodium hyaluronate, green tea extract, argan kernel oil, jojoba seed oil, Lamide N-Py,
            Hydrogenated Lecithin, Aloe Vera Leaf Extract, Dipropylene Glycol, Glyceres-20,
             Bioflavonoid, Fiji-10 Grape Seed Sterol, 1,2-hexanediol, Olive Tree Leaf Extract,
              Spain Licorice Root Extract, Western Dandelion Leaf Extract, Broccoli Extract,
               Oregano Leaf Extract, Cypress Leaf Extract, White Willow Bark Extract, Lactobacillus
                / Ball Ferment Extract, Purslane Extract, Broiler Bark Extract, Golden Wine Extract,
                 Damask Rose Flower Extract, Rock Stone Root Extract, Ussonia Extract, Cedar Fruit
                  Extract Halmiflower Extract, Acetyl Hexapeptide-8, Copper Tripeptide-1,
                   Oligopeptide-29, Oligopeptide-32, Palmitoyl Pentapeptide-4`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0095/medi-peel-super-collagen-cream-1.avif',
      'assets/product-images/0095/medi-peel-super-collagen-cream-2.avif',
      'assets/product-images/0095/medi-peel-super-collagen-cream-3.avif',
    ],
    price: 29,
    bestseller: false,
    segment: 'Korean',
    category: 'Cream',
    for: 'Face',
    availableAmount: 175,
  },
  {
    id: '0096',
    brandName: `MEDI-PEEL`,
    productName: 'Red Lacto Collagen Toner',
    description: `Revitalizing toner with probiotics MEDI-PEEL Red Lacto Collagen Toner
     enhances the protective functions of the skin, restoring its microbiome. Perfectly
      combats dryness, tightness and dullness of the skin after washing. Relieves irritation
       and rejuvenates. Thanks to the incredible volume of 1000 ml, it is economically consumed.`,
    ingredients: `Water, Glycerin, Niacinamide, Dipropylene Glycol, 1,2-Hexanediol, Hydrolyzed
     Collagen, Lysine, Histidine, Arginine, Aspartic Acid, Threonine, Serine, Glutamic Acid,
      Proline, Glycine, Alanine, Valine, Methionine, Isoleucine, Leucine, Tyrosine, Phenylalanine,
       Cysteine, Glycyrrhiza Glabra (Licorice) Root Extract, Cimicifuga Dahurica Root Extract,
        Polygonum Multiflorum Root Extract, Sesamum Indicum (Sesame) Seed Extract, Phellinus Linteus
         Extract, Angelica Gigas Root Extract, Morus Alba Bark Extract, Paeonia Albiflora Root Extract,
          Sophora Angustifolia Root Extract, Scutellaria Baicalensis Root Extract, Adenosine, Hydrolyzed
           Elastin, Betaine, Sodium Hyaluronate, Ceramide 3, Panthenol, Copper Tripeptide-1, Acetyl
            Hexapeptide-8, Palmitoyl Pentapeptide-4, Dipeptide-2, Acetyl Octapeptide-3, Acetyl
             Tetrapeptide-5, Dipeptide Diaminobutyroyl Benzylamide Diacetate, Kousou Ekisu,
              Tocopheryl Acetate, Hydroxyacetophenone, Dipotassium Glycyrrhizate, Acrylates/C10-30
               Alkyl Acrylate Crosspolymer, PEG-60 Hydrogenated Castor Oil, Caprylyl Glycol, Tromethamine,
                Disodium EDTA, Caramel, Benzyl Benzoate, Citral, Citronellol, Limonene, Linalool, Fragrance`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0096/medi-peel-red-lacto-collagen-toner-1.avif',
      'assets/product-images/0096/medi-peel-red-lacto-collagen-toner-2.avif',
      'assets/product-images/0096/medi-peel-red-lacto-collagen-toner-3.avif',
    ],
    price: 64,
    bestseller: false,
    segment: 'Korean',
    category: 'Toner',
    for: 'Face',
    availableAmount: 347,
  },
  {
    id: '0097',
    brandName: `MEDI-PEEL`,
    productName: 'Easy Energizing Peel',
    description: `Tonic facial peeling with AHA and BHA acids MEDI-PEEL Derma Maison Easy
     Energizing Peel gently removes the dead layer from the surface of the skin, allowing
      the skin to breathe, and subsequent care to penetrate deeper and act in full force.`,
    ingredients: `Purified water, lactic acid, triethanolamine, modified alcohol, glycolic acid,
     1,2-hexanediol, propylene glycol, allantoin, dipotassium glycyrrhizate, malt extract, bokryeong
      extract, reed extract, Palmitoylpentapeptide-4, Bacillus fermented product, copper tripeptide-1,
       acetylhexapeptide-8, hexapeptide-9, palmitoylhexapeptide-12, acetyloctapeptide-3, butylene glycol,
        hydroxyethylcellulose , PEG-60 Hydrogenated Castor Oil, Cocamidopropyl Betaine, Lecithin,
         Ethylhexyl Glycerin, Sodium Chloride, Salicylic Acid, Sodium Citrate, Citric Acid,
          Polysorbate 20, Fragrance, Disodium EDTA , Sodium benzoate`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0097/medi-peel-easy-peel-1.avif',
      'assets/product-images/0097/medi-peel-easy-peel-2.avif',
      'assets/product-images/0097/medi-peel-easy-peel-3.avif',
    ],
    price: 76,
    bestseller: false,
    segment: 'Korean',
    category: 'Exfoliant',
    for: 'Face',
    availableAmount: 210,
  },
  {
    id: '0098',
    brandName: `MEDI-PEEL`,
    productName: 'Azulene Water Calming Mask',
    description: `MEDI-PEEL Azulene Water Calming Mask is a rinse-off treatment mask
     containing azulene that soothes and provides a cooling sensation to irritated skin.`,
    ingredients: `Matricaria water, Glycerin, Water, 1,2-Hexanediol, Butylene Glycol,
     Panthenol, Betaine, Glyceryl Acrylate/Acrylic AcidCopolymer, Penthylene Glycol,
      Sodium Hyalurante, Hydroxypropyltrimonium Hyalurante, Sodium Acelerated Hyaluronate,
       Hydrolized Hyaluronic Acid, Hyaluronic Acid, Sodium Hyalurante Crosspolymer,
        Hydrolyzed Sodium Hyaloronate, Potassium Hyaluronate, Camelia Sinensis Leaf
         Extract, Matricaria Extract, Centella Asiatica Extract, Lavender Extract,
          Aloe Barbadensis Extract, Wheat Sprout Extract, Broccoli Extract, Cabbage
           Leaf Extract, Alfalfa Extract, Radish Extract, Rapeseed Extract, Origanum
            Vulgare Leaf Extract, Chamaecyparis Obtusa Leaf Extract, Willow Bark Extract,
             Lactobacillus/Soybean Ferment Extract, Portulaca Oleracea Extract, Cinnamomum
              Cassia Bark Extract, Scutellaria Baicalensis Root Extract, Azulene, Dipotassium
               Glycyrrhizate, Arginine, Carbomer, Disodium EDTA, PEG-60 Hydrogated Castor
                Oil, Hydroxyacetophenone, Caprylyc Glycol, Ethylhexylglycerin, CI 17200, CI 42090, Fragrance`,
    starIngredient: '',
    pics: [
      'assets/product-images/0098/medi-peel-azulene-mask-1.avif',
      'assets/product-images/0098/medi-peel-azulene-mask-2.avif',
      'assets/product-images/0098/medi-peel-azulene-mask-3.avif',
    ],
    price: 40,
    bestseller: false,
    segment: 'Korean',
    category: 'Mask',
    for: 'Face',
    availableAmount: 120,
  },
  {
    id: '0099',
    brandName: `MEDI-PEEL`,
    productName: 'Revitenol Multi Repair Cream',
    description: `Anti-aging cream for damaged skin with panthenol and polynucleotides
     MEDI-PEEL Revitenol Multi Repair Cream - intensively restores damaged epidermis,
      while having an anti-aging effect, improves skin turgor. Thanks to strong active
       ingredients in the cream, it renews the skin, improves its protective and barrier
        functions, normalizes water balance, and rejuvenates.`,
    ingredients: `Sea Water, Panthenol, Propanediol, Corylus Avellana (Hazelnut) Seed Oil,
     Polyglyceryl-3 Methylglucose Distearate, 1,2-Hexanediol, Niacinamide, Cyclopentasiloane,
      Water, Stearic acid, Cetearyl Alcohol, Cyclohexasiloxane, Simmondsia Chinensis (Jojoba)
       Seed Oil, Macadamia Integrifolia Seed Oil, Argania Spinosa Kernel Oil, Dimethicone,
        Glyceryl Stearate, Rhizophora Mangle Callus Culture Extract, Dipropylene Giycol,
         Tromethamine, Carbomer, Hydroxyacetophenone, Chamomilla Recutita (Matricaria) Extract,
          Butyrospermum Parkii (Shea) Butter, Betaine, Caprylyl Glycol, Butylene Glycol,
           Ceramide NP, Calcium Pantothenate, Sodium Ascorbyl Phosphate, Pyridoxine HCL,
            Sodium Starch Octenylsuccinate, Maltodextrin, Silica, Tocopheryl Acetate, Adenosine,
             Disodium EDTA, Glycerin, Sodium Hyaluronate, Sodium DNA, Ethylhexylglycerin,
              Hydrolyzed Collagen, Dipotassium Glycyrrhizate, Tripeptide-48, PaImitoyl
               Pentapeptide-4, Copper Tripeptide-1, Acetyl Hexapeptide-8, Myristoyl Pentapeptide-17,
                rh Polypeptide-11, rh-Oligopeptide-1, Spirulina Platensis Extract, Sodium Citrate, Dextrin, Fragrance`,
    starIngredient: '',
    pics: [
      'assets/product-images/0099/medi-peel-revitenol-1.avif',
      'assets/product-images/0099/medi-peel-revitenol-2.avif',
    ],
    price: 40,
    bestseller: false,
    segment: 'Korean',
    category: 'Cream',
    for: 'Face',
    availableAmount: 120,
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
    productName: 'Hydrabio Tonique Moisturising lotion',
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
    productName: 'Hydrabio Lait cleansing milk',
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
    category: 'Exfoliant',
    for: 'Face',
    availableAmount: 26,
  },
  {
    id: '0116',
    brandName: 'Bioderma',
    productName: 'Sébium Sensitive Soin Apaisant',
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
    productName: 'Sebium Global purifying care',
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
    category: 'Exfoliant',
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
    category: 'Exfoliant',
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
    category: 'Exfoliant',
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
    productName: 'Sensibio Défensive Crème légère',
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
    productName: 'Sensibio Défensive Crème riche',
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
    brandName: 'Drunk Elephant',
    productName: 'Jelly Cleanser',
    description: `With a unique blend of mild surfactants and makeup-dissolving emollients,
     this gentle formula rinses away without an ounce of residue, leaving skin clean and soft.`,
    ingredients: `Water/Aqua/Eau, Glycerin, Cocamidopropyl Betaine, Coco-Glucoside,
     Sodium Lauroyl Methyl Isethionate, Cocamidopropyl Hydroxysultaine, Sodium Methyl Oleoyl Taurate,
      Propanediol, Aloe Barbadensis Leaf Extract, Glycolipids, Linoleic Acid, Linolenic Acid, Lauryl
       Glucoside, Cucumis Melo Cantalupensis Fruit Extract, Sclerocarya Birrea Seed Oil, Dipotassium
        Glycyrrhizate, Tocopherol, Citric Acid, Phenoxyethanol, Sodium Hydroxide, Sodium Benzoate,
         Sodium Chloride, Polylysine`,
    starIngredient: '',
    pics: [
      'assets/product-images/0129/drunk-elephant-jelly-cleanser-1.jgp',
      'assets/product-images/0129/drunk-elephant-jelly-cleanser-2.avif',
    ],
    price: 32,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 83,
  },
  {
    id: '0130',
    brandName: 'Drunk Elephant',
    productName: 'Milki Micellar Water',
    description: `Made with ultra-mild micelles, soothing vitamin E, replenishing fatty acids,
     and antioxidant-rich, nonfragrant plant oils (marula, baobab, mongongo, wild melon seed,
       ximenia seed, passionfruit, and sweet almond), E-Rase™ nourishes skin while dissolving
        and lifting away makeup and dirt, is barrier-supportive, and may be used anytime
         you need a quick skin refreshment. `,
    ingredients: `Water/Aqua/Eau, Cetearyl Isononanoate, Propanediol, C15-19 Alkane,
     Dicaprylyl Carbonate, Heptyl Undecylenate, Sclerocarya Birrea Seed Oil, Adansonia
      Digitata Seed Oil, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Schinziophyton Rautanenii
       Kernel Oil, Tocopherol, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Citrullus
        Lanatus (Watermelon) Seed Oil, Ximenia Americana Seed Oil, Sodium Lauroyl Lactylate,
         Ceramide AP, Ceramide EOP, Ceramide NP, Cholesterol, Phytosphingosine, Xanthan Gum,
          Carbomer, Sodium Hydroxide, Phenoxyethanol, Potassium Sorbate, Polysorbate 20, Ethylhexylglycerin`,
    starIngredient: 'Ceramide',
    pics: [
      'assets/product-images/0130/drunk-elephant-milki-cleanser-1.avif',
      'assets/product-images/0130/drunk-elephant-milki-cleanser-2.avif',
      'assets/product-images/0130/drunk-elephant-milki-cleanser-3.avif',
    ],
    price: 28,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 55,
  },
  {
    id: '0131',
    brandName: 'Drunk Elephant',
    productName: 'Makeup Melting Butter',
    description: `Skin-compatible Slaai™ effortlessly removes even water-resistant
     formulations and is free of PEGs and essential oils. Formulated with antioxidant-rich
      fruit extracts and oils to help soothe, plus a nourishing African oil blend of marula,
       baobab, kalahari melon, mongongo, and ximenia, Slaai™ Makeup-Melting Butter Cleanser
        cleanses and moisturizes without any irritants or sensitizers. Designed to be used
         on dry skin, Slaai™ removes excess oil, grime, and makeup from skin. Adding water
          activates Slaai™, transforming it into a milk that rinses cleanly, leaving behind a dewy glow.`,
    ingredients: `Ethylhexyl Palmitate, Caprylic/Capric Triglyceride, Carthamus Tinctorius
     (Safflower) Seed Oil, Lauryl Laurate, Polyglyceryl-3 Laurate, Polyhydroxystearic Acid,
      Helianthus Annuus (Sunflower) Seed Wax, Polyglyceryl-10 Laurate, Sclerocarya Birrea Seed
       Oil, Euterpe Oleracea Fruit Oil, Actinidia Chinensis (Kiwi) Fruit Extract, Fragaria
        Ananassa (Strawberry) Seed Extract, Vaccinium Macrocarpon (Cranberry) Seed Oil,
         Borago Officinalis Seed Oil, Adansonia Digitata Seed Oil, Polyglyceryl-2 Caprate,
          Citrullus Lanatus (Watermelon) Seed Oil, Prunus Amygdalus Dulcis (Sweet Almond)
           Oil, Schinziophyton Rautanenii Kernel Oil, Vaccinium Angustifolium (Blueberry)
            Fruit Extract, Ximenia Americana Seed Oil, Tocopherol, Glycerin`,
    starIngredient: '',
    pics: [
      'assets/product-images/0131/drunk-elephant-melting-butter-1.avif',
      'assets/product-images/0131/drunk-elephant-melting-butter-2.avif',
      'assets/product-images/0131/drunk-elephant-melting-butter-3.avif',
      'assets/product-images/0131/drunk-elephant-melting-butter-4.avif',
    ],
    price: 34,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 208,
  },
  {
    id: '0132',
    brandName: 'Drunk Elephant',
    productName: 'Juju Bar',
    description: `This multitasking bar is designed to effectively cleanse while gently
     removing dead skin cells from the surface of the skin. Infused with a blend of thermal
      mud, marula, bamboo, and superfruit, this unique formulation creates a creamy lather
       that dissolves excess oil, pore-clogging surface debris, and impurities while gently
        exfoliating dead skin cells. Skin feels softer and smoother with improved clarity.`,
    ingredients: `Sodium Coco-Sulfate, Disodium Lauryl Sulfosuccinate, Triticum Vulgare (Wheat)
     Starch, Cetearyl Alcohol, Bambusa Vulgaris Leaf/Stem Extract, Paraffin, Sclerocarya Birrea
      Seed Oil, Water/Aqua/Eau, Heilmoor Clay, Titanium Dioxide (CI 77891), Helianthus Annuus
       (Sunflower) Seed Oil, Euterpe Oleracea Fruit Extract, Lycium Barbarum Fruit Extract`,
    starIngredient: '',
    pics: [
      'assets/product-images/0132/drunk-elephant-juju-bar-1.avif',
      'assets/product-images/0132/drunk-elephant-juju-bar-2.avif',
      'assets/product-images/0132/drunk-elephant-juju-bar-3.avif',
      'assets/product-images/0132/drunk-elephant-juju-bar-4.avif',
    ],
    price: 28,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 208,
  },
  {
    id: '0133',
    brandName: 'Drunk Elephant',
    productName: 'Pekee Bar',
    description: `Infused with a blend of blueberry extract, marula oil, and honey, Pekee Bar™ tones
     and promotes moisture retention for skin that feels firmer and more elastic. Pekee Bar™ is
      totally fragrance- and soap-free and formulated with only skin-friendly ingredients designed
       to cleanse and calm the skin.`,
    ingredients: `Sodium Coco-Sulfate, Disodium Lauryl Sulfosuccinate, Triticum Vulgare (Wheat)
     Starch, Cetearyl Alcohol, Paraffin, Sclerocarya Birrea Seed Oil, Water/Aqua/Eau,
      Titanium Dioxide (CI 77891), Honey/Mel/Miel, Glycerin, Vaccinium Angustifolium (Blueberry) Fruit Extract`,
    starIngredient: '',
    pics: [
      'assets/product-images/0133/drunk-elephant-pekee-bar-1.avif',
      'assets/product-images/0133/drunk-elephant-pekee-bar-2.avif',
      'assets/product-images/0133/drunk-elephant-pekee-bar-3.avif',
      'assets/product-images/0133/drunk-elephant-pekee-bar-4.avif',
    ],
    price: 28,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 190,
  },
  {
    id: '0134',
    brandName: 'Drunk Elephant',
    productName: 'C-Firma™ Fresh Day Serum',
    description: `C-Firma™ Fresh Day Serum is designed to be mixed by you before its first use, which
     maximizes the potency of its delicate (but powerful) ingredients while keeping the formula fresh.
      This revolutionary vitamin C serum is packed with a powerful antioxidant complex of 15% l-ascorbic
       acid, 0.5% ferulic acid, and 1% vitamin E to reveal a brighter, firmer, and more even-looking
        complexion. Potently formulated with pumpkin ferment extract and sodium hyaluronate crosspolymer,
         C-Firma™ helps to enzymatically dissolve surface dead skin cells as it hydrates and soothes.
          The result is a noticeably diminished appearance of signs of aging and photodamage—replaced
           by incredible radiance and luminosity.`,
    ingredients: `Water/Aqua/Eau, Dimethyl Isosorbide, Ascorbic Acid, Laureth-23, Glycerin, Tocopherol,
     Lactobacillus/Pumpkin Ferment Extract, Sclerocarya Birrea Seed Oil, Dipotassium Glycyrrhizate,
      Glycyrrhiza Glabra (Licorice) Root Extract, Vitis Vinifera (Grape) Juice Extract, Ferulic Acid,
       Phyllanthus Emblica Fruit Extract, Camellia Sinensis Leaf Extract, Lactobacillus/Punica
        Granatum Fruit Ferment Extract, Propanediol, Gluconolactone, Sodium Hyaluronate Crosspolymer,
         Sodium Hyaluronate, Oryza Sativa (Rice) Bran Extract, Glutamylamidoethyl Imidazole,
          Tetrahydrobisdemethoxydiferuloylmethane, Tetrahydrodemethoxydiferuloylmethane,
           Tetrahydrodiferuloylmethane, Pentylene Glycol, Caprylhydroxamic Acid, Leuconostoc/Radish Root
            Ferment Filtrate, Sorbic Acid, Phenoxyethanol, Sodium Benzoate, Caprylyl Glycol, Chondrus
             Crispus (Carrageenan) Extract, Ethylhexylglycerin`,
    starIngredient: 'Vitamin C',
    pics: [
      'assets/product-images/0134/drunk-elephant-c-firma-1.avif',
      'assets/product-images/0134/drunk-elephant-c-firma-2.avif',
      'assets/product-images/0134/drunk-elephant-c-firma-3.avif',
      'assets/product-images/0134/drunk-elephant-c-firma-4.avif',
    ],
    price: 78,
    bestseller: true,
    segment: 'USA / Canada',
    category: 'Serum',
    for: 'Face',
    availableAmount: 86,
  },
  {
    id: '0135',
    brandName: 'Drunk Elephant',
    productName: 'O-Bloos™ Rosi Drops',
    description: `O-Bloos™ (the O stands for omegas) gives skin that flattering “nobody knows why you’re
     flushed” flush. The foolproof, watercolor-light formula is buildable and flatters most skin, and
      it’s delivered in concentrated drops that can be mixed into your other Drunk Elephant products.`,
    ingredients: `Water/Aqua/Eau, Hydrogenated Polyisobutene, Glyceryl Oleate Citrate, Hydroxyethyl
     Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Glycerin, Ribes Nigrum (Black Currant) Seed Oil,
      Sclerocarya Birrea Seed Oil, Theobroma Cacao (Cocoa) Extract, Caprylic/Capric Triglyceride, Palmitoyl
       Tripeptide-1, Vitis Vinifera (Grape) Juice Extract, Caesalpinia Sappan Bark Extract, Sodium Lactate,
        Palmitoyl Tetrapeptide-7, Linoleic Acid, Linolenic Acid, Sorbitan Isostearate, Camellia Sinensis Leaf
         Extract, Propanediol, Sodium Hyaluronate Crosspolymer, Glutamylamidoethyl Imidazole, Silica, Butylene
          Glycol, Tocopherol, Polysorbate 20, Carbomer, Xanthan Gum, Phenoxyethanol, Pentylene Glycol, Sodium
           Benzoate, Sorbic Acid, Sodium Citrate, Caprylyl Glycol, Boron Nitride, Hexylene Glycol, Polysorbate
            60, Ethylhexylglycerin, Tin Oxide`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0135/drunk-elephant-rosi-drops-1.avif',
      'assets/product-images/0135/drunk-elephant-rosi-drops-2.avif',
      'assets/product-images/0135/drunk-elephant-rosi-drops-3.avif',
      'assets/product-images/0135/drunk-elephant-rosi-drops-4.avif',
    ],
    price: 35,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Serum',
    for: 'Face',
    availableAmount: 85,
  },
  {
    id: '0136',
    brandName: 'Drunk Elephant',
    productName: 'T.L.C. Framboos™ Glycolic Night Serum',
    description: `Formulated with our dream team of glycolic, tartaric, lactic, citric, and salicylic
     acids and blended with raspberry extract and horse chestnut, T.L.C. Framboos™ curbs excess oiliness
      as it reveals greater clarity and luminosity. It also enhances the performance of other products
       by clearing the way for maximum absorption. T.L.C. Framboos™ sinks in easily and delivers an
        effective level of chemical exfoliation without harsh side effects, like dryness or sensitization.
         Go from a drab complexion to an absolutely luminous one, practically overnight.`,
    ingredients: `Water/Aqua/Eau, Glycolic Acid, Butylene Glycol, Glycerin, Sodium Hydroxide,
     Lactic Acid, Salicylic Acid, Tartaric Acid, Vitis Vinifera (Grape) Juice Extract, Aloe
      Barbadensis Leaf Juice, Opuntia Ficus-Indica Extract, Aesculus Hippocastanum (Horse Chestnut)
       Seed Extract, Camellia Sinensis Leaf Extract, Rubus Idaeus (Raspberry) Fruit Extract, Saccharomyces
        Cerevisiae Extract, Buddleja Davidii Meristem Cell Culture, Sclerocarya Birrea Seed Oil,
         Sodium Hyaluronate Crosspolymer, Allantoin, Hydroxyethylcellulose, Galactoarabinan, Propanediol,
          Citric Acid, Tetrasodium Glutamate Diacetate, Xanthan Gum, Hexylene Glycol, Phenoxyethanol,
           Sodium Benzoate, Caprylyl Glycol, Potassium Sorbate, Pentylene Glycol, Sodium Carbonate,
            Sodium Chloride, Disodium Phosphate, Sodium Phosphate, Ethylhexylglycerin`,
    starIngredient: '',
    pics: [
      'assets/product-images/0136/drunk-elephant-glycolic-night-serum-1.avif',
      'assets/product-images/0136/drunk-elephant-glycolic-night-serum-2.avif',
      'assets/product-images/0136/drunk-elephant-glycolic-night-serum-3.avif',
      'assets/product-images/0136/drunk-elephant-glycolic-night-serum-4.avif',
    ],
    price: 134,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Serum',
    for: 'Face',
    availableAmount: 20,
  },
  {
    id: '0137',
    brandName: 'Drunk Elephant',
    productName: 'B-Hydra™ Intensive Hydration Serum',
    description: `Formulated with pro-vitamin B5 and pineapple ceramide, B-Hydra™
     delivers steady hydration throughout the day, leaving the skin looking healthy and more
      illuminated. Blended with a unique lentil-apple-and-watermelon complex, B-Hydra™ helps
       diminish drabness, dryness, and the appearance of fine lines. Your complexion
        will appear brighter and more youthful upon every application.`,
    ingredients: `Water/Aqua/Eau, Coconut Alkanes, Ammonium Acryloyldimethyltaurate/VP Copolymer,
     Glycerin, Pentylene Glycol, Sclerocarya Birrea Seed Oil, Wheat Amino Acids, Ananas Sativus
      (Pineapple) Fruit Extract, Berberis Vulgaris Root Extract, Citrullus Lanatus (Watermelon)
       Fruit Extract, Lens Esculenta (Lentil) Fruit Extract, Pyrus Malus (Apple) Fruit Extract,
        Coco-Caprylate/Caprate, Panthenol, Sodium PCA, Sodium Hyaluronate Crosspolymer,
         Dipotassium Glycyrrhizate, Niacinamide, Cyclodextrin, Sodium Hyaluronate, Sodium
          Lactate, Phenoxyethanol, Hydroxyproline, Trisodium Ethylenediamine Disuccinate,
           Citric Acid, Caprylyl Glycol, Chlorphenesin, Ethylhexylglycerin`,
    starIngredient: '',
    pics: [
      'assets/product-images/0137/drunk-elephant-hydra-serum-1.avif',
      'assets/product-images/0137/drunk-elephant-hydra-serum-2.avif',
      'assets/product-images/0137/drunk-elephant-hydra-serum-3.avif',
      'assets/product-images/0137/drunk-elephant-hydra-serum-4.avif',
    ],
    price: 48,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Serum',
    for: 'Face',
    availableAmount: 60,
  },
  {
    id: '0138',
    brandName: 'Drunk Elephant',
    productName: 'Protini™ Powerpeptide Resurf Serum',
    description: `With its ultra-concentrated blend of 11 peptides, Protini™ Powerpeptide
     Resurf Serum delivers plump, bouncy skin while targeting a dull, uneven complexion.
      The appearance of fine lines, sun damage, and enlarged pores is improved and glow is
       restored, while powerful water-boosting ingredients (such as snow mushroom extract,
         sodium hyaluronate, and sodium PCA) replenish hydration levels. Antioxidant-rich,
          nonfragrant plant oils and vitamins (tocotrienols, squalane, green tea seed oil,
             and marula oil) soothe while adding a touch of lightweight moisture to skin.  `,
    ingredients: `Water/Aqua/Eau, Glycerin, Lactic Acid, Dicaprylyl Carbonate, Squalane, Sodium
     Hydroxide, Glycine Max (Soybean) Seed Extract, Sclerocarya Birrea Seed Oil, Camellia
      Sinensis Seed Oil, Sodium PCA, Caprylic/Capric Triglyceride, Borago Officinalis Seed Oil,
       Tremella Fuciformis Polysaccharide, Tocotrienols, Sh-Oligopeptide-1, Sh-Oligopeptide-2,
        Sh-Polypeptide-1, Sh-Polypeptide-9, Sh-Polypeptide-11, Copper Palmitoyl Heptapeptide-14,
         Heptapeptide-15 Palmitate, Palmitoyl Tetrapeptide-7, Palmitoyl Tripeptide-1, Palmitoyl
          Tripeptide-38, Palmitoyl Hexapeptide-12, Tripeptide-1, Pyrus Malus (Apple) Fruit Extract,
           Propanediol, Sodium Hyaluronate, Panthenol, Sodium Hyaluronate Crosspolymer, Sodium
            Lactate, PCA, Alanine, Arginine, Glycine, Histidine, Isoleucine, Phenylalanine,
             Proline, Serine, Threonine, Valine, Adenosine, Nymphaea Alba Root Extract,
              Bacillus/Folic Acid Ferment Filtrate Extract, Symphytum Officinale Callus
               Culture Extract, Dextran, Oryza Sativa (Rice) Bran Oil, Linoleic Acid,
                Linolenic Acid, Butylene Glycol, Acetyl Glutamine, Coconut Alkanes,
                 Coco-Caprylate/Caprate, Pentylene Glycol, Isomalt, Lecithin, Xanthan Gum,
                  Aspartic Acid, Phytosphingosine, Phospholipids, Glycine Soja (Soybean)
                   Sterols, Tocopherol, Citric Acid, Lactic Acid/Glycolic Acid Copolymer,
                    Polyvinyl Alcohol, Phenoxyethanol, Sodium Benzoate, Hydroxypropyl Cyclodextrin,
                     Polysorbate 20, Caprylyl Glycol, Phenylpropanol, Chlorphenesin, Carbomer,
                      Glyceryl Caprylate, Ethylhexylglycerin`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0138/drunk-elephant-protiti-serum-1.avif',
      'assets/product-images/0138/drunk-elephant-protiti-serum-2.avif',
      'assets/product-images/0138/drunk-elephant-protiti-serum-3.avif',
      'assets/product-images/0138/drunk-elephant-protiti-serum-4.avif',
    ],
    price: 82,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Serum',
    for: 'Face',
    availableAmount: 28,
  },
  {
    id: '0139',
    brandName: 'Drunk Elephant',
    productName: 'Protini™ Polypeptide Cream',
    description: `Protini’s proprietary formula restores younger, revived-looking skin,
     almost from the first application. Lines, wrinkles, and signs of sun damage appear
      reduced, and skin feels strengthened and moisturized.`,
    ingredients: `Water/Aqua/Eau, Dicaprylyl Carbonate, Glycerin, Cetearyl Alcohol,
     Cetearyl Olivate, Sorbitan Olivate, Sclerocarya Birrea Seed Oil, Bacillus/Folic
      Acid Ferment Extract, Nymphaea Alba Root Extract, sh-Oligopeptide-1, sh-Oligopeptide-2,
       sh-Polypeptide-1, sh-Polypeptide-9, sh-Polypeptide-11, Copper Palmitoyl Heptapeptide-14,
        Heptapeptide-15 Palmitate, Palmitoyl Tetrapeptide-7, Palmitoyl Tripeptide-1, Alanine,
         Arginine, Glycine, Histidine, Isoleucine, Phenylalanine, Proline, Serine, Threonine,
          Valine, Acetyl Glutamine, Coconut Alkanes, Coco-Caprylate/Caprate, Sodium Hyaluronate,
           Aspartic Acid, Linoleic Acid, Linolenic Acid, Lecithin, Butylene Glycol, Polyvinyl
            Alcohol, Sodium Lactate, Sodium PCA, PCA, Sorbitan Isostearate, Carbomer, Polysorbate
             20, Polysorbate 60, Lactic Acid/Glycolic Acid Copolymer, Hydroxyethyl Acrylate/Sodium
              Acryloyldimethyl Taurate Copolymer, Xanthan Gum, Isomalt, 1,2-Hexanediol, Caprylyl
               Glycol, Chlorphenesin, Phenoxyethanol, Tocopherol, Sodium Benzoate, Phenylpropanol,
                Glyceryl Caprylate, Symphytum Officinale Callus Culture Extract`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0139/drunk-elephant-protini-cream-1.avif',
      'assets/product-images/0139/drunk-elephant-protini-cream-2.avif',
      'assets/product-images/0139/drunk-elephant-protini-cream-3.avif',
      'assets/product-images/0139/drunk-elephant-protini-cream-4.avif',
    ],
    price: 68,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cream',
    for: 'Face',
    availableAmount: 93,
  },
  {
    id: '0140',
    brandName: 'Drunk Elephant',
    productName: 'Lala Retro™ Whipped Cream',
    description: `Lala Retro™ is a whipped dream-come-true for tired, dry skin. This
     multifaceted rescue cream, infused with six African oils and a plant ceramide complex,
      provides replenishing barrier support by reinforcing skin’s acid mantle and defending
       against the effects of everyday stressors. Sodium hyaluronate crosspolymer easily soaks
        in to release intense hydration. In addition, antioxidant-rich fermented green tea
         helps combat signs of aging. Loaded with omega acids, Lala helps skin retain long-lasting
          moisture, forming a protective layer that allows skin to function at its optimal level.`,
    ingredients: `Water/Aqua/Eau, Glycerin, Caprylic/Capric Triglyceride, Isopropyl Isostearate,
     Pseudozyma Epicola/Camellia Sinensis Seed Oil/Glucose/Glycine Soja (Soybean) Meal/Malt
      Extract/Yeast Extract Ferment Filtrate, Glyceryl Stearate SE, Cetearyl Alcohol, Palmitic
       Acid, Stearic Acid, Pentylene Glycol, Plantago Lanceolata Leaf Extract, Adansonia Digitata
        Seed Oil, Citrullus Lanatus (Watermelon) Seed Oil, Passiï¬‚ora Edulis Seed Oil, Schinziophyton
         Rautanenii Kernel Oil, Sclerocarya Birrea Seed Oil, Polyglyceryl-6 Ximenia Americana Seedate,
          Cholesterol, Ceramide AP, Ceramide EOP, Sodium Hyaluronate Crosspolymer, Ceramide NP,
           Phytosphingosine, Ceteareth-20, Trisodium Ethylenediamine Disuccinate, Tocopherol,
            Sodium Lauroyl Lactylate, Sodium Hydroxide, Citric Acid, Carbomer, Xanthan Gum,
             Caprylyl Glycol, Chlorphenesin, Phenoxyethanol, Ethylhexylglycerin`,
    starIngredient: 'Ceramide',
    pics: [
      'assets/product-images/0140/drunk-elephant-lala-cream-1.avif',
      'assets/product-images/0140/drunk-elephant-lala-cream-2.avif',
      'assets/product-images/0140/drunk-elephant-lala-cream-3.avif',
      'assets/product-images/0140/drunk-elephant-lala-cream-4.avif',
    ],
    price: 60,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cream',
    for: 'Face',
    availableAmount: 218,
  },
  {
    id: '0141',
    brandName: 'Drunk Elephant',
    productName: 'Virgin Marula Facial Oil',
    description: `Straight from the pip of the marula fruit, our pure, unrefined oil is virtually
     untouched by any chemical or fragrance, natural or synthetic. This super-absorbable oil will
      quickly sink in and diminish the look of fine lines and wrinkles. Appropriate for all skin,
       including the most sensitive. Our marula oil contains greater concentrations of polyphenols
        than dark chocolate or green or black teas, which means a powerful antioxidant defense
         against pollution and damaging environmental free radicals. `,
    ingredients: `100% Unrefined Sclerocarya Birrea (Marula) Kernel Oil`,
    starIngredient: 'Ceramide',
    pics: [
      'assets/product-images/0141/drunk-elephant-marula-oil-1.avif',
      'assets/product-images/0141/drunk-elephant-marula-oil-2.avif',
      'assets/product-images/0141/drunk-elephant-marula-oil-3.avif',
      'assets/product-images/0141/drunk-elephant-marula-oil-4.avif',
    ],
    price: 68,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Oil',
    for: 'Face',
    availableAmount: 37,
  },
  {
    id: '0142',
    brandName: 'Drunk Elephant',
    productName: 'Bouncy Brightfacial™',
    description: `Skin-soothing azelaic acid and exfoliating salicylic acid work together
     to correct the appearance of blemishes and discoloration while improving skin’s texture
      and tone. A triple-antioxidant brightening complex targets dark spots, hyperpigmentation,
       visible signs of photodamage, and post-acne marks to promote dramatically more radiant and
        clearer-looking skin. Moisturizing plant oils—marula, chia, fermented green tea,
         and pumpkin seed—replenish, while ceramides, niacinamide, tocotrienols, and fatty acids
          strengthen and support a healthy skin barrier. All of which adds up to brighter,
           clearer, and happier skin—and mood.`,
    ingredients: `Water/Aqua/Eau, Azelaic Acid, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer,
     Salicylic Acid, Glycerin, Cucurbita Pepo (Pumpkin) Seed Oil, Salvia Hispanica Seed Oil, Sclerocarya
      Birrea Seed Oil, Pentylene Glycol, Diglucosyl Gallic Acid, Niacinamide, Phloretin, Allantoin, Ferulic Acid,
       Dipotassium Glycyrrhizate, Tremella Fuciformis Sporocarp Extract, Behenic Acid, Glutathione, Linoleic Acid,
        Tocotrienols, Thioctic Acid, Linolenic Acid, Ergothioneine, Cholesterol, Ceramide NS, Ceramide AP,
         Ceramide EOP, Ceramide EOS, Ceramide NP, Sodium Hyaluronate Crosspolymer, Amylopectin, Ellagic Acid,
          Pseudozyma Epicola/Camellia Sinensis Seed Oil Ferment Extract Filtrate, Caprooyl Phytosphingosine,
           Caprooyl Sphingosine, Squalane, Ascorbyl Palmitate, Acetyl Glucosamine, Punica Granatum Extract,
            Dextrin, Sebacic Acid, Oryza Sativa (Rice) Bran Oil, Tocopherol, Ceteareth-25, Phenoxyethanol,
             Sorbitan Isostearate, Polydextrose, Cetyl Alcohol, Caprylyl Glycol, Chlorphenesin,
              Polysorbate 60, Ethylhexylglycerin`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0142/drunk-elephant-bouncy-brightfacial-1.avif',
      'assets/product-images/0142/drunk-elephant-bouncy-brightfacial-2.avif',
      'assets/product-images/0142/drunk-elephant-bouncy-brightfacial-3.avif',
      'assets/product-images/0142/drunk-elephant-bouncy-brightfacial-4.avif',
    ],
    price: 68,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Exfoliant',
    for: 'Face',
    availableAmount: 19,
  },
  {
    id: '0143',
    brandName: 'Drunk Elephant',
    productName: 'Wonderwild™ Miracle Midi',
    description: `Restorative plant butters—marula, cupuaçu, mango, and shea—help shield skin from
     environmental stressors, while antioxidant- and fatty-acid-rich plant oils (such as meadowfoam,
       pumpkin, green tea seed, kukui, and rose hip) replenish vital lipids to deeply nourish and
        strengthen a temporarily compromised skin barrier, bringing skin back to its healthiest state.`,
    ingredients: `Sclerocarya Birrea Seed Oil, Cocos Nucifera (Coconut) Oil, Hydrogenated Vegetable Oil,
     Cucurbita Pepo (Pumpkin) Seed Oil, Butyrospermum Parkii (Shea) Butter, Sclerocarya Birrea Seed Butter,
      Mangifera Indica (Mango) Seed Butter, Theobroma Grandiflorum Seed Butter, Camellia Sinensis Seed
       Oil, Rosa Canina Fruit Oil, Aleurites Moluccanus Seed Oil, Simmondsia Chinensis (Jojoba) Seed Oil,
        Limnanthes Alba (Meadowfoam) Seed Oil, Oryza Sativa (Rice) Bran Oil, Persea Gratissima (Avocado)
         Oil, Helianthus Annuus (Sunflower) Seed Wax, Vitis Vinifera (Grape) Seed Oil`,
    starIngredient: '',
    pics: [
      'assets/product-images/0143/drunk-elephant-wonderwild-mask-1.avif',
      'assets/product-images/0143/drunk-elephant-wonderwild-mask-2.avif',
      'assets/product-images/0143/drunk-elephant-wonderwild-mask-3.avif',
      'assets/product-images/0143/drunk-elephant-wonderwild-mask-4.avif',
    ],
    price: 36,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Oil',
    for: 'Face',
    availableAmount: 35,
  },
  {
    id: '0144',
    brandName: 'Drunk Elephant',
    productName: 'A-Gloei™ Maretinol Oil',
    description: `A gentle dose of retinol clarifies, refines, and smooths uneven, blemished, textured,
     or aging skin. It also evens out tone, reducing discoloration and boosting skin’s natural glow,
      while ceramides replenish the skin barrier and improve elasticity. Antioxidant- and omega-rich
       virgin marula oil (which makes up 95% of the formula!) replenishes essential moisture and
        reduces the appearance of redness, bringing skin back to its healthiest, most youthful state.`,
    ingredients: `Sclerocarya Birrea Seed Oil, Glycine Soja (Soybean) Oil, Retinol, Tocopherol,
     Ceramide AP, Ceramide NP`,
    starIngredient: 'Retinol',
    pics: [
      'assets/product-images/0144/drunk-elephant-retinol-1.avif',
      'assets/product-images/0144/drunk-elephant-retinol-2.avif',
      'assets/product-images/0144/drunk-elephant-retinol-3.avif',
      'assets/product-images/0144/drunk-elephant-retinol-4.avif',
    ],
    price: 72,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Serum',
    for: 'Face',
    availableAmount: 101,
  },
  {
    id: '0145',
    brandName: 'Drunk Elephant',
    productName: 'A-Passioni™ Retinol Cream',
    description: `Retinol and supportive peptides restore bounce, resilience, and a brighter
     clarity to skin while helping to even skin tone and texture—without the associated redness
      and irritation. Vitamin F and a blend of comforting passionfruit, apricot, marula, and
       jojoba oils replenish essential lipids and moisture, while antioxidant-packed kale,
        winter cherry, and xanthophylls help defend against environmental stressors. It’s
         like a reboot of your skin back to its healthiest, most youthful state.`,
    ingredients: `Water/Aqua/Eau, Glycerin, Coco-Caprylate, Stearic Acid, Coconut Alkanes,
     Glyceryl Stearate, Niacinamide, Caprylic/Capric Triglyceride, Cetearyl Alcohol, Pentylene
      Glycol, Passiflora Edulis Seed Oil, Retinol, Simmondsia Chinensis (Jojoba) Seed Oil,
       Sclerocarya Birrea Seed Oil, Prunus Armeniaca (Apricot) Kernel Oil, Cetyl Ethylhexanoate,
        Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Brassica Oleracea Acephala Leaf Extract,
         Brassica Oleracea Italica (Broccoli) Extract, Tetrahexyldecyl Ascorbate, Chrysin, Persea
          Gratissima (Avocado) Oil, Linoleic Acid, Linolenic Acid, Ceramide NP, Xanthophylls,
           Phytosphingosine, Phytosterols, Jojoba Esters, Physalis Pubescens Fruit Juice, Stearyl
            Glycyrrhetinate, Oryza Sativa (Rice Bran) Extract, Glycine Soja (Soybean) Oil,
             Carthamus Tinctorium (Safflower) Seed Oil, Palmitoyl Hexapeptide-12, Cetyl Palmitate,
              Trehalose, Lauric Acid, Sodium Hyaluronate Crosspolymer, Olea Europaea (Olive)
               Fruit Oil, Glucosamine HCL, Tocopheryl Acetate, Coco-Caprylate/Caprate, Pisum
                Sativum (Pea) Extract, Tocopherol, Bambusa Vulgaris Leaf/Stem Extract, Phenoxyethanol,
                 Caprylyl Glycol, Carbomer, Trideceth-6 Phosphate, N-Hydroxysuccinimide, Ceteareth-20,
                  Sodium Hydroxide, Laureth-23, Steareth-20, Propanediol, Chlorhexidine Digluconate,
                   Polysorbate 20, Trisodium Ethylenediamine Disuccinate, Chlorphenesin,
                    Potassium Sorbate, Ethylhexylglycerin`,
    starIngredient: 'Retinol',
    pics: [
      'assets/product-images/0145/drunk-elephant-retinol-cream-1.avif',
      'assets/product-images/0145/drunk-elephant-retinol-cream-2.avif',
      'assets/product-images/0145/drunk-elephant-retinol-cream-3.avif',
      'assets/product-images/0145/drunk-elephant-retinol-cream-4.avif',
    ],
    price: 74,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cream',
    for: 'Face',
    availableAmount: 189,
  },
  {
    id: '0146',
    brandName: 'Drunk Elephant',
    productName: 'T.L.C. Sukari Babyfacial™',
    description: `This next-generation mask is an at-home “facial” that effectively
     yet gently exfoliates the pore lining and resurfaces by getting rid of built-up dead
      skin cells. With a whopping 25% AHA / 2% BHA blend of our dream team glycolic, tartaric,
       lactic, citric, and salicylic acids, this pro-quality formula dramatically smooths
        texture while minimizing the look of pores, fine lines, and wrinkles. Uniquely
         formulated with chickpea flour, pumpkin ferment, and a soothing antioxidant blend
          of matcha tea, milk thistle, and apple, Babyfacial™ delivers incredible brightening
           and enzymatic action, improves skin’s elastic feel, and reveals the look of a more
            even, radiant, baby-soft complexion. Think of it as an extra nudge for stubborn dull skin.`,
    ingredients: `Water (Aqua), Glycolic Acid, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl
     Taurate Copolymer, Glycerin, Sodium Hydroxide, Salicylic Acid, Aloe Barbadensis Leaf Extract,
      Camellia Oleifera Leaf Extract, Lactobacillus/Pumpkin Ferment Extract, Lactobacillus/Punica
       Granatum Fruit Ferment Extract, Opuntia Ficus-Indica Extract, Pyrus Malus (Apple) Fruit
        Extract, Silybum Marianum Seed Extract, Saccharomyces Cerevisiae Extract, Vitis Vinifera
         (Grape) Juice Extract, Camellia Sinensis Leaf Powder, Cicer Arietinum Seed Powder,
          Sclerocarya Birrea Seed Oil, Passiflora Edulis Seed Oil, Leuconostoc/Radish Root
           Ferment Filtrate, Sodium Hyaluronate Crosspolymer, Sodium PCA, Allantoin, Dipotassium
            Glycyrrhizate, Dextrin, Polydextrose, Sorbitan Isostearate, Amylopectin, Niacinamide,
             Phytosphingosine, Lactic Acid, Propanediol, Citric Acid, Titanium Dioxide, Trisodium
              Ethylenediamine Disuccinate, Polysorbate 60, Caprylyl Glycol, Chlorphenesin, Phenoxyethanol`,
    starIngredient: '',
    pics: [
      'assets/product-images/0146/drunk-elephant-sukari-babyfacial-1.avif',
      'assets/product-images/0146/drunk-elephant-sukari-babyfacial-2.avif',
      'assets/product-images/0146/drunk-elephant-sukari-babyfacial-3.avif',
      'assets/product-images/0146/drunk-elephant-sukari-babyfacial-4.avif',
    ],
    price: 80,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Exfoliant',
    for: 'Face',
    availableAmount: 36,
  },
  {
    id: '0147',
    brandName: 'Drunk Elephant',
    productName: 'F-Balm™ Electrolyte Waterfacial',
    description: `With a blend of barrier-replenishing ingredients, including niacinamide, sodium PCA,
     plant squalane, five forms of ceramides, omega fatty acids, and powerful antioxidants, F-Balm™
      effectively rehydrates hungover, overly parched skin, making it soft and supple. Tiny beads
       loaded with vitamin F burst during application to deliver extra emollience and soothing hydration.`,
    ingredients: `Water/Aqua/Eau, Squalane, Propanediol, Niacinamide, Olive Oil Glycereth-8 Esters,
     Coconut Alkanes, Cocos Nucifera (Coconut) Water, Simmondsia Chinensis (Jojoba) Seed Oil, Ammonium
      Acryloyldimethyltaurate/VP Copolymer, Glycerin, Mannitol, Sclerocarya Birrea Seed Oil, Sclerocarya
       Birrea Seed Butter, Sodium PCA, Opuntia Tuna Fruit Extract, Linum Usitatissimum (Linseed) Seed
        Oil, Sorbitol, Quercetin, Trehalose, Zea Mays (Corn) Oil, Cetyl Alcohol, Sucrose, Creatine,
         Inositol, Pentylene Glycol, Ferulic Acid, Hydroxytyrosol, Behenic Acid, Linoleic Acid, Cholesterol,
          Ceramide NS, Ceramide AP, Ceramide EOS, Ceramide NP, Ceramide EOP,  Phospholipids, Sodium Hyaluronate
           Crosspolymer, Magnesium PCA, Microcrystalline Cellulose, Adenosine, Sodium Hyaluronate, Xanthan Gum,
            Caprooyl Phytosphingosine, Ascorbyl Palmitate, Hydroxypropyl Methylcellulose, Caprooyl Sphingosine,
             Coco-Caprylate/Caprate, Ceteareth-25, Citric Acid, Glyceryl Caprylate, Phenoxyethanol, Caprylyl
              Glycol, Sodium Benzoate, Tocopherol, Chlorphenesin, Potassium Sorbate, Ethylhexylglycerin`,
    starIngredient: 'Ceramide',
    pics: [
      'assets/product-images/0147/drunk-elephant-electrolyte-1.avif',
      'assets/product-images/0147/drunk-elephant-electrolyte-2.avif',
      'assets/product-images/0147/drunk-elephant-electrolyte-3.avif',
      'assets/product-images/0147/drunk-elephant-electrolyte-4.avif',
    ],
    price: 52,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cream',
    for: 'Face',
    availableAmount: 176,
  },
  {
    id: '0148',
    brandName: 'Drunk Elephant',
    productName: 'Sweet Biome™ Fermented Sake Spray',
    description: `Sweet Biome’s cocktail of fermented sake extract, kombucha, and hops supplies skin with
    nutrient-dense substances that restore, soothe, and contribute to a balanced and healthy acid mantle
     and microbiome. Powerful electrolytes—coconut water and sodium PCA— provide potent antioxidant
      protection and critical hydration while natural minerals zinc, copper, and calcium gluconate help
       reduce redness and promote healthy collagen production. Ceramides, vitamin F, and essential
        amino acids keep skin soft, flexible, and moisturized.`,
    ingredients: `Water/Aqua/Eau, Sodium PCA, Propanediol, Galactomyces Ferment Filtrate, Glycerin,
     Beta Vulgaris (Beet) Root Extract, Fructooligosaccharides, Saccharomyces/Xylinum/Black Tea
      Ferment, Cocos Nucifera (Coconut) Fruit Juice, Sclerocarya Birrea Seed Oil, Lactic Acid,
       Pentylene Glycol, Sodium Hyaluronate Crosspolymer, Zinc Gluconate, Sodium Lactate, Magnesium
        Aspartate, PCA, Alanine, Arginine,  Glycine, Histidine, Isoleucine, Phenylalanine, Proline,
         Serine, Threonine, Valine, Aspartic Acid, Calcium Gluconate, Copper Gluconate,  Trehalose,
          Linoleic Acid, Linolenic Acid, Ceramide AP, Ceramide EOP, Ceramide NP, Phytosphingosine,
           Cholesterol, Xylitol, Humulus Lupulus  (Hops) Extract, Hyaluronic Acid, Sodium Lauroyl
            Lactylate, Tapioca Starch, Tetrasodium Glutamate Diacetate, Xanthan Gum, Potassium Lactate,
             Polysorbate 20, Citric Acid, Carbomer, Phenoxyethanol, Sodium Benzoate, Tocopherol,
              Sodium Hydroxide, Potassium Sorbate, Ethylhexylglycerin`,
    starIngredient: 'Galactomyces',
    pics: [
      'assets/product-images/0148/drunk-elephant-sake-spray-1.avif',
      'assets/product-images/0148/drunk-elephant-sake-spray-2.avif',
      'assets/product-images/0148/drunk-elephant-sake-spray-3.avif',
      'assets/product-images/0148/drunk-elephant-sake-spray-4.avif',
    ],
    price: 42,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Toner',
    for: 'Face',
    availableAmount: 120,
  },
  {
    id: '0149',
    brandName: 'Drunk Elephant',
    productName: 'Umbra Sheer™ Physical Daily Defense SPF 30',
    description: `Umbra Sheer™ is a daily sunscreen loaded with potent antioxidants, like
     astaxanthin, grape juice, and sunflower shoot extract, to minimize the appearance of
      photoaging for a more youthful-looking complexion. Infused with raspberry seed and marula
       oils, Umbra Sheer™ delivers essential moisture and minimizes the look of fine lines
        and wrinkles for skin that appears healthy and preserved.`,
    ingredients: `Water, caprylic/capric triglyceride, dicaprylyl carbonate, pentylene glycol,
     glycerin, steareth-2, propanediol, steareth-21, polyhydroxystearic acid, cetearyl alcohol,
      silica, sclerocarya birrea seed oil, aloe barbadensis leaf extract, chondrus crispus extract,
       haematococcus pluvialis extract, helianthus annuus (sunflower) sprout extract, vitis vinifera
        (grape) juice extract, helianthus annuus (sunflower) seed oil, simmondsia chinensis (jojoba)
         seed oil, raspberry seed oil/tocopheryl succinate aminopropanediol esters, hydrolyzed wheat
          protein, tocopheryl acetate, tocopherol, sea water, acetyl glucosamine, cetearyl glucoside,
           sodium stearoyl glutamate, tetrahexyldecyl ascorbate, glycine, sucrose, lecithin,
            triethoxycaprylylsilane, xanthan gum, trisodium ethylenediamine disuccinate,
             caprylhydroxamic acid, caprylyl glycol, phenoxyethanol, chlorphenesin,
              sodium dehydroacetate, iron oxides`,
    starIngredient: '',
    pics: [
      'assets/product-images/0149/drunk-elephant-sunscreen-1.avif',
      'assets/product-images/0149/drunk-elephant-sunscreen-2.avif',
      'assets/product-images/0149/drunk-elephant-sunscreen-3.avif',
      'assets/product-images/0149/drunk-elephant-sunscreen-4.avif',
    ],
    price: 34,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Sunscreen',
    for: 'Face',
    availableAmount: 37,
  },
  {
    id: '0150',
    brandName: `Paula's Choice`,
    productName: 'Hydrating Gel-to-Cream Cleanser',
    description: `This gentle gel-to-cream cleanser removes dirt, oil and makeup, and rinses
     away skin-damaging pollutants that can cause premature signs of aging.`,
    ingredients: `Water⁠, Sodium Cocoyl Glycinate⁠, Cocamidopropyl Hydroxysultaine⁠, Sodium Lauroamphoacetate⁠,
     Cocamidopropyl Betaine⁠, Glycerin⁠, Sorbeth-230 Tetraoleate⁠, Decyl Glucoside⁠, Pentylene Glycol⁠,
      Sodium Chloride⁠, Disodium Cocoyl Glutamate⁠, Lauric Acid⁠, Lactic Acid⁠, Sodium Lauroyl Oat Amino
       Acids⁠, Sorbitan Laurate⁠, Sodium Cocoyl Glutamate⁠, Disodium EDTA⁠, Aloe Barbadensis Leaf Juice
        Powder⁠, Caprylic/Capric Triglyceride⁠, Cocoyl Proline⁠, Sodium Citrate⁠, Camellia Sinensis Leaf
         Extract⁠, Glycyrrhiza Glabra⁠, Sodium PCA⁠, Sodium Lactate⁠, Arginine⁠, Glycine Soja Sterols⁠,
          Linoleic Acid⁠, Phospholipid⁠, Aspartic Acid⁠, PCA⁠, Glycine⁠, Alanine⁠, Serine⁠, Valine⁠, Isoleucine⁠,
           Proline⁠, Threonine⁠, Potassium Citrate⁠, Lactoperoxidase⁠, Histidine⁠, Phenylalanine⁠, Glucose
            Oxidase⁠, Citric Acid⁠, Phenoxyethanol⁠, Ethylhexylglycerin⁠, Potassium Sorbate⁠, Sodium Benzoate⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0150/paula-choice-hydrating-cleanser-1.avif',
      'assets/product-images/0150/paula-choice-hydrating-cleanser-2.avif',
    ],
    price: 19,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 16,
  },
  {
    id: '0151',
    brandName: `Paula's Choice`,
    productName: 'Perfectly Natural Cleansing Gel',
    description: `This gentle cleanser with 98% natural ingredients removes impurities
     and makeup, and provides a refreshed soft feel to skin.`,
    ingredients: `Water⁠, Decyl Glucoside⁠, Glycerin⁠, Sodium Cocoamphoacetate⁠, Lauryl Glucoside⁠,
     Xanthan Gum⁠, Coco-Glucoside⁠, Glucose⁠, Sodium Cocoyl Glutamate⁠, Sodium Lauryl Glucose
      Carboxylate⁠, Glyceryl Oleate⁠, Aloe Barbadensis Leaf Juice⁠, Carrageenan⁠, Sodium Phytate⁠,
       Citric Acid⁠, Ethylhexylglycerin⁠, Phenoxyethanol⁠, Potassium Sorbate⁠⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0151/paula-choice-natural-cleasing-gel-1.avif',
      'assets/product-images/0151/paula-choice-natural-cleasing-gel-2.avif',
    ],
    price: 19,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 28,
  },
  {
    id: '0152',
    brandName: `Paula's Choice`,
    productName: 'Perfectly Balanced Foaming Cleanser',
    description: `A gentle daily cleanser that helps balance moisture while removing makeup,
     impurities and excess oil.`,
    ingredients: `Water⁠, Sodium Lauroamphoacetate⁠, Sodium Cocoyl Isethionate⁠, Stearic Acid⁠,
     Glycerin⁠, Glycol Distearate ⁠, Helianthus Annuus (Sunflower) Seed Oil⁠, Acrylates Copolymer⁠,
      Cetearyl Alcohol⁠, Sodium Hyaluronate⁠, Ceramide NP⁠, Ceramide AP⁠, Ceramide EOP⁠, Phytosphingosine⁠,
       Phospholipids⁠, Sphingolipids⁠, Lecithin⁠, Arginine⁠, Cholesterol⁠, Aloe Barbadensis Leaf
        Extract ⁠, Disodium EDTA⁠, Sodium Chloride⁠, Sodium Hydroxide⁠, Sodium Lauroyl Lactylate⁠,
         Xanthan Gum⁠, Carbomer⁠, Hexylene Glycol⁠, Phenoxyethanol⁠, Caprylyl Glycol⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0152/paula-choice-perfectly-balanced-foaming-cleanser-1.avif',
      'assets/product-images/0152/paula-choice-perfectly-balanced-foaming-cleanser-2.avif',
    ],
    price: 22,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 63,
  },
  {
    id: '0153',
    brandName: `Paula's Choice`,
    productName: 'Optimal Results Hydrating Cleanser',
    description: `A silky smooth skin-softening cleanser that replenishes skin’s moisture
     content while gently but effectively cleansing skin and removing makeup.`,
    ingredients: `Water⁠, Caprylic/Capric Triglyceride⁠, Decyl Glucoside⁠, Glycerin⁠, PEG-20 Methyl
     Glucose Sesquistearate⁠, PPG-20 Methyl Glucose Ether⁠, Methyl Gluceth-20⁠, Glyceryl Stearate⁠,
      Stearyl Alcohol⁠, Polyacrylamide⁠, Camellia Oleifera⁠, Chamomilla Recutita Flower Extract⁠,
       Sapindus Mukurossi Peel Extract⁠, Methyl Glucose Sesquistearate⁠, C13-14 Isoparaffin⁠, Laureth-7⁠,
        Xanthan Gum⁠, Disodium EDTA⁠, Citric Acid⁠, Caprylyl Glycol⁠, Hexylene Glycol⁠, Phenoxyethanol⁠,
         Ethylhexylglycerin⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0153/paula-choice-optimal-cleanser-1.avif',
      'assets/product-images/0153/paula-choice-optimal-cleanser-2.avif',
    ],
    price: 22,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 44,
  },
  {
    id: '0154',
    brandName: `Paula's Choice`,
    productName: 'Pore Normalizing Cleanser',
    description: `This gentle, acne-fighting cleanser removes excess oil, pore-clogging
     debris and makeup without drying skin or causing redness.`,
    ingredients: `Salicylic Acid⁠, Water⁠, Sodium Lauroyl Sarcosinate⁠, Acrylates/Steareth-20 Methacrylate Copolymer⁠,
     Glycerin⁠, PEG-200 Hydrogenated Glyceryl Palmate⁠, Sodium Laureth Sulfate⁠, Arginine⁠, Butylene Glycol⁠, PEG-7 Glyceryl
      Cocoate⁠, Panthenol⁠, Disodium EDTA⁠, Citric Acid⁠, PEG-60 Hydrogenated Castor Oil⁠, Sodium Citrate⁠, Phenoxyethanol⁠,
       Caprylyl Glycol⁠, Chlorphenesin⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0154/paula-choice-pore-norm-cleanser-1.avif',
      'assets/product-images/0154/paula-choice-pore-norm-cleanser-2.avif',
    ],
    price: 15,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 8,
  },
  {
    id: '0155',
    brandName: `Paula's Choice`,
    productName: 'Ultra-Gentle Cleanser',
    description: `A cushiony cleanser that removes makeup + impurities while preserving
     skin’s barrier & leaves a silky-smooth, hydrated finish after rinsing.`,
    ingredients: `Water⁠, Sodium Cocoyl Glutamate⁠, Glycerin⁠, Caprylic/Capric Triglyceride⁠,
     Cocamidopropyl Betaine⁠, Sodium Laurylglucosides Hydroxypropylsulfonate⁠, Cellulose Gum⁠,
      Coco Caprylate/Caprate⁠, Hydroxyacetophenone⁠, Inulin⁠, Xanthan Gum⁠, Ethylhexylglycerin⁠,
       Sodium Phytate⁠, Cellulose⁠, Fructose⁠, Glucose⁠, Phenoxyethanol⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0155/paula-choice-ultra-gentle-cleanser-1.avif',
      'assets/product-images/0155/paula-choice-ultra-gentle-cleanser-2.avif',
    ],
    price: 15,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 16,
  },
  {
    id: '0156',
    brandName: `Paula's Choice`,
    productName: 'Makeup Remover',
    description: `An extra-mild formula that effortlessly dissolves all types
     of makeup, from long-wearing to waterproof, quickly and easily.`,
    ingredients: `Water⁠, Cyclotetrasiloxane⁠, Cyclopentasiloxane⁠, Isohexadecane⁠,
     Butylene Glycol⁠, Glycerin⁠, Aloe Barbadensis Leaf Juice⁠, Bisabolol⁠, Camellia
      Oleifera (Green Tea) Leaf Extract⁠, Poloxamer 184⁠, Sodium Dehydroacetate⁠, Allantoin⁠,
       Glycyrrhetinic Acid⁠, Sodium Chloride⁠, Disodium EDTA⁠, Methylparaben⁠, Benzalkonium
        Chloride⁠, Benzyl Alcohol⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0156/paula-choice-gentle-makeup-remover-1.avif',
      'assets/product-images/0156/paula-choice-gentle-makeup-remover-2.avif',
    ],
    price: 15,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 13,
  },
  {
    id: '0157',
    brandName: `Paula's Choice`,
    productName: 'Perfect Cleansing Oil',
    description: `This skin-replenishing blend of plant oils rapidly dissolves makeup
     and whisks away impurities, while leaving skin soft and smooth—with no greasy residue.`,
    ingredients: `Caprylic/Capric Triglyceride⁠, Helianthus Annuus Seed Oil⁠, MIPA-Laureth Sulfate ⁠,
     Laureth-4⁠, Laureth-7⁠, Triethylhexanoin⁠, Cocos Nucifera (Coconut) Fruit Extract⁠, Limnanthes Alba
      Seed Oil⁠, Simmondsia Chinensis ⁠, Vitis Vinifera⁠, Butyrospermum Parkii (Shea Butter)
       Unsaponifiables⁠, Alpha-Tocopherol⁠, Phenoxyethanol⁠, Ethylhexylglycerin⁠⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0157/paula-choice-perfect-cleansing-oil-1.avif',
      'assets/product-images/0157/paula-choice-perfect-cleansing-oil-2.avif',
    ],
    price: 29,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 80,
  },
  {
    id: '0158',
    brandName: `Paula's Choice`,
    productName: 'Omega Complex Cleansing Balm',
    description: `A triple-action cleansing balm made with omegas 3, 6 and 9 to cleanse,
     soften and soothe while rinsing completely clean.`,
    ingredients: `Ethylhexyl Palmitate⁠, Caprylic/Capric Triglyceride⁠, PEG-20 Glyceryl
     Triisostearate⁠, Diisooctyl Succinate⁠, Olive Oil PEG-7 Esters⁠, Trihydroxystearin⁠, Glyceryl
      Stearate⁠, Limnanthes Alba Seed Oil⁠, Simmondsia Chinensis (Jojoba) Seed Oil⁠, Hydrogenated
       Rapeseed Oil⁠, Tocopheryl Acetate⁠⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0158/paula-choice-omega-cleanser-1.avif',
      'assets/product-images/0158/paula-choice-omega-cleanser-2.avif',
    ],
    price: 29,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 27,
  },
  {
    id: '0159',
    brandName: `Paula's Choice`,
    productName: 'Softening Cream Cleanser',
    description: `This skin-softening cream cleanser gently removes makeup without
     stripping skin of essential moisture. Hydrating ingredients replenish skin to keep a dewy beautiful glow.`,
    ingredients: `Water⁠, Hydrogenated Polydecene⁠, Disodium Cocoamphodiacetate⁠, Glycine Soja
     Oil⁠, C12-15 Alkyl Benzoate⁠, Polysorbate 80⁠, Laureth-4⁠, Acrylates/C10-30 Alkyl Acrylate
      Crosspolymer⁠, Cocamidopropyl Betaine⁠, Chamomilla Recutita Flower Extract⁠, Beta-Glucan⁠,
       Mineral Oil⁠, PEG-7 Glyceryl Cocoate⁠, Butylene Glycol⁠, Disodium EDTA⁠, Sodium Hydroxide⁠,
        Hexylene Glycol⁠, Caprylyl Glycol⁠, Ethylhexylglycerin⁠, Phenoxyethanol⁠, Chlorphenesin⁠⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0159/paula-choice-softening-cream-cleanser-1.avif',
      'assets/product-images/0159/paula-choice-softening-cream-cleanser-2.avif',
    ],
    price: 19,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 73,
  },
  {
    id: '0160',
    brandName: `Paula's Choice`,
    productName: 'Nourishing Milky Toner',
    description: `This soothing, milky toner immediately hydrates & calms redness while
     strengthening skin’s barrier + microbiome to help prevent future sensitivity.`,
    ingredients: `Water⁠, Pentylene Glycol⁠, Glycerin⁠, Propanediol⁠, C13-15 Alkane⁠, Panthenol⁠,
     Polyglyceryl-6 Oleate⁠, Ceteth-20 Phosphate ⁠, Sodium PCA⁠, Ophiopogon Japonicus Root Extract⁠,
      Ammonium Polyacryloyldimethyl Taurate⁠, Cetearyl Alcohol⁠, Allantoin⁠, Sodium Hyaluronate⁠,
       Dicetyl Phosphate⁠, Maltodextrin⁠, Althaea Officinalis Root Extract⁠, Ethylhexylglycerin⁠,
        Sodium Phytate⁠, Pantolactone⁠, Phenoxyethanol⁠⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0160/paula-choice-milki-toner-1.avif',
      'assets/product-images/0160/paula-choice-milki-toner-2.avif',
    ],
    price: 22,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Toner',
    for: 'Face',
    availableAmount: 26,
  },
  {
    id: '0161',
    brandName: `Paula's Choice`,
    productName: 'Purely Natural Refreshing Toner',
    description: `This antioxidant-rich toner with 98% natural ingredients replenishes
     and restores skin for a healthy glow.`,
    ingredients: `Water⁠, Glycerin⁠, Sodium Hyaluronate⁠, Chamomilla Recutita (Matricaria)
     Flower Extract ⁠, Vitis Vinifera (Grape) Seed Extract⁠, Camellia Sinensis Leaf Extract⁠,
      Camellia Oleifera (Green Tea) Leaf Extract⁠, Avena Sativa (Oat) Kernel Extract⁠, Punica
       Granatum Extract⁠, Sambucus Nigra Fruit Extract⁠, Peucedanum Graveolens (Dill) Extract⁠,
        Lycium Barbarum Fruit Extract⁠, Hydrogenated Lecithin⁠, Tocopherol⁠, Helianthus Annuus
         Seed Oil⁠, Prunus Amygdalus Dulcis (Sweet Almond) Oil ⁠, Vaccinium Macrocarpon Fruit
          Extract⁠, Olea Europaea Fruit Oil⁠, Vaccinium Myrtillus Seed Oil ⁠, Arginine⁠, Glycine⁠,
           Alanine⁠, Serine⁠, Valine⁠, Proline⁠, Threonine⁠, Isoleucine⁠, Histidine⁠, Phenylalanine⁠,
            Aspartic Acid⁠, Sodium PCA⁠, Sodium Lactate⁠, PCA⁠, Xanthan Gum⁠, Leuconostoc/Radish
             Root Ferment Filtrate⁠, Benzyl Alcohol⁠, Phenoxyethanol⁠⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0161/paula-choice-natural-toner-1.avif',
      'assets/product-images/0161/paula-choice-natural-toner-2.avif',
    ],
    price: 25,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Toner',
    for: 'Face',
    availableAmount: 23,
  },
  {
    id: '0162',
    brandName: `Paula's Choice`,
    productName: 'Weightless Advanced Repairing Toner',
    description: `An age-defying facial toner that rehydrates and lightly moisturizes
     skin while also defending against environmental damage.`,
    ingredients: `Water⁠, Glycerin⁠, Ethoxydiglycol⁠, Niacinamide⁠, Acetyl Glucosamine⁠,
     Salix Nigra (Willow) Bark Extract⁠, Resveratrol⁠, Sodium Hyaluronate⁠, Palmitoyl
      Tetrapeptide-7⁠, Palmitoyl Tripeptide-1⁠, Phospholipid⁠, Epigallocatechin Gallate⁠,
       Carnosine⁠, Genistein⁠, Glycyrrhiza Glabra⁠, Adenosine⁠, Xanthan Gum⁠, Citric Acid⁠,
        Polysorbate 20⁠, Butylene Glycol⁠, Ethylhexylglycerin⁠, Carbomer⁠,
         Tetrasodium EDTA⁠, Phenoxyethanol⁠⁠⁠`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0162/paula-choice-advanced-repairing-toner-1.avif',
      'assets/product-images/0162/paula-choice-advanced-repairing-toner-2.avif',
    ],
    price: 26,
    bestseller: true,
    segment: 'USA / Canada',
    category: 'Toner',
    for: 'Face',
    availableAmount: 24,
  },
  {
    id: '0163',
    brandName: `Paula's Choice`,
    productName: 'Essential Hydrating Toner',
    description: `This silky, hydrating toner soothes and renews skin while fighting signs of aging.`,
    ingredients: `Water⁠, Glycerin⁠, Pentylene Glycol⁠, Polysorbate 20⁠, Superoxide Dismutase⁠,
     Camellia Sinensis Leaf Extract⁠, Epilobium Angustifolium Extract⁠, Vitis Vinifera (Grape)
      Seed Extract⁠, Sodium PCA⁠, Creatine⁠, Lecithin⁠, Linoleic Acid⁠, Linolenic Acid⁠, Sodium PEG-7
       Olive Oil Carboxylate⁠, Magnesium Ascorbyl Phosphate⁠, Tocopheryl Acetate⁠, Butylene Glycol⁠,
        Panthenol⁠, Allantoin⁠, PEG-40 Hydrogenated Castor Oil⁠, Hydroxyethylcellulose⁠⁠⁠⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0163/paula-choice-essential-hydrating-toner-1.avif',
      'assets/product-images/0163/paula-choice-essential-hydrating-toner-2.avif',
    ],
    price: 26,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Toner',
    for: 'Face',
    availableAmount: 15,
  },
  {
    id: '0164',
    brandName: `Paula's Choice`,
    productName: 'Advanced Replenishing Toner',
    description: `An anti-aging toner that replenishes skin with essential nutrients,
     fatty acids & hyaluronic acid to visibly plump & soothe after cleansing.`,
    ingredients: `Water⁠, Cyclopentasiloxane⁠, Glycerin⁠, Glycereth-26⁠, Polysorbate 20⁠,
     Dimethiconol⁠, Linoleic Acid⁠, Oleic Acid⁠, Linolenic Acid⁠, Phospholipid⁠, Carnosine⁠,
      Epigallocatechin Gallate⁠, Genistein⁠, Sodium Hyaluronate⁠, Sphingolipids⁠, Ferulic Acid⁠,
       Laurdimonium Hydroxypropyl Hydrolyzed Soy Protein⁠, Glycyrrhiza Glabra⁠, Acetyl Glucosamine⁠,
        Quercetin⁠, Oenothera Biennis Oil⁠, Beta Vulgaris Root Extract⁠, Cucurbita Pepo Seed
         Extract⁠, Lecithin⁠, Caprylic/Capric Triglyceride⁠, Hydrolyzed Corn Starch⁠, Hydrogenated
          Lecithin⁠, Palmitic Acid⁠, Butylene Glycol⁠, Acrylates/C10-30 Alkyl Acrylate
           Crosspolymer⁠, Xanthan Gum⁠, Laureth-23⁠, Laureth-4⁠, Aminomethyl Propanol⁠, Disodium EDTA⁠,
            Sodium Benzoate⁠, Ethylhexylglycerin⁠, Phenoxyethanol⁠, Chlorphenesin⁠, Benzoic Acid⁠, Sorbic Acid⁠⁠⁠⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0164/paula-choice-replenishing-toner-1.avif',
      'assets/product-images/0164/paula-choice-replenishing-toner-2.avif',
    ],
    price: 26,
    bestseller: true,
    segment: 'USA / Canada',
    category: 'Toner',
    for: 'Face',
    availableAmount: 145,
  },
  {
    id: '0165',
    brandName: `Paula's Choice`,
    productName: 'Enriched Calming Toner',
    description: `This hydrating toner soothes dry, flaky skin and helps revitalize
     and recover moisture loss while infusing skin with anti-aging antioxidants.`,
    ingredients: `Water⁠, Cyclopentasiloxane⁠, Butylene Glycol⁠, Glycereth-26⁠, Dimethiconol⁠,
     Oenothera Biennis Oil⁠, Borago Officinalis Seed Oil⁠, Sodium Hyaluronate⁠, Tocopheryl Acetate⁠,
      Tocopherol⁠, Ascorbyl Palmitate⁠, Panthenol⁠, Allantoin⁠, Glycerin⁠, Hydrogenated Lecithin⁠,
       Caprylic/Capric Triglyceride⁠, Niacinamide⁠, Superoxide Dismutase⁠, PEG-40 Hydrogenated
        Castor Oil⁠, Myristamidopropyl PG-Dimonium Chloride Phosphate⁠, Laureth-4⁠, Laureth-23⁠,
         Disodium EDTA⁠, Sodium Benzoate⁠, Chlorphenesin⁠, Phenoxyethanol⁠, Benzoic Acid⁠, Sorbic Acid⁠`,
    starIngredient: 'Vitamin C',
    pics: [
      'assets/product-images/0165/paula-choice-enriched-calming-toner-1.avif',
      'assets/product-images/0165/paula-choice-enriched-calming-toner-2.avif',
    ],
    price: 26,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Toner',
    for: 'Face',
    availableAmount: 97,
  },
  {
    id: '0166',
    brandName: `Paula's Choice`,
    productName: 'Niacinamide 20% Treatment',
    description: `A highly concentrated niacinamide (vitamin B3) serum that effectively
     tightens and minimizes the look of sagging pores and rough bumps caused by age or sun damage.`,
    ingredients: `Water⁠, Niacinamide⁠, Pentylene Glycol⁠, Butylene Glycol⁠, Glycerin⁠, Acetyl Glucosamine⁠,
     Ascorbyl Glucoside⁠, Glycyrrhiza Glabra (Licorice) Root Extract⁠, Spiraea Ulmaria Extract⁠,
      Portulaca Oleracea Extract⁠, Camellia Japonica Flower Extract⁠, Epigallocatechin Gallate⁠,
       Boerhavia Diffusa Root Extract⁠, Camellia Sinensis Leaf Extract⁠, Allantoin⁠, Lecithin⁠, Pullulan⁠,
        Panthenol⁠, Silica⁠, Xanthan Gum⁠, Sclerotium Gum⁠, Propanediol⁠, Sodium Phytate⁠, Phenoxyethanol⁠,
         Ethylhexylglycerin⁠`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0166/paula-choice-niacinamide-serum-1.avif',
      'assets/product-images/0166/paula-choice-niacinamide-serum-2.avif',
    ],
    price: 52,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Serum',
    for: 'Face',
    availableAmount: 118,
  },
  {
    id: '0167',
    brandName: `Paula's Choice`,
    productName: 'Omega Complex Serum',
    description: `Superfood for your skin! Omega fatty acids in this serum strengthen
     skin’s surface with the essential nutrients needed for healthy, hydrated, visibly stronger skin.`,
    ingredients: `Water⁠, Glycerin⁠, Diheptyl Succinate⁠, Candelilla/Jojoba/Rice Bran Polyglyceryl-3 Esters⁠,
     Linseed Seed Oil⁠, Linoleic Acid⁠, Linolenic Acid⁠, Passiflora Edulis Seed Oil⁠, Ceramide EOP⁠, Ceramide EOS⁠,
      Ceramide NP⁠, Ceramide NS⁠, Caprooyl Sphingosine⁠, Olea Europaea Oil Unsaponifiables⁠, Caprooyl
       Phytosphingosine⁠, Sodium Hyaluronate⁠, Cholesterol⁠, Ceramide AP⁠, Butyrospermum Parkii (Shea Butter)
        Unsaponifiables⁠, Tocopherol⁠, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer⁠,
         Prunus Domestica Seed Oil⁠, Lauryl Laurate⁠, Glyceryl Behenate⁠, Hydrogenated Lecithin⁠, Sodium Phytate⁠,
          Trehalose⁠, Isohexadecane⁠, Sodium Stearoyl Lactylate⁠, Capryloyl Glycerin/Sebacic Acid Copolymer⁠,
           Xanthan Gum⁠, Cetyl Alcohol⁠, Tetrahexyldecyl Ascorbate⁠, Agar⁠, Glyceryl Stearate⁠, Ceteareth-25⁠,
            Cetearyl Alcohol⁠, Behenic Acid⁠, Glyceryl Rosinate⁠, Citric Acid⁠, Benzyl Alcohol⁠, Ethylhexylglycerin⁠`,
    starIngredient: 'Ceramide',
    pics: [
      'assets/product-images/0167/paula-choice-omega-serum-1.avif',
      'assets/product-images/0167/paula-choice-omega-serum-2.avif',
    ],
    price: 42,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Serum',
    for: 'Face',
    availableAmount: 112,
  },
  {
    id: '0168',
    brandName: `Paula's Choice`,
    productName: 'Repairing Serum',
    description: `This antioxidant-rich serum immediately soothes sensitive skin and visibly calms redness
     with an effective blend of hydrating + anti-aging ingredients.`,
    ingredients: `Water⁠, Glycerin⁠, Diheptyl Succinate⁠, Candelilla/Jojoba/Rice Bran Polyglyceryl-3 Esters⁠,
     Linseed Seed Oil⁠, Linoleic Acid⁠, Linolenic Acid⁠, Passiflora Edulis Seed Oil⁠, Ceramide EOP⁠, Ceramide EOS⁠,
      Ceramide NP⁠, Ceramide NS⁠, Caprooyl Sphingosine⁠, Olea Europaea Oil Unsaponifiables⁠, Caprooyl
       Phytosphingosine⁠, Sodium Hyaluronate⁠, Cholesterol⁠, Ceramide AP⁠, Butyrospermum Parkii (Shea Butter)
        Unsaponifiables⁠, Tocopherol⁠, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer⁠,
         Prunus Domestica Seed Oil⁠, Lauryl Laurate⁠, Glyceryl Behenate⁠, Hydrogenated Lecithin⁠, Sodium Phytate⁠,
          Trehalose⁠, Isohexadecane⁠, Sodium Stearoyl Lactylate⁠, Capryloyl Glycerin/Sebacic Acid Copolymer⁠,
           Xanthan Gum⁠, Cetyl Alcohol⁠, Tetrahexyldecyl Ascorbate⁠, Agar⁠, Glyceryl Stearate⁠, Ceteareth-25⁠,
            Cetearyl Alcohol⁠, Behenic Acid⁠, Glyceryl Rosinate⁠, Citric Acid⁠, Benzyl Alcohol⁠,
             EthylhexylglycerinWater⁠, Glycerin⁠, Sodium Lauroyl Lactylate⁠, Sodium Hyaluronate⁠,
              Polysorbate 20⁠, Caprylic/Capric Triglyceride⁠, PEG/PPG-14/4 Dimethicone ⁠, Xanthan Gum⁠,
               Disodium EDTA⁠, Sodium Cocoyl Amino Acids⁠, Ceramide NP⁠, Ethylhexylglycerin⁠, Epilobium
                Angustifolium (Willow Herb) Extract⁠, Ceramide AP⁠, Cholesterol⁠, Phytosphingosine⁠,
                 Beta-Glucan⁠, Sarcosine⁠, Carbomer⁠, Chrysanthemum Parthenium Flower Extract ⁠,
                  Sea Whip Extract⁠, Glycine Soja (Soybean) Seed Extract ⁠, Hyaluronic Acid⁠,
                   Glycyrrhiza Glabra (Licorice) Root Extract⁠, Ceramide EOP⁠, Magnesium Aspartate⁠,
                    Potassium Aspartate⁠, Ubiquinone⁠, Phenoxyethanol⁠, 1, 2-Hexanediol⁠, Caprylyl Glycol⁠,
                     Leuconostoc/Radish Root Ferment Filtrate⁠, Calcium Chloride⁠, Propylene Glycol⁠, Tocopherol⁠,
                      Sodium Metabisulfite⁠, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate⁠,
                       Sodium Benzoate⁠, Potassium Sorbate⁠`,
    starIngredient: 'Ceramide',
    pics: [
      'assets/product-images/0168/paula-choice-repairing-serum-1.avif',
      'assets/product-images/0168/paula-choice-repairing-serum-2.avif',
    ],
    price: 44,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Serum',
    for: 'Face',
    availableAmount: 36,
  },
  {
    id: '0169',
    brandName: `Paula's Choice`,
    productName: 'Super Antioxidant Serum',
    description: `A hydrating, antioxidant-enriched serum that restores visible radiance for dull,
     dry skin while fighting against environmental attack.`,
    ingredients: `Cyclopentasiloxane⁠, Dimethicone⁠, Tetrahexyldecyl Ascorbate⁠, Palmitoyl Tripeptide-5⁠,
     Ceramide NP⁠, Tocotrienols⁠, Tocopherol⁠, Ubiquinone⁠, Thioctic Acid⁠, Tocopheryl Acetate⁠, Magnesium
      Ascorbyl Phosphate⁠, Ferulic Acid⁠, Beta-Glucan⁠, Superoxide Dismutase⁠, Epigallocatechin Gallate⁠,
       Ergothioneine⁠, Glutathione⁠, Xanthophyll⁠, Glycine Soja Seed Extract⁠, Glycerin⁠, Arctostaphylos
        Uva Ursi Leaf Extract⁠, Lupinus Albus Seed Extract⁠, Curcuma Longa Root⁠, Elaeis
         Guineensis Oil⁠, Phenoxyethanol⁠`,
    starIngredient: 'Vitamin C',
    pics: [
      'assets/product-images/0169/paula-choice-antiox-serum-1.avif',
      'assets/product-images/0169/paula-choice-antiox-serum-2.avif',
    ],
    price: 43,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Serum',
    for: 'Face',
    availableAmount: 12,
  },
  {
    id: '0170',
    brandName: `Paula's Choice`,
    productName: 'Elasticity Renewal Serum',
    description: `A potent face and neck serum that improves the look of elasticity,
     crepey texture and signs of aging that coincide with estrogen decline.`,
    ingredients: `Water⁠, Cyclodextrin⁠, Glycerin⁠, Coco-Caprylate⁠, Squalane⁠, Saccharide Isomerate⁠,
     Propanediol⁠, Sodium Acrylates Copolymer⁠, Hydrogenated Polydecene⁠, Glycine Soja Seed Extract⁠, Equol⁠,
      Resveratrol⁠, Xanthan Gum⁠, Cetyl Alcohol⁠, Tocopherol⁠, Daidzein⁠, Genistein⁠, Linum Usitatissimum
       (Linseed) Seed Oil⁠, Helianthus Annuus Seed Oil⁠, Phospholipids⁠, Polyglyceryl-10 Stearate⁠, Citric
        Acid⁠, Ethylhexylglycerin⁠, Glycine Soja Oil⁠, Engelhardtia Chrysolepis Leaf Extract ⁠, Sodium
         Phytate⁠, Sodium Citrate⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0170/paula-choice-elasticity-serum-1.avif',
      'assets/product-images/0170/paula-choice-elasticity-serum-2.avif',
    ],
    price: 48,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Serum',
    for: 'Face',
    availableAmount: 13,
  },
  {
    id: '0171',
    brandName: `Paula's Choice`,
    productName: 'Discoloration Repair Serum',
    description: `A potent serum that targets brown + gray patches while helping prevent new
     discoloration from forming using a tranexamic complex with bakuchiol and niacinamide.`,
    ingredients: `Water⁠, Niacinamide⁠, Glycerin⁠, Tranexamic Acid⁠, C13-15 Alkane⁠, Caprylic/Capric
     Triglyceride⁠, Dicaprylyl Carbonate⁠, Ethyl Macadamiate⁠, Behenyl Alcohol⁠, Glyceryl Stearate⁠,
      Butylene Glycol⁠, Silybum Marianum Seed Oil⁠, Tocopherol⁠, Lactobacillus/Coconut Fruit Juice
       Ferment Filtrate⁠, Lecithin⁠, Bakuchiol⁠, Xanthan Gum⁠, Caprylyl Glycol⁠, Hydrogenated Lecithin⁠,
        Allantoin⁠, Glycine Soja Oil⁠, Hexylene Glycol⁠, Boerhavia Diffusa Root Extract⁠, Glycine Soja
         Sterols⁠, Citric Acid⁠, Sodium Phytate⁠, Malic Acid⁠, Phenoxyethanol⁠, Ethylhexylglycerin⁠`,
    starIngredient: 'Bakuchiol',
    pics: [
      'assets/product-images/0171/paula-choice-discoloration-serum-1.avif',
      'assets/product-images/0171/paula-choice-discoloration-serum-2.avif',
    ],
    price: 52,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Serum',
    for: 'Face',
    availableAmount: 17,
  },
  {
    id: '0172',
    brandName: `Paula's Choice`,
    productName: 'Intensive Retinol Serum',
    description: `This extravagantly silky serum blends pure retinol and potent antioxidants to help impart
     firmer-feeling skin, smooth and soften fine lines and wrinkles, and provide
      hydration so skin of any age can look radiant and revitalized.`,
    ingredients: `Cyclopentasiloxane⁠, Dimethiconol⁠, Neopentyl Glycol Diheptanoate⁠, Dicaprylyl Carbonate⁠,
     Caprylic/Capric Triglyceride⁠, Phenyl Trimethicone⁠, Squalane⁠, Bisabolol⁠, Tetrahexyldecyl Ascorbate⁠,
      Retinol⁠, Tocotrienols⁠, Tocopherol⁠, Lecithin⁠, Laminaria Ochroleuca Extract⁠, Avena Sativa (Oat) Kernel
       Extract⁠, Elaeis Guineensis Oil⁠, Stearyl Glycyrrhetinate⁠, Hexylene Glycol⁠, Caprylyl Glycol⁠,
        Ethylhexylglycerin⁠, Phenoxyethanol⁠⁠`,
    starIngredient: 'Retinol',
    pics: [
      'assets/product-images/0172/paula-choice-retinol-serum-1.avif',
      'assets/product-images/0172/paula-choice-retinol-serum-2.avif',
    ],
    price: 45,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Serum',
    for: 'Face',
    availableAmount: 22,
  },
  {
    id: '0173',
    brandName: `Paula's Choice`,
    productName: 'Ceramide Firming Moisturizer',
    description: `Visibly smooth wrinkles, renew a firmer feel and enhance moisture balance with
     a concentrated blend of ceramides plus a potent blend of vitamin c and retinol that plumps
      skin and fortifies skin’s protective barrier.`,
    ingredients: `Water⁠, Sodium Ascorbyl Phosphate⁠, Cetyl Alcohol⁠, Neopentyl Glycol Diheptanoate⁠,
     Potassium Cetyl Phosphate⁠, Glyceryl Stearate⁠, PEG-100 Stearate⁠, Glycerin⁠, PEG-12 Glyceryl Dimyristate⁠,
      Bis-Diglyceryl Polyacyladipate⁠, Dimethicone⁠, Glyceryl Ascorbate⁠, Tetrahexyldecyl Ascorbate⁠,
       Retinol⁠, Ceramide NP⁠, Ceramide NS⁠, Ceramide AP⁠, Ceramide EOP⁠, Ceramide EOS⁠, Cholesterol⁠,
        Caprooyl Phytosphingosine⁠, Caprooyl Sphingosine⁠, Squalane⁠, Punica Granatum Extract⁠,
         Pongamia Glabra Seed Oil⁠, Glycyrrhiza Glabra⁠, Vitis Vinifera⁠, Tocopheryl Acetate⁠,
          Carnosine⁠, Panthenol⁠, Sodium PCA⁠, Butylene Glycol⁠, Sodium Citrate⁠, Ceteareth-25⁠,
           Polysorbate 20⁠, Ethylhexyl Stearate⁠, Sodium Hydroxide⁠, Trideceth-6⁠, Propyl Gallate⁠,
            Ammonium Acryloyldimethyltaurate/VP Copolymer⁠, Sodium Polyacrylate⁠, Behenic Acid⁠,
             Disodium EDTA⁠, Phenoxyethanol⁠, Caprylyl Glycol⁠, Chlorphenesin⁠`,
    starIngredient: 'Ceramide',
    pics: [
      'assets/product-images/0173/paula-choice-ceramide-firming-moist-1.avif',
      'assets/product-images/0173/paula-choice-ceramide-firming-moist-2.avif',
    ],
    price: 63,
    bestseller: true,
    segment: 'USA / Canada',
    category: 'Cream',
    for: 'Face',
    availableAmount: 73,
  },
  {
    id: '0174',
    brandName: `Paula's Choice`,
    productName: 'C5 Super Boost Moisturizer',
    description: `A multi-active vitamin C moisturizer that combines clinically proven
     hydration with anti-aging benefits to improve dullness, revive firmness + strengthen skin’s barrier.`,
    ingredients: `Water⁠, Dicaprylyl Carbonate⁠, 3-O Ethyl Ascorbic Acid⁠, Dimethicone⁠, Butylene Glycol⁠,
     Polyglyceryl-6 Distearate⁠, Ascorbyl Glucoside⁠, Squalane⁠, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl
      Taurate Copolymer⁠, Acetyl sh-Hexapeptide-5 Amide Acetate⁠, Citrullus Lanatus (Watermelon) Seed Oil ⁠,
       Hydrogenated Lecithin⁠, Theobroma Cacao (Cocoa) Seed Butter⁠, Hydrogenated Phosphatidylcholine⁠,
        Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate⁠, Sodium Hyaluronate⁠, Oryza Sativa (Rice)
         Bran Extract⁠, Propanediol⁠, Jojoba Esters⁠, Tocopherol⁠, Acetyl Zingerone⁠, Cetyl Palmitate⁠,
          Caprylyl Glycol⁠, Cetyl Alcohol⁠, Polyglyceryl-3 Beeswax⁠, Sodium Hydroxide⁠, Sorbitan Olivate⁠,
           Sorbitan Palmitate⁠, Helianthus Annuus Sunflower Seed Extract⁠, Ethylhexylglycerin⁠, Hexylene
            Glycol⁠, Sodium Phytate⁠, Polysorbate 60⁠, Sorbitan Isostearate⁠, Lecithin⁠, Rosmarinus Officinalis
             (Rosemary) Leaf Extract⁠, Glycine Soja Oil⁠, Lysolecithin⁠, Bacillus Ferment⁠, Citric Acid⁠,
              Polyglutamic Acid⁠, Beta-Sitosterol⁠, Phytic Acid⁠, Squalene⁠, Phenoxyethanol⁠, Sodium Benzoate⁠,
               Potassium Sorbate⁠`,
    starIngredient: 'Vitamin C',
    pics: [
      'assets/product-images/0175/paula-choice-super-boost-cream-1.avif',
      'assets/product-images/0175/paula-choice-super-boost-cream-2.avif',
    ],
    price: 45,
    bestseller: true,
    segment: 'USA / Canada',
    category: 'Cream',
    for: 'Face',
    availableAmount: 89,
  },
  {
    id: '0175',
    brandName: `Paula's Choice`,
    productName: 'Antioxidant Enriched Natural Moisturizer',
    description: `This innovative formula is an enriched, surprisingly light lotion that hydrates
     your skin while treating it to a potent anti-aging combination of antioxidants and skin-replenishing ingredients.`,
    ingredients: `Water⁠, Theobroma Cacao (Cocoa) Seed Butter⁠, Glycerin⁠, Vitis Vinifera⁠, Canola Oil⁠,
     Olea Europaea Fruit Oil⁠, Butyrospermum Parkii (Shea Butter) Unsaponifiables⁠, Benzyl Alcohol⁠,
      Propanediol⁠, Borago Officinalis Seed Oil⁠, Oenothera Biennis Oil⁠, Sodium Hyaluronate⁠, Rubus
       Idaeus (Raspberry) Fruit Extract⁠, Vaccinium Macrocarpon Fruit Extract⁠, Vaccinium Myrtillus ⁠,
        Acerola Fruit Extract⁠, Lycium Barbarum Fruit Extract⁠, Aloe Barbadensis Leaf Juice Extract⁠,
         Alpha-Tocopherol⁠, Hydrogenated Lecithin⁠, Thermus Thermophillus Ferment⁠, Rosa Canina⁠,
          Linseed Seed Oil⁠, Caprylic/Capric Triglyceride⁠, Arginine⁠, Glycine⁠, Alanine⁠, Serine⁠,
           Valine⁠, Proline⁠, Threonine⁠, Isoleucine⁠, Histidine⁠, Phenylalanine⁠, Aspartic Acid⁠,
            Helianthus Annuus Seed Oil⁠, Carrageenan⁠, Sodium Lactate⁠, Potassium⁠, Sodium PCA⁠,
             Silica⁠, Xanthan Gum⁠, Leuconostoc/Radish Root Ferment Filtrate⁠, Caprylyl Glycol⁠,
              Glyceryl Stearate⁠, PCA⁠, Phenoxyethanol⁠, Potassium Sorbate⁠, Sodium Benzoate⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0175/paula-choice-natural-moist-1.avif',
      'assets/product-images/0175/paula-choice-natural-moist-2.avif',
    ],
    price: 33,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cream',
    for: 'Face',
    availableAmount: 53,
  },
  {
    id: '0176',
    brandName: `Paula's Choice`,
    productName: 'Repair Intensive Moisturizer',
    description: `This soothing moisturizer for dry skin calms redness and sensitivity with
     antioxidants and emollients to protect skin’s delicate barrier.`,
    ingredients: `Water⁠, C13-15 Alkane⁠, Glycerin⁠, Propanediol⁠, Helianthus Annuus (Sunflower)
     Seed Oil⁠, Cetearyl Alcohol⁠, Arachidyl Alcohol⁠, Stearic Acid⁠, Inulin⁠, Behenyl Alcohol⁠,
      Cetyl Alcohol⁠, Butylene Glycol⁠, Hydrogenated Lecithin⁠, Myristyl Myristate⁠, Arachidyl
       Glucoside⁠, Acrylates/C10-30 Alkyl Acrylate Crosspolymer⁠, Caprylyl Glycol⁠, Allantoin⁠,
        Tocopherol⁠, Ethylhexylglycerin⁠, Hexylene Glycol⁠, Xanthan Gum⁠, Alpha Glucan Oligosaccharide⁠,
         Sodium Phytate⁠, Glycogen⁠, Yeast Extract⁠, Laminaria Digitata Extract⁠, Albatrellus Confluens
          (Mushroom) Extract⁠, Opuntia Ficus-Indica Stem Extract⁠, Galactorarabinan ⁠, Schizophyllan⁠,
           Citric Acid⁠, Maltodextrin⁠, Acetyl Hexapeptide-8⁠, Phenoxyethanol⁠, Potassium Sorbate⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0176/paula-choice-repair-moist-1.avif',
      'assets/product-images/0176/paula-choice-repair-moist-2.avif',
    ],
    price: 33,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cream',
    for: 'Face',
    availableAmount: 53,
  },
  {
    id: '0177',
    brandName: `Paula's Choice`,
    productName: 'Hydrating Treatment Cream',
    description: `Replenishes and restores lost moisture, leaving you with smooth, comfortable, younger-looking skin.`,
    ingredients: `Water⁠, Ethylhexyl Stearate⁠, Simmondsia Chinensis ⁠, Butylene Glycol⁠, Glycerin⁠, Petrolatum⁠,
     Cetearyl Alcohol⁠, Dipentaerythrityl Hexacaprylate/Hexacaprate⁠, Tridecyl Trimellitate⁠, Sodium Hyaluronate⁠,
      Ceramide NP⁠, Cholesterol⁠, Tocopherol⁠, Squalane⁠, Magnesium Ascorbyl Phosphate⁠, Dimethicone⁠, Niacinamide⁠,
       Polysorbate 60⁠, Hydrolyzed Jojoba Protein⁠, Hydrolyzed Wheat Protein⁠, Avena Sativa (Oat) Kernel Extract⁠,
        Hydrogenated Lecithin⁠, Whey Protein⁠, Tridecyl Stearate⁠, Neopentyl Glycol Dicaprylate/Dicaprate⁠, Phenyl
         Trimethicone⁠, Myristyl Myristate⁠, Linoleic Acid⁠, Linolenic Acid⁠, Decarboxy Carnosine HCL⁠, Hydroxyethyl
          Acrylate/Sodium Acryloyldimethyl Taurate Copolymer⁠, Acrylates/C10-30 Alkyl Acrylate Crosspolymer⁠,
           Cetearyl Glucoside⁠, Cetyl Alcohol⁠, Polyglyceryl-3 Beeswax⁠, Aminomethyl Propanol⁠, Disodium EDTA⁠,
            Benzoic Acid⁠, Chlorphenesin⁠, Sorbic Acid⁠, Phenoxyethanol⁠⁠`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0177/paula-choice-hydrating-cream-1.avif',
      'assets/product-images/0177/paula-choice-hydrating-cream-2.avif',
    ],
    price: 33,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cream',
    for: 'Face',
    availableAmount: 75,
  },
  {
    id: '0178',
    brandName: `Paula's Choice`,
    productName: 'Light Wrinkle Defense SPF 30',
    description: `A lightly tinted mineral-based formula that protects skin from sun damage and fortifies
     it with state-of-the-art antioxidants.`,
    ingredients: `Water⁠, Cyclopentasiloxane⁠, Zinc Oxide⁠, PEG-12 Dimethicone⁠, PEG/PPG-18/18 Dimethicone⁠, Lauroyl Lysine⁠,
     Sodium Chloride⁠, Trihydroxystearin⁠, Dimethicone Crosspolymer⁠, Resveratrol⁠, Quercetin⁠, Epigallocatechin Gallate⁠,
      Tocopheryl Acetate⁠, Tetrahexyldecyl Ascorbate⁠, Adenosine⁠, Bisabolol⁠, Salix Nigra (Willow) Bark Extract⁠,
       Punica Granatum Extract⁠, Haematococcus Pluvialis Extract⁠, Hydrolyzed Corn Starch⁠, Polysorbate 80⁠,
        Hydrated Silica⁠, Triethoxycaprylylsilane⁠, C12-15 Alkyl Benzoate⁠, Isopropyl Titanium Triisostearate⁠,
         Caprylyl Glycol⁠, Hexylene Glycol⁠, Ethylhexylglycerin⁠, Iron Oxides⁠, Phenoxyethanol⁠⁠⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0178/paula-choice-spf-light-defense-1.avif',
      'assets/product-images/0178/paula-choice-spf-light-defense-2.avif',
    ],
    price: 37,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Sunscreen',
    for: 'Face',
    availableAmount: 46,
  },
  {
    id: '0179',
    brandName: `Paula's Choice`,
    productName: 'Restoring Moisturizer with SPF 50',
    description: `This antioxidant-rich moisturizer hydrates and protects with superstar ingredients
     like niacinamide, shea butter and licorice for flawless, younger-looking skin.`,
    ingredients: `Water⁠, Octinoxate⁠, Homosalate⁠, Octisalate⁠, Oxybenzone⁠, Silica⁠, Glycerin⁠, Avobenzone⁠,
     Cetearyl Alcohol⁠, Dimethicone⁠, Butylene Glycol⁠, Pentylene Glycol⁠, Potassium Cetyl Phosphate⁠,
      Cyclopentasiloxane⁠, Pyrus Malus (Apple) Fruit Extract⁠, VP/Eicosene Copolymer⁠, Allantoin⁠, Niacinamide⁠,
       Tocopherol⁠, Glycyrrhiza Glabra (Licorice) Root Extract⁠, Aloe Barbadensis Leaf Juice⁠, Atractylodes
        Macrocephala Root Powder ⁠, Avena Sativa (Oat) Kernel Extract⁠, Coffea Arabica Seed Extract⁠,
         Portulaca Oleracea Extract⁠, Mahonia Aquifolium Root Extract ⁠, Diethylhexyl Syringylidenemalonate⁠,
          Sarcosine⁠, Capryloyl Glycine⁠, Maltooligosyl Glucoside⁠, Cetearyl Glucoside⁠, Dimethiconol⁠,
           Acrylates/C10-30 Alkyl Acrylate Crosspolymer⁠, Hydrogenated Starch Hydrolysate ⁠, Hexylene Glycol⁠,
            4-T-Butylcyclohexanol⁠, Glyceryl Stearate⁠, PEG-100 Stearate⁠, Sodium Hydroxide⁠, Xanthan Gum⁠,
             Disodium EDTA⁠, Phenoxyethanol⁠, Caprylyl Glycol⁠, Ethylhexylglycerin⁠⁠⁠⁠`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0179/paula-choice-restoring-moist-spf-1.avif',
      'assets/product-images/0179/paula-choice-restoring-moist-spf-2.avif',
    ],
    price: 37,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Sunscreen',
    for: 'Face',
    availableAmount: 170,
  },
  {
    id: '0180',
    brandName: `Paula's Choice`,
    productName: 'Intensive Repair Cream',
    description: `A concentrated anti-aging moisturizing cream infused with skin-restoring ingredients
     to significantly improve skin’s texture, smoothness, and hydration, renewing a beautifully youthful and healthy glow.`,
    ingredients: `Water⁠, Ethylhexyl Stearate⁠, Simmondsia Chinensis (Jojoba) Seed Oil⁠, Butylene Glycol⁠,
     Glycerin⁠, Caprylic/Capric Triglyceride⁠, Petrolatum⁠, Cetearyl Alcohol⁠, Dimethicone⁠, Dipentaerythrityl
      Hexacaprylate/Hexacaprate⁠, Glyceryl Stearate⁠, Tridecyl Trimellitate⁠, PEG-100 Stearate⁠, Phenyl
       Trimethicone⁠, Retinol⁠, Adenosine⁠, Palmitoyl Tetrapeptide-7⁠, Palmitoyl Hexapeptide-12⁠, Palmitoyl
        Tripeptide-1⁠, Ceramide NG⁠, Sodium Hyaluronate⁠, Magnesium Ascorbyl Phosphate⁠, Niacinamide⁠, Tocopherol⁠,
         Lecithin⁠, Linoleic Acid⁠, Linolenic Acid⁠, Retinyl Palmitate⁠, Glycyrrhiza Glabra (Licorice) Root Extract⁠,
          Camellia Oleifera (Green Tea) Leaf Extract⁠, Citrullus Lanatus (Watermelon) Fruit Extract⁠, Lentil Fruit
           Extract⁠, Pyrus Malus (Apple) Fruit Extract⁠, Glycine Soja Sterols⁠, Tribehenin⁠, PEG-10 Phytosterol⁠,
            Magnesium Aluminum Silicate⁠, Sodium PCA⁠, Sodium Lactate⁠, Pullulan⁠, Xanthan Gum⁠, Sodium Hydroxide⁠,
             Neopentyl Glycol Dicaprylate/Dicaprate⁠, Cetearyl Glucoside⁠, Tridecyl Stearate⁠, Behenyl Alcohol⁠,
              Sclerotium Gum⁠, Carbomer⁠, C12-15 Alkyl Benzoate⁠, Polysorbate 20⁠, Disodium EDTA⁠, Sorbic Acid⁠,
               Phenoxyethanol⁠, Chlorphenesin⁠, Benzoic Acid⁠⁠⁠⁠⁠`,
    starIngredient: 'Retinol',
    pics: [
      'assets/product-images/0180/paula-choice-intensive-repair-cream-1.avif',
      'assets/product-images/0180/paula-choice-intensive-repair-cream-2.avif',
    ],
    price: 37,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cream',
    for: 'Face',
    availableAmount: 164,
  },
  {
    id: '0181',
    brandName: `Paula's Choice`,
    productName: 'Omega Complex Eye Cream',
    description: `This lightweight eye cream is an instant pick-me-up for dehydrated under-eyes.
     It nourishes, helps retain moisture and smooths to counteract crepey and dry skin over time.`,
    ingredients: `Water⁠, Caprylic/Capric Triglyceride⁠, Butylene Glycol⁠, Neopentyl Glycol Diheptanoate⁠,
     Cetyl Palmitate⁠, Nylon-12⁠, Propanediol⁠, Ammonium Acryloyldimethyltaurate/VP Copolymer⁠, Propylene
      Glycol Dibenzoate⁠, Persea Gratissima (Avocado) Oil⁠, Borago Officinalis Seed Oil⁠, Sodium Stearoyl
       Glutamate⁠, Squalane⁠, Niacinamide⁠, Salvia Hispanica (Chia) Seed Oil⁠, Linum Usitatissimum (Linseed)
        Seed Oil⁠, Limnanthes Alba Seed Oil⁠, Olea Europaea Fruit Oil⁠, Passiflora Edulis Seed Oil⁠, Ceramide
         EOP⁠, Ceramide NP⁠, Ceramide AP⁠, Sodium Hyaluronate⁠, Cholesterol⁠, Morus Alba (White Mulberry)
          Root Extract⁠, Arctostaphylos Uva Ursi Leaf Extract⁠, Glycyrrhiza Glabra⁠, Linoleic Acid⁠,
           Linolenic Acid⁠, Serine⁠, Alanine⁠, Proline⁠, Arginine⁠, Threonine⁠, Phytosphingosine⁠, Phytosterols⁠,
            Sodium PCA⁠, Glycine⁠, Oleic Acid⁠, Glutamic Acid⁠, Lysine HCI⁠, Lecithin⁠, Adenosine⁠, Sodium
             Lactate⁠, Hydrogenated Olive Oil⁠, Euterpe Oleracea (Acai) Sterols⁠, Olea Europaea Oil
              Unsaponifiables⁠, Phytic Acid⁠, Scutellaria Baicalensis Root Extract⁠, Anastatica
               Hierochuntica Extract⁠, Glycerin⁠, PCA⁠, Betaine⁠, Pullulan⁠, Carbomer⁠, Sclerotium
                Gum⁠, Sodium Citrate⁠, Citric Acid⁠, Ascorbyl Palmitate⁠, Tocopheryl Acetate⁠, Silica⁠,
                 Sorbitan Oleate⁠, Xanthan Gum⁠, Sodium Lauroyl Lactylate⁠, Phenoxyethanol⁠,
                  Ethylhexylglycerin⁠, Chlorphenesin⁠`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0181/paula-choice-eye-omega-1.avif',
      'assets/product-images/0181/paula-choice-eye-omega-2.avif',
    ],
    price: 32,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Eye Cream',
    for: 'Face',
    availableAmount: 16,
  },
  {
    id: '0182',
    brandName: `Paula's Choice`,
    productName: 'Ceramide Firming Eye Cream',
    description: `This hydrating eye cream visibly smooths under eye wrinkles with a concentrated blend
     of five replenishing ceramides, four forms of brightening vitamin C, two peptides and clinically proven retinol.`,
    ingredients: `Water⁠, Neopentyl Glycol Diheptanoate⁠, Cetyl Alcohol⁠, Butylene Glycol⁠, Glycerin⁠,
     Glyceryl Stearate⁠, PEG-100 Stearate⁠, Ammonium Acryloyldimethyltaurate/VP Copolymer⁠, Ascorbyl
      Glucoside⁠, Potassium Cetyl Phosphate⁠, Sodium Ascorbyl Phosphate⁠, Bis-Diglyceryl Polyacyladipate⁠,
       Polyglyceryl-10 Dioleate⁠, Tetrahexyldecyl Ascorbate⁠, Ceramide NS⁠, Ceramide EOP⁠, Ceramide AP⁠, Ceramide
        EOS⁠, Ceramide NP⁠, Palmitoyl Tripeptide-5⁠, Acetyl Tetrapeptide-5⁠, Sodium Hyaluronate⁠, Caprooyl
         Phytosphingosine⁠, Caprooyl Sphingosine⁠, Cholesterol⁠, Squalane⁠, Retinol⁠, Vitis Vinifera (Grape)
          Seed Extract⁠, Glycyrrhiza Glabra⁠, Punica Granatum Fruit Extract⁠, Dunaliella Salina Extract⁠,
           Pongamia Glabra Seed Oil⁠, Tocopheryl Acetate⁠, Allantoin⁠, Bisabolol⁠, Carnosine⁠, Panthenol⁠, Sodium
            PCA⁠, Pullulan⁠, Glyceryl Ascorbate⁠, Behenic Acid⁠, Dimethicone⁠, Sodium Citrate⁠, Sodium Polyacrylate⁠,
             Caprylyl Glycol⁠, Ethylhexyl Stearate⁠, Ceteareth-25⁠, Sodium Hydroxide⁠, Trideceth-6⁠, Propyl Gallate⁠,
              Polysorbate 20⁠, Disodium EDTA⁠, Mica⁠, Phenoxyethanol⁠, Chlorphenesin⁠, Sodium Benzoate⁠`,
    starIngredient: 'Retinol',
    pics: [
      'assets/product-images/0182/paula-choice-ceramide-eye-cream-1.avif',
      'assets/product-images/0182/paula-choice-ceramide-eye-cream-2.avif',
    ],
    price: 32,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Eye Cream',
    for: 'Face',
    availableAmount: 16,
  },
  {
    id: '0183',
    brandName: `Paula's Choice`,
    productName: 'C5 Super Boost Eye Cream',
    description: `This hydrating eye cream visibly smooths under eye wrinkles with a concentrated blend
     of five replenishing ceramides, four forms of brightening vitamin C, two peptides and clinically proven retinol.`,
    ingredients: `Water⁠, Dicaprylyl Carbonate⁠, Glycerin⁠, Triheptanoin⁠, Ascorbyl Glucoside⁠, 3-O Ethyl Ascorbic
     Acid⁠, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer⁠, Arachidyl Alcohol⁠, Cetearyl
      Alcohol⁠, C13-15 Alkane⁠, Ascorbyl Palmitate⁠, Sh-Polypeptide-121⁠, Acetyl Hexapeptide-8⁠, Hyaluronic
       Acid⁠, Zerumbone⁠, Bacillus Ferment⁠, Tocopherol⁠, Tocopheryl Acetate⁠, Butyrospermum Parkii (Shea Butter)
        Unsaponifiables⁠, Oryza Sativa (Rice) Bran Extract⁠, Rosmarinus Officinalis (Rosemary) Leaf Extract⁠,
         Helianthus Annuus Sunflower Seed Extract⁠, Hydrogenated Lecithin⁠, Cetearyl Olivate⁠, Sorbitan Olivate⁠,
          Behenyl Alcohol⁠, Arachidyl Glucoside⁠, Propanediol⁠, Butylene Glycol⁠, Cetyl Alcohol⁠, Sodium Phytate⁠,
           Sodium Citrate⁠, Citric Acid⁠, Sodium Metabisulfite⁠, Phenoxyethanol⁠, Caprylyl Glycol⁠, Ethylhexylglycerin⁠,
            Hexylene Glycol⁠, Sodium Hydroxide⁠`,
    starIngredient: 'Vitamin C',
    pics: [
      'assets/product-images/0183/paula-choice-vit-c-eye-cream-1.avif',
      'assets/product-images/0183/paula-choice-vit-c-eye-cream-2.avif',
    ],
    price: 39,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Eye Cream',
    for: 'Face',
    availableAmount: 4,
  },
  {
    id: '0184',
    brandName: `Paula's Choice`,
    productName: 'Anti-Aging Eye Cream',
    description: `Unique, long-lasting balm-like cream for brightening and overnight hydration,
     with results you will see and feel the next morning.`,
    ingredients: `Water⁠, Butyrospermum Parkii Butter⁠, Glycerin⁠, Dimethicone⁠, Ascorbyl Glucoside⁠,
     Cetearyl Alcohol⁠, Hydrogenated Lecithin⁠, Sodium PCA⁠, Sodium Polyacrylate⁠, Tocopherol⁠,
      Glucosyl Hesperidin⁠, Copper Gluconate⁠, Resveratrol⁠, Palmitoyl Tripeptide-38⁠, Caprooyl
       Tetrapeptide-3⁠, Glycyrrhiza Glabra (Licorice) Root Extract⁠, Phytic Acid⁠, Beta-Glucan⁠,
        Acetyl Glucosamine⁠, Allantoin⁠, Adenosine⁠, Dextran⁠, Arctostaphylos Uva Ursi Leaf Extract⁠,
         Salix Alba (Willow) Bark Extract⁠, Polyacrylate Crosspolymer-6⁠, Hydroxypropyl Cyclodextrin⁠,
          Xanthan Gum⁠, Maltodextrin⁠, Ethylhexylglycerin⁠, Benzyl Alcohol⁠, Phenoxyethanol⁠, Benzoic Acid⁠,
           Dehydroacetic Acid⁠`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0184/paula-choice-anti-age-eye-cream-1.avif',
      'assets/product-images/0184/paula-choice-anti-age-eye-cream-2.avif',
    ],
    price: 37,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Eye Cream',
    for: 'Face',
    availableAmount: 97,
  },
  {
    id: '0185',
    brandName: `Paula's Choice`,
    productName: '5% Niacinamide Body Serum',
    description: `A lightweight body serum made with 5% niacinamide + 5% d-panthenol
     that targets patchy, uneven tone and rough, flaky texture while restoring a healthy skin barrier.`,
    ingredients: `Water⁠, Panthenol⁠, Niacinamide⁠, Caprylic/Capric Triglyceride⁠, Coco Caprylate/Caprate⁠,
     Myristyl Myristate⁠, Pentylene Glycol⁠, Glycerin⁠, C13-15 Alkane⁠, Squalene⁠, Glyceryl Stearate Citrate⁠,
      Butyrospermum Parkii Butter⁠, Citrullus Lanatus (Watermelon) Seed Oil ⁠, Mangifera Indica (Mango)
       Seed Butter⁠, Simmondsia Chinensis (Jojoba) Seed Oil⁠, Polyglyceryl-3 Stearate⁠, Propanediol⁠,
        Saccharide Isomerate⁠, Sodium Polyacrylate⁠, Hydrogenated Lecithin⁠, Caprylyl Glycol⁠, Xanthan Gum⁠,
         Tocopherol⁠, Ethylhexylglycerin⁠, Hexylene Glycol⁠, Sclerotium Gum⁠, Lecithin⁠, Pullulan⁠,
          Hydrolyzed Opuntia Ficus-Indica Flower Extract ⁠, Pantolactone⁠, Sodium Phytate⁠, Silica⁠, 1,
           2-Hexanediol⁠, Citric Acid⁠, Sodium Citrate⁠, Bacillus Ferment⁠, Phenoxyethanol⁠`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0185/paula-choice-niacinamide-body-1.avif',
      'assets/product-images/0185/paula-choice-niacinamide-body-2.avif',
    ],
    price: 29,
    bestseller: true,
    segment: 'USA / Canada',
    category: 'Cream',
    for: 'Body',
    availableAmount: 64,
  },
  {
    id: '0186',
    brandName: `Paula's Choice`,
    productName: 'Elasticity Renewal Body Treatment',
    description: `A potent body treatment that improves the look of elasticity,
     crepey texture and signs of aging that coincide with estrogen decline.`,
    ingredients: `Water⁠, Cyclodextrin⁠, Glycerin⁠, Coco Caprylate/Caprate⁠, Squalane⁠,
     Butylene Glycol⁠, Sodium Acrylates Copolymer⁠, Hydrogenated Polydecene⁠, Glycine Soja
      (Soybean) Seed Extract ⁠, Equol⁠, Xanthan Gum⁠, Cetyl Alcohol⁠, Tocopherol⁠, Daidzein⁠,
       Genistein⁠, Linum Usitatissimum (Linseed) Seed Oil⁠, Helianthus Annuus (Sunflower)
        Seed Oil⁠, Phospholipids⁠, Polyglyceryl-10 Stearate⁠, Citric Acid⁠, Glycine Soja Oil⁠,
         Sodium Phytate⁠, Ethylhexylglycerin⁠, Phenoxyethanol⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0186/paula-choice-elasticity-body-1.avif',
      'assets/product-images/0186/paula-choice-elasticity-body-2.avif',
    ],
    price: 68,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cream',
    for: 'Body',
    availableAmount: 10,
  },
  {
    id: '0187',
    brandName: `Paula's Choice`,
    productName: 'Retinol Body Treatment',
    description: `A potent body treatment that improves the look of elasticity,
     crepey texture and signs of aging that coincide with estrogen decline.`,
    ingredients: `Water⁠, Cetearyl Alcohol⁠, Cetearyl Ethylhexanoate⁠, Cyclopentasiloxane⁠,
     Dimethicone⁠, Glycerin⁠, Butylene Glycol⁠, Cetyl Palmitate⁠, Butyrospermum Parkii⁠, Glyceryl
      Stearate⁠, PEG-100 Stearate⁠, Oenothera Biennis Oil⁠, Vitis Vinifera⁠, Cetyl Alcohol⁠,
       Retinol⁠, Tetrahexyldecyl Ascorbate⁠, Tocopheryl Acetate⁠, Caprylic/Capric Triglyceride⁠,
        Panthenol⁠, Carnosine⁠, Dimethiconol⁠, Dimethicone/Vinyl Dimethicone Crosspolymer⁠, Cera
         Alba⁠, Magnesium Aluminum Silicate⁠, Sodium Hydroxide⁠, Xanthan Gum⁠, Dicaprylyl Carbonate⁠,
          Decylene Glycol⁠, Disodium EDTA⁠, Chlorphenesin⁠, Phenoxyethanol⁠`,
    starIngredient: 'Retinol',
    pics: [
      'assets/product-images/0187/paula-choice-retinol-body-1.avif',
      'assets/product-images/0187/paula-choice-retinol-body-2.avif',
    ],
    price: 29,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cream',
    for: 'Body',
    availableAmount: 16,
  },
  {
    id: '0188',
    brandName: `Paula's Choice`,
    productName: 'Rich Soothing Body Butter',
    description: `This blend of plant oils, emollients, and shea butter softens dry, rough, uncomfortable
     skin anywhere on the body, leaving it velvety-smooth and silky-feeling. It's
      exceptionally gentle for sensitive skin, even skin prone to eczema.`,
    ingredients: `Water⁠, Caprylic/Capric Triglyceride⁠, Glyceryl Stearate SE⁠, Dimethicone⁠,
     Olea Europaea Fruit Oil⁠, Glyceryl Stearate⁠, Mangifera Indica (Mango) Seed Butter⁠, Stearic
      Acid⁠, Cetyl Alcohol⁠, Simmondsia Chinensis ⁠, Cocos Nucifera (Coconut) Fruit Extract⁠, Persea
       Gratissima (Avocado) Oil⁠, Avena Sativa Kernel Extract⁠, Glycine Soja Oil⁠, Oryza Sativa (Rice)
        Bran Extract⁠, Alpha-Tocopherol⁠, Ascorbyl Palmitate⁠, Squalene⁠, Glycerin⁠, Beta-Sitosterol⁠,
         Panthenol⁠, Hydrogenated Vegetable Glycerides Citrate⁠, Propylene Glycol⁠, Disodium EDTA⁠,
          Phenoxyethanol⁠, Ethylhexylglycerin⁠⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0188/paula-choice-body-butter-1.avif',
      'assets/product-images/0188/paula-choice-body-butter-2.avif',
    ],
    price: 22,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cream',
    for: 'Body',
    availableAmount: 2,
  },
  {
    id: '0189',
    brandName: `Paula's Choice`,
    productName: 'Purifying Clay Mask',
    description: `This multi-action clay mask absorbs excess oil, minimizes the
     look of enlarged pores, visibly reduces redness and helps prevent future breakouts.`,
    ingredients: `Salicylic Acid⁠, Water⁠, Kaolin⁠, Bentonite⁠, Titanium Dioxide⁠, Butylene Glycol⁠,
     C12-15 Alkyl Benzoate⁠, Cetyl Esters⁠, Magnesium Aluminum Silicate⁠, Glycerin⁠, Illite⁠, Tapioca
      Starch⁠, Cornstarch⁠, Camellia Sinensis Leaf Extract⁠, Pyrus Malus (Apple) Fruit Extract⁠,
       Chrysanthellum Indicum (Golden Chamomile) Extract⁠, Hydrolyzed Rhodophycea (Red Algae)
        Extract⁠, Chlorella⁠, Epilobium Fleischeri (Willowherb) Extract⁠, Vaccinium Myrtillus
         Fruit Extract ⁠, Brassica Campestris (Rapeseed) Seed Oil⁠, Allantoin⁠, Bisabolol⁠,
          Zinc PCA⁠, Copper PCA⁠, Lauroyl Lysine⁠, Sodium Lauroyl Sarcosinate⁠, Xanthan Gum⁠,
           Citric Acid⁠, Sodium Citrate⁠, Sodium Chloride⁠, Phenoxyethanol⁠, Ethylhexylglycerin⁠⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0189/paula-choice-purifying-clay-mask-1.avif',
      'assets/product-images/0189/paula-choice-purifying-clay-mask-2.avif',
    ],
    price: 29,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Mask',
    for: 'Face',
    availableAmount: 90,
  },
  {
    id: '0190',
    brandName: `Paula's Choice`,
    productName: 'Pore Clarifying Charcoal Gel Mask',
    description: `Balance oily skin and decongest pores with charcoal and natural
     clays suspended in a soothing gel mask for a refreshed, shine-free complexion.`,
    ingredients: `Water⁠, Tapioca Starch⁠, Glycerin⁠, Decyl Glucoside⁠, Sodium Lauroyl Sarcosinate⁠,
     Butylene Glycol⁠, Cocamidopropyl Betaine⁠, Ammonium Acryloyldimethyltaurate/VP Copolymer⁠,
      Bentonite⁠, Kaolin⁠, Charcoal Powder⁠, Boerhavia Diffusa Root Extract⁠, Bisabolol⁠, Epilobium
       Angustifolium Extract⁠, Lactic Acid⁠, Xanthan Gum⁠, Isopropyl Titanium Triisostearate⁠, C12-15
        Alkyl Benzoate⁠, Iron Oxides⁠, Phenoxyethanol⁠, Caprylyl Glycol⁠, Ethylhexylglycerin⁠, Hexylene Glycol⁠⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0190/paula-chice-pore-charcoal-mask-1.avif',
      'assets/product-images/0190/paula-chice-pore-charcoal-mask-2.avif',
    ],
    price: 26,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Mask',
    for: 'Face',
    availableAmount: 69,
  },
  {
    id: '0191',
    brandName: `Paula's Choice`,
    productName: 'Super Hydrate Overnight Mask',
    description: `Wake up to a plump, dewy, healthy-looking complexion with this
     deeply hydrating overnight mask that resets depleted skin with nourishing ingredients.`,
    ingredients: `Chondrus Crispus ⁠, Rubus Chamaemorus (Cloudberry) Fruit Extract⁠,
     Ganoderma Lucidum (Mushroom) Extract⁠, Pentapeptide-59⁠, Glycerin⁠, Ginkgo Biloba Leaf
      Extract⁠, Terminalia Chebula Fruit Extract⁠, Cassia Angustifolia Seed Polysaccharide⁠,
       Vaccinium Vitis-Idaea (Lingonberry) Fruit Extract⁠, Sambucus Nigra Fruit Extract⁠, Schisandra
        Chinensis (Magnolia) Fruit Extract⁠, Rhodiola Rosea Root Extract⁠, Pelvetia Canaliculata
         (Algae) Extract⁠, Agastache Mexicana (Hyssop) Flower/Leaf/Stem Extract⁠⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0191/paula-choice-hydrate-mask-1.avif',
      'assets/product-images/0191/paula-choice-hydrate-mask-2.avif',
    ],
    price: 38,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Mask',
    for: 'Face',
    availableAmount: 15,
  },
  {
    id: '0192',
    brandName: `Paula's Choice`,
    productName: 'Hydrating Treatment Mask',
    description: `A deeply hydrating face mask for dry to very dry skin that works overnight
     to restore a dewy, resilient, appearance and feeling of firmness for a visibly refined complexion.`,
    ingredients: `Water⁠, Propylene Glycol Dicaprylate/Dicaprate⁠, Butylene Glycol⁠, Glycerin⁠, Sorbitan Stearate⁠,
     Caprylic/Capric Triglyceride⁠, Cetearyl Alcohol⁠, Glyceryl Stearate⁠, Dicaprylyl Carbonate⁠, Ethyl Macadamiate⁠,
      Cyclopentasiloxane⁠, Cyclohexasiloxane⁠, Glyceryl Behenate/Eicosadioate⁠, Borago Officinalis Seed Oil⁠,
       Oenothera Biennis Oil⁠, Olea Europaea Fruit Oil⁠, Prunus Armeniaca ⁠, Glycine Soja Sterols⁠, Tocopheryl
        Acetate⁠, Tocopherol⁠, Tetrahexyldecyl Ascorbate⁠, Ascorbyl Palmitate⁠, Linoleic Acid⁠, Phospholipids⁠,
         Sodium Hyaluronate⁠, Retinyl Palmitate⁠, Sodium Dilauramidoglutamide Lysine⁠, Cetearyl Glucoside⁠,
          Sclerotium Gum⁠, Hectorite⁠, Caprylyl Glycol⁠, Ethylhexylglycerin⁠, Phenoxyethanol⁠⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0192/paula-choice-hydra-treatment-mask-1.avif',
      'assets/product-images/0192/paula-choice-hydra-treatment-mask-2.avif',
    ],
    price: 29,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Mask',
    for: 'Face',
    availableAmount: 23,
  },
  {
    id: '0193',
    brandName: `Paula's Choice`,
    productName: '25% AHA + 2% BHA Exfoliant Peel',
    description: `A multi-acid, rinse-off exfoliant peel that dramatically resurfaces skin
     to visibly smooth wrinkles, refine rough, bumpy texture, brighten tone & unclog pores.`,
    ingredients: `Water⁠, Aminomethyl Propanol⁠, Glycolic Acid⁠, Lactic Acid⁠, Mandelic Acid⁠, Isoamyl Laurate⁠,
     Tartaric Acid⁠, Propanediol⁠, Salicylic Acid⁠, Malic Acid⁠, Butylene Glycol⁠, Clitoria Ternatea (Butterfly Pea)
      Flower Extract⁠, Sodium Hyaluronate⁠, Glycyrrhetinic Acid⁠, Glycerin⁠, Tocopherol⁠, Bisabolol⁠, Allantoin⁠,
       Hydroxyethylcellulose⁠, Hydrogenated Lecithin⁠, Xanthan Gum⁠, Polyglyceryl-4 Laurate⁠,
        Polyacrylate Crosspolymer-6⁠, Titanium Dioxide⁠, Mica⁠, Phenoxyethanol⁠⁠⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0193/paula-choice-exfoliant-peel-1.avif',
      'assets/product-images/0193/paula-choice-exfoliant-peel-2.avif',
    ],
    price: 42,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Exfoliant',
    for: 'Face',
    availableAmount: 6,
  },
  {
    id: '0194',
    brandName: `Paula's Choice`,
    productName: 'Advanced Smoothing Treatment 10% AHA',
    description: `This super-concentrated exfoliating cocktail dramatically smooths away
     visible sun damage and other advanced signs of aging, revealing more radiant, visibly younger skin with just one use.`,
    ingredients: `Water⁠, Butylene Glycol⁠, Glycolic Acid⁠, Glycerin⁠, Lactic Acid⁠, Caprylic/Capric Triglyceride⁠,
     Malic Acid⁠, Tartaric Acid⁠, Palmitoyl Tripeptide-1⁠, Palmitoyl Tetrapeptide-7⁠, Ceramide NG⁠, Salicylic Acid⁠,
      Glycyrrhiza Glabra⁠, Camellia Sinensis Leaf Extract⁠, Punica Granatum Extract⁠, Lycium Barbarum
       Fruit Extract⁠, Vitis Vinifera (Grape) Seed Extract⁠, Sambucus Nigra Fruit Extract⁠, Camellia
        Oleifera⁠, Chamomilla Recutita Flower Extract⁠, Peucedanum Graveolens (Dill) Extract⁠, Allantoin⁠,
         Adenosine⁠, Hydrogenated Lecithin⁠, Bisabolol⁠, Polyquaternium-10⁠, Xanthan Gum⁠, Carbomer⁠,
          Polysorbate 20⁠, Sodium Bicarbonate⁠, Sodium Hydroxide⁠, Aminomethyl Propanol⁠, Phenoxyethanol⁠, Benzyl⁠⁠⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0194/paula-choice-smoothing-aha-10-1.avif',
      'assets/product-images/0194/paula-choice-smoothing-aha-10-2.avif',
    ],
    price: 39,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Exfoliant',
    for: 'Face',
    availableAmount: 60,
  },
  {
    id: '0195',
    brandName: `Paula's Choice`,
    productName: 'Anti-Aging Lip Gloss SPF 40',
    description: `This nourishing, anti-aging lip gloss with SPF 40 creates fuller-looking, softer
     lips while helping to reduce the risk of early skin aging.`,
    ingredients: `Octyldodecanol⁠, Ethylhexyl Palmitate⁠, Homosalate⁠, Octisalate⁠, Cera Microcristallina⁠,
     Polyethylene⁠, Polyglyceryl 2 Triisostearate⁠, Cocos Nucifera (Coconut) Fruit Extract⁠, Avobenzone⁠,
      Octocrylene⁠, Flavor⁠, Silica Silylate⁠, Adenosine⁠, Retinyl Palmitate⁠, Lecithin⁠, Alpha-Tocopherol⁠,
       Tocopheryl Acetate⁠, Isononyl Isononanoate⁠, Isopropyl Titanium Triisostearate⁠, Stearalkonium
        Hectorite⁠, Isopropyl Myristate⁠, Propylene Carbonate⁠, Polyhydroxystearic Acid⁠, Silica⁠, Red 7
         Lake⁠, Iron Oxides⁠, Titanium Dioxide⁠, Mica⁠, Phenoxyethanol⁠, Manganese Violet⁠, Blue 1 Lake⁠,
          Yellow 6 Lake⁠, Yellow 5 Lake⁠, Red 6 Lake⁠, Red 28⁠, Red 33⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0195/paula-choice-anti-age-lip-gloss-1.avif',
      'assets/product-images/0195/paula-choice-anti-age-lip-gloss-2.avif',
    ],
    price: 22,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Lip Care',
    for: 'Face',
    availableAmount: 46,
  },
  {
    id: '0196',
    brandName: `Paula's Choice`,
    productName: 'Hyaluronic Acid + Peptide Lip Booster',
    description: `An advanced anti-aging lip treatment that smooths away fine lines and keeps
     lips looking youthfully full with a powerful blend of moisture-attracting hyaluronic acid,
      firming peptides and hydrating squalane.`,
    ingredients: `Diisostearyl Malate⁠, Hydrogenated Castor Oil/Sebacic Acid Copolymer⁠, Theobroma Cacao
     (Cocoa) Seed Butter⁠, Dipentaerythrityl Tetrabehenate/Polyhydroxystearate⁠, Polyamide-8⁠, Polyglyceryl-3
      Beeswax⁠, Dimer Dilinoleyl Dimer Dilinoleate⁠, Ethylhexyl Palmitate⁠, Triisostearin⁠, Squalane⁠,
       Butyrospermum Parkii (Shea Butter) Unsaponifiables⁠, Cetearyl Ethylhexanoate⁠, Dipalmitoyl
        Hydroxyproline⁠, Water⁠, Arginine/Lysine Polypeptide⁠, Tocopherol⁠, Tribehenin⁠, Palmitic Acid⁠,
         Hydroxystearic Acid⁠, Sorbitan Isostearate⁠, Trihydroxystearin⁠, Glycine Soja Oil⁠, Pentaerythrityl
          Tetra-Di-T-Butyl Hydroxyhydrocinnamate⁠, Portulaca Pilosa Extract⁠, Sodium Hyaluronate⁠, Lactic Acid⁠,
           Sucrose Cocoate⁠, Palmitoyl Tripeptide-1⁠, Palmitoyl Tripeptide-38⁠, Glucomannan⁠, Sorbic Acid⁠`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0196/paula-choice-lip-peptide-hyal-1.avif',
      'assets/product-images/0196/paula-choice-lip-peptide-hyal-2.avif',
    ],
    price: 32,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Lip Care',
    for: 'Face',
    availableAmount: 86,
  },
  {
    id: '0197',
    brandName: `Paula's Choice`,
    productName: 'Lipscreen SPF 50',
    description: `This fragrance- and flavor-free lip balm with SPF protects against harmful UV rays as
     it moisturizes and soothes dry, rough lips.`,
    ingredients: `Hydrogenated Olive Oil⁠, Polyglyceryl-3 Diisostearate ⁠, Beeswax⁠, Ozokerite⁠, Homosalate⁠,
     Octisalate⁠, Polyethylene⁠, Avobenzone⁠, Microcrystalline Wax⁠, Octocrylene⁠, Theobroma Cacao (Cocoa) Seed
      Butter⁠, Silica⁠, Tocopheryl Acetate⁠, Butyrospermum Parkii (Shea Butter) Unsaponifiables⁠, Olea
       Europaea (Olive) Fruit Oil⁠, Alpha-Tocopherol⁠, Hydrogenated Vegetable Glycerides Citrate⁠,
        Copernicia Cerifera Wax⁠, Water⁠, Phenoxyethanol⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0197/paula-choice-lipscreen-1.avif',
      'assets/product-images/0197/paula-choice-lipscreen-2.avif',
    ],
    price: 12,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Lip Care',
    for: 'Face',
    availableAmount: 52,
  },
  {
    id: '0198',
    brandName: `Paula's Choice`,
    productName: 'Shine-Free Mineral Complex SPF 30',
    description: `This antioxidant-enriched formula provides gentle, pure mineral
     broad-spectrum sun protection to defend skin from premature aging.`,
    ingredients: `Water⁠, Ethylhexyl Palmitate⁠, Zinc Oxide⁠, Cyclomethicone⁠, Titanium Dioxide⁠,
     Dimethicone⁠, Glyceryl Stearate⁠, PEG-100 Stearate⁠, C12-15 Alkyl Benzoate⁠, Polysorbate 80⁠,
      Caprylyl Methicone⁠, Sodium Acrylate/Acryloyldimethyl Taurate Copolymer⁠, Isohexadecane⁠,
       Cetyl Alcohol⁠, Propylene Glycol⁠, Polyglyceryl-6 Isostearate⁠, Chamomilla Recutita
        (Matricaria) Flower Extract ⁠, Camellia Sinensis Leaf Extract⁠, Glycyrrhiza Glabra
         (Licorice) Root Extract⁠, Algae Extract⁠, Aloe Barbadensis Leaf Juice⁠, Allantoin⁠,
          Glycerin⁠, Panthenol⁠, Butylene Glycol⁠, Caprylyl Glycol⁠, Alumina⁠, Lauryl PEG-9
           Polydimethylsiloxyethyl Dimethicone⁠, Polyhydroxystearic Acid⁠, Triethoxysilylethyl
            Polydimethylsiloxyethyl Hexyl Dimethicone⁠, Diethylhexyl Carbonate⁠,
             Triethoxycaprylylsilane⁠, Disodium EDTA⁠, Phenoxyethanol⁠, Chlorphenesin⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0198/paula-choice-sunscreen-mineral-1.avif',
      'assets/product-images/0198/paula-choice-sunscreen-mineral-2.avif',
    ],
    price: 33,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Sunscreen',
    for: 'Face',
    availableAmount: 25,
  },
  {
    id: '0199',
    brandName: `Paula's Choice`,
    productName: 'Daily Defense Broad Spectrum SPF 30',
    description: `A superlight daytime moisturizer that helps protect skin
     against premature aging with synthetic, broad-spectrum SPF 30 protection.`,
    ingredients: `Water⁠, Homosalate⁠, Butylene Glycol⁠, Oxybenzone⁠, Avobenzone⁠, Silica⁠, Octocrylene⁠,
     Aluminum Starch Octenylsuccinate⁠, Cetyl Dimethicone⁠, Camellia Sinensis Leaf Extract⁠,
      Aloe Barbadensis Leaf Juice Powder⁠, Ascorbyl Palmitate⁠, Phospholipids⁠, Superoxide
       Dismutase⁠, Adenosine⁠, Tocopherol⁠, Bisabolol⁠, Boerhavia Diffusa Root Extract⁠, Avena
        Sativa (Oat) Kernel Extract⁠, Panthenol⁠, Ginkgo Biloba Leaf Extract⁠, Salix Alba (Willow)
         Bark Extract⁠, Acrylates/C10-30 Alkyl Acrylate Crosspolymer⁠, Titanium Dioxide⁠, Sodium
          Hydroxide⁠, Steareth-21 ⁠, Steareth-2⁠, Polysorbate 20⁠, Disodium EDTA⁠, Phenoxyethanol⁠, Sorbic Acid⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0199/paula-choice-daily-defense-1.avif',
      'assets/product-images/0199/paula-choice-daily-defense-2.avif',
    ],
    price: 33,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Sunscreen',
    for: 'Face',
    availableAmount: 16,
  },
  {
    id: '0200',
    brandName: `Biossance`,
    productName: 'Squalane + Vitamin C Rose Moisturizer',
    description: `Antioxidant-rich moisturizer that instantly brightens and
     nourishes while minimizing signs of aging.`,
    ingredients: `Water/Aqua/Eau, Squalane, Glycerin, Caprylic/Capric Triglyceride, Isoamyl Laurate,
     Cetearyl Olivate, Sorbitan Olivate, Tetrahexyldecyl Ascorbate, Lactobacillus/Lemon Peel Ferment
      Extract, Tocopherol, Glyceryl Stearate SE, Rosa Damascena Flower Extract, Hydroxyethyl Acrylate/Sodium
       Acryloyldimethyl Taurate Copolymer, Leuconostoc/Radish Root Ferment Filtrate, Cetyl Alcohol, Acacia
        Senegal Gum, Xanthan Gum, Ethylhexylglycerin, Phytic Acid, Sodium Gluconate, Phenoxyethanol,
         Citric Acid, Sodium Hydroxide, Citronellol, Iron Oxide⁠`,
    starIngredient: 'Vitamin C',
    pics: [
      'assets/product-images/0200/biossance-vit-c-rose-moist-1.avif',
      'assets/product-images/0200/biossance-vit-c-rose-moist-2.avif',
      'assets/product-images/0200/biossance-vit-c-rose-moist-3.avif',
    ],
    price: 56,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cream',
    for: 'Face',
    availableAmount: 58,
  },
  {
    id: '0201',
    brandName: `Biossance`,
    productName: 'Squalane + Vitamin C Rose Oil',
    description: `Results-driven blend to brighten, firm, and hydrate in one step.`,
    ingredients: `Squalane, Tetrahexyldecyl Ascorbate, Caprylic/Capric Triglyceride,
     Pistacia Lentiscus (Mastic) Gum, Rosa Damascena Flower Extract, Geraniol, Citronellol⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0201/biossance-rose-oil-1.avif',
      'assets/product-images/0201/biossance-rose-oil-2.avif',
      'assets/product-images/0201/biossance-rose-oil-3.avif',
    ],
    price: 74,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Oil',
    for: 'Face',
    availableAmount: 58,
  },
  {
    id: '0202',
    brandName: `Biossance`,
    productName: 'Squalane + Omega Repair Cream',
    description: `Ultra-hydrating repair cream that improves the appearance of fine lines.`,
    ingredients: `Water, Squalane, Glycerin, Caprylic/Capric Triglyceride, Isoamyl Laurate,
     Butyrospermum Parkii (Shea) Butter, Sorbitan Olivate, Cetearyl Olivate, Ceramide NP,
      Jojoba Esters, Sodium Hyaluronate, Euterpe Oleracea Sterols, Linoleic Acid, Oleic Acid,
       Linolenic Acid, Ethyl Linoleate, Tocopherol, Isoamyl Cocoate, Cetyl Palmitate, Sorbitan
        Palmitate, Cetearyl Alcohol, Ethylhexylglycerin, Carbomer, Sodium Hydroxide, Phenoxyethanol, Sodium Gluconate⁠`,
    starIngredient: 'Ceramide',
    pics: [
      'assets/product-images/0202/biossance-omega-repair-cream-1.avif',
      'assets/product-images/0202/biossance-omega-repair-cream-2.avif',
      'assets/product-images/0202/biossance-omega-repair-cream-3.avif',
    ],
    price: 78,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cream',
    for: 'Face',
    availableAmount: 102,
  },
  {
    id: '0203',
    brandName: `Biossance`,
    productName: 'Squalane + Marine Algae Eye Cream',
    description: `Instantly lifts, firms & smooths the look of skin.`,
    ingredients: `Water (Aqua), Caprylic/Capric Triglyceride, Squalane, Glycerin, Sorbitan
     Olivate, Cetearyl Olivate, Jojoba Esters, Glyceryl Stearate SE, Panthenol, Hydroxyethyl
      Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Cetyl Palmitate, Spilanthes Acmella
       Flower Extract, Palmitoyl Tripeptide-5, Sorbitan Palmitate, Dunaliella Salina Extract,
        Astaxanthin, Sodium Hyaluronate, Phenoxyethanol, Ethylhexylglycerin, Tocopherol, Citric Acid⁠`,
    starIngredient: 'Ceramide',
    pics: [
      'assets/product-images/0203/biossance-marine-eye-cream-1.avif',
      'assets/product-images/0203/biossance-marine-eye-cream-2.avif',
      'assets/product-images/0203/biossance-marine-eye-cream-3.avif',
    ],
    price: 56,
    bestseller: true,
    segment: 'USA / Canada',
    category: 'Eye Cream',
    for: 'Face',
    availableAmount: 58,
  },
  {
    id: '0204',
    brandName: `Biossance`,
    productName: 'Squalane + Copper Peptide Plumping Serum',
    description: `Innovative moisture complex for instant and long-lasting hydration.`,
    ingredients: `Water/Aqua/Eau, Glycerin, Propanediol, Squalane, Sodium Hyaluronate, Hydroxyethyl
     Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Copper Tripeptide-1, Acmella Oleracea
      Extract, Ectoin, Tetrapeptide-30, Palmitoyl Hexapeptide-52, Copper PCA, Panthenol, Sodium
       Polyglutamate, Camellia Sinensis Leaf Extract, Aloe Barbadensis Flower Extract, Passiflora
        Incarnata Flower Extract, Melia Azadirachta Leaf Extract, Solanum Melongena (Eggplant)
         Fruit Extract, Curcuma Longa (Turmeric) Root Extract, Ocimum Basilicum (Basil) Flower/Leaf
          Extract, Coccinia Indica Fruit Extract, Melia Azadirachta Flower Extract, Ocimum Sanctum Leaf
           Extract, Corallina Officinalis Extract, Polyacrylate Crosspolymer-6, Acacia Senegal Gum,
            Xanthan Gum, Phenoxyethanol, Ethylhexylglycerin, Citric Acid, Caprylyl Glycol⁠`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0204/biossance-copper-peptide-serum-1.avif',
      'assets/product-images/0204/biossance-copper-peptide-serum-2.avif',
      'assets/product-images/0204/biossance-copper-peptide-serum-3.avif',
    ],
    price: 68,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Serum',
    for: 'Face',
    availableAmount: 36,
  },
  {
    id: '0205',
    brandName: `Biossance`,
    productName: 'Squalane + Vitamin C Dark Spot Serum',
    description: `A targeted 10% vitamin c treatment to brighten and fade dark spots.`,
    ingredients: `Water/Aqua/Eau, Glycerin, 3-O-Ethyl Ascorbic Acid, Squalane, Lentinus Edodes
     Mycelium Extract, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer,
      Glycyrrhiza Glabra (Licorice) Root Extract, Sodium Hyaluronate, Citric Acid,
       Polyacrylate Crosspolymer-6, Acacia Senegal Gum, Xanthan Gum, Sodium Gluconate,
        Sodium Citrate, Phenoxyethanol, Ethylhexylglycerin⁠`,
    starIngredient: 'Vitamin C',
    pics: [
      'assets/product-images/0205/biossance-vit-c-dark-spot-1.avif',
      'assets/product-images/0205/biossance-vit-c-dark-spot-2.avif',
      'assets/product-images/0205/biossance-vit-c-dark-spot-3.avif',
    ],
    price: 65,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Serum',
    for: 'Face',
    availableAmount: 32,
  },
  {
    id: '0206',
    brandName: `Biossance`,
    productName: 'Squalane + Lactic Acid Resurfactant Night Serum',
    description: `10% lactic acid serum delivers dramatically smoother, more luminous skin overnight.`,
    ingredients: `Water/Aqua/Eau, Caprylic/Capric Triglyceride, Lactic Acid, Squalane, Glycerin, Sodium
     Hydroxide, Cetearyl Olivate, Propanediol, Sorbitan Olivate, Cetearyl Alcohol, Lespedeza Capitata
      Leaf/Stem Extract, Polyacrylate Crosspolymer-6, Acacia Senegal Gum, Sodium Gluconate, Xanthan
       Gum, Phenoxyethanol, Ethylhexylglycerin, Lavandula Angustifolia (Lavender) Oil, Linalool⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0205/biossance-vit-c-dark-spot-1.avif',
      'assets/product-images/0205/biossance-vit-c-dark-spot-2.avif',
      'assets/product-images/0205/biossance-vit-c-dark-spot-3.avif',
    ],
    price: 65,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Serum',
    for: 'Face',
    availableAmount: 32,
  },
  {
    id: '0207',
    brandName: `Biossance`,
    productName: 'Squalane + Amino Aloe Gentle Cleanser',
    description: `A soothing gel cleanser to remove impurities and makeup.`,
    ingredients: `Water/Aqua/Eau, Aloe Barbadensis Leaf Juice, Cocamidopropyl Hydroxysultaine,
     Glycerin, Sodium Cocoyl Isethionate, Disodium Coco-Glucoside Citrate, Squalane, Cocoyl
      Proline, Moringa Oleifera Leaf Extract, Rosmarinus Officinalis (Rosemary) Leaf Oil,
       Cymbopogon Schoenanthus Oil, Pelargonium Graveolens Oil, Salvia Sclarea (Clary) Oil,
        Hydrolyzed Pea Protein, Medicago Sativa (Alfalfa) Extract, Sodium Levulinate, Caramel,
         Magnesium Chloride, Potassium Sorbate, Sodium Gluconate, Citric Acid, Citral, Citronellol, Linalool⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0207/biossance-amino-aloe-cleanser-1.avif',
      'assets/product-images/0207/biossance-amino-aloe-cleanser-2.avif',
      'assets/product-images/0207/biossance-amino-aloe-cleanser-3.avif',
    ],
    price: 28,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 76,
  },
  {
    id: '0208',
    brandName: `Biossance`,
    productName: 'Squalane + Probiotic Gel Moisturizer',
    description: `A soothing gel cleanser to remove impurities and makeup.`,
    ingredients: `Water/Aqua, Squalane, Glycerin, Dimethicone, Pentylene Glycol, Ammonium
     Acryloyldimethyltaurate/VP Copolymer, Lactococcus Ferment Lysate, Caprylic/Capric
      Triglyceride, Phenoxyethanol, Caprylyl Glycol, Dimethiconol, Chondrus Crispus Extract,
       Allantoin, Bisabolol, Glycine Soja (Soybean) Sterols, Linoleic Acid, Phospholipids,
        Sodium Phytate, Lechithin, Sodium Hydroxide, Sodium Hyaluronate, Lactic Acid,
         Lepidium Sativum Sprout Extract, Sodium Chloride, Sodium Benzoate, Citric Acid,
          Zingiber Officinale (Ginger) Root Extract⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0208/biossance-probiotic-cream-1.avif',
      'assets/product-images/0208/biossance-probiotic-cream-2.avif',
      'assets/product-images/0208/biossance-probiotic-cream-3.avif',
    ],
    price: 54,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cream',
    for: 'Face',
    availableAmount: 22,
  },
  {
    id: '0209',
    brandName: `Biossance`,
    productName: '100% Squalane Oil',
    description: `Our sustainable, vegan multitasker that hydrates head to toe.`,
    ingredients: `Squalane Oil⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0209/biossance-squalane-1.avif',
      'assets/product-images/0209/biossance-squalane-2.avif',
      'assets/product-images/0209/biossance-squalane-3.avif',
    ],
    price: 34,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Oil',
    for: 'Face',
    availableAmount: 42,
  },
  {
    id: '0210',
    brandName: `Biossance`,
    productName: 'Squalane + Zinc Sheer Mineral Sunscreen',
    description: `Powerfully invisible, moisturizing daily sun protection.`,
    ingredients: `Zinc Oxide 14%, Water, Caprylic/Capric Triglyceride, Squalane, Glycerin,
     Cetearyl Alcohol, Methyl Dihydroabietate, Sorbitan Olivate, Coco-Glucoside, Cetyl Palmitate,
      Polyglyceryl-3 Polyricinoleate, Caprylyl/Capryl Glucoside, Nymphaea Alba Flower Extract,
       Acacia Senegal Gum, Ethyl Ferulate, Xanthan Gum, Sodium Gluconate, Lecithin, Sodium
        Palmitoyl Proline, Polyhydroxystearic Acid, Ethylhexylglycerin, Phenoxyethanol, Isostearic Acid⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0210/biossance-sunscreen-1.avif',
      'assets/product-images/0210/biossance-sunscreen-2.avif',
      'assets/product-images/0210/biossance-sunscreen-3.avif',
    ],
    price: 46,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Sunscreen',
    for: 'Face',
    availableAmount: 17,
  },
  {
    id: '0211',
    brandName: `Biossance`,
    productName: 'Squalane + Enzyme Sugar Body Scrub',
    description: `Powerfully gentle multi-exfoliator dramatically smooths, softens, and hydrates without stripping skin.`,
    ingredients: `Sucrose, Glycerin, Water/Aqua/Eau, Squalane, Cetearyl Olivate, Sorbitan Olivate, Lactobacillus/Punica
     Granatum Fruit Ferment Extract, Rosa Canina (Rosehip) Seed Oil, Rosa Gallica (Rose) Flower Powder, Vaccinium
      Macrocarpon (Cranberry) Fruit Powder, Propanediol, Citrus Aurantium Dulcis (Orange) Peel Oil, Leuconostoc/Radish
       Root Ferment Filtrate, Lavandula Angustifolia (Lavender) Oil, Lavandula Hybrida Oil, Xanthan Gum, Anthemis
        Nobilis Flower Oil, Ethylhexylglycerin, Potassium Sorbate, Mica, Limonene, Linalool, Iron Oxide (CI 77491)⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0211/biossance-scrub-enzyme-1.avif',
      'assets/product-images/0211/biossance-scrub-enzyme-2.avif',
      'assets/product-images/0211/biossance-scrub-enzyme-3.avif',
    ],
    price: 28,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Exfoliant',
    for: 'Body',
    availableAmount: 26,
  },
  {
    id: '0212',
    brandName: `Biossance`,
    productName: 'Squalane + Rose Vegan Lip Balm',
    description: `Deeply moisturizing, fragrance-free formula packed with an ultra-hydration blend.`,
    ingredients: `Diisostearyl Malate, Capryloyl Glycerin/Sebacic Acid Copolymer, Bis-Diglyceryl
     Polyacyladipate-2, Glycerin, Hydroxystearic/Linolenic/Oleic Polyglycerides,
      Myristic/Palmitic/Stearic/Ricinoleic/Eicosanedioic Glycerides, Ricinus Communis (Castor)
       Seed Oil, Squalane, Water/Aqua/Eau, Rosa Damascena Flower Wax, Ceramide NP, Hydrolyzed
        Jojoba Esters, Vitis Vinifera (Grape) Seed Oil, Undaria Pinnatifida Extract, Caprylic/Capric
         Triglyceride, Tetrahexyldecyl Ascorbate, Sodium Hyaluronate, Jojoba Esters, Tocopherol,
          Hydrogenated Castor Oil, Glyceryl Caprylate, Glyceryl Undecylenate, Dextrin Palmitate⁠`,
    starIngredient: 'Ceramide',
    pics: [
      'assets/product-images/0212/biossance-lip-balm-1.avif',
      'assets/product-images/0212/biossance-lip-balm-2.avif',
      'assets/product-images/0212/biossance-lip-balm-3.avif',
    ],
    price: 16,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Lip Care',
    for: 'Face',
    availableAmount: 26,
  },
  {
    id: '0213',
    brandName: `Biossance`,
    productName: 'Squalane + Glycolic Renewal Mask',
    description: `Exfoliate, reduce the look of fine lines, discoloration and enlarged pores.`,
    ingredients: `Water/Aqua, Glycerin, Glycolic Acid, Squalane, Caprylic/Capric Triglyceride, Stearyl Alcohol,
     Arachidyl Alcohol, Clay Mineral Oxides, Behenyl Alcohol, Sodium Hydroxide, Lactic Acid, Pyrus Malus
      (Apple) Fruit Extract, Capryloyl Glycerin/Sebacic Acid Copolymer, Vaccinium Myrtillus Fruit Extract,
       Saccharum Officinarum (Sugarcane) Extract, Acer Saccharum (Sugar Maple) Extract, Kaolin, Sodium
        Hyaluronate, Xanthan Gum, Diheptyl Succinate, Citrus Aurantium Dulcis (Orange) Fruit Extract,
         Citrus Limon (Lemon) Fruit Extract, Citric Acid, Tartaric Acid, Glycyrrhiza Glabra (Licorice)
          Root Extract, Citrus Limon (Lemon) Peel Oil, Montmorillonite, Illite, Acacia Senegal Gum,
           Biosaccharide Gum-1, Arachidyl Glucoside, Polyacrylate Crosspolymer-6, Phenoxyethanol,
            Ethylhexylglycerin, Sodium Phytate, Limonene⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0213/biossance-glycolic-mask-1.avif',
      'assets/product-images/0213/biossance-glycolic-mask-2.avif',
      'assets/product-images/0213/biossance-glycolic-mask-3.avif',
    ],
    price: 48,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Exfoliant',
    for: 'Face',
    availableAmount: 44,
  },
  {
    id: '0214',
    brandName: `Biossance`,
    productName: 'Squalane + Retinol Night Serum',
    description: `Advanced retinol + retinal serum that improves fine lines,
     blemishes and dark spots with minimal irritation.`,
    ingredients: `Water/Aqua/Eau, Squalane, Glycerin, Caprylic/Capric Triglyceride, Cetearyl Olivate,
     Sorbitan Olivate, Retinol, Retinal, Allantoin, Crocus Sativus Stigma Extract, Pseudozyma
      Epicola/Evening Primrose Oil Ferment Extract, Tocopherol, Rosmarinus Officinalis
       (Rosemary) Leaf Extract, Oryza Sativa (Rice) Bran Extract, Cetearyl Alcohol, Helianthus
        Annuus (Sunflower) Extract, Hydroxyapatite, Dextrin, Carbomer, Sodium Gluconate,
         Phenoxyethanol, Ethylhexylglycerin, Sodium Hydroxide⁠`,
    starIngredient: 'Retinol',
    pics: [
      'assets/product-images/0214/biossance-retinol-serum-1.avif',
      'assets/product-images/0214/biossance-retinol-serum-2.avif',
      'assets/product-images/0214/biossance-retinol-serum-3.avif',
    ],
    price: 73,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Serum',
    for: 'Face',
    availableAmount: 33,
  },
  {
    id: '0215',
    brandName: `Biossance`,
    productName: 'Squalane + Peptide Eye Gel',
    description: `Visibly reduces dark circles and puffiness.`,
    ingredients: `Water/Aqua, Aloe Barbadensis Leaf Juice*, Squalane, Niacinamide, Glycerin,
     Panthenol, Chondrus Crispus Extract, Malus Domestica Fruit Cell Culture Extract, Acetyl
      Tetrapeptide-5, Acetyl Hexapeptide-8, Tocopherol, Pentylene Glycol, Cucumis Sativus (Cucumber)
       Fruit Extract, Tetrahexyldecyl Ascorbate, Camellia Sinensis Leaf Extract, Lycium Barbarum (Goji)
        Fruit Extract, Lycopene, Vitis Vinifera (Grape) Skin Extract, Sodium Hyaluronate, Caffeine, Acacia
         Senegal Gum, Dimethicone Crosspolymer, Xanthan Gum, Carbomer, Ethyl Lauroyl Arginate HCL, Lecithin,
          Ammonium Acryloyldimethyltaurate/VP Copolymer, Silica, Phenoxyethanol, Potassium Sorbate, Citric
           Acid, Caprylyl Glycol *Organic⁠`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0215/biossance-peptide-eye-gel-1.avif',
      'assets/product-images/0215/biossance-peptide-eye-gel-2.avif',
      'assets/product-images/0215/biossance-peptide-eye-gel-3.avif',
    ],
    price: 56,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Eye Cream',
    for: 'Face',
    availableAmount: 28,
  },
  {
    id: '0216',
    brandName: `Biossance`,
    productName: 'Squalane + Antioxidant Cleansing Oil',
    description: `Antioxidant oil that dissolves impurities deep into the pores.`,
    ingredients: `Caprylic/Capric Triglyceride, Polyglyceryl-2 Caprate, Squalane, Hydrogenated Farnesene,
     Polyglyceryl-2 Sesquioleate, Triethylhexanoin, Citrus Aurantium Dulcis (Orange) Oil, Lavandula
      Angustifolia (Lavender) Oil, Rosa Moschata Seed, Oil, Avena Sativa (Oat) Kernel Oil, Oenothera
       Biennis, (Evening Primrose) Oil, Moringa Oleifera Seed Oil, Lavandula Hybrida Oil, Rosmarinus
        Officinalis (Rosemary), Leaf Extract, Anthemis Nobilis Flower Oil, Helianthus, Annuus
         (Sunflower) Seed Oil, Tocopherol, Limonene, Linalool⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0216/biossance-cleansing-oil-1.avif',
      'assets/product-images/0216/biossance-cleansing-oil-2.avif',
      'assets/product-images/0216/biossance-cleansing-oil-3.avif',
    ],
    price: 32,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 16,
  },
  {
    id: '0217',
    brandName: `Biossance`,
    productName: 'Squalane + Caffeine Toning Body Cream',
    description: `Antioxidant oil that dissolves impurities deep into the pores.`,
    ingredients: `Water/Aqua/Eau, Squalane, Caprylic/Capric Triglyceride, Glycerin, Sorbitan Olivate,
     Cetearyl Olivate, Jojoba Esters, Behenyl Alcohol, Cetyl Palmitate, Caffeine, Niacinamide,
      Plankton Extract, Sorbitan Palmitate, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate
       Copolymer, Tocopherol, Citrus Aurantium Bergamia (Bergamot) Peel Oil, Pelargonium Graveolens
        (Geranium) Oil, Citrus Reticulata (Tangerine) Peel Oil, Citrus Sinensis (Orange) Peel Extract,
         Sodium Gluconate, Ethylhexylglycerin, Phenoxyethanol, Citric Acid, Limonene, Linalool, Citronellol, Geraniol⁠`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0217/biossance-body-cream-1.avif',
      'assets/product-images/0217/biossance-body-cream-2.avif',
      'assets/product-images/0217/biossance-body-cream-3.avif',
    ],
    price: 30,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cream',
    for: 'Body',
    availableAmount: 18,
  },
  {
    id: '0218',
    brandName: `Biossance`,
    productName: 'Squalane + Elderberry Jelly Cleanser',
    description: `Deeply cleanses, nourishes the microbiome, & dissolves makeup.`,
    ingredients: `Caprylic/Capric Triglyceride, Glycerin, Water/Aqua/Eau, Squalane, Hydrogenated
     Farnesene,Sucrose Laurate, Sodium Lauroyl Methyl Isethionate, Sucrose Stearate, Polymnia
      Sonchifolia Root Juice, Alpha-Glucan Oligosaccharide, Sambucus Nigra Fruit Extract,
       Lactobacillus, Ipomoea Batatas Root Extract, Oryza Sativa (Rice) Bran Extract, Acacia
        Senegal Gum, Helianthus Annuus (Sunflower) Extract, Caprylhydroxamic Acid, Sucrose
         Palmitate, Rosmarinus Officinalis (Rosemary) Leaf Extract, Phenethyl Alcohol,
          Ethylhexylglycerin, Maltodextrin, Tocopherol, Citric Acid⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0218/biossance-jelly-cleanser-1.avif',
      'assets/product-images/0218/biossance-jelly-cleanser-2.avif',
      'assets/product-images/0218/biossance-jelly-cleanser-3.avif',
    ],
    price: 28,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 76,
  },
  {
    id: '0219',
    brandName: `Biossance`,
    productName: 'Squalane + Hyaluronic Acid Facial Mist',
    description: `Hyaluronic Spray hydrates and plumps the appearance of fine lines.`,
    ingredients: `Water/Aqua, Polyglyceryl-10 Laurate, Glyceryl Citrate/Lactate/Linoleate/Oleate, Squalane,
     Glycerin, Panthenol, Sodium Hyaluronate, Hydrolyzed Sodium Hyaluronate, Enteromorpha Compressa Extract,
      Lysine, Magnesium Chloride, Sodium Chloride, Potassium Chloride, Zinc Chloride, Pyrus Malus (Apple) Fruit
       Extract, Lavandula Angustifolia (Lavender) Oil, Citrus Nobilis (Mandarin Orange) Peel Oil, Pelargonium
        Graveolens Flower Oil, Sodium Stearoyl Glutamate, Polyglyceryl-4 Cocoate, Polyglyceryl-3 Caprate,
         Glyceryl Caprylate, Tetrasodium Glutamate Diacetate, Citric Acid, Caprylyl Glycol, Ethylhexylglycerin,
          Phenoxyethanol, Hexylene Glycol, Limonene, Citronellol, Geraniol, Linalool⁠`,
    starIngredient: '',
    pics: [
      'assets/product-images/0219/biossance-hyal-mist-1.avif',
      'assets/product-images/0219/biossance-hyal-mist-2.avif',
      'assets/product-images/0219/biossance-hyal-mist-3.avif',
    ],
    price: 32,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Toner',
    for: 'Face',
    availableAmount: 52,
  },
  {
    id: '0220',
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
      'assets/product-images/0220/yttp-SuperfoodCleanser-1.avif',
      'assets/product-images/0220/yttp-SuperfoodCleanser-2.avif',
      'assets/product-images/0220/yttp-SuperfoodCleanser-3.avif',
      'assets/product-images/0220/yttp-SuperfoodCleanser-4.avif',
    ],
    price: 36,
    bestseller: true,
    segment: 'USA / Canada',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 20,
  },
  {
    id: '0221',
    brandName: 'Youth to the People',
    productName: 'Superberry Dream Cleasning Balm',
    description: `This flash-melting daily cleansing balm and makeup remover rapidly
     dissolves all traces of long-wear formulas and water-resistant sunscreens while
      gently removing excess oils and impurities. It's PEG-free, rinses clean, and
       leaves skin soft and hydrated, never greasy.`,
    ingredients: `Helianthus Annuus (Sunflower) Seed Oil, Caprylic/Capric Triglyceride,
     Oryza Sativa (Rice) Bran Wax , Polyglyceryl-2 Sesquicaprylate , Polyglyceryl-6 Distearate ,
      Water/Aqua/Eau , Polyhydroxystearic Acid , Simmondsia Chinensis (Jojoba) Seed Oil ,
       Moringa Oleifera Seed Oil , Sorbitan Olivate , Hydrolyzed Sodium Hyaluronate , Sodium Hyaluronate ,
        Opuntia Ficus-Indica (Prickly Pear) Stem Extract* , Aristotelia Chilensis (Maqui Berry) Fruit
         Extract , Euterpe Oleracea (Acai) Fruit Extract , Lycium Barbarum (Goji Berry) Fruit Extract ,
          Moringa Oleifera (Moringa) Leaf Extract , Opuntia Tuna (Prickly Pear) Flower/Stem Extract ,
           Melia Azadirachta Flower (Neem) Extract , Melia Azadirachta Leaf Extract , Ocimum Sanctum
            Leaf Extract , Curcuma Longa (Turmeric) Root Extract , Ocimum Basilicum (Holy Basil)
             Flower/Leaf Extract , Corallina Officinalis (Red Algae) Extract , Ricinus Communis (Castor)
              Seed Oil , Hydrogenated Castor Oil , Tocopherol , Sodium Laurylglucosides Hydroxypropylsulfonate ,
               Caprylyl Glycol , Sodium Chloride , Ethylhexylglycerin , Phenoxyethanol , Hexylene Glycol ,
                Fragrance/Parfum , Limonene`,
    starIngredient: '',
    pics: [
      'assets/product-images/0221/yttp-superberry-cleansing-balm-1.avif',
      'assets/product-images/0221/yttp-superberry-cleansing-balm-2.avif',
      'assets/product-images/0221/yttp-superberry-cleansing-balm-3.avif',
      'assets/product-images/0221/yttp-superberry-cleansing-balm-4.avif',
    ],
    price: 34,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cleanser',
    for: 'Face',
    availableAmount: 105,
  },
  {
    id: '0222',
    brandName: 'Youth to the People',
    productName: 'Retinal Niacinamide Youth Serum',
    description: `This multi-effect retinal night serum uses the power of retinaldehyde (the most potent retinoid next
       to an Rx) to smooth textured and blemished skin, improve the look of fine lines and wrinkles, and brighten uneven skin tone.`,
    ingredients: `Water/Aqua/Eau , Butylene Glycol , Triethylhexanoin , Niacinamide , Squalane , Cyclodextrin ,
     Glycerin , Hydrogenated Lecithin , Polyglyceryl-10 Myristate , Grifola Frondosa Fruiting Body Extract ,
      Rubus Chamaemorus (Cloudberry) Seed Oil , Arginine , Retinal , Withania Somnifera (Ashwagandha) Root
       Extract , Helianthus Annuus (Sunflower) Seed Oil , Hordeum Vulgare Extract , Ganoderma Lucidum
        (Reishi Mushroom) Stem Extract , Sodium Hyaluronate Crosspolymer , Cucumis Sativus (Cucumber)
         Seed Oil , Lonicera Japonica (Honeysuckle) Flower Extract , Ceramide NP , Ceramide AP ,
          Phytosphingosine , Cholesterol , Letinus Edodes Mycelium Extract , Lonicera Caprifolium
           (Honeysuckle) Flower Extract , Butyrospermum Parkii (Shea) Oil , Ceramide EOP , Sodium Lauroyl
            Lactylate , Acrylates/C10-30 Alkyl Acrylate Crosspolymer , Capryloyl Glycerin/Sebacic Acid
             Copolymer , Xanthan Gum , Tocopherol , Carbomer , Hydrolyzed Glycosaminoglycans , Sodium
              Hyaluronate , Hyaluronic Acid , Pentylene Glycol , Hydrolyzed Sodium Hyaluronate ,
               Diheptyl Succinate , Phenoxyethanol , Ethylhexylglycerin , Phytosterols , Propanediol`,
    starIngredient: 'Retinol',
    pics: [
      'assets/product-images/0222/yttp-retinal-niacinamide-serum-1.avif',
      'assets/product-images/0222/yttp-retinal-niacinamide-serum-2.avif',
      'assets/product-images/0222/yttp-retinal-niacinamide-serum-3.avif',
      'assets/product-images/0222/yttp-retinal-niacinamide-serum-4.avif',
    ],
    price: 68,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Serum',
    for: 'Face',
    availableAmount: 90,
  },
  {
    id: '0223',
    brandName: 'Youth to the People',
    productName: 'Triple Peptide Cactus Oasis Serum',
    description: `This three-in-one intensely hydrating, plumping, and firming serum instantly revitalizes dry,
     dehydrated skin and plumps the look of fine lines and wrinkles with a moisture-multiplying
      matrix of peptides, hyaluronic acid, and super replenishing cactus stem.`,
    ingredients: `Water/Aqua/Eau , Butylene Glycol , Glycerin , Pentylene Glycol , Opuntia Ficus-Indica
     Stem (Prickly Pear Cactus) Extract* , Palmitoyl Tripeptide-1 , Palmitoyl Tetrapeptide-7 , Palmitoyl
      Tripeptide-28 , Sodium Hyaluronate , Hydrolyzed Sodium Hyaluronate , Sodium Hyaluronate Crosspolymer ,
       Sodium Acetylated Hyaluronate , Synthetic Sapphire , Citrullus Lanatus (Watermelon) Fruit Extract ,
        Lens Esculenta (Lentil) Fruit Extract , Pyrus Malus (Apple) Fruit Extract , Nephelium Lappaceum Peel
         (Rambutan) Extract , Sodium Pca , Glutathione , Malachite Extract , Citric Acid , Hydroxypropyl
          Methylcellulose , Tetrasodium Glutamate Diacetate , Polyglutamic Acid , 1,2-Hexandiol , Caprylyl Glycol
           , Sodium Lactate , Carbomer , Propanediol , Polysorbate 20 , Hydroxyethylcellulose , Xanthan Gum ,
            Phenoxyethanol , Ethylhexylglycerin , Sodium Benzoate , Potassium Sorbate , Disodium Phosphate ,
             Polysorbate 60 , Benzyl Alcohol , Sodium Hydroxide , Glyceryl Caprylate , Sodium Formate ,
              Sodium Glycolate , Sodium Phosphate , Benzoic Acid`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0223/yttp-peptide-cactus-serum-1.avif',
      'assets/product-images/0223/yttp-peptide-cactus-serum-2.avif',
      'assets/product-images/0223/yttp-peptide-cactus-serum-3.avif',
      'assets/product-images/0223/yttp-peptide-cactus-serum-4.avif',
    ],
    price: 54,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Serum',
    for: 'Face',
    availableAmount: 62,
  },
  {
    id: '0224',
    brandName: 'Youth to the People',
    productName: '15% Vitamin C Caffeine Energy Serum',
    description: `Elevate your morning routine. This first-of-its-kind clinical-grade 15% vitamin C serum is boosted with clean,
     plant-derived caffeine from superleafs yerba mate and guayusa to immediately brighten, visibly reduce morning puffiness, and hydrate.`,
    ingredients: `Water/Aqua/Eau , 3-O-Ethyl Ascorbic Acid (Vitamin C) , Tetrahexyldecyl Ascorbate (Vitamin C) ,
     Propanediol , Glycerin , Pentylene Glycol , Sodium Citrate , Squalane , Triethyl Citrate , Gluconolactone ,
      Citric Acid , Polyhydroxystearic Acid , Polyglyceryl-6 Polyricinoleate , Xanthan Gum , Sodium Hyaluronate ,
       Caffeine , Magnesium Ascorbyl Phosphate (Vitamin C) , Sodium Stearoyl Glutamate , Sodium Benzoate , Lauroyl
        Lysine , Passiflora Edulis (Passionfruit) Extract , Sclerotium Gum , Lecithin , Ilex Guayusa Leaf Extract
         , Ilex Paraguariensis (Yerba Mate) Leaf Extract , Pullulan , Mannitol , Hylocereus Undatus (Dragon) Fruit
          Extract , Zingiber Officinale (Ginger) Root Oil , Calcium Gluconate , Silica , Potassium Sorbate ,
           Phenoxyethanol , Ergothioneine`,
    starIngredient: 'Vitamin C',
    pics: [
      'assets/product-images/0224/yttp-vit-c-serum-1.avif',
      'assets/product-images/0224/yttp-vit-c-serum-2.avif',
      'assets/product-images/0224/yttp-vit-c-serum-3.avif',
      'assets/product-images/0224/yttp-vit-c-serum-4.avif',
    ],
    price: 68,
    bestseller: true,
    segment: 'USA / Canada',
    category: 'Serum',
    for: 'Face',
    availableAmount: 46,
  },
  {
    id: '0225',
    brandName: 'Youth to the People',
    productName: 'Superberry Hydrate Glow Dream Oil',
    description: `This ultra-enriched, flash-absorbing face oil packed with rare super berry antioxidants that leaves skin velvety
     soft, hydrated, and glowing. Intensely hydrating prickly pear and squalane oil lock in moisture with
      the help of omega fatty acids and high levels of vitamin C.`,
    ingredients: `Helianthus Annuus (Sunflower) Seed Oil* , Dicaprylyl Carbonate , Simmondsia Chinensis (Jojoba)
     Seed Oil* , Squalane Olive , Tocopherol (Vitamin E) , Natural Fragrance , Aristotelia Chilensis (Maqui)
      Fruit Extract , Euterpe Oleracea Fruit (Acai) Extract , Lycium Barbarum (Goji) Fruit Extract ,
       Moringa Oleifera Leaf Extract , Opuntia Tuna (Prickly Pear) Flower/Stem Extract , Borago Officinalis
        (Borage) Seed Oil* , Linum Usitatissimum (Flaxseed) Seed Oil* , Oenothera Biennis (Evening Primrose)
         Oil* , Olea Europaea (Olive) Fruit Oil* , Rosa Canina (Rosehip) Fruit Oil* , Punica Granatum
          (Pomegranate) Seed Oil* , Vaccinium Macrocarpon (Cranberry) Seed Oil* , Amylcinnamyl Alcohol
           , Citral , Citronellol , Hexyl Cinnamal , Hydroxycitronellal , Limonene , Linalool`,
    starIngredient: '',
    pics: [
      'assets/product-images/0225/yttp-superberry-oil-1.avif',
      'assets/product-images/0225/yttp-superberry-oil-2.avif',
      'assets/product-images/0225/yttp-superberry-oil-3.avif',
      'assets/product-images/0225/yttp-superberry-oil-4.avif',
    ],
    price: 44,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Oil',
    for: 'Face',
    availableAmount: 12,
  },
  {
    id: '0226',
    brandName: 'Youth to the People',
    productName: 'Yerba Mate Resurfacing Energy Facial',
    description: `This dual-action microdermabrasion facial breaks down dead skin cells with active
     enzymes, papaya, and pineapple, while sustainable micro-exfoliants bamboo and diatomaceous earth
      smooth skin texture. Amplified by highly caffeinated extracts, yerba mate and guayusa, this
       two-minute facial energizes and invigorates.`,
    ingredients: `Water/Aqua/Eau , Bambusa Arundinacea (Bamboo) Stem Extract , Diatomaceous Earth ,
     Carthamus Tinctorius (Safflower) Seed Oil , Propanediol , Aloe Barbadensis (Aloe Vera) Leaf Juice ,
      Cetyl Alcohol , Glyceryl Stearate Se , Glycerin , Lactic Acid , Sodium Acrylate/Sodium Acryloyldimethyl
       Taurate Copolymer , Niacinamide , C15-19 Alkane , Ilex Paraguariensis (Yerba Mate) Leaf Extract ,
        Ilex Guayusa (Guayusa) Leaf Extract , Potassium Sorbate , Polyglyceryl-6 Laurate , Tocopherol ,
         Ethylhexylglycerin , Bromelain (Pineapple) , Sodium Phytate , Papain (Papaya) , Polyglycerin-6 ,
          Zingiber Officinale (Ginger) Root Oil , Passiflora Edulis (Passion Fruit) Extract , Xanthan Gum ,
           Curcuma Longa (Turmeric) Root Powder , Hylocereus Undatus (Dragon Fruit) Fruit Extract ,
            Sorbitan Oleate , Helianthus Annus (Sunflower) Seed Oil , Sorbitan Isostearate ,
             Phenoxyethanol , Sodium Benzoate`,
    starIngredient: 'Enzyme',
    pics: [
      'assets/product-images/0226/yttp-yerba-resurfacing-1.avif',
      'assets/product-images/0226/yttp-yerba-resurfacing-2.avif',
      'assets/product-images/0226/yttp-yerba-resurfacing-3.avif',
      'assets/product-images/0226/yttp-yerba-resurfacing-4.avif',
    ],
    price: 54,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Exfoliant',
    for: 'Face',
    availableAmount: 81,
  },
  {
    id: '0227',
    brandName: 'Youth to the People',
    productName: 'Mandelic Acid Exfoliant',
    description: `This leave-on liquid exfoliant unites three gentle acids with superfood antioxidants
     (kale, licorice root, and green tea) to clear pores, smooth texture, even tone, and support
      skin's protective barrier. It's all of the acids, none of the irritation.`,
    ingredients: `Water/Aqua/Eau , Rosmarinus Officinalis (Rosemary) Flower/Leaf/Stem Water , Mandelic Acid ,
     Ethoxydiglycol , Salicylic Acid , Rosa Damascena (Rose) Flower Water , Gluconolactone , Leuconostoc/Radish
      Root Ferment Lysate Filtrate , Aloe Barbadensis (Aloe Vera) Leaf Juice Powder , Brassica Oleracea
       Acephala (Kale) Leaf Extract , Camellia Sinensis (Green Tea) Leaf Extract , Chamomilla Recutita
        (Matricaria) Flower Extract , Medicago Sativa (Alfalfa) Leaf Extract , Spinacia Oleracea (Spinach)
         Leaf Extract , Glycyrrhiza Glabra (Licorice) Root Extract , Moringa Oleifera Leaf Extract ,
          Moringa Oleifera Seed Extract , Glucosamine Hcl , Panthenol , Glycerin , Arginine , Sodium
           Phytate , Sodium Hydroxide , Sodium Ascorbyl Phosphate , Maltodextrin , Citric Acid ,
            Potassium Sorbate , Phenoxyethanol , Lactic Acid , Sodium Benzoate`,
    starIngredient: '',
    pics: [
      'assets/product-images/0227/yttp-mandelic-exfoliant-1.avif',
      'assets/product-images/0227/yttp-mandelic-exfoliant-2.avif',
      'assets/product-images/0227/yttp-mandelic-exfoliant-3.avif',
      'assets/product-images/0227/yttp-mandelic-exfoliant-4.avif',
    ],
    price: 48,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Exfoliant',
    for: 'Face',
    availableAmount: 54,
  },
  {
    id: '0228',
    brandName: 'Youth to the People',
    productName: 'Combucha AHA Power Exfoliant',
    description: `This overnight leave-on liquid peel works to reveal brighter-looking skin and smoother-feeling
     texture, with a potent blend of 7% lactic and 3% glycolic acids. It’s non-sticky, fragrance-free, and
      boosted with hydrating agents and antioxidant-rich black tea ferment filtrate to help reveal more
       even-looking skin tone and improve the look of dark spots over time.`,
    ingredients: `Water/Aqua/Eau , Pentylene Glycol , Lactic Acid , Glycolic Acid , Propanediol ,
     Butylene Glycol , L-Arginine , Sodium Hydroxide , Betaine , Glycerin , Triethyl Citrate ,
      Saccharomyces/Xylinum/Black Tea Ferment , Pichia Ferment Lysate Filtrate , Tetrasodium Glutamate Diacetate ,
       Potassium Sorbate , Ethylhexylglycerin , Phenoxyethanol , Sodium Chloride , Sodium Carbonate`,
    starIngredient: '',
    pics: [
      'assets/product-images/0228/yttp-kombucha-exfoliant-1.avif',
      'assets/product-images/0228/yttp-kombucha-exfoliant-2.avif',
      'assets/product-images/0228/yttp-kombucha-exfoliant-3.avif',
      'assets/product-images/0228/yttp-kombucha-exfoliant-4.avif',
    ],
    price: 38,
    bestseller: true,
    segment: 'USA / Canada',
    category: 'Exfoliant',
    for: 'Face',
    availableAmount: 212,
  },
  {
    id: '0229',
    brandName: 'Youth to the People',
    productName: 'Polypeptide-121 Future Cream',
    description: `This intensely moisturizing cream with peptides, plant proteins, and ceramides replenishes
     critical moisture for up to 24 hours and helps visibly firm, reduce the look of fine lines and wrinkles,
      and strengthen the skin’s moisture barrier.`,
    ingredients: `Water/Aqua/Eau , Dicaprylyl Carbonate , Hydrolyzed Hyaluronic Acid , Trimethylolpropane
     Tricaprylate/Tricaprate , Tridecyl Trimellitate , Propanediol , Sh-Polypeptide-121 , Polyglyceryl-3
      Methylglucose Distearate , Panthenol , Niacinamide , Proline , Tocopheryl Acetate , Aloe Barbadensis
       Leaf Juice , Hydrolyzed Cannabis Sativa (Hemp) Seed Extract , Hydrolyzed Rice Protein , Hydrolyzed
        Pea Protein , Salvia Hispanica (Chia) Seed Extract , Acetyl Tetrapeptide-11 , Acetyl Tetrapeptide-9 ,
         Acetyl Tetrapeptide-2 , Hibiscus Sabdariffa Fruit Extract , Ammonium Acryloyldimethyltaurate/Beheneth-25
          Methacrylate Crosspolymer , Hydrolyzed Linseed Seed , Castor Oil/IPDI Copolymer , Ceramide AP ,
           Ceramide NP , Cetearyl Alcohol , Cetearyl Glucoside , Glycerin , Hydrolyzed Sodium Hyaluronate ,
            Coco-Caprylate/Caprate , Dilinoleic Acid/Propanediol/Pdi Crosspolymer , Benzyl Alcohol ,
             Zingiber Officinale (Ginger) Root Extract , Bisabolol , Caprylyl Glycol , Carbomer ,
              Dimethyl Isosorbide , Dipropylene Glycol , Erythritol , Ethylhexylglycerin , Glucose
               , 1,2-Hexanediol , Trisodium Ethylenediamine Disuccinate , Glyceryl Monostearate ,
                Phytospingosine , Polyacrylate Crosspolymer-6 , Polysorbate 20 , Caprylhydroxamic
                 Acid , Potassium Sorbate , Glycine , Hydroxyacetophenone , Sodium Benzoate ,
                  T-Buty Alcohol , Citric Acid , Sodium Citrate , Sodium Lactate , Triheptanoin , Xanthan Gum`,
    starIngredient: 'Peptide',
    pics: [
      'assets/product-images/0229/yttp-polypeptide-cream-1.avif',
      'assets/product-images/0229/yttp-polypeptide-cream-2.avif',
      'assets/product-images/0229/yttp-polypeptide-cream-3.avif',
      'assets/product-images/0229/yttp-polypeptide-cream-4.avif',
    ],
    price: 64,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cream',
    for: 'Face',
    availableAmount: 64,
  },
  {
    id: '0230',
    brandName: 'Youth to the People',
    productName: 'Superfood Air-Whip Moisture Cream',
    description: `This daily moisturizer is formulated with a proprietary superfood-extract blend of kale,
     spinach, and green tea to help fight free radicals, and with cross-linked hyaluronic acid to replenish
      and firm the look of the skin. It's lightweight, works well under make-up, and is never greasy. Friendly
       for all skin types, best for combo/oily.`,
    ingredients: `Water/Aqua/Eau , Helianthus Annuus (Sunflower) Seed Oil , Glyceryl Stearate , Cetyl Alcohol ,
     Glycerin , Lecithin , Butylene Glycol , Panthenol (Vitamin B5) , Sodium Hyaluronate Crosspolymer ,
      Tocopheryl Acetate (Vitamin E) , Phenoxyethanol , Ascorbic Acid (Vitamin C) , Hydroxyethylcellulose
       , Brassica Oleracea Capitata (Kale) Leaf Extract , Camellia Sinensis (Green Tea) Leaf Extract ,
        Chamomilla Recutita (Matricaria) Flower Extract , Medicago Sativa (Alfalfa) Leaf Extract ,
         Spinacia Oleracea (Spinach) Leaf Extract , Hyaluronic Acid , Potassium Sorbate , Pentylene Glycol
          , Aloe Barbadensis (Aloe Vera) Leaf Extract , Ethylhexylglycerin , Tocopherol , Sodium Acetate
           , Isopropyl Alcohol , Propylene Glycol , Cellulose , Sodium Hydroxymethylglycinate , Sodium
            Benzoate , Benzyl Benzoate , Natural Fragrance/Parfum , Citronellol , Hexyl Cinnamal ,
             Limonene , Linalool , Chlorophyll (CI 75810)`,
    starIngredient: 'Vitamin C',
    pics: [
      'assets/product-images/0230/yttp-superfood-cream-1.avif',
      'assets/product-images/0230/yttp-superfood-cream-2.avif',
      'assets/product-images/0230/yttp-superfood-cream-3.avif',
      'assets/product-images/0230/yttp-superfood-cream-4.avif',
    ],
    price: 62,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cream',
    for: 'Face',
    availableAmount: 126,
  },
  {
    id: '0231',
    brandName: 'Youth to the People',
    productName: 'Adaptogen Deep Moisture Cream',
    description: `A deeply hydrating moisturizer with superior plant extracts and a pro-grade peptide complex
     formulated for dry, reactive, and sensitive skin. This fragrance-free formula is made with an intelligent
      hydration trio of Squalane, Jojoba + Shea butter for long-lasting deep hydration that won't clog pores.`,
    ingredients: `Aqua/Water/Eau , Helianthus Annuus (Sunflower) Seed Oil , Ethylhexyl Palmitate , Propanediol
     , Glyceryl Stearate , Stearic Acid , Glycerin , Aloe Barbadensis Leaf Juice , Glyceryl Laurate , Squalane
      , Pentapeptide-59 , Withania Somnifera (Ashwagandha) Leaf Extract , Ganoderma Lucidum (Reishi Mushroom)
       Extract , Ocimum Tenuiflorum (Holy Basil) Extract , Simmondsia Chinensis (Jojoba) Seed Oil , Prunus
        Amygdalus (Sweet Almond) Dulcis Oil , Butyrospermum Parkii (Shea) Butter , Borago Officinalis
         Seed Oil , Hydrogenated Lecithin , Rhodiola Rosea Extract , Phenethyl Alcohol , Xanthan Gum ,
          Carbomer , Ethylhexylglycerin , Panthenol , Tocopherol , Maltodextrin , Phenoxyethanol ,
           Potassium Sorbate , Allantoin , Caramel`,
    starIngredient: '',
    pics: [
      'assets/product-images/0231/yttp-adaptogen-cream-1.avif',
      'assets/product-images/0231/yttp-adaptogen-cream-2.avif',
      'assets/product-images/0231/yttp-adaptogen-cream-3.avif',
      'assets/product-images/0231/yttp-adaptogen-cream-4.avif',
    ],
    price: 58,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Cream',
    for: 'Face',
    availableAmount: 113,
  },
  {
    id: '0232',
    brandName: 'Youth to the People',
    productName: 'Adaptogen Soothe Hydrate Activated Mist',
    description: `An ultra-fine mist that hydrates, calms visible redness, and evens the look of skin
     tone with antioxidant-rich adaptogens, hyaluronic acid, and soothing peptides—like a serum in a mist.`,
    ingredients: `Water/Aqua/Eau , Propanediol , Aloe Barbadensis (Aloe Vera) Leaf Juice , Pentapeptide-59 ,
     Hydrogenated Lecithin , Butyrospermum Parkii (Shea) Butter , Phenethyl Alcohol , Ethylhexylglycerin ,
      Maltodextrin , Ganoderma Lucidum (Reishi Mushroom) Extract , Xanthan Gum , Betaine , 1,2-Hexanediol ,
       Caprylyl Glycol , Potassium Sorbate , Glycerin , Withania Somnifera (Ashwagandha) Extract , Ocimum
        Tenuiflorum (Holy Basil) Extract , Rhodiola Rosea (Arctic Root) Extract , Lactic Acid , Sodium
         Hyaluronate , Phenoxyethanol , Sodium Benzoate`,
    starIngredient: '',
    pics: [
      'assets/product-images/0232/yttp-adaptogen-mist-1.avif',
      'assets/product-images/0232/yttp-adaptogen-mist-2.avif',
      'assets/product-images/0232/yttp-adaptogen-mist-3.avif',
      'assets/product-images/0232/yttp-adaptogen-mist-4.avif',
    ],
    price: 42,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Toner',
    for: 'Face',
    availableAmount: 76,
  },
  {
    id: '0233',
    brandName: 'Youth to the People',
    productName: 'Superfood Hydrate Firm Eye Cream',
    description: `Small but mighty. Introduce your eyes to the power of superfoods and science. This
     nourishing cream delivers vital nutrients with our proprietary superfood blend, peptides, and an army of restorative vitamins.`,
    ingredients: `Water/Aqua/Eau (Aqua) , Helianthus Annuus (Sunflower) Seed Oil , Stearic Acid , Glycerin , Glyceryl Stearate ,
     Cetyl Alcohol , Ascorbic Acid (Vitamin C) , Lecithin , Panthenol (Vitamin B5) , Sodium Hyaluronate Crosspolymer ,
      Tocopheryl Acetate (Vitamin E) , Phenoxyethanol , Hydroxyethylcellulose , Potassium Sorbate , Aloe Barbadensis
       (Aloe) Leaf Extract* , Brassica Oleracea Capitata (Kale) Leaf Extract* , Camellia Sinensis (Green Tea) Leaf
        Extract* , Chamomilla Recutita (Matricaria) Flower Extract* , Medicago Sativa (Alfalfa) Leaf Extract* ,
         Spinacia Oleracea (Spinach) Leaf Extract* , Natural Fragrance , Pentylene Glycol , Ethylhexylglycerin
          , Magnesium Chloride , Palmitoyl Dipeptide-5 Diaminobutyroyl Hydroxythreonine , Palmitoyl Tripeptide-5
           , Tetradecyl Aminobutyroylvalylaminobutyric Urea Trifluoroacetate , Benzyl Benzoate , Citronellol ,
            Hexyl Cinnamal , Limonene , Linalool`,
    starIngredient: 'Vitamin C',
    pics: [
      'assets/product-images/0233/yttp-firm-eye-cream-1.avif',
      'assets/product-images/0233/yttp-firm-eye-cream-2.avif',
      'assets/product-images/0233/yttp-firm-eye-cream-3.avif',
    ],
    price: 35,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Eye Cream',
    for: 'Face',
    availableAmount: 25,
  },
  {
    id: '0234',
    brandName: 'Youth to the People',
    productName: 'Superberry Dream Eye Cream',
    description: `This potent, fragrance-free overnight eye cream works to visibly smooth
     the appearance of fine lines + wrinkles, firm the look of skin, and actively hydrate while you sleep.`,
    ingredients: `Water/Aqua/Eau , Dicaprylyl Carbonate , Butyrospermum Parkii (Shea) Butter ,
     Cetearyl Alcohol , Glycerin , Squalane , Glyceryl Stearate , Avena Sativa (Oat) Bran Extract ,
      Citrus Aurantium Dulcis (Orange) Peel Extract , Moringa Oleifera Seed Oil , Opuntia Ficus-Indica
       (Prickly Pear) Seed Oil* , Lycium Barbarum (Goji) Callus Culture Extract , Gardenia Jasminoides
        (Gardenia) Fruit Extract , Sodium Stearoyl Glutamate , Carbomer , Cetearyl Glucoside , Isomalt ,
         Sodium Benzoate , Tetrahexyldecyl Ascorbate (Vitamin C) , Tocopheryl Acetate , Tetrasodium
          Glutamate Diacetate , Betaine , Ceramide NP , Phospholipids , Sodium Hyaluronate , Maltodextrin ,
           Sodium Hydroxide , Phenoxyethanol , Glucose , Lecithin , Tocopherol , Sodium Glycolate ,
            Sodium Formate , Ethylhexylglycerin , Citric Acid`,
    starIngredient: 'Ceramide',
    pics: [
      'assets/product-images/0234/yttp-suberberry-eye-cream-1.avif',
      'assets/product-images/0234/yttp-suberberry-eye-cream-2.avif',
      'assets/product-images/0234/yttp-suberberry-eye-cream-3.avif',
      'assets/product-images/0234/yttp-suberberry-eye-cream-4.avif',
    ],
    price: 48,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Eye Cream',
    for: 'Face',
    availableAmount: 37,
  },
  {
    id: '0235',
    brandName: 'Youth to the People',
    productName: 'Superberry Hydrate Glow Dream Mask',
    description: `The ultimate hydrating radiance boost. This overnight mask deeply hydrates, plumps and
     brightens with powerful, antioxidant-rich superberries and THD ascorbate, the latest clinically-proven
      form of stable Vitamin C. This formula helps to target dullness and uneven skin tone for brighter, more radiant skin.`,
    ingredients: `Water/Aqua/Eau , Glycerin , Helianthus Annuus (Sunflower) Seed Oil , Glyceryl Stearate ,
     Cetyl Alcohol , Betaine , Isopropyl Myristate , Stearic Acid , Opuntia Tuna (Prickly Pear) Extract ,
      Euterpe Oleracea (Açaí) Fruit Extract , Lycium Barbarum (Goji) Extract , Aristotelia Chilensis (Maqui)
       Fruit Extract , Moringa Oleifera Leaf Extract , Tetrahexyldecyl Ascorbate (Vitamin C) , Phenoxyethanol ,
        Glyceryl Stearyl Citrate , Tocopheryl Acetate (Vitamin E) , Glyceryl Laurate , Squalane , Carbomer ,
         Hyaluronic Acid , Allantoin , Panthenol (Vitamin B5) , Ethylhexylglycerin , Xanthan Gum , Natural
          Fragrance , Riboflavin (Vitamin B2)`,
    starIngredient: 'Vitamin C',
    pics: [
      'assets/product-images/0235/yttp-superberry-mask-1.avif',
      'assets/product-images/0235/yttp-superberry-mask-2.avif',
      'assets/product-images/0235/yttp-superberry-mask-3.avif',
      'assets/product-images/0235/yttp-superberry-mask-4.avif',
    ],
    price: 48,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Mask',
    for: 'Face',
    availableAmount: 16,
  },
  {
    id: '0236',
    brandName: 'Youth to the People',
    productName: 'Superclay Purify Mask',
    description: `Supercharged with 2% niacinamide, this triple-clay mask deep cleans and actively clears
     pores for skin that functions at its fullest potential. Boosted with exfoliating salicylic acid and
      balancing kombucha, this pro-grade purifying treatment targets the root of skin issues, evens tone,
       and absorbs excess oil that can trigger breakouts without disrupting skin's moisture barrier.`,
    ingredients: `Water/Aqua/Eau , Kaolin , Cetyl Alcohol , Propanediol , Glycerin , Glyceryl Stearate ,
     Bentonite , Niacinamide , Oryza Sativa (Rice) Starch , Stearyl Alcohol , Magnesium Aluminum Silicate ,
      Montmorillonite (French Green Clay) , Illite , Calcite , Salicylic Acid , Salix Purpurea (Red Willow) Bark Extract
       , Saccharomyces/Xylinum/Black Tea Ferment , Allantoin , Carthamus Tinctorius (Safflower) Seed Oil ,
        Phycocyanin (Blue Algae) , Aloe Barbadensis (Aloe Vera) Leaf Juice Powder , Glyceryl Acrylate/Acrylic
         Acid Copolymer , Cetearyl Olivate , Sorbitan Olivate , Triticum Aestivum (Wheatgrass) Leaf Powder ,
          Lactic Acid , Sorbitan Stearate , Caprylhydroxamic Acid , Sodium Citrate , 1,2-Hexanediol ,
           Charcoal Powder , Maltodextrin , Gardenia Florida Fruit Extract`,
    starIngredient: 'Niacinamide',
    pics: [
      'assets/product-images/0236/yttp-superclay-mask-1.avif',
      'assets/product-images/0236/yttp-superclay-mask-2.avif',
      'assets/product-images/0236/yttp-superclay-mask-3.avif',
      'assets/product-images/0236/yttp-superclay-mask-4.avif',
    ],
    price: 36,
    bestseller: false,
    segment: 'USA / Canada',
    category: 'Mask',
    for: 'Face',
    availableAmount: 49,
  },
];

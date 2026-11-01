const lieux = [
  {
    nom: "Allée des citrouilles",
    x: 28, y: 40.5,
    objets: [
      "Lampe Spectrale", "Masque Veiled Claws", "Jupe Voodoo Priestess",
      "Sous-vêtements Lost Soul", "Ceinture Stealth Crow", "Bas chauve-souris",
      "Manches Necromancer", "Robe Fortune Teller", "Haut Skel Mermaid",
      "Chapeau Démoniaque", "Haut Twisted Harpy", "Ongles pointus",
      "Bijoux Blood-Cloaked Soldier", "Flammèches",
      "Censurée", "Effroyable", "Collier Frankenstein", "Lunettes Mad Scientist",
      "Bottes Soul Sentinel"
    ]
  },
  {
    nom: "Autel démoniaque",
    x: 48.5, y: 39,
    objets: [
      "Mohmiaû", "Sucrerie Terrifiante", "Assoiffée", "Cruelle", "Cassandre",
      "Yeux d'assassin", "Collier Black Widow", "Manteau Mischievous Trickster",
      "Boucles d'oreilles Fortune Teller", "Blessures ouvertes Sweet Mourne",
      "Chaudron bouillonnant", "Oreilles pointues"
    ]
  },
  {
    nom: "Château Phœnix",
    x: 62.3, y: 24,
    objets: [
      "Ciralak", "Harpe hantée", "Bottines Sweet Mourne", "Gants Bloody Countess",
      "Boucles d'oreilles Veiled Claws", "Robe Bloody Countess",
      "Bottes Mad Scientist", "Serre-tête Rag Doll", "Yeux cousus",
      "Gants Wolf Druid", "Fond Don't be Afraid of the Dark", "Robe Soul Sentinel",
      "Collier Evil Succubus", "Capuche Stealth Crow", "Couronne Soul Sentinel",
      "Bas Blood Cloaked Soldier"
    ]
  },
  {
    nom: "Chaudron de la sorcière",
    x: 46.3, y: 66.3,
    objets: [
      "Shawbabat", "Pomme possédée", "Couronne Necromancer", "Langue de vipère", "Samara",
      "Collants Mysterious Enchantress", "Jarretière Lost Bride",
      "Robe Frankenstein", "Inari", "Cape Nightmare Chivalry",
      "Couronne de la Muerte", "Top Queen Spider", "Culotte Longue Rag Doll", "Peau Frankenstein",
      "Bâton de sauge Fortune Teller", "Haut Skeleton Witch", "Robe Mysterious Enchantress",
      "Couronne Skeleton Witch", "Voile de veuve", "Chaussures Fortune Teller"
    ]
  },
  {
    nom: "Cimetière abandonné",
    x: 43, y: 17.8,
    objets: [
        "Globulosaurus", "Hameçon brillant", "Ecarquillés", "Bustier Lost Bride",
        "Camisole Lost Soul", "Mowa", "Cape Petrifying Empress", "Corset Voodoo Priestess",
        "Haut de Magicien", "Corset Evil Baroness", "Ailes Twisted Harpy", "Haut Mysterious Enchantress",
        "Démente", "Body Blood-Cloaked Soldier", "Verre Bloody Countess", "Haut Necromancer",
        "Petit gilet Bloody Countess", "Pantalon Twisted Harpy", "Monocle Soul Sentinel",
        "Masque Mysterious Enchantress", "Bottes Nightmare Chivalry"
    ]
  },
  {
    nom: "Fissures de lave",
    x: 91.4, y: 58.4,
    objets: [
        "Bakhrahell", "Bézoard", "Candy Corn", "Chaussures Skeleton Witch", "Tatouage Basilic",
        "Pantalon Veiled Claws", "Yeux de vampire", "Voile Mysterious Enchantress",
        "Loptr", "Ceinture Twisted Harpy", "Bas chauve-souris", "Sibylle", "Noeud Rag Doll", "Spectre Spirit Away",
        "Lena", "Familiers Skel Mermaid", "Couronne Skel Mermaid", "Masque Stealth Crow"
    ]
  },
  {
    nom: "Forêt de ronces",
    x: 34.3, y: 31,
    objets: [
        "Osstoplasm", "Gemme Sanguine", "Morgane", "Couronne tranchante", "Parure Voodoo Priestess",
        "Gants Blood-Cloaked Soldier", "Bras Skeleton Witch", "Sourire d'ange", "Sceptre Necromancer",
        "Bottes Bloody Countess", "Ceinture Bloody Countess", "Cornes Evil Baroness", 
        "Boucles d’oreilles aux crânes", "Tablier Rag Doll", "Bijoux Petrifying Empress", "Coiffe Harpie",
        "Masque Nightmare Chivalry", "Réunion des citrouilles", "Vernis Sweet Mourne", "Bottes Mischievous Trickster", 
        "Chapeau vivant", "Robe Rag Doll", "Kimono Spirited Away"
    ]
  },
  {
    nom: "Forêt désenchantée",
    x: 37.6, y: 66.9,
    objets: [
        "Peau Skel Mermaid", "Candy corn", "Maléfice Veiled Claws", "Eclairs Mad Scientist", "Collier Mysterious Enchantress",
        "Chaussettes Queen Spider", "Bouche Twisted Harpy", "Augustine", "Laure", "Fond Campfire", "Fond Witch's Cauldron",
        "Robe Sweet Mourne", "Pantalon Stealth Crow"
    ]
  },
  {
    nom: "Manoir du laborantin",
    x: 17.9, y: 17.9,
    objets: [
        "Spadel", "Candy corn", "Yeux Nightmare Chivalry", "Bagues Fortune Teller", "Peau Spectrale",
        "Manteau Blood-Cloaked Soldier", "Fleurs Mortifères", "Body Skeleton Witch",
        "Ancre Skel Mermaid", "Chaussettes Mad Scientist", "Fran", "Peau de la Muerte", "Body Evil Succubus",
        "Sceptre Mischievous Trickster", "Pipe Veiled Claws", "Collier Evil Baroness", "Collier Sweet Mourne",
        "Jupe Lost Bride", "Short en cuir usé", "Jupe de magicien", "Short citrouille", "Ceinture Nightmare Chivalry",
        "Pattes Wolf Druid", "Chaussures Black Widow", "Gants Nightmare Chivalry"
    ]
  },
  {
    nom: "Village des damnés",
    x: 20, y: 56,
    objets: [
        "Hydracarys", "Pomme possédée", "Chaussettes Rag Doll", "Fond Ghost ship", "Bas Lost Soul",
        "Bas Black Widow", "Yeux Rag Doll", "Bas Evil Baroness", "Bas Sweet Mourne",
        "Naia", "Athamé Fortune Teller", "Plumes Twisted Harpy", "Gants Twisted Harpy", 
        "Peau Naga", "Croix à l'abandon", "Ailes Evil Succubus", "Peluche Rag Doll",
        "Épée Stealth Crow", "Cape Stealth Crow", "Oreilles Skel Mermaid",
        "Boucles d'oreilles double vue", "Invité Indésirable"
    ]
  },
  {
    nom: "Opéra d'Odessa",
    x: 18.4, y: 84.4,
    objets: [
        "Kreafire", "Soie radioactive", "Jupe Necromancer", "Robe Wolf Druid", "Épée Queen Spider", 
        "Bandeau Fortune Teller", "Sous vêtements Sweet Mourne", "Bougies en lévitation", 
        "Armure Wolf Druid", "Tatoo Voodoo Priestess", "Collier au crâne", "Yeux de Démon",
        "Yeux vides en larmes", "Body vertigineux", "Epaulière Stealth Crow",
        "Pantalon Mischievous Trickster", "Chaussures Petrifying Empress"
    ]
  },
  {
    nom: "Île des poupées",
    x: 44.7, y: 91.6,
    objets: [
        "Bhemoth", "Bakhrahell", "Plaid patchwork", "Annabelle", "Chapeau Munak", "Naomie", 
        "Bas Twisted Harpy", "Casque Mischievous Trickster", "Cernes Sweet Mourne", 
        "Voile Lost Bride", "Epée Nightmare Chevalry", "Ombre Rag Doll", "Bracelets Frankenstein", 
        "Manteau d'aventurier imprudent", "Ceinture Spirited Away", "Manteau Fortune Teller",
        "Cartes Fortune Teller", "Sceptre Evil Baroness", "Gants Mischievous Trickster",
        "Ailes Skeleton Witch", "Corset Bloody Countess", "Sandales Lost Bride",
        "Bottes Stealth Crow"
    ]
  },
  {
    nom: "Bateau fantôme",
    x: 64.2, y: 73.3,
    objets: [
        "Pirnomnom", "Souris en tissu", "Collier Fortune Teller", "Casque Queen Spider", 
        "Ceinture d'alchimiste", "Sous vêtements à ornements", "Eclaboussures Lost Bride", 
        "Attaches en cuir Frankenstein", "Haut Veiled Claws", "Chaussures Rag Doll", "Faux Ghost Hunter",
        "Fiole d'âme empoisonnée", "Pèlerine en plumes", "Plumes visage Twisted Harpy", "Cape tachée de sang"
    ]
  },
  {
    nom: "Arbre du pendu",
    x: 59.3, y: 91,
    objets: [
        "Pelote de bandelettes", "Robe Black Widow", "Sceptre Soul Sentinel",
        "Top Mischievous Trickster", "Griffes Twisted Harpy", "Haut Voodoo Priestess", 
        "Cornes Necromancer", "Bandages Momies", "Peau Rag Doll", "Fond This is Halloween",
        "Robe Nightmare Chivalry", "Chapeau Voodoo Priestess", "Masque Voodoo Priestess",
        "Bottines Mysterious Enchantress"
    ]
  },
  {
    nom: "Puits des esprits",
    x: 81.5, y: 76.3,
    objets: [
        "Ptérocorvus", "Sucrerie Terrifiante", "Ailes Twisted Harpy", "Démente", "Ceinture Veiled Claws", "Adella", 
        "Maquillage Skel Mermaid", "Masque Spirited Away", "Ras de cou gothique", "Haut Mad Scientist", 
        "Voile Necromancer", "Faux Skeleton Witch", "Ronces envahissantes", "Gants Mad Scientist",
        "Cape Veiled Claws", "Bas Skeleton Witch", "Bottes Blood Cloaked Soldier"
    ]
  },
  {
    nom: "Labyrinthe des âmes perdues",
    x: 86, y: 31.2,
    objets: [
        "Gilet de Magicien", "Rune hantée", "Gants Sweet Mourne", "Bathory", "Ceinture Skeleton Witch", 
        "Pantalon Lost Soul", "Sceptre Skel Mermaid", "Cache oeil Lost Soul", "Pantalon Mad Scientist",
        "Mary", "Sceptre Mysterious Enchantress", "Plastron Nightmare Chivalry", "Top Stealth Crow",
        "Epaulières Petrifying Empress", "Oeil Spirited Away", "Queue Evil Baroness"
    ]
  },
  {
    nom: "Pyramide piégée",
    x: 84, y: 15.9,
    objets: [
        "Chead", "Ame de scolopendre", "Cape Fortune Teller", "Ceinture Mischievous Trickster", 
        "Mascara de la Muerte", "Talisman", "Robe cimetière", "Corset en toile d’araignée", 
        "Robe Evil Baroness", "Yeux vides", "Gants Lost Soul", "Collants Soul Sentinel", 
        "Body Veiled Claws", "Sabots Evil Baroness", "Griffes Wolf Druid", "Peau spectrale lumineuse",
        "Robe Petrifying Empress", "Cape Mad Scientist", "Cape Mischievous Trickster", "Fourrure Soul Sentinel",
        "Bois démoniaques", "Coiffe Wolf Druid", "Bottes Veiled Claws", "Chaussures de magicien"
    ]
  }
];
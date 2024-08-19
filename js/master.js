const DATA_LAST_UPDATED = new Date('2024-08-18');
const DATA_ITEMS = {
    '4-leaf-clover': {
        'name': '4-leaf Clover',
        'category': 'Common'
    },
    'amethyst': {
        'name': 'Amethyst',
        'category': 'Gems'
    },
    'ancient-coin': {
        'name': 'Ancient Coin',
        'category': 'Uncommon'
    },
    'antler': {
        'name': 'Antler',
        'category': 'Forest'
    },
    'apple': {
        'name': 'Apple',
        'category': 'Common'
    },
    'apple-cider': {
        'name': 'Apple Cider',
        'category': 'Craftable'
    },
    'aquamarine': {
        'name': 'Aquamarine',
        'category': 'Gems'
    },
    'arrowhead': {
        'name': 'Arrowhead',
        'category': 'Forest'
    },
    'bacon': {
        'name': 'Bacon',
        'category': 'Very Rare'
    },
    'bell': {
        'name': 'Bell',
        'category': 'Uncommon'
    },
    'belt-drive': {
        'name': 'Belt Drive',
        'category': 'Craftable'
    },
    'bird-egg': {
        'name': 'Bird Egg',
        'category': 'Forest'
    },
    'block-of-wood': {
        'name': 'Block of Wood',
        'category': 'Wood'
    },
    'blue-purse': {
        'name': 'Blue Purse',
        'category': 'Craftable'
    },
    'broccoli': {
        'name': 'Broccoli',
        'category': 'Crops'
    },
    'candy': {
        'name': 'Candy',
        'category': 'Halloween'
    },
    'candy-corn': {
        'name': 'Candy Corn',
        'category': 'Halloween'
    },
    'canoe': {
        'name': 'Canoe',
        'category': 'Craftable'
    },
    'captains-log': {
        'name': 'Captains Log',
        'category': 'Pirate'
    },
    'carved-bear': {
        'name': 'Carved Bear',
        'category': 'Wood'
    },
    'carved-camel': {
        'name': 'Carved Camel',
        'category': 'Wood'
    },
    'carved-chicken': {
        'name': 'Carved Chicken',
        'category': 'Wood'
    },
    'carved-cow': {
        'name': 'Carved Cow',
        'category': 'Wood'
    },
    'carved-dragon': {
        'name': 'Carved Dragon',
        'category': 'Wood'
    },
    'carved-fox': {
        'name': 'Carved Fox',
        'category': 'Wood'
    },
    'carved-kitty': {
        'name': 'Carved Kitty',
        'category': 'Wood'
    },
    'carved-moose': {
        'name': 'Carved Moose',
        'category': 'Wood'
    },
    'carved-mouse': {
        'name': 'Carved Mouse',
        'category': 'Wood'
    },
    'carved-owl': {
        'name': 'Carved Owl',
        'category': 'Wood'
    },
    'carved-pig': {
        'name': 'Carved Pig',
        'category': 'Wood'
    },
    'carved-rabbit': {
        'name': 'Carved Rabbit',
        'category': 'Wood'
    },
    'carved-rhino': {
        'name': 'Carved Rhino',
        'category': 'Wood'
    },
    'carved-squirrel': {
        'name': 'Carved Squirrel',
        'category': 'Wood'
    },
    'carved-squisquatch': {
        'name': 'Carved Squisquatch',
        'category': 'Wood'
    },
    'carved-warthog': {
        'name': 'Carved Warthog',
        'category': 'Wood'
    },
    'caterpillar': {
        'name': 'Caterpillar',
        'category': 'Bugs'
    },
    'chattering-teeth': {
        'name': 'Chattering Teeth',
        'category': 'Halloween'
    },
    'chum': {
        'name': 'Chum',
        'category': 'Craftable'
    },
    'coal': {
        'name': 'Coal',
        'category': 'Common'
    },
    'cogwheel': {
        'name': 'Cogwheel',
        'category': 'Uncommon'
    },
    'compass': {
        'name': 'Compass',
        'category': 'Very Rare'
    },
    'corn': {
        'name': 'Corn',
        'category': 'Crops'
    },
    'crab-claw': {
        'name': 'Crab Claw',
        'category': 'Uncommon'
    },
    'cutlass': {
        'name': 'Cutlass',
        'category': 'Very Rare'
    },
    'dancer': {
        'name': 'Dancer',
        'category': 'Christmas'
    },
    'dice': {
        'name': 'Dice',
        'category': 'Uncommon'
    },
    'dragonfly': {
        'name': 'Dragonfly',
        'category': 'Bugs'
    },
    'egg-02': {
        'name': 'Egg 02',
        'category': 'Easter'
    },
    'egyptian-necklace': {
        'name': 'Egyptian Necklace',
        'category': 'Halloween'
    },
    'emberstone': {
        'name': 'Emberstone',
        'category': 'Common'
    },
    'emerald': {
        'name': 'Emerald',
        'category': 'Gems'
    },
    'energy-coil': {
        'name': 'Energy Coil',
        'category': 'Craftable'
    },
    'essence-of-slime': {
        'name': 'Essence of Slime',
        'category': 'Craftable'
    },
    'eye-patch': {
        'name': 'Eye Patch',
        'category': 'Pirate'
    },
    'fancy-box': {
        'name': 'Fancy Box',
        'category': 'Rare'
    },
    'fancy-drum': {
        'name': 'Fancy Drum',
        'category': 'Craftable'
    },
    'fancy-guitar': {
        'name': 'Fancy Guitar',
        'category': 'Craftable'
    },
    'fancy-pipe': {
        'name': 'Fancy Pipe',
        'category': 'Craftable'
    },
    'fire-ant': {
        'name': 'Fire Ant',
        'category': 'Bugs'
    },
    'flamejack': {
        'name': 'Flamejack',
        'category': 'Fish'
    },
    'freaky-picture': {
        'name': 'Freaky Picture',
        'category': 'Uncommon'
    },
    'frog': {
        'name': 'Frog',
        'category': 'Uncommon'
    },
    'giant-centipede': {
        'name': 'Giant Centipede',
        'category': 'Bugs'
    },
    'glass-bottle': {
        'name': 'Glass Bottle',
        'category': 'Common'
    },
    'gold-carrot': {
        'name': 'Gold Carrot',
        'category': 'Gold Crops'
    },
    'gold-catfish': {
        'name': 'Gold Catfish',
        'category': 'Gold Fish'
    },
    'gold-coral': {
        'name': 'Gold Coral',
        'category': 'Gold Fish'
    },
    'gold-cucumber': {
        'name': 'Gold Cucumber',
        'category': 'Gold Crops'
    },
    'gold-drum': {
        'name': 'Gold Drum',
        'category': 'Gold Crops'
    },
    'gold-eggplant': {
        'name': 'Gold Eggplant',
        'category': 'Gold Crops'
    },
    'gold-feather': {
        'name': 'Gold Feather',
        'category': 'Rare'
    },
    'gold-flier': {
        'name': 'Gold Flier',
        'category': 'Gold Fish'
    },
    'gold-leaf': {
        'name': 'Gold Leaf',
        'category': 'Rare'
    },
    'gold-peas': {
        'name': 'Gold Peas',
        'category': 'Gold Crops'
    },
    'gold-peppers': {
        'name': 'Gold Peppers',
        'category': 'Gold Crops'
    },
    'gold-sea-bass': {
        'name': 'Gold Sea Bass',
        'category': 'Gold Fish'
    },
    'gold-trout': {
        'name': 'Gold Trout',
        'category': 'Gold Fish'
    },
    'goldfin': {
        'name': 'Goldfin',
        'category': 'Gold Fish'
    },
    'goldfish': {
        'name': 'Goldfish',
        'category': 'Pet Collectable'
    },
    'goldgill': {
        'name': 'Goldgill',
        'category': 'Gold Fish'
    },
    'goldjack': {
        'name': 'Goldjack',
        'category': 'Gold Fish'
    },
    'goldray': {
        'name': 'Goldray',
        'category': 'Gold Fish'
    },
    'gouda': {
        'name': 'Gouda',
        'category': 'Halloween'
    },
    'grab-bag-02': {
        'name': 'Grab Bag 02',
        'category': 'Locksmith'
    },
    'grab-bag-07': {
        'name': 'Grab Bag 07',
        'category': 'Gold Fish'
    },
    'grasshopper': {
        'name': 'Grasshopper',
        'category': 'Bugs'
    },
    'green-jellyfish': {
        'name': 'Green Jellyfish',
        'category': 'Fish'
    },
    'herbs': {
        'name': 'Herbs',
        'category': 'Very Rare'
    },
    'holiday-wreath': {
        'name': 'Holiday Wreath',
        'category': 'Christmas'
    },
    'honey': {
        'name': 'Honey',
        'category': 'L6 Pet'
    },
    'horn': {
        'name': 'Horn',
        'category': 'Forest'
    },
    'horned-beetle': {
        'name': 'Horned Beetle',
        'category': 'Bugs'
    },
    'iced-tea': {
        'name': 'Iced Tea',
        'category': 'Rare'
    },
    'jack-o-lantern': {
        'name': 'Jack-o-lantern',
        'category': 'Halloween'
    },
    'jade': {
        'name': 'Jade',
        'category': 'Gems'
    },
    'large-chest-01': {
        'name': 'Large Chest 01',
        'category': 'Locksmith'
    },
    'large-chest-02': {
        'name': 'Large Chest 02',
        'category': 'Locksmith'
    },
    'lemon-quartz': {
        'name': 'Lemon Quartz',
        'category': 'Gems'
    },
    'lemonade': {
        'name': 'Lemonade',
        'category': 'Craftable'
    },
    'lollipop': {
        'name': 'Lollipop',
        'category': 'Halloween'
    },
    'machine-press': {
        'name': 'Machine Press',
        'category': 'Craftable'
    },
    'magicite': {
        'name': 'Magicite',
        'category': 'Uncommon'
    },
    'magna-core': {
        'name': 'Magna Core',
        'category': 'Very Rare'
    },
    'magna-quartz': {
        'name': 'Magna Quartz',
        'category': 'Rare'
    },
    'metal-spool': {
        'name': 'Metal Spool',
        'category': 'Craftable'
    },
    'miab': {
        'name': 'MIAB',
        'category': 'Uncommon'
    },
    'milk-and-cookies': {
        'name': 'Milk and Cookies',
        'category': 'Christmas'
    },
    'monster-skull': {
        'name': 'Monster Skull',
        'category': 'Uncommon'
    },
    'moonstone': {
        'name': 'Moonstone',
        'category': 'Uncommon'
    },
    'mug-of-beer': {
        'name': 'Mug of Beer',
        'category': 'Very Rare'
    },
    'mushroom-paste': {
        'name': 'Mushroom Paste',
        'category': 'Craftable'
    },
    'octopus': {
        'name': 'Octopus',
        'category': 'Uncommon'
    },
    'old-boot': {
        'name': 'Old Boot',
        'category': 'Common'
    },
    'onyx-scorpion': {
        'name': 'Onyx Scorpion',
        'category': 'Uncommon'
    },
    'orange-gecko': {
        'name': 'Orange Gecko',
        'category': 'Rare'
    },
    'orange-juice': {
        'name': 'Orange Juice',
        'category': 'Craftable'
    },
    'pine-cone': {
        'name': 'Pine Cone',
        'category': 'Forest'
    },
    'pirate-bandana': {
        'name': 'Pirate Bandana',
        'category': 'Pirate'
    },
    'pirate-flag': {
        'name': 'Pirate Flag',
        'category': 'Pirate'
    },
    'pocket-watch': {
        'name': 'Pocket Watch',
        'category': 'Uncommon'
    },
    'popcorn': {
        'name': 'Popcorn',
        'category': 'Rare'
    },
    'prism-shard': {
        'name': 'Prism Shard',
        'category': 'Common'
    },
    'purple-bag': {
        'name': 'Purple Bag',
        'category': 'Craftable'
    },
    'red-dye': {
        'name': 'Red Dye',
        'category': 'Craftable'
    },
    'red-shield': {
        'name': 'Red Shield',
        'category': 'Craftable'
    },
    'roas': {
        'name': 'R.O.A.S.',
        'category': 'Halloween'
    },
    'rubber-duckie': {
        'name': 'Rubber Duckie',
        'category': 'Very Rare'
    },
    'ruby': {
        'name': 'Ruby',
        'category': 'Gems'
    },
    'runestone-01': {
        'name': 'Runestone 01',
        'category': 'Runestones'
    },
    'runestone-02': {
        'name': 'Runestone 02',
        'category': 'Runestones'
    },
    'runestone-03': {
        'name': 'Runestone 03',
        'category': 'Runestones'
    },
    'runestone-04': {
        'name': 'Runestone 04',
        'category': 'Runestones'
    },
    'runestone-05': {
        'name': 'Runestone 05',
        'category': 'Runestones'
    },
    'runestone-06': {
        'name': 'Runestone 06',
        'category': 'Runestones'
    },
    'runestone-07': {
        'name': 'Runestone 07',
        'category': 'Runestones'
    },
    'runestone-08': {
        'name': 'Runestone 08',
        'category': 'Runestones'
    },
    'runestone-09': {
        'name': 'Runestone 09',
        'category': 'Runestones'
    },
    'runestone-10': {
        'name': 'Runestone 10',
        'category': 'Runestones'
    },
    'salt': {
        'name': 'Salt',
        'category': 'Uncommon'
    },
    'sea-dragon': {
        'name': 'Sea Dragon',
        'category': 'Uncommon'
    },
    'sealed-letter': {
        'name': 'Sealed Letter',
        'category': 'Pirate'
    },
    'shark-tooth': {
        'name': 'Shark Tooth',
        'category': 'Very Rare'
    },
    'shiny-beetle': {
        'name': 'Shiny Beetle',
        'category': 'Bugs'
    },
    'small-flute': {
        'name': 'Small Flute',
        'category': 'Wood'
    },
    'small-gear': {
        'name': 'Small Gear',
        'category': 'Uncommon'
    },
    'small-key': {
        'name': 'Small Key',
        'category': 'Locksmith'
    },
    'small-screw': {
        'name': 'Small Screw',
        'category': 'Uncommon'
    },
    'small-spring': {
        'name': 'Small Spring',
        'category': 'Uncommon'
    },
    'snail': {
        'name': 'Snail',
        'category': 'Bugs'
    },
    'spectacles': {
        'name': 'Spectacles',
        'category': 'Uncommon'
    },
    'spider': {
        'name': 'Spider',
        'category': 'Halloween'
    },
    'spiked-shell': {
        'name': 'Spiked Shell',
        'category': 'Uncommon'
    },
    'spool-of-copper': {
        'name': 'Spool of Copper',
        'category': 'Craftable'
    },
    'spoon': {
        'name': 'Spoon',
        'category': 'Craftable'
    },
    'square-key': {
        'name': 'Square Key',
        'category': 'Locksmith'
    },
    'steel-plate': {
        'name': 'Steel Plate',
        'category': 'Craftable'
    },
    'stone': {
        'name': 'Stone',
        'category': 'Common'
    },
    'strange-letter': {
        'name': 'Strange Letter',
        'category': 'Uncommon'
    },
    'sturdy-bow': {
        'name': 'Sturdy Bow',
        'category': 'Craftable'
    },
    'taffy': {
        'name': 'Taffy',
        'category': 'Halloween'
    },
    'teapot': {
        'name': 'Teapot',
        'category': 'Uncommon'
    },
    'treasure-chest': {
        'name': 'Treasure Chest',
        'category': 'Craftable'
    },
    'treasure-key': {
        'name': 'Treasure Key',
        'category': 'Locksmith'
    },
    'treat-bag-01': {
        'name': 'Treat Bag 01',
        'category': 'Halloween'
    },
    'treat-bag-02': {
        'name': 'Treat Bag 02',
        'category': 'Halloween'
    },
    'treat-bag-03': {
        'name': 'Treat Bag 03',
        'category': 'Halloween'
    },
    'vixen': {
        'name': 'Vixen',
        'category': 'Christmas'
    },
    'water-lily': {
        'name': 'Water Lily',
        'category': 'Fishing'
    },
    'wax-candle': {
        'name': 'Wax Candle',
        'category': 'Halloween '
    },
    'witch-hat': {
        'name': 'Witch Hat',
        'category': 'Halloween'
    },
    'wizard-hat': {
        'name': 'Wizard Hat',
        'category': 'Uncommon'
    },
    'wooden-bow': {
        'name': 'Wooden Bow',
        'category': 'Craftable'
    },
    'wooden-box': {
        'name': 'Wooden Box',
        'category': 'Craftable'
    },
    'wooden-mask': {
        'name': 'Wooden Mask',
        'category': 'Wood'
    },
    'wooden-pipe': {
        'name': 'Wooden Pipe',
        'category': 'Wood'
    },
    'wrench': {
        'name': 'Wrench',
        'category': 'Craftable'
    }
};
const DATA_ITEM_DROPS = {
    '4-leaf-clover': {
        'miab': '33%',
        'small-flute': '33%',
        'wooden-mask': '33%'
    },
    'ancient-coin': {
        'captains-log': '8%',
        'cogwheel': '8%',
        'eye-patch': '8%',
        'freaky-picture': '8%',
        'giant-centipede': '8%',
        'octopus': '8%',
        'shiny-beetle': '8%',
        'small-gear': '8%',
        'small-screw': '8%',
        'snail': '8%',
        'wax-candle': '8%',
        'orange-gecko': '8%'
    },
    'antler': {
        'arrowhead': '33%',
        'bird-egg': '33%',
        'pine-cone': '33%'
    },
    'apple-cider': {
        'iced-tea': '33%',
        'lemonade': '33%',
        'orange-juice': '33%'
    },
    'aquamarine': {
        'amethyst': '25%',
        'emerald': '25%',
        'lemon-quartz': '25%',
        'ruby': '25%'
    },
    'bacon': {
        'gold-feather': '33%',
        'gold-leaf': '33%',
        'magicite': '33%'
    },
    'belt-drive': {
        'energy-coil': '33%',
        'metal-spool': '33%',
        'spool-of-copper': '33%'
    },
    'block-of-wood': {
        'carved-bear': '6%',
        'carved-camel': '6%',
        'carved-chicken': '6%',
        'carved-cow': '6%',
        'carved-dragon': '6%',
        'carved-fox': '6%',
        'carved-kitty': '6%',
        'carved-moose': '6%',
        'carved-mouse': '6%',
        'carved-owl': '6%',
        'carved-pig': '6%',
        'carved-rabbit': '6%',
        'carved-rhino': '6%',
        'carved-squirrel': '6%',
        'carved-squisquatch': '6%',
        'carved-warthog': '6%'
    },
    'candy': {
        'apple': '25%',
        'lollipop': '25%',
        'spider': '25%',
        'taffy': '25%'
    },
    'candy-corn': {
        'egyptian-necklace': '33%',
        'roas': '33%',
        'taffy': '33%'
    },
    'captains-log': {
        'eye-patch': '25%',
        'moonstone': '25%',
        'pirate-flag': '25%',
        'strange-letter': '25%'
    },
    'carved-bear': {
        'carved-cow': '25%',
        'carved-fox': '25%',
        'carved-moose': '25%',
        'carved-rhino': '25%'
    },
    'carved-owl': {
        'carved-camel': '33%',
        'carved-rhino': '33%',
        'carved-warthog': '33%'
    },
    'carved-rabbit': {
        'carved-kitty': '25%',
        'carved-mouse': '25%',
        'carved-owl': '25%',
        'carved-warthog': '25%'
    },
    'carved-warthog': {
        'carved-moose': '25%',
        'carved-rabbit': '25%',
        'carved-squirrel': '25%',
        'carved-squisquatch': '25%'
    },
    'caterpillar': {
        'fire-ant': '25%',
        'giant-centipede': '25%',
        'shiny-beetle': '25%',
        'runestone-09': '25%'
    },
    'chattering-teeth': {
        'candy': '20%',
        'lollipop': '20%',
        'treat-bag-01': '20%',
        'witch-hat': '20%',
        'taffy': '20%'
    },
    'cogwheel': {
        'pocket-watch': '25%',
        'small-flute': '25%',
        'small-screw': '25%',
        'wooden-mask': '25%'
    },
    'compass': {
        'magna-core': '100%'
    },
    'crab-claw': {
        'orange-gecko': '33%',
        'sea-dragon': '33%',
        'frog': '33%'
    },
    'cutlass': {
        'mug-of-beer': '33%',
        'rubber-duckie': '33%',
        'shark-tooth': '33%'
    },
    'dice': {
        'small-flute': '25%',
        'spectacles': '25%',
        'teapot': '25%',
        'bacon': '25%'
    },
    'dragonfly': {
        'coal': '33%',
        'egg-02': '33%',
        'stone': '33%'
    },
    'essence-of-slime': {
        'wooden-bow': '50%',
        'chum': '50%'
    },
    'eye-patch': {
        'moonstone': '25%',
        'runestone-01': '25%',
        'runestone-02': '25%',
        'spectacles': '25%'
    },
    'fire-ant': {
        'caterpillar': '25%',
        'giant-centipede': '25%',
        'horned-beetle': '25%',
        'runestone-08': '25%'
    },
    'freaky-picture': {
        'small-gear': '25%',
        'small-spring': '25%',
        'teapot': '25%',
        'pirate-flag': '25%'
    },
    'frog': {
        'sea-dragon': '33%',
        'orange-gecko': '33%',
        'crab-claw': '33%'
    },
    'giant-centipede': {
        'horned-beetle': '25%',
        'runestone-07': '25%',
        'shiny-beetle': '25%',
        'snail': '25%'
    },
    'gold-carrot': {
        'gold-cucumber': '25%',
        'gold-eggplant': '25%',
        'gold-peas': '25%',
        'strange-letter': '25%'
    },
    'gold-catfish': {
        'goldgill': '33%',
        'goldjack': '33%',
        'wooden-bow': '33%'
    },
    'gold-coral': {
        'sturdy-bow': '50%',
        'goldfin': '50%'
    },
    'gold-cucumber': {
        'bacon': '33%',
        'gold-carrot': '33%',
        'gold-eggplant': '33%'
    },
    'gold-drum': {
        'gold-trout': '33%',
        'gold-catfish': '33%',
        'sturdy-bow': '33%'
    },
    'gold-eggplant': {
        'gold-leaf': '25%',
        'gold-carrot': '25%',
        'gold-peas': '25%',
        'bacon': '25%'
    },
    'gold-feather': {
        'bacon': '33%',
        'gold-leaf': '33%',
        'runestone-05': '33%'
    },
    'gold-flier': {
        'gold-sea-bass': '33%',
        'goldgill': '33%',
        'gold-catfish': '33%'
    },
    'gold-leaf': {
        'gold-feather': '33%',
        'magicite': '33%',
        'runestone-07': '33%'
    },
    'gold-peas': {
        'gold-cucumber': '25%',
        'gold-eggplant': '25%',
        'gold-peppers': '25%',
        'gold-feather': '25%'
    },
    'gold-peppers': {
        'gold-carrot': '20%',
        'gold-cucumber': '20%',
        'gold-eggplant': '20%',
        'gold-peas': '20%',
        'runestone-01': '20%'
    },
    'gold-sea-bass': {
        'goldfin': '33%',
        'gold-flier': '33%',
        'gold-coral': '33%'
    },
    'gold-trout': {
        'goldgill': '33%',
        'goldray': '33%',
        'gold-flier': '33%'
    },
    'goldfin': {
        'goldjack': '33%',
        'gold-trout': '33%',
        'gold-catfish': '33%'
    },
    'goldgill': {
        'goldjack': '33%',
        'gold-catfish': '33%',
        'goldfin': '33%'
    },
    'goldjack': {
        'goldgill': '33%',
        'goldray': '33%',
        'gold-sea-bass': '33%'
    },
    'goldray': {
        'gold-drum': '33%',
        'gold-flier': '33%',
        'gold-trout': '33%'
    },
    'gouda': {
        'candy-corn': '33%',
        'chattering-teeth': '33%',
        'wax-candle': '33%'
    },
    'grasshopper': {
        'bell': '50%',
        'spider': '50%'
    },
    'herbs': {
        'honey': '17%',
        'green-jellyfish': '17%',
        'flamejack': '17%',
        'octopus': '17%',
        'gold-sea-bass': '17%',
        'corn': '17%'
    },
    'horned-beetle': {
        'giant-centipede': '25%',
        'fire-ant': '25%',
        'runestone-06': '25%',
        'shiny-beetle': '25%'
    },
    'jack-o-lantern': {
        'candy-corn': '33%',
        'goldfish': '33%',
        'spider': '33%'
    },
    'jade': {
        'amethyst': '25%',
        'aquamarine': '25%',
        'emberstone': '25%',
        'ruby': '25%'
    },
    'large-chest-01': {
        'treasure-key': '33%',
        'square-key': '33%',
        'small-key': '33%'
    },
    'large-chest-02': {
        'treasure-key': '33%',
        'square-key': '33%',
        'small-key': '33%'
    },
    'lollipop': {
        'candy': '33%',
        'spider': '33%',
        'taffy': '33%'
    },
    'magicite': {
        'gold-leaf': '25%',
        'runestone-01': '25%',
        'runestone-02': '25%',
        'strange-letter': '25%'
    },
    'milk-and-cookies': {
        'dancer': '25%',
        'vixen': '25%',
        'holiday-wreath': '25%',
        'grab-bag-07': '25%'
    },
    'moonstone': {
        'runestone-01': '25%',
        'runestone-02': '25%',
        'runestone-07': '25%',
        'strange-letter': '25%'
    },
    'old-boot': {
        '4-leaf-clover': '33%',
        'ancient-coin': '33%',
        'glass-bottle': '33%'
    },
    'orange-gecko': {
        'frog': '33%',
        'crab-claw': '33%',
        'sea-dragon': '33%'
    },
    'pine-cone': {
        'antler': '33%',
        'horn': '33%',
        'prism-shard': '33%'
    },
    'pirate-bandana': {
        'captains-log': '25%',
        'carved-bear': '25%',
        'eye-patch': '25%',
        'pirate-flag': '25%'
    },
    'pirate-flag': {
        'sealed-letter': '25%',
        'small-gear': '25%',
        'small-flute': '25%',
        'spectacles': '25%'
    },
    'pocket-watch': {
        'cogwheel': '33%',
        'pirate-bandana': '33%',
        'wooden-mask': '33%'
    },
    'red-dye': {
        'blue-purse': '33%',
        'purple-bag': '33%',
        'red-shield': '33%'
    },
    'roas': {
        'candy-corn': '33%',
        'square-key': '33%',
        'taffy': '33%'
    },
    'runestone-01': {
        'moonstone': '33%',
        'runestone-02': '33%',
        'strange-letter': '33%'
    },
    'runestone-02': {
        'magicite': '25%',
        'magna-quartz': '25%',
        'runestone-01': '25%',
        'runestone-03': '25%'
    },
    'runestone-03': {
        'moonstone': '33%',
        'runestone-04': '33%',
        'runestone-05': '33%'
    },
    'runestone-04': {
        'gold-leaf': '33%',
        'gold-feather': '33%',
        'runestone-03': '33%'
    },
    'runestone-05': {
        'magicite': '25%',
        'magna-quartz': '25%',
        'runestone-04': '25%',
        'runestone-06': '25%'
    },
    'runestone-06': {
        'gold-feather': '25%',
        'gold-leaf': '25%',
        'runestone-07': '25%',
        'runestone-10': '25%'
    },
    'runestone-07': {
        'gold-leaf': '33%',
        'runestone-08': '33%',
        'runestone-10': '33%'
    },
    'runestone-08': {
        'gold-feather': '33%',
        'runestone-09': '33%',
        'runestone-10': '33%'
    },
    'runestone-09': {
        'gold-feather': '33%',
        'runestone-08': '33%',
        'runestone-10': '33%'
    },
    'runestone-10': {
        'runestone-06': '33%',
        'runestone-08': '33%',
        'runestone-09': '33%'
    },
    'salt': {
        'spiked-shell': '50%',
        'broccoli': '50%'
    },
    'sea-dragon': {
        'orange-gecko': '33%',
        'frog': '33%',
        'fancy-drum': '33%'
    },
    'shark-tooth': {
        '4-leaf-clover': '33%',
        'bacon': '33%',
        'moonstone': '33%'
    },
    'shiny-beetle': {
        'caterpillar': '25%',
        'horned-beetle': '25%',
        'snail': '25%',
        'runestone-05': '25%'
    },
    'small-flute': {
        'captains-log': '20%',
        'carved-warthog': '20%',
        'dice': '20%',
        'small-screw': '20%',
        'strange-letter': '20%'
    },
    'small-gear': {
        'gouda': '33%',
        'fancy-box': '33%',
        'wax-candle': '33%'
    },
    'small-spring': {
        'small-screw': '25%',
        'spectacles': '25%',
        'strange-letter': '25%',
        'wooden-pipe': '25%'
    },
    'snail': {
        'caterpillar': '25%',
        'horned-beetle': '25%',
        'shiny-beetle': '25%',
        'runestone-10': '25%'
    },
    'spectacles': {
        'carved-squirrel': '20%',
        'dice': '20%',
        'small-screw': '20%',
        'pirate-bandana': '20%',
        'wooden-pipe': '20%'
    },
    'spoon': {
        'canoe': '33%',
        'onyx-scorpion': '33%',
        'wrench': '33%'
    },
    'steel-plate': {
        'blue-purse': '33%',
        'monster-skull': '33%',
        'wrench': '33%'
    },
    'strange-letter': {
        'dice': '25%',
        'freaky-picture': '25%',
        'small-screw': '25%',
        'spectacles': '25%'
    },
    'sturdy-bow': {
        'fancy-drum': '33%',
        'fancy-guitar': '33%',
        'machine-press': '33%'
    },
    'taffy': {
        'ancient-coin': '33%',
        'candy': '33%',
        'lollipop': '33%'
    },
    'teapot': {
        'captains-log': '14%',
        'carved-owl': '14%',
        'carved-rhino': '14%',
        'carved-warthog': '14%',
        'freaky-picture': '14%',
        'runestone-02': '14%',
        'pirate-flag': '14%'
    },
    'treat-bag-02': {
        'egyptian-necklace': '33%',
        'square-key': '33%',
        'taffy': '33%'
    },
    'treat-bag-03': {
        'candy-corn': '33%',
        'moonstone': '33%',
        'jack-o-lantern': '33%'
    },
    'water-lily': {
        'popcorn': '33%',
        'grab-bag-02': '33%',
        'mushroom-paste': '33%'
    },
    'wax-candle': {
        'gouda': '33%',
        'roas': '33%',
        'witch-hat': '33%'
    },
    'witch-hat': {
        'chattering-teeth': '33%',
        'wax-candle': '33%',
        'wizard-hat': '33%'
    },
    'wooden-box': {
        'carved-chicken': '25%',
        'carved-fox': '25%',
        'treasure-chest': '25%',
        'wooden-mask': '25%'
    },
    'wooden-mask': {
        'carved-owl': '33%',
        'small-flute': '33%',
        'spectacles': '33%'
    },
    'wooden-pipe': {
        'dice': '25%',
        'fancy-pipe': '25%',
        'small-flute': '25%',
        'small-gear': '25%'
    }
};

function displayElement(element, state) {
    if (element === null || element === undefined) {
        return;
    }

    if (state) {
        element.classList.remove('d-none');
    }
    else {
        element.classList.add('d-none');
    }
}

function hideElement(element) {
    displayElement(element, false);
}

function showElement(element) {
    displayElement(element, true);
}

function clearTable(element) {
    if (element === null || element === undefined) {
        return;
    }

    const rows = element.querySelectorAll('tbody > tr');
    for (let row of rows) {
        row.remove();
    }
}

function clearItemDropTables() {
    clearTable(document.querySelector('#item-input-table'));
    clearTable(document.querySelector('#item-output-table'));
}

function showNoResults(tableType) {
    if (tableType === undefined) {
        document.querySelectorAll('.no-results').forEach(e => showElement(e));
    }
    else {
        showElement(document.querySelector('.no-' + tableType + '-results'))
    }
}

function hideNoResults(tableType) {
    if (tableType === undefined) {
        document.querySelectorAll('.no-results').forEach(e => hideElement(e));
    }
    else {
        hideElement(document.querySelector('.no-' + tableType + '-results'))
    }
}

function handleSearchInput(input) {
    if (input === undefined) {
        input = document.querySelector('input.search-items');
    }
    const needle = String(input.value).trim().toLowerCase().replace(/\s/g, '-');

    if (needle.length === 0) {
        clearItemDropTables();
        showNoResults();
    }

    if (needle.length < 3) {
        return;
    }

    clearItemDropTables();

    let hasInputMatch = false;
    let hasOutputMatch = false;
    for (let inputItem in DATA_ITEM_DROPS) {
        if (inputItem.includes(needle)) {
            hasInputMatch = true;
            for (let itemDrop in DATA_ITEM_DROPS[inputItem]) {
                addRowToTable(document.querySelector('#item-input-table'), itemDrop, DATA_ITEMS[itemDrop].name, DATA_ITEM_DROPS[inputItem][itemDrop], DATA_ITEMS[itemDrop].category);
            }
        }

        for (let outputItem in DATA_ITEM_DROPS[inputItem]) {
            if (outputItem.includes(needle)) {
                hasOutputMatch = true;
                addRowToTable(document.querySelector('#item-output-table'), inputItem, DATA_ITEMS[inputItem].name, DATA_ITEM_DROPS[inputItem][outputItem], DATA_ITEMS[inputItem].category);
            }
        }
    }

    (hasInputMatch ? hideNoResults : showNoResults)('input');
    (hasOutputMatch ? hideNoResults : showNoResults)('output');
}

function searchFor(item) {
    const input = document.querySelector('input.search-items');
    input.value = item;
    handleSearchInput(input);
}

function addRowToTable(table, key, name, chance, category) {
    const numRows = table.querySelectorAll('tr').length;

    const tdName = document.createElement('td');
    tdName.classList.add('td-name');
    tdName.textContent = name;

    if (category) {
        const span = document.createElement('span');
        span.classList.add('sp-category');
        span.textContent = '(' + category + ')';
        tdName.appendChild(span);
    }

    const searchIcon = document.createElement('span');
    searchIcon.classList.add('bi', 'bi-search', 'clickable', 'item-search-icon');
    searchIcon.title = 'Search for this item';
    searchIcon.addEventListener('click', () => {
        searchFor(name.toLowerCase());
    });
    tdName.appendChild(searchIcon);

    const tdChance = document.createElement('td');
    tdChance.classList.add('td-chance');
    tdChance.textContent = chance;

    const tr = document.createElement('tr');
    tr.appendChild(tdName);
    tr.appendChild(tdChance);

    const tbody = table.querySelector('tbody');
    tbody.appendChild(tr);

    return;

    // TODO: Make item clickable (expands?) to show other items this item will give if thrown in the well (mostly for output table)
    const tdCard = document.createElement('td');
    tdCard.classList.add('td-collapse');
    tdCard.setAttribute('colspan', '2');
    tdCard.textContent = key;

    const trCollapse = document.createElement('tr');
    trCollapse.classList.add('collapse');
    trCollapse.setAttribute('id', table.id + '-row-' + numRows);
    trCollapse.appendChild(tdCard);

    tdName.classList.add('clickable');
    tdName.setAttribute('data-bs-toggle', 'collapse');
    tdName.setAttribute('data-bs-target', '#' + table.id + '-row-' + numRows);
    tdName.setAttribute('aria-expanded', 'false');
    tdName.setAttribute('aria-controls', table.id + '-row-' + numRows);

    tbody.appendChild(trCollapse);
}

const elDataLastUpdated = document.querySelector('#data-last-updated');
if (elDataLastUpdated) {
    elDataLastUpdated.textContent = 'Data last updated on ' + DATA_LAST_UPDATED.toLocaleDateString();
}

const buttonClearInputItems = document.querySelector('button.clear-items');
buttonClearInputItems.addEventListener('click', () => {
    const input = document.querySelector('input.search-items');
    if (input) {
        input.value = '';
        input.focus();
    }
    clearItemDropTables();
    showNoResults();
});

const inputSearchInputItems = document.querySelector('input.search-items')
inputSearchInputItems.addEventListener('focus', (e) => {
    e.target.select();
});

inputSearchInputItems.addEventListener('input', (e) => {
    handleSearchInput(e.target)
});

inputSearchInputItems.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        e.target.blur();
    }
});

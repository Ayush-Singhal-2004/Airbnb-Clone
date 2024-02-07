let navOptions = [
    {
        icon : "surfing",
        name : "Surfing"
    },
    {
        icon : "curtains-closed",
        name : "Amazing views"
    },
    {
        icon : "house",
        name : "Tiny homes"
    },
    {
        icon : "pool",
        name : "Amazing pools"
    },
    {
        icon : "castle",
        name : "Castles"
    },
    {
        icon : "beach-access",
        name : "Beach"
    }
];

let surfing = [
    {
        images : "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ,
        name : "Paklok, Thailand",
        rate : "5.0",
        distance : "3,019 kilometers away",
        price : "$1,802"
    },
    {
        images : "https://images.unsplash.com/photo-1625721838087-c46e51c89558?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name : "Vypin, India",
        rate : "4.88",
        distance : "1,046 kilometers away",
        price : "$413"
    },
    {
        images : "https://images.unsplash.com/photo-1588741145164-494800cdeda4?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name : "Ko Samui district, Thailand",
        rate : "5.0",
        distance : "3,096 kilometers away",
        price : "$547"
    },
    {
        images : "https://images.unsplash.com/photo-1586968425481-3285b99f3b44?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name : "Phuket, Thailand",
        rate : "New",
        distance : "3,011 kilometers away",
        price : "$1,230"
    },
    {
        images : "https://images.unsplash.com/photo-1641531017443-49b1b1c74346?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name : "Tambon kamala, Thailand",
        rate : "3.8",
        distance : "3,007 kilometers away",
        price : "$4,084"
    }
]

let amazingViews = [
    {
        images : "https://images.unsplash.com/photo-1582871846330-fc6755bc445f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name : "Lonaval, India",
        rate : "5.0",
        distance : "69 kilometers away",
        price : "$413"
    },
    {
        images : "https://images.unsplash.com/photo-1681237444831-6275bd032c7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name : "Pawna Lake, India",
        rate : "4.94",
        distance : "254 kilometers away",
        price : "$289"
    },
    {
        images : "https://images.unsplash.com/photo-1675788384262-4c4a95cdfe48?q=80&w=1655&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name : "Mulshi, India",
        rate : "4.97",
        distance : "322 kilometers away",
        price : "$149"
    },
    {
        images : "https://images.unsplash.com/photo-1658057700268-8cb27660fedc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name : "Karjat, India",
        rate : "4.94",
        distance : "400 kilometers away",
        price : "$289"
    },
    {
        images : "https://images.unsplash.com/photo-1700933401517-c254a149dfa5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name : "Patan, India",
        rate : "5",
        distance : "186 kilometers away",
        price : "$181"
    }
]

let tinyHomes = [
    {
        images : "https://images.unsplash.com/photo-1569421473410-bb419b1b2c01?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name : "Bogë, Rajoni i Pejës",
        rate : "3.8",
        distance : "1,032 kilometers away",
        price : "$249"
    },
    {
        images : "https://images.unsplash.com/photo-1502745241548-8b38f964ed2b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name : "Iceland",
        rate : "4.5",
        distance : "1,565 kilometers away",
        price : "$299"
    },
    {
        images : "https://images.unsplash.com/photo-1626290131022-4e5a5e167173?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name : "Topanga Canyon, Topanga, CA, USA",
        rate : "4.5",
        distance : "1,326 kilometers away",
        price : "$289"
    },
    {
        images : "https://images.unsplash.com/photo-1595525101922-d7febbdd796d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name : "The Veluwe in The Netherlands",
        rate : "4.5",
        distance : "1,032 kilometers away",
        price : "$249"
    },
    {
        images : "https://images.unsplash.com/photo-1532460089048-7b14bf14cb65?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name : "Skanör-Falsterbo, Sweden",
        rate : "5.0",
        distance : "1,582 kilometers away",
        price : "$499"
    },
]

let amazingPools = [
    {
        images : "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name : "Horseshoe Bend, Page, United States",
        rate : "5.0",
        distance : "1,585 kilometers away",
        price : "$249"
    },
    {
        images : "https://images.unsplash.com/photo-1508787129984-dd3c3c71034a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name : "Tampa, United States",
        rate : "5.0",
        distance : "1,032 kilometers away",
        price : "$499"
    },
    {
        images : "https://images.unsplash.com/photo-1605367605729-b3c74565571d?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name : "",
        rate : "5.0",
        distance : "856 kilometers away",
        price : "$199"
    },
    {
        images : "https://images.unsplash.com/photo-1627616010739-78ee1aacf431?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name : "",
        rate : "4.2",
        distance : "1,032 kilometers away",
        price : "$249"
    },
    {
        images : "https://images.unsplash.com/photo-1536745511564-a5fa6e596e7b?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name : "",
        rate : "4.5",
        distance : "1,032 kilometers away",
        price : "$349"
    },
]

let castles = [
    {
        images : "https://images.unsplash.com/photo-1571504211935-1c936b327411?q=80&w=1517&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name : "Edinburgh, UK",
        rate : "4.2",
        distance : "1,585 kilometers away",
        price : "$399"
    },
    {
        images : "https://images.unsplash.com/photo-1609237756221-88c4a93846b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name : "Neuschwanstein Castles, Schwangau, Schwangau, Germany",
        rate : "5.0",
        distance : "1,689 kilometers away",
        price : "$999"
    },
    {
        images : "https://images.unsplash.com/photo-1597941265658-46a50fb4efc4?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name : "Germany",
        rate : "4.5",
        distance : "1,231 kilometers away",
        price : "$399"
    },
    {
        images : "https://images.unsplash.com/photo-1526816229784-65d5d54ac8bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name : "Château de Chambord, Chambord, France",
        rate : "5.0",
        distance : "1,654 kilometers away",
        price : "$999"
    },
    {
        images : "https://images.unsplash.com/photo-1456072212651-c507cb43b26f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name : "Igis, Switzerland",
        rate : "4.2",
        distance : "1,585 kilometers away",
        price : "$499"
    },
]

let profilePageOptions = [
    {
        heading : "Settings",
        options : [
            { component : "FontAwesome5", icon : "user-circle", name : "Personal information" },
            { component : "FontAwesome5", icon : "shield-alt", name : "Login & security" },
            { component : "FontAwesome5", icon : "money-bill-alt", name : "Payments and payouts" },
            { component : "MaterialIcons", icon : "settings", name : "Accessibility" },
            { component : "FontAwesome5", icon : "newspaper", name : "Taxes" },
            { component : "MaterialIcons", icon : "translate", name : "Translation" },
            { component : "FontAwesome5", icon : "bell", name : "Notifications" },
            { component : "MaterialIcons", icon : "lock-outline", name : "Privacy and sharing" },
            { component : "FontAwesome5", icon : "suitcase", name : "Travel for work" }
        ]
    },
    {
        heading : "Hosting",
        options : [
            { component : "MaterialIcons", icon : "add-home", name : "List your space" },
            { component : "MaterialIcons", icon : "add-home-work", name : "Learn about hosting" }
        ]
    },
    {
        heading : "Support",
        options : [
            { component : "FontAwesome5", icon : "question-circle", name : "Visit the Help Center" },
            { component : "FontAwesome5", icon : "user-shield", name : "Get help with a safety issue" },
            { component : "FontAwesome5", icon : "headphones-alt", name : "Report a neighborhood concern" },
            { component : "FontAwesome5", icon : "airbnb", name : "How Airbnb works" },
            { component : "FontAwesome5", icon : "pencil-alt", name : "Give us feedback" },
        ]
    },
    {
        heading : "Legal",
        options : [
            { component : "MaterialIcons", icon : "menu-book", name : "Terms of Services" },
            { component : "MaterialIcons", icon : "menu-book", name : "Privacy Policy" },
            { component : "MaterialIcons", icon : "menu-book", name : "Open source licenses" },
        ]
    }
]

export {navOptions, surfing, amazingViews, tinyHomes, amazingPools, castles, profilePageOptions};
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
        rate : "",
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

export {navOptions, surfing, amazingViews, profilePageOptions};
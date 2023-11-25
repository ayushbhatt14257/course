const products = [{
        id: 'product1',
        name: "Introduction to React Native",
        instructor: 'John Doe',
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open',
        // thumbnail: "https://unsplash.com/photos/a-computer-screen-with-a-logo-on-it-UYsBCu9RP3Y",
        thumbnail: "https://www.thoughtco.com/thmb/sLk9kNwmK4WDFhrRCxITz4ayO6A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-185288188-59ac2e80685fbe00102b1a4e.jpg",
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [{
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.'
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.'
            },
        ]
    },
    {
        id: 'product2',
        name: "DSA Crash Course",
        instructor: 'Clement Mihailescu',
        description: 'Our library of practice problems to ace the programming interviews. The foundational knowledge to tackle any algorithm question.',
        enrollmentStatus: 'Open',
        thumbnail: "https://www.thoughtco.com/thmb/sLk9kNwmK4WDFhrRCxITz4ayO6A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-185288188-59ac2e80685fbe00102b1a4e.jpg",
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic Problem Solving', 'Familiarity with any one coding language'],
        syllabus: [{
                week: 1,
                topic: 'Introduction to Complexity Analysis',
                content: 'Coding interviews. Problem-solving skills. Algorithm questions. What do you call the intersection of their Venn Diagram?'
            },
            {
                week: 2,
                topic: 'Big O Notation',
                content: 'The elementary particles of algorithms, data structures are woven into the very fabric of computer science and are essential building blocks of many a solution to coding interview problems.'
            },
        ]
    },
    {
        id: 'product3',
        name: "Front-end Developement Crash Course",
        instructor: 'Antoine Pourchet',
        description: 'Your frontend development journey starts here. Our collection of coding questions to crush the frontend interviews.',
        enrollmentStatus: 'Open',
        // thumbnail: "https://unsplash.com/photos/person-using-macbook-pro-on-table-UcYBL5V0xWQ",
        thumbnail: "https://www.thoughtco.com/thmb/sLk9kNwmK4WDFhrRCxITz4ayO6A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-185288188-59ac2e80685fbe00102b1a4e.jpg",
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React', "HTML", "CSS"],
        syllabus: [{
                week: 1,
                topic: 'Introduction to JSX',
                content: 'Short for JavaScript XML, JSX is what happens when you try to combine JavaScript and HTML into one. And it so happens to be extremely important when working with React!'
            },
            {
                week: 2,
                topic: 'Props',
                content: `In React, props are things you pass from component to component. That's pretty much it. They're super useful though.`
            },
        ]
    },
    {
        id: 'product4',
        name: "System Expert Crash Course",
        instructor: 'Simon Krafft',
        description: 'The essential components to design any large-scale distributed system. Our collection of questions to crush the systems design interviews.',
        enrollmentStatus: 'Open',
        // thumbnail: "",
        thumbnail: "https://www.thoughtco.com/thmb/sLk9kNwmK4WDFhrRCxITz4ayO6A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-185288188-59ac2e80685fbe00102b1a4e.jpg",
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic knowledge DB', 'Familiarity with Design Fundamentals?'],
        syllabus: [{
                week: 1,
                topic: 'Introduction to Design Fundamentals',
                content: 'Building scalable, production-ready applications is both art and science. Science, in that it requires knowledge of many topics in computer engineering; art, in that it demands an eye for making smart design choices and piecing together the right technologies.'
            },
            {
                week: 2,
                topic: 'Client—Server Model',
                content: `A client is a thing that talks to servers. A server is a thing that talks to clients. The client—server model is a thing made up of a bunch of clients and servers talking to one another.            `
            },
        ]
    },
    {
        id: 'product5',
        name: "ML Expert Crash Course",
        instructor: 'Alex Mihailescu',
        description: 'The fundamental concepts to dive into the world of machine learning. Our set of practice problems to ace the machine learning coding interviews.',
        enrollmentStatus: 'Open',
        // thumbnail: "",
        thumbnail: "https://www.thoughtco.com/thmb/sLk9kNwmK4WDFhrRCxITz4ayO6A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-185288188-59ac2e80685fbe00102b1a4e.jpg",
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic knowledge Naive Bayes', 'K Nearest Neighbors'],
        syllabus: [{
                week: 1,
                topic: 'Introduction to Naive Bayes',
                content: `In the machine-learning world, naive bayes are probabilistic classification algorithms based on Baye's theorem.`
            },
            {
                week: 2,
                topic: 'K Nearest Neighbors',
                content: `While this statement might sound a bit reductive, if not slightly offensive, the truth is that, in practice, proximity does in fact often entail similarity, as Ryan will demonstrate in this video.`
            },
        ]
    }
];

module.exports = products;
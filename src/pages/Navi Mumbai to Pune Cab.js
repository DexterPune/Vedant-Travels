
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Navimumbaitopunecab() {



    const cardData =
    {
        keyword: 'Navi Mumbai to Pune Cab',
        heading: 'Vedant Travels: Navi Mumbai to Pune Cab',
        headingDescription: 'Vedant Travels offers affordable, comfortable, and reliable taxi services for your journey from Navi Mumbai to Pune. Whether for business or leisure, we provide a range of vehicles including sedans, SUVs, and premium cabs, ensuring a smooth and hassle-free experience. Our transparent pricing and professional drivers ensure a safe and comfortable journey.',

        top: 'Top Places to Visit in Pune with Vedant Travels',

       "topPlaces": [
        {
            "title": "Shaniwar Wada",
            "description": "A historic fort that was once the residence of the Peshwa rulers, Shaniwar Wada is a must-visit for history enthusiasts. The fort features impressive Maratha architecture and offers an engaging light-and-sound show that brings its fascinating history to life."
        },
        {
            "title": "Aga Khan Palace",
            "description": "Built in 1892, the Aga Khan Palace is not only a beautiful structure but also a significant historical site. It was used as a prison during the freedom struggle, and Mahatma Gandhi and his associates were held here. The palace is surrounded by lush gardens, providing a peaceful atmosphere for reflection."
        },
        {
            "title": "Sinhagad Fort",
            "description": "Located 35 km from Pune, Sinhagad Fort is a popular destination for trekkers and history lovers. The fort offers stunning views of the surrounding valleys and is known for its role in Maratha history. It’s a great place for those seeking adventure and historical exploration."
        },
        {
            "title": "Osho Ashram",
            "description": "Situated in Koregaon Park, the Osho Ashram is a globally recognized meditation and spiritual retreat center. Visitors can participate in a variety of meditation sessions and spiritual workshops, making it an ideal spot for relaxation and inner peace."
        },
        {
            "title": "Raja Dinkar Kelkar Museum",
            "description": "The Raja Dinkar Kelkar Museum houses a vast collection of Indian artifacts, including sculptures, musical instruments, and daily-use items from different historical periods. It’s a fascinating stop for anyone interested in India’s cultural heritage."
        },
        {
            "title": "Pune Okayama Friendship Garden (Pu La Deshpande Garden)",
            "description": "A beautiful Japanese-inspired garden located in Pune, this garden is perfect for a relaxing stroll. With lush greenery, vibrant flowers, and serene ponds, it offers a peaceful escape from the busy city life."
        },
        {
            "title": "Pashan Lake",
            "description": "Pashan Lake is a serene spot, perfect for nature lovers and birdwatching enthusiasts. Surrounded by lush greenery, it provides a quiet environment for photography, walks, and peaceful reflection."
        },
        {
            "title": "Bund Garden",
            "description": "Bund Garden is a riverside park ideal for a relaxing walk, boating, or picnicking. The tranquil atmosphere and natural beauty make it a lovely spot to unwind and enjoy time with family or friends."
        },
        {
            "title": "Saras Baug",
            "description": "Saras Baug is a popular temple complex in Pune, known for its beautiful Ganesha temple and peaceful gardens. It’s a great place to enjoy a leisurely walk, relax in the gardens, or simply seek spiritual solace."
        },
        {
            "title": "Fergusson College",
            "description": "One of Pune’s oldest and most prestigious educational institutions, Fergusson College is known for its colonial-era architecture and rich academic history. It’s a beautiful campus to explore, showcasing Pune’s educational legacy and architectural beauty."
        }
    ],

"services": [
    {
        "name": "Navi Mumbai to Pune Taxi",
        "description": "Traveling from Navi Mumbai to Pune? Vedant Travels offers reliable and comfortable taxi services for a smooth and stress-free journey. Choose from our fleet of vehicles including Innova, Ertiga, and Sedans for the best travel experience."
    },
    {
        "name": "Navi Mumbai to Pune Taxi Fare",
        "description": "The Navi Mumbai to Pune Taxi Fare with Vedant Travels is transparent and competitive. We offer upfront pricing with no hidden charges. Enjoy a comfortable and safe journey with a wide selection of vehicles like the Innova, Ertiga, and Sedans at reasonable rates."
    },
    {
        "name": "Navi Mumbai to Pune One Way Taxi",
        "description": "Need a one-way taxi from Navi Mumbai to Pune? Vedant Travels offers flexible options to suit your needs. Our one-way taxi services include a variety of vehicles such as Innova, Ertiga, and Sedans to ensure a smooth and comfortable ride."
    },
    {
        "name": "Navi Mumbai to Pune Innova Taxi",
        "description": "For a luxurious and comfortable ride from Navi Mumbai to Pune, choose our Navi Mumbai to Pune Innova Taxi service. The Innova provides ample space and premium comfort for an enjoyable and relaxing journey."
    },
    {
        "name": "Navi Mumbai to Pune Ertiga Taxi",
        "description": "Looking for an affordable yet comfortable taxi from Navi Mumbai to Pune? The Ertiga is perfect for small groups or families. It offers ample space and comfort, ensuring a smooth and pleasant journey."
    },
    {
        "name": "Navi Mumbai to Pune Sedan Cab",
        "description": "For a compact and efficient ride, book a Sedan cab from Navi Mumbai to Pune with Vedant Travels. Our Sedans provide comfort and are ideal for those traveling alone or in small groups, ensuring a smooth journey with professional drivers."
    },
    {
        "name": "Navi Mumbai to Pune Round Trip Cab",
        "description": "Looking for a round-trip cab from Navi Mumbai to Pune? Vedant Travels offers flexible round-trip services that allow you to travel to Pune and back at your convenience. Choose from vehicles like the Innova, Ertiga, or Sedans for a comfortable and hassle-free journey."
    },
    {
        "name": "Navi Mumbai to Hinjewadi Cab",
        "description": "If you're traveling from Navi Mumbai to Hinjewadi, Vedant Travels provides reliable and affordable taxi services. Our fleet includes vehicles like the Innova, Ertiga, and Sedans, ensuring a comfortable and timely journey to Hinjewadi."
    },
    {
        "name": "Navi Mumbai to Pune Cab",
        "description": "Book a cab from Navi Mumbai to Pune with Vedant Travels for a safe, reliable, and comfortable journey. Our professional drivers ensure you reach your destination on time, with options such as Innova, Ertiga, and Sedans available for your comfort."
    },
    {
        "name": "Pune to Navi Mumbai Cab",
        "description": "For a comfortable and safe ride from Pune to Navi Mumbai, Vedant Travels offers reliable taxi services. Choose from our fleet of vehicles including Innova, Ertiga, and Sedans for a smooth and hassle-free journey."
    },
    {
        "name": "Navi Mumbai to Pune Taxi Fare",
        "description": "Vedant Travels offers transparent and affordable taxi fares from Navi Mumbai to Pune. With no hidden charges, you can travel comfortably in vehicles like the Innova, Ertiga, or Sedans, all at a reasonable price."
    },
    {
        "name": "Cab Service in Navi Mumbai",
        "description": "Looking for reliable cab service in Navi Mumbai? Vedant Travels offers punctual and professional services with a variety of vehicles, ensuring a smooth and safe journey. Whether you're traveling within Navi Mumbai or to nearby cities, we’ve got you covered."
    },
    {
        "name": "Cab Hire in Navi Mumbai",
        "description": "Hire a cab in Navi Mumbai with Vedant Travels for a comfortable, safe, and affordable ride. We offer a range of vehicles including the Innova, Ertiga, and Sedans, with professional drivers ensuring a smooth journey."
    },
    {
        "name": "Cab Service in Airoli",
        "description": "If you're located in Airoli and need a cab, Vedant Travels offers reliable taxi services in the area. Whether you're traveling to Pune or within Navi Mumbai, choose from our fleet of vehicles like Innova, Ertiga, or Sedans for your comfort."
    },
    {
        "name": "Cabs Navi Mumbai",
        "description": "Looking for cabs in Navi Mumbai? Vedant Travels provides dependable and affordable taxi services across Navi Mumbai. Our fleet includes well-maintained vehicles like Innova, Ertiga, and Sedans to make your journey smooth and enjoyable."
    },
    {
        "name": "Cabs in Navi Mumbai",
        "description": "Vedant Travels offers efficient and safe cab services in Navi Mumbai. Our fleet includes a variety of vehicles to suit your needs, from Innova and Ertiga to Sedans, ensuring a comfortable ride to your destination."
    },
    {
        "name": "Kharghar Taxi Service",
        "description": "Traveling to or from Kharghar? Vedant Travels offers reliable taxi services in Kharghar. Choose from our fleet of vehicles, including Innova, Ertiga, and Sedans, for a comfortable and timely journey."
    },
    {
        "name": "Navi Mumbai Taxi Service",
        "description": "Vedant Travels provides the best taxi service in Navi Mumbai, ensuring you travel in comfort and style. Our fleet includes a variety of vehicles like Innova, Ertiga, and Sedans, all driven by professional drivers for a safe and smooth journey."
    },
    {
        "name": "Taxi Service in Vashi Navi Mumbai",
        "description": "If you're in Vashi, Navi Mumbai, and need a taxi service, Vedant Travels offers reliable and affordable options. We have a range of vehicles available, from Innova to Ertiga and Sedans, for a comfortable ride."
    },
    {
        "name": "Innova Crysta on Rent in Navi Mumbai",
        "description": "Rent an Innova Crysta in Navi Mumbai with Vedant Travels for a luxurious and spacious ride. Whether you're traveling for business or leisure, the Innova Crysta offers premium comfort and ample space for a smooth journey."
    },
    {
        "name": "Ertiga on Rent in Navi Mumbai",
        "description": "Looking to rent an Ertiga in Navi Mumbai? Vedant Travels offers affordable rental services for the Ertiga, a spacious and comfortable vehicle perfect for family or group travel. Enjoy a smooth and safe journey with our well-maintained cars."
    }
],


"tableData": [
    ["Navi Mumbai to Pune Taxi", "Navi Mumbai to Pune Taxi Fare"],
    ["Navi Mumbai to Pune One Way Taxi", "Navi Mumbai to Pune Innova Taxi"],
    ["Navi Mumbai to Pune Ertiga Taxi", "Navi Mumbai to Pune Sedan Cab"],
    ["Navi Mumbai to Pune Round Trip Cab", "Navi Mumbai to Hinjewadi Cab"],
    ["Navi Mumbai to Pune Cab", "Navi Mumbai to Pune Taxi"],
    ["Pune to Navi Mumbai Cab", "Navi Mumbai to Pune Taxi Fare"],
    ["Cab Service in Navi Mumbai", "Cab Hire in Navi Mumbai"],
    ["Cab Service in Airoli", "Cabs Navi Mumbai"],
    ["Kharghar Taxi Service", "Navi Mumbai Taxi Service"],
    ["Taxi Service in Vashi Navi Mumbai", "Innova Crysta on Rent in Navi Mumbai"],
    ["Ertiga on Rent in Navi Mumbai", ""]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we understand how important time is. Whether you’re traveling for business or leisure, we ensure punctual pickups and timely drop-offs for your Navi Mumbai to Pune Cab journey. You can trust us for a stress-free and on-time experience."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicles",
      "WhyChoosedescription": "We offer a variety of well-maintained, comfortable, and spacious vehicles for your Navi Mumbai to Pune Cab ride. Choose from sedans, SUVs, and premium cars, all designed for your comfort, with air conditioning, ample legroom, and comfortable seating."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our drivers are highly experienced in handling long-distance routes like Navi Mumbai to Pune. They are well-acquainted with the best routes and follow strict safety protocols, ensuring a safe, smooth, and efficient journey."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "Vedant Travels offers competitive and transparent pricing for your Navi Mumbai to Pune Cab. There are no hidden charges, and our pricing is clear from the beginning, ensuring you get the best value for your money."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Your safety is our priority. All our vehicles are equipped with modern safety features, including airbags, seat belts, and GPS tracking. Our drivers follow all safety measures to ensure that your journey from Navi Mumbai to Pune is secure and worry-free."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "Whether you need an early morning pickup or a late-night drop-off, Vedant Travels is available 24/7. Book your Navi Mumbai to Pune Cab at any time, and our customer service team will assist you with your booking or any queries."
    },
    {
      "WhyChooseheading": "Hassle-Free Booking Process",
      "WhyChoosedescription": "Booking your Navi Mumbai to Pune Cab is quick and easy. You can book online through our website or mobile app, or contact our customer service team for personalized booking assistance."
    },
    {
      "WhyChooseheading": "Customized Travel Packages",
      "WhyChoosedescription": "Whether you're traveling for business, leisure, or a special event, we offer customized travel packages for your Navi Mumbai to Pune trip. Share your preferences, and we will personalize your journey to ensure maximum comfort and satisfaction."
    }
  ]






    }

    const faqData = [
        {
            id: 1,
            question: 'How can I book a Navi Mumbai to Pune cab with Vedant Travels?',
            answer: 'You can book your Navi Mumbai to Pune Cab online through our website or mobile app. Alternatively, you can contact our customer service team for personalized assistance with your booking.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are highly experienced and well-trained to handle long-distance routes like Navi Mumbai to Pune. They ensure a smooth, safe, and efficient ride.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Navi Mumbai to Pune travel?',
            answer: 'We offer a variety of vehicles, including sedans, SUVs, and premium cars, all equipped for a comfortable and pleasant ride. Our vehicles are spacious and well-maintained.',
        },
        {
            id: 4,
            question: 'How do I pay for my Navi Mumbai to Pune cab rental?',
            answer: 'We accept multiple payment methods, including cash, credit/debit cards, and online payments through our app, providing you with convenient options for payment.',
        },
        {
            id: 5,
            question: 'Can I book a return trip along with my Navi Mumbai to Pune cab?',
            answer: 'Yes, you can easily book a round-trip cab. Provide your return details when making the booking, and we’ll take care of the rest.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any extra charges for waiting time or detours will be communicated to you clearly during the booking process, ensuring complete transparency in pricing.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing in Pune after my drop-off?',
            answer: 'Yes, we offer customized sightseeing tours in Pune after your Navi Mumbai to Pune journey. Explore popular landmarks like Shaniwar Wada, Aga Khan Palace, and more with our professional drivers.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Navi Mumbai to Pune cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have more luggage or any special requirements, please let us know during booking, and we will ensure everything is taken care of.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Navi Mumbai and Pune?',
            answer: 'Yes, we offer corporate travel services between Navi Mumbai and Pune, including trips for business meetings, conferences, and events. We can tailor the service to your company’s specific needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Navi Mumbai to Pune journey?',
            answer: 'Vedant Travels offers reliable, safe, and comfortable travel services with experienced drivers, well-maintained vehicles, affordable pricing, and 24/7 availability. We ensure a smooth and pleasant journey for your Navi Mumbai to Pune trip.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Sameer Agarwal",
            title: "Business Traveler",
            quote: "I recently booked a Navi Mumbai to Pune Cab with Vedant Travels, and I was thoroughly impressed. The driver was professional and friendly, and the vehicle was clean and comfortable. It was a smooth and enjoyable ride!",
            rating: 5,
        },
        {
            name: "Mrs. Rekha Joshi",
            title: "Family Traveler",
            quote: "We used Vedant Travels for our family trip from Navi Mumbai to Pune, and the experience was fantastic. The vehicle was spacious and clean, and the driver was punctual and courteous. Highly recommend!",
            rating: 5,
        },
    ];
    
    
    








    const contactData = {
        heading: `${cardData.keyword} Contact Number`,
        contactNumbers: [
            "+91 8177869909",

        ],
        email: "booking@vedanttravels.in"
    };


    const Images = [
        {
            place: "./images/keyword/1.jpg",
            text: "Pune to Mumbai Cab",
        },
        {
            place: "./images/keyword/2.jpg",
            text: "Pune to Mumbai Airport Cab",
        },
        {
            place: "./images/keyword/3.jpg",
            text: "Pune to Mumbai International Airport Cab",
        },
        {
            place: "./images/keyword/4.jpg",
            text: "Pune to Mumbai One Way Cab",
        },
        {
            place: "./images/keyword/5.jpg",
            text: "Pune Mumbai Car Hire",
        },
        {
            place: "./images/keyword/6.jpg",
            text: "  Pune to Mumbai Taxi Fare ",
        },
        {
            place: "./images/keyword/7.jpg",
            text: "Pune to Mumbai Online Cab Booking",
        },

        {
            place: "./images/keyword/8.jpg",
            text: " Pimpri Chinchwad to Mumbai Cab",
        },

        {
            place: "./images/keyword/9.jpg",
            text: "Baner to Mumbai Cabs",
        },
        {
            place: "./images/keyword/10.jpg",
            text: "Hinjewadi to Mumbai Cab",
        },

        {
            place: "./images/keyword/11.jpg",
            text: "Pimple Saudagar to Mumbai Cab Service",
        },
        {
            place: "./images/keyword/12.jpg",
            text: "Wakad to Mumbai Cab",
        },

        {
            place: "./images/keyword/13.jpg",
            text: "Hadapsar to Mumbai Cab",
        },

        {
            place: "./images/keyword/14.jpg",
            text: "Kalyani Nagar to Mumbai Taxi",
        },
        {
            place: "./images/keyword/15.jpg",
            text: "Koregaon Park to Mumbai Cab",
        },
        {
            place: "./images/keyword/16.jpg",
            text: " Kothrud to Mumbai Cab",
        },
        {
            place: "./images/keyword/17.jpg",
            text: "Kharadi to Mumbai Cab",
        },
        {
            place: "./images/keyword/18.jpg",
            text: "Shivajinagar to Mumbai Cab",
        },
        {
            place: "./images/keyword/19.jpg",
            text: "Pune to Mumbai Ertiga Cab",
        },
        {
            place: "./images/keyword/20.jpg",
            text: " Pune to Mumbai Innova Crysta Cab",
        },
        
        {
            place: "./images/keyword/22.jpg",
            text: "Kondhwa to Mumbai Cab",
        },
        {
            place: "./images/keyword/23.jpg",
            text: "Viman Nagar to Mumbai Cabs",
        },
        {
            place: "./images/keyword/24.jpg",
            text: "Katraj to Mumbai Cab Service",
        },
        {
            place: "./images/keyword/25.jpg",
            text: " Pune Station to Mumbai Cabs Service",
        },
        {
            place: "./images/keyword/26.jpg",
            text: "Boat Club Road to Mumbai Cab ",
        },
        {
            place: "./images/keyword/27.jpg",
            text: " Vishrantwadi to Mumbai Cab",
        },
    ];


    const images = [
        { src: "./images/ourfleet/1.jpg", alt: "Image 1" },
        { src: "./images/ourfleet/5.jpg", alt: "Image 1" },
        { src: "./images/ourfleet/2.jpg", alt: "Image 1" },
        { src: "./images/ourfleet/3.jpg", alt: "Image 1" },
        { src: "./images/ourfleet/4.jpg", alt: "Image 1" },
        { src: "./images/ourfleet/7.jpg", alt: "Image 1" },
        { src: "./images/ourfleet/8.jpg", alt: "Image 1" },
        { src: "./images/ourfleet/9.jpg", alt: "Image 1" },
        { src: "./images/ourfleet/6.jpg", alt: "Image 1" },

    ];

    const jsonData = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Navi Mumbai to Pune Cab | Vedant Travels",
        "description": "Book your Navi Mumbai to Pune cab with Vedant Travels. Enjoy comfortable one-way, round-trip, and airport transfer services in Innova, Ertiga, and Sedan models at affordable rates for a smooth and reliable journey.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.9",
          "ratingCount": "500"
        }
      };
      
    



    return (
        <div>
           
           <Helmet>
        <title>Navi Mumbai to Pune Cab | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Navi Mumbai to Pune cab with Vedant Travels. Get one-way, round-trip, and airport transfer services in comfortable vehicles like Innova, Ertiga, and Sedan at affordable prices." />
        <meta name="keywords" content="Navi Mumbai to Pune Taxi, Navi Mumbai to Pune Taxi Fare, Navi Mumbai to Pune One Way Taxi, Navi Mumbai to Pune Innova Taxi, Navi Mumbai to Pune Ertiga Taxi, Navi Mumbai to Pune Sedan Cab, Navi Mumbai to Pune Round Trip Cab, Navi Mumbai to Hinjewadi Cab, Navi Mumbai to Pune Cab, Pune to Navi Mumbai Cab, Cab Service in Navi Mumbai, Cab Hire in Navi Mumbai, Cab Service in Airoli, Cabs Navi Mumbai, Cabs in Navi Mumbai, Kharghar Taxi Service, Navi Mumbai Taxi Service, Taxi Service in Vashi Navi Mumbai, Innova Crysta on Rent in Navi Mumbai, Ertiga on Rent in Navi Mumbai" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/navi-mumbai-to-pune-cab" />
        <script type="application/ld+json">
          {JSON.stringify(jsonData)}
        </script>
      </Helmet>
      
            <div
                className="site-breadcrumb"
                style={{ background: 'url(./img/breadcrumb/01.jpg)' }}
            >
                <div className="container">
                    <h2 className="breadcrumb-title">{cardData.keyword}</h2>

                </div>
            </div>

            <section id="about" className="jarallax text-light">
                <div className="center-y relative text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className='text-white'>{cardData.keyword}</h1>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid" >
                    <div className="row container-fluid">
                        <div className="col-12 col-md-7 ">
                            <img src='./images/keyword/39.jpg' alt='img' />
                            <h3 className="py-1"
                                style={{
                                    color: '#322E77', // Red color for the title 
                                    textShadow: '5px 5px 10px rgba(255, 255, 255, 0.7)', // Light shadow effect
                                    fontWeight: 'bold'
                                }}


                            >{cardData.heading} </h3><p className='fw-bold '>{cardData.headingDescription}</p>
                            <div className="">
                                <p className='fw-bold py-3 darkcolorrr'>{cardData.top}</p>
                                {cardData.topPlaces.map((place, index) => (
                                    <div key={index} className="">
                                        <div
                                            style={{
                                                cursor: 'pointer',
                                                padding: '10px',
                                                marginBottom: '7px',
                                                borderRadius: '8px',
                                                transition: 'transform 0.2s'
                                            }}

                                        >
                                            <h4 className="mb-1 darkcolorrr">{place.title}</h4>
                                            <p className="mb-0">{place.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div
                                style={{
                                    cursor: 'pointer',
                                    padding: '10px',
                                    marginBottom: '7px',
                                    borderRadius: '8px', // Optional: rounded corners
                                    transition: 'transform 0.2s' // Optional: smooth scaling effect
                                }}
                            >
                                {cardData.services.map((service, index) => (
                                    <div key={index} className=" my-4">
                                        <h4 className="py-1 darkcolorrr">{service.name}</h4>
                                        <p>{service.description}</p>
                                    </div>
                                ))}
                            </div>

                            <table className="table table-responsive Border-key my-2">
                                <tbody className=' Border-key'>
                                    {cardData.tableData.map((row, rowIndex) => (
                                        <tr className='Border-key ' key={rowIndex}>
                                            {row.map((cell, cellIndex) => (
                                                <td key={cellIndex} className=' Border-key bluecolor fw-bold' >{cell}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <h3 className='pt-md-3'>{cardData.keyword + " Rates"}</h3>
                            <BusRatesTable />

                            <div id="why-choose-section"
                                className='px-2'>
                                {cardData.whychoose.map((item, index) => (
                                    <div key={index}>
                                        <h4 className="py-1 whycolor">{item.WhyChooseheading}</h4>
                                        <p>{item.WhyChoosedescription}</p>
                                    </div>
                                ))}
                            </div>


                            <div className="row twm-faq-section-1 m-b30">


                                <div className=" col-md-12 wow fadeInDown" data-wow-delay="0.2">
                                    <div className="twm-faq-info-wrap">

                                        <div className="section-head left">
                                            <h2 className="twm-large-title site-text-dark">FAQS {cardData.keyword} For Vedant Travels</h2>
                                        </div>


                                        <div className="twm-faq-info">
                                            <div className="accordion twm-acdn" id="sf-faq-accordion">


                                                <FAQKeyword faqData={faqData} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <TestimonialKeyword testimonials={testimonials} />

                            <div className='py-4'>

                                <div className="contact-box Borderr">
                                    <h3>{contactData.heading}</h3>
                                    <p className='text-black'>For booking inquiries or any assistance, please feel free to contact us:</p>
                                    <div className="contact-details">
                                        <p><strong className='darkcolor'>Mobile No:</strong></p>
                                        <ul>
                                            {contactData.contactNumbers.map((number, index) => (
                                                <li key={index}>
                                                    <a href={`tel:${number}`} className="contact-link fw-bold fs-5">
                                                        {number}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                        <p><strong className='darkcolor'>Email Id: </strong>
                                            <a href={`mailto:${contactData.email}`} className="contact-link">
                                                {contactData.email}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-md-4' >
                            {Images.map((e) => {
                                return (
                                    <div className="box1">
                                        <a
                                            href="./"
                                            className="d-flex justify-content-around align-items-center"
                                        >
                                            <div className="b1">
                                                <img src={e.place} alt="img" />
                                            </div>
                                            <div className="b2">
                                                {" "}
                                                <a href="./" className='px-3'>{e.text}</a>
                                            </div>
                                        </a>
                                    </div>
                                );
                            })}


                            <div className="gallery-container">
                                <h2 className="gallery-title">Our Fleets</h2>
                                <div className="gallery-row d-flex flex-wrap">
                                    {images.map((image, index) => (
                                        <div className="gallery-item col-md-4" key={index}>
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="gallery-image"

                                            />
                                        </div>
                                    ))}

                                </div>
                            </div>

                            <div className=" rounded p-4 shadow-sm Uni_border "
                                style={{
                                    cursor: 'pointer',
                                    padding: '10px',
                                    border: '3px dotted #006BB7',
                                    marginBottom: '7px',
                                    fontWeight: 'bold',
                                }}

                            >
                                <h4 className="pb-3 pt-3 lead fw-bold text-dark">Contact Information</h4>

                                <div className="row">

                                    <div className="col-12 mb-3">
                                        <div className="Small_border  rounded text-center py-2 " style={{ backgroundColor: '#006BB7' }}>
                                            <h4 className=" lead fw-semibold whitt text-dark">Phone Numbers</h4>
                                            <i className="bi bi-telephone-fill fs-1 mb-2"></i>
                                            <div className=''>
                                                <a href="tel:+918177869909" className="d-block  text-white">+91 8177869909</a>
                                                


                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12 mb-3 ">
                                        <div className="Small_border rounded text-center">
                                            <i className="bi bi-envelope fs-1 mb-2"></i>
                                            <div className='rounded py-2' style={{ backgroundColor: '#006BB7' }}>
                                                <h4 className=" fw-semibold lead whitt text-dark">Email</h4>
                                                <a href="mailto:booking@vedanttravels.in" className=" text-white d-block">
                                                    booking@vedanttravels.in
                                                </a>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12 mb-3 ">
                                        <div className="Small_border  rounded text-center">
                                            <i className="bi bi-house-fill fs-1 mb-2"></i>
                                            <div className='rounded py-2' style={{ backgroundColor: '#006BB7' }}>
                                                <h4 className=" fw-semibold lead whitt text-dark">Address</h4>
                                                <p className="whit text-white ">
                                                    <i> Vedant Travels <br/>
                                                    S/R No. 66/1. Dhore Patil Farm,<br/>
                                                    Near New  Bharat Bakery,
                                                    New Sangvi <br/>Pimpri-Chinchwad,
                                                    Pune Maharashtra India- 411027.
                                                    </i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
}

export default Navimumbaitopunecab;
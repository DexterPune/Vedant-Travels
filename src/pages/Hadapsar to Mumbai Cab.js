
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Hadapsartomumbaicab() {



    const cardData =
    {
        keyword: 'Hadapsar to Mumbai Cab ',
        heading: 'Vedant Travels:Hadapsar to Mumbai Cab ',
        headingDescription: 'Vedant Travels offers affordable and transparent taxi fares for Hadapsar to Mumbai travel, ensuring a cost-effective and comfortable journey. Our pricing is competitive, with no hidden charges, and we provide multiple cab options to suit your budget and preferences.',

        top: 'Top Places to Visit in Mumbai with Vedant Travels',

"topPlaces": [
        {
            "title": "Gateway of India",
            "description": "One of Mumbai’s most iconic landmarks, built in 1924 to commemorate the visit of King George V and Queen Mary. Overlooking the Arabian Sea, this magnificent structure is a favorite among tourists for sightseeing and photography. You can also take a ferry from here to visit Elephanta Caves."
        },
        {
            "title": "Marine Drive",
            "description": "Also known as the Queen’s Necklace, Marine Drive is a 3.6 km-long boulevard along the coastline of Mumbai. It’s the perfect spot for an evening stroll, enjoying the sea breeze, or watching the sunset. At night, the streetlights form a stunning arc that resembles a necklace, making it one of the most picturesque locations in Mumbai."
        },
        {
            "title": "Elephanta Caves",
            "description": "A UNESCO World Heritage Site, the Elephanta Caves are located on Elephanta Island and feature ancient rock-cut temples dedicated to Lord Shiva. The caves date back to the 5th–7th centuries and are known for their intricate sculptures and carvings. A ferry ride from the Gateway of India takes you to this historical site, offering a blend of nature, history, and spirituality."
        },
        {
            "title": "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
            "description": "A masterpiece of Victorian Gothic architecture, CSMT is not just a railway station but a UNESCO-listed historic site. The station, formerly known as Victoria Terminus, features grand turrets, stained glass windows, and intricate stone carvings, showcasing the colonial-era grandeur of Mumbai."
        },
        {
            "title": "Siddhivinayak Temple",
            "description": "One of the most revered Hindu temples in Mumbai, Siddhivinayak Temple is dedicated to Lord Ganesha. Thousands of devotees visit the temple daily to seek blessings, including Bollywood celebrities and politicians. The temple’s beautiful architecture and spiritual ambiance make it a must-visit."
        },
        {
            "title": "Juhu Beach",
            "description": "Juhu Beach is among the most famous beaches in Mumbai, known for its lively atmosphere and delicious street food. Whether you want to relax by the sea, take a camel ride, or try local delicacies like pav bhaji, vada pav, and bhel puri, this beach has something for everyone. It's also a popular spot for catching a mesmerizing sunset."
        },
        {
            "title": "Colaba Causeway",
            "description": "If you love shopping, Colaba Causeway is the place to be. This bustling street market is filled with stalls selling jewelry, handicrafts, clothes, antiques, and souvenirs. Besides shopping, you can also explore the charming cafés and restaurants in the area, such as Leopold Café, a historic eatery loved by tourists."
        },
        {
            "title": "Haji Ali Dargah",
            "description": "Situated on a small islet off the coast of Worli, Haji Ali Dargah is a significant religious and architectural landmark in Mumbai. This Indo-Islamic shrine is dedicated to the Sufi saint Haji Ali and is accessible via a narrow causeway that gets submerged during high tide. The dargah’s serene atmosphere and breathtaking views make it a must-visit destination."
        },
        {
            "title": "Bandra-Worli Sea Link",
            "description": "An architectural marvel, the Bandra-Worli Sea Link is an eight-lane bridge that connects South Mumbai to the suburbs. The cable-stayed bridge offers spectacular views of the Arabian Sea and Mumbai’s skyline, especially when illuminated at night. It significantly reduces travel time between Bandra and Worli, making it a vital part of Mumbai’s infrastructure."
        },
        {
            "title": "Bollywood Film City",
            "description": "Mumbai is the heart of the Indian film industry, and Film City in Goregaon offers visitors a chance to witness Bollywood magic up close. With multiple studios, sets, and backdrops, Film City is where countless Bollywood movies and TV shows are filmed. Guided tours provide an exclusive behind-the-scenes look at Mumbai’s thriving cinema industry, making it a must-visit for movie buffs."
        }
    ],


"services": [
    {
        "name": "Magarpatta to Mumbai Cab",
        "description": "Traveling from Magarpatta to Mumbai? Choose Vedant Travels for a comfortable and affordable cab service. Whether it’s for business, leisure, or a family trip, we ensure a smooth and enjoyable ride."
    },
    {
        "name": "Hadapsar to Mumbai Taxi Fare",
        "description": "Get competitive pricing for your taxi from Hadapsar to Mumbai with Vedant Travels. We offer transparent fare structures to ensure there are no hidden costs for your journey."
    },
    {
        "name": "Hadapsar to Mumbai Airport Taxi Fare",
        "description": "Book a comfortable ride from Hadapsar to Mumbai Airport with Vedant Travels. Our affordable taxi services ensure you reach the airport on time without the stress."
    },
    {
        "name": "Hadapsar to Mumbai International Airport Cab",
        "description": "Need a ride to Mumbai International Airport? Vedant Travels offers reliable and timely cab services for your convenience. Whether you're catching a flight or returning, we ensure a smooth and comfortable trip."
    },
    {
        "name": "Hadapsar to Mumbai Innova Cab",
        "description": "Travel in style and comfort with an Innova taxi from Hadapsar to Mumbai. Whether you are traveling alone or with a group, our spacious and luxurious Innova cabs are the perfect choice."
    },
    {
        "name": "Hadapsar to Mumbai Ertiga Cab",
        "description": "For a more budget-friendly but spacious option, book an Ertiga taxi with Vedant Travels. Ideal for families or groups, this vehicle offers ample space and comfort for your journey from Hadapsar to Mumbai."
    },
    {
        "name": "Cab Service in Hadapsar",
        "description": "Looking for reliable cab services in Hadapsar? Vedant Travels provides top-rated taxi services for your every need, ensuring a smooth ride within the city or to Mumbai."
    },
    {
        "name": "Taxi Service in Hadapsar",
        "description": "Whether you need a taxi to the airport or a local ride, Vedant Travels offers convenient and comfortable taxi services in Hadapsar. Our fleet includes a range of vehicles to suit your travel needs."
    },
    {
        "name": "Hadapsar to Mumbai One Way Taxi",
        "description": "Book a one-way taxi service from Hadapsar to Mumbai with Vedant Travels. Our one-way taxi services offer flexibility, comfort, and the convenience of a direct ride to your destination."
    },
    {
        "name": "Pune to Mumbai Airport Cab",
        "description": "Need a ride to Mumbai Airport from Pune? Vedant Travels offers reliable and affordable airport transfer services, ensuring you reach the airport on time, every time."
    },
    {
        "name": "Pune to Mumbai Ertiga Cab",
        "description": "Travel comfortably in an Ertiga from Pune to Mumbai. Ideal for families or groups, our Ertiga cabs provide ample space and a smooth ride for your journey."
    },
    {
        "name": "Pune to Mumbai Innova Cab",
        "description": "For a more luxurious ride from Pune to Mumbai, choose the Innova. Perfect for groups or those seeking extra comfort, Vedant Travels offers professional drivers and a seamless experience."
    },
    {
        "name": "Wakad to Dadar Cabs",
        "description": "Traveling from Wakad to Dadar? Vedant Travels provides reliable cab services, ensuring a smooth and comfortable journey. Whether for business or leisure, our cabs are the perfect choice."
    },
    {
        "name": "Hadapsar to Mumbai Cab Price",
        "description": "Looking for affordable cab services from Hadapsar to Mumbai? Vedant Travels offers competitive pricing without compromising on comfort or service quality. Contact us for an accurate fare estimate."
    },
    {
        "name": "Hadapsar to Mumbai Airport Cab",
        "description": "Book your airport ride with Vedant Travels for a timely and comfortable journey from Hadapsar to Mumbai Airport. Our drivers are experienced and know the best routes to avoid delays."
    },
    {
        "name": "Pune to Mumbai Airport Drop Innova",
        "description": "Choose an Innova for a luxurious and spacious ride from Pune to Mumbai Airport. Perfect for families or those needing extra space, our Innova cabs provide premium comfort for your journey."
    },
    {
        "name": "Hadapsar to Dadar Cabs",
        "description": "Need a ride from Hadapsar to Dadar? Book a cab with Vedant Travels for an affordable and comfortable ride. Our professional drivers will ensure a smooth and stress-free journey."
    },
    {
        "name": "Dadar to Mumbai Airport Taxi Fare",
        "description": "If you're traveling from Dadar to Mumbai Airport, Vedant Travels offers affordable and reliable taxi services with no hidden charges."
    },
    {
        "name": "Hadapsar to Bandra Cabs",
        "description": "Book a taxi from Hadapsar to Bandra with Vedant Travels. Our cabs are spacious, well-maintained, and ideal for a comfortable ride to one of Mumbai’s busiest locations."
    },
    {
        "name": "Cab Service in Hadapsar",
        "description": "Whether you're looking for a local cab or a ride to Mumbai, Vedant Travels offers reliable services in Hadapsar. We ensure comfort, affordability, and punctuality for all your travel needs."
    },
    {
        "name": "Taxi Service in Magarpatta City",
        "description": "Vedant Travels offers premium taxi services in Magarpatta City. Whether you need a quick trip to Mumbai or a local ride, our cabs provide the comfort and convenience you deserve."
    },
    {
        "name": "Hadapsar to Mumbai Innova Taxi Fare",
        "description": "Get an accurate quote for an Innova ride from Hadapsar to Mumbai. Our competitive pricing and commitment to service excellence ensure you get the best value for your journey."
    },
    {
        "name": "Hadapsar to Navi Mumbai Cab Fare",
        "description": "For your ride from Hadapsar to Navi Mumbai, Vedant Travels offers affordable and comfortable taxi services. Book now for a smooth and timely journey."
    },
    {
        "name": "Hadapsar to Mumbai Airport Cab",
        "description": "Book a taxi from Hadapsar to Mumbai Airport with Vedant Travels. We offer reliable, affordable, and comfortable cabs with experienced drivers for your airport transfer."
    },
    {
        "name": "Innova Crysta on Rent in Hadapsar",
        "description": "Rent an Innova Crysta for your journey from Hadapsar to Mumbai. Our luxurious, spacious vehicles are perfect for group travel and long-distance trips."
    },
    {
        "name": "Pune Mumbai Vedant Travels",
        "description": "For a reliable and comfortable ride from Pune to Mumbai, choose Vedant Travels. Whether it's a business trip, leisure, or family outing, we ensure a seamless journey every time."
    },
    {
        "name": "Contact Information",
        "description": "For bookings and inquiries, contact Vedant Travels at +91 8177869909. We provide professional and comfortable taxi services for all your travel needs between Hadapsar, Magarpatta, and Mumbai."
    }
],


"tableData": [
    ["Magarpatta to Mumbai Cab", "Hadapsar to Mumbai taxi fare"],
    ["Hadapsar to Mumbai Airport taxi fare", "hadapsar to mumbai international airport cab"],
    ["hadapsar to mumbai innova cab", "hadapsar to mumbai ertiga cab"],
    ["cab service in hadapsar", "taxi service in hadapsar"],
    ["hadapsar to mumbai one way taxi", "pune to mumbai airport cab"],
    ["pune to mumbai ertiga cab", "Pune to Mumbai Innova Cab"],
    ["wakad to dadar cabs", "Hadapsar to mumbai cab price"],
    ["hadapsar to mumbai airport cab", "pune to mumbai airport drop innova"],
    ["Hadapsar to Dadar Cabs", ""]
],
"whychoose": [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Vedant Travels, we understand the importance of being on time. Whether you're traveling for business or leisure, our professional drivers ensure timely pickups and drop-offs from Hadapsar to Mumbai, so you can reach your destination without any stress."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer a wide range of comfortable and spacious vehicles for your journey. With well-maintained cars, air conditioning, ample legroom, and comfortable seating, your ride will be both enjoyable and relaxing."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are highly experienced in handling long-distance routes like Hadapsar to Mumbai. They are familiar with the best routes, traffic conditions, and ensure a safe, smooth, and efficient journey from start to finish."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Vedant Travels offers competitive pricing with no hidden fees. We provide transparent pricing, so you always know exactly what to expect when you book a cab for your Hadapsar to Mumbai journey."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. All our vehicles are equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols, ensuring you have a secure and comfortable ride."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether it’s an early morning flight or a late-night trip, Vedant Travels is available 24/7. You can book a cab at any time, and our customer service team will be ready to assist you with your needs."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Hadapsar to Mumbai cab is quick and easy. You can book a ride through our website or mobile app, or contact our customer service team for assistance."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer customized travel packages to cater to your specific needs. Whether it's for business, leisure, or any other special request, we’ll tailor the journey to ensure you have the best experience."
    }
]

    








    }


    const faqData = [
        {
            id: 1,
            question: 'How can I book a Hadapsar to Mumbai cab with Vedant Travels?',
            answer: 'You can easily book a cab online through our website or mobile app. Alternatively, you can reach out to our customer service team for help with your booking.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are highly experienced in long-distance travel, including the route from Hadapsar to Mumbai. They ensure a smooth, safe, and comfortable journey.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Hadapsar to Mumbai travel?',
            answer: 'We offer a variety of vehicles, including sedans, SUVs, and luxury cars. All our vehicles are spacious, comfortable, and well-maintained to ensure you have a pleasant ride.',
        },
        {
            id: 4,
            question: 'How do I pay for my Hadapsar to Mumbai cab rental?',
            answer: 'We accept multiple payment options, including cash, credit/debit cards, and online payments via our app, making it easy for you to settle the fare.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip cab from Hadapsar to Mumbai?',
            answer: 'Yes, you can book a round-trip cab. Simply provide your return details when making the booking, and we will take care of the rest.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any additional charges for waiting time or detours will be communicated to you in advance, ensuring complete transparency in pricing.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing in Mumbai after my drop-off?',
            answer: 'Yes, we offer sightseeing services in Mumbai. Visit popular landmarks like the Gateway of India, Marine Drive, and more with one of our trusted drivers.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Hadapsar to Mumbai cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have more luggage or special requirements, please let us know when booking, and we will make necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Hadapsar and Mumbai?',
            answer: 'Yes, we provide corporate travel services for business meetings, conferences, or corporate events. Contact us for tailored travel packages that suit your company’s needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Hadapsar to Mumbai journey?',
            answer: 'Vedant Travels offers reliable, affordable, and comfortable travel with professional drivers, well-maintained vehicles, and a focus on customer satisfaction. We guarantee a smooth, safe, and enjoyable journey from Hadapsar to Mumbai.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Amit Patil",
            title: "Customer",
            quote: "I had an excellent experience traveling from Hadapsar to Mumbai with Vedant Travels. The driver was professional, the vehicle was clean and comfortable, and the ride was smooth. I will definitely use their service again!",
            rating: 5,
        },
        {
            name: "Mrs. Sushila Sharma",
            title: "Customer",
            quote: "We used Vedant Travels for our family trip from Hadapsar to Mumbai. The vehicle was spacious, and the driver was courteous and punctual. The journey was hassle-free, and we are very happy with the service.",
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
        "name": "Hadapsar to Mumbai Cab | Vedant Travels",
        "description": "Book your Hadapsar to Mumbai cab with Vedant Travels for a hassle-free journey. We offer premium vehicles like Innova Crysta, Ertiga, and Swift Dzire for airport transfers, one-way trips, and round trips. Enjoy reliable and affordable taxi services.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.7",
          "ratingCount": "1100"
        }
      };
      
     
      

    return (
        <div>
           
           <Helmet>
        <title>Hadapsar to Mumbai Cab | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Hadapsar to Mumbai cab with Vedant Travels. We provide affordable and reliable taxi services for one-way trips, airport transfers, and round trips. Choose from Innova Crysta, Ertiga, and Swift Dzire." />
        <meta name="keywords" content="Hadapsar to Mumbai Cab, Magarpatta to Mumbai Cab, Hadapsar to Mumbai taxi fare, Hadapsar to Mumbai Airport taxi fare, hadapsar to mumbai international airport cab, hadapsar to mumbai innova cab, hadapsar to mumbai ertiga cab, cab service in hadapsar, taxi service in hadapsar, hadapsar to mumbai one way taxi, pune to mumbai airport cab, pune to mumbai ertiga cab, Pune to Mumbai Innova Cab, wakad to dadar cabs, Hadapsar to mumbai cab price, hadapsar to mumbai airport cab, pune to mumbai airport drop innova, Hadapsar to Dadar Cabs, dadar to mumbai airport taxi fare, Hadapsar to bandra Cabs, cab service in hadapsar, Taxi service in magarpatta city, hadapsar to mumbai innova taxi fare, hadapsar to navi mumbai cab fare, hadapsar to mumbai airport cab, innova crysta on rent in hadapsar, Pune Mumbai Vedant Travels, Cab service in pune, Pune to Mumbai airport cab, Pune Mumbai Cab" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/hadapsar-to-mumbai-cab" />
        <script type="application/ld+json">
          {JSON.stringify(jsonData)}
        </script>
      </Helmet>
            <div
                className="site-breadcrumb"
                style={{ background: 'url(/img/breadcrumb/01.jpg)' }}
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
                            <img src='./images/keyword/13.jpg' alt='img' />
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

export default Hadapsartomumbaicab;
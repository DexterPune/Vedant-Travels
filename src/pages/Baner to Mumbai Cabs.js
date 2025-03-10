
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Banertomumbaicabs() {



    const cardData =
    {
        keyword: 'Baner to Mumbai Cabs   ',
        heading: 'Vedant Travels: Baner to Mumbai Cabs   ',
        headingDescription: 'Vedant Travels offers affordable and transparent taxi fares for Baner to Mumbai travel, ensuring a cost-effective and comfortable journey. Our pricing is competitive, with no hidden charges, and we provide multiple cab options to suit your budget and preferences.',

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
        "name": "Baner to Mumbai Taxi Fare",
        "description": "Traveling from Baner to Mumbai? Vedant Travels offers competitive and affordable taxi fares for your journey. Whether you're looking for a one-way ride or a round-trip, we provide transparent pricing with no hidden charges. Book your ride today for a comfortable and reliable journey!"
    },
    {
        "name": "Baner to Mumbai One Way Cab",
        "description": "Need a one-way ride from Baner to Mumbai? Vedant Travels provides easy and affordable one-way cab services. Our professional drivers ensure you reach your destination safely and on time. Book online for a seamless ride."
    },
    {
        "name": "Baner to Mumbai Taxi Service",
        "description": "For dependable taxi services from Baner to Mumbai, choose Vedant Travels. We offer well-maintained vehicles, including the Innova and Ertiga, ensuring a comfortable and smooth ride."
    },
    {
        "name": "Baner to Mumbai Airport Drop",
        "description": "Heading to Mumbai Airport from Baner? Choose Vedant Travels for a prompt, comfortable, and hassle-free airport drop. We offer affordable pricing and professional drivers to ensure you arrive on time for your flight."
    },
    {
        "name": "Baner to Mumbai Airport Cab Service",
        "description": "Need a reliable taxi service from Baner to Mumbai Airport? Vedant Travels offers convenient airport cab services that provide comfort and punctuality. Book your ride online for easy and smooth airport transfers."
    },
    {
        "name": "Baner to Mumbai Ertiga Cab Service",
        "description": "Traveling with a group or family? Book an Ertiga cab from Baner to Mumbai with Vedant Travels for a spacious and comfortable ride. The Ertiga offers the perfect balance of affordability and space."
    },
    {
        "name": "Baner to Mumbai International Airport Cab",
        "description": "Catch your flight on time with Vedant Travels’ dependable cab services from Baner to Mumbai International Airport. Our experienced drivers will ensure you have a smooth ride, arriving promptly at the airport."
    },
    {
        "name": "Baner to Mumbai Innova Crysta Cab",
        "description": "For a premium travel experience, book an Innova Crysta cab from Baner to Mumbai. The Innova Crysta offers added luxury and comfort, making it perfect for business or family trips."
    },
    {
        "name": "Baner to Mumbai Sedan Cab",
        "description": "Need a sedan for your trip from Baner to Mumbai? Vedant Travels offers sedan cabs, including the Swift Dzire, for a comfortable and affordable ride. Perfect for solo travelers or small groups, our sedan cabs offer a smooth and hassle-free journey."
    },
    {
        "name": "Baner to Mumbai Swift Dzire Car",
        "description": "Looking for a compact and comfortable ride? Book a Swift Dzire car for your journey from Baner to Mumbai. Affordable and reliable, the Dzire is perfect for those who want a stress-free travel experience."
    },
    {
        "name": "Baner to Mumbai Round Trip",
        "description": "Planning a round trip from Baner to Mumbai? Vedant Travels offers flexible round-trip services at competitive pricing. Enjoy a smooth, comfortable ride on your way to and from Mumbai, with well-maintained vehicles and professional drivers."
    },
    {
        "name": "Pune to Mumbai Ertiga Cab",
        "description": "For a comfortable journey from Pune to Mumbai, book an Ertiga cab with Vedant Travels. Spacious and ideal for family travel, the Ertiga ensures a comfortable ride throughout your journey."
    },
    {
        "name": "Pune to Mumbai Innova Cab",
        "description": "Looking for a premium ride from Pune to Mumbai? Choose the Innova with Vedant Travels for a luxurious, spacious, and smooth travel experience. Perfect for group travel, corporate trips, or family journeys."
    },
    {
        "name": "Baner to Mumbai Airport Cabs",
        "description": "Traveling from Baner to Mumbai Airport? Vedant Travels offers dependable and affordable airport taxi services. Book your ride online and enjoy a stress-free and comfortable journey."
    },
    {
        "name": "Baner to Airport Cabs Booking Online",
        "description": "Booking a cab from Baner to Mumbai Airport is now easy with Vedant Travels’ online booking service. Choose your preferred vehicle and get a reliable ride to the airport at affordable rates."
    },
    {
        "name": "Baner to Andheri Cab Booking",
        "description": "Need a cab from Baner to Andheri? Vedant Travels provides affordable and reliable cab services for this route. Our experienced drivers will ensure you reach your destination comfortably and on time."
    },
    {
        "name": "Baner to Borivali Cab Booking",
        "description": "For a smooth and comfortable ride from Baner to Borivali, Vedant Travels offers reliable taxi services. Book your ride with us for a hassle-free journey."
    },
    {
        "name": "Baner to Mumbai Central Cab",
        "description": "If you're traveling to Mumbai Central, Vedant Travels offers affordable and dependable cab services from Baner. Enjoy a comfortable ride with professional drivers and well-maintained vehicles."
    },
    {
        "name": "Baner to Bandra Cab",
        "description": "Choose Vedant Travels for your journey from Baner to Bandra. Our reliable and comfortable cab services ensure a smooth ride at affordable prices."
    },
    {
        "name": "Baner to Dadar Cabs",
        "description": "Need a cab from Baner to Dadar? Vedant Travels provides prompt and professional taxi services for a smooth and comfortable ride. Book your ride online for easy and efficient travel."
    },
    {
        "name": "Contact Information",
        "description": "For bookings and inquiries, contact Vedant Travels at +91 8177869909. We offer reliable, affordable, and comfortable taxi services from Baner to Mumbai and beyond."
    }
],


     "tableData": [
    ["baner to mumbai taxi fare", "baner to mumbai one way cab"],
    ["baner to mumbai taxi service", "baner to mumbai airport drop"],
    ["baner to mumbai airport cab service", "baner to mumbai ertiga cab service"],
    ["baner to mumbai international airport cab", "baner to mumbai innova crysta cab"],
    ["baner to mumbai sedan cab", "baner to mumbai swift dzire car"],
    ["baner to mumbai round trip", "pune to mumbai ertiga cab"],
    ["Pune to Mumbai Innova Cab", "baner to mumbai airport Cabs"],
    ["baner to airport cabs booking online", "baner to andheri cab booking"],
    ["baner to borivali cab booking", "baner to mumbai central cab"],
    ["baner to bandra cab", "banner to dadar cabs"],
    ["Vedant Travels", "Cab service in pune"],
    ["Pune to Mumbai airport cab", "Pune Mumbai Cab"]
],
"whychoose": [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Vedant Travels, we value your time. Whether you are traveling for business or leisure, our drivers ensure timely pickups and drop-offs between Baner and Mumbai, so you can travel stress-free and on schedule."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer a fleet of comfortable and well-maintained vehicles for your journey from Baner to Mumbai. With air conditioning, comfortable seating, and ample space, our cabs ensure a pleasant and relaxing ride."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are well-trained and experienced in navigating the route between Baner and Mumbai. They are familiar with the best routes to avoid traffic, ensuring you a smooth, safe, and efficient journey."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Vedant Travels offers competitive prices with no hidden charges. We believe in complete transparency, providing you with upfront pricing so you know exactly what you are paying for."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. All of our vehicles are equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols to ensure a secure journey."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether you need an early morning ride or a late-night return, Vedant Travels is available 24/7. Book a cab from Baner to Mumbai anytime, and our team will be ready to assist."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a cab for Baner to Mumbai is easy and fast. Simply visit our website or mobile app, enter your travel details, and book your ride. If you need help, our customer service team is available to assist you."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether it’s a business trip, family vacation, or a solo adventure, we offer tailored travel packages for your Baner to Mumbai journey. Let us know your preferences, and we’ll customize the trip to meet your needs."
    }
]

    








    }


    const faqData = [
        {
            id: 1,
            question: 'How can I book a Baner to Mumbai cab with Vedant Travels?',
            answer: 'You can easily book a cab online through our website or mobile app. Alternatively, you can contact our customer service team for assistance in making a booking.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, all of our drivers are experienced and knowledgeable in handling long-distance routes, including the Baner to Mumbai journey. They ensure a smooth and safe ride for you.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Baner to Mumbai travel?',
            answer: 'We offer a variety of vehicles including sedans, SUVs, and luxury cars for your journey. All vehicles are spacious, comfortable, and well-maintained.',
        },
        {
            id: 4,
            question: 'How do I pay for my Baner to Mumbai cab rental?',
            answer: 'You can pay via multiple payment options, including cash, credit/debit cards, or online payments through our mobile app.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip cab from Baner to Mumbai?',
            answer: 'Yes, round-trip bookings are available. Provide your return details when making your booking, and we’ll take care of the rest.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any extra charges for waiting time or detours will be clearly communicated to you before you confirm the booking. We believe in transparent pricing with no hidden costs.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing in Mumbai after my drop-off?',
            answer: 'Yes, we offer customized sightseeing packages in Mumbai. Explore iconic landmarks such as the Gateway of India, Marine Drive, and more with a dedicated driver.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Baner to Mumbai cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have more luggage or special requirements, please inform us at the time of booking so we can make necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Baner and Mumbai?',
            answer: 'Yes, we provide corporate travel services tailored to business needs, including airport transfers, meetings, and team outings. Contact us for customized corporate packages.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Baner to Mumbai journey?',
            answer: 'Vedant Travels offers reliable, affordable, and comfortable cabs with professional drivers. We prioritize your safety and satisfaction, ensuring you have a pleasant and stress-free journey from Baner to Mumbai.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Anil Patil",
            title: "Customer",
            quote: "I booked a cab with Vedant Travels for my business trip from Baner to Mumbai. The cab was on time, the driver was courteous, and the ride was smooth. I would highly recommend their services!",
            rating: 5,
        },
        {
            name: "Mrs. Neha Joshi",
            title: "Customer",
            quote: "The cab service from Baner to Mumbai was exceptional. The driver was professional, and the vehicle was comfortable and clean. It made our trip very enjoyable. We’ll definitely use Vedant Travels again!",
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
            place: "/images/keyword/1.jpg",
            text: "Pune to Mumbai Cab",
        },
        {
            place: "/images/keyword/2.jpg",
            text: "Pune to Mumbai Airport Cab",
        },
        {
            place: "/images/keyword/3.jpg",
            text: "Pune to Mumbai International Airport Cab",
        },
        {
            place: "/images/keyword/4.jpg",
            text: "Pune to Mumbai One Way Cab",
        },
        {
            place: "/images/keyword/5.jpg",
            text: "Pune Mumbai Car Hire",
        },
        {
            place: "/images/keyword/6.jpg",
            text: "  Pune to Mumbai Taxi Fare ",
        },
        {
            place: "/images/keyword/7.jpg",
            text: "Pune to Mumbai Online Cab Booking",
        },

        {
            place: "/images/keyword/8.jpg",
            text: " Pimpri Chinchwad to Mumbai Cab",
        },

        {
            place: "/images/keyword/9.jpg",
            text: "Baner to Mumbai Cabs",
        },
        {
            place: "/images/keyword/10.jpg",
            text: "Hinjewadi to Mumbai Cab",
        },

        {
            place: "/images/keyword/11.jpg",
            text: "Pimple Saudagar to Mumbai Cab Service",
        },
        {
            place: "/images/keyword/12.jpg",
            text: "Wakad to Mumbai Cab",
        },

        {
            place: "/images/keyword/13.jpg",
            text: "Hadapsar to Mumbai Cab",
        },

        {
            place: "/images/keyword/14.jpg",
            text: "Kalyani Nagar to Mumbai Taxi",
        },
        {
            place: "/images/keyword/15.jpg",
            text: "Koregaon Park to Mumbai Cab",
        },
        {
            place: "/images/keyword/16.jpg",
            text: " Kothrud to Mumbai Cab",
        },
        {
            place: "/images/keyword/17.jpg",
            text: "Kharadi to Mumbai Cab",
        },
        {
            place: "/images/keyword/18.jpg",
            text: "Shivajinagar to Mumbai Cab",
        },
        {
            place: "/images/keyword/19.jpg",
            text: "Pune to Mumbai Ertiga Cab",
        },
        {
            place: "/images/keyword/20.jpg",
            text: " Pune to Mumbai Innova Crysta Cab",
        },
        
        {
            place: "/images/keyword/22.jpg",
            text: "Kondhwa to Mumbai Cab",
        },
        {
            place: "/images/keyword/23.jpg",
            text: "Viman Nagar to Mumbai Cabs",
        },
        {
            place: "/images/keyword/24.jpg",
            text: "Katraj to Mumbai Cab Service",
        },
        {
            place: "/images/keyword/25.jpg",
            text: " Pune Station to Mumbai Cabs Service",
        },
        {
            place: "/images/keyword/26.jpg",
            text: "Boat Club Road to Mumbai Cab ",
        },
        {
            place: "/images/keyword/27.jpg",
            text: " Vishrantwadi to Mumbai Cab",
        },
    ];


    const images = [
        { src: "/images/ourfleet/1.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/5.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/2.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/3.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/4.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/7.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/8.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/9.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/6.jpg", alt: "Image 1" },

    ];


    const jsonData = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Baner to Mumbai Cabs | Vedant Travels",
        "description": "Book your Baner to Mumbai cab with Vedant Travels for affordable and reliable service. We provide one-way trips, airport drops, and round trips with vehicles like Innova Crysta, Ertiga, Swift Dzire, and Sedans. Enjoy seamless travel with our professional drivers.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.7",
          "ratingCount": "1700"
        }
      };
      
     


    return (
        <div>
            <Helmet>
        <title>Baner to Mumbai Cabs | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Baner to Mumbai cab with Vedant Travels. Choose from Innova Crysta, Ertiga, Swift Dzire, and Sedans for one-way trips, airport drops, or round trips. Reliable service at affordable rates." />
        <meta name="keywords" content="baner to mumbai taxi fare, baner to mumbai one way cab, baner to mumbai taxi service, baner to mumbai airport drop, baner to mumbai airport cab service, baner to mumbai ertiga cab service, baner to mumbai international airport cab, baner to mumbai innova crysta cab, baner to mumbai sedan cab, baner to mumbai swift dzire car, baner to mumbai round trip, pune to mumbai ertiga cab, Pune to Mumbai Innova Cab, baner to mumbai airport Cabs, baner to airport cabs booking online, baner to andheri cab booking, baner to borivali cab booking, baner to mumbai central cab, baner to bandra cab, banner to dadar cabs, Vedant Travels, Cab service in pune, Pune to Mumbai airport cab, Pune Mumbai Cab" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/baner-to-mumbai-cabs" />
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
                            <img src='/images/keyword/9.jpg' alt='img' />
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

export default Banertomumbaicabs;

import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Kondhwatomumbaicab() {



    const cardData =
    {
        keyword: 'Kondhwa to Mumbai Cab  ',
        heading: 'Vedant Travels: Kondhwa to Mumbai Cab  ',
        headingDescription: 'Vedant Travels offers affordable and transparent taxi fares for Kondhwa to Mumbai travel, ensuring a comfortable and seamless journey. We provide competitive pricing with no hidden charges and offer various cab options, including sedans, SUVs, and premium vehicles, to cater to your preferences and budget.',

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
        "name": "Kondhwa to Mumbai Cab Fare",
        "description": "Looking for an affordable and reliable ride from Kondhwa to Mumbai? Vedant Travels offers competitive fares for your journey, ensuring you travel comfortably and within your budget."
    },
    {
        "name": "Kondhwa to Mumbai Airport Cab",
        "description": "For a timely and comfortable ride from Kondhwa to Mumbai Airport, choose Vedant Travels. Our professional drivers ensure you reach your flight on time, without any hassle."
    },
    {
        "name": "Kondhwa to Navi Mumbai Cab",
        "description": "Whether you're traveling for business or leisure, Vedant Travels offers reliable and comfortable cab services from Kondhwa to Navi Mumbai. Our vehicles are well-maintained, ensuring a smooth ride."
    },
    {
        "name": "Cab Service in Kondhwa",
        "description": "For all your travel needs in Kondhwa, Vedant Travels offers premium cab services. We are committed to providing a comfortable, safe, and reliable travel experience."
    },
    {
        "name": "NIBM Road to Mumbai Cab",
        "description": "Travel comfortably from NIBM Road to Mumbai with Vedant Travels. Our cabs are equipped for a smooth and relaxing journey, ensuring you reach your destination on time."
    },
    {
        "name": "NIBM Road to Mumbai Airport Cab",
        "description": "Catch your flight on time with Vedant Travels' NIBM Road to Mumbai Airport cab service. Our drivers are experienced and ensure a punctual and comfortable airport transfer."
    },
    {
        "name": "Cab Service in NIBM Road",
        "description": "Vedant Travels provides reliable and efficient cab services on NIBM Road in Pune. Whether you need a quick trip or a longer journey, we ensure you travel in comfort and style."
    },
    {
        "name": "Cabs Service Undri Road",
        "description": "For your travel needs along Undri Road, choose Vedant Travels. Our cab services are designed to offer comfort and convenience, ensuring a smooth ride whether you're traveling locally or out of town."
    },
    {
        "name": "Taxi Service in Undri Pune",
        "description": "Looking for reliable taxi service in Undri, Pune? Vedant Travels offers efficient and comfortable taxi services to meet all your travel needs in and around the Undri area."
    },
    {
        "name": "Taxi Service Katraj",
        "description": "Travel comfortably from Katraj to your destination with Vedant Travels’ professional taxi service. Whether it’s for a local ride or a longer journey, we ensure a stress-free experience."
    },
    {
        "name": "Katraj to Mumbai Cab Service",
        "description": "Vedant Travels provides affordable and reliable cab services from Katraj to Mumbai. Our experienced drivers and well-maintained vehicles ensure you travel comfortably and safely."
    },
    {
        "name": "Katraj to Mumbai Airport Cab Service",
        "description": "For your ride from Katraj to Mumbai Airport, Vedant Travels offers punctual and comfortable cab services. Our drivers ensure a smooth and timely airport transfer, so you don’t miss your flight."
    },
    {
        "name": "Kondhwa to Mumbai Cab Fare",
        "description": "Vedant Travels offers affordable and transparent pricing for your trip from Kondhwa to Mumbai. Book your ride today for a stress-free and comfortable journey."
    },
    {
        "name": "Kondhwa to Mumbai Airport Cab",
        "description": "Need a cab from Kondhwa to Mumbai Airport? Vedant Travels offers a seamless experience, ensuring you arrive at the airport comfortably and on time."
    },
    {
        "name": "Kondana to Bandra Cab Service",
        "description": "For a smooth and comfortable ride from Kondana to Bandra, book with Vedant Travels. We ensure a convenient and relaxing trip to your destination."
    },
    {
        "name": "Kondana to Dadar Cab Service",
        "description": "Travel comfortably from Kondana to Dadar with Vedant Travels. Our reliable cab services ensure that your journey is smooth, on time, and convenient."
    },
    {
        "name": "Kondana to Mumbai Airport Cabs",
        "description": "Need a ride from Kondana to Mumbai Airport? Vedant Travels offers timely and efficient cab services to ensure you catch your flight without any hassle."
    },
    {
        "name": "Cab Service in Kondhwa Pune",
        "description": "For top-notch cab services in Kondhwa, Pune, choose Vedant Travels. We offer reliable and comfortable transportation options, whether you're going for a business meeting or a family outing."
    },
    {
        "name": "Vedant Travels Pune",
        "description": "For the best cab service in Pune, choose Vedant Travels. We specialize in providing a smooth, comfortable, and reliable travel experience across the city and beyond."
    },
    {
        "name": "Cab Service in Pune",
        "description": "Vedant Travels offers a range of cab services in Pune, from local rides to outstation trips, ensuring comfort, safety, and timely arrivals."
    },
    {
        "name": "Pune to Mumbai Airport Cab",
        "description": "For a stress-free journey to Mumbai Airport, Vedant Travels offers reliable and comfortable cabs. Book now for a timely ride and experience a smooth transfer."
    },
    {
        "name": "Pune Mumbai Cab",
        "description": "Looking for a comfortable and affordable ride from Pune to Mumbai? Vedant Travels offers well-maintained cabs, professional drivers, and competitive rates for your journey."
    },
    {
        "name": "Contact Information",
        "description": "For bookings or inquiries, contact Vedant Travels at +91 8208126878. Our team ensures a comfortable and stress-free experience for all your travel needs."
    }
],


"tableData": [
    ["Kondhwa to Mumbai Cab Fare", "Kondhwa to Mumbai Airport Cab"],
    ["Kondhwa to Navi Mumbai Cab", "Cab Service In Kondhwa"],
    ["NIBM Road to Mumbai Cab", "NIBM Road to Mumbai Airport Cab"],
    ["Cab Service in NIBM Road", "Cabs Service Undri Road"],
    ["Taxi Service in Undri Pune", "Taxi Service Katraj"],
    ["Katraj to Mumbai Cab Service", "Katraj to Mumbai Airport Cab Service"],
    ["Kondhwa to Mumbai Cab Fare", "Kondhwa to Mumbai Airport Cab"],
    ["Kondana to Bandra Cab Service", "Kondana to Dadar Cab Service"],
    ["Kondana to Mumbai Airport Cabs", "Cab Service in Kondhwa Pune"],
    ["Vedant Travels Pune", "Cab Service in Pune"],
    ["Pune to Mumbai Airport Cab", "Pune Mumbai Cab"]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we understand how important punctuality is when traveling between Kondhwa and Mumbai. Our drivers are committed to ensuring that you are picked up on time and dropped off at your destination promptly. Expect a seamless, timely journey every time."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicles",
      "WhyChoosedescription": "Whether you choose a sedan, SUV, or other vehicle, our cabs are designed for your comfort. With air conditioning, ample legroom, and well-maintained interiors, our Kondhwa to Mumbai Cab services provide a relaxing and enjoyable ride for you and your companions."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our drivers are skilled and experienced in navigating the route from Kondhwa to Mumbai. They know the best routes to avoid traffic, ensuring a smooth and efficient ride. You can rely on their professionalism and experience for a safe and hassle-free journey."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "Vedant Travels offers competitive and transparent pricing for Kondhwa to Mumbai Cab services. We believe in clear communication, and there are no hidden charges, so you know exactly what you’ll be paying for, ensuring a stress-free booking experience."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Your safety is our priority. All our vehicles are equipped with modern safety features, including seat belts, airbags, and GPS tracking. Our drivers follow strict safety protocols, ensuring a secure and comfortable ride from Kondhwa to Mumbai."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "Whether you need an early morning ride or a late-night return, Vedant Travels is available 24/7 to cater to your needs. You can book a cab anytime, and our customer service team will assist you in booking the perfect vehicle for your journey."
    },
    {
      "WhyChooseheading": "Hassle-Free Booking Process",
      "WhyChoosedescription": "Booking a cab for Kondhwa to Mumbai is easy and quick. You can book through our website, mobile app, or contact our customer service team for personalized assistance, ensuring a smooth and efficient booking process."
    },
    {
      "WhyChooseheading": "Customized Travel Packages",
      "WhyChoosedescription": "We offer customized travel packages for your Kondhwa to Mumbai journey. Whether you're traveling for business, leisure, or special events, we can tailor your travel experience to suit your needs and preferences."
    }
  ]





    








    }


    const faqData = [
        {
            id: 1,
            question: 'How can I book a Kondhwa to Mumbai cab with Vedant Travels?',
            answer: 'You can easily book a cab online via our website or mobile app. Alternatively, you can reach out to our customer service team for assistance with your booking.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are experienced and familiar with the route from Kondhwa to Mumbai. They ensure a safe, timely, and smooth journey, adhering to all safety protocols.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Kondhwa to Mumbai travel?',
            answer: 'We offer a variety of vehicles, including sedans, SUVs, and premium cars. All of our vehicles are spacious, comfortable, and well-maintained, ensuring a pleasant ride.',
        },
        {
            id: 4,
            question: 'How do I pay for my Kondhwa to Mumbai cab rental?',
            answer: 'We accept multiple payment options, including cash, credit/debit cards, and online payment through our app for your convenience.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip cab from Kondhwa to Mumbai?',
            answer: 'Yes, you can book a round-trip cab. Just provide your return details during the booking process, and we will handle everything for you.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any extra charges for waiting or detours will be communicated to you upfront during the booking process, ensuring complete transparency.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing in Mumbai after my drop-off?',
            answer: 'Yes, we offer customized sightseeing tours in Mumbai. After your Kondhwa to Mumbai journey, you can explore iconic spots like the Gateway of India, Marine Drive, and other popular attractions.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Kondhwa to Mumbai cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have more luggage or special requirements, please inform us at the time of booking, and we will make necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Kondhwa and Mumbai?',
            answer: 'Yes, we offer corporate travel services for business meetings, conferences, and other professional events. We can tailor the trip to meet the needs of your company.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Kondhwa to Mumbai journey?',
            answer: 'Vedant Travels is known for providing reliable, comfortable, and safe services with professional drivers and transparent pricing. We ensure that your Kondhwa to Mumbai journey is smooth, stress-free, and enjoyable.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Akash Patil",
            title: "Customer",
            quote: "I traveled from Kondhwa to Mumbai with Vedant Travels, and it was an amazing experience. The driver was punctual, the vehicle was clean and comfortable, and the ride was smooth. I will definitely book with them again!",
            rating: 5,
        },
        {
            name: "Mrs. Sunita Rao",
            title: "Customer",
            quote: "Our family took a trip from Kondhwa to Mumbai, and we chose Vedant Travels. The vehicle was spacious, and the driver was courteous and professional. The journey was comfortable, and we arrived on time. Highly recommended!",
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
        "name": "Kondhwa to Mumbai Cab | Vedant Travels",
        "description": "Book your Kondhwa to Mumbai cab with Vedant Travels. We provide affordable and comfortable rides to Mumbai airport, Navi Mumbai, Dadar, Bandra, and other locations. Choose from a wide range of vehicles including Swift Dzire, Etios, and Innova.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.7",
          "ratingCount": "850"
        }
      };
      
      
      

    return (
        <div>
           
           <Helmet>
        <title>Kondhwa to Mumbai Cab | Vedant Travels | Affordable & Comfortable Rides</title>
        <meta name="description" content="Book your Kondhwa to Mumbai cab with Vedant Travels for affordable and reliable rides. Whether you're traveling to the airport, Navi Mumbai, or popular city destinations, we provide comfortable vehicles including Swift Dzire, Etios, and Innova." />
        <meta name="keywords" content="Kondhwa to Mumbai Cab, Kondhwa to Mumbai Airport Cab, Kondhwa to Navi Mumbai Cab, Cab Service in Kondhwa Pune, NIBM Road to Mumbai Cab, NIBM Road to Mumbai Airport Cab, Cab Service in NIBM Road, Kondhwa to Dadar Cab, Kondhwa to Bandra Cab Service, Taxi Service in Undri Pune, Katraj to Mumbai Cab, Katraj to Mumbai Airport Cab, Kondhwa to Mumbai Round Trip, Pune to Mumbai Cab, Vedant Travels Pune, Pune to Mumbai Airport Cab, Pune Mumbai Cab" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/kondhwa-to-mumbai-cab" />
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
                            <img src='./images/keyword/22.jpg' alt='img' />
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

export default Kondhwatomumbaicab;
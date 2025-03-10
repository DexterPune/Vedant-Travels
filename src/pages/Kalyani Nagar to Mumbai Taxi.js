
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Kalyaninagartomumbaitaxi() {



    const cardData =
    {
        keyword: 'Kalyani Nagar to Mumbai Taxi  ',
        heading: 'Vedant Travels: Kalyani Nagar to Mumbai Taxi ',
        headingDescription: 'Vedant Travels offers affordable and transparent taxi fares for Kalyani Nagar to Mumbai travel, ensuring a cost-effective and comfortable journey. Our pricing is competitive, with no hidden charges, and we provide multiple cab options to suit your budget and preferences.',

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
        "name": "Kalyani Nagar to Mumbai Taxi Fare",
        "description": "Looking for an affordable ride from Kalyani Nagar to Mumbai? Vedant Travels offers competitive and transparent pricing for your taxi journey. Enjoy comfort and reliability with no hidden charges."
    },
    {
        "name": "Kalyani Nagar to Mumbai Airport Cab",
        "description": "Book a taxi from Kalyani Nagar to Mumbai Airport with Vedant Travels. We offer a timely, hassle-free ride to the airport, ensuring you catch your flight without any stress."
    },
    {
        "name": "Kalyani Nagar to Dadar Cab",
        "description": "Traveling from Kalyani Nagar to Dadar? Choose Vedant Travels for a comfortable and efficient cab ride. Our professional drivers ensure a smooth journey to Dadar, one of Mumbai’s bustling areas."
    },
    {
        "name": "Kalyani Nagar to Mumbai International Airport Cab",
        "description": "For a reliable and convenient ride from Kalyani Nagar to Mumbai International Airport, Vedant Travels is your trusted choice. Our experienced drivers will ensure you reach the airport on time and in comfort."
    },
    {
        "name": "Kalyani Nagar to Mumbai One Day Cab",
        "description": "Explore Mumbai with Vedant Travels! We offer one-day cab services from Kalyani Nagar to Mumbai, ideal for sightseeing or business trips. Choose from our range of vehicles to make your day comfortable and hassle-free."
    },
    {
        "name": "Kalyani Nagar to Mumbai Airport Drop Cab",
        "description": "Need a cab from Kalyani Nagar to Mumbai Airport? Our drop services are available at competitive rates, ensuring a smooth and timely ride for your flight."
    },
    {
        "name": "Kalyani Nagar to Mumbai Drop Cab",
        "description": "Book a drop cab service from Kalyani Nagar to Mumbai with Vedant Travels. Our vehicles are well-maintained, and our drivers ensure that you have a comfortable and pleasant experience during your journey."
    },
    {
        "name": "Taxi Service in Kalyani Nagar Pune",
        "description": "Vedant Travels offers reliable and efficient taxi services in Kalyani Nagar. Whether you need a quick trip within the city or a ride to Mumbai, our cabs are the perfect choice."
    },
    {
        "name": "Cab Service in Kalyani Nagar",
        "description": "Looking for a dependable cab service in Kalyani Nagar? Vedant Travels offers a range of vehicles for your commuting needs, ensuring a smooth and comfortable journey every time."
    },
    {
        "name": "Pune to Mumbai Airport Cab",
        "description": "Need a ride to Mumbai Airport from Pune? Vedant Travels offers affordable and reliable airport transfer services. Whether you're flying for business or leisure, our cabs ensure comfort and punctuality."
    },
    {
        "name": "Pune to Mumbai Ertiga Cab",
        "description": "Book an Ertiga cab for your Pune to Mumbai journey. Spacious and comfortable, it’s an ideal choice for families or small groups traveling from Pune to Mumbai."
    },
    {
        "name": "Pune to Mumbai Innova Cab",
        "description": "Travel in comfort with an Innova cab from Pune to Mumbai. Whether it's a corporate trip or a family vacation, the Innova offers plenty of space and a smooth, luxurious ride."
    },
    {
        "name": "Kalyani Nagar to Mumbai Airport Cabs",
        "description": "Choose Vedant Travels for your ride from Kalyani Nagar to Mumbai Airport. We provide affordable, reliable, and comfortable cab services with professional drivers to ensure a stress-free airport transfer."
    },
    {
        "name": "Wadgaon Sheri to Mumbai Cabs",
        "description": "If you’re traveling from Wadgaon Sheri to Mumbai, Vedant Travels provides affordable and comfortable cab services to make your trip enjoyable and on time."
    },
    {
        "name": "Cab Service in Kalyani Nagar",
        "description": "We offer top-notch taxi services in Kalyani Nagar, catering to both local rides and long-distance trips to Mumbai. Our fleet of vehicles ensures comfort, reliability, and promptness for every journey."
    },
    {
        "name": "Car Rental Service in Kalyani Nagar",
        "description": "Looking for a car rental in Kalyani Nagar? Vedant Travels offers car hire services to suit your needs. Whether you need a vehicle for a day or a few days, we have flexible rental options available."
    },
    {
        "name": "Cab Service in Yerwada",
        "description": "Looking for a dependable cab service in Yerwada? Vedant Travels provides reliable taxi services from Yerwada to any destination, including Mumbai. Enjoy a comfortable ride with our well-maintained vehicles and professional drivers."
    },
    {
        "name": "Contact Information",
        "description": "For bookings and inquiries, contact Vedant Travels at +91 8177869909. We provide professional and comfortable taxi services for all your travel needs between Kalyani Nagar, Pune, and Mumbai."
    }
],


"tableData": [
    ["kalyani nagar to mumbai taxi fare", "kalyani nagar to mumbai airport cab"],
    ["kalyani nagar to dadar cab", "kalyani nagar to mumbai international airport cab"],
    ["kalyani nagar to mumbai one day cab", "kalyani nagar to mumbai airport drop cab"],
    ["kalyani nagar to mumbai drop cab", "taxi service in kalyani nagar pune"],
    ["cab service in kalyani nagar", "pune to mumbai airport cab"],
    ["pune to mumbai ertiga cab", "Pune to Mumbai Innova Cab"],
    ["kalyani nagar to mumbai airport Cabs", "wadgaon sheri to mumbai cabs"],
    ["cab service in kalyani nagar", "car rental service in kalyani nagar"],
    ["cab Service in yerwada", "Pune Mumbai Vedant Travels"],
    ["Cab service in pune", "Pune to Mumbai airport cab"]
],
"whychoose": [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Vedant Travels, we prioritize punctuality. Whether you’re traveling for a business trip or a vacation, our drivers ensure that your pickup and drop-off are timely, making your journey from Kalyani Nagar to Mumbai smooth and stress-free."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Enjoy your ride in comfort with our well-maintained, spacious vehicles. From sedans to SUVs and luxury cars, all our vehicles come with air conditioning, ample legroom, and comfortable seating to make your journey as comfortable as possible."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are not only professional but also well-experienced in handling long-distance routes like Kalyani Nagar to Mumbai. They know the best routes to avoid traffic and ensure a safe, efficient, and pleasant journey for you."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Vedant Travels offers competitive and transparent pricing. We make sure that there are no hidden charges, and the fare is communicated to you clearly during the booking process, so you know exactly what you’re paying for."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our top priority. All our vehicles are equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers strictly follow safety protocols, ensuring that you travel securely and comfortably."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether you need a ride in the early morning or late at night, Vedant Travels is available 24/7. You can book a taxi at any time, and our customer service team is always ready to assist you."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a taxi from Kalyani Nagar to Mumbai is quick and easy. You can book online via our website or mobile app, or you can get in touch with our customer service team for personalized assistance."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer customized travel packages for your journey, ensuring that your trip is tailored to your specific needs and preferences. Whether it’s for business, leisure, or a special event, we’ve got you covered."
    }
]


    








    }


    const faqData = [
        {
            id: 1,
            question: 'How can I book a Kalyani Nagar to Mumbai taxi with Vedant Travels?',
            answer: 'You can easily book a taxi online through our website or mobile app. Alternatively, you can contact our customer service team for assistance with your booking.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are highly trained and experienced in handling long-distance routes like Kalyani Nagar to Mumbai. They ensure a smooth, safe, and efficient ride.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Kalyani Nagar to Mumbai travel?',
            answer: 'We offer a range of vehicles including sedans, SUVs, and luxury cars. All our vehicles are spacious, clean, and well-maintained for your comfort.',
        },
        {
            id: 4,
            question: 'How do I pay for my Kalyani Nagar to Mumbai taxi rental?',
            answer: 'We offer multiple payment options, including cash, credit/debit cards, and online payments via our app, making the payment process simple and convenient for you.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip taxi from Kalyani Nagar to Mumbai?',
            answer: 'Yes, round-trip bookings are available. You can provide your return details when booking, and we will take care of the rest.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any additional charges for waiting or detours will be communicated to you upfront at the time of booking, ensuring there are no surprises.',
        },
        {
            id: 7,
            question: 'Can I hire a taxi for sightseeing in Mumbai after my drop-off?',
            answer: 'Yes, we offer sightseeing packages in Mumbai. Visit iconic places such as the Gateway of India, Marine Drive, and more with a trusted driver.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Kalyani Nagar to Mumbai taxi?',
            answer: 'Our vehicles can accommodate standard luggage. If you have more luggage or special requirements, please let us know when booking, and we will make the necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Kalyani Nagar and Mumbai?',
            answer: 'Yes, we offer corporate travel services for business meetings, events, and airport transfers. Contact us for customized corporate packages designed to meet your company’s needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Kalyani Nagar to Mumbai taxi journey?',
            answer: 'Vedant Travels is known for its reliable, safe, and affordable taxi services. Our experienced drivers, comfortable vehicles, and transparent pricing ensure a hassle-free journey from Kalyani Nagar to Mumbai.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Rajesh Kumar",
            title: "Customer",
            quote: "The experience with Vedant Travels was fantastic. The taxi was clean and comfortable, and the driver was very professional. I reached Mumbai on time, and I will definitely use their service again.",
            rating: 5,
        },
        {
            name: "Mrs. Priya Verma",
            title: "Customer",
            quote: "We used Vedant Travels for our trip from Kalyani Nagar to Mumbai. The booking process was simple, the taxi was spacious, and the driver was courteous. A great experience overall!",
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
        "name": "Kalyani Nagar to Mumbai Taxi | Vedant Travels",
        "description": "Book your Kalyani Nagar to Mumbai taxi with Vedant Travels for a comfortable and affordable ride. We offer premium vehicles such as Innova Crysta, Ertiga, and Swift Dzire for one-way trips, airport transfers, and more.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.8",
          "ratingCount": "1250"
        }
      };
      
      
      

    return (
        <div>
           <Helmet>
        <title>Kalyani Nagar to Mumbai Taxi | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Kalyani Nagar to Mumbai taxi with Vedant Travels. We provide reliable and affordable taxi services for one-way trips, airport transfers, and round trips. Choose from Innova Crysta, Ertiga, and Swift Dzire." />
        <meta name="keywords" content="Kalyani Nagar to Mumbai Taxi, Kalyani Nagar to Mumbai Airport Cab, Kalyani Nagar to Dadar Cab, Kalyani Nagar to Mumbai International Airport Cab, Kalyani Nagar to Mumbai One Day Cab, Kalyani Nagar to Mumbai Airport Drop Cab, Kalyani Nagar to Mumbai Drop Cab, taxi service in Kalyani Nagar Pune, cab service in Kalyani Nagar, Pune to Mumbai Airport Cab, Pune to Mumbai Ertiga Cab, Pune to Mumbai Innova Cab, Kalyani Nagar to Mumbai Airport Cabs, Wadgaon Sheri to Mumbai Cabs, car rental service in Kalyani Nagar, cab service in Yerwada, Pune Mumbai Vedant Travels, Cab service in Pune, Pune to Mumbai airport cab, Pune Mumbai Cab" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/kalyani-nagar-to-mumbai-taxi" />
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
                            <img src='/images/keyword/14.jpg' alt='img' />
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

export default Kalyaninagartomumbaitaxi;
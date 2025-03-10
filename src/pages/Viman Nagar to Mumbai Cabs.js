
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Vimannagartomumbaicabs() {



    const cardData =
    {
        keyword: 'Viman Nagar to Mumbai Cabs   ',
        heading: 'Vedant Travels: Viman Nagar to Mumbai Cabs  ',
        headingDescription: 'Vedant Travels offers affordable and transparent taxi fares for Viman Nagar to Mumbai travel, ensuring a comfortable and hassle-free journey. We provide competitive pricing with no hidden charges and a variety of cab options, including sedans, SUVs, and premium vehicles, to suit your preferences and budget.',

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
        "name": "Viman Nagar to Mumbai Airport Cab",
        "description": "Travel comfortably from Viman Nagar to Mumbai Airport with Vedant Travels. Our professional drivers ensure a timely and hassle-free airport transfer, so you reach your flight on time."
    },
    {
        "name": "Wadgaon Sheri to Mumbai Cab Service",
        "description": "For a smooth and comfortable ride from Wadgaon Sheri to Mumbai, choose Vedant Travels. We offer reliable cab services to ensure your journey is stress-free and timely."
    },
    {
        "name": "Pune Airport to Mumbai Airport",
        "description": "Need a ride from Pune Airport to Mumbai Airport? Vedant Travels provides efficient and comfortable airport transfer services to make your journey seamless and convenient."
    },
    {
        "name": "Pune to Mumbai Airport Cab",
        "description": "Vedant Travels offers reliable and affordable cab services for your journey from Pune to Mumbai Airport. We ensure a smooth and comfortable ride, so you can focus on your flight."
    },
    {
        "name": "Pune Airport to Mumbai International Airport",
        "description": "Book a comfortable and timely ride from Pune Airport to Mumbai International Airport with Vedant Travels. Our experienced drivers ensure a smooth transfer, helping you reach your terminal without any delays."
    },
    {
        "name": "Lohegaon to Mumbai Airport Cab Service",
        "description": "Choose Vedant Travels for a convenient and reliable cab ride from Lohegaon to Mumbai Airport. We guarantee timely arrivals and a comfortable ride, so you don’t miss your flight."
    },
    {
        "name": "Dhanori to Mumbai Airport Cab",
        "description": "Need a ride from Dhanori to Mumbai Airport? Vedant Travels offers dependable and comfortable cab services, ensuring you reach the airport in time for your flight."
    },
    {
        "name": "Vishrantwadi to Mumbai Cab Service",
        "description": "Travel from Vishrantwadi to Mumbai comfortably with Vedant Travels. Our professional drivers and well-maintained vehicles make your journey stress-free and pleasant."
    },
    {
        "name": "Yerwada to Mumbai Airport Cab Service",
        "description": "For a reliable and timely cab service from Yerwada to Mumbai Airport, Vedant Travels is the right choice. We offer smooth and comfortable rides to ensure you reach your destination on time."
    },
    {
        "name": "Cab Service in Viman Nagar",
        "description": "For reliable and convenient cab services in Viman Nagar, Pune, Vedant Travels offers a range of options that suit your needs. Whether it’s a local ride or an airport transfer, we ensure a smooth journey."
    },
    {
        "name": "Pune Airport Cabs",
        "description": "Looking for a ride from Pune Airport? Vedant Travels offers premium airport cab services, ensuring a comfortable and reliable journey to and from Pune Airport."
    },
    {
        "name": "Innova Crysta Hire in Viman Nagar",
        "description": "For a luxurious ride, hire an Innova Crysta in Viman Nagar with Vedant Travels. The Innova Crysta offers ample space, comfort, and a premium experience for your trips to the airport or beyond."
    },
    {
        "name": "Ertiga Hire in Viman Nagar",
        "description": "Travel comfortably with family or a small group by hiring an Ertiga from Vedant Travels in Viman Nagar. Our well-maintained Ertiga vehicles provide a comfortable and affordable solution for your travel needs."
    },
    {
        "name": "Pune Airport to Mumbai Airport Cab",
        "description": "Book a reliable and convenient cab service for your journey from Pune Airport to Mumbai Airport with Vedant Travels. We ensure timely and comfortable transfers with experienced drivers."
    },
    {
        "name": "Pune to Mumbai Airport Taxi Fare",
        "description": "Vedant Travels offers competitive pricing for your Pune to Mumbai Airport taxi. We ensure transparent and affordable fares with no hidden charges, so you can travel with peace of mind."
    },
    {
        "name": "Lohegaon to Mumbai Cab Service",
        "description": "Looking for a reliable ride from Lohegaon to Mumbai? Vedant Travels offers prompt and comfortable cab services, ensuring a smooth journey with no delays."
    },
    {
        "name": "Lohegaon to Mumbai Cab Service Price",
        "description": "Get affordable rates for your ride from Lohegaon to Mumbai with Vedant Travels. Our pricing is transparent, offering great value for money without compromising on comfort."
    },
    {
        "name": "Vedant Travels Pune",
        "description": "For reliable, comfortable, and affordable travel, choose Vedant Travels in Pune. We offer a range of cab services tailored to meet your travel needs, ensuring your journey is pleasant every time."
    },
    {
        "name": "Sedan Cabs on Rent in Viman Nagar",
        "description": "Vedant Travels offers sedan cabs for rent in Viman Nagar, providing an affordable and comfortable option for your travel needs. Whether you're traveling locally or to the airport, we’ve got you covered."
    },
    {
        "name": "Cab Service in Pune",
        "description": "Vedant Travels provides reliable cab services across Pune, including both local rides and outstation trips. Our professional drivers and well-maintained fleet ensure a smooth and enjoyable journey every time."
    },
    {
        "name": "Pune to Mumbai Airport Cab",
        "description": "Travel in comfort from Pune to Mumbai Airport with Vedant Travels. Our affordable and reliable cab services ensure you reach your flight on time and in comfort."
    },
    {
        "name": "Pune Mumbai Cab",
        "description": "Looking for a comfortable and affordable ride from Pune to Mumbai? Vedant Travels offers dependable cab services with a range of vehicles, from sedans to luxury options, to suit your preferences."
    },
    {
        "name": "Contact Information",
        "description": "For bookings or inquiries, contact Vedant Travels at +91 8208126878. We ensure a stress-free and comfortable journey, every time."
    }
],


"tableData": [
    ["Viman Nagar to Mumbai Airport Cab", "Wadgaon Sheri to Mumbai Mumbai Cab Service"],
    ["Pune Airport to Mumbai Airport", "Pune to Mumbai Airport Cab"],
    ["Pune Airport to Mumbai International Airport", "Lohegaon to Mumbai Mumbai Airport Cab Service"],
    ["Dhanori to Mumbai Airport Cab", "Vishrantwadi to Mumbai Cab Service"],
    ["Yerwada to Mumbai Airport Cab Service", "Cab Service in Viman Nagar"],
    ["Pune Airport Cabs", "Innova Crysta Hire in Viman Nagar"],
    ["Ertiga Hire in Viman Nagar", "Pune Airport to Mumbai Airport Cab"],
    ["Pune to Mumbai Airport Taxi Fare", "Lohegaon to Mumbai Cab Service"],
    ["Lohegaon to Mumbai Cab Service Price", "Vedant Travels Pune"],
    ["Sedan Cabs on Rent in Viman Nagar", "Cab Service in Pune"],
    ["Pune to Mumbai Airport Cab", "Pune Mumbai Cab"]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we value your time. Whether you're traveling for a business trip or a leisurely getaway, our drivers ensure timely pickups and prompt drop-offs for your Viman Nagar to Mumbai journey. Expect a smooth, on-time travel experience, every time."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicles",
      "WhyChoosedescription": "Our Viman Nagar to Mumbai Cabs are equipped with comfortable seating, ample legroom, and air conditioning for a relaxing ride. Whether you prefer a sedan, SUV, or another type of vehicle, we ensure your journey is as comfortable as possible."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our experienced drivers are well-versed in the best routes from Viman Nagar to Mumbai. They are skilled in handling long-distance travel and ensure that you have a smooth, safe, and efficient journey. You can trust Vedant Travels for a professional and stress-free experience."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "Vedant Travels offers competitive pricing for Viman Nagar to Mumbai Cabs, with no hidden charges. Our transparent pricing model means you know exactly what you’re paying for, ensuring a hassle-free booking process and no surprises along the way."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Your safety is our priority. All our vehicles are equipped with modern safety features such as seat belts, airbags, and GPS tracking. Our drivers follow strict safety protocols, ensuring a secure and comfortable journey from Viman Nagar to Mumbai."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "No matter the time, Vedant Travels is available 24/7. Whether it’s an early morning ride or a late-night return, we are always ready to accommodate your needs. You can book a cab anytime, and our customer service team will assist you promptly."
    },
    {
      "WhyChooseheading": "Hassle-Free Booking Process",
      "WhyChoosedescription": "Booking a Viman Nagar to Mumbai Cab is quick and easy. You can book online through our website or mobile app, or simply reach out to our customer service team for assistance with your booking."
    },
    {
      "WhyChooseheading": "Customized Travel Packages",
      "WhyChoosedescription": "Whether you're traveling for business, a special event, or leisure, we offer customized travel packages for your Viman Nagar to Mumbai journey. Let us know your requirements, and we’ll tailor your trip to ensure a personalized experience."
    }
  ]




    








    }


    const faqData = [
        {
            id: 1,
            question: 'How can I book a Viman Nagar to Mumbai cab with Vedant Travels?',
            answer: 'You can book a cab easily through our website or mobile app. Alternatively, you can contact our customer service team for personalized assistance with your booking.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are skilled and experienced in long-distance travel. They know the best routes from Viman Nagar to Mumbai, ensuring a smooth and efficient ride.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Viman Nagar to Mumbai travel?',
            answer: 'We offer a variety of vehicles, including sedans, SUVs, and premium cars. All of our vehicles are well-maintained, spacious, and equipped for comfort.',
        },
        {
            id: 4,
            question: 'How do I pay for my Viman Nagar to Mumbai cab rental?',
            answer: 'We accept multiple payment options, including cash, credit/debit cards, and online payment through our app, making the payment process flexible and convenient.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip cab from Viman Nagar to Mumbai?',
            answer: 'Yes, you can book a round-trip cab. Just provide your return details during the booking process, and we will handle the rest.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any additional charges for waiting or detours will be communicated to you upfront during the booking process, ensuring complete transparency.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing in Mumbai after my drop-off?',
            answer: 'Yes, we offer customized sightseeing tours in Mumbai. After your Viman Nagar to Mumbai journey, you can explore iconic spots like the Gateway of India, Marine Drive, and more with a trusted driver.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Viman Nagar to Mumbai cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have more luggage or special requirements, please inform us at the time of booking, and we will make necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Viman Nagar and Mumbai?',
            answer: 'Yes, we offer corporate travel services for business meetings, conferences, and other professional events. We can customize your journey to suit your company’s needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Viman Nagar to Mumbai journey?',
            answer: 'Vedant Travels offers reliable, comfortable, and safe services with professional drivers and transparent pricing. Our goal is to make your Viman Nagar to Mumbai journey smooth, enjoyable, and stress-free.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Anil Deshmukh",
            title: "Customer",
            quote: "I booked a cab from Viman Nagar to Mumbai with Vedant Travels, and it was an excellent experience. The car was clean, the driver was professional, and the journey was smooth. I will definitely use them again for my future trips.",
            rating: 5,
        },
        {
            name: "Mrs. Rina Patel",
            title: "Customer",
            quote: "We used Vedant Travels for our trip from Viman Nagar to Mumbai. The vehicle was spacious, and the driver was courteous. The trip was comfortable, and we arrived on time. Highly recommend their service!",
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
        "name": "Viman Nagar to Mumbai Cabs | Vedant Travels",
        "description": "Book Viman Nagar to Mumbai Cabs with Vedant Travels for a smooth and comfortable ride. Affordable rates and prompt service for airport transfers, one-way trips, and round trips.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.9",
          "ratingCount": "1050"
        }
      };
     


    return (
        <div>
            
      <Helmet>
        <title>Viman Nagar to Mumbai Cabs | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book Viman Nagar to Mumbai Cabs with Vedant Travels for a smooth and comfortable ride. Affordable rates and prompt service for airport transfers, one-way trips, and round trips." />
        <meta name="keywords" content="Viman Nagar to Mumbai Cab, Viman Nagar to Mumbai Airport Cab, Pune to Mumbai Cabs, Viman Nagar to Mumbai One Way Cab, Pune Mumbai Airport Taxi, Pune to Mumbai Airport Cabs, Pune to Mumbai Ertiga Cab, Pune to Mumbai Innova Cab, Vedant Travels, Pune Mumbai Cabs, Pune to Mumbai round trip, Viman Nagar to Mumbai Airport Taxi Service" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/viman-nagar-to-mumbai-cabs" />
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
                            <img src='/images/keyword/23.jpg' alt='img' />
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

export default Vimannagartomumbaicabs;
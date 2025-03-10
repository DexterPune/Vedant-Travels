
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Alanditomumbaicabservice() {



    const cardData =
    {
        keyword: 'Alandi to Mumbai Cab Service',
        heading: 'Vedant Travels: Alandi to Mumbai Cab Service',
        headingDescription: 'Vedant Travels provides reliable, affordable, and transparent taxi services for Alandi to Mumbai travel, ensuring a smooth and comfortable journey. We offer a range of cab options, from sedans to SUVs and premium vehicles, tailored to suit your preferences and budget. With competitive pricing and no hidden charges, you can enjoy a hassle-free and enjoyable ride to Mumbai.',

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
        "name": "Cab Service in Alandi Pune",
        "description": "For reliable and affordable cab services in Alandi, Pune, Vedant Travels offers safe and comfortable transportation for all your travel needs, including local rides and outstation trips."
    },
    {
        "name": "Cab Service in Alandi Pune Contact Number",
        "description": "You can contact Vedant Travels for cab services in Alandi, Pune at +91 8208126878. Our team is available to assist with bookings and inquiries for all your travel requirements."
    },
    {
        "name": "Alandi to Mumbai Cabs Service",
        "description": "Travel from Alandi to Mumbai with Vedant Travels. Our cabs ensure a smooth, timely, and comfortable ride to Mumbai, with professional drivers who are familiar with the best routes."
    },
    {
        "name": "Alandi to Mumbai Airport Cabs",
        "description": "Book a reliable ride from Alandi to Mumbai Airport with Vedant Travels. We provide on-time airport transfers with comfortable vehicles, ensuring you reach the airport safely and promptly."
    },
    {
        "name": "Cab Service in Wadmukhwadi",
        "description": "For convenient and affordable cab services in Wadmukhwadi, Pune, Vedant Travels provides comfortable vehicles for local and outstation rides. Our professional drivers ensure a smooth journey."
    },
    {
        "name": "Cab Service in Charholi Budruk",
        "description": "Need a taxi in Charholi Budruk? Vedant Travels offers reliable and affordable cab services, ensuring a comfortable ride for both local travel and trips to Mumbai."
    },
    {
        "name": "24 Hours Cab Service in Charholi",
        "description": "Vedant Travels provides 24/7 cab services in Charholi. Whether you need an early morning or late-night ride, our professional drivers are ready to serve you around the clock."
    },
    {
        "name": "Charholi to Mumbai Cab Service",
        "description": "Looking for a reliable ride from Charholi to Mumbai? Vedant Travels offers affordable and timely cab services to ensure you travel comfortably and reach your destination without hassle."
    },
    {
        "name": "Moshi to Mumbai Cab Service",
        "description": "Book a convenient and affordable cab from Moshi to Mumbai with Vedant Travels. Our professional drivers ensure that your journey is smooth and comfortable."
    },
    {
        "name": "Moshi to Mumbai Cab Fare",
        "description": "Need a price estimate for a cab from Moshi to Mumbai? Vedant Travels offers transparent and competitive pricing, making sure you get the best value for your trip."
    },
    {
        "name": "Moshi to Mumbai Airport Cab Fare",
        "description": "If you're traveling from Moshi to Mumbai Airport, Vedant Travels offers affordable cab fares for airport transfers, ensuring timely arrival at the airport with comfort and convenience."
    },
    {
        "name": "Moshi to Mumbai Round Trip Cab Fare",
        "description": "For a round trip from Moshi to Mumbai, Vedant Travels provides competitive pricing with no hidden fees. Our round-trip service ensures a smooth journey both ways."
    },
    {
        "name": "Cab Service in Moshi",
        "description": "Looking for a cab service in Moshi? Vedant Travels offers reliable and affordable transportation for both local and outstation trips. Book your ride today for a smooth and hassle-free journey."
    },
    {
        "name": "Cheapest Cab Service in Moshi",
        "description": "For budget-friendly and reliable taxi services in Moshi, Vedant Travels offers the best prices without compromising on comfort. Our affordable rates make traveling easy and convenient."
    },
    {
        "name": "Cab Service in Pune",
        "description": "Vedant Travels offers comprehensive cab services in Pune for local and outstation trips. Whether you need a ride within the city or to nearby destinations, we ensure a smooth and comfortable experience."
    },
    {
        "name": "Pune to Mumbai Airport Cab",
        "description": "For a reliable ride from Pune to Mumbai Airport, Vedant Travels offers airport transfer services with professional drivers, ensuring a timely and comfortable journey to your flight."
    },
    {
        "name": "Pune Mumbai Cab",
        "description": "Travel from Pune to Mumbai with Vedant Travels for a smooth, comfortable, and affordable ride. We offer various vehicles to suit your needs, making your trip as convenient as possible."
    }
]
,


"tableData": [
    ["Cab Service in Alandi Pune", "Cab Service in Alandi Pune Contact Number"],
    ["Alandi to Mumbai Cabs Service", "Alandi to Mumbai Airport Cabs"],
    ["Cab Service in Wadmukhwadi", "Cab Service in Charholi Budruk"],
    ["24 Hours Cab Service in Charholi", "Charholi to Mumbai Cab Service"],
    ["Moshi to Mumbai Cab Service", "Moshi to Mumbai Cab Fare"],
    ["Moshi to Mumbai Airport Cab Fare", "Moshi to Mumbai Round Trip Cab Fare"],
    ["Cab Service in Moshi", "Cheapest Cab Service in Moshi"],
    ["Cab Service in Pune", "Pune to Mumbai Airport Cab"],
    ["Pune Mumbai Cab", ""]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we understand the importance of timely travel. Whether you're heading from Alandi to Mumbai for business, a family trip, or a quick getaway, we ensure prompt pickups and drop-offs, so you can rely on us for a smooth and timely journey."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicles",
      "WhyChoosedescription": "We offer a variety of vehicles for your Alandi to Mumbai Cabs Service, including sedans, SUVs, and premium cars. Our vehicles are well-maintained, spacious, and designed to provide maximum comfort, with air conditioning and ample legroom to make your ride enjoyable and stress-free."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our experienced drivers are skilled in long-distance routes like Alandi to Mumbai. They are familiar with the best routes, ensuring a safe, smooth, and efficient journey. Their professionalism and courtesy make your trip even more enjoyable."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "Vedant Travels offers competitive and transparent pricing for Alandi to Mumbai Cabs Service. There are no hidden charges or surprise fees—what you see is what you pay. Our goal is to provide great value for your money without compromising on quality or service."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Your safety is our priority. Our vehicles are equipped with modern safety features such as seat belts, airbags, and GPS tracking. Our drivers follow strict safety protocols to ensure you have a safe and worry-free journey."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "Whether you need an early morning pickup or a late-night ride, Vedant Travels is available 24/7. You can book your cab at any time, and our customer service team is always ready to assist you with your booking needs."
    },
    {
      "WhyChooseheading": "Hassle-Free Booking Process",
      "WhyChoosedescription": "Booking your Alandi to Mumbai Cab is quick and simple. You can reserve your ride through our website or mobile app, or you can contact our customer service team for any assistance you may need with the booking process."
    },
    {
      "WhyChooseheading": "Customized Travel Packages",
      "WhyChoosedescription": "We offer tailored travel packages to suit your specific needs. Whether you're traveling for business or leisure, we can customize your Alandi to Mumbai trip to fit your requirements and preferences."
    }
  ]

    








    }

    const faqData = [
        {
            id: 1,
            question: 'How can I book an Alandi to Mumbai cab with Vedant Travels?',
            answer: 'You can easily book your cab online through our website or mobile app. Alternatively, you can contact our customer service team for assistance with your booking.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are experienced and well-versed with long-distance routes like Alandi to Mumbai. They ensure a smooth and efficient journey, keeping your comfort and safety in mind.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Alandi to Mumbai travel?',
            answer: 'We offer a variety of vehicles, including sedans, SUVs, and premium cars. All our vehicles are well-maintained, spacious, and designed to ensure a comfortable ride for you.',
        },
        {
            id: 4,
            question: 'How do I pay for my Alandi to Mumbai cab rental?',
            answer: 'We accept multiple payment options, including cash, credit/debit cards, and online payments through our app for your convenience.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip cab from Alandi to Mumbai?',
            answer: 'Yes, round-trip bookings are available. Simply provide your return details during the booking process, and we’ll organize your entire journey accordingly.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any additional charges for waiting or detours will be communicated upfront during the booking process, ensuring full transparency.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing in Mumbai after my drop-off?',
            answer: 'Yes, we offer customized sightseeing tours in Mumbai. After your Alandi to Mumbai trip, you can visit popular tourist spots such as the Gateway of India, Marine Drive, and more with a trusted driver.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for an Alandi to Mumbai cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have more luggage or specific requirements, kindly let us know during the booking process, and we’ll make necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Alandi and Mumbai?',
            answer: 'Yes, we provide corporate travel services for business meetings, conferences, and other professional events. We can tailor a travel package to suit your company’s needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Alandi to Mumbai journey?',
            answer: 'Vedant Travels offers reliable, comfortable, and safe travel services. With professional drivers, well-maintained vehicles, affordable pricing, and 24/7 availability, we ensure a smooth and hassle-free journey from Alandi to Mumbai.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Sandeep Reddy",
            title: "Customer",
            quote: "I had a great experience with Vedant Travels for my trip from Alandi to Mumbai. The vehicle was comfortable, the driver was professional, and the entire trip was smooth. I would definitely recommend their services!",
            rating: 5,
        },
        {
            name: "Mrs. Neha Joshi",
            title: "Customer",
            quote: "We used Vedant Travels for our family trip from Alandi to Mumbai. The vehicle was spacious, and the driver was friendly and punctual. We had a fantastic experience and will definitely use their services again.",
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
        "name": "Alandi to Mumbai Cabs | Vedant Travels",
        "description": "Book your Alandi to Mumbai Cab with Vedant Travels for a comfortable, affordable, and reliable ride. Offering one-way trips, airport transfers, and round trips from Alandi to Mumbai, with a variety of vehicles available.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.6",
          "ratingCount": "890"
        }
      };
      
     
      


    return (
        <div>
            <Helmet>
        <title>Alandi to Mumbai Cabs | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Alandi to Mumbai Cab with Vedant Travels. We offer comfortable, affordable, and reliable rides for one-way trips, airport transfers, and round trips. Enjoy a smooth journey in vehicles like Innova and Ertiga." />
        <meta name="keywords" content="Cab Service in Alandi Pune, Alandi to Mumbai Cabs Service, Alandi to Mumbai Airport Cabs, Cab Service in Wadmukhwadi, Cab Service in Charholi Budruk, 24 Hours Cab Service in Charholi, Charholi to Mumbai Cab Service, Moshi to Mumbai Cab Service, Moshi to Mumbai Cab Fare, Moshi to Mumbai Airport Cab Fare, Moshi to Mumbai Round Trip Cab Fare, Cab Service in Moshi, Cheapest Cab Service in Moshi, Pune to Mumbai Airport Cab, Pune Mumbai Cab" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/alandi-to-mumbai-cabs" />
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
                            <img src='/images/keyword/27.jpg' alt='img' />
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

export default Alanditomumbaicabservice;
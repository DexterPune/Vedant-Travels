
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Punestationtomumaicab() {



    const cardData =
    {
        keyword: 'Pune Station to Mumbai Cab  ',
        heading: 'Vedant Travels: Pune Station to Mumbai Cab  ',
        headingDescription: 'Vedant Travels offers convenient, affordable, and transparent taxi fares for Pune Station to Mumbai travel, ensuring a smooth and hassle-free journey. We provide a range of cab options, including sedans, SUVs, and premium vehicles, to suit your preferences and budget. With competitive pricing and no hidden charges, you can enjoy a comfortable ride to your destination.',

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
        "name": "Pune Station to Dadar Taxi Fare",
        "description": "Looking for an affordable and reliable taxi ride from Pune Station to Dadar? Vedant Travels offers competitive fares and a comfortable journey to this busy Mumbai locality."
    },
    {
        "name": "Pune Station to Mumbai Airport Taxi",
        "description": "Need a ride from Pune Station to Mumbai Airport? Vedant Travels ensures timely and comfortable taxi services, helping you catch your flight without any hassle."
    },
    {
        "name": "Pune Station to Mumbai One Way Cab",
        "description": "For a one-way trip from Pune Station to Mumbai, Vedant Travels provides smooth and affordable cab services, ensuring you arrive at your destination on time."
    },
    {
        "name": "Pune Station to Mumbai Airport Innova Crysta",
        "description": "Book a premium Innova Crysta for your ride from Pune Station to Mumbai Airport. With ample space and luxurious comfort, this ride ensures you travel in style and convenience."
    },
    {
        "name": "Pune Station to Mumbai Ertiga Cab",
        "description": "For a comfortable and spacious ride, choose the Ertiga for your journey from Pune Station to Mumbai. Ideal for family travel, the Ertiga offers a smooth and enjoyable experience."
    },
    {
        "name": "Shivaji Nagar to Mumbai Cab Fare",
        "description": "Travel from Shivaji Nagar to Mumbai at affordable rates with Vedant Travels. We ensure a comfortable and hassle-free journey to one of the busiest cities in the country."
    },
    {
        "name": "Pune Station to Borivali Taxi",
        "description": "Traveling from Pune Station to Borivali? Vedant Travels provides convenient and affordable taxi services for your comfort, making sure you reach Borivali smoothly and on time."
    },
    {
        "name": "Pune Station to Navi Mumbai Cab Fare",
        "description": "Get an affordable and reliable ride from Pune Station to Navi Mumbai with Vedant Travels. We offer competitive fares and a comfortable travel experience for your convenience."
    },
    {
        "name": "Pune Station to Mumbai Airport Cab Fare",
        "description": "Need to know the fare from Pune Station to Mumbai Airport? Vedant Travels offers transparent and affordable rates, ensuring you get the best value for your airport transfer."
    },
    {
        "name": "Pune Station to Mumbai Sedan Taxi Fare",
        "description": "For a comfortable sedan ride from Pune Station to Mumbai, Vedant Travels provides competitive fares and a smooth journey, ensuring comfort and reliability throughout the trip."
    },
    {
        "name": "Ertiga on Rent in Pune Station",
        "description": "Looking for a spacious vehicle? Rent an Ertiga at Pune Station with Vedant Travels. Ideal for family trips, it ensures comfort, space, and affordability for your journey."
    },
    {
        "name": "Innova, Ertiga, Xylo, Tavera Car on Rent in Pune Station",
        "description": "Whether you're traveling with a small group or need more space, Vedant Travels offers Innova, Ertiga, Xylo, and Tavera cars on rent from Pune Station. Choose the vehicle that best suits your needs for a comfortable ride."
    },
    {
        "name": "Pune Station to Mumbai Airport Cab",
        "description": "For a reliable and timely transfer from Pune Station to Mumbai Airport, Vedant Travels offers a range of cabs to ensure you catch your flight on time, with professional drivers and a comfortable ride."
    },
    {
        "name": "Pune Station to Mumbai Airport Innova",
        "description": "Travel in comfort and style from Pune Station to Mumbai Airport with an Innova from Vedant Travels. The Innova ensures ample space and a smooth ride for your airport transfer."
    },
    {
        "name": "Cab Service in Pune",
        "description": "For all your travel needs within Pune, Vedant Travels provides premium cab services, including local rides and airport transfers. Our experienced drivers and well-maintained fleet ensure a smooth and comfortable journey every time."
    },
    {
        "name": "Pune to Mumbai Airport Cab",
        "description": "Book a reliable and affordable cab from Pune to Mumbai Airport with Vedant Travels. Whether you’re catching an early morning flight or returning from a trip, we ensure a timely and comfortable journey."
    },
    {
        "name": "Pune Mumbai Cab",
        "description": "Looking for a dependable cab service from Pune to Mumbai? Vedant Travels offers comfortable and reliable cabs with professional drivers, ensuring you arrive at your destination on time and in comfort."
    },
    {
        "name": "Contact Information",
        "description": "For bookings or inquiries, contact Vedant Travels at +91 8208126878. We ensure a smooth, comfortable, and stress-free journey every time."
    }
]
,


"tableData": [
    ["Pune Station to Dadar Taxi Fare", "Pune Station to Mumbai Airport Taxi"],
    ["Pune Station to Mumbai One Way Cab", "Pune Station to Mumbai Airport Innova Crysta"],
    ["Pune Station to Mumbai Ertiga Cab", "Shivaji Nagar to Mumbai Cab Fare"],
    ["Pune Station to Borivali Taxi", "Pune Station to Navi Mumbai Cab Fare"],
    ["Pune Station to Mumbai Airport Cab Fare", "Pune Station to Mumbai Sedan Taxi Fare"],
    ["Ertiga on Rent in Pune Station", "Innova Ertiga Xylo Tavera Car on Rent Pune Station"],
    ["Pune Station to Mumbai Airport Cab", "Pune Station to Mumbai Airport Innova"],
    ["Cab Service in Pune", "Pune to Mumbai Airport Cab"]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we understand how important it is to be punctual when traveling from Pune Station to Mumbai. Whether you’re catching a flight, heading to a business meeting, or embarking on a weekend trip, our drivers ensure timely pickups and prompt drop-offs for a smooth journey."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicles",
      "WhyChoosedescription": "We offer a wide range of vehicles for your Pune Station to Mumbai Cab Service, including sedans, SUVs, and premium cars. All our vehicles are designed for comfort, with ample legroom, air conditioning, and clean interiors, providing you with a relaxing and enjoyable ride."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our drivers are professional, experienced, and familiar with the best routes from Pune Station to Mumbai. They ensure that your ride is not only smooth but also efficient, making sure you avoid heavy traffic and reach your destination safely and on time."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "Vedant Travels offers affordable pricing with no hidden charges for your Pune Station to Mumbai Cab Service. Our transparent pricing ensures that you know exactly what you’re paying for, allowing for a hassle-free experience from start to finish."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Your safety is our top priority. All our vehicles are equipped with modern safety features such as seat belts, airbags, and GPS tracking. Our drivers follow strict safety protocols to ensure a secure and worry-free journey."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "Whether you need an early morning ride or a late-night trip, Vedant Travels is available 24/7 to meet your travel needs. Our customer service team is always ready to assist you with booking a cab at any time, ensuring a convenient and flexible experience."
    },
    {
      "WhyChooseheading": "Hassle-Free Booking Process",
      "WhyChoosedescription": "Booking a Pune Station to Mumbai Cab Service is quick and easy. You can make a reservation through our website or mobile app, or contact our customer service team for personalized assistance. We aim to make the process as seamless as possible."
    },
    {
      "WhyChooseheading": "Customized Travel Packages",
      "WhyChoosedescription": "We offer flexible travel packages that can be customized to fit your specific needs. Whether you're traveling for business, leisure, or need a special event service, we can tailor your Pune Station to Mumbai journey to meet your requirements."
    }
  ]



    








    }


    const faqData = [
        {
            id: 1,
            question: 'How can I book a Pune Station to Mumbai cab with Vedant Travels?',
            answer: 'You can easily book a cab online through our website or mobile app. Alternatively, you can contact our customer service team for assistance with booking your ride.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are experienced and skilled in long-distance travel. They are familiar with the best routes from Pune Station to Mumbai and ensure a smooth and efficient journey.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Pune Station to Mumbai travel?',
            answer: 'We offer a variety of vehicles, including sedans, SUVs, and premium cars. All our vehicles are spacious, well-maintained, and equipped for your comfort.',
        },
        {
            id: 4,
            question: 'How do I pay for my Pune Station to Mumbai cab rental?',
            answer: 'We accept multiple payment options, including cash, credit/debit cards, and online payment through our app for your convenience.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip cab from Pune Station to Mumbai?',
            answer: 'Yes, you can book a round-trip cab. Simply provide your return details during the booking process, and we will ensure your entire journey is planned accordingly.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any additional charges for waiting time or detours will be clearly communicated to you during the booking process, ensuring complete transparency.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing in Mumbai after my drop-off?',
            answer: 'Yes, we offer customized sightseeing tours in Mumbai. After your Pune Station to Mumbai trip, you can explore popular attractions like the Gateway of India, Marine Drive, and other famous spots.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Pune Station to Mumbai cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have additional luggage or special requirements, please let us know at the time of booking, and we will make the necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Pune Station and Mumbai?',
            answer: 'Yes, we provide corporate travel services for business meetings, conferences, and other professional events. We can customize your travel package to suit the needs of your company.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Pune Station to Mumbai journey?',
            answer: 'Vedant Travels offers reliable, comfortable, and safe travel with professional drivers and transparent pricing. We ensure that your Pune Station to Mumbai journey is smooth, comfortable, and hassle-free.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Ravi Kumar",
            title: "Customer",
            quote: "I had a fantastic experience with Vedant Travels for my Pune Station to Mumbai trip. The driver was on time, the car was clean and comfortable, and the journey was smooth. Highly recommend their services!",
            rating: 5,
        },
        {
            name: "Mrs. Anjali Patel",
            title: "Customer",
            quote: "Our family used Vedant Travels for a trip from Pune Station to Mumbai, and it was a very pleasant experience. The vehicle was spacious, the driver was courteous, and we reached our destination on time. Great service!",
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
        "name": "Pune Station to Mumbai Cabs Service | Vedant Travels",
        "description": "Book your Pune Station to Mumbai Cab with Vedant Travels for a comfortable ride. Offering airport transfers, one-way trips, and round trips with Ertiga, Innova, and other models.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.7",
          "ratingCount": "1150"
        }
      };
    
      


    return (
        <div>
             
      <Helmet>
        <title>Pune Station to Mumbai Cabs Service | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Pune Station to Mumbai Cabs with Vedant Travels. Enjoy a smooth ride with our reliable airport transfers, one-way trips, and round trips. Affordable rates for a variety of vehicles including Ertiga and Innova." />
        <meta name="keywords" content="Pune Station to Dadar Taxi Fare, Pune Station to Mumbai Airport Taxi, Pune Station to Mumbai One Way Cab, Pune Station to Mumbai Airport Innova Crysta, Pune Station to Mumbai Ertiga Cab, Shivaji Nagar to Mumbai Cab Fare, Pune Station to Borivali Taxi, Pune Station to Navi Mumbai Cab Fare, Pune Station to Mumbai Airport Cab Fare, Pune Station to Mumbai Sedan Taxi Fare, Ertiga on Rent in Pune Station, Innova Ertiga Xylo Tavera Car on Rent Pune Station, Pune Station to Mumbai Airport Cab, Pune Station to Mumbai Airport Innova, Pune to Mumbai Angel One Cabs, Cab Service in Pune, Pune to Mumbai Airport Cab, Pune Mumbai Cab" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/pune-station-to-mumbai-cabs-service" />
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
                            <img src='./images/keyword/25.jpg' alt='img' />
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

export default Punestationtomumaicab;
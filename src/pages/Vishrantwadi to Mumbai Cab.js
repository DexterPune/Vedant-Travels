
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Vishrantwaditomumbaicab() {



    const cardData =
    {
        keyword: 'Vishrantwadi to Mumbai Cab',
        heading: 'Vedant Travels: Vishrantwadi to Mumbai Cab',
        headingDescription: 'Vedant Travels offers reliable, affordable, and transparent taxi services for Vishrantwadi to Mumbai travel, ensuring a comfortable and stress-free journey. With a range of cab options, including sedans, SUVs, and premium vehicles, we cater to your travel needs and budget. Our pricing is competitive with no hidden charges, so you can enjoy a smooth ride to Mumbai without any surprises.',

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
        "name": "Vishrantwadi to Mumbai Cab Price",
        "description": "For an affordable and reliable ride from Vishrantwadi to Mumbai, Vedant Travels offers competitive pricing with a focus on comfort and timely arrivals."
    },
    {
        "name": "Dhanori to Mumbai Cab Service",
        "description": "Traveling from Dhanori to Mumbai? Vedant Travels offers comfortable and affordable cab services with professional drivers for a smooth and hassle-free ride."
    },
    {
        "name": "Vishrantwadi to Mumbai Airport Cab",
        "description": "Need a ride from Vishrantwadi to Mumbai Airport? Vedant Travels offers reliable airport transfer services, ensuring you reach your flight on time in comfort and style."
    },
    {
        "name": "Vishrantwadi to Dadar Cab",
        "description": "For a smooth and efficient ride from Vishrantwadi to Dadar, book your cab with Vedant Travels. Our reliable services ensure you arrive on time for all your meetings or events."
    },
    {
        "name": "Mumbai to Vishrantwadi Cab",
        "description": "Whether you're coming to Pune from Mumbai or returning, Vedant Travels provides dependable and comfortable cab services to ensure your journey is smooth and timely."
    },
    {
        "name": "Bhosari to Mumbai Cabs",
        "description": "Travel from Bhosari to Mumbai with Vedant Travels. We offer affordable, comfortable, and punctual cab services for a smooth trip to Mumbai."
    },
    {
        "name": "Bhosari to Mumbai Cabs Service",
        "description": "Get reliable and timely cab services from Bhosari to Mumbai. Vedant Travels ensures a smooth journey with professional drivers, making your trip comfortable and stress-free."
    },
    {
        "name": "Cab Service in Dhanori",
        "description": "Looking for reliable cab services in Dhanori? Vedant Travels offers convenient and affordable options for both local and outstation trips. Book a ride today for a hassle-free experience."
    },
    {
        "name": "Cab Service in Vishrantwadi",
        "description": "For all your travel needs in Vishrantwadi, Vedant Travels provides dependable and comfortable taxi services. Whether you need a quick trip around town or an airport transfer, we have you covered."
    },
    {
        "name": "Taxi Service in Vishrantwadi",
        "description": "Choose Vedant Travels for reliable taxi services in Vishrantwadi. Our professional drivers ensure you travel comfortably and reach your destination on time."
    },
    {
        "name": "Innova Crysta on Rent in Vishrantwadi",
        "description": "Rent an Innova Crysta for your travels from Vishrantwadi with Vedant Travels. Perfect for families or groups, the Innova Crysta provides ample space and luxurious comfort for your journey."
    },
    {
        "name": "Innova Crysta Hire in Bhosari",
        "description": "For a spacious and comfortable ride, hire an Innova Crysta in Bhosari with Vedant Travels. Ideal for business trips or family outings, our Innova Crysta ensures a premium travel experience."
    },
    {
        "name": "Ertiga on Rent in Vishrantwadi",
        "description": "Need a comfortable and spacious vehicle? Rent an Ertiga in Vishrantwadi with Vedant Travels. Perfect for small groups and families, the Ertiga offers a smooth and enjoyable ride."
    },
    {
        "name": "Sedan Car on Rent in Bhosari",
        "description": "Looking for a reliable sedan for your trip? Rent a sedan car in Bhosari with Vedant Travels. Whether it's for a short trip or an outstation journey, our sedans offer comfort and efficiency."
    },
    {
        "name": "Cab Service in Pune",
        "description": "Vedant Travels offers reliable and affordable cab services in Pune for all your local and outstation travel needs. Whether you’re heading to the airport or exploring the city, we ensure a smooth and pleasant journey."
    },
    {
        "name": "Pune to Mumbai Airport Cab",
        "description": "For a seamless ride from Pune to Mumbai Airport, Vedant Travels offers reliable and comfortable cab services, ensuring you reach the airport on time for your flight."
    },
    {
        "name": "Pune Mumbai Cab",
        "description": "Travel from Pune to Mumbai with Vedant Travels for a reliable and comfortable experience. We offer a variety of vehicles to suit your needs, ensuring a smooth and timely journey."
    },
    {
        "name": "Tingre Nagar to Mumbai Cabs",
        "description": "Book a reliable and affordable ride from Tingre Nagar to Mumbai with Vedant Travels. Whether you're traveling for business or leisure, we ensure a smooth and comfortable trip."
    },
    {
        "name": "Charholi to Mumbai Cab Service",
        "description": "Need a cab from Charholi to Mumbai? Vedant Travels offers dependable cab services to ensure you travel comfortably and efficiently from Charholi to Mumbai."
    }
]
,


"tableData": [
    ["Vishrantwadi to Mumbai Cab Price", "Dhanori to Mumbai Cab Service"],
    ["Vishrantwadi to Mumbai Airport Cab", "Vishrantwadi to Dadar Cab"],
    ["Mumbai to Vishrantwadi Cab", "Bhosari to Mumbai Cabs"],
    ["Bhosari to Mumbai Cabs Service", "Cab Service in Dhanori"],
    ["Cab Service in Vishrantwadi", "Taxi Service in Vishrantwadi"],
    ["Innova Crysta on Rent in Vishrantwadi", "Innova Crysta Hire in Bhosari"],
    ["Ertiga on Rent in Vishrantwadi", "Sedan Car on Rent in Bhosari"],
    ["Cab Service in Pune", "Pune to Mumbai Airport Cab"],
    ["Pune Mumbai Cab", "Tingre Nagar to Mumbai Cabs"],
    ["Charholi to Mumbai Cab Service", ""]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we value your time. Our drivers ensure punctual pickups and timely drop-offs, so you can rely on us for your Vishrantwadi to Mumbai journey. Whether it's a business trip or leisure travel, we make sure you reach your destination smoothly and on time."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicles",
      "WhyChoosedescription": "We offer a range of vehicles for your Vishrantwadi to Mumbai Cab ride, including sedans, SUVs, and premium cars. All vehicles are clean, spacious, and designed for maximum comfort, with air conditioning and plenty of legroom to ensure you enjoy a relaxing journey."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our drivers are well-trained and experienced, with in-depth knowledge of the best routes from Vishrantwadi to Mumbai. They ensure a smooth, safe, and timely trip, while providing professional and courteous service throughout the journey."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "Vedant Travels offers affordable rates with no hidden charges for your Vishrantwadi to Mumbai Cab service. Our transparent pricing model ensures that you always know what you’re paying for, giving you peace of mind."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Safety is our top priority. Our vehicles are equipped with modern safety features, such as seat belts, airbags, and GPS tracking. Our drivers follow strict safety protocols to ensure a secure and worry-free journey."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "Whether it’s an early morning ride or a late-night journey, Vedant Travels is available 24/7 to cater to your travel needs. You can book your cab at any time, and our customer service team will assist you with your booking."
    },
    {
      "WhyChooseheading": "Hassle-Free Booking Process",
      "WhyChoosedescription": "Booking your Vishrantwadi to Mumbai Cab is simple and quick. You can easily reserve your ride through our website or mobile app, or get assistance from our customer service team for a personalized booking experience."
    },
    {
      "WhyChooseheading": "Customized Travel Packages",
      "WhyChoosedescription": "We offer customized travel packages for your Vishrantwadi to Mumbai trip, ensuring that your travel experience is tailored to your specific needs. Whether you're traveling for business or leisure, we’ll make your journey enjoyable and comfortable."
    }
  ]


    








    }

    const faqData = [
        {
            id: 1,
            question: 'How can I book a Vishrantwadi to Mumbai cab with Vedant Travels?',
            answer: 'You can book your cab easily through our website or mobile app. Alternatively, our customer service team is available to assist you with the booking process.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are experienced and familiar with the routes from Vishrantwadi to Mumbai, ensuring a smooth and timely journey.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Vishrantwadi to Mumbai travel?',
            answer: 'We offer a variety of vehicles, including sedans, SUVs, and premium cars. All vehicles are spacious, comfortable, and well-maintained for a pleasant journey.',
        },
        {
            id: 4,
            question: 'How do I pay for my Vishrantwadi to Mumbai cab rental?',
            answer: 'We accept multiple payment options, including cash, credit/debit cards, and online payments via our app for your convenience.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip cab from Vishrantwadi to Mumbai?',
            answer: 'Yes, round-trip bookings are available. Simply provide your return details at the time of booking, and we’ll ensure your entire journey is planned and executed smoothly.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any additional charges for waiting or detours will be communicated to you upfront during the booking process to ensure complete transparency.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing in Mumbai after my drop-off?',
            answer: 'Yes, we offer customized sightseeing tours in Mumbai. After your Vishrantwadi to Mumbai journey, you can explore iconic attractions like the Gateway of India, Marine Drive, and more.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Vishrantwadi to Mumbai cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have additional luggage or special requirements, please let us know at the time of booking, and we will make the necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Vishrantwadi and Mumbai?',
            answer: 'Yes, we offer corporate travel services for business meetings, conferences, and other professional events. We can tailor your travel package to suit the needs of your company.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Vishrantwadi to Mumbai journey?',
            answer: 'Vedant Travels is known for its reliable, safe, and comfortable service. Our professional drivers, affordable pricing, and well-maintained vehicles ensure that your Vishrantwadi to Mumbai journey is smooth and enjoyable.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Shubham Joshi",
            title: "Customer",
            quote: "I traveled from Vishrantwadi to Mumbai with Vedant Travels, and I must say it was a great experience. The driver was punctual, and the vehicle was clean and comfortable. The whole ride was smooth, and I would highly recommend their services!",
            rating: 5,
        },
        {
            name: "Mrs. Aarti Deshpande",
            title: "Customer",
            quote: "We used Vedant Travels for our trip from Vishrantwadi to Mumbai. The car was spacious and in excellent condition, and the driver was professional and friendly. It was a pleasant and comfortable journey.",
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
        "name": "Vishrantwadi to Mumbai Cab | Vedant Travels",
        "description": "Book your Vishrantwadi to Mumbai Cab with Vedant Travels for a comfortable and affordable ride. Offering one-way trips, airport transfers, and round trips. Choose from a variety of vehicles including Innova and Ertiga.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.7",
          "ratingCount": "1160"
        }
      };
      
    
    return (
        <div>
             <Helmet>
        <title>Vishrantwadi to Mumbai Cab | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Vishrantwadi to Mumbai Cab with Vedant Travels. Offering affordable and comfortable rides for one-way trips, airport transfers, and round trips. Ride in vehicles like Innova and Ertiga." />
        <meta name="keywords" content="Vishrantwadi to Mumbai Cab Price, Dhanori to Mumbai Cab Service, Vishrantwadi to Mumbai Airport Cab, Vishrantwadi to Dadar Cab, Mumbai to Vishrantwadi Cab, Bhosari to Mumbai Cabs, Bhosari to Mumbai Cabs Service, Cab Service in Dhanori, Cab Service in Vishrantwadi, Taxi Service in Vishrantwadi, Innova Crysta on Rent in Vishrantwadi, Innova Crysta Hire in Bhosari, Ertiga on Rent in Vishrantwadi, Sedan Car on Rent in Bhosari, Cab Service in Pune, Pune to Mumbai Airport Cab, Pune Mumbai Cab, Tingre Nagar to Mumbai Cabs, Charholi to Mumbai Cab Service" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/vishrantwadi-to-mumbai-cab" />
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
                            <img src='./images/keyword/266.jpg' alt='img' />
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

export default Vishrantwaditomumbaicab;
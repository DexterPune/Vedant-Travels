
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Kharaditomumbaicab() {



    const cardData =
    {
        keyword: 'Kharadi to Mumbai Cab   ',
        heading: 'Vedant Travels: Kharadi to Mumbai Cab  ',
        headingDescription: 'Vedant Travels offers affordable and transparent taxi fares for Kharadi to Mumbai travel, ensuring a cost-effective and comfortable journey. Our pricing is competitive, with no hidden charges, and we provide multiple cab options to suit your budget and preferences.',

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
        "name": "Kharadi to Mumbai Airport Cab",
        "description": "Book a reliable and comfortable taxi from Kharadi to Mumbai Airport with Vedant Travels. We ensure timely arrivals with professional drivers and a smooth ride."
    },
    {
        "name": "Kharadi to Mumbai Taxi Service",
        "description": "Whether you need a taxi for a business trip or leisure, Vedant Travels offers affordable and reliable taxi services from Kharadi to Mumbai. We prioritize your comfort and safety."
    },
    {
        "name": "Kharadi to Mumbai One Way Cab",
        "description": "Travel from Kharadi to Mumbai in a one-way taxi. Our professional drivers will ensure a comfortable and hassle-free journey at affordable rates."
    },
    {
        "name": "Kharadi to Mumbai International Airport Cab",
        "description": "For a safe and timely ride to Mumbai International Airport from Kharadi, trust Vedant Travels. We offer prompt and convenient airport taxi services."
    },
    {
        "name": "Kharadi to Mumbai Airport Drop",
        "description": "Need a drop-off at Mumbai Airport from Kharadi? Vedant Travels offers comfortable and affordable drop services to Mumbai, ensuring a smooth journey."
    },
    {
        "name": "Kharadi to Mumbai Darshan Cabs",
        "description": "Explore Mumbai’s landmarks with our Mumbai Darshan Cab service from Kharadi. We offer a personalized tour to all major attractions in Mumbai."
    },
    {
        "name": "Kharadi to Mumbai Central Cabs",
        "description": "Travel conveniently from Kharadi to Mumbai Central with Vedant Travels. We offer affordable and comfortable cabs for your journey."
    },
    {
        "name": "Kharadi to Andheri Cab",
        "description": "For a comfortable and affordable ride from Kharadi to Andheri, book your cab with Vedant Travels. We ensure a smooth and pleasant ride with our experienced drivers."
    },
    {
        "name": "Kharadi to Dadar Taxi",
        "description": "Get a taxi from Kharadi to Dadar with Vedant Travels. We offer timely and professional taxi services with clean and well-maintained vehicles."
    },
    {
        "name": "Kharadi to Mumbai One Way Cab",
        "description": "Need a one-way taxi from Kharadi to Mumbai? Vedant Travels offers affordable and comfortable one-way cab services."
    },
    {
        "name": "Kharadi to Borivali Cab",
        "description": "Traveling from Kharadi to Borivali? Vedant Travels provides convenient and affordable taxi services for a comfortable ride to Borivali."
    },
    {
        "name": "Innova Crysta on Rent in Kharadi",
        "description": "Rent a Toyota Innova Crysta for your trip from Kharadi. Perfect for groups or families, the Innova Crysta provides a luxurious and spacious ride."
    },
    {
        "name": "Ertiga on Rent in Kharadi",
        "description": "Looking for a comfortable Ertiga for your trip from Kharadi? Vedant Travels offers Ertiga on rent for a comfortable and budget-friendly journey."
    },
    {
        "name": "Sedan Cab on Rent in Kharadi",
        "description": "Rent a Sedan Cab for your ride from Kharadi to Mumbai. Vedant Travels provides affordable and reliable sedan cabs for your convenience."
    },
    {
        "name": "Pune to Mumbai Taxi",
        "description": "Book your Pune to Mumbai taxi with Vedant Travels. We offer a range of vehicles like Ertiga, Innova, and Sedans for a smooth and comfortable ride to Mumbai."
    },
    {
        "name": "Pune to Mumbai Ertiga Cab",
        "description": "For a comfortable and spacious ride, choose an Ertiga from Vedant Travels for your Pune to Mumbai journey. Perfect for families or small groups."
    },
    {
        "name": "Pune to Mumbai Innova Cab",
        "description": "Book an Innova for your Pune to Mumbai journey. We offer spacious and comfortable rides with professional drivers."
    },
    {
        "name": "Vedant Travels Pune to Mumbai Cab Services",
        "description": "Vedant Travels offers a range of services for Pune to Mumbai travel. Whether you need a round trip, one-way cab, or airport transfer, we have you covered with reliable, professional service."
    },
    {
        "name": "Contact Information",
        "description": "For bookings and inquiries, contact Vedant Travels at +91 8177869909. We provide top-quality taxi services from Kharadi to Mumbai and beyond."
    }
],


"tableData": [
    ["kharadi to mumbai cab", "kharadi to mumbai airport cab"],
    ["kharadi to mumbai taxi service", "kharadi to mumbai one way cab"],
    ["kharadi to mumbai international airport cab", "cab service in kharadi pune"],
    ["Kharadi to Andheri cab", "kharadi to dadar cab fare"],
    ["kharadi to mumbai airport drop", "kharadi to mumbai darshan cabs"],
    ["kharadi to mumbai central cabs", "kharadi to dadar cab"],
    ["pune to mumbai ertiga cab", "Pune to Mumbai Innova Cab"]
],
"whychoose": [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Vedant Travels, we know how important it is to stay on schedule. Whether you’re traveling for business or leisure, our drivers guarantee timely pickups and drop-offs, ensuring that your journey from Kharadi to Mumbai is smooth and punctual."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Enjoy a comfortable ride in our well-maintained, spacious vehicles. From sedans to SUVs, each vehicle comes with air conditioning and ample legroom to ensure your comfort throughout the journey from Kharadi to Mumbai."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are highly skilled, with extensive experience in long-distance routes like Kharadi to Mumbai. They are familiar with the best routes to take, ensuring that your journey is safe, efficient, and enjoyable."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Vedant Travels offers competitive rates with no hidden charges. Our pricing is transparent, so you can rest assured that the fare you are quoted is the fare you’ll pay, without any surprises along the way."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our top priority. Our vehicles are equipped with modern safety features, such as airbags, seat belts, and GPS tracking. Our drivers strictly adhere to safety protocols, ensuring you have a secure and comfortable trip."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Vedant Travels is available around the clock. Whether you need to travel early in the morning or late at night, you can book a cab for your journey from Kharadi to Mumbai at any time, with assistance from our customer service team."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a cab for your journey from Kharadi to Mumbai is easy. You can use our website or mobile app for quick booking or contact our customer service team for personalized assistance."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you are traveling for business, leisure, or a special event, we offer customized travel packages that cater to your specific needs, making your journey from Kharadi to Mumbai tailored and enjoyable."
    }
]





    








    }


    const faqData = [
        {
            id: 1,
            question: 'How can I book a Kharadi to Mumbai cab with Vedant Travels?',
            answer: 'You can easily book your cab online through our website or mobile app. Alternatively, you can contact our customer service team for help with your booking.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, all our drivers are well-trained and experienced in handling long-distance journeys, including the route from Kharadi to Mumbai. They ensure a smooth, safe, and timely ride.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Kharadi to Mumbai travel?',
            answer: 'We offer a range of vehicles, including sedans, SUVs, and luxury cars. All our vehicles are spacious, well-maintained, and equipped with modern amenities for a comfortable journey.',
        },
        {
            id: 4,
            question: 'How do I pay for my Kharadi to Mumbai cab rental?',
            answer: 'We offer multiple payment options, including cash, credit/debit cards, and online payments through our app, providing a convenient payment experience for you.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip cab from Kharadi to Mumbai?',
            answer: 'Yes, you can book a round-trip cab. Simply provide your return details when making the booking, and we’ll handle the rest.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any additional charges for waiting time or detours will be communicated to you clearly during the booking process, ensuring full transparency in our pricing.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing in Mumbai after my drop-off?',
            answer: 'Yes, we offer sightseeing services in Mumbai. Explore iconic spots like the Gateway of India, Marine Drive, and more with a trusted driver.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Kharadi to Mumbai cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have additional luggage or special requirements, please inform us at the time of booking, and we’ll make the necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Kharadi and Mumbai?',
            answer: 'Yes, we provide corporate travel services for business meetings, airport transfers, and events. Contact us for customized corporate travel packages tailored to your company’s needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Kharadi to Mumbai journey?',
            answer: 'Vedant Travels is known for offering reliable, safe, and affordable taxi services. Our professional drivers, comfortable vehicles, and transparent pricing ensure a smooth and hassle-free experience for your journey from Kharadi to Mumbai.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Rohit Agarwal",
            title: "Customer",
            quote: "I used Vedant Travels for a business trip from Kharadi to Mumbai. The driver was punctual, the vehicle was comfortable, and I reached Mumbai on time. The service was fantastic, and I will definitely use it again.",
            rating: 5,
        },
        {
            name: "Mrs. Anjali Mehta",
            title: "Customer",
            quote: "We traveled with Vedant Travels from Kharadi to Mumbai for a family vacation. The cab was spacious and clean, the driver was friendly, and the journey was smooth. We had a great experience and will be using their services again in the future.",
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
        "name": "Kharadi to Mumbai Cab | Vedant Travels",
        "description": "Book your Kharadi to Mumbai taxi with Vedant Travels. Offering one-way trips, airport transfers, and round trips with luxury vehicles like Innova Crysta, Ertiga, and more.",
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
        <title>Kharadi to Mumbai Cab | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Kharadi to Mumbai taxi with Vedant Travels. We provide one-way trips, airport transfers, and round trips with luxury vehicles like Innova Crysta and Ertiga at affordable rates." />
        <meta name="keywords" content="Kharadi to Mumbai Cab, Kharadi to Mumbai Airport Cab, Kharadi to Mumbai Taxi Service, Kharadi to Mumbai One Way Cab, Kharadi to Mumbai International Airport Cab, Cab Service in Kharadi Pune, Kharadi to Andheri Cab, Kharadi to Dadar Cab Fare, Kharadi to Mumbai Airport Drop, Kharadi to Mumbai Darshan Cabs, Kharadi to Mumbai Central Cabs, Kharadi to Dadar Cab, Chandan Nagar Mumbai Taxi, Pune to Mumbai Ertiga Cab, Pune to Mumbai Innova Cab, Pune Mumbai Vedant Travels, Kharadi to Dadar Taxi, Kharadi to Mumbai Cab Service, Kharadi to Andheri Cab, Kharadi to Borivali Cab, Cab Service in Kharadi, Cab Service Kharadi Pune, Cab in Central Kharadi Pune, Kharadi to Mumbai Airport Cab, Innova Crysta on Rent in Kharadi, Ertiga on Rent in Kharadi, Sedan Cab on Rent in Kharadi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/kharadi-to-mumbai-cab" />
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
                            <img src='./images/keyword/17.jpg' alt='img' />
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

export default Kharaditomumbaicab;
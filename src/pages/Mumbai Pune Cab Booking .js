
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Mumbaipunecabbooking() {



    const cardData =
    {
        keyword: 'Mumbai Pune Cab Booking  ',
        heading: 'Vedant Travels: Mumbai Pune Cab Booking ',
        headingDescription: 'Vedant Travels offers seamless and convenient cab booking services for your journey between Mumbai and Pune. Whether you are traveling for business, leisure, or any other purpose, we provide a variety of vehicles including sedans, SUVs, and premium cabs. Enjoy a comfortable, stress-free ride with transparent pricing, no hidden charges, and professional drivers ensuring a smooth travel experience.',

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
            "name": "Mumbai to Pune Taxi Fare Return",
            "description": "Looking for a return trip from Mumbai to Pune? Vedant Travels offers competitive and transparent taxi fares for round-trip journeys. Book your ride for a hassle-free and comfortable return journey, with no hidden charges."
        },
        {
            "name": "Mumbai to Wanwadi Cab Service",
            "description": "Need a taxi from Mumbai to Wanwadi? Vedant Travels offers reliable and comfortable cab services. Choose from our range of vehicles, including Innova, Ertiga, and Sedans, for a smooth and stress-free journey."
        },
        {
            "name": "Mumbai to Mundwa Cab Service",
            "description": "Traveling from Mumbai to Mundwa? Vedant Travels provides affordable and comfortable cab services with professional drivers, ensuring a safe and timely journey."
        },
        {
            "name": "Mumbai to Wadgaon Sheri Cab Service",
            "description": "For a smooth ride from Mumbai to Wadgaon Sheri, Vedant Travels offers reliable and timely cab services. Choose from a variety of vehicles, including Innova, Ertiga, and Sedans, for the best experience."
        },
        {
            "name": "Mumbai to Nigdi Cab Service",
            "description": "Book a cab from Mumbai to Nigdi with Vedant Travels. Our fleet includes well-maintained vehicles, offering comfort, space, and timely service to make your journey enjoyable."
        },
        {
            "name": "Mumbai to Swargate Cab",
            "description": "For a smooth and comfortable ride from Mumbai to Swargate, Vedant Travels offers reliable cab services. Whether you're traveling solo or with a group, we have the right vehicle to suit your needs."
        },
        {
            "name": "Mumbai to Pune Station Cab",
            "description": "Need a taxi from Mumbai to Pune Station? Vedant Travels provides efficient and reliable cab services, ensuring a comfortable journey with professional drivers and well-maintained vehicles."
        },
        {
            "name": "Mumbai to Shivaji Nagar Cab",
            "description": "Vedant Travels offers comfortable and affordable taxi services from Mumbai to Shivaji Nagar. Our fleet includes a variety of vehicles to suit your travel needs, ensuring a smooth and timely ride."
        },
        {
            "name": "Mumbai Pune Taxi Booking",
            "description": "Book your Mumbai to Pune taxi with Vedant Travels for a seamless travel experience. Whether you're traveling for business or leisure, we offer reliable and comfortable vehicles to ensure a stress-free journey."
        },
        {
            "name": "Mumbai Pune Taxi Booking",
            "description": "Looking to book a taxi from Mumbai to Pune? Vedant Travels offers efficient and affordable taxi booking services with a range of vehicles, ensuring your comfort and convenience throughout the journey."
        },
        {
            "name": "Mumbai to Pune Cab",
            "description": "Need a cab from Mumbai to Pune? Vedant Travels offers reliable and affordable taxi services with vehicles like Innova, Ertiga, and Sedans for a smooth and comfortable ride."
        },
        {
            "name": "Pune to Mumbai Cabs",
            "description": "Vedant Travels provides efficient and timely cabs from Pune to Mumbai. Book your ride easily for a smooth journey with well-maintained vehicles and professional drivers."
        },
        {
            "name": "Mumbai to Pune Cab Service",
            "description": "Looking for a reliable cab service from Mumbai to Pune? Vedant Travels offers affordable and comfortable taxi services with a variety of vehicles, ensuring a smooth and enjoyable journey."
        },
        {
            "name": "Pune to Mumbai Cab Service",
            "description": "Traveling from Pune to Mumbai? Vedant Travels offers dependable cab services with competitive pricing. Choose from our range of vehicles, including Innova, Ertiga, and Sedans, for a comfortable journey."
        },
        {
            "name": "Pune Mumbai Taxi Service",
            "description": "Vedant Travels offers top-notch taxi services between Pune and Mumbai. Our fleet of vehicles ensures a smooth, safe, and comfortable ride every time you travel with us."
        },
        {
            "name": "Pune to Mumbai Cab Booking",
            "description": "Book your Pune to Mumbai taxi with Vedant Travels for a seamless journey. We offer easy booking options with a range of vehicles to suit your travel needs."
        },
        {
            "name": "Cab Service Mumbai to Pune",
            "description": "Vedant Travels offers convenient and reliable cab services from Mumbai to Pune. Choose from a variety of vehicles to ensure your journey is comfortable and affordable."
        },
        {
            "name": "Mumbai to Pune Taxi Charges",
            "description": "The taxi charges from Mumbai to Pune with Vedant Travels are competitive and transparent, ensuring no hidden costs. We offer a variety of vehicles, including Innova, Ertiga, and Sedans, at reasonable rates."
        },
        {
            "name": "Mumbai to Pune Innova Cab",
            "description": "Traveling from Mumbai to Pune in an Innova? Vedant Travels offers Innova cabs for a comfortable and luxurious journey. Book your ride today for a spacious and smooth ride to Pune."
        },
        {
            "name": "Mumbai to Pune Innova Crysta on Rent",
            "description": "Need an Innova Crysta for your journey from Mumbai to Pune? Vedant Travels offers Innova Crysta rental services for a premium and comfortable experience. Book online and travel in style."
        }
    ],


    "tableData": [
        ["Mumbai to Pune Taxi Fare Return", "Mumbai to Wanwadi Cab Service"],
        ["Mumbai to Mundwa Cab Service", "Mumbai to Wadgaon Sheri Cab Service"],
        ["Mumbai to Nigdi Cab Service", "Mumbai to Swargate Cab"],
        ["Mumbai to Pune Station Cab", "Mumbai to Shivaji Nagar Cab"],
        ["Mumbai Pune Taxi Booking", "Mumbai Pune Taxi Booking"],
        ["Mumbai to Pune Cab", "Pune to Mumbai Cabs"],
        ["Mumbai to Pune Cab Service", "Pune to Mumbai Cab Service"],
        ["Pune Mumbai Taxi Service", "Pune to Mumbai Cab Booking"],
        ["Cab Service Mumbai to Pune", "Mumbai to Pune Taxi Charges"],
        ["Mumbai to Pune Innova Cab", "Mumbai to Pune Innova Crysta on Rent"]
      ],
      "whychoose": [
        {
          "WhyChooseheading": "Reliable and On-Time Service",
          "WhyChoosedescription": "At Vedant Travels, we prioritize punctuality for your Mumbai Pune Cab Booking. Whether you're traveling for business or leisure, our drivers ensure timely pickups and drop-offs, ensuring that you reach your destination safely and on time."
        },
        {
          "WhyChooseheading": "Comfortable and Spacious Vehicles",
          "WhyChoosedescription": "We offer a wide range of vehicles to make your journey comfortable. From sedans to SUVs and premium cars, our fleet for Mumbai Pune Cab Booking is designed to offer maximum comfort with air conditioning, spacious interiors, and ample legroom for a relaxed trip."
        },
        {
          "WhyChooseheading": "Experienced and Professional Drivers",
          "WhyChoosedescription": "Our experienced and professional drivers are well-acquainted with the Mumbai Pune route, ensuring a smooth, safe, and timely journey. They are familiar with the best routes, traffic patterns, and safety protocols to make your trip hassle-free."
        },
        {
          "WhyChooseheading": "Affordable and Transparent Pricing",
          "WhyChoosedescription": "Vedant Travels provides competitive and transparent pricing for Mumbai Pune Cab Booking. We offer value for your money with no hidden charges, so you can rest assured that you're getting a fair price for your journey."
        },
        {
          "WhyChooseheading": "Safe and Comfortable Journey",
          "WhyChoosedescription": "Your safety is our top priority. All our vehicles are regularly maintained and equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols, ensuring a secure and pleasant ride from Mumbai to Pune."
        },
        {
          "WhyChooseheading": "24/7 Availability",
          "WhyChoosedescription": "Whether you need an early morning pickup or a late-night return, Vedant Travels is available 24/7 for Mumbai Pune Cab Booking. You can book your ride at any time, and our customer service team will be happy to assist you."
        },
        {
          "WhyChooseheading": "Hassle-Free Booking Process",
          "WhyChoosedescription": "Vedant Travels makes booking your Mumbai Pune Cab quick and easy. You can book online via our website or mobile app or call our customer service team for personalized assistance with your booking. We ensure a smooth and hassle-free booking experience."
        },
        {
          "WhyChooseheading": "Customized Travel Packages",
          "WhyChoosedescription": "Whether you're traveling for business, a family trip, or just a weekend getaway, we offer customized travel packages for Mumbai Pune Cab Booking. Share your preferences with us, and we’ll tailor the journey to suit your needs."
        }
      ]



    }

    const faqData = [
        {
            id: 1,
            question: 'How can I book a Mumbai Pune cab with Vedant Travels?',
            answer: 'You can easily book a Mumbai Pune Cab through our website or mobile app. Alternatively, you can contact our customer service team for personalized assistance.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are experienced in handling long-distance routes like Mumbai to Pune, ensuring a smooth, safe, and timely journey.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Mumbai Pune travel?',
            answer: 'We offer a range of vehicles including sedans, SUVs, and premium cars. All our vehicles are well-maintained and designed for comfort on long journeys.',
        },
        {
            id: 4,
            question: 'How do I pay for my Mumbai Pune cab rental?',
            answer: 'We accept multiple payment methods, including cash, credit/debit cards, and online payments via our app, making it convenient for you to pay for your Mumbai Pune Cab Booking.',
        },
        {
            id: 5,
            question: 'Can I book a round trip with my Mumbai Pune cab?',
            answer: 'Yes, you can easily book a round-trip cab. Provide your return details at the time of booking, and we will handle the rest.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any extra charges for waiting time or detours will be communicated to you upfront during the booking process, ensuring complete transparency in pricing.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing during my Mumbai Pune trip?',
            answer: 'Yes, we offer customized sightseeing tours as part of your Mumbai Pune Cab Booking. Explore popular landmarks and tourist spots in both cities with the help of our professional drivers.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Mumbai Pune cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have more luggage or special requirements, let us know at the time of booking, and we will make necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Mumbai and Pune?',
            answer: 'Yes, we offer corporate travel services for Mumbai Pune trips. Whether it’s for business meetings, conferences, or employee transport, we can tailor our services to meet your company’s needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Mumbai Pune journey?',
            answer: 'Vedant Travels offers reliable, safe, and comfortable travel services with experienced drivers, affordable rates, and a well-maintained fleet. We ensure a stress-free and enjoyable journey for all your Mumbai Pune Cab Booking needs.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Rakesh Joshi",
            title: "Business Traveler",
            quote: "I booked a Mumbai Pune Cab with Vedant Travels for a business trip, and it was a great experience. The vehicle was clean, the driver was punctual, and the trip was smooth. I highly recommend them for your travels.",
            rating: 5,
        },
        {
            name: "Mrs. Priya Nair",
            title: "Family Traveler",
            quote: "I used Vedant Travels for a family trip from Mumbai to Pune. The car was comfortable, the driver was friendly, and the journey was smooth. I will definitely choose them again for future trips!",
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
        "name": "Mumbai Pune Cab Booking | Vedant Travels",
        "description": "Book your Mumbai to Pune cab with Vedant Travels. Offering one-way and round-trip taxi services at affordable rates. Choose from Innova, Ertiga, and Sedan for a comfortable journey. Available for airport transfers, station pickups, and more.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.7",
          "ratingCount": "250"
        }
      };
      
    
    return (
        <div>
           
           <Helmet>
        <title>Mumbai Pune Cab Booking | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Mumbai to Pune cab with Vedant Travels. Affordable and reliable one-way and round-trip taxi services available for comfortable journeys in Innova, Ertiga, and Sedan. Fast and easy booking for station pickups, airport transfers, and more." />
        <meta name="keywords" content="Mumbai Pune Cab Booking, Mumbai to Pune Taxi Fare, Mumbai Pune Taxi Booking, Mumbai Pune Cab Service, Pune to Mumbai Cab Booking, Mumbai to Pune Innova Cab, Mumbai to Pune Taxi Charges, Mumbai to Pune Taxi, Mumbai to Pune Cab Service, Pune Mumbai Taxi Service, Mumbai to Pune Round Trip Taxi, Mumbai to Pune Station Cab, Mumbai to Pune Airport Transfer, Mumbai to Swargate Cab, Mumbai to Wanwadi Cab Service, Mumbai to Mundwa Cab, Mumbai to Nigdi Cab Service, Mumbai to Wadgaon Sheri Cab Service, Mumbai to Shivaji Nagar Cab" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/mumbai-pune-cab-booking" />
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
                            <img src='/images/keyword/42.jpg' alt='img' />
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

export default Mumbaipunecabbooking;
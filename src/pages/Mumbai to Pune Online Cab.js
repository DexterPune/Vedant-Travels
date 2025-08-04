
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Mumbaitopuneonlinecab() {



    const cardData =
    {
        keyword: 'Mumbai to Pune Online Cab ',
        heading: 'Vedant Travels: Mumbai to Pune Online Cab',
        headingDescription: 'Vedant Travels offers reliable and hassle-free online cab booking services for your journey from Mumbai to Pune. With a range of vehicles including sedans, SUVs, and premium cabs, we cater to your travel preferences. Enjoy a smooth, comfortable, and timely journey with our professional drivers. Our transparent pricing ensures no hidden charges, making your trip cost-effective and stress-free.',

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
        "name": "Mumbai to Pune Online Cab",
        "description": "Looking to book a cab from Mumbai to Pune online? Vedant Travels offers reliable and convenient online cab booking services. Choose from a range of vehicles like Innova, Ertiga, and Sedans for a smooth and hassle-free ride."
    },
    {
        "name": "Mumbai Airport to Pune Taxi Online Booking",
        "description": "Book your taxi from Mumbai Airport to Pune online with Vedant Travels. We offer a variety of vehicles like Innova, Ertiga, and Sedans to ensure a comfortable and timely journey."
    },
    {
        "name": "Mumbai to Pune Online Innova Taxi",
        "description": "Need an Innova for your Mumbai to Pune journey? Vedant Travels offers online booking for Innova taxis, providing you with a spacious, comfortable, and luxurious ride to Pune."
    },
    {
        "name": "Mumbai to Pune Online Ertiga Taxi",
        "description": "For a comfortable and affordable ride, book an Ertiga taxi online from Mumbai to Pune with Vedant Travels. Our Ertiga cabs are perfect for small groups or families traveling together."
    },
    {
        "name": "Mumbai to Pune Online Round Trip Taxi",
        "description": "Looking for a round trip from Mumbai to Pune? Vedant Travels offers easy online round-trip taxi booking services, ensuring a seamless journey with a variety of vehicle options like Innova, Ertiga, and Sedans."
    },
    {
        "name": "Online Cab Booking Mumbai to Pune",
        "description": "Vedant Travels provides convenient online cab booking for your Mumbai to Pune journey. With transparent pricing and professional drivers, you can book your ride easily and travel in comfort."
    },
    {
        "name": "Mumbai to Pune 24x7 Cab Booking",
        "description": "Need a cab from Mumbai to Pune at any time of day? Vedant Travels offers 24x7 online cab booking services, ensuring that you can book a ride whenever you need it, with a variety of vehicle options."
    },
    {
        "name": "Mumbai Airport to Pune Taxi Online Booking",
        "description": "Book your Mumbai Airport to Pune taxi online with Vedant Travels. Our fleet of vehicles, including Innova, Ertiga, and Sedans, ensures a comfortable and safe journey at your convenience."
    },
    {
        "name": "Online Cab Booking Pune to Mumbai",
        "description": "Planning to travel from Pune to Mumbai? Vedant Travels offers easy online booking for your cab journey. Choose from our fleet of well-maintained vehicles for a smooth, timely, and comfortable ride."
    },
    {
        "name": "Mumbai to Pune Online Cab",
        "description": "Vedant Travels makes it easy to book an online cab from Mumbai to Pune. With our reliable service and professional drivers, your journey will be smooth and comfortable."
    },
    {
        "name": "Online Cab Booking Pune to Mumbai",
        "description": "Book your taxi from Pune to Mumbai online with Vedant Travels. Our reliable and convenient online booking service offers a variety of vehicles to cater to your needs."
    },
    {
        "name": "Mumbai Online Cab Booking",
        "description": "Vedant Travels offers an easy and reliable online cab booking service in Mumbai. Book your ride effortlessly with a variety of vehicle options to suit your comfort and budget."
    },
    {
        "name": "Online Taxi Booking Mumbai",
        "description": "Booking a taxi online in Mumbai has never been easier with Vedant Travels. Choose from a range of vehicles like Innova, Ertiga, and Sedans for a smooth and safe journey."
    },
    {
        "name": "Mumbai Airport Taxi Booking Online",
        "description": "Book your taxi from Mumbai Airport online with Vedant Travels. Our fleet includes well-maintained vehicles like Innova, Ertiga, and Sedans, ensuring a comfortable and timely airport transfer."
    },
    {
        "name": "Taxi Booking in Mumbai",
        "description": "Vedant Travels provides easy taxi booking in Mumbai, offering reliable and professional taxi services. Whether you need a ride within Mumbai or to nearby destinations, we’ve got you covered."
    },
    {
        "name": "Online Cab Service in Mumbai",
        "description": "Need an online cab service in Mumbai? Vedant Travels offers reliable and affordable taxi services with a wide selection of vehicles, ensuring a smooth and comfortable journey to your destination."
    },
    {
        "name": "Online Cab in Mumbai",
        "description": "Book an online cab in Mumbai with Vedant Travels for a reliable and comfortable ride. We offer various vehicles like Innova, Ertiga, and Sedans for your convenience."
    },
    {
        "name": "Online Taxi Booking from Mumbai Airport",
        "description": "Book your taxi from Mumbai Airport online with Vedant Travels for a smooth and stress-free experience. Our professional drivers and well-maintained vehicles ensure comfort and punctuality."
    },
    {
        "name": "Online Taxi Service in Mumbai",
        "description": "For online taxi services in Mumbai, Vedant Travels offers reliable and efficient options to suit your needs. Whether you’re traveling for business or leisure, we provide the best in comfort and service."
    }
],


"tableData": [
    ["Mumbai to Pune Online Cab", "Mumbai Airport to Pune Taxi Online Booking"],
    ["Mumbai to Pune Online Innova Taxi", "Mumbai to Pune Online Ertiga Taxi"],
    ["Mumbai to Pune Online Round Trip Taxi", "Online Cab Booking Mumbai to Pune"],
    ["Mumbai to Pune 24x7 Cab Booking", "Mumbai Airport to Pune Taxi Online Booking"],
    ["Online Cab Booking Pune to Mumbai", "Mumbai to Pune Online Cab"],
    ["Online Cab Booking Pune to Mumbai", "Mumbai Online Cab Booking"],
    ["Online Taxi Booking Mumbai", "Mumbai Airport Taxi Booking Online"],
    ["Taxi Booking in Mumbai", "Online Cab Service in Mumbai"],
    ["Online Cab in Mumbai", "Online Taxi Booking from Mumbai Airport"],
    ["Online Taxi Service in Mumbai", ""]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we prioritize punctuality for your Mumbai to Pune Online Cab journey. Our drivers ensure timely pickups and drop-offs, making sure you never have to worry about missing important appointments or events."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicles",
      "WhyChoosedescription": "We offer a fleet of comfortable and spacious vehicles for your Mumbai to Pune Online Cab ride. Choose from a variety of cars, including sedans, SUVs, and premium vehicles, all designed for your comfort with air conditioning, ample legroom, and plush seating for a smooth journey."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our drivers are well-trained and experienced in handling the Mumbai to Pune route. With a good understanding of the best routes and traffic conditions, they ensure a safe, comfortable, and timely ride for you every time you book an online cab with us."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "Vedant Travels offers competitive and transparent pricing for your Mumbai to Pune Online Cab. There are no hidden charges, and you can be sure of fair pricing throughout your journey."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Safety is our top priority. All our vehicles undergo regular maintenance and are equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols to ensure a secure and comfortable ride for you."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "Whether you need a morning pickup or a late-night return, Vedant Travels is available 24/7 for Mumbai to Pune Online Cab bookings. Our customer service team is always ready to assist you with your travel plans."
    },
    {
      "WhyChooseheading": "Hassle-Free Online Booking",
      "WhyChoosedescription": "Booking your Mumbai to Pune Online Cab is quick and easy with Vedant Travels. You can book your ride directly through our user-friendly website or mobile app. If you need assistance, our customer service team is just a call away."
    },
    {
      "WhyChooseheading": "Customizable Travel Packages",
      "WhyChoosedescription": "We offer customizable travel packages for your Mumbai to Pune journey. Whether it’s a business trip or a leisure ride, we can tailor your trip according to your schedule and preferences to ensure maximum comfort and convenience."
    }
  ]




    }

    const faqData = [
        {
            id: 1,
            question: 'How can I book a Mumbai to Pune Online Cab with Vedant Travels?',
            answer: 'You can easily book a Mumbai to Pune Online Cab via our website or mobile app. If you need help or have any special requests, feel free to contact our customer service team.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are experienced and skilled in handling long-distance routes like Mumbai to Pune, ensuring a smooth and efficient journey for you.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Mumbai to Pune online travel?',
            answer: 'We offer a range of vehicles, including sedans, SUVs, and premium cars, all designed for comfort and equipped for long-distance travel between Mumbai and Pune.',
        },
        {
            id: 4,
            question: 'How do I pay for my Mumbai to Pune Online Cab rental?',
            answer: 'We accept various payment methods, including cash, credit/debit cards, and online payments via our app, providing you with flexibility and convenience.',
        },
        {
            id: 5,
            question: 'Can I book a return trip along with my Mumbai to Pune Online Cab?',
            answer: 'Yes, you can book a round-trip cab by providing your return details at the time of booking, and we’ll take care of the rest.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any additional charges for waiting time or detours will be communicated to you upfront at the time of booking, ensuring complete transparency in our pricing.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing during my Mumbai to Pune trip?',
            answer: 'Yes, we offer customized sightseeing tours during your Mumbai to Pune journey. Explore popular landmarks and tourist destinations in both cities with the help of our professional drivers.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Mumbai to Pune Online Cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have extra luggage or any special requirements, let us know while booking, and we will make the necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Mumbai and Pune?',
            answer: 'Yes, we provide corporate travel services for businesses needing regular or occasional travel between Mumbai and Pune. We can tailor the service to your company’s needs and preferences.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Mumbai to Pune Online Cab journey?',
            answer: 'Vedant Travels offers reliable, affordable, and safe travel services. With professional drivers, comfortable vehicles, and a transparent pricing model, we make sure your Mumbai to Pune trip is stress-free and enjoyable every time you book with us online.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Sameer Joshi",
            title: "Frequent Traveler",
            quote: "Booking a Mumbai to Pune Online Cab with Vedant Travels was so easy! The cab was comfortable, the driver was professional, and I had a smooth ride. I will definitely use them again for my future travels.",
            rating: 5,
        },
        {
            name: "Ms. Priyanka Mehta",
            title: "Regular Commuter",
            quote: "I regularly use Vedant Travels for my Mumbai to Pune commute. The online booking process is quick and convenient, and the service is consistently excellent. The cars are clean and comfortable, and the drivers are punctual.",
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
        "name": "Mumbai to Pune Online Cab | Vedant Travels",
        "description": "Book your Mumbai to Pune online cab with Vedant Travels. Offering 24x7 online taxi booking for a smooth journey in Innova, Ertiga, and Sedan. Get hassle-free and reliable taxi services for one-way, round trips, and airport transfers.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.8",
          "ratingCount": "150"
        }
      };
      
   
      



    return (
        <div>
           
           <Helmet>
        <title>Mumbai to Pune Online Cab | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Mumbai to Pune online cab with Vedant Travels. We offer 24x7 online taxi booking services for a smooth journey in Innova, Ertiga, and Sedan. Convenient online booking for one-way, round trips, and airport transfers." />
        <meta name="keywords" content="Mumbai to Pune Online Cab, Mumbai to Pune Online Taxi, Mumbai Airport to Pune Taxi Online Booking, Mumbai to Pune Online Innova Taxi, Mumbai to Pune Online Ertiga Taxi, Mumbai to Pune Round Trip Taxi, Online Cab Booking Mumbai to Pune, Online Cab Booking Pune to Mumbai, Mumbai Online Cab Booking, Online Taxi Booking Mumbai, Taxi Booking in Mumbai, Online Cab Service in Mumbai, Online Taxi Service in Mumbai, Mumbai Airport Taxi Booking Online" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/mumbai-to-pune-online-cab" />
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
                            <img src='./images/keyword/9.jpg' alt='img' />
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

export default Mumbaitopuneonlinecab;
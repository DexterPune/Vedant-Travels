
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Powaimumbaipunecab() {



    const cardData =
    {
        keyword: 'Powai Mumbai Pune Cab Service ',
        heading: 'Vedant Travels: Powai Mumbai Pune Cab Service  ',
        headingDescription: 'Vedant Travels offers a reliable and comfortable cab service for your journey from Powai, Mumbai to Pune. Whether you’re traveling for business, leisure, or with family, we provide a wide selection of vehicles including sedans, SUVs, and luxury cars to suit your preferences. Our well-maintained fleet and professional drivers ensure a smooth and pleasant travel experience.',

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
            "name": "Powai to Pune Cab",
            "description": "Vedant Travels offers reliable and comfortable taxi services for the journey from Powai to Pune. Whether you're traveling for business, leisure, or with family, our fleet ensures a smooth and pleasant ride."
        },
        {
            "name": "Powai to Pune Cab Fare",
            "description": "The Powai to Pune taxi fare with Vedant Travels is affordable and transparent, with no hidden charges. We offer a variety of vehicles, including Ertiga, Innova, and Sedans, to cater to your travel needs."
        },
        {
            "name": "Powai to Pimpri Cab Fare",
            "description": "Traveling from Powai to Pimpri Chinchwad? Vedant Travels provides competitive fares and high-quality taxi services, ensuring comfort and safety throughout your journey."
        },
        {
            "name": "Powai to Pimpri Chinchwad Cab",
            "description": "If you're heading to Pimpri Chinchwad from Powai, Vedant Travels offers professional and punctual taxi services. With a choice of vehicles including Innova and Ertiga, enjoy a stress-free ride."
        },
        {
            "name": "Powai to Baner Cab",
            "description": "The Powai to Baner taxi service by Vedant Travels offers a smooth, hassle-free ride with our well-maintained vehicles. Whether you need a Sedan, Ertiga, or Innova, we ensure timely service and comfort."
        },
        {
            "name": "Powai to Pune Station Cab",
            "description": "For those traveling from Powai to Pune Station, Vedant Travels provides reliable and affordable taxi services. Our fleet includes Sedans, Ertiga, and Innova, making sure your trip is comfortable and on time."
        },
        {
            "name": "Powai to Viman Nagar Cab",
            "description": "Need a taxi from Powai to Viman Nagar? Vedant Travels offers reliable and affordable services for this route. With various vehicle options, including Innova and Ertiga, enjoy a comfortable and safe journey."
        },
        {
            "name": "Powai to Hadapsar Cab",
            "description": "Travel from Powai to Hadapsar with Vedant Travels and experience comfortable, safe, and timely taxi services. We offer a range of vehicles to suit your preferences and budget, including the Innova and Ertiga."
        },
        {
            "name": "Powai to Magarpatta Cab",
            "description": "For a smooth ride from Powai to Magarpatta, Vedant Travels offers efficient and affordable taxi services. Our experienced drivers ensure a safe journey, whether you're traveling in an Innova or Ertiga."
        },
        {
            "name": "Powai to Hinjewadi Cab Fare",
            "description": "The Powai to Hinjewadi taxi fare is designed to be competitive and reasonable with Vedant Travels. We ensure a comfortable and relaxing ride with the option of choosing vehicles like the Innova or Ertiga."
        },
        {
            "name": "Cab Service in Powai Mumbai",
            "description": "Vedant Travels offers excellent cab services in Powai, Mumbai, catering to both local and outstation travel needs. Whether you're booking for a short trip or long-distance travel, we provide reliable, comfortable, and punctual services."
        },
        {
            "name": "Powai to Pune Ertiga Taxi",
            "description": "If you're looking for a comfortable, spacious, and affordable ride from Powai to Pune, the Ertiga is a perfect choice. Vedant Travels offers this vehicle for your journey, ensuring a smooth and enjoyable ride."
        },
        {
            "name": "Powai to Pune Innova Crysta",
            "description": "For those seeking extra space and comfort, the Innova Crysta is available for the Powai to Pune journey. Enjoy a luxurious ride with Vedant Travels, complete with professional drivers and a comfortable travel experience."
        },
        {
            "name": "Powai to Pune Round Trip Taxi",
            "description": "If you require a round trip from Powai to Pune, Vedant Travels offers convenient and flexible round-trip services. Our drivers ensure timely arrivals and departures, providing a smooth and hassle-free experience for your return journey."
        }
    ],


    "tableData": [
    ["Powai to Pune Cab", "Powai to Pune Cab Fare"],
    ["Powai to Pimpri Cab Fare", "Powai to Pimpri Chinchwad Cab"],
    ["Powai to Baner Cab", "Powai to Pune Station Cab"],
    ["Powai to Viman Nagar Cab", "Powai to Hadapsar Cab"],
    ["Powai to Magar Magarpatta Cab", "Powai to Hinjewadi Cab Fare"],
    ["Cab Service in Powai Mumbai", "Powai to Pune Ertiga Taxi"],
    ["Powai to Pune Innova Crysta", "Powai to Pune Round Trip Taxi"]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we understand the importance of punctuality. Whether you're traveling for business or leisure, our Powai Mumbai Pune Cab Service ensures that your journey is smooth and on time. Our drivers are committed to providing timely pickups and drop-offs, ensuring you never have to worry about delays."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicles",
      "WhyChoosedescription": "Enjoy a comfortable and relaxing ride with our well-maintained vehicles, including sedans, SUVs, and premium cars. Each vehicle is equipped with air conditioning, comfortable seating, and ample legroom, providing you with a pleasant journey from Powai to Pune."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our experienced drivers are trained to handle long-distance routes with ease. They are familiar with the best routes and traffic conditions from Powai to Pune, ensuring a smooth, safe, and timely journey."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "We offer competitive rates for your Powai Mumbai Pune Cab Service with no hidden charges. Vedant Travels believes in complete transparency, providing you with a clear breakdown of the fare upfront so you can travel without any worries."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Your safety is our priority. All our vehicles are regularly serviced and equipped with modern safety features like airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols to ensure that your journey is safe and secure."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "Whether you need a cab early in the morning or late at night, Vedant Travels is available 24/7 for your Powai Mumbai Pune Cab Service. Our customer service team is always ready to assist you with booking and ensure a smooth travel experience."
    },
    {
      "WhyChooseheading": "Hassle-Free Booking Process",
      "WhyChoosedescription": "Booking your Powai Mumbai Pune Cab is easy and convenient. You can book online through our website or mobile app, or you can contact our customer service team for personalized assistance with your booking."
    },
    {
      "WhyChooseheading": "Customizable Travel Packages",
      "WhyChoosedescription": "We offer customizable travel packages to suit your needs and preferences. Whether it’s a business trip, a family getaway, or a solo adventure, we can tailor the Powai Mumbai Pune Cab Service to make your journey more enjoyable."
    }
  ]




    }



 const faqData = [
    {
        id: 1,
        question: 'How can I book a Powai Mumbai Pune cab with Vedant Travels?',
        answer: 'You can book your Powai Mumbai Pune Cab easily through our website or mobile app. Alternatively, our customer service team is available to assist you with any booking needs.',
    },
    {
        id: 2,
        question: 'Are the drivers experienced for long-distance travel?',
        answer: 'Yes, all our drivers are highly experienced in handling long-distance routes like Powai to Pune. They are familiar with the best routes and the traffic conditions to ensure a comfortable and timely journey.',
    },
    {
        id: 3,
        question: 'What types of vehicles are available for Powai Mumbai Pune travel?',
        answer: 'We offer a variety of vehicles for your Powai Mumbai Pune Cab Service, including sedans, SUVs, and premium cars. All vehicles are well-maintained and designed to provide a comfortable ride for long-distance travel.',
    },
    {
        id: 4,
        question: 'How do I pay for my Powai Mumbai Pune cab rental?',
        answer: 'We accept a range of payment options, including cash, credit/debit cards, and online payments via our app, making it easy and convenient for you to pay for your Powai Mumbai Pune Cab.',
    },
    {
        id: 5,
        question: 'Can I book a round-trip cab from Powai to Pune?',
        answer: 'Yes, you can book a round-trip cab for your Powai Mumbai Pune Cab Service. Just provide your return details during the booking process, and we’ll arrange the rest.',
    },
    {
        id: 6,
        question: 'Are there any extra charges for waiting or detours?',
        answer: 'Any extra charges for waiting time or detours will be communicated to you upfront at the time of booking, ensuring complete transparency in pricing.',
    },
    {
        id: 7,
        question: 'Can I hire a cab for sightseeing during my Powai Mumbai Pune trip?',
        answer: 'Yes, we offer sightseeing services during your Powai Mumbai Pune Cab Service. You can explore popular attractions along the way with the help of our knowledgeable drivers.',
    },
    {
        id: 8,
        question: 'What is the luggage allowance for a Powai Mumbai Pune cab?',
        answer: 'Our vehicles can comfortably accommodate standard luggage. If you have extra luggage or specific needs, please mention them when booking, and we’ll make the necessary arrangements.',
    },
    {
        id: 9,
        question: 'Is Vedant Travels available for corporate travel between Powai and Pune?',
        answer: 'Yes, we offer corporate travel services for businesses that need regular or occasional trips between Powai and Pune. Our services are customizable to meet your company\'s specific needs.',
    },
    {
        id: 10,
        question: 'Why should I choose Vedant Travels for my Powai Mumbai Pune trip?',
        answer: 'Vedant Travels is known for its reliable service, professional drivers, well-maintained vehicles, and affordable pricing. We ensure a safe, comfortable, and stress-free journey for all our passengers traveling between Powai and Pune.',
    },
];

const testimonials = [
    {
        name: "Mr. Sanjay Mehta",
        title: "Business Traveler",
        quote: "I booked a Powai to Pune cab with Vedant Travels for a business trip, and it was a smooth experience. The driver was professional, the vehicle was comfortable, and I arrived on time. Highly recommend!",
        rating: 5,
    },
    {
        name: "Mrs. Priya Patil",
        title: "Family Traveler",
        quote: "We used Vedant Travels for our family trip from Powai to Pune, and it was a fantastic experience. The car was spacious, clean, and the driver was friendly and punctual. We’ll definitely use them again!",
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
        "name": "Powai Mumbai Pune Cab Service | Vedant Travels",
        "description": "Book your Powai to Pune taxi with Vedant Travels. Affordable one-way and round-trip cabs including Innova Crysta, Ertiga, and Sedan. Reliable service from Powai to Pune, Pimpri, Baner, Viman Nagar, Hadapsar, Hinjewadi, and more.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.7",
          "ratingCount": "95"
        }
      };
      
    
      


    return (
        <div>
           
           <Helmet>
        <title>Powai to Pune Cab Service | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Powai to Pune taxi with Vedant Travels. Affordable one-way and round-trip cabs including Innova Crysta, Ertiga, and Sedan. Reliable service from Powai to Pune, Baner, Viman Nagar, Hadapsar, Hinjewadi, and more." />
        <meta name="keywords" content="Powai to Pune Cab, Powai to Pune One Way Cab, Powai to Pune Taxi, Powai to Pune Ertiga, Powai to Pune Innova Crysta, Powai to Pune Round Trip, Powai to Pune Taxi Service, Mumbai to Pune Taxi, Powai to Viman Nagar Cab" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/powai-to-pune-cab-service" />
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
                            <img src='./images/keyword/50.jpg' alt='img' />
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

export default Powaimumbaipunecab;
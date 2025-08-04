
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Panveltopunecab() {



    const cardData =
    {
        keyword: 'Panvel to Pune Cab ',
        heading: 'Vedant Travels: Panvel to Pune Cab',
        headingDescription: 'Vedant Travels offers a convenient and comfortable cab service from Panvel to Pune. Whether you are traveling for business, leisure, or with family, we provide a range of vehicles including sedans, SUVs, and luxury cars to meet your preferences. Our well-maintained fleet and professional drivers ensure a smooth, safe, and enjoyable journey.',

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
            "name": "Panvel Station to Pune Taxi",
            "description": "Looking for a comfortable taxi ride from Panvel Station to Pune? We offer reliable and affordable taxi services for your travel needs. Choose from a variety of vehicles including sedans, SUVs, and luxury cars."
        },
        {
            "name": "Panvel to Pune Cab Charges",
            "description": "The cab charges for traveling from Panvel to Pune vary depending on the vehicle type, distance, and additional services. For an accurate estimate, we recommend contacting a taxi service provider for up-to-date pricing."
        },
        {
            "name": "Panvel to Pune Cab Fare",
            "description": "The fare for a one-way trip from Panvel to Pune typically depends on the type of vehicle you select. The average fare for a sedan or standard car ranges from ₹2,500 to ₹3,500, and for larger vehicles like Innova or Ertiga, it can be between ₹4,000 and ₹5,500."
        },
        {
            "name": "Panvel to Pune Distance Taxi Fare",
            "description": "The distance from Panvel to Pune is approximately 150-160 km. The taxi fare will vary based on the route taken, the type of car you choose, and the toll charges. Typically, the journey will take around 3-4 hours depending on traffic."
        },
        {
            "name": "Panvel to Pune Taxi",
            "description": "You can easily book a taxi for your travel from Panvel to Pune, offering door-to-door service for your convenience. Choose from a variety of cars including budget sedans, luxury cars, and larger vehicles for families or groups."
        },
        {
            "name": "Panvel to Pune Innova Cab",
            "description": "For a comfortable and spacious ride, choose an Innova cab for your journey from Panvel to Pune. It’s perfect for family trips or groups who want extra space for luggage and comfort during the ride."
        },
        {
            "name": "Panvel to Pune One Way Cab",
            "description": "If you're traveling from Panvel to Pune one way, we offer special one-way cab services. One-way fares typically offer lower pricing compared to round trips. You can easily book a one-way trip online or through a service provider."
        },
        {
            "name": "Panvel to Pune Round Trip Cab",
            "description": "For a round trip from Panvel to Pune and back, you can book a round trip cab that will cover your entire journey at a discounted rate. This option includes both the outbound and return journey, making it a cost-effective choice for travelers."
        },
        {
            "name": "Panvel to Pune Station Cab Fare",
            "description": "If you're traveling to Pune Station, the taxi fare will depend on the vehicle selected and the exact pickup and drop locations. Expect fares to range from ₹2,500 to ₹4,500, depending on the vehicle and route."
        },
        {
            "name": "Panvel to Baner Cab",
            "description": "Book a cab from Panvel to Baner in Pune for a smooth and hassle-free journey. Baner is a popular locality in Pune, and we offer reliable services to ensure you reach your destination comfortably and on time."
        },
        {
            "name": "Panvel to Hinjewadi Cab",
            "description": "Hinjewadi is a major IT hub in Pune, and we offer efficient cab services from Panvel to Hinjewadi. The fare for this route will vary depending on your vehicle choice but will generally range from ₹3,000 to ₹4,500."
        },
        {
            "name": "Panvel to Pune Ertiga Cab",
            "description": "If you prefer a spacious ride, the Ertiga is an excellent choice for your trip from Panvel to Pune. It offers ample seating and comfort, especially for group travel."
        },
        {
            "name": "Panvel to Pune Taxi",
            "description": "For all your travel needs from Panvel to Pune, book a reliable taxi with our service. Choose from different vehicle categories and get the best rates for a comfortable and timely journey."
        }
    ],


     "tableData": [
    ["Panvel Station to Pune Taxi", "Panvel to Pune Cab Charges"],
    ["Panvel to Pune Cab Fare", "Panvel to Pune Distance Taxi Fare"],
    ["Panvel to Pune Taxi", "Panvel to Pune Taxi Fare"],
    ["Panvel to Pune Innova Cab", "Panvel to Pune One Way Cab"],
    ["Panvel to Pune Round Trip Cab", "Panvel to Pune Station Cab Fare"],
    ["Panvel to Baner Cab", "Panvel to Hinjewadi Cab"],
    ["Panvel to Pune Ertiga Cab", "Panvel to Pune Taxi"]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we understand the importance of time when traveling from Panvel to Pune. Whether it’s for business or leisure, our drivers ensure punctual pickups and timely drop-offs, making your journey smooth and hassle-free."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicles",
      "WhyChoosedescription": "We offer a range of well-maintained vehicles for your Panvel to Pune trip, ensuring comfort and relaxation throughout the journey. From sedans to SUVs, we have the right vehicle to suit your needs, all equipped with air conditioning and spacious interiors for a smooth ride."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our drivers are highly trained, experienced, and familiar with the Panvel to Pune route. They ensure your safety and comfort, while also taking the most efficient routes to make your trip as smooth and quick as possible."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "We believe in transparent pricing with no hidden charges. Our Panvel to Pune cab fares are competitive, and we provide clear pricing information at the time of booking, so you won’t face any surprises."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Your safety is our top priority. All our vehicles are regularly maintained and equipped with modern safety features, including airbags, seat belts, and GPS tracking. Our drivers strictly follow safety protocols to ensure a secure journey from Panvel to Pune."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "Whether you need to travel during the day or late at night, Vedant Travels is available 24/7 for your Panvel to Pune cab needs. Book a cab at any time, and our customer service team will assist you promptly."
    },
    {
      "WhyChooseheading": "Hassle-Free Booking Process",
      "WhyChoosedescription": "Booking a cab from Panvel to Pune is easy with Vedant Travels. You can book online through our website or mobile app, or contact our customer service team for assistance. We aim to make the booking process as simple as possible."
    },
    {
      "WhyChooseheading": "Customizable Travel Packages",
      "WhyChoosedescription": "We offer customized travel packages for your Panvel to Pune journey. Whether you’re traveling for business, leisure, or a special event, let us know your preferences, and we’ll tailor the trip accordingly."
    }
  ]
    }



    const faqData = [
        {
            id: 1,
            question: 'How can I book a cab from Panvel to Pune?',
            answer: 'You can easily book a cab from Panvel to Pune via our website or mobile app. Alternatively, you can contact our customer service team for personalized assistance.',
        },
        {
            id: 2,
            question: 'What types of vehicles are available for the Panvel to Pune journey?',
            answer: 'We offer a range of vehicles, including sedans, SUVs, and premium cars, ensuring comfort for all types of travelers. Whether you’re traveling alone, with family, or in a group, we have the perfect vehicle for your needs.',
        },
        {
            id: 3,
            question: 'What are the payment options for my Panvel to Pune cab?',
            answer: 'We accept a variety of payment methods, including cash, credit/debit cards, and online payments through our mobile app for your convenience.',
        },
        {
            id: 4,
            question: 'Is there a round-trip option available for Panvel to Pune?',
            answer: 'Yes, we offer round-trip services. Simply provide your return details during the booking process, and we’ll arrange the return journey for you.',
        },
        {
            id: 5,
            question: 'Are there additional charges for waiting or detours?',
            answer: 'Any additional charges for waiting time or detours will be communicated upfront during the booking process, ensuring transparency and no surprises.',
        },
        {
            id: 6,
            question: 'Can I use the Panvel to Pune cab for sightseeing?',
            answer: 'Yes, we offer sightseeing services on your Panvel to Pune journey. If you’d like to visit any landmarks or attractions along the way, let us know, and we will customize your trip accordingly.',
        },
        {
            id: 7,
            question: 'What is the luggage allowance for a Panvel to Pune cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have more luggage or specific requirements, please inform us during the booking process, and we’ll make necessary arrangements.',
        },
        {
            id: 8,
            question: 'Is Vedant Travels available for corporate travel from Panvel to Pune?',
            answer: 'Yes, we provide corporate travel services for business trips. Whether you need transportation for a meeting or for your entire team, we offer customized travel packages for corporate clients.',
        },
        {
            id: 9,
            question: 'Why should I choose Vedant Travels for my Panvel to Pune trip?',
            answer: 'Vedant Travels offers reliable service, professional drivers, competitive pricing, and well-maintained vehicles. We are committed to ensuring a safe, comfortable, and stress-free journey for all your travel needs.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Sanjay Deshmukh",
            title: "Business Traveler",
            quote: "I booked a cab from Panvel to Pune with Vedant Travels, and the experience was excellent. The driver was courteous, the vehicle was comfortable, and the entire trip was smooth and relaxing. Highly recommend!",
            rating: 5,
        },
        {
            name: "Mrs. Priya Raghavan",
            title: "Family Traveler",
            quote: "We used Vedant Travels for our family trip from Panvel to Pune. The car was spacious, clean, and the driver was professional. It was a pleasant and comfortable journey. Would definitely choose them again!",
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
        "name": "Panvel to Pune Cab Service | Vedant Travels",
        "description": "Book your Panvel to Pune taxi with Vedant Travels. Offering affordable one-way and round-trip cabs, including Innova, Ertiga, and Sedan. Reliable and comfortable taxi service from Panvel to Pune, Baner, Hinjewadi, and more.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.7",
          "ratingCount": "180"
        }
      };
      
   
      



    return (
        <div>
              <Helmet>
        <title>Panvel to Pune Cab Service | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Panvel to Pune taxi with Vedant Travels. Offering one-way and round-trip cabs, including Innova, Ertiga, and Sedan. Reliable taxi service for your journey from Panvel to Pune, Baner, Hinjewadi, and more." />
        <meta name="keywords" content="Panvel to Pune Cab Service, Panvel to Pune Taxi, Panvel to Pune Cab Fare, Panvel to Pune Taxi Charges, Panvel to Pune One Way Cab, Panvel to Pune Round Trip Cab, Panvel to Pune Station Cab Fare, Panvel to Baner Cab, Panvel to Hinjewadi Cab, Panvel to Pune Innova Crysta, Panvel to Pune Ertiga Cab" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/panvel-to-pune-cab-service" />
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
                            <img src='./images/keyword/59.jpg' alt='img' />
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

export default Panveltopunecab;
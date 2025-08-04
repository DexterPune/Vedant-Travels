
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Vikharolitopunecabservice() {



    const cardData =
    {
        keyword: 'Vikhroli to Pune Cab Services   ',
        heading: 'Vedant Travels: Vikhroli to Pune Cab Services    ',
        headingDescription: 'Vedant Travels offers reliable and comfortable cab services for your journey from Vikhroli to Pune. Whether you are traveling for business, leisure, or with family, we provide a wide selection of vehicles including sedans, SUVs, and luxury cars. Our well-maintained fleet and professional drivers ensure you have a smooth, safe, and enjoyable travel experience.',

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
            "name": "Vikhroli to Pune Cab",
            "description": "Vedant Travels offers reliable and affordable taxi services from Vikhroli to Pune. Whether you need a one-way trip or a round trip, we provide a range of vehicles, including Innova, Ertiga, and Sedans, for a smooth and comfortable ride."
        },
        {
            "name": "Vikhroli to Pune One Way Cab",
            "description": "For a convenient one-way trip from Vikhroli to Pune, Vedant Travels offers a variety of vehicle options, ensuring comfort and punctuality throughout the journey."
        },
        {
            "name": "Vikhroli to Pune Station Cab",
            "description": "Traveling to Pune Station from Vikhroli? Vedant Travels offers affordable and timely taxi services, including comfortable vehicles like Innova and Sedans, ensuring you reach the station on time with ease."
        },
        {
            "name": "Vikhroli to Pimpri Chinchwad Cab",
            "description": "For a trip from Vikhroli to Pimpri Chinchwad, Vedant Travels provides taxi services with transparent pricing and a selection of comfortable vehicles, including Innova and Ertiga. Enjoy a smooth ride to your destination."
        },
        {
            "name": "Vikhroli to Wanwadi Cab",
            "description": "Need a cab from Vikhroli to Wanwadi? Vedant Travels offers comfortable and reliable taxi services with professional drivers, ensuring a pleasant journey at competitive rates."
        },
        {
            "name": "Vikhroli to Pune Innova Crysta Cab",
            "description": "For those traveling from Vikhroli to Pune in luxury and comfort, choose our Innova Crysta cabs. With ample space and premium comfort, it’s perfect for family trips or group travel."
        },
        {
            "name": "Vikhroli to Pune 7 Seater Cab",
            "description": "If you are traveling with a group, Vedant Travels offers 7-seater cabs for your journey from Vikhroli to Pune. Our vehicles are spacious and equipped with all necessary amenities to ensure a comfortable journey."
        },
        {
            "name": "Vikhroli to Pune Sedan Cab",
            "description": "For a more economical option, our Sedan cabs offer a comfortable ride from Vikhroli to Pune. With a focus on customer satisfaction and safety, we ensure a pleasant journey at great fares."
        },
        {
            "name": "Vikhroli to Pune Shivaji Nagar Cab",
            "description": "Traveling to Shivaji Nagar from Vikhroli? Vedant Travels provides taxi services to Shivaji Nagar, Pune, with a range of vehicles to suit your needs and ensure a comfortable journey."
        },
        {
            "name": "Vikhroli to Pune Swargate Cab",
            "description": "For a journey from Vikhroli to Swargate, Vedant Travels offers timely and reliable cab services. Our vehicles, including Innova, Ertiga, and Sedans, are ideal for a smooth and enjoyable ride."
        },
        {
            "name": "Taxi Service in Vikhroli Mumbai",
            "description": "Need a taxi in Vikhroli? Vedant Travels offers excellent taxi services in Vikhroli, Mumbai, with a variety of vehicle options and professional drivers who ensure a safe and comfortable ride for all your travel needs."
        },
        {
            "name": "Vikhroli to Viman Nagar Taxi Service",
            "description": "For a taxi ride from Vikhroli to Viman Nagar, Vedant Travels offers efficient and reliable services with transparent pricing. Our range of vehicles, including Innova and Ertiga, guarantees a comfortable ride to your destination."
        }
    ],


    "tableData": [
        ["Vikhroli to Pune Cab", "Vikhroli to Pune One Way Cab"],
        ["Vikhroli to Pune Station Cab", "Vikhroli to Pimpri Chinchwad Cab"],
        ["Vikhroli to Wanwadi Cab", "Vikhroli to Pune Innova Crysta Cab"],
        ["Vikhroli to Pune 7 Seater Cab", "Vikhroli to Pune Sedan Cab"],
        ["Vikhroli to Pune Shivaji Nagar Cab", "Vikhroli to Swargate Cab"],
        ["Taxi Service in Vikhroli Mumbai", "Vikhroli to Viman Nagar Taxi Service"]
      ],
      "whychoose": [
        {
          "WhyChooseheading": "Reliable and On-Time Service",
          "WhyChoosedescription": "At Vedant Travels, we understand the importance of punctuality, especially for long-distance travel. Whether you're heading from Vikhroli to Pune for a business trip, vacation, or family visit, our drivers ensure timely pickups and smooth travel to make your journey stress-free and enjoyable."
        },
        {
          "WhyChooseheading": "Comfortable and Spacious Vehicles",
          "WhyChoosedescription": "Our fleet of vehicles is designed to provide you with a comfortable and relaxing ride. We offer a variety of options, including sedans, SUVs, and premium cars, all equipped with air conditioning, plush seating, and ample legroom, ensuring your journey from Vikhroli to Pune is pleasant."
        },
        {
          "WhyChooseheading": "Experienced and Professional Drivers",
          "WhyChoosedescription": "Our drivers are experienced in navigating long-distance routes like Vikhroli to Pune. They are well-versed with the best routes and traffic conditions, ensuring that you get to your destination safely and on time. Our drivers prioritize your comfort and safety throughout the ride."
        },
        {
          "WhyChooseheading": "Affordable and Transparent Pricing",
          "WhyChoosedescription": "We believe in offering fair and transparent pricing for our Vikhroli to Pune Cab Service. You’ll know the exact fare before you begin your journey, with no hidden charges. We offer the best value for your money with a clear breakdown of costs."
        },
        {
          "WhyChooseheading": "Safe and Comfortable Journey",
          "WhyChoosedescription": "Your safety is our priority. All our vehicles are regularly maintained and equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols, ensuring a secure and comfortable journey from Vikhroli to Pune."
        },
        {
          "WhyChooseheading": "24/7 Availability",
          "WhyChoosedescription": "Whether it’s an early morning or late-night trip, Vedant Travels is available round-the-clock for your Vikhroli to Pune journey. Our customer service team is ready to assist you at any time of the day or night."
        },
        {
          "WhyChooseheading": "Hassle-Free Booking Process",
          "WhyChoosedescription": "Booking a Vikhroli to Pune Cab with Vedant Travels is quick and easy. You can book your ride online via our website or mobile app. Alternatively, our customer service team is available to assist you and ensure a seamless booking experience."
        },
        {
          "WhyChooseheading": "Customizable Travel Packages",
          "WhyChoosedescription": "We offer customized travel packages tailored to your specific needs for the Vikhroli to Pune trip. Whether it’s a business trip, a family vacation, or a solo journey, we can personalize your ride to fit your preferences."
        }
      ]

    }



    const faqData = [
        {
            id: 1,
            question: 'How can I book a Vikhroli to Pune cab with Vedant Travels?',
            answer: 'You can book a Vikhroli to Pune Cab online through our website or mobile app. Alternatively, you can contact our customer service team, who will be happy to assist you with your booking.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, all our drivers are experienced in handling long-distance routes such as Vikhroli to Pune. They ensure that your journey is smooth, comfortable, and timely.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Vikhroli to Pune travel?',
            answer: 'We offer a wide range of vehicles, including sedans, SUVs, and premium cars, for your Vikhroli to Pune Cab Service. All vehicles are well-maintained and equipped for a comfortable journey.',
        },
        {
            id: 4,
            question: 'How do I pay for my Vikhroli to Pune cab rental?',
            answer: 'We accept multiple payment methods, including cash, credit/debit cards, and online payments via our app, making it convenient for you to settle the fare.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip cab from Vikhroli to Pune?',
            answer: 'Yes, we offer round-trip services for Vikhroli to Pune. Provide us with your return details during the booking, and we will ensure that everything is arranged for you.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any additional charges for waiting time or detours will be clearly communicated to you during the booking process. We aim to offer complete transparency in our pricing.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing during my Vikhroli to Pune trip?',
            answer: 'Yes, we offer sightseeing options as part of your Vikhroli to Pune Cab journey. You can visit popular spots along the way or in Pune, with our professional driver acting as your guide.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Vikhroli to Pune cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have excess luggage or specific requirements, please let us know while booking, and we’ll arrange accordingly.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel from Vikhroli to Pune?',
            answer: 'Yes, we offer corporate travel services for businesses requiring reliable transportation from Vikhroli to Pune. We can customize our services to meet your company\'s specific travel needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Vikhroli to Pune trip?',
            answer: 'Vedant Travels is known for its reliability, professionalism, well-maintained vehicles, and transparent pricing. We ensure a comfortable, safe, and timely journey from Vikhroli to Pune, with excellent customer service and value for money.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Ashok Mehra",
            title: "Business Traveler",
            quote: "I booked a cab from Vikhroli to Pune with Vedant Travels and had a great experience. The driver was on time, the vehicle was clean and comfortable, and the journey was smooth. I’ll definitely use their services again.",
            rating: 5,
        },
        {
            name: "Mrs. Priya Shah",
            title: "Family Traveler",
            quote: "Our family trip from Vikhroli to Pune was made easy and comfortable thanks to Vedant Travels. The vehicle was spacious, and the driver was professional. We had a hassle-free experience. Highly recommended!",
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
        "name": "Vikhroli to Pune Cab Service | Vedant Travels",
        "description": "Book your Vikhroli to Pune taxi with Vedant Travels. Offering one-way and round-trip cabs, including Innova Crysta, 7-seater, Ertiga, and Sedan. Reliable and affordable taxi service for your journey from Vikhroli to Pune, Pimpri Chinchwad, Shivaji Nagar, Swargate, and more.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.6",
          "ratingCount": "190"
        }
      };
      
      


    return (
        <div>
           <Helmet>
        <title>Vikhroli to Pune Cab Service | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Vikhroli to Pune taxi with Vedant Travels. Affordable one-way and round-trip cabs, including Innova Crysta, 7-seater, Ertiga, and Sedan. Convenient and reliable taxi service from Vikhroli to Pune, Pimpri Chinchwad, Shivaji Nagar, Swargate, and more." />
        <meta name="keywords" content="Vikhroli to Pune Cab, Vikhroli to Pune One Way Cab, Vikhroli to Pune Station Cab, Vikhroli to Pimpri Chinchwad Cab, Vikhroli to Wanwadi Cab, Vikhroli to Pune Innova Crysta Cab, Vikhroli to Pune 7 Seater Cab, Vikhroli to Pune Sedan Cab, Vikhroli to Pune Shivaji Nagar Cab, Vikhroli to Swargate Cab, Vikhroli to Viman Nagar Taxi Service, Taxi Service in Vikhroli Mumbai" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/vikhroli-to-pune-cab-service" />
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
                            <img src='./images/keyword/55.jpg' alt='img' />
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

export default Vikharolitopunecabservice;
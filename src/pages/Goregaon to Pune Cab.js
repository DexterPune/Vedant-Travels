
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Garegaontopunecab() {



    const cardData =
    {
        keyword: 'Goregaon to Pune Cab',
        heading: 'Vedant Travels: Goregaon to Pune Cab',
        headingDescription: 'Vedant Travels offers dependable and comfortable cab services for your journey from Goregaon to Pune. Whether you are traveling for work, a family trip, or leisure, we provide a wide range of vehicles to suit your needs, including sedans, SUVs, and luxury cars. Our transparent pricing ensures there are no hidden charges, and our professional drivers guarantee a safe and pleasant experience.',

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
            "name": "Goregaon to Pune Pimpri Chinchwad Cab",
            "description": "Looking for a taxi from Goregaon to Pimpri Chinchwad? Vedant Travels offers comfortable and reliable cab services, ensuring a smooth journey with professional drivers and well-maintained vehicles like Innova, Ertiga, and Sedans."
        },
        {
            "name": "Goregaon to Pune One Way Cab",
            "description": "Need a one-way cab from Goregaon to Pune? Vedant Travels offers affordable one-way cab services, ensuring a hassle-free and comfortable journey with a variety of vehicle options, including Innova, Ertiga, and Sedans."
        },
        {
            "name": "Goregaon to Pune Taxi Service",
            "description": "Vedant Travels provides reliable and affordable taxi services from Goregaon to Pune. Whether you’re traveling for business or leisure, we offer well-maintained vehicles and professional drivers to ensure a comfortable and timely journey."
        },
        {
            "name": "Taxi Service in Goregaon Mumbai",
            "description": "For taxi services in Goregaon, Mumbai, Vedant Travels offers reliable and efficient transport. Our fleet includes a variety of vehicles like Innova, Ertiga, and Sedans to suit your travel needs. Book your ride for a smooth journey."
        },
        {
            "name": "Cabs Service Goregaon Mumbai",
            "description": "Vedant Travels offers reliable and affordable cab services in Goregaon, Mumbai. Our fleet includes well-maintained vehicles with experienced drivers to ensure a smooth and comfortable ride."
        },
        {
            "name": "Malad to Pune Cab Services",
            "description": "Need a taxi from Malad to Pune? Vedant Travels offers affordable and reliable cab services to ensure a comfortable and timely journey. Choose from a range of vehicles like Innova, Ertiga, and Sedans for your journey."
        },
        {
            "name": "Oshiwara Andheri to Pune Taxi Booking",
            "description": "For a smooth journey from Oshiwara Andheri to Pune, book your taxi with Vedant Travels. We provide reliable and affordable taxi services with professional drivers and well-maintained vehicles for a comfortable ride."
        },
        {
            "name": "Goregaon to Hinjewadi Cabs",
            "description": "Traveling from Goregaon to Hinjewadi? Vedant Travels offers reliable and comfortable cab services to make your journey hassle-free. Choose from our fleet of vehicles, including Innova, Ertiga, and Sedans, for a smooth ride."
        },
        {
            "name": "Goregaon to Pune Station Cabs",
            "description": "Need a taxi from Goregaon to Pune Station? Vedant Travels offers reliable and affordable cab services with professional drivers. We ensure a comfortable ride with well-maintained vehicles, reaching your destination on time."
        },
        {
            "name": "Goregaon to Pune Station Taxi Fare",
            "description": "The taxi fare from Goregaon to Pune Station with Vedant Travels is competitive and transparent. We offer a variety of vehicles, including Innova, Ertiga, and Sedans, at reasonable prices to ensure a comfortable journey."
        },
        {
            "name": "Taxi Services from Goregaon to Pune Station",
            "description": "Vedant Travels offers reliable taxi services from Goregaon to Pune Station. Our well-maintained vehicles and professional drivers ensure you have a smooth and comfortable ride, making sure you reach your destination on time."
        },
        {
            "name": "Innova Crysta on Rent Goregaon Mumbai",
            "description": "Looking for an Innova Crysta on rent in Goregaon, Mumbai? Vedant Travels offers premium Innova Crysta rental services for those seeking extra space and luxury. Travel in style with our well-maintained vehicles."
        },
        {
            "name": "Cabs Service in Goregaon",
            "description": "Vedant Travels provides dependable and affordable cab services in Goregaon, Mumbai. Whether you're traveling locally or to outstation destinations like Pune, we ensure a comfortable and stress-free ride."
        },
        {
            "name": "Innova Crysta on Rent in Goregaon Mumbai",
            "description": "Need an Innova Crysta for your trip? Vedant Travels offers the Innova Crysta for rent in Goregaon, Mumbai, ensuring a premium and comfortable journey with ample space and luxury."
        },
        {
            "name": "Goregaon to Pimpri Chinchwad Cab",
            "description": "Book a cab from Goregaon to Pimpri Chinchwad with Vedant Travels. Our fleet of vehicles, including Innova, Ertiga, and Sedans, ensures a smooth and comfortable ride with professional drivers to make your journey hassle-free."
        },
        {
            "name": "Goregaon to Pimpri Chinchwad Cab Fare",
            "description": "The fare for a cab from Goregaon to Pimpri Chinchwad with Vedant Travels is competitive and transparent. We offer a variety of vehicles to suit your needs, ensuring a comfortable journey without hidden charges."
        },
        {
            "name": "Goregaon to Swargate Cab",
            "description": "Traveling from Goregaon to Swargate? Vedant Travels offers reliable and comfortable cab services, with well-maintained vehicles and professional drivers. Book your ride for a smooth and timely journey."
        }
    ],


    "tableData": [
        ["Goregaon to Pune Pimpri Chinchwad Cab", "Goregaon to Pune One Way Cab"],
        ["Goregaon to Pune Taxi Service", "Taxi Service in Goregaon Mumbai"],
        ["Cabs Service Goregaon Mumbai", "Malad to Pune Cab Services"],
        ["Oshiwara Andheri to Pune Taxi Booking", "Goregaon to Hinjewadi Cabs"],
        ["Goregaon to Pune Station Cabs", "Goregaon to Pune Station Taxi Fare"],
        ["Taxi Services from Goregaon to Pune Station", "Innova Crysta on Rent Goregaon Mumbai"],
        ["Innova Crysta on Rent in Goregaon Mumbai", "Goregaon to Pimpri Chinchwad Cab"],
        ["Goregaon to Pimpri Chinchwad Cab Fare", "Goregaon to Swargate Cab"]
      ],
      "whychoose": [
        {
          "WhyChooseheading": "Reliable and On-Time Service",
          "WhyChoosedescription": "At Vedant Travels, we understand the importance of punctuality for your Goregaon to Pune Cab. Whether it's a business trip, family outing, or personal journey, our drivers ensure timely pickups and drop-offs so you can relax and focus on your plans."
        },
        {
          "WhyChooseheading": "Comfortable and Spacious Vehicles",
          "WhyChoosedescription": "We offer a wide range of vehicles for your Goregaon to Pune Cab journey. Choose from sedans, SUVs, or premium cars designed for comfort, with air conditioning, spacious interiors, and ample legroom to ensure a smooth and enjoyable ride."
        },
        {
          "WhyChooseheading": "Experienced and Professional Drivers",
          "WhyChoosedescription": "Our drivers are experienced and skilled in handling the Goregaon to Pune route. They are familiar with the best routes and traffic conditions, ensuring a safe and efficient journey from start to finish. You can rely on them for a stress-free experience."
        },
        {
          "WhyChooseheading": "Affordable and Transparent Pricing",
          "WhyChoosedescription": "We offer competitive pricing for your Goregaon to Pune Cab with no hidden charges. Our pricing is transparent, so you know exactly what you're paying for upfront, ensuring that you get the best value for your money."
        },
        {
          "WhyChooseheading": "Safe and Comfortable Journey",
          "WhyChoosedescription": "Your safety is our priority. All our vehicles are regularly maintained and equipped with modern safety features like airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols to ensure a secure and comfortable trip."
        },
        {
          "WhyChooseheading": "24/7 Availability",
          "WhyChoosedescription": "Whether you need an early morning pickup or a late-night return, Vedant Travels is available 24/7 for Goregaon to Pune Cab bookings. Our customer service team is ready to assist you at any time to make your booking experience as smooth as possible."
        },
        {
          "WhyChooseheading": "Hassle-Free Booking Process",
          "WhyChoosedescription": "Vedant Travels makes booking your Goregaon to Pune Cab quick and easy. You can book online through our website or mobile app, or simply contact our customer service team for personalized assistance with your booking."
        },
        {
          "WhyChooseheading": "Customizable Travel Packages",
          "WhyChoosedescription": "Whether you're traveling for business, a weekend getaway, or a family trip, we offer customizable packages for your Goregaon to Pune Cab. Let us know your preferences, and we’ll tailor the journey to meet your specific needs and make your travel experience more enjoyable."
        }
      ]



    }

    const faqData = [
        {
            id: 1,
            question: 'How can I book a Goregaon to Pune cab with Vedant Travels?',
            answer: 'You can easily book a Goregaon to Pune Cab through our website or mobile app. Alternatively, you can contact our customer service team for personalized assistance and to book your ride.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are well-trained and experienced in handling long-distance routes like Goregaon to Pune, ensuring a smooth, safe, and timely journey for you.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Goregaon to Pune travel?',
            answer: 'We offer a variety of vehicles, including sedans, SUVs, and premium cars. All our vehicles are well-maintained and designed for comfort during long trips.',
        },
        {
            id: 4,
            question: 'How do I pay for my Goregaon to Pune cab rental?',
            answer: 'We accept various payment methods, including cash, credit/debit cards, and online payments through our app, making the payment process convenient and flexible.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip cab from Goregaon to Pune?',
            answer: 'Yes, you can book a round-trip cab. Just provide your return details at the time of booking, and we’ll handle the rest.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any additional charges for waiting time or detours will be communicated to you upfront, ensuring complete transparency in our pricing.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing during my Goregaon to Pune trip?',
            answer: 'Yes, we offer customized sightseeing tours as part of your Goregaon to Pune trip. Explore popular landmarks and tourist attractions along the way with the help of our professional drivers.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Goregaon to Pune cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have more luggage or any specific requirements, let us know when booking, and we will make the necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Goregaon and Pune?',
            answer: 'Yes, we offer corporate travel services for businesses that require regular or occasional travel between Goregaon and Pune. We can customize our services to meet your company’s needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Goregaon to Pune trip?',
            answer: 'Vedant Travels offers reliable, affordable, and safe travel services. With experienced drivers, well-maintained vehicles, and a transparent pricing model, we ensure that your Goregaon to Pune Cab journey is comfortable, secure, and enjoyable.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Anil Kapoor",
            title: "Business Traveler",
            quote: "I booked a Goregaon to Pune Cab with Vedant Travels, and I had a fantastic experience. The car was clean, the driver was professional, and the ride was smooth. I will definitely book with them again!",
            rating: 5,
        },
        {
            name: "Mrs. Shweta Deshmukh",
            title: "Family Traveler",
            quote: "Our family trip from Goregaon to Pune was made even more enjoyable thanks to Vedant Travels. The driver was courteous, the vehicle was comfortable, and we had a great time on our journey. Highly recommended!",
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
        "name": "Goregaon to Pune Cab Service | Vedant Travels",
        "description": "Book your Goregaon to Pune taxi with Vedant Travels. Offering one-way and round-trip cabs, including Innova Crysta, Ertiga, and Sedan. Reliable and affordable taxi service for your journey from Goregaon to Pune, Pimpri Chinchwad, Hinjewadi, and more.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.7",
          "ratingCount": "215"
        }
      };
      
    

    return (
        <div>
           
           <Helmet>
        <title>Goregaon to Pune Cab Service | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Goregaon to Pune taxi with Vedant Travels. Affordable one-way and round-trip cabs, including Innova Crysta, Ertiga, and Sedan. Convenient and reliable taxi service from Goregaon to Pune, Pimpri Chinchwad, Hinjewadi, and more." />
        <meta name="keywords" content="Goregaon to Pune Cab Service, Goregaon to Pune Pimpri Chinchwad Cab, Goregaon to Pune One Way Cab, Goregaon to Pune Taxi Service, Taxi Service in Goregaon Mumbai, Cabs Service Goregaon Mumbai, Malad to Pune Cab Services, Oshiwara Andheri to Pune Taxi Booking, Goregaon to Hinjewadi Cabs, Goregaon to Pune Station Cabs, Goregaon to Pune Station Taxi Fare, Taxi Services from Goregaon to Pune Station, Innova Crysta on Rent Goregaon Mumbai, Cabs Service in Goregaon, Goregaon to Swargate Cab" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/goregaon-to-pune-cab-service" />
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
                            <img src='/images/keyword/44.jpg' alt='img' />
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

export default Garegaontopunecab;
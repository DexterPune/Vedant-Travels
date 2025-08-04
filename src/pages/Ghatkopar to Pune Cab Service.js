
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Ghatkopartopunecabservice() {



    const cardData =
    {
        keyword: 'Ghatkopar to Pune Cab Service ',
        heading: 'Vedant Travels: Ghatkopar to Pune Cab Service   ',
        headingDescription: 'Vedant Travels offers a seamless and comfortable cab service for your journey from Ghatkopar to Pune. Whether you’re traveling for business, leisure, or with family, we provide a range of vehicle options, including sedans, SUVs, and luxury cars, ensuring a safe and pleasant ride.',

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
            "name": "Ghatkopar to Pimple Saudagar Cabs",
            "description": "Vedant Travels offers reliable and affordable taxi services from Ghatkopar to Pimple Saudagar. Whether you're traveling for business, leisure, or family visits, we provide a variety of vehicle options for a smooth and comfortable journey."
        },
        {
            "name": "Ghatkopar to Pune One Way Cab",
            "description": "If you need a one-way cab from Ghatkopar to Pune, Vedant Travels offers convenient and hassle-free services. Choose from our fleet of well-maintained vehicles, including Innova, Ertiga, and Sedans, for a comfortable ride to Pune."
        },
        {
            "name": "Pune to Mumbai Taxi Service",
            "description": "Vedant Travels provides efficient and affordable taxi services from Pune to Mumbai. With experienced drivers and well-maintained vehicles, you can expect a smooth and safe journey."
        },
        {
            "name": "Ghatkopar to Pune Baner Taxi Fare",
            "description": "The Ghatkopar to Pune Baner taxi fare with Vedant Travels is competitive and transparent. We offer various vehicle options, including Sedans, Ertiga, and Innova, ensuring comfort and affordability on your journey."
        },
        {
            "name": "Ghatkopar to Kondhwa Pune Taxi",
            "description": "Travel from Ghatkopar to Kondhwa Pune comfortably with Vedant Travels. We offer a range of vehicles to meet your needs, including Innova, Ertiga, and Sedans, all at affordable prices."
        },
        {
            "name": "Mumbai Ghatkopar to Pune Taxi Fare",
            "description": "The Mumbai Ghatkopar to Pune taxi fare with Vedant Travels is designed to offer the best value for money. With no hidden charges, we ensure a smooth, safe, and comfortable ride, no matter the vehicle you choose."
        },
        {
            "name": "Mumbai to Kothrud Pune Cab Fare",
            "description": "Vedant Travels offers affordable and transparent cab fares from Mumbai to Kothrud Pune. Whether you're traveling in an Innova, Ertiga, or Sedan, we guarantee a comfortable and stress-free journey."
        },
        {
            "name": "Ghatkopar to Pune Ertiga Taxi Fare",
            "description": "The Ghatkopar to Pune Ertiga taxi fare with Vedant Travels is competitive and reasonable. The Ertiga offers a comfortable and spacious ride, making it ideal for medium-sized groups or families traveling from Ghatkopar to Pune."
        },
        {
            "name": "Ghatkopar to Pune Innova Crysta Taxi",
            "description": "For a premium ride from Ghatkopar to Pune, Vedant Travels offers the Innova Crysta. With ample space and a smooth ride, the Innova Crysta ensures a luxurious and comfortable journey."
        },
        {
            "name": "Cab Service in Ghatkopar Mumbai",
            "description": "Vedant Travels offers reliable and punctual cab services in Ghatkopar, Mumbai. Whether you're traveling within the city or going on a long-distance trip, we ensure a smooth ride with our fleet of well-maintained vehicles and experienced drivers."
        }
    ],


    "tableData": [
        ["Ghatkopar to Pimple Saudagar Cabs", "Ghatkopar to Pune One Way Cab"],
        ["Pune to Mumbai Taxi Service", "Ghatkopar to Pune Baner Taxi Fare"],
        ["Ghatkopar to Kondhwa Pune Taxi", "Mumbai Ghatkopar to Pune Taxi Fare"],
        ["Mumbai to Kothrud Pune Cab Fare", "Ghatkopar to Pune Ertiga Taxi Fare"],
        ["Ghatkopar to Pune Innova Crysta Taxi", "Cab Service in Ghatkopar Mumbai"]
      ],
      "whychoose": [
        {
          "WhyChooseheading": "Reliable and On-Time Service",
          "WhyChoosedescription": "At Vedant Travels, we understand that time is valuable. Whether it's for business or leisure, our Ghatkopar to Pune Cab Service guarantees timely pickups and drop-offs, so you can enjoy a hassle-free journey without worrying about delays."
        },
        {
          "WhyChooseheading": "Comfortable and Spacious Vehicles",
          "WhyChoosedescription": "We offer a wide range of well-maintained vehicles, including sedans, SUVs, and premium cars for your Ghatkopar to Pune Cab Service. All our vehicles come with air conditioning, comfortable seating, and ample legroom, ensuring a pleasant and relaxing journey."
        },
        {
          "WhyChooseheading": "Experienced and Professional Drivers",
          "WhyChoosedescription": "Our experienced drivers are well-trained to handle long-distance travel with ease. They know the best routes from Ghatkopar to Pune, ensuring your trip is smooth, safe, and efficient. You can rely on them for a stress-free experience."
        },
        {
          "WhyChooseheading": "Affordable and Transparent Pricing",
          "WhyChoosedescription": "Vedant Travels offers competitive rates for your Ghatkopar to Pune Cab Service with no hidden charges. You’ll receive an upfront breakdown of the pricing, ensuring complete transparency and value for your money."
        },
        {
          "WhyChooseheading": "Safe and Comfortable Journey",
          "WhyChoosedescription": "Your safety is our top priority. All our vehicles are regularly serviced and equipped with modern safety features, such as airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols to ensure a secure and smooth ride."
        },
        {
          "WhyChooseheading": "24/7 Availability",
          "WhyChoosedescription": "Vedant Travels is available 24/7 for your Ghatkopar to Pune Cab Service. Whether you need a ride early in the morning or late at night, we’re here to assist you with your booking and ensure a seamless experience."
        },
        {
          "WhyChooseheading": "Hassle-Free Booking Process",
          "WhyChoosedescription": "Booking your Ghatkopar to Pune Cab is easy and quick. You can book online via our website or mobile app, or you can reach out to our customer service team for personalized assistance with your booking."
        },
        {
          "WhyChooseheading": "Customizable Travel Packages",
          "WhyChoosedescription": "Whether you’re traveling for business or pleasure, we offer customizable travel packages for your Ghatkopar to Pune Cab Service. Let us know your preferences, and we’ll tailor the journey according to your needs and desires."
        }
      ]

    }

    const faqData = [
        {
            id: 1,
            question: 'How can I book a Ghatkopar to Pune cab with Vedant Travels?',
            answer: 'You can easily book a cab online via our website or mobile app. Alternatively, you can contact our customer service team, and they will assist you with your booking.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, all our drivers are highly experienced and skilled in handling long-distance routes, including Ghatkopar to Pune. They know the best routes and traffic conditions to ensure a smooth and timely journey.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Ghatkopar to Pune travel?',
            answer: 'We offer a variety of vehicles for your Ghatkopar to Pune Cab Service, including sedans, SUVs, and premium cars. All vehicles are well-maintained, comfortable, and suitable for long-distance travel.',
        },
        {
            id: 4,
            question: 'How do I pay for my Ghatkopar to Pune cab rental?',
            answer: 'We accept a range of payment options, including cash, credit/debit cards, and online payments via our app, making it convenient for you to settle the payment for your Ghatkopar to Pune Cab.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip cab from Ghatkopar to Pune?',
            answer: 'Yes, we offer round-trip services. Just provide your return details during the booking process, and we’ll handle the rest.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any extra charges for waiting time or detours will be communicated to you upfront, ensuring transparency in our pricing.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing during my Ghatkopar to Pune trip?',
            answer: 'Yes, we offer customized sightseeing tours during your Ghatkopar to Pune Cab Service. Explore popular spots along the way with our experienced drivers.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Ghatkopar to Pune cab?',
            answer: 'Our vehicles can comfortably accommodate standard luggage. If you have additional luggage or specific needs, feel free to mention them at the time of booking, and we will make the necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Ghatkopar and Pune?',
            answer: 'Yes, we offer corporate travel services for businesses that require regular or occasional trips between Ghatkopar and Pune. We can tailor our services to meet your company’s specific needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Ghatkopar to Pune trip?',
            answer: 'Vedant Travels is known for its reliable service, professional drivers, affordable pricing, and well-maintained vehicles. We ensure a comfortable, safe, and stress-free journey for your Ghatkopar to Pune Cab Service.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Amit Mehta",
            title: "Business Traveler",
            quote: "I had a wonderful experience traveling from Ghatkopar to Pune with Vedant Travels. The car was clean, comfortable, and the driver was very professional. Highly recommend their service!",
            rating: 5,
        },
        {
            name: "Mrs. Kavita Sharma",
            title: "Family Traveler",
            quote: "We used Vedant Travels for our family trip from Ghatkopar to Pune, and it was a great experience. The vehicle was spacious, and the driver was courteous. Will definitely book again!",
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
        "name": "Ghatkopar to Pune Cab Service | Vedant Travels",
        "description": "Book your Ghatkopar to Pune taxi with Vedant Travels. Offering one-way and round-trip cabs including Innova Crysta, Ertiga, and Sedan. Affordable and reliable service from Ghatkopar to Pune, Baner, Kondhwa, and more.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.8",
          "ratingCount": "120"
        }
      };
      
  
      

    return (
        <div>
               <Helmet>
        <title>Ghatkopar to Pune Cab Service | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Ghatkopar to Pune taxi with Vedant Travels. Affordable one-way and round-trip cabs including Innova Crysta, Ertiga, and Sedan. Reliable service from Ghatkopar to Pune, Baner, Kondhwa, and more." />
        <meta name="keywords" content="Ghatkopar to Pune Cab, Ghatkopar to Pune One Way Cab, Ghatkopar to Pune Taxi, Ghatkopar to Pune Ertiga, Ghatkopar to Pune Innova Crysta, Ghatkopar to Pune Taxi Service, Ghatkopar to Pune Fare, Mumbai to Pune Taxi Service" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/ghatkopar-to-pune-cab-service" />
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
                            <img src='./images/keyword/48.jpg' alt='img' />
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

export default Ghatkopartopunecabservice;
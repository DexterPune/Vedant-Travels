
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Jogeshwaritopunecabservice() {



    const cardData =
    {
        keyword: 'Jogeshwari to Pune Cab Service ',
        heading: 'Vedant Travels: Jogeshwari to Pune Cab Service',
        headingDescription: 'Vedant Travels offers convenient and reliable cab services for your journey from Jogeshwari to Pune. Whether you are traveling for business, leisure, or family purposes, we provide a range of vehicles including sedans, SUVs, and premium cabs. With no hidden charges and transparent pricing, our professional drivers ensure a safe and comfortable journey.',

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
            "name": "Jogeshwari to Pune Taxi Fare",
            "description": "Looking for a taxi from Jogeshwari to Pune? Vedant Travels offers affordable and transparent pricing for your journey. Our fleet includes a range of vehicles like Innova, Ertiga, and Sedans for a smooth and comfortable ride."
        },
        {
            "name": "Jogeshwari to Pimpri Chinchwad Cab Service",
            "description": "Need a cab from Jogeshwari to Pimpri Chinchwad? Vedant Travels provides reliable and affordable taxi services, ensuring a comfortable journey with professional drivers and well-maintained vehicles."
        },
        {
            "name": "Jogeshwari to Pune One Way Cab",
            "description": "Looking for a one-way taxi from Jogeshwari to Pune? Vedant Travels offers a variety of vehicles like Innova, Ertiga, and Sedans for a convenient, comfortable, and cost-effective one-way trip."
        },
        {
            "name": "Jogeshwari to Pune Round Trip Cab",
            "description": "For a round-trip cab from Jogeshwari to Pune, Vedant Travels offers seamless booking and reliable services. Whether you need an Innova, Ertiga, or Sedan, we ensure a smooth, comfortable, and timely journey."
        },
        {
            "name": "Cab Service in Jogeshwari",
            "description": "Vedant Travels offers reliable and convenient cab services in Jogeshwari, Mumbai. Whether you need a ride within the city or to nearby destinations like Pune, we provide professional drivers and well-maintained vehicles for your comfort."
        },
        {
            "name": "Ertiga in Jogeshwari Mumbai",
            "description": "Looking to rent an Ertiga in Jogeshwari, Mumbai? Vedant Travels offers Ertiga cabs for a comfortable and affordable ride. Perfect for families or small groups, the Ertiga is spacious and well-maintained."
        },
        {
            "name": "Innova Crysta on Rent in Jogeshwari Mumbai",
            "description": "Need an Innova Crysta for your journey from Jogeshwari? Vedant Travels offers Innova Crysta rentals for a luxurious and comfortable ride. Book your premium ride today and travel in style."
        },
        {
            "name": "Jogeshwari to Pune Sedan Cab Fare",
            "description": "Looking for a Sedan for your Jogeshwari to Pune journey? Vedant Travels provides affordable sedan cab services, ensuring a comfortable and smooth ride with professional drivers. Our pricing is transparent with no hidden charges."
        },
        {
            "name": "Outstation Cabs in Jogeshwari West",
            "description": "For outstation travel from Jogeshwari West, Vedant Travels offers reliable and comfortable cabs. Choose from our fleet of well-maintained vehicles like Innova, Ertiga, and Sedans for a smooth, safe, and timely journey."
        },
        {
            "name": "Jogeshwari East Cab Service",
            "description": "Vedant Travels provides efficient and reliable cab services in Jogeshwari East. Whether you're traveling within the city or to destinations like Pune, we ensure a smooth and comfortable journey at affordable rates."
        },
        {
            "name": "Lokhandwala Complex to Pune Cab",
            "description": "Book a cab from Lokhandwala Complex to Pune with Vedant Travels. We offer reliable, comfortable, and affordable taxi services, ensuring you arrive in Pune safely and on time. Our fleet includes Innova, Ertiga, and Sedans."
        },
        {
            "name": "Cab Service in Jogeshwari Mumbai",
            "description": "Looking for a dependable cab service in Jogeshwari, Mumbai? Vedant Travels offers convenient, comfortable, and affordable rides to various destinations with a range of vehicles, including Innova, Ertiga, and Sedans."
        },
        {
            "name": "CAB Service in Jogeshwari West",
            "description": "Vedant Travels offers efficient cab services in Jogeshwari West, ensuring a smooth and comfortable ride for all your travel needs. Choose from a variety of vehicles and enjoy a reliable journey with professional drivers."
        },
        {
            "name": "Cab Booking Mumbai",
            "description": "For easy and hassle-free cab booking in Mumbai, Vedant Travels offers a wide range of vehicles and services. Whether you're traveling within the city or to outstation destinations, we ensure a comfortable and reliable ride."
        },
        {
            "name": "Mumbai Taxi Service",
            "description": "Vedant Travels offers reliable Mumbai taxi services for both local and outstation travel. Our fleet includes well-maintained vehicles like Innova, Ertiga, and Sedans, ensuring a smooth and comfortable ride."
        },
        {
            "name": "Cheapest Cab Service in Mumbai",
            "description": "Looking for affordable taxi services in Mumbai? Vedant Travels offers some of the most competitive rates without compromising on comfort and reliability. Choose from a range of vehicles like Innova, Ertiga, and Sedans for an economical ride."
        }
    ],


    "tableData": [
        ["Jogeshwari to Pune Taxi Fare", "Jogeshwari to Pimpri Chinchwad Cab Service"],
        ["Jogeshwari to Pune One Way Cab", "Jogeshwari to Pune Round Trip Cab"],
        ["Cab Service in Jogeshwari", "Ertiga in Jogeshwari Mumbai"],
        ["Innova Crysta on Rent in Jogeshwari Mumbai", "Jogeshwari to Pune Sedan Cab Fare"],
        ["Outstation Cabs in Jogeshwari West", "Jogeshwari East Cab Service"],
        ["Lokhandwala Complex to Pune Cab", "Cab Service in Jogeshwari Mumbai"],
        ["Cab Service in Jogeshwari West", "Cab Booking Mumbai"],
        ["Mumbai Taxi Service", "Cheapest Cab Service in Mumbai"]
      ],
      "whychoose": [
        {
          "WhyChooseheading": "Reliable and On-Time Service",
          "WhyChoosedescription": "At Vedant Travels, we understand that punctuality is key for your Jogeshwari to Pune Cab Service. Whether it’s for a business meeting or a family trip, our drivers ensure timely pickups and drop-offs so that you can stay on schedule without any worries."
        },
        {
          "WhyChooseheading": "Comfortable and Spacious Vehicles",
          "WhyChoosedescription": "Our fleet includes a wide range of vehicles that offer comfort and space for your journey from Jogeshwari to Pune. Choose from sedans, SUVs, or premium cars equipped with air conditioning, comfortable seating, and ample legroom to make your trip relaxing and stress-free."
        },
        {
          "WhyChooseheading": "Experienced and Professional Drivers",
          "WhyChoosedescription": "Our drivers are highly experienced and familiar with the Jogeshwari to Pune route. They know the best routes to avoid traffic and ensure a smooth, safe, and efficient journey. You can rely on them for a hassle-free trip."
        },
        {
          "WhyChooseheading": "Affordable and Transparent Pricing",
          "WhyChoosedescription": "We offer competitive and transparent pricing for your Jogeshwari to Pune Cab Service. There are no hidden charges, and we ensure that you get the best value for your money. You’ll always know the cost upfront, so there are no surprises."
        },
        {
          "WhyChooseheading": "Safe and Comfortable Journey",
          "WhyChoosedescription": "Your safety is our priority. All our vehicles are regularly maintained and equipped with modern safety features like airbags, seat belts, and GPS tracking. Our drivers adhere to strict safety protocols to ensure a secure journey for you."
        },
        {
          "WhyChooseheading": "24/7 Availability",
          "WhyChoosedescription": "Whether you need an early morning ride or a late-night trip, Vedant Travels is available 24/7. Our customer service team is always ready to assist you with your Jogeshwari to Pune Cab Service booking, no matter the time."
        },
        {
          "WhyChooseheading": "Hassle-Free Booking Process",
          "WhyChoosedescription": "Booking your Jogeshwari to Pune Cab with Vedant Travels is quick and easy. You can book your ride online through our website or mobile app, or you can contact our customer service team for assistance with your booking."
        },
        {
          "WhyChooseheading": "Customizable Travel Packages",
          "WhyChoosedescription": "We understand that every trip is unique. Whether you're traveling for business, a family outing, or just a leisurely trip, we offer customizable packages for your Jogeshwari to Pune Cab Service to ensure that your travel experience is tailored to your needs."
        }
      ]


    }

    const faqData = [
        {
            id: 1,
            question: 'How can I book a Jogeshwari to Pune cab with Vedant Travels?',
            answer: 'You can easily book a Jogeshwari to Pune Cab via our website or mobile app. Alternatively, you can contact our customer service team for assistance with your booking.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are experienced and well-trained to handle long-distance routes like Jogeshwari to Pune, ensuring a smooth and safe journey.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Jogeshwari to Pune travel?',
            answer: 'We offer a variety of vehicles including sedans, SUVs, and premium cars, all well-maintained and designed for comfort on long trips.',
        },
        {
            id: 4,
            question: 'How do I pay for my Jogeshwari to Pune cab rental?',
            answer: 'We accept various payment methods, including cash, credit/debit cards, and online payments via our app, making the payment process flexible and convenient for you.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip cab from Jogeshwari to Pune?',
            answer: 'Yes, you can easily book a round-trip cab. Simply provide your return details when booking, and we will handle the rest.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any extra charges for waiting time or detours will be communicated to you upfront during the booking process, ensuring transparency in our pricing.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing during my Jogeshwari to Pune trip?',
            answer: 'Yes, we offer customized sightseeing tours during your Jogeshwari to Pune trip. Explore popular landmarks and tourist attractions along the way with the help of our professional drivers.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Jogeshwari to Pune cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have more luggage or specific requirements, feel free to inform us at the time of booking, and we will make necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Jogeshwari and Pune?',
            answer: 'Yes, we offer corporate travel services for companies needing regular or occasional travel between Jogeshwari and Pune. We can customize our services to meet your business needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Jogeshwari to Pune trip?',
            answer: 'Vedant Travels is known for its reliable service, professional drivers, comfortable vehicles, and transparent pricing. We ensure that your Jogeshwari to Pune Cab Service is smooth, safe, and enjoyable.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Rohan Patel",
            title: "Business Traveler",
            quote: "I booked a cab from Jogeshwari to Pune with Vedant Travels, and it was a fantastic experience. The driver was professional, the car was comfortable, and the ride was smooth. Highly recommend it!",
            rating: 5,
        },
        {
            name: "Mrs. Simran Kapoor",
            title: "Family Traveler",
            quote: "We used Vedant Travels for our family trip from Jogeshwari to Pune. The vehicle was spacious, clean, and comfortable. The driver was courteous, and we reached Pune on time. We will definitely use them again.",
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
        "name": "Jogeshwari to Pune Cab Service | Vedant Travels",
        "description": "Book your Jogeshwari to Pune taxi with Vedant Travels. Offering one-way and round-trip cabs, including Innova Crysta, Ertiga, and Sedan. Reliable and affordable taxi service for your journey from Jogeshwari to Pune and nearby areas.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.8",
          "ratingCount": "320"
        }
      };
      
     
      


    return (
        <div>
            <Helmet>
        <title>Jogeshwari to Pune Cab Service | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Jogeshwari to Pune taxi with Vedant Travels. Affordable one-way and round-trip cabs, including Innova Crysta, Ertiga, and Sedan. Convenient and reliable taxi service from Jogeshwari to Pune, Pimpri Chinchwad, and more." />
        <meta name="keywords" content="Jogeshwari to Pune Cab Service, Jogeshwari to Pune Taxi Fare, Jogeshwari to Pimpri Chinchwad Cab, Jogeshwari to Pune One Way Cab, Jogeshwari to Pune Round Trip Cab, Cab Service in Jogeshwari, Ertiga in Jogeshwari Mumbai, Innova Crysta on Rent in Jogeshwari, Jogeshwari to Pune Sedan Cab Fare, Outstation Cabs in Jogeshwari West, Jogeshwari East Cab Service, Lokhandwala Complex to Pune Cab, Cheap Cab Service in Jogeshwari, Mumbai Taxi Service" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/jogeshwari-to-pune-cab-service" />
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
                            <img src='./images/keyword/43.jpg' alt='img' />
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

export default Jogeshwaritopunecabservice;
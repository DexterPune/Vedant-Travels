
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Sedancabsbookinginpune() {



    const cardData =
    {
        keyword: 'Sedan Cabs Booking in Pune ',
        heading: 'Vedant Travels: Sedan Cabs Booking in Pune',
        headingDescription: 'Vedant Travels offers Sedan cab booking in Pune, providing you with a reliable, comfortable, and cost-effective solution for your travel needs. Whether you’re traveling for business, a family outing, or just exploring the city, our fleet of well-maintained sedans ensures a smooth and enjoyable ride. The sedan offers ample space for passengers and luggage, making it an ideal choice for solo travelers or small groups.',

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
        "name": "Sedan Cabs in Pune",
        "description": "Vedant Travels offers reliable and comfortable sedan cabs in Pune. Whether you need a local or outstation ride, our fleet of well-maintained sedans ensures a smooth and enjoyable journey."
    },
    {
        "name": "Best Cab Service in Pune",
        "description": "Looking for the best cab service in Pune? Vedant Travels offers top-rated and reliable sedan taxi services for all your travel needs, ensuring a comfortable and punctual journey."
    },
    {
        "name": "Sedan Taxi Near Me in Pune",
        "description": "Find a sedan taxi near you in Pune with Vedant Travels. Our well-maintained sedans are available for immediate booking, ensuring quick and reliable transportation for your local or outstation trips."
    },
    {
        "name": "Sedan Cab Service Near Me in Pune",
        "description": "Looking for a sedan cab service near you? Vedant Travels offers convenient and reliable sedan cab services in Pune. Book a ride with us for a smooth, timely, and comfortable journey."
    },
    {
        "name": "Sedan Cab Service for Outstations",
        "description": "For outstation trips, Vedant Travels provides reliable sedan cab services. Whether you're traveling to Nashik, Goa, or Lonavala, our sedan vehicles ensure a comfortable and stress-free ride."
    },
    {
        "name": "Toyota Etios Taxi in Pune",
        "description": "Rent a Toyota Etios taxi in Pune with Vedant Travels. Our Toyota Etios cabs are perfect for a comfortable and budget-friendly ride, available for both local and outstation trips."
    },
    {
        "name": "Toyota Etios Cab in Pune",
        "description": "Looking for a Toyota Etios cab in Pune? Vedant Travels offers reliable Toyota Etios taxis for local and outstation journeys, ensuring comfort and affordability."
    },
    {
        "name": "Taxi & Sedan Services Booking",
        "description": "Book your taxi or sedan with Vedant Travels for an easy and convenient journey. Our well-maintained vehicles, including sedans like the Toyota Etios, ensure a comfortable and timely ride."
    },
    {
        "name": "Sedan Taxi Service for Outstations",
        "description": "Vedant Travels offers sedan taxi services for outstation trips, ensuring a comfortable and reliable journey to destinations like Nashik, Goa, and more."
    },
    {
        "name": "Pune to Nashik Sedan Cab Service",
        "description": "For a comfortable ride from Pune to Nashik, choose Vedant Travels’ sedan cab services. Our sedans are perfect for long-distance travel, offering ample space and comfort."
    },
    {
        "name": "Pune to Goa Cab Service",
        "description": "Travel from Pune to Goa in comfort with our sedan cab services. Vedant Travels offers reliable and affordable options for this scenic journey to Goa."
    },
    {
        "name": "Pune to Mumbai Cab Services",
        "description": "For a smooth and comfortable ride from Pune to Mumbai, choose Vedant Travels’ sedan cab services. We offer reliable and timely services for this busy route."
    },
    {
        "name": "Pune to Lonavala Sedan Cab",
        "description": "Vedant Travels provides sedan cabs for your Pune to Lonavala journey. Enjoy a comfortable and scenic ride in our well-maintained sedans, perfect for this popular hill station getaway."
    },
    {
        "name": "Outstation Sedan Cab Service",
        "description": "For outstation travel, Vedant Travels offers reliable sedan cab services. Whether you’re going on a short trip or long-distance journey, our fleet of sedans ensures comfort and reliability."
    },
    {
        "name": "Sedan Cabs for Corporate Outstation",
        "description": "For corporate outstation travel, choose Vedant Travels’ sedan cabs. We provide punctual and professional services for your business trips, ensuring a smooth and comfortable journey."
    },
    {
        "name": "Pune to Shirdi Sedan Cabs",
        "description": "Travel comfortably from Pune to Shirdi with our sedan cabs. Vedant Travels offers reliable and affordable sedan services for your pilgrimage trip to Shirdi."
    },
    {
        "name": "Pune to Aurangabad Sedan Taxi",
        "description": "For a smooth ride from Pune to Aurangabad, Vedant Travels offers sedan taxis. Enjoy a comfortable and hassle-free journey to this historical city with our well-maintained sedans."
    }
],


"tableData": [
    ["Sedan Cabs in Pune", "Best Cab Service in Pune"],
    ["Sedan Cab Service Near Me in Pune", "Sedan Cab Service for Outstations"],
    ["Toyota Etios Taxi in Pune", "Toyota Etios Cab in Pune"],
    ["Taxi & Sedan Services Booking", "Sedan Taxi Service for Outstations"],
    ["Pune to Nashik Sedan Cab Service", "Pune to Goa Cab Service"],
    ["Pune to Mumbai Cab Services", "Pune to Lonavala Sedan Cab"],
    ["Outstation Sedan Cab Service", "Sedan Cabs for Corporate Outstation"],
    ["Pune to Shirdi Sedan Cabs", "Pune to Aurangabad Sedan Taxi"]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we understand the importance of punctuality, especially when it comes to Sedan Cabs Booking in Pune. Whether you're heading for a business meeting, a family trip, or an airport transfer, we ensure timely pickups and drop-offs so that your journey is smooth and hassle-free."
    },
    {
      "WhyChooseheading": "Comfortable and Stylish Sedans",
      "WhyChoosedescription": "Our fleet of Sedan Cabs offers a perfect balance of style, comfort, and convenience. With spacious interiors, premium seating, and air-conditioning, your ride will be both relaxing and luxurious. Ideal for city travel, long-distance trips, or corporate bookings, our sedans offer comfort for all occasions."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our drivers are highly experienced and trained to ensure that your journey is safe and pleasant. They are knowledgeable about the best routes, traffic patterns, and are committed to providing you with courteous and professional service throughout your ride."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "Vedant Travels offers competitive and transparent pricing for Sedan Cabs Booking in Pune. Our prices are reasonable, and we provide clear, upfront quotes with no hidden charges, so you can plan your journey without any surprises."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Your safety is our top priority. All our Sedan Cabs are regularly serviced and equipped with modern safety features such as airbags, seat belts, and GPS tracking for a secure and comfortable experience. Our drivers also follow all safety protocols to ensure you have a safe ride."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "Whether it’s early in the morning or late at night, Vedant Travels is available 24/7 to cater to your Sedan Cabs Booking needs in Pune. You can book a cab anytime, and our customer service team will assist you promptly to meet your requirements."
    },
    {
      "WhyChooseheading": "Hassle-Free Booking Process",
      "WhyChoosedescription": "Booking a Sedan Cab with Vedant Travels is easy and convenient. You can book online through our website or mobile app, or contact our customer service team for a quick and personalized booking experience."
    },
    {
      "WhyChooseheading": "Customizable Travel Packages",
      "WhyChoosedescription": "Whether you're looking for a one-way trip, a round trip, or a customized tour, we offer flexible and tailor-made packages for Sedan Cabs Booking in Pune. We can customize your trip based on your travel needs, preferences, and schedule."
    }
  ]

    }



    const faqData = [
        {
            id: 1,
            question: 'How can I book a Sedan Cab in Pune?',
            answer: 'You can easily book a Sedan Cab with Vedant Travels through our website or mobile app. Alternatively, you can call our customer service team, and we’ll assist you with the booking process.',
        },
        {
            id: 2,
            question: 'What types of Sedan Cabs are available?',
            answer: 'We offer a range of Sedan Cabs that includes popular models such as the Swift Dzire, Honda City, and more. All our vehicles are well-maintained and equipped with modern amenities to ensure a comfortable ride.',
        },
        {
            id: 3,
            question: 'Is the Sedan suitable for long-distance travel?',
            answer: 'Yes, our Sedan Cabs are ideal for both short city rides and long-distance travel. They offer a comfortable and smooth ride for long trips to nearby cities, business meetings, or weekend getaways.',
        },
        {
            id: 4,
            question: 'What payment methods do you accept for Sedan Cab rentals?',
            answer: 'We accept a variety of payment methods, including cash, credit/debit cards, and online payment via our app. We strive to make the payment process as convenient as possible.',
        },
        {
            id: 5,
            question: 'Can I rent a Sedan Cab for a one-way trip?',
            answer: 'Yes, you can rent a Sedan Cab for one-way trips, whether it\'s from Pune to Mumbai, Pune to Lonavala, or any other destination. Just provide us with the details of your trip, and we’ll take care of the rest.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for Sedan Cab bookings?',
            answer: 'Any extra charges, such as fuel costs, tolls, or waiting charges, will be communicated to you upfront during the booking process. Our pricing is transparent with no hidden fees.',
        },
        {
            id: 7,
            question: 'Can I hire a Sedan for sightseeing in Pune?',
            answer: 'Yes, our Sedan Cabs are perfect for sightseeing in Pune. We can provide customized sightseeing tours, covering popular spots like Shaniwar Wada, Aga Khan Palace, Sinhagad Fort, and more.',
        },
        {
            id: 8,
            question: 'What is the luggage capacity of a Sedan Cab?',
            answer: 'Our Sedan Cabs offer enough boot space to carry standard luggage. If you have extra luggage or specific requirements, feel free to inform us at the time of booking, and we’ll make the necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate Sedan bookings?',
            answer: 'Yes, we offer Sedan Cabs for corporate travel in Pune. Whether you need a cab for meetings, corporate events, or airport transfers, we can provide professional and comfortable travel options tailored to your needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for Sedan Cabs Booking in Pune?',
            answer: 'Vedant Travels is known for its reliable service, well-maintained vehicles, experienced drivers, and affordable pricing. We ensure a hassle-free and comfortable experience for all your sedan rental needs.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Rajendra Kulkarni",
            title: "Traveler",
            quote: "I booked a Sedan Cab with Vedant Travels for a trip to Lonavala, and the experience was amazing. The vehicle was clean, comfortable, and the driver was professional and friendly. Highly recommend their service!",
            rating: 5,
        },
        {
            name: "Ms. Anjali Deshmukh",
            title: "Business Traveler",
            quote: "I used Vedant Travels for a corporate trip, and the Sedan Cab service was impeccable. The driver was on time, and the vehicle was perfect for my business needs. Will definitely book again!",
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
        "name": "Sedan Cabs Booking in Pune | Vedant Travels",
        "description": "Book Sedan cabs for your travel needs in Pune. Offering the best sedan taxi services for outstations, corporate events, and local travel. Available for trips to Nashik, Goa, Mumbai, Lonavala, Shirdi, and more.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.6",
          "ratingCount": "230"
        }
      };
      
     
      


    return (
        <div>
            <Helmet>
        <title>Sedan Cabs Booking in Pune | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book Sedan cabs in Pune for outstation trips, corporate events, or local travel. Affordable and reliable sedan taxi services for Nashik, Goa, Mumbai, Lonavala, Pune to Shirdi, Pune to Aurangabad, and more." />
        <meta name="keywords" content="Sedan Cabs in Pune, Best Cab Service in Pune, Sedan Taxi Near Me in Pune, Sedan Cab Service Near Me in Pune, Sedan Cab Service for Outstations, Toyota Etios Taxi in Pune, Toyota Etios Cab in Pune, Taxi & Sedan Services Booking, Sedan Taxi Service for Outstations, Pune to Nashik Sedan Cab Service, Pune to Goa Cab Service, Pune to Mumbai Cab Services, Pune to Lonavala Sedan Cab, Outstation Sedan Cab Service, Sedan Cabs for Corporate Outstation, Pune to Shirdi Sedan Cabs, Pune to Aurangabad Sedan Taxi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/sedan-cabs-booking-in-pune" />
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
                            <img src='/images/keyword/71.jpg' alt='img' />
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

export default Sedancabsbookinginpune;
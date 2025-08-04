
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Mumbaiairportcarrental() {



    const cardData =
    {
        keyword: 'Mumbai Airport Car Rental ',
        heading: 'Vedant Travels: Mumbai Airport Car Rental',
        headingDescription: 'Vedant Travels offers convenient and affordable car rental services from Mumbai Airport to your desired destination. Whether you need a sedan, SUV, or luxury car, we have a variety of vehicles to cater to your travel needs. Our fleet is well-maintained, and our professional drivers ensure a smooth, safe, and comfortable ride to Pune or any other location.',

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
            "name": "Car Hire Mumbai Airport",
            "description": "Need a car rental at Mumbai Airport? Choose from a wide range of vehicles for your airport transfer needs. From budget-friendly sedans to luxury cars, our rental service ensures you travel in comfort and style."
        },
        {
            "name": "Airport Cabs Mumbai",
            "description": "Book your airport cab with ease! Whether you're arriving or departing from Mumbai International Airport (Chhatrapati Shivaji Maharaj Airport), enjoy a smooth ride with professional drivers and a variety of car options."
        },
        {
            "name": "Mumbai Airport Pickup Taxi Service",
            "description": "Looking for a hassle-free pickup at Mumbai Airport? Our taxi service ensures a seamless transfer from the airport to your destination. We offer timely and reliable services for both arrivals and departures."
        },
        {
            "name": "Mumbai Airport Taxi Fare",
            "description": "Wondering about taxi fares from Mumbai Airport? Our transparent pricing ensures no hidden costs. Whether you're traveling from Terminal 1 or Terminal 2, our competitive rates will ensure you get the best value for your ride."
        },
        {
            "name": "Airport Cab Booking Mumbai",
            "description": "Book your airport cab in advance for guaranteed pick-up and smooth service. Enjoy timely and comfortable rides to and from Mumbai Airport with our reliable cab booking service. We offer flexible options based on your travel needs."
        },
        {
            "name": "Cab Service Mumbai Airport",
            "description": "Book a reliable and comfortable cab service at Mumbai Airport for your transfer needs. Whether it's a sedan, SUV, or luxury vehicle, we provide a wide range of options to suit your travel preferences and group size."
        },
        {
            "name": "Innova Airport Drop Mumbai",
            "description": "Need an Innova for your airport drop from Mumbai? Rent a spacious and comfortable Innova to ensure a smooth and relaxing ride to your destination. Ideal for families and large groups."
        },
        {
            "name": "Innova Taxi Mumbai Airport",
            "description": "Book an Innova taxi for your Mumbai Airport journey! Our spacious Innova vehicles offer comfort and ample legroom, making it an ideal choice for families, large groups, or long-distance travel."
        },
        {
            "name": "Mumbai Airport Terminal 2 to Terminal 1 Taxi Fare",
            "description": "Travel between Mumbai Airport Terminals 1 and 2 with ease! We offer convenient and affordable taxi services to shuttle between the terminals. Book your ride now and avoid long walks or waiting times."
        },
        {
            "name": "Mumbai International Airport Cab Service",
            "description": "Book a reliable and comfortable cab for your Mumbai International Airport transfer. Whether you're arriving or departing, our cab service ensures a timely and stress-free journey."
        },
        {
            "name": "Chhatrapati Shivaji Maharaj Airport Cabs",
            "description": "For a smooth and comfortable ride to or from Chhatrapati Shivaji Maharaj Airport, book one of our premium cabs. We provide top-notch services for airport pickups and drops, ensuring timely arrival at your destination."
        },
        {
            "name": "Mumbai Airport to Hadapsar Cab Fare",
            "description": "Looking to travel from Mumbai Airport to Hadapsar? Check our competitive taxi fare for a smooth and comfortable ride. Enjoy a hassle-free journey with a professional driver and affordable pricing."
        },
        {
            "name": "Chhatrapati Shivaji Maharaj Terminus to Pune Cab",
            "description": "Book a taxi from Chhatrapati Shivaji Maharaj Terminus to Pune for a reliable, safe, and comfortable ride. We provide timely services for smooth transfers from the iconic CST station to your Pune destination."
        }
    ],
    "tableData": [
        ["Car Hire Mumbai Airport", "Airport Cabs Mumbai"],
        ["Mumbai Airport Pickup Taxi Service", "Mumbai Airport Taxi Fare"],
        ["Airport Cab Booking Mumbai", "Cab Service Mumbai Airport"],
        ["Innova Airport Drop Mumbai", "Innova Taxi Mumbai Airport"],
        ["Mumbai Airport Terminal 2 to Terminal 1 Taxi Fare", "Mumbai International Airport Cab Service"],
        ["Chhatrapati Shivaji Maharaj Airport Cabs", "Mumbai Airport to Hadapsar Cab Fare"],
        ["Chhatrapati Shivaji Maharaj Terminus to Pune Cab", ""]
      ],
      "whychoose": [
        {
          "WhyChooseheading": "Reliable and On-Time Service",
          "WhyChoosedescription": "At Vedant Travels, we understand the importance of a timely arrival and departure. Whether you're landing at Mumbai Airport or need a car to catch a flight, our drivers ensure punctual pickups and drop-offs. We strive to provide reliable and efficient service for all your travel needs."
        },
        {
          "WhyChooseheading": "Wide Range of Cars for Rental",
          "WhyChoosedescription": "Our Mumbai Airport Car Rental service offers a variety of vehicles to choose from, including sedans, SUVs, and premium cars. Whether you're traveling solo, with family, or in a group, we have the right car to make your journey comfortable and enjoyable."
        },
        {
          "WhyChooseheading": "Experienced and Professional Drivers",
          "WhyChoosedescription": "Our drivers are well-trained professionals with extensive experience navigating the roads around Mumbai Airport. They ensure your safety and comfort during the journey while providing excellent customer service. You can relax knowing you're in good hands."
        },
        {
          "WhyChooseheading": "Affordable and Transparent Pricing",
          "WhyChoosedescription": "We offer competitive rates for Mumbai Airport Car Rental with no hidden charges. Our pricing is clear and upfront, so you always know exactly what you're paying for, making your travel budget-friendly and hassle-free."
        },
        {
          "WhyChooseheading": "Safe and Comfortable Journey",
          "WhyChoosedescription": "Your safety is our top priority. All our rental cars are regularly maintained and equipped with modern safety features, including airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols to ensure a secure and comfortable journey from Mumbai Airport to your destination."
        },
        {
          "WhyChooseheading": "24/7 Availability",
          "WhyChoosedescription": "Whether you have a late-night flight or need to head to Mumbai Airport early in the morning, Vedant Travels is available 24/7 for all your Mumbai Airport Car Rental needs. We're always ready to assist you with your transportation requirements at any hour of the day."
        },
        {
          "WhyChooseheading": "Hassle-Free Booking Process",
          "WhyChoosedescription": "Booking a car rental for Mumbai Airport is easy with Vedant Travels. You can book online through our website or mobile app, or call our customer service team for personalized assistance. We aim to make the booking process as simple and convenient as possible."
        },
        {
          "WhyChooseheading": "Customizable Travel Packages",
          "WhyChoosedescription": "We offer customizable travel packages to suit your specific needs. Whether you need a one-way trip, a round-trip, or even a car for sightseeing around Mumbai, let us know your requirements, and we will tailor the trip accordingly."
        }
      ]
    }



    const faqData = [
        {
            id: 1,
            question: 'How can I book a car rental from Mumbai Airport?',
            answer: 'You can easily book a car rental from Mumbai Airport through our website or mobile app. Alternatively, you can contact our customer service team, who will be happy to assist you in making your booking.',
        },
        {
            id: 2,
            question: 'What types of vehicles are available for rent at Mumbai Airport?',
            answer: 'We offer a variety of vehicles, including sedans, SUVs, and premium cars, to meet your travel needs. Whether you’re traveling alone, with a group, or with family, we have a vehicle that suits your requirements.',
        },
        {
            id: 3,
            question: 'Can I rent a car for a one-way trip from Mumbai Airport?',
            answer: 'Yes, you can rent a car for a one-way trip from Mumbai Airport to your destination or vice versa. Our one-way rental service is flexible and can be customized based on your travel needs.',
        },
        {
            id: 4,
            question: 'How do I pay for my Mumbai Airport car rental?',
            answer: 'We offer multiple payment options, including cash, credit/debit cards, and online payment through our mobile app. Choose the most convenient payment method for you.',
        },
        {
            id: 5,
            question: 'Are there any additional charges for waiting at Mumbai Airport?',
            answer: 'Any additional charges for waiting time at Mumbai Airport will be clearly communicated to you before booking. We believe in full transparency, so there won’t be any surprises during your trip.',
        },
        {
            id: 6,
            question: 'Can I book a round-trip car rental from Mumbai Airport?',
            answer: 'Yes, we offer round-trip car rental services from Mumbai Airport. Simply provide us with your return details, and we will arrange everything for you.',
        },
        {
            id: 7,
            question: 'Can I hire a car for sightseeing during my stay in Mumbai?',
            answer: 'Yes, we offer car rental services for sightseeing tours in Mumbai. You can enjoy exploring iconic spots like the Gateway of India, Marine Drive, and more in the comfort of our rental vehicles.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a car rental from Mumbai Airport?',
            answer: 'Our vehicles can accommodate standard luggage. If you have excess luggage or special requirements, please inform us when booking, and we will make the necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel from Mumbai Airport?',
            answer: 'Yes, we offer corporate travel services for clients traveling to or from Mumbai Airport. Whether you need transportation for business meetings or conferences, we can provide professional service for your company.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Mumbai Airport Car Rental?',
            answer: 'Vedant Travels is known for its reliable, affordable, and customer-oriented service. We offer a range of vehicles, professional drivers, and a smooth booking process, ensuring a comfortable and safe ride to or from Mumbai Airport.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Karan Mehta",
            title: "Business Traveler",
            quote: "I needed a ride from Mumbai Airport to my hotel, and I booked a car through Vedant Travels. The car was clean, comfortable, and the driver was very professional. The entire experience was smooth, and I’ll definitely use them again next time!",
            rating: 5,
        },
        {
            name: "Ms. Ananya Kapoor",
            title: "Business Traveler",
            quote: "My experience with Vedant Travels was excellent. I booked a car for my business trip, and the service was timely and efficient. The driver was professional, and the car was in great condition. Highly recommended!",
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
        "name": "Mumbai Airport Car Rental | Vedant Travels",
        "description": "Book your Mumbai Airport Car Rental with Vedant Travels. Offering reliable and affordable airport cab services, including Innova, Sedan, and more. Airport pickups, one-way, and round-trip options available. Convenient and comfortable taxi service from Mumbai Airport to various destinations.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.8",
          "ratingCount": "300"
        }
      };
      
      
      



    return (
        <div>
           
           <Helmet>
        <title>Mumbai Airport Car Rental | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Mumbai Airport Car Rental with Vedant Travels. Offering affordable and reliable airport taxi services, including Innova, Sedan, and more for pickups and drops from Mumbai Airport. Convenient taxi services for domestic and international terminals." />
        <meta name="keywords" content="Car Hire Mumbai Airport, Airport Cabs Mumbai, Mumbai Airport Pickup Taxi Service, Mumbai Airport Taxi Fare, Airport Cab Booking Mumbai, Cab Service Mumbai Airport, Innova Airport Drop Mumbai, Innova Taxi Mumbai Airport, Mumbai Airport Terminal 2 to Terminal 1 Taxi Fare, Mumbai International Airport Cab Service, Chhatrapati Shivaji Maharaj Airport Cabs, Mumbai Airport to Hadapsar Cab Fare, Chhatrapati Shivaji Maharaj Terminus to Pune Cab" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/mumbai-airport-car-rental" />
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
                            <img src='./images/keyword/58.jpg' alt='img' />
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

export default Mumbaiairportcarrental;
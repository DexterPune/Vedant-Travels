
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Onewaytaximumbaitopune() {



    const cardData =
    {
        keyword: 'One Way Taxi Mumbai to Pune  ',
        heading: 'Vedant Travels: One Way Taxi Mumbai to Pune  ',
        headingDescription: 'Vedant Travels offers one-way taxi services from Mumbai to Pune, providing you with a convenient, comfortable, and hassle-free travel experience. Whether you’re traveling for business, a family visit, or just a leisure trip, our fleet of well-maintained vehicles, including sedans, SUVs, and luxury cars, ensures that you travel in style and comfort.',

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
            "name": "Mumbai to Pune Cab",
            "description": "Vedant Travels offers reliable and comfortable taxi services from Mumbai to Pune. Choose from a variety of vehicles such as Sedans, Ertiga, and Innova, ensuring a smooth and comfortable journey."
        },
        {
            "name": "Mumbai Airport to Pune Cab",
            "description": "For a comfortable and timely taxi ride from Mumbai Airport to Pune, Vedant Travels provides reliable cab services with well-maintained vehicles like Sedans, Ertiga, and Innova."
        },
        {
            "name": "Mumbai to Pune Taxi",
            "description": "Looking for a taxi from Mumbai to Pune? Vedant Travels offers a hassle-free and affordable service, ensuring you travel in comfort with our fleet of vehicles, including Sedans, Ertiga, and Innova."
        },
        {
            "name": "Mumbai to Pune Cab Price",
            "description": "The price for a Mumbai to Pune cab with Vedant Travels is competitive and transparent, with no hidden charges. Choose from a range of vehicles such as Sedans, Ertiga, and Innova for a smooth and affordable ride."
        },
        {
            "name": "Mumbai to Pune Cab Service",
            "description": "Vedant Travels offers dependable and affordable taxi services from Mumbai to Pune. We provide a variety of vehicles to suit your needs, ensuring a safe and comfortable journey."
        },
        {
            "name": "Mumbai to Pune Taxi Price",
            "description": "The taxi price for a journey from Mumbai to Pune with Vedant Travels is transparent and competitive. We offer various vehicle options, including Sedans, Ertiga, and Innova, to suit your comfort and budget."
        },
        {
            "name": "Mumbai Pune Car Rental",
            "description": "Vedant Travels offers convenient car rental services for the journey from Mumbai to Pune. We provide well-maintained vehicles like Sedans, Ertiga, and Innova, ensuring a comfortable and enjoyable ride."
        },
        {
            "name": "Mumbai Pune Cab One Way",
            "description": "For a one-way cab service from Mumbai to Pune, Vedant Travels offers affordable and reliable options. Choose from a variety of vehicles such as Sedans, Ertiga, and Innova, ensuring a smooth and stress-free journey."
        },
        {
            "name": "Mumbai to Pune Cab from Airport",
            "description": "If you're traveling from Mumbai Airport to Pune, Vedant Travels offers a reliable and comfortable cab service. Our fleet includes well-maintained vehicles like Sedans, Ertiga, and Innova to ensure a timely and safe journey."
        },
        {
            "name": "Pune to Mumbai Taxi One Way",
            "description": "Vedant Travels offers one-way taxi services from Pune to Mumbai. Our fleet includes Sedans, Ertiga, and Innova, ensuring you enjoy a comfortable and convenient ride at affordable rates."
        },
        {
            "name": "Cab for Mumbai to Pune",
            "description": "Looking for a reliable cab for your Mumbai to Pune journey? Vedant Travels offers a range of well-maintained vehicles such as Sedans, Ertiga, and Innova for a smooth and comfortable ride."
        },
        {
            "name": "Cab Service Mumbai to Pune",
            "description": "Vedant Travels provides reliable and professional cab services from Mumbai to Pune. Whether you’re traveling for business or leisure, our fleet of vehicles ensures a comfortable and timely journey."
        },
        {
            "name": "Mumbai Pune Cab Fare",
            "description": "The cab fare for Mumbai to Pune with Vedant Travels is competitive and transparent. Choose from our fleet of well-maintained vehicles, including Sedans, Ertiga, and Innova, for an affordable and comfortable ride."
        },
        {
            "name": "Mumbai International Airport to Pune Cab",
            "description": "For a reliable and timely taxi ride from Mumbai International Airport to Pune, Vedant Travels offers comfortable cab services with options like Sedans, Ertiga, and Innova for a smooth journey."
        },
        {
            "name": "Cab Booking Mumbai to Pune",
            "description": "Booking a cab from Mumbai to Pune is easy with Vedant Travels. Our booking process is simple, and we offer a variety of vehicles such as Sedans, Ertiga, and Innova to meet your needs for a comfortable journey."
        }
    ],


    "tableData": [
        ["Mumbai to Pune Cab", "Mumbai Airport to Pune Cab"],
        ["Mumbai to Pune Taxi", "Mumbai to Pune Cab Price"],
        ["Mumbai to Pune Cab Service", "Mumbai to Pune Taxi Price"],
        ["Mumbai Pune Car Rental", "Mumbai Pune Cab One Way"],
        ["Mumbai to Pune Cab from Airport", "Pune to Mumbai Taxi One Way"],
        ["Cab for Mumbai to Pune", "Cab Service Mumbai to Pune"],
        ["Mumbai Pune Cab Fare", "Mumbai International Airport to Pune Cab"],
        ["Cab Booking Mumbai to Pune", ""]
      ],
      "whychoose": [
        {
          "WhyChooseheading": "Reliable and On-Time Service",
          "WhyChoosedescription": "At Vedant Travels, we understand that when you're traveling from Mumbai to Pune, punctuality is crucial. Whether it's a business trip, a family outing, or a personal journey, we ensure timely pickups and drop-offs to make your one-way journey seamless and stress-free."
        },
        {
          "WhyChooseheading": "Comfortable and Spacious Vehicles",
          "WhyChoosedescription": "Our fleet of well-maintained vehicles offers a variety of options, including sedans, SUVs, and premium cars. Each vehicle is equipped with comfortable seating, air conditioning, and plenty of legroom, ensuring a pleasant ride from Mumbai to Pune."
        },
        {
          "WhyChooseheading": "Experienced and Professional Drivers",
          "WhyChoosedescription": "Our drivers are highly experienced and trained in handling one-way trips between Mumbai and Pune. They are familiar with the best routes, ensuring you have a safe, efficient, and comfortable journey."
        },
        {
          "WhyChooseheading": "Affordable and Transparent Pricing",
          "WhyChoosedescription": "We offer competitive and transparent pricing for one-way taxi services. At Vedant Travels, there are no hidden charges – what you see is what you pay, ensuring you get the best value for your money."
        },
        {
          "WhyChooseheading": "Safe and Comfortable Journey",
          "WhyChoosedescription": "Your safety is our priority. All our vehicles are regularly serviced and equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our professional drivers adhere to strict safety protocols, ensuring a secure and stress-free ride."
        },
        {
          "WhyChooseheading": "24/7 Availability",
          "WhyChoosedescription": "Whether you're planning an early morning departure or a late-night journey, Vedant Travels provides 24/7 availability for Mumbai to Pune one-way taxi services. We are always ready to meet your travel needs, no matter the time of day."
        },
        {
          "WhyChooseheading": "Hassle-Free Booking Process",
          "WhyChoosedescription": "Booking a Mumbai to Pune one-way taxi with us is quick and easy. You can book online via our website or mobile app, or simply reach out to our customer service team for assistance in making your reservation."
        },
        {
          "WhyChooseheading": "Customizable Travel Packages",
          "WhyChoosedescription": "We offer flexible, customizable packages to suit your one-way travel requirements. Whether you need a specific vehicle type or a change in pickup time, we will tailor the service to your preferences."
        }
      ]
    
    }



    const faqData = [
        {
            id: 1,
            question: 'How can I book a one-way taxi from Mumbai to Pune?',
            answer: 'You can easily book a one-way taxi online through our website or mobile app. Alternatively, you can contact our customer service team for personalized assistance in booking your taxi.',
        },
        {
            id: 2,
            question: 'What types of vehicles are available for the one-way taxi from Mumbai to Pune?',
            answer: 'We offer a range of vehicles, including sedans, SUVs, and premium cars, to ensure that your one-way journey is comfortable and suited to your needs.',
        },
        {
            id: 3,
            question: 'What payment options are available for my Mumbai to Pune one-way taxi?',
            answer: 'We accept a variety of payment methods, including cash, credit/debit cards, and online payments through our app, making the payment process convenient and secure.',
        },
        {
            id: 4,
            question: 'Are there any extra charges for detours or waiting during the journey?',
            answer: 'Any additional charges for detours or waiting time will be communicated to you upfront during the booking process, ensuring complete transparency in pricing.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip taxi service for Mumbai to Pune?',
            answer: 'Yes, if you require a round-trip service, we can easily accommodate that. Simply provide your return details when booking, and we’ll arrange everything for you.',
        },
        {
            id: 6,
            question: 'Can I use the one-way taxi for sightseeing during the trip from Mumbai to Pune?',
            answer: 'Yes, we offer sightseeing services along the way. If you wish to explore some key locations during your journey, let us know, and we will customize the trip according to your preferences.',
        },
        {
            id: 7,
            question: 'What is the luggage allowance for the one-way taxi from Mumbai to Pune?',
            answer: 'Our vehicles can comfortably accommodate standard luggage. If you have additional or oversized luggage, please inform us during the booking process, and we will make the necessary arrangements.',
        },
        {
            id: 8,
            question: 'Is Vedant Travels available for corporate one-way trips between Mumbai and Pune?',
            answer: 'Yes, we offer corporate travel services for one-way trips between Mumbai and Pune. Whether it\'s for meetings, conferences, or other business needs, we provide customized services for corporate clients.',
        },
        {
            id: 9,
            question: 'Why should I choose Vedant Travels for my one-way taxi from Mumbai to Pune?',
            answer: 'Vedant Travels offers affordable, reliable, and professional services with well-maintained vehicles and experienced drivers. We prioritize safety, comfort, and punctuality, making us the ideal choice for your Mumbai to Pune one-way taxi service.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Raghav Mehta",
            title: "Business Traveler",
            quote: "I booked a one-way taxi from Mumbai to Pune for a business trip, and I was very impressed with the punctuality and comfort. The driver was professional, and the ride was smooth.",
            rating: 5,
        },
        {
            name: "Ms. Aishwarya Desai",
            title: "Leisure Traveler",
            quote: "We used Vedant Travels for a one-way journey from Mumbai to Pune, and the experience was fantastic. The vehicle was comfortable, and the driver was friendly and courteous. Highly recommended!",
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
        "name": "One Way Taxi Mumbai to Pune | Vedant Travels",
        "description": "Book your one-way taxi from Mumbai to Pune with Vedant Travels. We provide reliable and affordable one-way cabs from Mumbai airport to Pune and vice versa. Offering comfortable travel options with a range of vehicles, including Sedans, Innova Crysta, and more.",
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
        <title>One Way Taxi Mumbai to Pune | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your one-way taxi from Mumbai to Pune with Vedant Travels. Offering affordable and reliable taxi services, including options for airport transfers and more. Comfortable travel with a range of vehicles like Sedans, Innova Crysta, and more." />
        <meta name="keywords" content="One Way Taxi Mumbai to Pune, Mumbai to Pune Cab, Mumbai Airport to Pune Cab, Mumbai to Pune Taxi, Mumbai to Pune Cab Price, Mumbai Pune Car Rental, Mumbai Pune Cab One Way, Mumbai to Pune Cab from Airport, Pune to Mumbai Taxi One Way, Cab for Mumbai to Pune, Cab Service Mumbai to Pune, Mumbai Pune Cab Fare, Mumbai International Airport to Pune Cab, Cab Booking Mumbai to Pune" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/one-way-taxi-mumbai-to-pune" />
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
                            <img src='/images/keyword/9.jpg' alt='img' />
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

export default Onewaytaximumbaitopune;

import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Bycullatopunecabservice() {



    const cardData =
    {
        keyword: 'Byculla to Pune Cab Service ',
        heading: 'Vedant Travels: Byculla to Pune Cab Service  ',
        headingDescription: 'Vedant Travels offers efficient and comfortable cab services from Byculla to Pune. Whether you’re traveling for business or leisure, with family or friends, we provide a range of vehicles including sedans, SUVs, and luxury cars. Our well-maintained fleet and professional drivers ensure that you have a safe, smooth, and enjoyable journey.',

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
            "name": "Byculla to Pune Cab Service Rates",
            "description": "Vedant Travels offers competitive and transparent cab service rates for the journey from Byculla to Pune. We ensure a smooth and comfortable ride with a range of vehicle options including Sedans, Ertiga, and Innova, providing excellent value for your money."
        },
        {
            "name": "Byculla to Pune Taxi Service",
            "description": "For a reliable and comfortable taxi ride from Byculla to Pune, choose Vedant Travels. Our fleet of vehicles, including Innova, Ertiga, and Sedans, guarantees a smooth journey with experienced drivers who ensure a safe and timely trip."
        },
        {
            "name": "Mahalaxmi to Pune Cab Service",
            "description": "Travel from Mahalaxmi to Pune in comfort with Vedant Travels. We offer a variety of vehicles, such as Innova, Ertiga, and Sedans, ensuring a comfortable and hassle-free ride with professional drivers to make your journey seamless."
        },
        {
            "name": "Colaba to Pune Taxi",
            "description": "For a smooth and affordable taxi service from Colaba to Pune, Vedant Travels offers reliable rides with a variety of vehicle options, including Sedans, Ertiga, and Innova. We ensure a comfortable, safe, and timely journey with experienced drivers."
        },
        {
            "name": "Parel to Pune Cab Service",
            "description": "Vedant Travels provides convenient and affordable cab services from Parel to Pune. Our fleet of vehicles, including Innova, Ertiga, and Sedans, ensures a comfortable and timely journey with professional and experienced drivers."
        },
        {
            "name": "Parel to Pune Cab Service",
            "description": "For a hassle-free and comfortable ride from Parel to Pune, choose Vedant Travels. We offer a range of vehicle options like Sedans, Ertiga, and Innova to suit your needs, ensuring a smooth and safe journey at competitive rates."
        },
        {
            "name": "Sion to Pune Cab Booking",
            "description": "Booking a taxi from Sion to Pune is easy with Vedant Travels. Choose from a variety of vehicles like Sedans, Ertiga, and Innova for a comfortable and affordable journey, with experienced drivers ensuring a smooth ride."
        },
        {
            "name": "Wadala to Pune Cab Booking",
            "description": "Looking for a reliable taxi service from Wadala to Pune? Vedant Travels offers convenient and affordable cab booking services. With options like Innova, Ertiga, and Sedans, you can enjoy a comfortable and timely ride with no hidden charges."
        }
    ],


   "tableData": [
    ["Byculla to Pune Cab Service Rates", "Byculla to Pune Taxi Service"],
    ["Mahalaxmi to Pune Cab Service", "Colaba to Pune Taxi"],
    ["Parel to Pune Cab Service", "Parel to Pune Cab Service"],
    ["Sion to Pune Cab Booking", "Wadala to Pune Cab Booking"]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we understand that time is precious. Whether you're traveling from Byculla to Pune for business or leisure, we ensure punctual pickups and timely drop-offs, ensuring you reach your destination on time."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicles",
      "WhyChoosedescription": "We offer a wide range of well-maintained vehicles for your Byculla to Pune journey. From sedans to SUVs, our vehicles are equipped with modern amenities, air conditioning, and spacious interiors for a relaxed and comfortable ride."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our drivers are experienced, skilled, and familiar with the Byculla to Pune route. They ensure safe, smooth, and efficient travel while maintaining a professional attitude throughout the journey."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "At Vedant Travels, we provide transparent and affordable pricing for the Byculla to Pune cab service. No hidden charges, and the total cost will be clearly communicated to you during the booking process."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Your safety is our priority. Our vehicles are regularly serviced and equipped with the latest safety features such as airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols to ensure a secure and comfortable journey from Byculla to Pune."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "Whether you need a cab in the morning or late at night, Vedant Travels is available 24/7 for your Byculla to Pune travel needs. Our customer service team is always ready to assist you with your booking."
    },
    {
      "WhyChooseheading": "Hassle-Free Booking Process",
      "WhyChoosedescription": "Booking a cab for Byculla to Pune is simple with Vedant Travels. You can book online through our website or mobile app, or get in touch with our customer service team for assistance in booking your trip."
    },
    {
      "WhyChooseheading": "Customizable Travel Packages",
      "WhyChoosedescription": "We offer flexible travel packages for your Byculla to Pune trip. Whether you're traveling for business, pleasure, or any other occasion, we can tailor the trip to your preferences and needs."
    }
  ]
    }



    const faqData = [
        {
            id: 1,
            question: 'How can I book a cab from Byculla to Pune?',
            answer: 'You can book a cab from Byculla to Pune easily via our website or mobile app. Alternatively, our customer service team is available to assist you with your booking.',
        },
        {
            id: 2,
            question: 'What types of vehicles are available for the Byculla to Pune journey?',
            answer: 'We offer a variety of vehicles including sedans, SUVs, and premium cars to ensure that your trip is comfortable and enjoyable.',
        },
        {
            id: 3,
            question: 'What payment options are available for my Byculla to Pune cab?',
            answer: 'We accept various payment methods including cash, credit/debit cards, and online payments through our mobile app for your convenience.',
        },
        {
            id: 4,
            question: 'Can I book a round-trip cab from Byculla to Pune?',
            answer: 'Yes, we offer round-trip services. Simply provide your return details during the booking process, and we will handle the rest for you.',
        },
        {
            id: 5,
            question: 'Are there additional charges for waiting or detours?',
            answer: 'Any extra charges for waiting time or detours will be communicated clearly during the booking process. We believe in complete transparency regarding pricing.',
        },
        {
            id: 6,
            question: 'Can I use the Byculla to Pune cab for sightseeing?',
            answer: 'Yes, we offer sightseeing services as part of your Byculla to Pune journey. If you wish to visit attractions along the way or in Pune, just let us know, and we can customize the trip for you.',
        },
        {
            id: 7,
            question: 'What is the luggage allowance for the cab from Byculla to Pune?',
            answer: 'Our vehicles can accommodate standard luggage. If you have more luggage or specific requirements, please inform us during the booking, and we will make the necessary arrangements.',
        },
        {
            id: 8,
            question: 'Is Vedant Travels available for corporate travel from Byculla to Pune?',
            answer: 'Yes, we provide corporate travel services for business trips. Whether you need transportation for meetings, conferences, or team outings, we offer customized travel solutions for your company.',
        },
        {
            id: 9,
            question: 'Why should I choose Vedant Travels for my Byculla to Pune journey?',
            answer: 'Vedant Travels is known for its reliability, professional drivers, competitive pricing, and comfortable vehicles. We ensure a safe, smooth, and enjoyable journey, making us your best choice for Byculla to Pune travel.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Rohit Malhotra",
            title: "Business Traveler",
            quote: "I had a great experience traveling from Byculla to Pune with Vedant Travels. The driver was punctual, the car was clean and comfortable, and the ride was smooth. Highly recommended!",
            rating: 5,
        },
        {
            name: "Mrs. Sunita Desai",
            title: "Family Traveler",
            quote: "Our family trip from Byculla to Pune was made enjoyable with Vedant Travels. The vehicle was spacious and well-maintained, and the driver was very professional. We’ll definitely use their service again!",
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
        "name": "Byculla to Pune Cab Service | Vedant Travels",
        "description": "Book your Byculla to Pune taxi with Vedant Travels. Offering affordable one-way and round-trip cabs, including Innova Crysta, Ertiga, and Sedan. Reliable taxi service for your journey from Byculla to Pune, Mahalaxmi, Colaba, Parel, and more.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.7",
          "ratingCount": "185"
        }
      };
      
    
      

    return (
        <div>
           
           <Helmet>
        <title>Byculla to Pune Cab Service | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Byculla to Pune taxi with Vedant Travels. Offering one-way and round-trip cabs, including Innova Crysta, Ertiga, and Sedan. Convenient and affordable taxi service for your journey from Byculla to Pune, Mahalaxmi, Colaba, Parel, and more." />
        <meta name="keywords" content="Byculla to Pune Cab Service, Byculla to Pune Taxi Service, Mahalaxmi to Pune Cab Service, Colaba to Pune Taxi, Parel to Pune Cab Service, Sion to Pune Cab Booking, Wadala to Pune Cab Booking, Best Cab Service from Byculla to Pune" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/byculla-to-pune-cab-service" />
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

export default Bycullatopunecabservice;
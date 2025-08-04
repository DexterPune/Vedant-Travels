
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Innovacrystaonrentinpune() {



    const cardData =
    {
        keyword: 'Innova Crysta on Rent in Pune   ',
        heading: 'Vedant Travels: Innova Crysta on Rent in Pune  ',
        headingDescription: 'Vedant Travels offers Innova Crysta on rent in Pune, providing you with a premium, spacious, and comfortable ride for a variety of occasions. Whether it is a family trip, group outing, business travel, or special event, the Innova Crysta ensures you travel in style and comfort. The vehicle offers ample space for passengers and luggage, making it the ideal choice for both short trips and long journeys.',

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
            "name": "Pune to Mumbai Innova Cab",
            "description": "Vedant Travels offers reliable and comfortable Innova cabs for the journey from Pune to Mumbai. Enjoy a smooth and luxurious ride with ample space for your group, ensuring a stress-free journey."
        },
        {
            "name": "Pune to Mumbai Airport Drop Innova",
            "description": "For a comfortable and spacious ride from Pune to Mumbai Airport, choose Vedant Travels' Innova cabs. Our well-maintained vehicles ensure a timely and smooth ride to the airport."
        },
        {
            "name": "Mumbai Airport to Pune Innova",
            "description": "Travel from Mumbai Airport to Pune in comfort with an Innova cab from Vedant Travels. Our fleet of Innova vehicles guarantees a smooth, spacious, and enjoyable ride."
        },
        {
            "name": "Pune Mumbai Innova Rental",
            "description": "Vedant Travels offers Innova rental services for your journey from Pune to Mumbai. Whether for business or leisure, our Innova vehicles provide comfort, space, and a smooth ride at affordable rates."
        },
        {
            "name": "Pune to Mumbai Airport Innova",
            "description": "For a reliable and comfortable cab service from Pune to Mumbai Airport, choose an Innova from Vedant Travels. Our experienced drivers ensure a smooth and timely journey with a focus on your comfort."
        },
        {
            "name": "Innova Crysta on Rent in Pune Airport",
            "description": "If you're looking to rent an Innova Crysta from Pune Airport, Vedant Travels offers luxurious and well-maintained vehicles for your convenience. Enjoy a comfortable, spacious ride for your journey to Mumbai."
        },
        {
            "name": "Innova Per Km Rate in Pune",
            "description": "Vedant Travels offers competitive Innova per km rental rates in Pune. Whether you're traveling to Mumbai or any other destination, we provide affordable rates for our spacious and luxurious Innova cabs."
        },
        {
            "name": "Pune to Andheri Innova Crysta",
            "description": "Travel from Pune to Andheri in the comfort of an Innova Crysta. Vedant Travels offers well-maintained vehicles, ensuring a smooth and comfortable ride with ample space for your journey."
        },
        {
            "name": "Pune to Mumbai Innova Crysta",
            "description": "Choose the luxurious and spacious Innova Crysta for your journey from Pune to Mumbai. Vedant Travels offers a comfortable and premium ride with no hidden charges and reliable service."
        },
        {
            "name": "Pune to Mumbai Oneway Innova Crysta",
            "description": "For a one-way ride from Pune to Mumbai in an Innova Crysta, Vedant Travels offers affordable and reliable services. Enjoy a luxurious ride with ample space, ensuring a smooth and convenient journey."
        },
        {
            "name": "Pune to Mumbai Innova",
            "description": "Vedant Travels provides reliable and comfortable Innova taxis for the journey from Pune to Mumbai. With spacious interiors and experienced drivers, you’re guaranteed a smooth and safe ride."
        },
        {
            "name": "Pune Airport to Mumbai Airport Innova Cab",
            "description": "Travel between Pune Airport and Mumbai Airport in comfort with an Innova cab from Vedant Travels. Our professional drivers ensure a timely and comfortable journey with ample space for your luggage and passengers."
        }
    ],


    "tableData": [
        ["Pune to Mumbai Innova Cab", "Pune to Mumbai Airport Drop Innova"],
        ["Mumbai Airport to Pune Innova", "Pune Mumbai Innova Rental"],
        ["Pune to Mumbai Airport Innova", "Innova Crysta on Rent in Pune Airport"],
        ["Innova Per Km Rate in Pune", "Pune to Andheri Innova Crysta"],
        ["Pune to Mumbai Innova Crysta", "Pune to Mumbai Oneway Innova Crysta"],
        ["Pune to Mumbai Innova", "Pune Airport to Mumbai Airport Innova Cab"]
      ],
      "whychoose": [
        {
          "WhyChooseheading": "Reliable and On-Time Service",
          "WhyChoosedescription": "At Vedant Travels, we understand that punctuality is key when renting a vehicle like the Innova Crysta in Pune. Whether it's for a family trip, business travel, or special occasion, we ensure that your vehicle is delivered on time, providing you with a hassle-free experience."
        },
        {
          "WhyChooseheading": "Comfortable and Spacious Vehicle",
          "WhyChoosedescription": "The Innova Crysta is designed to provide ultimate comfort. With spacious interiors, premium seating, ample legroom, and excellent air conditioning, this vehicle is perfect for long journeys, group travel, or just a luxurious ride around Pune."
        },
        {
          "WhyChooseheading": "Experienced and Professional Drivers",
          "WhyChoosedescription": "Our experienced drivers are well-trained in handling Innova Crysta rentals, ensuring a smooth and safe ride. With their deep knowledge of Pune and surrounding areas, you can trust them to take you on the best routes with utmost professionalism and care."
        },
        {
          "WhyChooseheading": "Affordable and Transparent Pricing",
          "WhyChoosedescription": "Vedant Travels offers competitive rental pricing for the Innova Crysta with no hidden fees. Our pricing model is transparent, ensuring you know exactly what you are paying for upfront. We aim to provide you with the best value for your money."
        },
        {
          "WhyChooseheading": "Safe and Comfortable Journey",
          "WhyChoosedescription": "Your safety is our top priority. The Innova Crysta is equipped with modern safety features, such as airbags, seat belts, and GPS tracking. Additionally, our drivers follow strict safety protocols to ensure you have a worry-free journey."
        },
        {
          "WhyChooseheading": "24/7 Availability",
          "WhyChoosedescription": "Whether you're planning a short trip, a day tour, or need a vehicle for multiple days, Vedant Travels offers 24/7 availability for Innova Crysta rentals in Pune. We are always ready to meet your travel needs at any time."
        },
        {
          "WhyChooseheading": "Hassle-Free Booking Process",
          "WhyChoosedescription": "Renting an Innova Crysta with Vedant Travels is easy. You can book online through our website or mobile app or call our customer service team for assistance. We make the booking process simple and efficient for you."
        },
        {
          "WhyChooseheading": "Customizable Travel Packages",
          "WhyChoosedescription": "We offer flexible travel packages for the Innova Crysta rental in Pune. Whether you need the vehicle for a one-day trip, a multi-day journey, or specific requirements, we can tailor our services to meet your needs."
        }
      ]
    
    }



    const faqData = [
        {
            id: 1,
            question: 'How can I rent an Innova Crysta in Pune?',
            answer: 'You can easily rent an Innova Crysta online through our website or mobile app. Alternatively, you can contact our customer service team for personalized assistance in booking your rental.',
        },
        {
            id: 2,
            question: 'What is the rental duration for the Innova Crysta?',
            answer: 'You can rent the Innova Crysta for as long as you need—whether it’s for a few hours, a full day, or multiple days. Just let us know your requirements, and we’ll arrange the rental accordingly.',
        },
        {
            id: 3,
            question: 'What is included in the rental price?',
            answer: 'The rental price includes the Innova Crysta and an experienced driver. Any additional charges, such as fuel costs or toll fees, will be communicated upfront to ensure transparency.',
        },
        {
            id: 4,
            question: 'What payment options are available for renting the Innova Crysta?',
            answer: 'We accept various payment options, including cash, credit/debit cards, and online payments through our app, for your convenience.',
        },
        {
            id: 5,
            question: 'Can I hire an Innova Crysta for a one-way trip from Pune to Mumbai or other cities?',
            answer: 'Yes, we offer one-way rentals from Pune to Mumbai and other cities. Please let us know your travel details, and we’ll arrange the rental accordingly.',
        },
        {
            id: 6,
            question: 'Are there any additional charges for the driver or other services?',
            answer: 'The rental price includes the driver’s fee. However, if there are any additional charges, such as waiting time, extra kilometers, or special requests, these will be communicated to you during the booking process.',
        },
        {
            id: 7,
            question: 'Can I rent the Innova Crysta for sightseeing in Pune and nearby areas?',
            answer: 'Yes, the Innova Crysta is perfect for sightseeing tours in Pune and surrounding areas. We can customize the tour as per your preferences and show you the best attractions in the city.',
        },
        {
            id: 8,
            question: 'What is the luggage capacity of the Innova Crysta?',
            answer: 'The Innova Crysta offers ample space for luggage, making it a great option for group travel or trips with large amounts of baggage. If you have special luggage requirements, let us know at the time of booking, and we will make necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel with the Innova Crysta?',
            answer: 'Yes, we offer corporate travel services with the Innova Crysta. Whether it’s for business meetings, corporate events, or team outings, we can provide tailored services to meet your company\'s travel needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for renting an Innova Crysta in Pune?',
            answer: 'Vedant Travels is known for its reliable, professional, and affordable services. With well-maintained vehicles, experienced drivers, and a customer-first approach, we ensure that your Innova Crysta rental experience is comfortable, safe, and hassle-free.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Sameer Joshi",
            title: "Family Traveler",
            quote: "I rented an Innova Crysta for a family trip to Pune, and it was a wonderful experience. The vehicle was clean, spacious, and very comfortable for our group. The driver was professional, and we had a smooth journey. Highly recommended!",
            rating: 5,
        },
        {
            name: "Ms. Priya Patil",
            title: "Corporate Event Organizer",
            quote: "We rented an Innova Crysta for a corporate event, and Vedant Travels did a fantastic job. The vehicle was well-maintained, and the driver was courteous and efficient. It made our trip to Pune very comfortable.",
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
        "name": "Innova Crysta on Rent in Pune | Vedant Travels",
        "description": "Book your Innova Crysta on rent in Pune with Vedant Travels. We offer reliable and affordable Innova Crysta rental services for your travel between Pune and Mumbai, including airport transfers and one-way trips.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.9",
          "ratingCount": "150"
        }
      };
      
    



    return (
        <div>
             <Helmet>
        <title>Innova Crysta on Rent in Pune | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Rent Innova Crysta for your Pune to Mumbai travel. Reliable and comfortable rental services for airport transfers and one-way trips. Book now for affordable prices." />
        <meta name="keywords" content="Innova Crysta on Rent in Pune, Pune to Mumbai Innova Cab, Pune to Mumbai Airport Drop Innova, Mumbai Airport to Pune Innova, Pune Mumbai Innova Rental, Pune to Andheri Innova Crysta, Pune to Mumbai Innova Crysta, Pune to Mumbai Oneway Innova Crysta, Pune to Mumbai Innova, Pune Airport to Mumbai Airport Innova Cab, Innova Per Km Rate in Pune" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/innova-crysta-on-rent-in-pune" />
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
                            <img src='./images/keyword/67.jpg' alt='img' />
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

export default Innovacrystaonrentinpune;
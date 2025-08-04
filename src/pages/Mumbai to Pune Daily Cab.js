
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Mumbaitopunedailycab() {



    const cardData =
    {
        keyword: 'Mumbai to Pune Daily Cab ',
        heading: 'Vedant Travels: Mumbai to Pune Daily Cab',
        headingDescription: 'Vedant Travels offers daily cab services for your convenient travel from Mumbai to Pune. Whether you are commuting for work, business, or leisure, we provide a range of vehicles to meet your needs, including sedans, SUVs, and premium cabs. With transparent pricing and no hidden charges, our professional drivers ensure you have a smooth and comfortable journey.',

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
        "name": "Mumbai to Bhosari Cab Service",
        "description": "Need a reliable taxi service from Mumbai to Bhosari? Vedant Travels offers comfortable and affordable cab services. Choose from our fleet, including Innova, Ertiga, and Sedans, for a smooth and hassle-free journey."
    },
    {
        "name": "Mumbai to Camp Pune Cab",
        "description": "Traveling from Mumbai to Camp Pune? Vedant Travels provides efficient and comfortable taxi services. We offer a variety of vehicles like Innova, Ertiga, and Sedans to ensure a smooth and pleasant ride."
    },
    {
        "name": "Mumbai to Sinhagad Road Cab",
        "description": "For a seamless journey from Mumbai to Sinhagad Road, Vedant Travels offers top-notch cab services. Our fleet includes well-maintained vehicles like Innova, Ertiga, and Sedans for your comfort."
    },
    {
        "name": "Mumbai to Hinjewadi Taxi Fare",
        "description": "Vedant Travels offers competitive and transparent taxi fares from Mumbai to Hinjewadi. We provide reliable and timely service with a range of vehicle options, including Innova, Ertiga, and Sedans."
    },
    {
        "name": "Mumbai to Wakad Cab",
        "description": "Looking for a taxi from Mumbai to Wakad? Vedant Travels offers reliable and affordable cab services. Choose from our fleet of vehicles, including Innova, Ertiga, and Sedans, for a comfortable journey."
    },
    {
        "name": "Mumbai to Aundh Daily Cab Fare",
        "description": "Vedant Travels provides daily cab services from Mumbai to Aundh with transparent pricing. Whether you need an Innova, Ertiga, or Sedan, we ensure a smooth and timely ride at a competitive fare."
    },
    {
        "name": "Mumbai to Koregaon Park Daily Cab Fare",
        "description": "Traveling daily from Mumbai to Koregaon Park? Vedant Travels offers daily cab services with a range of vehicle options, including Innova, Ertiga, and Sedans. We provide transparent pricing with no hidden charges."
    },
    {
        "name": "Mumbai to Pune Daily Innova Fare",
        "description": "For those traveling daily from Mumbai to Pune, Vedant Travels offers affordable Innova cab services. With ample space and comfort, the Innova is the perfect choice for a smooth ride every day."
    },
    {
        "name": "Mumbai to Pune Daily Ertiga Fare",
        "description": "Vedant Travels offers daily Ertiga cab services from Mumbai to Pune. The Ertiga is ideal for small groups or families, offering comfort at a competitive price for regular travelers."
    },
    {
        "name": "Mumbai to Pune Daily Sedan Cab Fare",
        "description": "Looking for a daily Sedan cab from Mumbai to Pune? Vedant Travels provides affordable and reliable sedan taxi services for a comfortable journey at a reasonable fare."
    },
    {
        "name": "Mumbai Pune Daily Cab Service",
        "description": "Vedant Travels offers daily cab services from Mumbai to Pune, ensuring a smooth and reliable journey. Whether you need an Innova, Ertiga, or Sedan, we provide flexible options and transparent pricing for your convenience."
    },
    {
        "name": "Mumbai to Pimpri Daily Cab",
        "description": "For daily taxi services from Mumbai to Pimpri, Vedant Travels offers reliable and affordable cab services. Choose from our fleet of vehicles, including Innova, Ertiga, and Sedans, for a comfortable ride."
    },
    {
        "name": "Cheapest Cab Mumbai to Pune",
        "description": "Vedant Travels offers the most affordable taxi services from Mumbai to Pune, ensuring you get the best value for your money. With no hidden charges, our fleet of vehicles, including Innova, Ertiga, and Sedans, provides a comfortable journey at a reasonable fare."
    },
    {
        "name": "Mumbai Airport to Pune Daily Cab Service",
        "description": "Vedant Travels offers daily cab services from Mumbai Airport to Pune. We ensure a smooth, safe, and comfortable journey with a variety of vehicles, including Innova, Ertiga, and Sedans, at an affordable fare."
    },
    {
        "name": "Mumbai Airport to Viman Nagar Cab Service",
        "description": "For a comfortable and reliable taxi ride from Mumbai Airport to Viman Nagar, Vedant Travels provides top-notch cab services. Our fleet includes vehicles like Innova, Ertiga, and Sedans for a smooth ride."
    },
    {
        "name": "Mumbai Airport to Pune Taxi Fare",
        "description": "Vedant Travels offers competitive taxi fares from Mumbai Airport to Pune. With no hidden charges, our reliable services are available in a variety of vehicles like Innova, Ertiga, and Sedans, ensuring a smooth journey at an affordable price."
    }
],


"tableData": [
    ["Mumbai to Bhosari Cab Service", "Mumbai to Camp Pune Cab"],
    ["Mumbai to Sinhagad Road Cab", "Mumbai to Hinjewadi Taxi Fare"],
    ["Mumbai to Wakad Cab", "Mumbai to Aundh Daily Cab Fare"],
    ["Mumbai to Koregaon Park Daily Cab Fare", "Mumbai to Pune Daily Innova Fare"],
    ["Mumbai to Pune Daily Ertiga Fare", "Mumbai to Pune Daily Sedan Cab Fare"],
    ["Mumbai Pune Daily Cab Service", "Mumbai to Pimpri Daily Cab"],
    ["Cheapest Cab Mumbai to Pune", "Mumbai Airport to Pune Daily Cab Service"],
    ["Mumbai Airport to Viman Nagar Cab Service", "Mumbai Airport to Pune Taxi Fare"]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we understand the importance of punctuality for your Mumbai to Pune Daily Cab needs. Whether you're commuting for work or any other reason, we ensure on-time pickups and drop-offs so that you never miss your appointments or important events."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicles",
      "WhyChoosedescription": "We offer a range of comfortable and spacious vehicles for your daily commute from Mumbai to Pune. Our fleet includes sedans, SUVs, and premium cars, all equipped with air conditioning, comfortable seating, and ample legroom to make your daily travel as pleasant as possible."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our drivers are highly experienced and skilled in handling daily routes between Mumbai and Pune. They are well-acquainted with the best routes and traffic patterns, ensuring a smooth and efficient journey, every day."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "Vedant Travels provides affordable and competitive pricing for your Mumbai to Pune Daily Cab rides. We believe in complete transparency, so you can rest assured there are no hidden charges in our pricing."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Safety is our top priority. All our vehicles are regularly maintained and equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our professional drivers adhere to strict safety protocols, ensuring a secure and comfortable ride for your daily commute."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "Whether you need a morning pickup or a late-night return trip, Vedant Travels is available 24/7. We cater to your Mumbai to Pune Daily Cab needs at any time of the day or night. Our customer service team is ready to assist you with your booking."
    },
    {
      "WhyChooseheading": "Hassle-Free Booking Process",
      "WhyChoosedescription": "Booking your Mumbai to Pune Daily Cab is quick and easy with Vedant Travels. You can book a ride through our website, mobile app, or by contacting our customer service team for any assistance. We aim to make your booking experience as smooth and fast as possible."
    },
    {
      "WhyChooseheading": "Customizable Travel Packages",
      "WhyChoosedescription": "Whether you need a daily ride for business meetings or leisure activities, we offer customizable packages for your Mumbai to Pune Daily Cab needs. Let us know your specific requirements, and we’ll personalize your journey to suit your schedule and preferences."
    }
  ]




    }

    const faqData = [
        {
            id: 1,
            question: 'How can I book a Mumbai to Pune Daily Cab with Vedant Travels?',
            answer: 'You can easily book your Mumbai to Pune Daily Cab through our website or mobile app. Alternatively, you can contact our customer service team for personalized booking assistance.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for daily long-distance travel?',
            answer: 'Yes, our drivers are highly experienced and professional, especially in handling the daily routes between Mumbai and Pune. They ensure a smooth, safe, and timely journey every day.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Mumbai to Pune daily travel?',
            answer: 'We offer a wide range of vehicles, including sedans, SUVs, and premium cars, all designed to offer you a comfortable and smooth ride for your daily commute.',
        },
        {
            id: 4,
            question: 'How do I pay for my Mumbai to Pune Daily Cab rental?',
            answer: 'We accept various payment options, including cash, credit/debit cards, and online payments via our app, providing you with flexible payment methods for your convenience.',
        },
        {
            id: 5,
            question: 'Can I book a round trip along with my Mumbai to Pune Daily Cab?',
            answer: 'Yes, you can book a round trip for your daily commute. Just provide the return details when booking, and we’ll take care of the rest.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any extra charges for waiting time or detours will be communicated to you in advance during the booking process, ensuring complete transparency in our pricing.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing during my Mumbai to Pune daily trip?',
            answer: 'Yes, we can offer customized sightseeing tours during your Mumbai to Pune daily trip. Explore popular landmarks and tourist destinations in both cities with our professional drivers.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Mumbai to Pune Daily Cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have more luggage or specific needs, let us know at the time of booking, and we’ll make the necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate daily travel between Mumbai and Pune?',
            answer: 'Yes, we offer corporate travel services for daily commutes between Mumbai and Pune. Whether you need a regular ride for business meetings or employee transport, we can provide customized services to suit your company’s needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Mumbai to Pune Daily journey?',
            answer: 'Vedant Travels provides reliable, affordable, and safe travel services with experienced drivers, well-maintained vehicles, and a transparent pricing model. We are dedicated to ensuring your daily commute between Mumbai and Pune is comfortable, punctual, and stress-free.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Aarav Kumar",
            title: "Daily Commuter",
            quote: "I’ve been using Vedant Travels for my daily commute from Mumbai to Pune for the past few months. The vehicles are always clean, and the drivers are punctual. I highly recommend them for anyone who needs a reliable daily cab service.",
            rating: 5,
        },
        {
            name: "Ms. Shweta Verma",
            title: "Corporate Traveler",
            quote: "We’ve been using Vedant Travels for our office’s daily commute from Mumbai to Pune. The service is excellent, the drivers are professional, and the vehicles are comfortable. A great choice for anyone looking for consistent daily transport!",
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
        "name": "Mumbai to Pune Daily Cab | Vedant Travels",
        "description": "Book your daily Mumbai to Pune cab with Vedant Travels. We offer affordable daily services to popular destinations like Bhosari, Camp Pune, Sinhagad Road, Hinjewadi, Wakad, Aundh, Koregaon Park, and more. Choose from Innova, Ertiga, and Sedan for a comfortable ride.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.9",
          "ratingCount": "200"
        }
      };
      
   
      


    return (
        <div>
           
           <Helmet>
        <title>Mumbai to Pune Daily Cab | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your daily Mumbai to Pune cab with Vedant Travels. Offering affordable daily services to destinations like Bhosari, Camp Pune, Sinhagad Road, Hinjewadi, Wakad, Aundh, Koregaon Park, and more, in Innova, Ertiga, and Sedan." />
        <meta name="keywords" content="Mumbai to Bhosari Cab Service, Mumbai to Camp Pune Cab, Mumbai to Sinhagad Road Cab, Mumbai to Hinjewadi Taxi Fare, Mumbai to Wakad Cab, Mumbai to Aundh Daily Cab Fare, Mumbai to Koregaon Park Daily Cab Fare, Mumbai to Pune Daily Innova Fare, Mumbai to Pune Daily Ertiga Fare, Mumbai to Pune Daily Sedan Cab Fare, Mumbai Pune Daily Cab Service, Mumbai to Pimpri Daily Cab, Cheapest Cab Mumbai to Pune, Mumbai Airport to Pune Daily Cab Service, Mumbai Airport to Viman Nagar Cab Service, Mumbai Airport to Pune Taxi Fare" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/mumbai-to-pune-daily-cab" />
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
                            <img src='./images/keyword/41.jpg' alt='img' />
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

export default Mumbaitopunedailycab;

import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Vileparletopunecab() {



    const cardData =
    {
        keyword: 'Vile Parle to Pune Cab Service ',
        heading: 'Vedant Travels: Vile Parle to Pune Cab Service  ',
        headingDescription: 'Vedant Travels offers a smooth and convenient cab service for your journey from Vile Parle to Pune. Whether you are traveling for business, leisure, or with family, we provide a wide range of vehicles to suit your needs. From sedans to SUVs, all vehicles are well-maintained and comfortable, ensuring a safe and enjoyable ride.',

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
            "name": "Vile Parle to Pune Cab Service",
            "description": "Vedant Travels offers reliable and affordable cab services for your journey from Vile Parle to Pune. Whether you are traveling for business or leisure, we provide well-maintained vehicles like Innova, Ertiga, and Sedans to ensure a comfortable and hassle-free ride."
        },
        {
            "name": "Vile Parle to Pune Cab Service Contact Number",
            "description": "For bookings and inquiries regarding Vile Parle to Pune cab service, please contact Vedant Travels at [Insert Contact Number]. Our customer support team is available to assist you with all your travel needs."
        },
        {
            "name": "Santacruz to Pimpri Chinchwad Cab Service",
            "description": "Need a cab from Santacruz to Pimpri Chinchwad? Vedant Travels provides reliable and comfortable taxi services with a range of vehicles including Innova, Ertiga, and Sedans for a smooth journey."
        },
        {
            "name": "Santacruz to Pune Station Cab Fare",
            "description": "Looking to travel from Santacruz to Pune Station? Vedant Travels offers competitive pricing and transparent fare structures for this route. Choose from our variety of vehicles to enjoy a comfortable ride."
        },
        {
            "name": "Mumbai to Pune Taxi Service",
            "description": "For a comfortable and reliable taxi service from Mumbai to Pune, choose Vedant Travels. Our fleet of vehicles, including Innova, Ertiga, and Sedans, ensures a safe and comfortable journey. We offer transparent pricing with no hidden charges."
        },
        {
            "name": "Taxi Service in Vile Parle",
            "description": "Vedant Travels provides efficient and affordable taxi services in Vile Parle, Mumbai. Whether you're heading to the airport or need a ride to another city, we ensure a smooth and timely travel experience."
        },
        {
            "name": "Nehru Nagar to Pune Cab Service",
            "description": "Need a cab from Nehru Nagar to Pune? Vedant Travels offers dependable and comfortable taxi services with professional drivers and vehicles like Innova, Ertiga, and Sedans. Book your ride today for a hassle-free experience."
        },
        {
            "name": "Sahara Airport to Pune Taxi Service",
            "description": "Traveling from Sahara Airport to Pune? Vedant Travels offers safe and reliable taxi services with various vehicle options like Innova, Ertiga, and Sedans to ensure a comfortable journey."
        },
        {
            "name": "Sahara Airport to Pimpri Chinchwad Taxi Service",
            "description": "Vedant Travels provides a convenient and reliable taxi service from Sahara Airport to Pimpri Chinchwad. Choose from a variety of vehicles, including Innova, Ertiga, and Sedans, to make your travel stress-free."
        },
        {
            "name": "Mumbai Airport to Pune Taxi Online Booking",
            "description": "Book your Mumbai Airport to Pune taxi with Vedant Travels online for a convenient and hassle-free experience. We offer a variety of vehicles to suit your needs, including Innova, Ertiga, and Sedans, ensuring a comfortable ride."
        },
        {
            "name": "Mumbai to Pune Taxi Fare",
            "description": "The fare for a Mumbai to Pune taxi with Vedant Travels is competitive and transparent. We offer a range of vehicles including Sedans, Ertiga, and Innova, ensuring a comfortable and affordable journey."
        },
        {
            "name": "Mumbai to Pune Car Rental",
            "description": "Looking for a car rental from Mumbai to Pune? Vedant Travels provides well-maintained vehicles for your journey. Whether you're traveling for business or leisure, we offer a range of cars like Innova, Ertiga, and Sedans to meet your needs."
        },
        {
            "name": "Mumbai to Pune Cab Charges",
            "description": "Vedant Travels offers affordable and transparent cab charges for your Mumbai to Pune journey. We ensure you get the best value for your money with no hidden charges, offering vehicles like Innova, Ertiga, and Sedans."
        },
        {
            "name": "Mumbai to Pune Cab Fare",
            "description": "The Mumbai to Pune cab fare with Vedant Travels is designed to be affordable while providing comfort and reliability. Choose from various vehicles to suit your preferences, including Innova, Ertiga, and Sedans."
        },
        {
            "name": "Mumbai to Pune Cab Booking",
            "description": "Book your Mumbai to Pune cab with Vedant Travels for a reliable, comfortable, and punctual service. We offer various vehicles to choose from, ensuring a smooth and hassle-free ride every time."
        },
        {
            "name": "Cab Service in Mumbai",
            "description": "Vedant Travels provides dependable and affordable cab services in Mumbai. Whether you're traveling locally or to Pune, we offer well-maintained vehicles and experienced drivers to ensure a comfortable journey."
        },
        {
            "name": "Cab Booking Mumbai",
            "description": "For easy and convenient cab booking in Mumbai, choose Vedant Travels. Our user-friendly booking system allows you to book your ride quickly, with a range of vehicles like Innova, Ertiga, and Sedans available for your comfort."
        },
        {
            "name": "Mumbai Taxi Service",
            "description": "Vedant Travels offers reliable and affordable taxi services throughout Mumbai. Whether you're heading to the airport, traveling locally, or going on a longer journey, we ensure a smooth, comfortable ride."
        },
        {
            "name": "Cheapest Cab Service in Mumbai",
            "description": "Looking for the cheapest cab service in Mumbai? Vedant Travels offers affordable taxi services with transparent pricing and no hidden charges, ensuring you get the best value for your money."
        },
        {
            "name": "Cab Service in Vile Parle",
            "description": "Vedant Travels provides reliable and efficient cab service in Vile Parle, Mumbai. Our fleet includes various vehicle options to suit your needs, ensuring a smooth, comfortable, and timely ride."
        }
    ],


    "tableData": [
        ["Vile Parle to Pune Cab Service", "Vile Parle to Pune Cab Service Contact Number"],
        ["Santacruz to Pimpri Chinchwad Cab Service", "Santacruz to Pune Station Cab Fare"],
        ["Mumbai to Pune Taxi Service", "Taxi Service in Vile Parle"],
        ["Nehru Nagar to Pune Cab Service", "Sahara Airport to Pune Taxi Service"],
        ["Sahara Airport to Pimpri Chinchwad Taxi Service", "Mumbai Airport to Pune Taxi Online Booking"],
        ["Mumbai to Pune Taxi Fare", "Mumbai to Pune Car Rental"],
        ["Mumbai to Pune Cab Charges", "Mumbai to Pune Cab Fare"],
        ["Mumbai to Pune Cab Booking", "Cab Service in Mumbai"],
        ["Cab Booking Mumbai", "Mumbai Taxi Service"],
        ["Cheapest Cab Service in Mumbai", "Cab Service in Vile Parle"]
      ],
      "whychoose": [
        {
          "WhyChooseheading": "Reliable and On-Time Service",
          "WhyChoosedescription": "At Vedant Travels, we value your time. Whether it's for business, leisure, or personal travel, we ensure timely pickups and drop-offs for your Vile Parle to Pune Cab Service. Trust us to keep your journey punctual and stress-free."
        },
        {
          "WhyChooseheading": "Comfortable and Spacious Vehicles",
          "WhyChoosedescription": "Choose from a variety of vehicles for your Vile Parle to Pune Cab Service, including sedans, SUVs, and premium cars. All our vehicles are equipped with air conditioning, comfortable seating, and ample legroom, providing you with a pleasant and relaxing ride."
        },
        {
          "WhyChooseheading": "Experienced and Professional Drivers",
          "WhyChoosedescription": "Our drivers are highly experienced, well-trained, and familiar with the best routes for Vile Parle to Pune. With years of experience in long-distance travel, they ensure a safe, smooth, and efficient journey."
        },
        {
          "WhyChooseheading": "Affordable and Transparent Pricing",
          "WhyChoosedescription": "Vedant Travels offers competitive and transparent pricing for your Vile Parle to Pune Cab Service. You’ll receive an upfront breakdown of charges, ensuring there are no hidden costs and you get the best value for your trip."
        },
        {
          "WhyChooseheading": "Safe and Comfortable Journey",
          "WhyChoosedescription": "Your safety is our priority. All our vehicles are well-maintained and come with modern safety features, including airbags, seat belts, and GPS tracking. Our drivers follow all safety protocols to guarantee a secure and comfortable journey for you."
        },
        {
          "WhyChooseheading": "24/7 Availability",
          "WhyChoosedescription": "Whether you need a ride early in the morning or late at night, Vedant Travels offers 24/7 availability for your Vile Parle to Pune Cab Service. Our customer service team is always ready to assist you and make your booking process seamless."
        },
        {
          "WhyChooseheading": "Hassle-Free Booking Process",
          "WhyChoosedescription": "Booking your Vile Parle to Pune Cab with Vedant Travels is quick and easy. You can book your ride online via our website or mobile app, or you can contact our customer service team for personalized assistance with your booking."
        },
        {
          "WhyChooseheading": "Customizable Travel Packages",
          "WhyChoosedescription": "Whether you’re traveling for business, leisure, or with family, we offer customizable travel packages for your Vile Parle to Pune Cab Service. Let us know your needs and preferences, and we’ll tailor your journey accordingly for a more enjoyable experience."
        }
      ]


    }

    const faqData = [
        {
            id: 1,
            question: 'How can I book a Vile Parle to Pune cab with Vedant Travels?',
            answer: 'You can easily book a Vile Parle to Pune Cab Service online via our website or mobile app. Alternatively, you can contact our customer service team for personalized assistance with your booking.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, all our drivers are highly experienced in handling long-distance routes like Vile Parle to Pune, ensuring a smooth, safe, and timely journey.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Vile Parle to Pune travel?',
            answer: 'We offer a wide selection of vehicles including sedans, SUVs, and premium cars for your Vile Parle to Pune Cab Service. All vehicles are well-maintained, comfortable, and suitable for long-distance travel.',
        },
        {
            id: 4,
            question: 'How do I pay for my Vile Parle to Pune cab rental?',
            answer: 'We accept various payment methods including cash, credit/debit cards, and online payment options through our app for your convenience.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip cab from Vile Parle to Pune?',
            answer: 'Yes, you can book a round-trip cab. Just provide your return details during the booking process, and we will ensure that your trip is hassle-free.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any extra charges for waiting time or detours will be communicated to you upfront, ensuring complete transparency in our pricing.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing during my Vile Parle to Pune trip?',
            answer: 'Yes, we offer customized sightseeing tours as part of your Vile Parle to Pune Cab Service. Explore famous landmarks and attractions with the help of our professional drivers.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Vile Parle to Pune cab?',
            answer: 'Our vehicles are equipped to handle standard luggage. If you have additional luggage or special requirements, feel free to inform us at the time of booking, and we will make the necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Vile Parle and Pune?',
            answer: 'Yes, we offer corporate travel services for businesses needing regular or occasional trips between Vile Parle and Pune. We can customize our services to suit your company’s needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Vile Parle to Pune trip?',
            answer: 'Vedant Travels is known for its punctuality, reliability, safety, and comfort. Our professional drivers, well-maintained vehicles, and transparent pricing ensure a seamless Vile Parle to Pune Cab Service experience.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Ramesh Patel",
            title: "Business Traveler",
            quote: "I had a fantastic experience booking my Vile Parle to Pune Cab with Vedant Travels. The driver was very professional, the vehicle was clean and comfortable, and the journey was smooth. I would definitely recommend their services!",
            rating: 5,
        },
        {
            name: "Mrs. Priya Deshmukh",
            title: "Family Traveler",
            quote: "Our family trip from Vile Parle to Pune was made much more enjoyable with Vedant Travels. The driver was courteous, and the car was spacious and clean. We had a very pleasant journey. Highly recommend!",
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
        "name": "Vile Parle to Pune Cab Service | Vedant Travels",
        "description": "Book your Vile Parle to Pune taxi with Vedant Travels. Offering one-way and round-trip cabs, including Innova Crysta, Ertiga, and Sedan. Affordable and reliable taxi service for your journey from Vile Parle to Pune, Pimpri Chinchwad, and more.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.8",
          "ratingCount": "200"
        }
      };
      
     


    return (
        <div>
            <Helmet>
        <title>Vile Parle to Pune Cab Service | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Vile Parle to Pune taxi with Vedant Travels. Affordable one-way and round-trip cabs, including Innova Crysta, Ertiga, and Sedan. Convenient and reliable taxi service from Vile Parle to Pune, Pimpri Chinchwad, and more." />
        <meta name="keywords" content="Vile Parle to Pune Cab Service, Vile Parle to Pune Cab Service Contact Number, Vile Parle to Pune Taxi Service, Vile Parle to Pune One Way Taxi, Vile Parle to Pune Round Trip Taxi, Mumbai to Pune Taxi Service, Mumbai to Pune Taxi Fare, Mumbai to Pune Car Rental, Mumbai to Pune Cab Charges, Mumbai to Pune Cab Booking, Vile Parle Taxi Service, Mumbai Taxi Service, Cheapest Cab Service in Mumbai" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/vile-parle-to-pune-cab-service" />
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
                            <img src='./images/keyword/46.jpg' alt='img' />
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

export default Vileparletopunecab;
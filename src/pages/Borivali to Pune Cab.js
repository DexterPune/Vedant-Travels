
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Borivalitopunecabs() {



    const cardData =
    {
        keyword: 'Borivali to Pune Cab ',
        heading: 'Vedant Travels: Borivali to Pune Cab  ',
        headingDescription: 'Vedant Travels offers reliable, affordable, and comfortable taxi services for your journey from Borivali to Pune. Whether you’re traveling for business or leisure, we provide a variety of vehicle options, including sedans, SUVs, and premium cabs, ensuring a smooth and hassle-free ride. Our transparent pricing and professional drivers make your journey stress-free.',

        top: 'Top Places to Visit in Pune with Vedant Travels',

        "topPlaces": [
            {
                "title": "Shaniwar Wada",
                "description": "A historical fortification in the heart of Pune, Shaniwar Wada is a significant landmark showcasing Maratha architecture and history. The fort offers insight into the grandeur of the Peshwa Empire, and its light-and-sound show is a must-see in the evenings."
            },
            {
                "title": "Aga Khan Palace",
                "description": "Built in 1892, the Aga Khan Palace is a magnificent piece of architecture with historical significance. It is famous for its role in the Indian freedom struggle and for housing Mahatma Gandhi and his associates during their imprisonment. The palace is a serene spot to learn about India’s freedom movement."
            },
            {
                "title": "Sinhagad Fort",
                "description": "Located about 35 km from Pune, Sinhagad Fort is a popular trekking destination offering panoramic views of the surrounding region. Rich in history, the fort played a crucial role in the Maratha Empire and is now a popular site for picnics and adventure lovers."
            },
            {
                "title": "Osho Ashram",
                "description": "Located in Koregaon Park, the Osho Ashram is an internationally renowned meditation center that offers a peaceful and rejuvenating environment. Visitors can indulge in meditation, yoga, and spiritual practices under the guidance of experienced masters."
            },
            {
                "title": "Raja Dinkar Kelkar Museum",
                "description": "The Raja Dinkar Kelkar Museum houses a vast collection of artifacts from India’s rich cultural history. The museum includes sculptures, paintings, musical instruments, and everyday items that provide insight into traditional Indian art and culture."
            },
            {
                "title": "Pune Okayama Friendship Garden (Pu La Deshpande Garden)",
                "description": "A beautiful Japanese-style garden located on the banks of the Mula-Mutha River, this garden is perfect for a peaceful stroll. With beautiful landscapes, flower beds, and ponds, it provides a serene environment away from the hustle and bustle of the city."
            },
            {
                "title": "Pashan Lake",
                "description": "Pashan Lake is a popular spot for nature lovers and birdwatchers. The lake is surrounded by lush greenery, making it an ideal place for picnics, leisurely walks, and photography. It is especially beautiful during the monsoon season."
            },
            {
                "title": "Bund Garden",
                "description": "Bund Garden is a beautiful riverside park in Pune, offering peaceful surroundings for a walk or picnic. The garden has boating facilities and is perfect for a relaxing afternoon with family and friends."
            },
            {
                "title": "Saras Baug",
                "description": "Saras Baug is a popular garden in Pune that offers a relaxing escape with scenic views. The garden has a temple dedicated to Lord Ganesha, making it an important religious and cultural landmark in the city."
            },
            {
                "title": "Fergusson College",
                "description": "One of the oldest and most prestigious colleges in Pune, Fergusson College is also a historic building with beautiful architecture. It’s a great spot to visit for those interested in history, architecture, and the educational landscape of Pune."
            }
        ],

"services": [
    {
        "name": "Borivali to Pune Cab Service",
        "description": "Travel from Borivali to Pune with Vedant Travels for a comfortable and reliable cab service. Our fleet includes a variety of vehicles like the Innova, Ertiga, and Sedans to ensure your journey is both comfortable and convenient. Whether you're traveling for business or leisure, we guarantee a smooth ride every time."
    },
    {
        "name": "Borivali to Pune Car",
        "description": "Looking for a car for your trip from Borivali to Pune? Vedant Travels provides well-maintained cars for a safe and comfortable ride. Choose from a range of vehicles like Innova, Ertiga, or Sedans, and enjoy a relaxing journey from Borivali to Pune with our professional drivers."
    },
    {
        "name": "Borivali to Pune Taxi",
        "description": "Book your Borivali to Pune taxi with Vedant Travels for an affordable and hassle-free experience. Our experienced drivers ensure a safe and comfortable journey, and our fleet includes premium vehicles like Innova Crysta, Ertiga, and Sedans, making your trip enjoyable and smooth."
    },
    {
        "name": "Borivali to Pune Taxi Service",
        "description": "Vedant Travels offers dependable Borivali to Pune Taxi Service. Whether you need a one-way trip or a round-trip, we offer various vehicle options, including the luxurious Innova, the spacious Ertiga, and the practical Sedan. Enjoy a comfortable, stress-free ride with our professional drivers."
    },
    {
        "name": "Borivali to Pune Taxi Fare",
        "description": "The Borivali to Pune Taxi Fare with Vedant Travels is competitive and transparent. We provide upfront pricing with no hidden charges. Whether you're traveling alone or with a group, our fleet offers a wide range of vehicles, including Innova Crysta, Ertiga, and Sedans, at reasonable fares."
    },
    {
        "name": "Borivali to Pune Cab",
        "description": "Looking for a Borivali to Pune cab? Vedant Travels provides reliable and comfortable cab services to make your journey easy and enjoyable. Choose from a wide range of vehicles, including Innova Crysta, Ertiga, and Sedans, and enjoy a hassle-free trip to Pune from Borivali."
    },
    {
        "name": "Borivali to Pune Cab Service",
        "description": "For an efficient and comfortable Borivali to Pune Cab Service, choose Vedant Travels. Our fleet includes a variety of vehicles to suit your needs, including premium options like Innova and Ertiga, ensuring you enjoy a comfortable and smooth journey with professional drivers."
    },
    {
        "name": "Borivali to Pune Car",
        "description": "Choose Vedant Travels for your Borivali to Pune car rental needs. We offer a variety of vehicles including Innova Crysta, Ertiga, and Sedans to ensure a comfortable and safe journey. Whether you're traveling for business or leisure, we guarantee a pleasant ride from Borivali to Pune."
    },
    {
        "name": "Borivali to Pune Taxi",
        "description": "Book your Borivali to Pune taxi with Vedant Travels for a comfortable and affordable ride. Our professional drivers ensure punctuality and safety, and we offer a wide selection of vehicles like Innova, Ertiga, and Sedans for your convenience."
    },
    {
        "name": "Borivali to Pune Taxi Fare",
        "description": "The Borivali to Pune Taxi Fare with Vedant Travels is designed to offer the best value for your money. We provide upfront pricing with no hidden costs. Our fleet includes vehicles like the Innova, Ertiga, and Sedans, offering comfort and reliability at competitive fares."
    },
    {
        "name": "Pune to Borivali Cab",
        "description": "For a smooth and safe ride from Pune to Borivali, Vedant Travels offers reliable cab services. Our fleet of vehicles like the Innova, Ertiga, and Sedans ensures a comfortable journey, with experienced drivers ensuring you reach your destination in a timely manner."
    },
    {
        "name": "Borivali to Pune Taxi Service",
        "description": "Vedant Travels provides an excellent Borivali to Pune Taxi Service. Whether you're traveling for work or leisure, we offer a variety of vehicles including Innova Crysta, Ertiga, and Sedans. With professional drivers and comfortable vehicles, your trip will be a pleasant one."
    },
    {
        "name": "Borivali to Pune Cab Service",
        "description": "For a stress-free journey, choose Vedant Travels for Borivali to Pune Cab Service. Our fleet includes a range of vehicles to suit your needs, including the Innova, Ertiga, and Sedans. Enjoy a smooth ride with experienced drivers committed to punctuality and safety."
    },
    {
        "name": "Cab Service in Borivali",
        "description": "Vedant Travels offers reliable and comfortable Cab Service in Borivali. Whether you're looking to travel within the city or need a longer journey to Pune, our fleet of vehicles ensures comfort and safety. Choose from Innova, Ertiga, or Sedans for your next trip."
    },
    {
        "name": "Taxi Service in Borivali",
        "description": "For reliable and affordable Taxi Service in Borivali, Vedant Travels is your go-to choice. We offer a variety of vehicles, including the Innova, Ertiga, and Sedans, to ensure a comfortable and punctual ride for any occasion."
    },
    {
        "name": "Innova Crysta on Rent in Borivali",
        "description": "If you're looking to rent an Innova Crysta in Borivali, Vedant Travels offers an excellent option. Perfect for those who need extra space and comfort, the Innova Crysta provides a luxurious and smooth ride for your journey to Pune or other destinations."
    },
    {
        "name": "Borivali to Pune Innova Crysta",
        "description": "For a premium and spacious ride, the Borivali to Pune Innova Crysta is the ideal choice. With Vedant Travels, enjoy a luxurious and comfortable ride, whether for business or leisure. Our professional drivers ensure a safe and timely arrival."
    },
    {
        "name": "Borivali to Pune Ertiga Cab",
        "description": "The Borivali to Pune Ertiga Cab service is perfect for families or small groups looking for a comfortable ride at an affordable price. The Ertiga offers ample space and ensures a smooth journey to Pune from Borivali."
    },
    {
        "name": "Mumbai to Pune Cab Booking",
        "description": "Looking to book a Mumbai to Pune cab? Vedant Travels offers a reliable, affordable, and comfortable service. Choose from our fleet of vehicles, including Innova, Ertiga, and Sedans, for a smooth and timely journey to Pune from Mumbai."
    }
],


"tableData": [
    ["Borivali to Pune Cab Service", "Borivali to Pune Car"],
    ["Borivali to Pune Taxi", "Borivali to Pune Taxi Service"],
    ["Borivali to Pune Taxi Fare", "Borivali to Pune Cab"],
    ["Borivali to Pune Cab Service", "Borivali to Pune Car"],
    ["Borivali to Pune Taxi", "Borivali to Pune Taxi Fare"],
    ["Pune to Borivali Cab", "Borivali to Pune Taxi Service"],
    ["Borivali to Pune Cab Service", "Cab Service in Borivali"],
    ["Taxi Service in Borivali", "Innova Crysta on Rent in Borivali"],
    ["Borivali to Pune Innova Crysta", "Borivali to Pune Ertiga Cab"],
    ["Mumbai to Pune Cab Booking", ""]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we understand that time is essential, especially when traveling from Borivali to Pune. Whether it's for a business trip or a family visit, our drivers ensure on-time pickups and timely drop-offs, providing you with a hassle-free and punctual experience."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicles",
      "WhyChoosedescription": "We offer a fleet of comfortable, well-maintained, and spacious vehicles for your Borivali to Pune Cab ride. Choose from a variety of sedans, SUVs, and premium cars, all designed for comfort, with air conditioning, ample legroom, and plush seating to make your journey enjoyable."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our drivers are highly experienced and professional in handling long-distance routes like Borivali to Pune. They are well-versed with the best routes and ensure that your trip is smooth, safe, and efficient, allowing you to relax during your journey."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "Vedant Travels offers affordable rates for your Borivali to Pune Cab journey. We maintain a transparent pricing policy with no hidden charges, so you can be confident in the value you're getting for your money."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Your safety is our priority. Our vehicles are equipped with modern safety features such as seat belts, airbags, and GPS tracking. Our drivers follow all safety protocols to ensure that your journey from Borivali to Pune is secure and stress-free."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "Whether it’s early morning or late night, Vedant Travels is available round the clock. You can book your Borivali to Pune Cab at any time, and our customer service team will be there to assist you with booking or any queries you may have."
    },
    {
      "WhyChooseheading": "Hassle-Free Booking Process",
      "WhyChoosedescription": "Booking your Borivali to Pune Cab is quick and easy. You can book online via our website or mobile app, or contact our customer service team for personalized assistance. We aim to make the process as simple and convenient as possible."
    },
    {
      "WhyChooseheading": "Customized Travel Packages",
      "WhyChoosedescription": "Whether you're traveling for business or leisure, we offer customized travel packages for your Borivali to Pune journey. Share your preferences, and we will personalize the trip to meet your needs and ensure maximum comfort."
    }
  ]






    }

    const faqData = [
        {
            id: 1,
            question: 'How can I book a Borivali to Pune cab with Vedant Travels?',
            answer: 'You can easily book your Borivali to Pune Cab through our website or mobile app. Alternatively, you can contact our customer service team for personalized booking assistance.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are highly experienced and trained to handle long-distance routes like Borivali to Pune. They are well-acquainted with the best routes and ensure your ride is smooth and safe.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Borivali to Pune travel?',
            answer: 'We offer a wide range of vehicles, including sedans, SUVs, and premium cars. All of our vehicles are well-maintained and equipped for comfort, ensuring a pleasant ride.',
        },
        {
            id: 4,
            question: 'How do I pay for my Borivali to Pune cab rental?',
            answer: 'We accept various payment methods, including cash, credit/debit cards, and online payments via our app, providing you with flexibility and convenience.',
        },
        {
            id: 5,
            question: 'Can I book a return trip along with my Borivali to Pune cab?',
            answer: 'Yes, you can easily book a round-trip cab for your Borivali to Pune journey. Simply provide your return details at the time of booking, and we will handle the rest.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any extra charges for waiting or detours will be communicated to you upfront during the booking process. We maintain complete transparency in our pricing.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing in Pune after my drop-off?',
            answer: 'Yes, we offer customized sightseeing tours in Pune after your Borivali to Pune journey. Explore popular landmarks such as Shaniwar Wada, Aga Khan Palace, and more with a professional driver.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Borivali to Pune cab?',
            answer: 'Our vehicles can comfortably accommodate standard luggage. If you have more luggage or any special requirements, please let us know at the time of booking, and we will ensure your needs are met.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Borivali and Pune?',
            answer: 'Yes, we offer corporate travel services for business meetings, conferences, and other corporate events. We can customize the service according to your company’s requirements.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Borivali to Pune journey?',
            answer: 'Vedant Travels offers reliable, safe, and comfortable travel services with experienced drivers, well-maintained vehicles, transparent pricing, and 24/7 availability, ensuring a smooth and enjoyable Borivali to Pune journey.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Rajesh Mehta",
            title: "Business Traveler",
            quote: "I traveled from Borivali to Pune with Vedant Travels, and it was a fantastic experience. The driver was professional, the vehicle was clean and comfortable, and the ride was smooth. I highly recommend their services!",
            rating: 5,
        },
        {
            name: "Mrs. Sunita Sharma",
            title: "Family Traveler",
            quote: "Our family used Vedant Travels for our trip from Borivali to Pune. The driver was friendly and on time, and the car was spacious and well-maintained. We had a great experience and will definitely book with them again.",
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
        "name": "Borivali to Pune Cab | Vedant Travels",
        "description": "Book your Borivali to Pune Cab with Vedant Travels. Offering reliable one-way, round-trip, and airport transfer services in Innova, Ertiga, Sedan, and Swift Dzire models for a comfortable and safe journey.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.8",
          "ratingCount": "450"
        }
      };
      
    
      


    return (
        <div>
             <Helmet>
        <title>Borivali to Pune Cab | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Borivali to Pune Cab with Vedant Travels. Offering one-way, round-trip, and airport transfer services in Innova, Ertiga, Sedan, and Swift Dzire models for a comfortable and hassle-free ride." />
        <meta name="keywords" content="Borivali to Pune Cab Service, Borivali to Pune Taxi, Borivali to Pune Taxi Service, Borivali to Pune Cab Fare, Borivali to Pune Innova Crysta, Borivali to Pune Ertiga Cab, Mumbai to Pune Cab Booking, Pune to Borivali Cab, Cab Service in Borivali, Taxi Service in Borivali, Innova Crysta on Rent in Borivali, Borivali to Pune Taxi Fare, Borivali to Pune Car, Best Cab Service Borivali to Pune" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/borivali-to-pune-cab" />
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
                            <img src='./images/keyword/37.jpg' alt='img' />
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

export default Borivalitopunecabs;
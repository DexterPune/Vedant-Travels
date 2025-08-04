
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Mumbaiairporttopunecab() {



    const cardData =
    {
        keyword: 'Mumbai Airport to Pune Cab',
        heading: 'Vedant Travels: Mumbai Airport to Pune Cab',
        headingDescription: 'Vedant Travels offers comfortable, reliable, and affordable taxi services for travel from Mumbai Airport to Pune, ensuring a smooth and convenient journey. We provide a range of cab options, including sedans, SUVs, and premium vehicles, tailored to meet your travel needs and budget. Our pricing is competitive with no hidden charges, allowing you to travel stress-free.',

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
        "name": "Mumbai to Pune Cab Service",
        "description": "For a smooth and hassle-free journey, Mumbai to Pune Cab Service by Vedant Travels is your ideal choice. Whether you're traveling for business or leisure, our reliable cabs ensure you get to your destination on time. We offer a fleet of well-maintained vehicles to cater to your needs, ensuring comfort and safety throughout your ride."
    },
    {
        "name": "Mumbai Airport Terminal 2 to Pune Cab",
        "description": "Traveling from Mumbai Airport Terminal 2 to Pune has never been easier with Vedant Travels. Our airport taxi services are designed to provide you with the most comfortable and timely transfer. Our professional drivers will ensure a smooth and relaxed ride from the airport to your destination in Pune."
    },
    {
        "name": "Mumbai Airport to Pune Cab Fare",
        "description": "When booking a Mumbai Airport to Pune Cab, Vedant Travels offers transparent and competitive rates. We aim to provide affordable fares without compromising on comfort or safety. The fare depends on the type of vehicle and distance, but we ensure clear pricing with no hidden charges."
    },
    {
        "name": "Pune to Mumbai Airport Cab Price",
        "description": "If you need a ride from Pune to Mumbai Airport, Vedant Travels provides budget-friendly pricing without sacrificing quality. Whether you're catching a flight or arriving from one, we ensure a safe and timely journey to the airport, making sure you reach your destination stress-free."
    },
    {
        "name": "Mumbai International Airport to Pune Cab",
        "description": "For a seamless transfer from Mumbai International Airport to Pune, choose Vedant Travels. We provide punctual and reliable service with a range of vehicle options to suit your needs. Enjoy a comfortable journey with our experienced drivers, ensuring you get to your destination without any delays."
    },
    {
        "name": "Mumbai Airport Pune Taxi Service",
        "description": "The Mumbai Airport to Pune Taxi Service by Vedant Travels is tailored for those who need a dependable, timely ride. With our trained drivers, you’ll enjoy a safe and smooth ride from Mumbai’s airport to Pune. Whether it's a corporate trip or a personal journey, we ensure that your ride is comfortable and stress-free."
    },
    {
        "name": "Mumbai Airport to Pune Cab Charges",
        "description": "Vedant Travels offers competitive Mumbai Airport to Pune Cab Charges, ensuring you pay a fair price for a comfortable and timely service. Contact us for a detailed fare estimate based on your travel needs, and enjoy an easy booking process for a ride to or from the airport."
    },
    {
        "name": "Mumbai Airport to Pune Cab Service",
        "description": "Looking for a trustworthy Mumbai Airport to Pune Cab Service? Vedant Travels has you covered. We provide fast, comfortable, and affordable taxi services, making your trip between the two cities as smooth as possible. Our drivers are familiar with the best routes, ensuring a swift and stress-free transfer."
    },
    {
        "name": "Mumbai Airport to Pune Car Hire",
        "description": "Renting a car from Mumbai Airport to Pune has never been easier with Vedant Travels. We offer a variety of vehicles, including sedans, SUVs, and luxury options, to meet your preferences. Whether you need a quick ride or a long-distance journey, we have flexible car hire options to suit your schedule and budget."
    },
    {
        "name": "Mumbai Airport to Pune Innova",
        "description": "For a more luxurious and spacious ride, opt for an Innova from Mumbai Airport to Pune with Vedant Travels. The Innova is perfect for groups or families traveling together. With ample space and comfortable seating, this vehicle ensures that your journey is both enjoyable and relaxing."
    },
    {
        "name": "Mumbai Airport to Pune Taxi Online Booking",
        "description": "With Vedant Travels, Mumbai Airport to Pune Taxi Online Booking is simple and hassle-free. Our easy-to-use online booking system allows you to schedule your ride in just a few clicks. Whether it's for a one-way trip or a round trip, you can book your cab online with complete confidence."
    },
    {
        "name": "Mumbai International Airport to Pune Cab Service",
        "description": "Our Mumbai International Airport to Pune Cab Service is designed to provide seamless transfers with no delays. Our vehicles are comfortable, clean, and well-maintained, ensuring that you can sit back, relax, and enjoy the ride. Let us take care of the logistics, so you can focus on enjoying your trip."
    },
    {
        "name": "Mumbai Pune Airport Cab",
        "description": "The Mumbai Pune Airport Cab service by Vedant Travels ensures that you arrive at your destination on time, every time. We understand the importance of timely travel, especially when you’re catching a flight or attending an important event. Our fleet is well-equipped, and our drivers are trained to provide excellent service on the road."
    },
    {
        "name": "Mumbai Airport to Pune Innova Crysta Cab",
        "description": "If you're looking for a luxurious travel experience, book an Innova Crysta from Mumbai Airport to Pune with Vedant Travels. With extra space and modern amenities, the Innova Crysta is ideal for those who want a higher level of comfort and style. Perfect for both business and leisure travel, this vehicle offers a premium experience."
    },
    {
        "name": "Mumbai Airport to Pune Ertiga Cab",
        "description": "Travel in style and comfort with the Mumbai Airport to Pune Ertiga Cab service offered by Vedant Travels. The Ertiga is spacious and comfortable, making it a great choice for families or groups. Enjoy ample legroom, air-conditioning, and a smooth ride as you travel between Mumbai and Pune."
    },
    {
        "name": "Mumbai Airport Cab Service",
        "description": "Our Mumbai Airport Cab Service ensures you have a smooth ride to and from Mumbai Airport. Whether you're arriving in Mumbai or leaving the city, Vedant Travels guarantees a hassle-free experience. We provide reliable, professional taxi services at competitive rates."
    },
    {
        "name": "Mumbai Airport Car Rental",
        "description": "For flexibility and convenience, consider Mumbai Airport Car Rental with Vedant Travels. Renting a car from the airport gives you the freedom to explore Mumbai and its surroundings at your own pace. We offer a range of vehicles to match your travel needs, whether you prefer a sedan, SUV, or luxury car."
    },
    {
        "name": "Airport Taxi Mumbai",
        "description": "Vedant Travels offers Airport Taxi Mumbai services, ensuring you reach your destination quickly and comfortably. Our airport taxis are well-maintained, and our drivers are experienced in providing smooth transfers, making your trip as comfortable as possible."
    },
    {
        "name": "Mumbai Airport Transfer",
        "description": "When you need a reliable Mumbai Airport Transfer, Vedant Travels is the perfect choice. Our dedicated team ensures that you arrive at the airport in comfort and on time. Whether it's an early morning flight or a late-night arrival, we’re here to ensure your airport transfer is smooth and stress-free."
    },
    {
        "name": "Mumbai Airport Taxi",
        "description": "Our Mumbai Airport Taxi services are tailored to meet your travel needs. With prompt service and well-maintained vehicles, we provide an excellent taxi experience, taking you to or from Mumbai Airport comfortably and efficiently."
    },
    {
        "name": "Mumbai Airport Taxi Booking",
        "description": "Booking a Mumbai Airport Taxi with Vedant Travels is quick and easy. We offer online taxi booking services, so you can arrange your ride in advance and avoid any last-minute hassles. Our reliable taxi service ensures timely pick-up and drop-off, whether you're traveling to or from Mumbai Airport."
    }
],


"tableData": [
    ["Mumbai to Pune Cab Service", "Mumbai Airport Terminal 2 to Pune Cab"],
    ["Mumbai Airport to Pune Cab Fare", "Pune to Mumbai Airport Cab Price"],
    ["Mumbai International Airport to Pune Cab", "Mumbai Airport Pune Taxi Service"],
    ["Mumbai Airport to Pune Cab Charges", "Mumbai Airport to Pune Cab Service"],
    ["Mumbai Airport to Pune Car Hire", "Mumbai Airport to Pune Innova"],
    ["Mumbai Airport to Pune Taxi Online Booking", "Mumbai International Airport to Pune Cab Service"],
    ["Mumbai Pune Airport Cab", "Mumbai Airport to Pune Innova Crysta Cab"],
    ["Mumbai Airport to Pune Ertiga Cab", "Mumbai Airport Cab Service"],
    ["Mumbai Airport Car Rental", "Airport Taxi Mumbai"],
    ["Mumbai Airport Transfer", "Mumbai Airport Taxi"],
    ["Mumbai Airport Taxi Booking", ""]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we understand how crucial timely travel is, especially after a long flight. Our drivers ensure that you are picked up from Mumbai Airport on time and reach your destination in Pune comfortably and promptly, allowing you to start your journey stress-free."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicles",
      "WhyChoosedescription": "We provide a fleet of well-maintained, comfortable, and spacious vehicles for your Mumbai Airport to Pune Cab ride. Our vehicles are equipped with air conditioning, comfortable seating, and ample legroom to ensure that you enjoy a relaxing ride after your flight."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our professional drivers are experienced in handling airport transfers and long-distance routes like Mumbai Airport to Pune. They are familiar with the best routes and ensure a smooth, safe, and efficient journey, making your travel experience seamless."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "Vedant Travels offers affordable pricing for your Mumbai Airport to Pune Cab service, with no hidden charges. We believe in transparency, and our clear pricing model ensures that you know exactly what you’re paying for, giving you peace of mind throughout your journey."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Your safety is our top priority. All our vehicles are equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers adhere to strict safety protocols to ensure that your trip is secure and worry-free."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "Whether your flight lands early in the morning or late at night, Vedant Travels is available 24/7 to serve your travel needs. You can book your Mumbai Airport to Pune Cab at any time, and our customer service team will assist you promptly."
    },
    {
      "WhyChooseheading": "Hassle-Free Booking Process",
      "WhyChoosedescription": "Booking a cab from Mumbai Airport to Pune is quick and simple. You can book online through our website or mobile app, or reach out to our customer service team for assistance with your booking. We ensure that the booking process is smooth and convenient for you."
    },
    {
      "WhyChooseheading": "Customized Travel Packages",
      "WhyChoosedescription": "We understand that every traveler has unique needs. Therefore, we offer customized travel packages for your Mumbai Airport to Pune journey, making your travel experience personal and tailored to your preferences."
    }
  ]








    }

    const faqData = [
        {
            id: 1,
            question: 'How can I book a Mumbai Airport to Pune cab with Vedant Travels?',
            answer: 'You can easily book your Mumbai Airport to Pune Cab online through our website or mobile app. Alternatively, you can contact our customer service team for personalized assistance with your booking.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are experienced in handling long-distance routes such as Mumbai Airport to Pune. They ensure a smooth and safe journey while providing excellent service throughout.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Mumbai Airport to Pune travel?',
            answer: 'We offer a variety of vehicles, including sedans, SUVs, and premium cars. All our vehicles are spacious, well-maintained, and designed for comfort, ensuring a pleasant ride.',
        },
        {
            id: 4,
            question: 'How do I pay for my Mumbai Airport to Pune cab rental?',
            answer: 'We accept multiple payment options, including cash, credit/debit cards, and online payment through our app, making it easy and convenient for you to pay.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip cab from Mumbai Airport to Pune?',
            answer: 'Yes, round-trip bookings are available. Simply provide your return details at the time of booking, and we’ll arrange the entire journey for you.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any additional charges for waiting time or detours will be communicated upfront during the booking process, ensuring full transparency with no surprises.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing in Pune after my drop-off?',
            answer: 'Yes, we offer customized sightseeing tours in Pune as part of your Mumbai Airport to Pune trip. Explore popular attractions like Shaniwar Wada, Aga Khan Palace, and more with a trusted driver.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Mumbai Airport to Pune cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have more luggage or special requirements, let us know at the time of booking, and we’ll make necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel from Mumbai Airport to Pune?',
            answer: 'Yes, we provide corporate travel services for business meetings, conferences, and professional events. We can customize your travel package to fit your company\'s needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Mumbai Airport to Pune journey?',
            answer: 'Vedant Travels offers reliable, safe, and comfortable travel services with professional drivers, well-maintained vehicles, competitive pricing, and 24/7 availability. We ensure a smooth and stress-free experience for your Mumbai Airport to Pune journey.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Arun Patel",
            title: "Customer",
            quote: "I used Vedant Travels for my airport transfer from Mumbai Airport to Pune. The vehicle was clean and comfortable, and the driver was very courteous and professional. The entire journey was smooth, and I reached Pune on time. I would definitely recommend them!",
            rating: 5,
        },
        {
            name: "Mrs. Snehal Joshi",
            title: "Customer",
            quote: "I had a fantastic experience traveling from Mumbai Airport to Pune with Vedant Travels. The driver was waiting for me at the airport as soon as I landed, and the ride was smooth and comfortable. The whole process was seamless, and I felt well taken care of.",
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
        "name": "Mumbai Airport to Pune Cab | Vedant Travels",
        "description": "Book your Mumbai Airport to Pune Cab with Vedant Travels. We offer a range of comfortable vehicles, including Innova, Ertiga, and Sedan. Enjoy reliable airport transfers at affordable rates. Book your cab now for a smooth journey from Mumbai to Pune.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.8",
          "ratingCount": "1345"
        }
      };
      
      
      
  

    return (
        <div>
           <Helmet>
        <title>Mumbai Airport to Pune Cab | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Mumbai Airport to Pune Cab with Vedant Travels. Reliable and affordable taxi service for airport transfers, including Innova, Ertiga, and Sedan options. Smooth and comfortable rides from Mumbai Airport to Pune." />
        <meta name="keywords" content="Mumbai to Pune Cab Service, Mumbai Airport Terminal 2 to Pune Cab, Mumbai Airport to Pune Cab Fare, Pune to Mumbai Airport Cab Price, Mumbai International Airport to Pune Cab, Mumbai Airport Pune Taxi Service, Mumbai Airport to Pune Cab Charges, Mumbai Airport to Pune Cab Service, Mumbai Airport to Pune Car Hire, Mumbai Airport to Pune Innova, Mumbai Airport to Pune Taxi Online Booking, Mumbai International Airport to Pune Cab Service, Mumbai Pune Airport Cab, Mumbai Airport to Pune Innova Crysta Cab, Mumbai Airport to Pune Ertiga Cab, Mumbai Airport Cab Service, Mumbai Airport Car Rental, Airport Taxi Mumbai, Mumbai Airport Transfer, Mumbai Airport Taxi Booking" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/mumbai-airport-to-pune-cab" />
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
                            <img src='./images/keyword/30.jpg' alt='img' />
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

export default Mumbaiairporttopunecab;
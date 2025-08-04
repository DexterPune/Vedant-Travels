
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Mumbaicentraltopune() {



    const cardData =
    {
        keyword: 'Mumbai Central to Pune Cab ',
        heading: 'Vedant Travels: Mumbai Central to Pune Cab  ',
        headingDescription: 'Vedant Travels offers affordable, reliable, and comfortable taxi services for your journey from Mumbai Central to Pune. With a fleet of well-maintained vehicles, including sedans, SUVs, and premium cabs, we ensure a smooth and safe ride. Our pricing is transparent, with no hidden charges, allowing you to enjoy a hassle-free trip.',

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
        "name": "Mumbai Central to Pune Taxi",
        "description": "Looking to travel from Mumbai Central to Pune? Vedant Travels offers reliable and affordable taxi services for a comfortable journey. Choose from a variety of vehicles including the Innova, Ertiga, and Sedans to ensure a smooth and enjoyable ride."
    },
    {
        "name": "Taxi from Mumbai Central to Pune",
        "description": "Book a taxi from Mumbai Central to Pune with Vedant Travels for a hassle-free experience. Whether you're traveling for business or leisure, we offer a range of vehicles like the Innova, Ertiga, and Sedans to meet your needs. Our experienced drivers ensure a safe and timely ride."
    },
    {
        "name": "Taxi from Mumbai Central to Pune One Way Cab",
        "description": "Looking for a one-way taxi from Mumbai Central to Pune? Vedant Travels offers convenient one-way cab services to suit your travel needs. Choose from our fleet of vehicles, including Innova Crysta, Ertiga, or Sedan, and enjoy a comfortable, one-way ride with professional drivers."
    },
    {
        "name": "Mumbai Central to Pune Drop Taxi",
        "description": "Need a drop taxi from Mumbai Central to Pune? Vedant Travels offers a seamless drop taxi service for your convenience. Whether you're traveling for business or leisure, our drop taxi service ensures comfort, punctuality, and reliability every time."
    },
    {
        "name": "Mumbai Central to Pune Taxi",
        "description": "Vedant Travels provides dependable taxi services from Mumbai Central to Pune. With our premium fleet of vehicles like Innova, Ertiga, and Sedans, your journey will be smooth and comfortable. Our experienced drivers ensure timely arrivals and safe travel."
    },
    {
        "name": "Mumbai Central to Baner Taxi",
        "description": "Traveling from Mumbai Central to Baner? Vedant Travels offers reliable and affordable taxi services for this route. Whether you need an Innova, Ertiga, or Sedan, we ensure a comfortable ride with professional drivers who know the best routes for a smooth journey."
    },
    {
        "name": "Mumbai Central to Pune Innova Taxi",
        "description": "For a luxurious and spacious ride, choose the Mumbai Central to Pune Innova Taxi service with Vedant Travels. The Innova offers premium comfort and ample space, making it ideal for families or business travelers seeking a smooth journey."
    },
    {
        "name": "Mumbai Central to Pune Ertiga Taxi",
        "description": "The Mumbai Central to Pune Ertiga Taxi service is perfect for small groups or families. The Ertiga offers a comfortable ride and ample space at an affordable price. Book with Vedant Travels for a relaxed journey from Mumbai Central to Pune."
    },
    {
        "name": "Mumbai Central to Pune Sedan Taxi",
        "description": "For a more compact yet comfortable ride, the Mumbai Central to Pune Sedan Taxi service is a great option. Whether you're traveling alone or with a companion, our Sedans provide a comfortable and efficient ride from Mumbai Central to Pune."
    },
    {
        "name": "Mumbai Central to Pune Swift Dzire Taxi",
        "description": "Looking for a Swift Dzire taxi from Mumbai Central to Pune? Vedant Travels offers reliable and affordable Swift Dzire taxis for your journey. Ideal for those seeking a compact vehicle with comfort and economy, our Swift Dzire taxis provide an enjoyable ride."
    },
    {
        "name": "Mumbai Central to Pune Cab",
        "description": "Travel from Mumbai Central to Pune with Vedant Travels for a safe and smooth journey. Our fleet includes various vehicles like the Innova, Ertiga, and Sedans, ensuring a comfortable and convenient ride. Our professional drivers ensure a timely and pleasant trip."
    },
    {
        "name": "Mumbai Central to Pune Taxi",
        "description": "Book a taxi from Mumbai Central to Pune with Vedant Travels for a comfortable, timely, and safe ride. We offer various vehicle options, including the luxurious Innova, Ertiga, and Sedans, providing a pleasant experience from start to finish."
    },
    {
        "name": "Pune to Mumbai Central Cab",
        "description": "For a reliable and comfortable cab service from Pune to Mumbai Central, choose Vedant Travels. Our fleet of vehicles like the Innova, Ertiga, and Sedans ensures a comfortable ride, and our professional drivers will ensure a timely arrival."
    },
    {
        "name": "Pune to Mumbai Central Taxi",
        "description": "Need a taxi from Pune to Mumbai Central? Vedant Travels offers a variety of vehicles to suit your needs, from Sedans to the spacious Innova. We guarantee a safe, comfortable, and timely journey, ensuring you reach your destination with ease."
    },
    {
        "name": "Taxi from Mumbai Central to Pune",
        "description": "Looking for a taxi from Mumbai Central to Pune? Vedant Travels offers reliable taxi services for a comfortable and smooth ride. Our fleet includes the Innova, Ertiga, and Sedans, ensuring you have the perfect vehicle for your journey."
    },
    {
        "name": "Cab Service in Mumbai Central",
        "description": "For a convenient and reliable Cab Service in Mumbai Central, look no further than Vedant Travels. Our fleet of well-maintained vehicles, including Sedans, Ertiga, and Innova, provides a comfortable and safe ride, whether you're traveling within the city or to nearby destinations."
    },
    {
        "name": "Cheapest Cab Service in Mumbai",
        "description": "Vedant Travels offers the Cheapest Cab Service in Mumbai without compromising on quality. Our affordable rates ensure you get great value for money while traveling in comfort. Choose from a range of vehicles like Sedans, Ertiga, and Innova for your next trip."
    },
    {
        "name": "Best Cab Service in Mumbai",
        "description": "Choose Vedant Travels for the Best Cab Service in Mumbai. Our fleet of vehicles, including the luxurious Innova, Ertiga, and Sedans, ensures a smooth and comfortable ride every time. With experienced drivers and a commitment to punctuality, your journey will always be pleasant."
    },
    {
        "name": "Mumbai to Pune Cab Booking",
        "description": "Book your Mumbai to Pune cab with Vedant Travels for an affordable, reliable, and comfortable ride. We offer a variety of vehicle options, including the Innova, Ertiga, and Sedans, to ensure a smooth and enjoyable journey to Pune from Mumbai."
    }
],


"tableData": [
    ["Mumbai Central to Pune Taxi", "Taxi from Mumbai Central to Pune"],
    ["Taxi from Mumbai Central to Pune One Way Cab", "Mumbai Central to Pune Drop Taxi"],
    ["Mumbai Central to Pune Taxi", "Mumbai Central to Baner Taxi"],
    ["Mumbai Central to Pune Innova Taxi", "Mumbai Central to Pune Ertiga Taxi"],
    ["Mumbai Central to Pune Sedan Taxi", "Mumbai Central to Pune Swift Dzire Taxi"],
    ["Mumbai Central to Pune Cab", "Mumbai Central to Pune Taxi"],
    ["Pune to Mumbai Central Cab", "Pune to Mumbai Central Taxi"],
    ["Taxi from Mumbai Central to Pune", "Cab Service in Mumbai Central"],
    ["Cheapest Cab Service in Mumbai", "Best Cab Service in Mumbai"],
    ["Mumbai to Pune Cab Booking", ""]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we understand the importance of punctuality. Whether you're traveling for business or leisure, we ensure your Mumbai Central to Pune Cab is on time, providing you with a seamless and timely experience. Our drivers follow efficient routes to avoid any delays."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicles",
      "WhyChoosedescription": "We offer a variety of comfortable and well-maintained vehicles for your Mumbai Central to Pune journey. Choose from sedans, SUVs, and premium cars, all designed to provide ample legroom, comfortable seating, air conditioning, and a smooth ride for a relaxed experience."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our drivers are highly skilled and professional, ensuring that your journey from Mumbai Central to Pune is both safe and smooth. They are familiar with the best routes and handle the drive with care, allowing you to relax and enjoy your trip."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "At Vedant Travels, we offer affordable pricing for your Mumbai Central to Pune Cab with no hidden charges. We believe in complete transparency, so you can trust that the price quoted is the price you pay, ensuring you get excellent value for your money."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Your safety is our priority. All our vehicles are equipped with modern safety features such as seat belts, airbags, and GPS tracking. Our drivers follow strict safety protocols to ensure a secure and worry-free journey from Mumbai Central to Pune."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "Vedant Travels is available 24/7 to accommodate your travel needs. Whether it’s a morning business meeting or a late-night trip, you can rely on us to provide you with a convenient, reliable cab service from Mumbai Central to Pune at any time."
    },
    {
      "WhyChooseheading": "Hassle-Free Booking Process",
      "WhyChoosedescription": "Booking your Mumbai Central to Pune Cab is simple and quick. You can book online via our website or mobile app, or you can reach out to our customer service team for personalized booking assistance, making the process as easy as possible."
    },
    {
      "WhyChooseheading": "Customized Travel Packages",
      "WhyChoosedescription": "Whether you’re traveling for business, leisure, or any other special event, we offer customized travel packages for your Mumbai Central to Pune trip. Just let us know your preferences, and we’ll tailor the trip to suit your needs and comfort."
    }
  ]






    }

    const faqData = [
        {
            id: 1,
            question: 'How can I book a Mumbai Central to Pune cab with Vedant Travels?',
            answer: 'You can book your Mumbai Central to Pune Cab through our website or mobile app. Alternatively, you can contact our customer service team for personalized assistance.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are highly experienced and skilled in handling long-distance journeys like Mumbai Central to Pune. They are familiar with the best routes to ensure a smooth and safe journey.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Mumbai Central to Pune travel?',
            answer: 'We offer a range of vehicles including sedans, SUVs, and premium cars. All of our vehicles are spacious, well-maintained, and equipped to ensure a comfortable and enjoyable ride.',
        },
        {
            id: 4,
            question: 'How do I pay for my Mumbai Central to Pune cab rental?',
            answer: 'We accept multiple payment methods, including cash, credit/debit cards, and online payment via our app, so you can pay in whichever way is most convenient for you.',
        },
        {
            id: 5,
            question: 'Can I book a return trip along with my Mumbai Central to Pune cab?',
            answer: 'Yes, you can book a round-trip cab for your Mumbai Central to Pune journey. Simply provide your return details during the booking process, and we’ll handle the rest.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any additional charges for waiting time or detours will be communicated to you upfront, ensuring complete transparency in the pricing.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing in Pune after my drop-off?',
            answer: 'Yes, we offer customized sightseeing tours in Pune after your Mumbai Central to Pune trip. Explore popular spots like Shaniwar Wada, Aga Khan Palace, and more with a trusted driver.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Mumbai Central to Pune cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have extra luggage or specific requirements, please let us know at the time of booking, and we will ensure that your needs are met.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Mumbai Central and Pune?',
            answer: 'Yes, we offer corporate travel services for business meetings, conferences, and other corporate events. We can tailor the service to meet your company’s needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Mumbai Central to Pune journey?',
            answer: 'Vedant Travels offers reliable, comfortable, and safe travel services with experienced drivers, well-maintained vehicles, affordable pricing, and 24/7 availability, making your Mumbai Central to Pune journey seamless and stress-free.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Sameer Patel",
            title: "Business Traveler",
            quote: "I had a great experience traveling from Mumbai Central to Pune with Vedant Travels. The driver was punctual, the car was comfortable, and the journey was very smooth. I highly recommend their services!",
            rating: 5,
        },
        {
            name: "Mrs. Priya Reddy",
            title: "Family Traveler",
            quote: "We used Vedant Travels for our family trip from Mumbai Central to Pune. The vehicle was spacious and clean, and the driver was friendly and professional. It was a pleasant and relaxing ride, and we will definitely use them again!",
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
        "name": "Mumbai Central to Pune Cab | Vedant Travels",
        "description": "Book your Mumbai Central to Pune Cab with Vedant Travels. Offering comfortable and reliable one-way, round-trip, and airport transfer services in Innova, Ertiga, Sedan, and Swift Dzire models for a hassle-free journey.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.9",
          "ratingCount": "310"
        }
      };
      
      
      


    return (
        <div>
           
           <Helmet>
        <title>Mumbai Central to Pune Cab | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Mumbai Central to Pune Cab with Vedant Travels. Reliable and affordable one-way, round-trip, and airport transfer services in Innova, Ertiga, Sedan, and Swift Dzire models for a comfortable journey." />
        <meta name="keywords" content="Mumbai Central to Pune Taxi, Taxi from Mumbai Central to Pune, Mumbai Central to Pune One Way Cab, Mumbai Central to Pune Drop Taxi, Mumbai Central to Pune Taxi, Mumbai Central to Baner Taxi, Mumbai Central to Pune Innova Taxi, Mumbai Central to Pune Ertiga Taxi, Mumbai Central to Pune Sedan Taxi, Mumbai Central to Pune Swift Dzire Taxi, Mumbai Central to Pune Cab, Pune to Mumbai Central Cab, Pune to Mumbai Central Taxi, Taxi from Mumbai Central to Pune, Cab Service in Mumbai Central, Cheapest Cab Service in Mumbai, Best Cab Service in Mumbai, Mumbai to Pune Cab Booking" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/mumbai-central-to-pune-cab" />
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
                            <img src='./images/keyword/36.jpg' alt='img' />
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

export default Mumbaicentraltopune;
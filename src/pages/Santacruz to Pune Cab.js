
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Santacruztopunecab() {



    const cardData =
    {
        keyword: 'Santacruz to Pune Cab ',
        heading: 'Vedant Travels: Santacruz to Pune Cab ',
        headingDescription: 'Vedant Travels offers reliable, affordable, and comfortable taxi services for travel from Santacruz to Pune. Whether you’re traveling for business or leisure, our fleet of vehicles, including sedans, SUVs, and premium cabs, ensures a smooth and stress-free journey. We provide transparent pricing with no hidden charges, making your ride convenient and cost-effective.',

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
        "name": "Santacruz to Pune Taxi Fare",
        "description": "Traveling from Santacruz to Pune has never been more convenient with Vedant Travels. Our competitive and transparent Santacruz to Pune Taxi Fare ensures you get the best value for your money. Whether you're traveling solo or with a group, we provide a comfortable journey with no hidden charges. Our fleet includes the Innova, Ertiga, and Sedans to cater to your preferences and budget."
    },
    {
        "name": "Santacruz Airport to Pune Taxi Fare",
        "description": "The Santacruz Airport to Pune Taxi Fare with Vedant Travels is affordable and transparent, offering various vehicle options to meet your travel needs. From the comfort of an Innova Crysta to the practicality of an Ertiga or Sedan, we ensure a smooth and relaxing ride."
    },
    {
        "name": "Santacruz Airport to Pune One Way Taxi",
        "description": "Looking for a one-way taxi from Santacruz Airport to Pune? Vedant Travels provides reliable one-way taxi services for a seamless journey. Choose from vehicles like the Innova Crysta, Ertiga, or Sedan, and enjoy a comfortable ride with professional drivers who ensure punctuality and safety."
    },
    {
        "name": "Mumbai to Pune Cab Booking",
        "description": "Book your Mumbai to Pune cab with Vedant Travels for a smooth and comfortable ride. Our fleet of vehicles, including the Innova, Ertiga, and Sedans, guarantees a pleasant journey, whether you're traveling for business or leisure."
    },
    {
        "name": "Santacruz Airport to Pune Taxi Service",
        "description": "Experience the best Santacruz Airport to Pune Taxi Service with Vedant Travels. Our fleet includes premium vehicles like the Innova Crysta, Ertiga, and Sedans, ensuring your journey is comfortable, safe, and timely."
    },
    {
        "name": "Santacruz to Pune by Taxi",
        "description": "Traveling from Santacruz to Pune by taxi with Vedant Travels offers a convenient, comfortable, and affordable option. Choose from a variety of vehicles like Innova, Ertiga, and Sedans, tailored to your group size and preferences."
    },
    {
        "name": "Santacruz to Pune Innova Crysta",
        "description": "For a luxurious ride, the Santacruz to Pune Innova Crysta is the perfect choice. Enjoy extra space and premium comfort with the Innova Crysta. Ideal for families or business travelers, ensuring a smooth, relaxing journey."
    },
    {
        "name": "Santacruz to Pune Ertiga Taxi",
        "description": "The Santacruz to Pune Ertiga Taxi is an excellent choice for comfort and affordability. Spacious and smooth, it is ideal for small groups or families traveling between Santacruz and Pune."
    },
    {
        "name": "Santacruz to Pune Sedan Taxi",
        "description": "The Santacruz to Pune Sedan Taxi service is budget-friendly and perfect for solo travelers or couples. Providing comfort and reliability, our Sedans ensure a pleasant journey from Santacruz to Pune."
    },
    {
        "name": "Mumbai International Airport to Pune Cab",
        "description": "Traveling from Mumbai International Airport to Pune? Vedant Travels provides reliable and affordable cab services, with vehicles like Sedans, Innova, and Ertiga, ensuring comfort and punctuality."
    },
    {
        "name": "Cab Service in Santacruz West",
        "description": "For local travel within Santacruz or long-distance journeys, Vedant Travels provides top-notch Cab Service in Santacruz West. Choose from a fleet of vehicles like Innova, Ertiga, and Sedans for a safe and comfortable ride."
    },
    {
        "name": "Best Cab Service in Santacruz",
        "description": "Vedant Travels offers the Best Cab Service in Santacruz, ensuring comfort, reliability, and professionalism. Whether you’re traveling within the city or to nearby destinations like Pune, we guarantee a smooth journey."
    },
    {
        "name": "Santacruz Airport Cab Service",
        "description": "Choose Vedant Travels for your Santacruz Airport Cab Service needs. With a fleet of vehicles, including the luxurious Innova Crysta and compact yet spacious Ertiga, we ensure a reliable and timely airport transfer experience."
    },
    {
        "name": "Santa Cruz Airport Car Service",
        "description": "Looking for a Santa Cruz Airport Car Service? Vedant Travels offers various vehicle options, such as Sedans, Ertiga, or Innova Crysta. Our professional drivers ensure a comfortable, safe, and timely ride to your destination."
    },
    {
        "name": "Santacruz to Pune Innova Crysta",
        "description": "For a luxurious and comfortable ride from Santacruz to Pune, the Innova Crysta is an excellent choice. Enjoy added space and premium comfort along with a professional driver for a stress-free journey."
    },
    {
        "name": "Innova Crysta on Rent in Santacruz",
        "description": "Rent an Innova Crysta in Santacruz with Vedant Travels. Whether for business or family travel, our rental service ensures a smooth and comfortable experience. Flexible rental options and a well-maintained fleet make for a pleasant ride."
    },
    {
        "name": "Ertiga on Rent in Santacruz",
        "description": "Need an Ertiga on rent in Santacruz? Vedant Travels offers reliable and affordable Ertiga rentals. Ideal for families or small groups, enjoy a comfortable ride with professional drivers and flexible rental options."
    }
],


"tableData": [
    ["Santacruz to Pune Taxi Fare", "Santacruz Airport to Pune Taxi Fare"],
    ["Santacruz Airport to Pune One Way Taxi", "Mumbai to Pune Cab Booking"],
    ["Santacruz Airport to Pune Taxi Service", "Santacruz to Pune by Taxi"],
    ["Santacruz to Pune Innova Crysta", "Santacruz to Pune Ertiga Taxi"],
    ["Santacruz to Pune Sedan Taxi", "Mumbai International Airport to Pune Cab"],
    ["Cab Service in Santacruz West", "Best Cab Service in Santacruz"],
    ["Santacruz Airport Cab Service", "Santa Cruz Airport Car Service"],
    ["Santacruz to Pune Innova Crysta", "Innova Crysta on Rent in Santacruz"],
    ["Ertiga on Rent in Santacruz", ""]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we value your time. Whether you’re traveling from Santacruz to Pune for work, leisure, or any other purpose, our drivers ensure punctual pickups and timely drop-offs, making your journey smooth and stress-free."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicles",
      "WhyChoosedescription": "We offer a fleet of comfortable, spacious, and well-maintained vehicles for your Santacruz to Pune Cab ride. Choose from a variety of sedans, SUVs, and premium cars, all designed with ample legroom, air conditioning, and comfortable seating for an enjoyable trip."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our drivers are experienced, courteous, and well-trained for long-distance travel. They are familiar with the best routes from Santacruz to Pune, ensuring a safe, smooth, and efficient ride, so you can relax and enjoy the journey."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "Vedant Travels offers competitive pricing for your Santacruz to Pune Cab. Our pricing model is completely transparent, with no hidden charges, so you can be confident that you're getting the best value for your money."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Your safety is our priority. All of our vehicles are equipped with modern safety features, including seat belts, airbags, and GPS tracking. Our drivers adhere to strict safety protocols, ensuring that your journey from Santacruz to Pune is safe and secure."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "No matter the time of day or night, Vedant Travels is available 24/7. You can book your Santacruz to Pune Cab at any time, and our customer service team will be there to assist you, making sure your trip is seamless."
    },
    {
      "WhyChooseheading": "Hassle-Free Booking Process",
      "WhyChoosedescription": "Booking your Santacruz to Pune Cab is quick and easy. You can book online via our website or mobile app, or you can contact our customer service team for assistance. We aim to make the booking process as convenient as possible."
    },
    {
      "WhyChooseheading": "Customized Travel Packages",
      "WhyChoosedescription": "Whether you are traveling for business or leisure, we offer customized travel packages for your Santacruz to Pune trip. Share your travel preferences with us, and we’ll design a trip that meets your needs."
    }
  ]







    }

    const faqData = [
        {
            id: 1,
            question: 'How can I book a Santacruz to Pune cab with Vedant Travels?',
            answer: 'You can easily book your Santacruz to Pune Cab through our website or mobile app. Alternatively, you can reach out to our customer service team for personalized booking assistance.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are highly experienced in long-distance routes like Santacruz to Pune. They know the best routes and ensure a comfortable, safe, and efficient journey.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Santacruz to Pune travel?',
            answer: 'We offer a range of vehicles, including sedans, SUVs, and premium cars. All our vehicles are spacious, well-maintained, and designed to ensure a pleasant travel experience.',
        },
        {
            id: 4,
            question: 'How do I pay for my Santacruz to Pune cab rental?',
            answer: 'We accept multiple payment options, including cash, credit/debit cards, and online payments via our app, making the payment process convenient and hassle-free.',
        },
        {
            id: 5,
            question: 'Can I book a return trip along with my Santacruz to Pune cab?',
            answer: 'Yes, you can easily book a round-trip cab for your Santacruz to Pune journey. Just provide your return details at the time of booking, and we’ll ensure the entire journey is taken care of.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any extra charges for waiting time or detours will be communicated to you upfront during the booking process. We prioritize transparency in all our pricing.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing in Pune after my drop-off?',
            answer: 'Yes, we offer customized sightseeing tours in Pune after your Santacruz to Pune trip. Explore the city’s famous landmarks like Shaniwar Wada, Aga Khan Palace, and more with a professional driver.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Santacruz to Pune cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have more luggage or any special requirements, kindly inform us during the booking process, and we will ensure that your needs are met.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Santacruz and Pune?',
            answer: 'Yes, we offer corporate travel services for meetings, conferences, and team outings. We can tailor the service to your company’s specific needs, ensuring a comfortable and efficient experience.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Santacruz to Pune journey?',
            answer: 'Vedant Travels provides reliable, safe, and comfortable travel services, with experienced drivers, well-maintained vehicles, transparent pricing, and 24/7 availability. We guarantee a smooth and enjoyable Santacruz to Pune journey every time.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Raghav Patil",
            title: "Business Traveler",
            quote: "I traveled from Santacruz to Pune with Vedant Travels for a business trip. The driver was professional, the vehicle was clean and comfortable, and the journey was very smooth. I highly recommend their services!",
            rating: 5,
        },
        {
            name: "Mrs. Priya Gupta",
            title: "Family Traveler",
            quote: "We used Vedant Travels for our family trip from Santacruz to Pune. The driver was courteous, and the car was spacious and well-maintained. We had a great experience and will definitely use them again for our future trips.",
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
        "name": "Santacruz to Pune Cab | Vedant Travels",
        "description": "Book your Santacruz to Pune Cab with Vedant Travels. Offering reliable one-way, round-trip, and airport transfer services in Innova, Ertiga, and Sedan models for a comfortable and hassle-free journey.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.8",
          "ratingCount": "340"
        }
      };
      
    
      

    return (
        <div>
             <Helmet>
        <title>Santacruz to Pune Cab | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Santacruz to Pune Cab with Vedant Travels. Reliable one-way and round-trip taxi services offering Innova, Ertiga, and Sedan models for a smooth, comfortable journey. Affordable and safe." />
        <meta name="keywords" content="Santacruz to Pune Taxi Fare, Santacruz Airport to Pune Taxi Fare, Santacruz Airport to Pune One Way Taxi, Mumbai to Pune Cab Booking, Santacruz Airport to Pune Taxi Service, Santacruz to Pune by Taxi, Santacruz to Pune Innova Crysta, Santacruz to Pune Ertiga Taxi, Santacruz to Pune Sedan Taxi, Mumbai International Airport to Pune Cab, Cab Service in Santacruz West, Best Cab Service in Santacruz, Santacruz Airport Cab Service, Santa Cruz Airport Car Service, Santacruz to Pune Innova Crysta, Innova Crysta on Rent in Santacruz, Ertiga on Rent in Santacruz" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/santacruz-to-pune-cab" />
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
                            <img src='/images/keyword/35.jpg' alt='img' />
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

export default Santacruztopunecab;
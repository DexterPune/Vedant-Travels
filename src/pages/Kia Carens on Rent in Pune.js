
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Kiacarenceonrentinpune() {



    const cardData =
    {
        keyword: 'Kia Carens on Rent in Pune ',
        heading: 'Vedant Travels: Kia Carens on Rent in Pune ',
        headingDescription: 'Vedant Travels offers the Kia Carens on rent in Pune, a stylish, spacious, and comfortable vehicle perfect for group outings, family trips, and corporate travel. With its modern design, advanced features, and generous cabin space, the Kia Carens is an ideal choice for a smooth and enjoyable journey. Whether you are traveling within Pune or planning a road trip, the Kia Carens ensures a memorable travel experience.',

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
        "name": "Kia Carens Car Rental Service in Pimpri Chinchwad",
        "description": "Vedant Travels offers reliable Kia Carens car rental services in Pimpri Chinchwad. Whether you’re planning a local trip or an outstation journey, we ensure a comfortable and spacious ride with our well-maintained Kia Carens."
    },
    {
        "name": "Kia Carens on Rent in Pune for Outstation",
        "description": "Looking to rent a Kia Carens in Pune for an outstation trip? Vedant Travels provides affordable and reliable Kia Carens rentals for long-distance travel, ensuring a smooth and comfortable journey."
    },
    {
        "name": "Kia Carens on Hire for Corporate Events",
        "description": "For corporate events, Vedant Travels offers Kia Carens on hire. Our spacious and comfortable vehicles ensure your guests enjoy a luxurious ride for business events, conferences, or meetings."
    },
    {
        "name": "Pune to Mahabaleshwar Kia Carens on Rent in Pune",
        "description": "Vedant Travels offers Kia Carens for rent from Pune to Mahabaleshwar. Enjoy a comfortable and spacious journey with our well-maintained vehicles, ensuring a stress-free ride."
    },
    {
        "name": "Pune to Shirdi Kia Carens on Rent",
        "description": "For a smooth and comfortable ride from Pune to Shirdi, rent a Kia Carens from Vedant Travels. Our spacious vehicles ensure a comfortable journey for you and your family."
    },
    {
        "name": "Pune to Outstation Kia Carens on Rent",
        "description": "Rent a Kia Carens for your outstation travel from Pune with Vedant Travels. Our fleet includes well-maintained, comfortable vehicles suitable for long-distance journeys."
    },
    {
        "name": "Cab Service in Pune Kia Carens on Rent",
        "description": "Vedant Travels provides convenient cab services with Kia Carens on rent in Pune. Whether it’s a local or outstation trip, our spacious vehicles ensure a smooth and comfortable ride."
    },
    {
        "name": "Kia Carens on Rent in Pimpri Chinchwad",
        "description": "For reliable and comfortable Kia Carens rentals in Pimpri Chinchwad, choose Vedant Travels. We provide well-maintained Kia Carens vehicles for local and outstation trips."
    },
    {
        "name": "Kia Carens on Rent in Pune for Outstation",
        "description": "Rent a Kia Carens in Pune for your outstation trip with Vedant Travels. Our fleet of well-maintained Kia Carens provides a comfortable and spacious ride for long-distance travel."
    },
    {
        "name": "7 Seater Kia Carens on Rent in Pune",
        "description": "Vedant Travels offers 7-seater Kia Carens on rent in Pune. Ideal for family or group travel, our spacious vehicles provide comfort and convenience for local and outstation trips."
    },
    {
        "name": "Pune Local Kia Carens on Rent",
        "description": "Rent a Kia Carens for your local travel needs in Pune with Vedant Travels. Our well-maintained vehicles ensure a comfortable and smooth journey within the city."
    },
    {
        "name": "Pune to Outstation Kia Carens Taxi Fare Per Km",
        "description": "Vedant Travels offers competitive taxi fares for the Kia Carens for outstation trips. Our fare per km is affordable, ensuring a cost-effective yet comfortable journey."
    },
    {
        "name": "Kia Carens Car Rental Pune",
        "description": "Vedant Travels offers Kia Carens car rental services in Pune. Choose from a fleet of well-maintained Kia Carens vehicles for a comfortable and affordable journey."
    },
    {
        "name": "Kia Carens on Rent in Hinjewadi",
        "description": "Looking for a Kia Carens on rent in Hinjewadi? Vedant Travels offers spacious and reliable rental services for your local and outstation needs."
    },
    {
        "name": "Kia Carens on Rent in Kharadi Pune",
        "description": "Vedant Travels provides Kia Carens on rent in Kharadi, Pune. Whether you're going on a local trip or an outstation journey, enjoy a comfortable and spacious ride."
    },
    {
        "name": "Car Hire Agency in Viman Nagar Pune",
        "description": "For reliable car hire services in Viman Nagar, Pune, choose Vedant Travels. We offer well-maintained vehicles like the Kia Carens for your travel needs."
    },
    {
        "name": "Kia Carens on Rent in Magarpatta City",
        "description": "Rent a Kia Carens in Magarpatta City with Vedant Travels. Our spacious and well-maintained vehicles ensure a comfortable ride for both local and outstation trips."
    }
],


"tableData": [
    ["Kia Carens Car Rental Service in Pimpri Chinchwad", "Kia Carens on Rent in Pune for Outstation"],
    ["Kia Carens on Hire for Corporate Events", "Pune to Mahabaleshwar Kia Carens on Rent in Pune"],
    ["Pune to Shirdi Kia Carens on Rent", "Pune to Outstation Kia Carens on Rent"],
    ["Cab Service in Pune Kia Carens on Rent", "Kia Carens on Rent in Pimpri Chinchwad"],
    ["Kia Carens on Rent in Pune for Outstation", "7 Seater Kia Carens on Rent in Pune"],
    ["Pune Local Kia Carens on Rent", "Pune to Outstation Kia Carens Taxi Fare Per Km"],
    ["Kia Carens Car Rental Pune", "Kia Carens on Rent in Hinjewadi"],
    ["Kia Carens on Rent in Kharadi Pune", "Car Hire Agency in Viman Nagar Pune"],
    ["Kia Carens on Rent in Magarpatta City", ""]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we prioritize punctuality and reliability. Whether you need the Kia Carens for a business trip, family outing, or any special occasion in Pune, we ensure timely delivery and pickup of the vehicle to make your journey stress-free."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicle",
      "WhyChoosedescription": "The Kia Carens offers premium comfort with spacious interiors and luxurious seating. It’s an ideal vehicle for long trips, family outings, or group travel, offering ample legroom and state-of-the-art amenities to ensure a smooth and enjoyable ride."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our professional drivers are well-trained and experienced in handling Kia Carens rentals. They know the best routes, follow safe driving practices, and provide excellent customer service for a seamless and comfortable ride."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "Vedant Travels offers competitive and transparent pricing for Kia Carens rentals in Pune. Our pricing structure is clear with no hidden charges, ensuring you get the best value for your money with a premium vehicle."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Safety is our priority. The Kia Carens is equipped with modern safety features, including airbags, seat belts, and advanced braking systems. Our drivers adhere to all safety protocols to provide you with a secure and comfortable journey."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "Whether it’s a morning flight or a late-night return, Vedant Travels offers 24/7 availability for Kia Carens rentals in Pune. Our customer service team is always ready to assist you with bookings at any time of the day or night."
    },
    {
      "WhyChooseheading": "Hassle-Free Booking Process",
      "WhyChoosedescription": "Booking a Kia Carens with Vedant Travels is quick and easy. You can book online through our website or mobile app, or you can call our customer service team for personalized assistance. We aim to make your booking experience smooth and convenient."
    },
    {
      "WhyChooseheading": "Customizable Travel Packages",
      "WhyChoosedescription": "Whether you're planning a short trip within Pune or an extended road trip, we offer customizable travel packages for the Kia Carens rental. Share your requirements with us, and we’ll tailor the package to suit your needs."
    }
  ]

    }



    const faqData = [
        {
            id: 1,
            question: 'How can I rent a Kia Carens in Pune?',
            answer: 'You can easily rent a Kia Carens online through our website or mobile app. Alternatively, you can contact our customer service team, and we will assist you with the booking process.',
        },
        {
            id: 2,
            question: 'What is the seating capacity of the Kia Carens?',
            answer: 'The Kia Carens comfortably seats 7 passengers, making it an ideal choice for group travel, family outings, or corporate trips.',
        },
        {
            id: 3,
            question: 'Is the Kia Carens suitable for long-distance travel in Pune and nearby areas?',
            answer: 'Yes, the Kia Carens is perfect for both short and long-distance travel. Whether you’re planning a local sightseeing tour or a road trip to nearby cities, it ensures a smooth and comfortable ride.',
        },
        {
            id: 4,
            question: 'What payment methods do you accept for Kia Carens rentals?',
            answer: 'We accept multiple payment options, including cash, credit/debit cards, and online payment through our mobile app, making it easy and convenient to pay for your Kia Carens rental.',
        },
        {
            id: 5,
            question: 'Can I rent a Kia Carens for a one-way trip from Pune to Mumbai or other cities?',
            answer: 'Yes, you can rent a Kia Carens for one-way trips from Pune to Mumbai or other cities. Simply provide us with the details of your trip, and we will arrange the rental for you.',
        },
        {
            id: 6,
            question: 'Are there any additional charges for the Kia Carens rental?',
            answer: 'Any additional charges, such as fuel costs, tolls, or extra waiting time, will be communicated to you upfront during the booking process. We believe in clear and transparent pricing.',
        },
        {
            id: 7,
            question: 'Can I use the Kia Carens for sightseeing tours in Pune?',
            answer: 'Yes, the Kia Carens is perfect for sightseeing in and around Pune. We can customize a sightseeing tour based on your preferences and show you the city’s top attractions, ensuring a comfortable and enjoyable trip.',
        },
        {
            id: 8,
            question: 'What is the luggage capacity of the Kia Carens?',
            answer: 'The Kia Carens offers ample luggage space, making it suitable for family trips or long-distance travel. If you have specific luggage needs, feel free to inform us at the time of booking, and we will make arrangements accordingly.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel with the Kia Carens?',
            answer: 'Yes, we offer Kia Carens rentals for corporate travel. Whether you need the vehicle for meetings, events, or business conferences, we can provide a customized service tailored to your company’s travel requirements.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for Kia Carens rental in Pune?',
            answer: 'Vedant Travels is known for its reliable service, well-maintained vehicles, professional drivers, and affordable pricing. We ensure you have a safe, comfortable, and enjoyable experience when you rent the Kia Carens with us.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Rajesh Kumar",
            title: "Family Traveler",
            quote: "We rented a Kia Carens for a family trip around Pune, and the experience was fantastic. The vehicle was spacious, clean, and comfortable. The driver was professional, and we had a smooth and enjoyable journey.",
            rating: 5,
        },
        {
            name: "Ms. Sonali Mehta",
            title: "Business Traveler",
            quote: "I hired a Kia Carens for a business trip, and I was very impressed with the service. The vehicle was perfect for our group, and the driver was prompt and courteous. I would definitely recommend Vedant Travels for anyone looking to rent a vehicle in Pune.",
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
        "name": "Kia Carens On Rent in Pune | Vedant Travels",
        "description": "Book your Kia Carens on rent in Pune for outstation trips, corporate events, and local travel. Offering 7-seater Kia Carens rental services for Mahabaleshwar, Shirdi, and other outstation destinations. Available in areas like Pimpri Chinchwad, Hinjewadi, Kharadi, and more.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.9",
          "ratingCount": "210"
        }
      };
      
    
      


    return (
        <div>
             <Helmet>
        <title>Kia Carens On Rent in Pune | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book a Kia Carens on rent in Pune for outstation trips, corporate events, or local travel. 7-seater Kia Carens rental available for Mahabaleshwar, Shirdi, Hinjewadi, Kharadi, and more." />
        <meta name="keywords" content="Kia Carens Car Rental Service in Pimpri Chinchwad, Kia Carens On Rent in Pune for Outstation, Kia Carens on Hire for Corporate Events, Pune to Mahabaleshwar Kia Carens on Rent, Pune to Shirdi Kia Carens on Rent, Pune to Outstation Kia Carens on Rent, Cab Service in Pune Kia Carens on Rent, Kia Carens on Rent in Pimpri Chinchwad, Kia Carens On Rent in Pune for Outstation, 7 Seater Kia Carens on Rent in Pune, Pune Local Kia Carens on Rent, Kia Carens Taxi Fare per Km, Kia Carens on Rent in Hinjewadi, Kia Carens on Rent in Kharadi Pune, Car Hire Agency in Viman Nagar Pune, Kia Carens on Rent in Magarpatta City" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/kia-carens-on-rent-in-pune" />
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
                            <img src='./images/keyword/69.jpg' alt='img' />
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

export default Kiacarenceonrentinpune;

import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Punetomumbaionewaycab() {



    const cardData =
    {
        keyword: 'Pune to Mumbai One Way Cab Service',
        heading: 'Vedant Travels: Pune to Mumbai One Way Cab Service',
        headingDescription: 'Vedant Travels offers a reliable and comfortable one-way cab service from Pune to Mumbai, ensuring a hassle-free travel experience. Whether you are traveling for business, leisure, or an airport transfer, our fleet of well-maintained sedans, SUVs, and luxury cars caters to all travel needs. Our professional drivers ensure a safe and smooth journey, and we provide flexible pickup and drop-off options. With 24/7 availability, affordable fares, and an easy online booking system, Vedant Travels makes your Pune to Mumbai one-way travel convenient and stress-free.',

        top: 'Top Places to Visit in Mumbai with Vedant Travels',

 "topPlaces": [
    {
        "title": "Gateway of India",
        "description": "One of Mumbai’s most iconic landmarks, the Gateway of India was built in 1924 and overlooks the Arabian Sea. It is a must-visit historical site and a popular tourist attraction."
    },
    {
        "title": "Marine Drive",
        "description": "Also known as the Queen’s Necklace, Marine Drive is a beautiful coastal boulevard perfect for a scenic drive, evening strolls, and enjoying the Mumbai skyline."
    },
    {
        "title": "Elephanta Caves",
        "description": "A UNESCO World Heritage Site, these rock-cut caves are located on Elephanta Island and feature stunning sculptures of Lord Shiva dating back to the 5th century."
    },
    {
        "title": "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
        "description": "A masterpiece of Victorian Gothic architecture, CSMT is a UNESCO-listed railway station and an important landmark in Mumbai."
    },
    {
        "title": "Siddhivinayak Temple",
        "description": "One of the most revered temples in Mumbai, Siddhivinayak Temple is dedicated to Lord Ganesha and attracts thousands of devotees daily."
    },
    {
        "title": "Juhu Beach",
        "description": "A famous beach in Mumbai, Juhu Beach is perfect for enjoying street food, evening walks, and stunning sunset views over the Arabian Sea."
    },
    {
        "title": "Bandra-Worli Sea Link",
        "description": "This modern engineering marvel connects Bandra and Worli and offers breathtaking views of the city skyline and the sea."
    },
    {
        "title": "Colaba Causeway",
        "description": "A paradise for shoppers, Colaba Causeway is known for its vibrant street shopping, boutiques, cafés, and historic buildings."
    },
    {
        "title": "Haji Ali Dargah",
        "description": "Located on an islet in the Arabian Sea, Haji Ali Dargah is a spiritual and architectural marvel visited by people of all faiths."
    },
    {
        "title": "Film City",
        "description": "The heart of Bollywood, Film City offers guided tours showcasing movie sets, film studios, and a glimpse into the world of Indian cinema."
    }
],


services: [
    {
        "name": "Pune to Mumbai One-Way Cab Services by Vedant Travels",
        "description": "Looking for a one-way ride from Pune to Mumbai? Vedant Travels offers convenient and reliable one-way cab services, ensuring you have a comfortable and hassle-free journey. Whether you’re traveling for business, leisure, or need a ride to the airport, we provide top-quality vehicles and professional drivers."
    },
    {
        "name": "Pune to Mumbai One-Way Cab",
        "description": "Book your one-way cab from Pune to Mumbai with Vedant Travels for a smooth and comfortable ride. We offer competitive pricing with no hidden charges, ensuring your trip is as cost-effective as it is convenient."
    },
    {
        "name": "Pune to Mumbai Taxi One-Way",
        "description": "Whether you're traveling solo or with a group, Vedant Travels provides reliable one-way taxi services from Pune to Mumbai. Our fleet includes a range of vehicles, from compact sedans to spacious SUVs, ensuring you get the right vehicle for your journey."
    },
    {
        "name": "Pune Mumbai Cab One-Way",
        "description": "With Vedant Travels, you can enjoy a stress-free one-way ride from Pune to Mumbai. Choose from a variety of vehicles, including the Innova, Ertiga, or sedan cabs, for a journey tailored to your needs."
    },
    {
        "name": "One-Way Cab Pune to Mumbai Airport",
        "description": "Need a one-way cab from Pune to Mumbai Airport? Vedant Travels provides reliable airport cab services for a timely drop-off at Chhatrapati Shivaji International Airport. Our experienced drivers ensure a smooth and safe ride, getting you to your terminal on time."
    },
    {
        "name": "One-Way Mumbai to Pune",
        "description": "Planning to return from Mumbai to Pune? Vedant Travels offers one-way cab services for your return journey, ensuring a comfortable and timely ride. Book a cab for a seamless travel experience from Mumbai to Pune."
    },
    {
        "name": "One-Way Pune to Mumbai",
        "description": "If you're traveling from Pune to Mumbai for a one-way trip, Vedant Travels is your trusted choice for a safe and reliable ride. We offer competitive pricing with no hidden charges, ensuring your journey is affordable and convenient."
    },
    {
        "name": "Pune to Mumbai One-Way Innova Crysta Taxi Cab",
        "description": "For a premium one-way ride, book an Innova Crysta taxi with Vedant Travels. The Innova Crysta offers luxury, comfort, and ample space, making it perfect for those who want a high-end travel experience."
    },
    {
        "name": "Pune to Mumbai Airport One-Way Cab",
        "description": "Book a one-way cab from Pune to Mumbai Airport with Vedant Travels for a timely, comfortable, and stress-free journey. Our drivers are familiar with the best routes to ensure you get to the airport on time for your flight."
    },
    {
        "name": "Pune to Mumbai One-Way Sedan Taxi Cab",
        "description": "For those who prefer a sedan, Vedant Travels offers affordable one-way sedan taxi services from Pune to Mumbai. Whether you're traveling alone or with a small group, our sedan cabs provide a smooth and comfortable ride."
    },
    {
        "name": "One-Way Cab Booking Pune to Mumbai",
        "description": "Booking a one-way cab from Pune to Mumbai is easy with Vedant Travels. Simply call or book online to secure your ride. We offer flexible booking options to suit your travel schedule."
    },
    {
        "name": "Pune to Mumbai Cab Round Trip",
        "description": "Vedant Travels also offers round-trip cab services from Pune to Mumbai. Whether you're traveling for business or leisure, our round-trip service ensures you have a reliable ride both ways."
    },
    {
        "name": "Pune to Mumbai Ertiga Cab",
        "description": "Traveling with family or a small group? Book an Ertiga cab for your one-way journey from Pune to Mumbai. The Ertiga offers a spacious and comfortable ride at an affordable price, making it perfect for longer trips."
    },
    {
        "name": "Pune to Mumbai Innova Cab",
        "description": "For extra comfort and space, book an Innova cab with Vedant Travels. Ideal for one-way trips from Pune to Mumbai, the Innova provides a luxurious ride for solo travelers or groups."
    },
    {
        "name": "Pune to Mumbai Taxi Services",
        "description": "Whether you need a one-way cab for a quick trip or a round trip for your travel needs, Vedant Travels offers reliable and professional taxi services between Pune and Mumbai. Our vehicles are well-maintained to ensure your comfort and safety."
    },
    {
        "name": "One-Way Cab",
        "description": "Vedant Travels specializes in one-way cab services, ensuring you have a smooth and comfortable journey between Pune and Mumbai, or vice versa. We offer a wide range of vehicles to meet your travel needs."
    },
    {
        "name": "Pune to Mumbai Taxi Service One-Way Cab Service",
        "description": "For one-way travel from Pune to Mumbai, choose Vedant Travels for a safe, affordable, and comfortable taxi ride. Our one-way services ensure that you arrive on time and enjoy a pleasant journey."
    },
    {
        "name": "Pune to Mumbai Airport Cab Fare",
        "description": "Vedant Travels offers competitive pricing for one-way cab services from Pune to Mumbai Airport. Our pricing is transparent, with no hidden costs, ensuring you can plan your trip without any surprises."
    },
    {
        "name": "Cheapest Cab from Pune to Mumbai Airport",
        "description": "Looking for an affordable ride? Vedant Travels offers budget-friendly one-way cab services to Mumbai Airport. We provide comfort, reliability, and affordability all in one package."
    },
    {
        "name": "Best Cab Service Pune to Mumbai",
        "description": "Vedant Travels is the best choice for one-way and round-trip cab services between Pune and Mumbai. With well-maintained vehicles and professional drivers, we ensure a smooth and enjoyable journey every time."
    },
    {
        "name": "Pune to Mumbai One-Way Vedant Travels",
        "description": "For a hassle-free, one-way ride from Pune to Mumbai, choose Vedant Travels. We offer transparent pricing, flexible booking options, and a fleet of comfortable vehicles for a convenient travel experience."
    },
    {
        "name": "Pune to Mumbai One-Way Ertiga Cab",
        "description": "For a one-way ride from Pune to Mumbai with extra space and comfort, book an Ertiga cab with Vedant Travels. Ideal for families or small groups, the Ertiga ensures a smooth and enjoyable journey."
    },
    {
        "name": "Pune to Mumbai Airport Cab",
        "description": "Choose Vedant Travels for your one-way cab from Pune to Mumbai Airport. Our experienced drivers ensure timely arrival at the airport, with a comfortable and smooth ride all the way."
    },
    {
        "name": "Pune to Mumbai Contact Information",
        "description": "Contact Vedant Travels at +91 8177869909 for prompt and efficient one-way cab services from Pune to Mumbai. Whether you're traveling to Mumbai for business, leisure, or catching a flight, we ensure a smooth and stress-free journey. Book your one-way ride today!"
    }
],


tableData: [
    ["Pune to Mumbai airport", "-Pune to Chhatrapati Shivaji International Airport cab"],
    ["Pune to Mumbai domestic airport cab", "-Pune to Chhatrapati Shivaji International Airport"],
    ["Pune to Mumbai international airport Innova Crysta taxi", "-Pune to Mumbai international airport drop"],
    ["Pune to Mumbai international airport one way cab", "-Pune to Mumbai international airport Ertiga cab"],
    ["Pune to Mumbai Ertiga cab", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Vedant Travels, we understand that timely arrivals at Mumbai International Airport are crucial for your flight. Our drivers ensure punctual pickups and drop-offs, so you can relax knowing you’ll reach the airport on time for your international flight."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Travel comfortably with our well-maintained, spacious vehicles. Equipped with air conditioning and comfortable seating, our vehicles provide a smooth and relaxing ride, allowing you to rest before your journey."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are experienced in handling airport transfers, particularly long-distance routes like Pune to Mumbai International Airport. They are skilled at navigating the best routes, ensuring a safe, efficient, and timely trip."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Vedant Travels offers competitive rates for Pune to Mumbai International Airport transfers with no hidden charges. Our transparent pricing ensures you know exactly what you’re paying for, with no surprises along the way."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our top priority. Our vehicles are regularly serviced and equipped with modern safety features, such as airbags, seat belts, and GPS tracking. Our professional drivers follow strict safety protocols, making your journey secure and comfortable."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether you have an early morning flight or a late-night arrival, Vedant Travels is available 24/7 for your airport transfer needs. Our round-the-clock service ensures you never miss your flight."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a cab for your Pune to Mumbai International Airport transfer is simple. You can book online via our website or mobile app, or call our customer service team to assist you with the booking process."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer flexible packages for your airport transfer needs. Whether you're traveling alone, with family, or for business, we can tailor the service to fit your preferences and travel schedule."
    }
]








    }


  const faqData = [
    {
        id: 1,
        question: 'How can I book a Pune to Mumbai one-way cab with Vedant Travels?',
        answer: 'You can easily book your one-way trip online through our website or mobile app. Alternatively, you can call our customer service team to assist with your booking.',
    },
    {
        id: 2,
        question: 'Are the drivers experienced for long-distance travel?',
        answer: 'Yes, our drivers are highly trained and experienced in handling long-distance routes like Pune to Mumbai, ensuring a safe and smooth journey.',
    },
    {
        id: 3,
        question: 'What types of vehicles are available for Pune to Mumbai one-way travel?',
        answer: 'We offer a variety of well-maintained vehicles, including sedans, SUVs, and luxury cars. All our vehicles are spacious, clean, and comfortable for long trips.',
    },
    {
        id: 4,
        question: 'How do I pay for my Pune to Mumbai one-way cab rental?',
        answer: 'We accept various payment methods, including cash, credit/debit cards, and online payment via our app, making payment easy and convenient.',
    },
    {
        id: 5,
        question: 'Can I book a return trip from Mumbai to Pune as well?',
        answer: 'Yes, you can book a round-trip cab. Just provide your return details at the time of booking, and we will make the necessary arrangements.',
    },
    {
        id: 6,
        question: 'Are there any extra charges for waiting or detours?',
        answer: 'Any additional charges for waiting time or detours will be communicated to you upfront, ensuring complete transparency and no surprises.',
    },
    {
        id: 7,
        question: 'Can I hire a cab for sightseeing in Mumbai after my one-way drop-off?',
        answer: 'Yes, we offer customized sightseeing tours in Mumbai. Explore popular landmarks like the Gateway of India, Marine Drive, and more after your one-way trip drop-off.',
    },
    {
        id: 8,
        question: 'What is the luggage allowance for a Pune to Mumbai one-way cab?',
        answer: 'Our vehicles are designed to accommodate standard luggage. If you have extra luggage or special requirements, let us know at the time of booking, and we’ll make necessary arrangements.',
    },
    {
        id: 9,
        question: 'Is Vedant Travels available for corporate travel between Pune and Mumbai?',
        answer: 'Yes, we offer corporate travel solutions for one-way trips between Pune and Mumbai, providing customized packages for business meetings, conferences, or team outings.',
    },
    {
        id: 10,
        question: 'Why should I choose Vedant Travels for Pune to Mumbai one-way travel?',
        answer: 'Vedant Travels offers reliable, affordable, and comfortable one-way trips. With professional drivers, well-maintained vehicles, and transparent pricing, we ensure a smooth, safe, and stress-free journey for all your travel needs.',
    },
];

const testimonials = [
    {
        name: "Mr. Anil Kapoor",
        title: "Customer",
        quote: "I used Vedant Travels for a one-way trip from Pune to Mumbai for a business meeting, and the experience was great. The driver was professional, and the vehicle was comfortable. I arrived on time and without any hassle!",
        rating: 5,
    },
    {
        name: "Mrs. Rina Shah",
        title: "Customer",
        quote: "Our family booked a one-way cab with Vedant Travels for a trip to Mumbai. The vehicle was spacious, clean, and well-maintained. The driver was friendly, and we had a smooth journey from Pune to Mumbai. Highly recommend!",
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
        "name": "Pune to Mumbai One Way Cab Service | Vedant Travels",
        "description": "Book reliable and affordable one-way cab services from Pune to Mumbai with Vedant Travels. Choose from a range of vehicles like Innova Crysta, Ertiga, and more for a comfortable journey. Whether you're heading to Mumbai airport or need a one-way transfer, we've got you covered with the best pricing and quality service.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.8",
          "ratingCount": "1500"
        }
      };
      
     


    return (
        <div>
            <Helmet>
        <title>Pune to Mumbai One Way Cab | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Get the best one-way Pune to Mumbai cab services with Vedant Travels. Choose from Innova Crysta, Ertiga, and other vehicles for a comfortable one-way ride. Book your cab for a one-way journey now!" />
        <meta name="keywords" content="pune to mumbai one way cab, pune to mumbai taxi one way, pune mumbai cab one way, one way cab pune to mumbai airport, one way mumbai to pune, one way pune to mumbai, pune to mumbai one way innova crysta taxi cab, pune to mumbai airport one way cab, pune to mumbai one way sedan taxi cab, one way cab booking pune to mumbai, Pune to Mumbai Cab round Trip, pune to mumbai ertiga cab, Pune to Mumbai Innova Cab, Pune To Mumbai Taxi Services, One Way Cab, pune to mumbai taxi service one way cab service, pune to mumbai airport cab fare, cheapest cab from pune to mumbai airport, Best cab service Pune to Mumbai, Pune to mumbai one way Vedant Travels, pune to mumbai one way ertiga cab" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/pune-to-mumbai-one-way-cab" />
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
                            <img src='./images/keyword/4.jpg' alt='img' />
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

export default Punetomumbaionewaycab;
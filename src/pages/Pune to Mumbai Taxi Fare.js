
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Punetomumbaitaxifare() {



    const cardData =
    {
        keyword: 'Pune to Mumbai Taxi Fare ',
        heading: 'Vedant Travels: Pune to Mumbai Taxi Fare ',
        headingDescription: 'Vedant Travels offers affordable and transparent taxi fares for Pune to Mumbai travel, ensuring a cost-effective and comfortable journey. Our pricing is competitive, with no hidden charges, and we provide multiple cab options to suit your budget and preferences.',

        top: 'Top Places to Visit in Mumbai with Vedant Travels',

"topPlaces": [
    {
        "title": "Gateway of India",
        "description": "One of Mumbai’s most iconic landmarks, built in 1924 to commemorate the visit of King George V and Queen Mary. Overlooking the Arabian Sea, this magnificent structure is a favorite among tourists for sightseeing and photography. You can also take a ferry from here to visit Elephanta Caves."
    },
    {
        "title": "Marine Drive",
        "description": "Also known as the Queen’s Necklace, Marine Drive is a 3.6 km-long boulevard along the coastline of Mumbai. It’s the perfect spot for an evening stroll, enjoying the sea breeze, or watching the sunset. At night, the streetlights form a stunning arc that resembles a necklace, making it one of the most picturesque locations in Mumbai."
    },
    {
        "title": "Elephanta Caves",
        "description": "A UNESCO World Heritage Site, the Elephanta Caves are located on Elephanta Island and feature ancient rock-cut temples dedicated to Lord Shiva. The caves date back to the 5th–7th centuries and are known for their intricate sculptures and carvings. A ferry ride from the Gateway of India takes you to this historical site, offering a blend of nature, history, and spirituality."
    },
    {
        "title": "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
        "description": "A masterpiece of Victorian Gothic architecture, CSMT is not just a railway station but a UNESCO-listed historic site. The station, formerly known as Victoria Terminus, features grand turrets, stained glass windows, and intricate stone carvings, showcasing the colonial-era grandeur of Mumbai."
    },
    {
        "title": "Siddhivinayak Temple",
        "description": "One of the most revered Hindu temples in Mumbai, Siddhivinayak Temple is dedicated to Lord Ganesha. Thousands of devotees visit the temple daily to seek blessings, including Bollywood celebrities and politicians. The temple’s beautiful architecture and spiritual ambiance make it a must-visit."
    },
    {
        "title": "Juhu Beach",
        "description": "Juhu Beach is among the most famous beaches in Mumbai, known for its lively atmosphere and delicious street food. Whether you want to relax by the sea, take a camel ride, or try local delicacies like pav bhaji, vada pav, and bhel puri, this beach has something for everyone. It's also a popular spot for catching a mesmerizing sunset."
    },
    {
        "title": "Colaba Causeway",
        "description": "If you love shopping, Colaba Causeway is the place to be. This bustling street market is filled with stalls selling jewelry, handicrafts, clothes, antiques, and souvenirs. Besides shopping, you can also explore the charming cafés and restaurants in the area, such as Leopold Café, a historic eatery loved by tourists."
    },
    {
        "title": "Haji Ali Dargah",
        "description": "Situated on a small islet off the coast of Worli, Haji Ali Dargah is a significant religious and architectural landmark in Mumbai. This Indo-Islamic shrine is dedicated to the Sufi saint Haji Ali and is accessible via a narrow causeway that gets submerged during high tide. The dargah’s serene atmosphere and breathtaking views make it a must-visit destination."
    },
    {
        "title": "Bandra-Worli Sea Link",
        "description": "An architectural marvel, the Bandra-Worli Sea Link is an eight-lane bridge that connects South Mumbai to the suburbs. The cable-stayed bridge offers spectacular views of the Arabian Sea and Mumbai’s skyline, especially when illuminated at night. It significantly reduces travel time between Bandra and Worli, making it a vital part of Mumbai’s infrastructure."
    },
    {
        "title": "Bollywood Film City",
        "description": "Mumbai is the heart of the Indian film industry, and Film City in Goregaon offers visitors a chance to witness Bollywood magic up close. With multiple studios, sets, and backdrops, Film City is where countless Bollywood movies and TV shows are filmed. Guided tours provide an exclusive behind-the-scenes look at Mumbai’s thriving cinema industry, making it a must-visit for movie buffs."
    }
],


services: [
    {
        "name": "Pune to Mumbai Cab Fare by Vedant Travels",
        "description": "Looking for affordable and transparent pricing for your ride from Pune to Mumbai? Vedant Travels offers competitive and clear fare structures to ensure you get the best value for your journey. Our prices are tailored to suit your needs, whether you are traveling solo, with a group, or need a premium ride."
    },
    {
        "name": "Pune to Mumbai Taxi Charges",
        "description": "Vedant Travels provides affordable taxi services from Pune to Mumbai. Our fare structure is designed to offer competitive pricing while ensuring comfort and safety. We offer various vehicle options to suit your budget and requirements."
    },
    {
        "name": "Taxi Fare from Pune to Mumbai Airport",
        "description": "Traveling from Pune to Mumbai Airport? Vedant Travels offers taxi services at affordable rates, ensuring a comfortable and timely ride. Our drivers are experienced and familiar with the best routes to get you to the airport on time."
    },
    {
        "name": "Pune to Mumbai Cheap Cabs",
        "description": "Looking for an economical travel option between Pune and Mumbai? Vedant Travels offers cheap cab services without compromising on comfort or quality. Choose from our variety of vehicles for an affordable yet pleasant journey."
    },
    {
        "name": "Best Cab Service Pune to Mumbai",
        "description": "Choose Vedant Travels for the best cab service from Pune to Mumbai. Our fleet includes well-maintained vehicles, professional drivers, and excellent customer service, ensuring a smooth and hassle-free ride every time."
    },
    {
        "name": "Best Cab Service from Pune to Mumbai Airport",
        "description": "For a reliable and comfortable ride to Mumbai Airport, book with Vedant Travels. We offer the best cab service with affordable pricing, experienced drivers, and timely arrivals to ensure you never miss your flight."
    },
    {
        "name": "Best Mumbai Pune Cab Service",
        "description": "When it comes to traveling between Mumbai and Pune, Vedant Travels provides the best cab services. We offer a wide range of vehicles, including premium options like the Innova and Ertiga, ensuring a safe and comfortable ride."
    },
    {
        "name": "Best Pune to Mumbai Cab Service",
        "description": "Whether you're traveling for business, leisure, or need a reliable airport transfer, Vedant Travels offers the best Pune to Mumbai cab services. We prioritize customer satisfaction, punctuality, and comfort on every ride."
    },
    {
        "name": "Pune to Mumbai Ertiga Cab",
        "description": "For those traveling with family or in groups, the Ertiga is a perfect choice. Book an Ertiga cab with Vedant Travels for a comfortable, spacious, and affordable ride from Pune to Mumbai."
    },
    {
        "name": "Pune to Mumbai Innova Cab",
        "description": "The Innova is a perfect choice for those looking for extra space and comfort. Whether you're traveling alone, with family, or in a group, the Innova provides a luxurious and reliable ride from Pune to Mumbai."
    },
    {
        "name": "Pune to Mumbai Fare by Cab",
        "description": "Looking for the fare details for a cab from Pune to Mumbai? Vedant Travels offers clear and transparent fare structures for your convenience. Whether you need a one-way trip or a round trip, we ensure that our prices are affordable and reasonable."
    },
    {
        "name": "Pune to Mumbai Round Trip Cab Fare",
        "description": "Vedant Travels offers round-trip cab services from Pune to Mumbai with competitive pricing. Book a round-trip journey and enjoy flexibility and comfort with a well-maintained vehicle and professional driver."
    },
    {
        "name": "Pune to Mumbai Shared Cab Fare",
        "description": "For budget-conscious travelers, Vedant Travels offers shared cab services from Pune to Mumbai. Share the ride and reduce the cost, without compromising on comfort or safety."
    },
    {
        "name": "Pune to Mumbai Taxi Charges",
        "description": "At Vedant Travels, we ensure that our taxi charges from Pune to Mumbai are clear and competitive. Contact us for an accurate fare estimate, based on your travel preferences and requirements."
    },
    {
        "name": "Taxi Fare from Pune to Mumbai Airport",
        "description": "Traveling to Mumbai Airport from Pune? Vedant Travels offers affordable taxi fare options to suit your budget. Our fares are transparent, ensuring there are no hidden charges for your airport journey."
    },
    {
        "name": "Pune to Mumbai Innova Crysta Taxi Fare",
        "description": "For a premium and comfortable ride, choose an Innova Crysta taxi for your Pune to Mumbai journey. Our competitive pricing ensures you travel in style and comfort without breaking the bank."
    },
    {
        "name": "Pune to Mumbai Airport Drop Innova Taxi Fare",
        "description": "If you need a drop to Mumbai Airport in an Innova, Vedant Travels offers a clear and competitive fare for this service. The Innova is ideal for those who need extra space and comfort for their journey."
    },
    {
        "name": "Pune to Mumbai Ertiga Taxi Fare",
        "description": "The Ertiga is a spacious and affordable option for your Pune to Mumbai journey. Vedant Travels provides transparent pricing for Ertiga cabs, offering a comfortable ride at a reasonable cost."
    },
    {
        "name": "Pune to Mumbai Cab Round Trip",
        "description": "Vedant Travels offers round-trip services from Pune to Mumbai with competitive pricing and flexible options. Our round-trip fares ensure a hassle-free journey with a reliable return service."
    },
    {
        "name": "Pune to Mumbai Vedant Travels Taxi Fare",
        "description": "For the most reliable and affordable taxi services from Pune to Mumbai, choose Vedant Travels. Our taxi fares are competitive and transparent, ensuring you know exactly what you're paying for before you travel."
    },
    {
        "name": "Pune to Mumbai Contact Information",
        "description": "For booking and inquiries, contact Vedant Travels at +91 8177869909. We provide affordable, reliable, and comfortable taxi services for your journey from Pune to Mumbai, ensuring a smooth and stress-free experience."
    }
],


tableData: [
    ["Pune to Mumbai fare by cab", "-Pune to Mumbai taxi charges"],
    ["Taxi fare from Pune to Mumbai airport", "-Pune to Mumbai cheap cabs"],
    ["Best cab service Pune to Mumbai", "-Best cab service from Pune to Mumbai airport"],
    ["Best Mumbai Pune cab service", "-Best Pune to Mumbai cab service"],
    ["Pune to Mumbai Ertiga cab", "-Pune to Mumbai Innova Cab"],
    ["Pune to Mumbai fare by cab", "-Pune to Mumbai round trip cab fare"],
    ["Pune to Mumbai shared cab fare", "-Pune to Mumbai taxi charges"],
    ["Taxi fare from Pune to Mumbai airport", "-Pune to Mumbai Innova Crysta taxi fare"],
    ["Pune to Mumbai airport drop Innova taxi fare", "-Pune to Mumbai Ertiga taxi fare"],
    ["Pune to Mumbai cab round trip", "-Pune to Mumbai Vedant Travels taxi fare"]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Vedant Travels, we understand the importance of punctuality, especially for long-distance taxi journeys like Pune to Mumbai. Our drivers ensure timely pickups and drop-offs, ensuring you have a smooth and stress-free experience."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Taxi Fare",
        "WhyChoosedescription": "We offer competitive and transparent pricing for your Pune to Mumbai taxi ride. With Vedant Travels, you won’t have to worry about hidden charges. Our fares are clearly communicated upfront, ensuring a straightforward pricing experience."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We provide well-maintained and spacious vehicles for your taxi journey. Whether you’re traveling alone or with family, our vehicles offer plenty of space and comfort to make your ride as enjoyable as possible."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are experienced in long-distance travel, especially the Pune to Mumbai route. They are professional, courteous, and knowledgeable, ensuring your journey is safe, smooth, and efficient."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our top priority. All our taxis are equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers adhere to strict safety standards, ensuring your journey is both secure and comfortable."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether you need a taxi for an early morning ride or a late-night journey, Vedant Travels is available round the clock. Our 24/7 service ensures that you can book a taxi at your convenience, anytime for your Pune to Mumbai travel."
    },
    {
        "WhyChooseheading": "Easy Booking Process",
        "WhyChoosedescription": "Booking a taxi from Pune to Mumbai is simple with Vedant Travels. You can book your ride through our website or mobile app, or contact our customer service team for assistance with your booking."
    },
    {
        "WhyChooseheading": "Flexible Pricing Options",
        "WhyChoosedescription": "We offer flexible pricing options based on the vehicle type, route, and time of travel. Our team will help you choose the best option that fits your budget while maintaining the quality of service."
    }
],









    }


    const faqData = [
        {
            id: 1,
            question: 'What is the fare for a Pune to Mumbai taxi ride?',
            answer: 'The fare for a Pune to Mumbai taxi ride depends on the type of vehicle, travel time, and any additional services you may need. For exact pricing, please visit our website or contact us for a customized quote.',
        },
        {
            id: 2,
            question: 'How can I book a Pune to Mumbai taxi with Vedant Travels?',
            answer: 'You can easily book your taxi online via our website or mobile app. Alternatively, you can call our customer service team for assistance with booking.',
        },
        {
            id: 3,
            question: 'Are the taxi fares fixed or based on the distance?',
            answer: 'The taxi fares are generally based on the distance traveled, with additional charges for waiting time, detours, or special requests. We ensure complete transparency in our pricing.',
        },
        {
            id: 4,
            question: 'Are there any hidden charges in the taxi fare?',
            answer: 'No, Vedant Travels prides itself on offering transparent pricing. We communicate all charges upfront, so you won’t encounter any hidden fees during your journey.',
        },
        {
            id: 5,
            question: 'Can I get a customized taxi fare for my trip?',
            answer: 'Yes, we offer customized fares for specific needs. Whether you need a special vehicle or have specific requests for your trip, we will tailor the fare to suit your requirements.',
        },
        {
            id: 6,
            question: 'How do I pay for my Pune to Mumbai taxi ride?',
            answer: 'We offer multiple payment options, including cash, credit/debit cards, and online payment via our app, providing flexibility and convenience.',
        },
        {
            id: 7,
            question: 'Do the taxi fares include tolls and parking charges?',
            answer: 'Toll charges and parking fees are generally extra and are communicated to you upfront during the booking process. We ensure full transparency in all additional costs.',
        },
        {
            id: 8,
            question: 'Can I book a round-trip taxi from Pune to Mumbai?',
            answer: 'Yes, you can book a round-trip taxi. Simply provide your return details at the time of booking, and we’ll arrange the return journey accordingly.',
        },
        {
            id: 9,
            question: 'What is the luggage allowance for a Pune to Mumbai taxi ride?',
            answer: 'Our taxis can accommodate standard luggage. If you have more luggage or special requirements, please let us know at the time of booking, and we’ll ensure the necessary arrangements.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Pune to Mumbai taxi ride?',
            answer: 'Vedant Travels offers reliable, affordable, and transparent taxi services. With well-maintained vehicles, professional drivers, and a focus on safety and comfort, we ensure a smooth and enjoyable ride every time.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Ramesh Patel",
            title: "Customer",
            quote: "I used Vedant Travels for a taxi from Pune to Mumbai, and I was very happy with the service. The fare was affordable, and the driver was friendly and professional. Highly recommend it for anyone looking for a reliable taxi service!",
            rating: 5,
        },
        {
            name: "Mrs. Meera Deshmukh",
            title: "Customer",
            quote: "Booking a taxi with Vedant Travels was seamless. The fare was reasonable, and the ride was comfortable. The driver knew the best routes to avoid traffic, making the entire journey stress-free.",
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
        "name": "Pune to Mumbai Taxi Fare | Vedant Travels",
        "description": "Check out the affordable taxi fares from Pune to Mumbai with Vedant Travels. We offer competitive rates for a range of vehicles like Innova Crysta, Ertiga, and more. Whether you're booking for a one-way trip, round trip, or airport drop, we ensure the best prices with high-quality service.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.7",
          "ratingCount": "1500"
        }
      };


    return (
        <div>


<Helmet>
  <title>Pune to Mumbai Taxi Fare | Vedant Travels | Contact: +91 8177869909</title>
  <meta name="description" content="Explore affordable taxi fares for Pune to Mumbai with Vedant Travels. Get the best rates for vehicles like Innova Crysta, Ertiga, and more. Book your Pune to Mumbai taxi now!" />
  <meta name="keywords" content="pune to mumbai fare by cab, pune to mumbai taxi charges, taxi fare from pune to mumbai airport, pune to mumbai cheap cabs, best cab service pune to mumbai, best cab service from pune to mumbai airport, best mumbai pune cab service, best pune to mumbai cab service, pune to mumbai ertiga cab, Pune to Mumbai Innova Cab, Pune to mumbai fare by cab, Pune to mumbai round trip cab fare, Pune to mumbai shared cab fare, Pune to mumbai taxi charges, Taxi fare from pune to mumbai airport, pune to mumbai innova crysta taxi fare, pune to mumbai airport drop innova taxi fare, pune to mumbai ertiga taxi fare, pune to mumbai cab round trip, pune to mumbai Vedant Travels taxi fare" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.vedanttravels.in/pune-to-mumbai-taxi-fare" />
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
                            <img src='./images/keyword/6.jpg' alt='img' />
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

export default Punetomumbaitaxifare;
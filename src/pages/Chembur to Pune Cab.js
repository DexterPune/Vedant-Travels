
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Chemburtopunecab() {



    const cardData =
    {
        keyword: 'Chembur to Pune Cab  ',
        heading: 'Vedant Travels: Chembur to Pune Cab  ',
        headingDescription: 'Vedant Travels offers a convenient and comfortable cab service for your journey from Chembur to Pune. Whether you are traveling for business, leisure, or with family, we provide a wide selection of vehicles, including sedans, SUVs, and luxury cars. Our well-maintained fleet and experienced drivers ensure a smooth, safe, and enjoyable travel experience.',

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
            "name": "Chembur to Pune Cab Fare",
            "description": "Vedant Travels offers affordable and transparent pricing for the Chembur to Pune route. Our taxi services ensure comfort and punctuality with a variety of vehicle options including Innova, Ertiga, and Sedans."
        },
        {
            "name": "Chembur to Baner Cab Fare",
            "description": "Traveling from Chembur to Baner? Vedant Travels provides competitive fares and reliable taxi services for your journey. Choose from our fleet of comfortable vehicles, including Innova and Ertiga, for a smooth ride."
        },
        {
            "name": "Chembur to Pimpri Chinchwad Cab Fare",
            "description": "For a comfortable and cost-effective ride from Chembur to Pimpri Chinchwad, Vedant Travels offers affordable pricing with no hidden charges. Our drivers ensure a safe and punctual journey in well-maintained vehicles."
        },
        {
            "name": "Chembur to Pune Station Cab",
            "description": "Booking a cab from Chembur to Pune Station with Vedant Travels guarantees a reliable and comfortable service. We offer a range of vehicles including Sedans, Ertiga, and Innova to ensure a smooth, timely ride."
        },
        {
            "name": "Chembur to Pune Shivaji Nagar Cab",
            "description": "Traveling from Chembur to Shivaji Nagar in Pune? Vedant Travels provides professional and affordable taxi services for your journey. Choose from a variety of vehicle options to suit your needs."
        },
        {
            "name": "Chembur to Koregaon Park Cab",
            "description": "For a convenient ride from Chembur to Koregaon Park, Vedant Travels offers timely and comfortable taxi services. Whether you choose an Innova, Ertiga, or Sedan, our experienced drivers will ensure you reach your destination safely."
        },
        {
            "name": "Chembur to Pune Innova Crysta",
            "description": "For those seeking a luxurious and spacious ride from Chembur to Pune, the Innova Crysta is available with Vedant Travels. Enjoy a smooth and relaxing journey with ample space and premium comfort."
        },
        {
            "name": "Chembur to Pune Sedan Cabs",
            "description": "Choose from our fleet of Sedans for a comfortable and affordable ride from Chembur to Pune. Vedant Travels ensures that your journey is both smooth and timely, with experienced drivers at your service."
        },
        {
            "name": "Chembur to Pune Taxi Fare",
            "description": "The Chembur to Pune taxi fare with Vedant Travels is designed to provide you with great value for your money. We offer various vehicle options, including the Innova and Ertiga, with transparent pricing for a comfortable journey."
        },
        {
            "name": "Chembur to Khardi Cab Fare",
            "description": "For a convenient and affordable ride from Chembur to Khardi, Vedant Travels offers competitive fares. Enjoy a smooth and safe journey in our well-maintained vehicles."
        },
        {
            "name": "Chembur to Pune Cab",
            "description": "Traveling from Chembur to Pune? Vedant Travels provides comfortable and timely taxi services with a variety of vehicles to choose from, ensuring a pleasant and efficient ride."
        },
        {
            "name": "Chembur to Shivaji Nagar Cab",
            "description": "For a safe and comfortable ride from Chembur to Shivaji Nagar, Vedant Travels offers reliable taxi services. Our fleet includes the Innova, Ertiga, and Sedans to cater to all group sizes and preferences."
        },
        {
            "name": "Chembur to Pune One Way Cab",
            "description": "If you're looking for a one-way cab from Chembur to Pune, Vedant Travels offers flexible options to suit your needs. Enjoy a comfortable and cost-effective ride with professional drivers ensuring a hassle-free journey."
        },
        {
            "name": "Pune to Sion Taxi Fare",
            "description": "Vedant Travels also offers a reliable and affordable taxi service from Pune to Sion. The fare is transparent, and we offer a variety of vehicles, including Sedans, Ertiga, and Innova, to make your trip as comfortable as possible."
        }
    ],


    "tableData": [
        ["Chembur to Pune Cab Fare", "Chembur to Baner Cab Fare"],
        ["Chembur to Pimpri Chinchwad Cab Fare", "Chembur to Pune Station Cab"],
        ["Chembur to Pune Shivaji Nagar Cab", "Chembur to Koregaon Park Cab"],
        ["Chembur to Pune Innova Crysta", "Chembur to Pune Sedan Cabs"],
        ["Chembur to Pune Taxi Fare", "Chembur to Khardi Cab Fare"],
        ["Chembur to Pune Cab", "Chembur to Shivaji Nagar Cab"],
        ["Chembur to Pune One Way Cab", "Pune to Sion Taxi Fare"]
      ],
      "whychoose": [
        {
          "WhyChooseheading": "Reliable and On-Time Service",
          "WhyChoosedescription": "At Vedant Travels, we understand that your time is valuable. Whether you're heading to Pune for a business trip or a family getaway, our Chembur to Pune Cab Service ensures that your trip is punctual, smooth, and hassle-free. Our drivers are committed to providing timely pickups and drop-offs, ensuring you stay on schedule."
        },
        {
          "WhyChooseheading": "Comfortable and Spacious Vehicles",
          "WhyChoosedescription": "Our fleet includes well-maintained vehicles such as sedans, SUVs, and premium cars for your Chembur to Pune Cab. All vehicles are equipped with air conditioning, comfortable seating, and spacious interiors to make your journey enjoyable and comfortable."
        },
        {
          "WhyChooseheading": "Experienced and Professional Drivers",
          "WhyChoosedescription": "Our drivers are highly experienced in handling long-distance travel and are familiar with the best routes from Chembur to Pune. They ensure that your ride is safe, smooth, and efficient, while keeping you comfortable throughout the journey."
        },
        {
          "WhyChooseheading": "Affordable and Transparent Pricing",
          "WhyChoosedescription": "At Vedant Travels, we believe in offering fair and transparent pricing. There are no hidden charges in our Chembur to Pune Cab Service. We provide an upfront, clear breakdown of the fare so that you know exactly what to expect."
        },
        {
          "WhyChooseheading": "Safe and Comfortable Journey",
          "WhyChoosedescription": "Your safety is our top priority. All our vehicles are equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers adhere to strict safety protocols, ensuring that your journey is safe and stress-free."
        },
        {
          "WhyChooseheading": "24/7 Availability",
          "WhyChoosedescription": "Whether you need a cab early in the morning or late at night, Vedant Travels is available round-the-clock for your Chembur to Pune Cab Service. Our customer service team is always ready to assist you with booking and any inquiries."
        },
        {
          "WhyChooseheading": "Hassle-Free Booking Process",
          "WhyChoosedescription": "Booking your Chembur to Pune Cab is quick and easy. You can book your ride through our website or mobile app, or contact our customer service team to assist you with the process."
        },
        {
          "WhyChooseheading": "Customizable Travel Packages",
          "WhyChoosedescription": "We offer customizable travel packages to suit your specific needs and preferences. Whether you're traveling for business, leisure, or with family, we can tailor your Chembur to Pune Cab Service to make your journey more enjoyable."
        }
      ]




    }



    const faqData = [
        {
            id: 1,
            question: 'How can I book a Chembur to Pune cab with Vedant Travels?',
            answer: 'Booking your Chembur to Pune Cab is simple. You can book online via our website or mobile app. Alternatively, our customer service team is available to assist you with any queries and bookings.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are highly skilled in handling long-distance routes like Chembur to Pune. They know the best routes and traffic patterns to ensure a safe and timely journey.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Chembur to Pune travel?',
            answer: 'We offer a range of well-maintained vehicles, including sedans, SUVs, and premium cars, for your Chembur to Pune Cab. All vehicles are spacious, comfortable, and equipped with amenities for a pleasant journey.',
        },
        {
            id: 4,
            question: 'How do I pay for my Chembur to Pune cab rental?',
            answer: 'We accept various payment options, including cash, credit/debit cards, and online payments via our app, making it convenient for you to settle the fare.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip cab from Chembur to Pune?',
            answer: 'Yes, you can book a round-trip cab for your Chembur to Pune Cab Service. Simply provide your return details during the booking process, and we’ll arrange everything for you.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any extra charges for waiting or detours will be clearly communicated to you during the booking process. We believe in full transparency when it comes to pricing.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing during my Chembur to Pune trip?',
            answer: 'Yes, we offer customizable sightseeing options as part of your Chembur to Pune Cab Service. Explore popular attractions along the route with the help of our knowledgeable drivers.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Chembur to Pune cab?',
            answer: 'Our vehicles are spacious enough to accommodate standard luggage. If you have more luggage or special requirements, please inform us when booking, and we’ll make the necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Chembur and Pune?',
            answer: 'Yes, we offer corporate travel services for businesses requiring regular or occasional trips between Chembur and Pune. We can customize our services to meet your company’s specific needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Chembur to Pune trip?',
            answer: 'Vedant Travels is known for its reliable service, professional drivers, transparent pricing, and well-maintained vehicles. We ensure a safe, comfortable, and seamless experience for all our customers traveling from Chembur to Pune.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Amit Deshmukh",
            title: "Business Traveler",
            quote: "I traveled from Chembur to Pune with Vedant Travels, and the experience was excellent. The car was clean, and the driver was very friendly and professional. I will definitely choose them again for my future trips!",
            rating: 5,
        },
        {
            name: "Mrs. Anjali Patil",
            title: "Family Traveler",
            quote: "Our family trip from Chembur to Pune was made even better by Vedant Travels. The vehicle was spacious and comfortable, and the driver ensured that we were safe and well taken care of. Highly recommended!",
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
        "name": "Chembur to Pune Cab Service | Vedant Travels",
        "description": "Book your Chembur to Pune taxi with Vedant Travels. Affordable one-way and round-trip cabs, including Innova Crysta, Ertiga, and Sedan. Reliable service to major destinations like Shivaji Nagar, Koregaon Park, Pimpri Chinchwad, Baner, and more.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.7",
          "ratingCount": "85"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "3000",
          "eligibleRegion": {
            "@type": "Place",
            "name": "Mumbai"
          },
          "url": "https://www.vedanttravels.in/chembur-to-pune-cab-service"
        }
      };
      
   
      
    return (
        <div>
              <Helmet>
        <title>Chembur to Pune Cab Service | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Chembur to Pune taxi with Vedant Travels. Affordable one-way and round-trip cabs including Innova Crysta, Ertiga, and Sedan. Reliable service from Chembur to Pune, Shivaji Nagar, Koregaon Park, Baner, and more." />
        <meta name="keywords" content="Chembur to Pune Cab, Chembur to Pune Taxi, Chembur to Pune One Way Cab, Chembur to Pune Innova Crysta, Chembur to Pune Sedan Cab, Chembur to Pune Shivaji Nagar, Chembur to Baner Taxi, Mumbai to Pune Taxi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/chembur-to-pune-cab-service" />
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
                            <img src='./images/keyword/51.jpg' alt='img' />
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

export default Chemburtopunecab;
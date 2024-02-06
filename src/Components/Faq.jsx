import React, { useState } from 'react';
import '../Styles/faq.scss';

const Faq = () => {
    const [expandedItem, setExpandedItem] = useState(null);

    const faqData = [
        {
            question: 'What are steel shots?',
            answer: 'Steel shots are small spherical pellets made of steel, commonly used for abrasive blasting and shot peening in industrial applications. They are known for their durability and effectiveness in surface preparation processes.',
        },
        {
            question: 'How are steel shots made?',
            answer: 'Steel shots are manufactured through a process called atomization, where molten steel is rapidly cooled by air or water, resulting in small, uniform spherical particles. This method ensures consistent quality and hardness of the steel shots.',
        },
        {
            question: 'What industries use steel shots?',
            answer: 'Steel shots find applications in various industries, including automotive, aerospace, construction, and metalworking. They are widely used for tasks such as cleaning, descaling, and strengthening metal surfaces.',
        },
        {
            question: 'What are the benefits of using steel shots for blasting?',
            answer: 'The use of steel shots for blasting offers advantages such as high cleaning efficiency, repeatability, and the ability to achieve desired surface finishes. They are also environmentally friendly as they can be recycled multiple times.',
        },
        {
            question: 'Are steel shots recyclable?',
            answer: 'Yes, steel shots are recyclable, making them eco-friendly for blasting and shot peening. Used shots are collected, cleaned, and reintroduced into the process. This promotes environmental sustainability and cost-effectiveness. Steel shots can be reused multiple times.',
        },
        // Add more FAQ items as needed
    ];

    const toggleAccordion = (index) => {
        setExpandedItem((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="steel-shot-faq container">
            <div  className="accordion">
                {faqData.map((item, index) => (
                    <div className="accordion-item" key={index}>
                        <button 
                            id={`accordion-button-${index}`}
                            aria-expanded={expandedItem === index}
                            onClick={() => toggleAccordion(index)}
                        >
                            <span data-cursorpointer={true} className="accordion-title">{item.question}</span>
                            <span className="icon" aria-hidden="true"></span>
                        </button>
                        <div
                            className={`accordion-content ${expandedItem === index ? 'expanded' : ''}`}
                            style={{ opacity: expandedItem === index ? 1 : 0, maxHeight: expandedItem === index ? '18em' : 0 }}
                        >
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;

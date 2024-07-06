import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from 'react-accessible-accordion';
import data from '../../../utils/accordion';
import './values.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';

export default function Values() {
    const [expandedItems, setExpandedItems] = useState([]);

    const handleAccordionChange = (uuid) => {
        if (expandedItems.includes(uuid)) {
            setExpandedItems(expandedItems.filter(item => item !== uuid));
        } else {
            setExpandedItems([...expandedItems, uuid]);
        }
    };

    return (
        <section className='v-wrapper'>
            <div className='paddings innerWidth flexCenter v-container'>
                {/* Left side */}
                <div className='v-left'>
                    <div className='image-container'>
                        <img src='/images/opportunities/hero-image.png' alt='' />
                    </div>
                </div>
                {/* Right side */}
                <div className='flexColStart v-right'>
                    <span className='orangeText'>Our Value</span>
                    <span className='primaryText'>Value We Give to You</span>
                    <span className='secondaryText'>
                        We are always ready to help by providing the best services for you.
                        <br />
                        We believe a good place to live can make your life better.
                    </span>
                    <Accordion
                        className='accordion'
                        allowMultipleExpanded={false}
                        preExpanded={expandedItems}
                    >
                        {data.map((item, i) => (
                            <AccordionItem key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton
                                        onClick={() => handleAccordionChange(i)}
                                        className={expandedItems.includes(i) ? 'expanded' : 'collapsed'}
                                    >
                                        <div className='flexCenter icon'>
                                            {item.icon}
                                        </div>
                                        <span className='primaryText'>
                                            {item.heading}
                                        </span>
                                        <div className='flexCenter icon'>
                                            <MdOutlineArrowDropDown size={20} />
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className='secondaryText'>
                                        {item.detail}
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
'use client';
import React from 'react';
import styles from './FAQ.module.scss';
import { useState } from 'react';
interface Data {
  head: string;
  description: string;
}

interface CurrentPageData {
  data: Data[];
}

interface FAQPage {
  currentPageData?: CurrentPageData;
}

const FAQ = ({ currentPageData }: FAQPage) => {
  const Data = [
    {
      id: '01',
      head: 'What is conveyancing?',
      description: 'When speaking of a conveyance, this is the process of transferring the property into the name of the new registered owner and all the tasks associated with that.',
    },
    {
      id: '02',
      head: 'What is a conveyancer?',
      description:
        'A conveyancer is a property transfer specialist. They prepare the legal documents that form part of real estate transactions such as the purchase and sale of properties, settlements and title transfers.',
    },
    {
      id: '03',
      head: 'I need conveyancing, do I need a lawyer?',
      description:
        'The simple answer to this question is no, you don’t need a lawyer. However, Ownit has experienced property lawyers and expert conveyancers to help you with all your conveyancing needs.',
    },
    {
      id: '04',
      head: 'What should I look for in a   solicitor?',
      description:
        'The simple answer to this question is no, you don’t need a lawyer. However, Ownit has experienced property lawyers and expert conveyancers to help you with all your conveyancing needs.',
    },
    {
      id: '05',
      head: 'How can we assist in the conveyancing process?',
      description:
        'The simple answer to this question is no, you don’t need a lawyer. However, Ownit has experienced property lawyers and expert conveyancers to help you with all your conveyancing needs.',
    },
  ];
  const [activeIndexes, setActiveIndexes] = React.useState([0]);

  const handleToggle = (index: any) => {
    setActiveIndexes((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };
  return (
    <div className={styles.moduleWrapper}>
      <div className='390:px-[24px] 968:px-[80px] 968:py-[120px] flex items-center justify-center pb-[60px] '>
        <div className='faq_content 1024:w-[1064px] mx-auto flex flex-shrink-0 flex-col items-center gap-[60px]'>
          <div className='faq_content_head 1024:w-[768px] 768:w-[768px] 390:w-[327px] flex flex-col gap-[16px]'>
            <i className='mobileBodyRegL 968:desktopBodyRegL text-center text-[#77ABDB]'>
              FAQs<span className='text-center text-[#ED3525]'>.</span>
            </i>
            <div className='text_content_head headlineSemiboldXL flex justify-center overflow-hidden text-center  text-[#213459]'>
              <p className='1024:desktopHeadlineSemiboldXL 768:desktopHeadlineSemiboldXL 390:mobileDisplaySemiboldS w-full text-center'>Best value property conveyancing solicitors in Australia</p>
            </div>
          </div>
          <div className='faq_content_lis 1024:w-[1064px] 768:w-[768px] 390:w-[390px]  flex w-full flex-col items-start gap-[12px]'>
            {Data.map((item, index) => (
              <div key={item.id}>
                <AccordionItem index={item.id} AccordionItemheader={item.head} AccordionItemtext={item.description} active={activeIndexes.includes(index)} handleToggle={() => handleToggle(index)} />
                <div className='divider 1024:w-[1064px] 768:w-[768px] 390:w-[390px]  h-[1px] w-[1064px] bg-[#77abdb] opacity-20'></div>
              </div>
            ))}
          </div>
          <div className='faq_content_cta 390:flex-col 768:flex-row  flex items-center justify-center gap-[32px] '>
            <div className='cta_button hoverBanner flex items-center justify-center rounded-full border border-[#305fac] bg-white px-[24px] py-[12px] text-[#305fac] hover:border-transparent'>
              <div className='button_cta_content flex  items-center justify-end gap-[4px]'>
                <p className=' destopMainCTA text-center uppercase  transition duration-300 '>Free Contract Review</p>
              </div>
            </div>
            <div className='content text-azure600 group'>
              <span className='desktopBodySemiboldM btnmore text-azure600 flex items-center gap-[4px]'>
                Most commonly asked questions
                <span className='icon cta_text_icon relative flex flex h-[24px] w-[24px] w-[32px] items-center gap-[8px]'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' className='absolute left-0 transition-transform group-hover:translate-x-2'>
                    <mask id='mask0_6086_6342' maskUnits='userSpaceOnUse' x='0' y='0' width='24' height='24'>
                      <rect width='24' height='24' fill='#D9D9D9' />
                    </mask>
                    <g mask='url(#mask0_6086_6342)'>
                      <path d='M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z' fill='#305FAC' />
                    </g>
                  </svg>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

interface AccordionItemProps {
  AccordionItemheader: string;
  AccordionItemtext: string;
  index: string;
  active?: boolean;
  handleToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ AccordionItemheader, AccordionItemtext, index, active, handleToggle }) => {
  return (
    <div className='list_question_hi 1024:w-[1064px] 768:w-[768px] 390:w-[390px] group flex h-auto w-full flex-col items-start'>
      <button onClick={handleToggle} className='w-full'>
        <div className='question_head flex w-full items-center justify-between py-[12px]'>
          <div className='question flex items-center justify-center'>
            <span
              className={`390:mobileBodySemiboldS 968:desktopBodyMedL w-[32px] ${active ? 'text-[#213459]' : 'text-[#76abdc]'} group-hover:text-[#213459]`} // Đổi màu khi hover
            >
              {index}
            </span>
            <p
              className={`390:mobileHeadlineSemiboldXS 768:mobileHeadlineSemiboldXS 968:desktopHeadlineSemibolM  1024:desktopHeadlineSemibolM w-full text-center  ${
                active ? 'text-[#213459]' : 'text-[#76abdc]'
              } group-hover:text-[#213459]`} // Đổi màu khi hover
            >
              {AccordionItemheader}
            </p>
          </div>
          <div className='icon flex items-center gap-[13px]'>
            <div
              className={`icon_detail 390:w-[24px] 390:h-[24px] 768:h-[40px] 768:w-[40px] flex items-center justify-center rounded-[100px] ${
                active ? 'bg-[rgba(118,171,220,0.20)]' : 'border border-[#76ABDC]'
              } group-hover:border-[#213459]`} // Đổi màu khi hover
            >
              <div
                className={`${active ? 'text-[#213459]' : 'text-[#76abdc]'} group-hover:text-[#213459]`} // Đổi màu khi hover
              >
                {active ? (
                  <svg xmlns='http://www.w3.org/2000/svg' className='768:h-[24px] 768:w-[24px] 390:w-[16px] 390:h-[16px]' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M5 12h14' />
                  </svg>
                ) : (
                  <svg xmlns='http://www.w3.org/2000/svg' className='768:h-[24px] 768:w-[24px] 390:w-[16px] 390:h-[16px]' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M12 4v16m8-8H4' />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </button>
      <div className={`origin-top transform transition-all duration-1000 ease-in-out`}>
        <div
          className={`flex flex-col items-center overflow-hidden pl-[32px] pr-[32px] transition-[max-height] duration-700 ease-in-out ${active ? 'max-h-[200px]' : 'max-h-0'}`}
          style={{ transition: 'max-height 0.7s ease-in-out' }}
        >
          <p
            className={`text-body-color dark:text-dark-6 pb-[16px] text-base transition-opacity delay-300 duration-500 ease-in-out ${active ? 'opacity-100' : 'opacity-0'} group-hover:text-[#213459]`} // Đổi màu khi hover
            style={{ transform: 'translateY(0)' }}
          >
            {AccordionItemtext}
          </p>
        </div>
      </div>
    </div>
  );
};

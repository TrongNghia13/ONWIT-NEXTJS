'use client';

import React, { useState } from 'react';
import styles from './Location.module.scss';

export default function Location() {
  const [selectedTab, setSelectedTab] = useState('QLD');
  const locations = [
    {
      name: 'Beenleigh Conveyancing - Head Office',
      address: '71 Alamein Street, Beenleigh QLD 4207',
      postal: 'PO Box 133, Beenleigh QLD 4207',
      phone: '(07) 3807 1522',
      fax: '(07) 3220 0772',
    },
    {
      name: 'Brisbane Conveyancing',
      address: 'Lvl 14, 167 Eagle Street, Brisbane City QLD 4000',
      postal: 'PO Box 133, Beenleigh QLD 4207',
      phone: '(07) 3807 1522',
      fax: '(07) 3220 0772',
    },
    {
      name: 'Gold Coast Conveyancing',
      address: 'Lvl 15 Corporate Centre One, 2 Corporate Court - Bundall QLD 4217',
      postal: 'PO Box 133, Beenleigh QLD 4207',
      phone: '(07) 3807 1522',
      fax: '(07) 3220 0772',
    },
    {
      name: 'Cairns Conveyancing',
      address: '36 Abbott St, Cairns City QLD 4870',
      postal: 'PO Box 133, Beenleigh QLD 4207',
      phone: '(07) 3807 1522',
      fax: '(07) 3220 0772',
    },
    {
      name: 'Sunshine Coast Conveyancing',
      address: 'Ground Floor, Regatta 1 Business Centre, 2 Innovation Parkway, Birtinya QLD 4575',
      postal: 'PO Box 133, Beenleigh QLD 4207',
      phone: '(07) 3807 1522',
      fax: '(07) 3220 0772',
    },
    {
      name: 'Toowoomba Conveyancing',
      address: 'Suite 157, 58-62 Water St South, Toowoomba QLD 4350',
      postal: 'PO Box 133, Beenleigh QLD 4207',
      phone: '(07) 3807 1522',
      fax: '(07) 3220 0772',
    },
  ];
  return (
    <div className=' flex h-[693] w-[1280] flex-col items-start  items-center gap-[32px] self-stretch bg-[#F4F8FB] pb-[100px] pl-[80px] pr-[80px] pt-[100px]'>
      <div className='flex flex-col items-center gap-[40px] self-stretch '>
        <h2 className='desktopHeadlineSemiboldXL mb-[16px] text-center text-2xl font-bold text-[#213459]'>Locations we serve</h2>
        <div className='flex h-[50px] w-[398px] rounded-full bg-[#FFF]'>
          <button
            className={`flex h-[46px] flex-[1_0_0] items-center justify-center rounded-full px-[16px] py-[12px] ${
              selectedTab === 'QLD' ? 'border border-[#76ABDC] bg-gradient-to-r from-[#305FAC] to-[#75AADC] text-white' : 'bg-[#FFF] text-blue-800'
            }`}
            onClick={() => setSelectedTab('QLD')}
          >
            QLD
          </button>
          <button
            className={`flex h-[46px] flex-[1_0_0] items-center justify-center rounded-full px-[16px] py-[12px] ${
              selectedTab === 'VIC' ? 'border border-[#76ABDC] bg-gradient-to-r from-[#305FAC] to-[#75AADC] text-[#fff]' : 'bg-[#FFF] text-blue-800'
            }`}
            onClick={() => setSelectedTab('VIC')}
          >
            VIC
          </button>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-[16px] '>
        {locations.map((location, index) => (
          <div key={index} className='flex h-auto w-[416px] flex-col  items-start gap-[16px] rounded-[16px] border bg-white p-[24px] '>
            <h3 className='desktopHeadlineSemiboldXS text-left text-[#213459]'>{location.name}</h3>
            <div className='grid grid-cols-2 gap-[16px]'>
              <p className=' text-left'>
                <strong className='desktopBodyMedS text-[#305FAC]'>Address</strong>
                <span className='desktopBodyRegS block text-left'>{location.address}</span>
              </p>
              <p className='desktopBodyMedS text-left'>
                <strong className='desktopBodyMedS text-[#305FAC]'>Postal</strong>
                <span className='desktopBodyRegS block text-left'>{location.postal}</span>
              </p>
              <p className=' text-left'>
                <strong className='desktopBodyMedS text-[#305FAC]'>Phone</strong>
                <span className='desktopBodyRegS block text-left'>{location.phone}</span>
              </p>
              <p className=' text-left'>
                <strong className='desktopBodyMedS text-[#305FAC]'>Fax</strong>
                <span className='desktopBodyRegS block text-left'>{location.fax}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

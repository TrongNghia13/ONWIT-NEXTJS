'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import React, { useState } from 'react';
import { CommonButton } from '@/app/_shared/CommonButton';
import ReCAPTCHA from 'react-google-recaptcha';
import apiService from '@/services/apiService';
import { text } from 'cheerio/lib/api/manipulation';
import WrapperImage from '@/app/_shared/WrapperImage';
import { fillAttributesImageObject } from '@/lib/helper';
import MaskedImage from '@/app/_shared/MaskedPentagonImage';

type ContactUsFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

interface ContactUsForm {
  currentPageData: any;
}

const schema = yup.object({
  firstName: yup.string().required('first name is required'),
  lastName: yup.string().required('last name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phoneNumber: yup
    .string()
    .matches(/^[0-9()+\s-]+$/, 'Phone number must contain only numbers, spaces, parentheses, +, or -')
    .required('Phone number is required'),
  message: yup.string().required('Message is required'),
});

const ContactUsForm = ({ currentPageData }: ContactUsForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactUsFormValues>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const [captchaToken, setCaptchaToken] = useState('');

  const onSubmit = async (values: ContactUsFormValues) => {
    try {
      console.log('Form values:', {
        values,
        captchaToken,
      });

      try {
        await apiService.post(`/api/forms`, {
          data: {
            name: `Contact form from ${values.email}`,
            captchaToken: captchaToken,
            data: [
              {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                phoneNumber: values.phoneNumber,
                message: values.message,
                __component: 'form.contact-us',
              },
            ],
          },
        });

        alert('Form submitted successfully');

        // Reset all form values
        reset();
      } catch (e) {
        console.error(e);
        alert('Error submitting form');
      }

      // Add your form submission logic here
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  function handleCaptchaChange(token: any) {
    setCaptchaToken(token);
  }

  return (
    <div className='flex h-auto w-[100%] items-stretch pb-[120px] '>
      <div className=' flex flex-col items-start items-center self-stretch px-[80px] py-[120px]'>
        <div className='flex items-center gap-[125px] self-stretch'>
          <div>
            {' '}
            <MaskedImage className=' w-[500px]' width={''}>
              <WrapperImage {...fillAttributesImageObject(currentPageData.PhoneContactUs[2].icon)} alt={'Image contact'} className={''} />
            </MaskedImage>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='  grid h-auto w-[632px] grid-cols-2 items-start gap-[32px] '>
            <div className='col-span-2 flex h-auto w-full  flex-col gap-[24px] self-stretch '>
              <text className='desktopHeadlineSemiboldM text-center text-start text-[#213459]'>Let us know how we can assist you</text>
              <div className='col-span-2 flex  gap-[14px] self-stretch text-start '>
                <button className='desktopBodyMedM flex items-center justify-center  rounded-full border-2 px-[16px] py-[8px] text-[#305FAC]'>New Customer</button>
                <button className='desktopBodyMedM flex items-center justify-center rounded-full border-2 px-[16px] py-[8px] text-[#305FAC]'>Existing Customer</button>
                <button className='desktopBodyMedM flex items-center justify-center rounded-full border-2 px-[16px] py-[8px] text-[#305FAC]'>Real Estate Agent</button>
                <button className='desktopBodyMedM flex items-center justify-center rounded-full border-2 px-[16px] py-[8px] text-[#305FAC]'>Other</button>
              </div>
            </div>
            <div className='flex  flex-col text-left'>
              <label className='desktopBodyXS12 text-mainColor'>First name*</label>
              <input
                {...register('firstName')}
                placeholder='Enter your first name'
                className={`desktopBodyS16 border-mc3 placeholder:desktopBodyS16 w-full rounded-[8px] ${errors.firstName ? 'border-warning' : ''}`}
              />
              {errors.firstName && <div className='desktopBodyXS12 text-warning pt-[6px] leading-[18px]'>{errors.firstName.message}</div>}
            </div>
            <div className='text-left'>
              <label className='desktopBodyXS12 text-mainColor'>Email*</label>
              <input
                type='email'
                {...register('email')}
                placeholder='Enter your email'
                className={`desktopBodyS16 border-mc3 placeholder:desktopBodyS16 w-full rounded-[8px] ${errors.email ? 'border-warning' : ''}`}
              />
              {errors.email && <div className='desktopBodyXS12 text-warning pt-[6px] !leading-[18px]'>{errors.email.message}</div>}
            </div>
            <div className='text-left'>
              <label className='desktopBodyXS12 text-mainColor '>Last name*</label>
              <input
                {...register('lastName')}
                placeholder='Enter your first name'
                className={`desktopBodyS16 border-mc3 placeholder:desktopBodyS16 w-full rounded-[8px] ${errors.lastName ? 'border-warning' : ''}`}
              />
              {errors.lastName && <div className='desktopBodyXS12 text-warning pt-[6px] leading-[18px]'>{errors.lastName.message}</div>}
            </div>
            <div className='text-left'>
              <label className='desktopBodyXS12 text-mainColor'>Mobile*</label>
              <input
                {...register('phoneNumber')}
                placeholder='(+country) 123456789'
                className={`desktopBodyS16 border-mc3 placeholder:desktopBodyS16 w-full rounded-[8px] ${errors.phoneNumber ? 'border-warning' : ''}`}
              />
              {errors.phoneNumber && <div className='desktopBodyXS12 text-warning pt-[6px] !leading-[18px]'>{errors.phoneNumber.message}</div>}
            </div>
            <div className='col-span-2 flex w-full flex-col text-left'>
              <label className='desktopBodyXS12 text-mainColor'>Message</label>
              <textarea
                {...register('message')}
                placeholder='Enter your message'
                className={`desktopBodyS16 border-mc3 placeholder:desktopBodyS16 w-full rounded-[8px] ${errors.message ? 'border-warning' : ''}`}
              />
              {errors.message && <div className='desktopBodyXS12 text-warning pt-[6px] leading-[18px]'>{errors.message.message}</div>}
            </div>
            <div className='col-span-2 flex items-start'>
              <input type='checkbox' id='vehicle1' className='flex-justify' />
              <label htmlFor='vehicle1' className='desktopBodyRegS text-[#4E4F53]'>
                By proceeding, you agree to receive the quote by email, have read and understood our Privacy Policy and agree to Ownit Conveyancing Terms of Use.
              </label>
            </div>
            {/* <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''} // Replace with your site key
          onChange={handleCaptchaChange}
        /> */}
            <button type='submit'>
              <CommonButton className='btn btn--bgOrange btn--bgHoverOrange  hoverOrange  destopMainCTA  flex' text='Contact Us Today &rarr;' />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;

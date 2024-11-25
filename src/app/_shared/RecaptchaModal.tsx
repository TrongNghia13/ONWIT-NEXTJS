'use client';

import React from 'react';
import {Modal, ModalBody, ModalContent} from '@nextui-org/modal';
import ReCAPTCHA from 'react-google-recaptcha';

const RecaptchaModal = ({isOpen, onClose, onVerify}: any) => {
  const handleCaptchaChange: any = (token: string) => {
    onVerify(token); // Pass the token to the form or parent component for verification
  };

  return (
      <div>
        <Modal
            placement={'center'}
            isOpen={isOpen}
            onClose={onClose}
            closeButton={<div></div>}
        >
          <ModalContent>
            {(onClose: any) => (
                <>
                  <ModalBody>
                    <div className={'flex flex-items flex-col items-center justify-center gap-[12px] py-[40px]'}>
                      <div className={'desktopHeadingH6 text-center text-mainColor'}>Final step. Beat the robot!</div>
                      <ReCAPTCHA
                          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''} // Replace with your site key
                          onChange={handleCaptchaChange}
                      />
                    </div>
                  </ModalBody>
                </>
            )}
          </ModalContent>
        </Modal>
      </div>
  );
};

export default RecaptchaModal;

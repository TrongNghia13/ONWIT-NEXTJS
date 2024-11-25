import apiService from '@/services/apiService';
import RecaptchaModal from '@/app/_shared/RecaptchaModal';

export const RecaptchaEmail = ({
                                 isOpenCaptcha,
                                 setIsOpenCaptcha,
                                 email,
                                 setEmail,
                                 setSubmitted,
                                 showToast,
                               }: any) => {
  return (
      <RecaptchaModal
          isOpen={isOpenCaptcha}
          onClose={() => {
            setIsOpenCaptcha(false);
          }}
          onVerify={async (token: string) => {
            try {
              await apiService.post('/api/forms', {
                data: {
                  name: `Subscriber from ${email}`,
                  captchaToken: token,
                  data: [
                    {
                      email: email,
                      __component: 'form.email-subscriber',
                    },
                  ],
                },
              });

              setEmail('');
              setSubmitted(true);
              showToast('Thank you for subscribing!', String(Date.now()));
            } catch (e) {
              console.error(e);
              showToast('There are error while summiting the form', String(Date.now()));
            }

            setIsOpenCaptcha(false);
            // Add your recaptcha verification logic here
          }}
      />
  );
};

// components/Toast.tsx
import toast, { Toaster, ToastOptions } from 'react-hot-toast';

const defaultOptions: ToastOptions = {
  icon: '👏',
  style: {
    borderRadius: '10px',
    background: '#333',
    color: '#fff',
  },
};

export const showToast = (message: string, options?: ToastOptions) => {
  toast(message, { ...defaultOptions, ...options });
};

const Toast = () => {
  return <Toaster />;
};

export default Toast;

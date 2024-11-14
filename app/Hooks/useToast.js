import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useToast = () => {

    const showToast = (message, type = 'general', delay = 2000) => {
        toast[type.toLowerCase()](message, {autoClose: delay});
    }
    
    return {
        showToast,
    }
};
  
export default useToast;
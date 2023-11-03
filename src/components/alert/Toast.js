import toast from "react-hot-toast"

export const toastSuccess = (text)=>{
    toast.success(text, {
        style: {
         
          padding: '16px',
          color: 'white',
          background:'#16A830'
        },
        iconTheme: {
          primary: 'white',
          secondary: '#16A830',
        },
      });
}

export const toastError = (text)=>{
    toast.error(text, {
        style: {
         
          padding: '16px',
          color: 'white',
          background:'red'
        },
        iconTheme: {
          primary: 'white',
          secondary: 'red',
        },
      });
}
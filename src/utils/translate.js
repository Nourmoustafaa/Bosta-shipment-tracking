

export const translateState = (eng,state) => {
    const translations = {
      TICKET_CREATED:' تم إنشاء الشحنة',
      PACKAGE_RECEIVED: 'تم استلام الشحنة من التاجر  ',
      OUT_FOR_DELIVERY: ' الشحنة خرجت للتسليم',
      DELIVERED: 'تم التسليم',
      DELIVERY_FAILED:'لم يتم تسليم الشحنة',
      IN_TRANSIT:'تم نقل الشحنة',
      NOT_YET_SHIPPED:'لم يتم نقل الشحنة بعد',
      DELIVERED_TO_SENDER:'ارجاع الشحنة إلى التاجر',
      CANCELLED:'تم إلغاء الشحنة',
      Time :'الوقت',
      Hub:'الفرع',
      Details:'تفاصيل',
      Date:'التاريخ',
      Tracking_Number:'رقم الشحنة',
      Seller_Name:'اسم التاجر',
      Last_Update:'اخر تحديث',
      Estimated_Delivery_Date:'موعد التسليم خلال',
      Shipment_Details:'تفاصيل الشحنة',
      Track_Shipment:'تتبع شحنتك',
      Sign_In:'تسجيل دخول',
      Prices:'الأسعار',
      Home:'الرئيسية',
      Call_Sales:'كلم المبيعات',
      Bosta:'بوسطة',
      No_Data_Available_Please_Enter_a_Tracking_Number:'لا يوجد بيانات برجاء إدخال رقم تتبع',
      Delivery_Address:'عنوان التسليم',
      Is_there_a_Problem_With_Your_Shipment:'هل يوجد مشكلة في شحنتك؟',
      Report_a_problem:'إبلاغ عن مشكلة',
    };
    if(eng){
      return state?.replace(/_/g, ' ');
    }
    else 
    return translations[state] ; 
  };
  
    export const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const day = String(date.getDate()).padStart(2, '0'); 
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const year = date.getFullYear();
        
        return `${day}/${month}/${year}`; 
      };

    export  const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        let hours = date.getUTCHours(); 
        const minutes = String(date.getUTCMinutes()).padStart(2, '0'); 
        const ampm = hours >= 12 ? 'PM' : 'AM'; 
        hours = hours % 12;
        hours = hours ? String(hours) : '12'; 
      
        return `${hours}:${minutes} ${ampm}`; 
      };

      export const translateData = (eng,data) => {
        
           return data.map(event => ({
            ...event,
            state: translateState(eng,event.state), 
            hub: event.hub || ' ', 
            formattedDate: formatDate(event.timestamp),
            formattedTime: formatTime(event.timestamp),
        }));
        
      };

      export const formatTimestamp = (timestamp) => {
        if (!timestamp) return ' '; 
    
        return new Date(timestamp).toLocaleString('en-US', {
            year: 'numeric',
            month: 'numeric', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true, 
        });
    };
import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

        const  PriceOptions= [
          {
            "id": "1",
            "name": "Basic Membership",
            "description": "Access to basic gym facilities",
            "price": "$29.99/month",
            "features": [
              "Unlimited access to gym equipment",
              "Locker room access",
              "Free Wi-Fi",
              "Basic fitness classes",
              "24/7 access",
              "Discounts at the gym shop"
            ]
          },
          {
            "id": "2",
            "name": "Premium Membership",
            "description": "Enhanced gym experience",
            "price": "$49.99/month",
            "features": [
              "All Basic Membership features",
              "Access to premium fitness classes",
              "Personalized fitness consultation",
              "Towel service",
              "Sauna and steam room access",
              "Nutrition counseling",
              "Complimentary beverages"
            ]
          },
          {
            "id": "3",
            "name": "Family Membership",
            "description": "Ideal for families",
            "price": "$79.99/month",
            "features": [
              "All Premium Membership features",
              "Family access (up to 4 members)",
              "Childcare services",
              "Discounts on additional family members",
              "Family fitness classes",
              "Special family events"
            ]
          },
        ]
      
      


    return (
        <div className="m-12">
            <h2 className="text-5xl text-center mb-4">Best Prices</h2>
           <div className="grid grid-cols-3 gap-6 ">
           {
                PriceOptions?.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;
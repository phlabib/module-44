

const PriceOptions = () => {


    {
        const  price_options= [
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
          {
            "id": "4",
            "name": "Student Membership",
            "description": "Discounted rate for students",
            "price": "$24.99/month",
            "features": [
              "Valid student ID required",
              "Access during non-peak hours",
              "Basic fitness classes",
              "Locker room access",
              "Study area",
              "Monthly fitness challenges"
            ]
          }
        ]
      }
      


    return (
        <div>
            <h2 className="text-5xl">Best Prices</h2>
            {
                PriceOptions.map( option => <PriceOption
                 key = {option.ic} 
                option = {option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;
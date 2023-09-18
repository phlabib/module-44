import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {

    const {name, price, features } = option;

    return (
        <div className='bg-blue-600 rounded-xl p-4 text-center text-white' >
            <h2 className=''>
                <span className='text-3xl'>{price}</span>
            </h2>
            <h4 className='text-3xl my-4'>{name}</h4>
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
        </div>
    );
};


PriceOption.propTypes = {
    option : PropTypes.object
}

export default PriceOption;
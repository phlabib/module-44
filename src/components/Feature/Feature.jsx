import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center items-center gap-4'>
                <AiFillCheckCircle className='text-green-600 '> </AiFillCheckCircle>
                {feature}
            </p>
        </div>
    );
};

Feature.propTypes = {
    feature : PropTypes.string
}
export default Feature;
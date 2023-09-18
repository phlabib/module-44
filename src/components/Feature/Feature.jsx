import PropTypes from 'prop-types';
import { FaCrosshairs } from "react-icons/fa";

const Feature = ({feature}) => {
    return (
        <div>
            <p>
                <FaCrosshairst> </FaCrosshairs>
                {feature}
            </p>
        </div>
    );
};

Feature.propTypes = {
    feature : PropTypes.string
}
export default Feature;
import PropTypes from 'prop-types';
import invariant from 'invariant';

const Route = () => invariant(false, '<Route> elements are for config only and shouldn\'t be rendered');

Route.propTypes = {
    path: PropTypes.string,
    index: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
}; 

export { Route };
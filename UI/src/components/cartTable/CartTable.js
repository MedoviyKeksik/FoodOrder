import CartRow from "../../containers/cartRow/CartRow";
import PropTypes from 'prop-types';
import localization from './messages'
import { loadLoclization } from "../../containers/localeSwitcher/actions";
import { FormattedMessage } from "react-intl";
import { FOODORDER_CARTTABLE_CANCEL, FOODORDER_CARTTABLE_COST, FOODORDER_CARTTABLE_COUNT, FOODORDER_CARTTABLE_IMAGE, FOODORDER_CARTTABLE_TIME, FOODORDER_CARTTABLE_TITLE } from "./constants";
import {connect} from 'react-redux';

function CartTable(props) {
    props.loadLoclization(localization);
    let rows = props.food.map((food) => 
        <CartRow
            key={food.id}
            id={food.id}
            imageSource={food.imageSource}
            title={food.title}
            count={food.count}
            cost={food.cost}
        />
    );
    return (
        <table className="cart-table">
            <tr>
                <th><FormattedMessage defaultMessage="Image" id={FOODORDER_CARTTABLE_IMAGE} /></th>
                <th><FormattedMessage defaultMessage="Title" id={FOODORDER_CARTTABLE_TITLE} /></th>
                <th><FormattedMessage defaultMessage="Count" id={FOODORDER_CARTTABLE_COUNT} /></th>
                <th><FormattedMessage defaultMessage="Cost" id={FOODORDER_CARTTABLE_COST} /></th>
                <th><FormattedMessage defaultMessage="Time" id={FOODORDER_CARTTABLE_TIME} /></th>
                <th><FormattedMessage defaultMessage="Cancel" id={FOODORDER_CARTTABLE_CANCEL} /></th>
            </tr>
            {rows}
        </table>
    );
}

CartTable.propTypes = {
    food: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        imageSource: PropTypes.string,
        title: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        cost: PropTypes.number.isRequired
    }))
}

const mapDispatchToProps = {
    loadLoclization
}

export default connect(null, mapDispatchToProps)(CartTable);
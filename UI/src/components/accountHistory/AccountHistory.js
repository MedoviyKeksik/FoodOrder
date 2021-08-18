import PropTypes from 'prop-types';
import localization from './messages';
import { loadLocalization } from '../../containers/localeSwitcher/actions';
import './AccountHistory.scss';
import { FormattedMessage } from 'react-intl';
import { FOODORDER_ACCOUNTHISTORY_COST, FOODORDER_ACCOUNTHISTORY_COUNT, FOODORDER_ACCOUNTHISTORY_IMAGE, FOODORDER_ACCOUNTHISTORY_TITLE } from './constants';
import { connect } from 'react-redux';

function AccountHistory(props) {
    props.loadLoclization(localization);

    let content = props.items.map((item) => { 
        // let rows = item.food.map((food) => 
            // <tr key={food.id}>
            //     <td>{item.imageSource}</td>
            //     <td>{item.title}</td>
            //     <td>{item.count}</td>
            //     <td>{item.cost}</td>
            // </tr>
        // );
        return (
            <p>{"OrderId:" + item.id + " OrderTime:"+ item.time}</p>
            // <table key={item.Id}>
            //     <caption>{item.Id}</caption>
            //     <tr>
            //         <td><FormattedMessage defaultMessage="Image" id={FOODORDER_ACCOUNTHISTORY_IMAGE} /></td>
            //         <td><FormattedMessage defaultMessage="Title" id={FOODORDER_ACCOUNTHISTORY_TITLE} /></td>
            //         <td><FormattedMessage defaultMessage="Count" id={FOODORDER_ACCOUNTHISTORY_COUNT} /></td>
            //         <td><FormattedMessage defaultMessage="Cost" id={FOODORDER_ACCOUNTHISTORY_COST} /></td>
            //     </tr>
            //     {rows}
            // </table>
        );
    });
    return <>{content}</>;
}

AccountHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        orderId: PropTypes.number.isRequired,
        food: PropTypes.exact({
            totalCount: PropTypes.number.isRequired,
            items: PropTypes.arrayOf(PropTypes.exact({
                id: PropTypes.number.isRequired,
                imageSource: PropTypes.string,
                title: PropTypes.string,
                count: PropTypes.number,
                cost: PropTypes.number
            }))
        })
    }))
}

const mapDispatchToProps = {
    loadLoclization: loadLocalization
};

export default connect(null, mapDispatchToProps)(AccountHistory);
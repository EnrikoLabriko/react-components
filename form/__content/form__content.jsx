'use strict';

var React = require('react');
var cx = require('classnames');

var FormContent = React.createClass({
    propTypes: {
        children: React.PropTypes.node,
        mix: React.PropTypes.string
    },

    render: function () {
        return (
            <div className={cx('form__content', this.props.mix)}>
                <input hidden name="sk" readOnly value={global._IGLOBAL.sk} />
                {this.props.children}
            </div>
        );
    }
});

module.exports = FormContent;

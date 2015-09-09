'use strict';

var React = require('react');
var cx = require('classnames');

var FormControls = React.createClass({
    propTypes: {
        children: React.PropTypes.node,
        mix: React.PropTypes.string
    },

    render: function () {
        return (
            <div className={cx('form__controls', this.props.mix)}>
                {this.props.children}
            </div>
        );
    }
});

module.exports = FormControls;

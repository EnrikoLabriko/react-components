'use strict';

var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var b = require('b_');
var cx = require('classnames');

var Spin = React.createClass({
    propTypes: {
        mix: React.PropTypes.string,
        size: React.PropTypes.string,
        theme: React.PropTypes.string,
        hidden: React.PropTypes.bool
    },

    mixins: [PureRenderMixin],

    getDefaultProps: function () {
        return {
            size: 'm',
            theme: 'black',
            hidden: false
        };
    },

    render: function () {
        var className = b('spin', {
            size: this.props.size,
            theme: this.props.theme,
            hidden: this.props.hidden
        });

        return (
            <span
                className={cx(className, this.props.mix)}
                size={this.props.size}
                theme={this.props.theme}
                hidden={this.props.hidden}/>
        );
    }
});

module.exports = Spin;

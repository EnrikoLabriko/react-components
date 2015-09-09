'use strict';

var React = require('react');
var b = require('b_');
var Popup = require('common.components/popup/popup.jsx');
var Menu = require('common.components/menu/menu.jsx');

var Dropdown = React.createClass({

    propTypes: {
        arrowOffsetLeft: React.PropTypes.string,
        arrowOffsetTop: React.PropTypes.string,
        axis: React.PropTypes.string,
        children: React.PropTypes.node,
        direction: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        hasArrow: React.PropTypes.bool,
        autoclosable: React.PropTypes.bool,
        size: React.PropTypes.string,
        theme: React.PropTypes.string,
        width: React.PropTypes.string
    },

    getDefaultProps: function () {
        return {
            autoclosable: true,
            direction: 'bottom',
            axis: 'center',
            hasArrow: false,
            theme: 'normal',
            size: 'm'
        };
    },

    setOwner: function (parent) {
        this.refs.popup.setOwner(parent);
        return this;
    },

    hide: function () {
        this.refs.popup.hide();
    },

    show: function () {
        this.refs.popup.show();
    },

    toggle: function () {
        this.refs.popup.toggle();
    },

    render: function () {
        var dropdownClasses = b('dropdown', {
            theme: this.props.theme,
            size: this.props.size
        });

        return (
            <Popup
                mix={dropdownClasses}
                ref="popup"
                theme="clean"
                arrowOffsetLeft={this.props.arrowOffsetLeft}
                arrowOffsetTop={this.props.arrowOffsetTop}
                autoclosable={this.props.autoclosable}
                axis={this.props.axis}
                direction={this.props.direction}
                hasArrow={this.props.hasArrow}
                width={this.props.width}>
                    <Menu
                        theme="yellow"
                        disabled={this.props.disabled}
                        size={this.props.size}>
                            {this.props.children}
                    </Menu>
            </Popup>
        );
    }
});

module.exports = Dropdown;
module.exports.Item = Menu.Item;

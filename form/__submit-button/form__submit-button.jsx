'use strict';

var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var cx = require('classnames');
var Button = require('common.components/button/button.jsx');
var Spin = require('common.components/spin/spin.jsx');

var FormSubmitButton = React.createClass({
    propTypes: {
        children: React.PropTypes.string,
        mix: React.PropTypes.string,
        size: React.PropTypes.string,
        spinTheme: React.PropTypes.string,
        view: React.PropTypes.string
    },

    mixins: [PureRenderMixin],

    getDefaultProps: function () {
        return {
            size: 'm',
            view: 'action'
        };
    },

    getInitialState: function () {
        return {
            submitting: false
        };
    },

    showSpin: function () {
        this.setState({submitting: true});
    },

    hideSpin: function () {
        this.setState({submitting: false});
    },

    render: function () {
        return (
            <div className={cx('form__submit-button', this.props.mix)}>
                <Button
                    disabled={this.props.disabled}
                    hidden={this.state.submitting}
                    size={this.props.size}
                    theme={this.props.theme}
                    type="submit"
                    view={this.props.view}>
                        {this.props.children}
                </Button>
                {this.state.submitting &&
                    <Spin mix="form__spin" size={this.props.size} theme={this.props.spinTheme} />}
            </div>
        );
    }
});

module.exports = FormSubmitButton;

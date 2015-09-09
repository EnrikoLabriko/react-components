'use strict';

var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var b = require('b_');
var cx = require('classnames');

var Input = React.createClass({
    propTypes: {
        theme: React.PropTypes.string,
        view: React.PropTypes.string,
        size: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        hidden: React.PropTypes.bool,
        focused: React.PropTypes.bool,
        value: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        pattern: React.PropTypes.string,
        successMessage: React.PropTypes.string,
        errorMessage: React.PropTypes.string,
        name: React.PropTypes.string,
        mix: React.PropTypes.string,
        onBlur: React.PropTypes.func,
        onChange: React.PropTypes.func,
        onFocus: React.PropTypes.func,
        valid: React.PropTypes.string
    },

    mixins: [PureRenderMixin],

    getDefaultProps: function () {
        return {
            size: 'm',
            theme: 'normal',
            type: 'text',
            valid: 'uncertain',
            value: ''
        };
    },

    getInitialState: function () {
        return {
            focused: this.props.focused,
            hidden: this.props.hidden,
            filled: !!this.props.value,
            valid: this.props.valid,
            value: this.props.value,
            pattern: RegExp(this.props.pattern)
        };
    },

    componentDidMount: function () {
        if (this.state.focused) {
            this.focus();
        }

        var inputValue = React.findDOMNode(this.refs.textInput).value;
        if (inputValue !== this.state.value) {
            this.onChange({target: {value: inputValue}});
        }
    },

    componentWillReceiveProps: function (nextProps) {
        if (nextProps.value !== this.state.value) {
            this.setState({value: nextProps.value, filled: !!nextProps.value});
        }
        if (nextProps.valid !== this.state.valid) {
            this.setState({valid: nextProps.valid});
        }
    },

    onFocus: function (e) {
        this.setState({focused: true, valid: 'uncertain'});
        this.focus();

        if (this.props.onFocus) {
            this.props.onFocus(e);
        }
    },

    onBlur: function (e) {
        if (!this.state.pattern.test(this.state.value) && this.state.value) {
            this.setState({valid: 'no'});
        } else {
            this.setState({valid: 'uncertain'});
        }

        this.setState({filled: !!this.state.value, focused: false});

        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
    },

    focus: function () {
        React.findDOMNode(this.refs.textInput).focus();
    },

    clearInput: function () {
        this.setState({value: ''});
    },

    onChange: function (e) {
        this.setState({value: e.target.value});

        if (this.props.onChange) {
            this.props.onChange(e);
        }
    },

    render: function () {
        var className = b('input', {
            theme: this.props.theme,
            size: this.props.size,
            view: this.props.view,
            disabled: this.props.disabled,
            focused: this.state.focused,
            filled: this.state.filled,
            valid: this.state.valid,
            hidden: this.state.hidden
        });

        return (
            <span
                className={cx(className, this.props.mix)}>
                <span className="input__box">
                    <input
                        className="input__control"
                        autoComplete="off"
                        disabled={this.props.disabled}
                        name={this.props.name}
                        onBlur={this.onBlur}
                        onChange={this.onChange}
                        onFocus={this.onFocus}
                        placeholder=""
                        ref="textInput"
                        type={this.props.type}
                        value={this.state.value} />
                    {this.props.placeholder &&
                        <label className="input__placeholder">
                            {this.props.placeholder}
                        </label>
                    }
                </span>
                {this.state.valid !== 'uncertain' &&
                    <span className="input__notification">
                        {this.state.valid === 'yes' ? this.props.successMessage : this.props.errorMessage}
                    </span>
                }
            </span>
        );
    }
});

module.exports = Input;

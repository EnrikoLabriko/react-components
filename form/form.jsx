'use strict';

var React = require('react');
var cx = require('classnames');
var Content = require('./__content/form__content.jsx');
var Controls = require('./__controls/form__controls.jsx');
var SubmitButton = require('./__submit-button/form__submit-button.jsx');

var Form = React.createClass({
    propTypes: {
        mix: React.PropTypes.string,
        children: function (props, propName, componentName) {
            var countOfFormContent = 0;
            var error;

            React.Children.forEach(props[propName], function (el) {
                if (error) {
                    return;
                }

                if (el && el.type && el.type.displayName === 'FormContent') {
                    countOfFormContent += 1;
                }
            });

            if (countOfFormContent !== 1) {
                error = new Error(
                    '`' + componentName + '` ' +
                    'should have a single child of the following type: `FormContent`.'
                );
            }

            return error;
        }
    },

    render: function () {
        return (
            <form className={cx('form', this.props.mix)} {...this.props}>
                {this.props.children}
            </form>
        );
    }
});

module.exports = Form;
module.exports.Content = Content;
module.exports.Controls = Controls;
module.exports.SubmitButton = SubmitButton;

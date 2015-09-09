'use strict';

var React = require('react');
var Logo = require('common.components/logo/logo.jsx');
var User = require('common.components/user/user.jsx');

var Header = React.createClass({
    propTypes: {
        children: React.PropTypes.node,
        data: React.PropTypes.object,
        logoUrl: React.PropTypes.string,
        title: React.PropTypes.string
    },

    render: function () {

        return (
            <div className="header">
                <div className="header__cell header__logo">
                    <Logo url={this.props.logoUrl || this.props.data && this.props.data.staticUrls.home || '/'} />
                </div>
                {this.props.title && <div className="header__cell header__title">{this.props.title}</div>}
                <div className="header__cell header__content">
                    {this.props.children}
                </div>
                <div className="header__cell header__user">
                    <User />
                </div>
            </div>
        );
    }
});

module.exports = Header;

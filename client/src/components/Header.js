import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent() {
        console.log(this.props.auth)
        switch (this.props.auth) {
            case null || undefined:
                return
            case false:
                return (
                    <li><a href='/auth/google'>Login With Google</a></li>
                )
            default:
                return <li><a href='/api/logout'>Logout</a></li>
        }
    }
    render() {
        return (
            <nav>
                <div className='nav-wrapper'>
                    <Link 
                    className='left brand-logo' 
                    to={this.props.user ? "/surveys" : "/"}
                    >
                        Emaily
                    </Link>
                    <ul className='right'>
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}
function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps)(Header);
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  user: state.user.userObj
});

const Navbar = ({user}) => {
  return (
    <div>

    </div>
  );
};

export default connect(mapStateToProps)(Navbar);

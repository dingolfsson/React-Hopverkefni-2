import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../../actions/auth';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {
    const { isAuthenticated, name } = this.props;
    /* todo birta mismunandi upplýsingar ef innskráður notandi eða ekki */
    console.info(name);

    if (isAuthenticated) {
      return (
        <div>
          <h2 className="page__title">Velkomin á bókasafnið</h2>
          <p>Þú ert skráður notandi og getur því <Link to="/books/new">skráð bækur</Link> og breytt <Link to="/books">þeim sem til eru</Link>.</p>
          <p>Einnig getur þú skoðað <Link to="/users">aðra notendur</Link>.</p>
        </div>
      );
    }
    return (
      <div>
        <h2 className="page__title">Velkomin á bókasafnið</h2>
        <p>Til að njóta bókasafnsins til fullsnustu mælum við með að <Link to="/login">skrá sig inn</Link>. Þangað til getur þú skoðað <Link to="/books">allar bækurnar</Link></p>
      </div>
    );
  }
}

/* todo setja upp tengingu við redux til að vita stöðu notanda */
// export default Home;
const mapStateToProps = (state) => {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    message: state.auth.message,
    name: state.auth.user ? state.auth.user.name : '',
  }
}
export default connect(mapStateToProps)(Home);
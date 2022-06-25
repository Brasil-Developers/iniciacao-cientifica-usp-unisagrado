import { connect } from 'react-redux';

// Screen
import Home from 'Screens/home';

// ACTIOSN
import { getDataHome } from 'Actions';

const mapStateToProps = (store) => ({
  dataHome: store.home.dataHome,
});

const mapDispatchToProps = (dispatch) => ({
    getDataHome: (vlr) => dispatch(getDataHome(vlr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);


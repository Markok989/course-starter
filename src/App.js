import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveDrawer,
  ResponsiveAppBar,
  BodyContainer,
  toggleDrawerOpen,
  toggleDrawerDock,
  setResponsive
} from './components/index';
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Toggle from 'material-ui/Toggle'
import { connect } from 'react-redux'
import FontIcon from 'material-ui/FontIcon'
import SvgIcon from 'material-ui/SvgIcon'
import IconButton from 'material-ui/IconButton'

const styles = {
  drawer_container: {
    backgroundColor: 'grey',
    height: '100%'
  },
  drawer_header: {
    margin: '0px',
    paddingBottom: '10px'
  },
  drawer_header_container: {
    padding: '10px'
  },
  body_header: {
    margin: '0px',
    padding: '10px'
  },
  responsive_toggler: {
    width: 250,
    paddingTop: 15
  }
}

class App extends Component {
  render() {
    const {
      toggleDrawerOpen,
      browser,
      responsiveDrawer,
      toggleDrawerDock,
      setResponsive
    } = this.props

    return (

      <div>
        <div>
          <ResponsiveDrawer openSecondary={false}>
            <div style={styles.drawer_container}>
              <div style={styles.drawer_header_container}>
                <h1 style={styles.drawer_header}>Drawer</h1>
                <RaisedButton
                  label={responsiveDrawer.open ? 'Close drawer' : 'Open drawer'}
                  primary
                  onClick={toggleDrawerOpen}
                />
              </div>
            </div>
          </ResponsiveDrawer>
          <BodyContainer openSecondary={false}>
            <ResponsiveAppBar
              title={'Responsive Material-UI Drawer'}
              iconElementRight={
                <Toggle
                label={responsiveDrawer.responsive ? 'Disable responsive' : 'Enable responsive'}
                labelPosition='right'
                style={styles.responsive_toggler}
                toggled={responsiveDrawer.responsive}
                onToggle={() => { setResponsive(!responsiveDrawer.responsive) }}
              />
              }
            />
            <h1>test</h1>
            <div style={{ margin: '10px' }}>
              <h1 style={styles.body_header}>Body</h1>
            
            </div>
          </BodyContainer>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  toggleDrawerOpen: PropTypes.func.isRequired,
  toggleDrawerDock: PropTypes.func.isRequired,
  setResponsive: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const { browser, responsiveDrawer } = state
  return {
    browser,
    responsiveDrawer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawerOpen: () => {
      dispatch(toggleDrawerOpen())
    },
    toggleDrawerDock: () => {
      dispatch(toggleDrawerDock())
    },
    setResponsive: (isResponsive) => {
      dispatch(setResponsive(isResponsive))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

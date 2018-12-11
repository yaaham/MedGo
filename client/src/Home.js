import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    container: {
        marginTop: '20vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row'
    }
};
class Home extends Component {
    render() {
        const { children, classes } = this.props;
        return (
            <div>
                <NavBar Title="MedGo" />
                <div className={classes.container}>
                    <div className={classes.buttons}>
                        <Button component={Link} to="/postmessage">
                            Post New Message
                        </Button>
                        <Button component={Link} to="/viewmessages">
                            Check Messages
                        </Button>
                    </div>
                    {children}
                </div>
            </div>
        );
    }
}
Home.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);

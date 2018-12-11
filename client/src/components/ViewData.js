import React, { Component } from 'react';
import Helper from '../helper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
    container: { marginTop: '5vh' },
    card: {
        minWidth: 275,
        margin: '5%'
    },
    text: { textAlign: 'center' }
};
class ViewData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
        this.helper = new Helper();
    }
    componentDidMount() {
        this.helper
            .GetData('form')
            .then(res => {
                this.setState({ messages: res });
            })
    }

    renderMessages() {
        const { classes } = this.props;

        return this.state.messages.map(message => {
            console.log(message);
            return (
                <div key={message._id} className="messages">
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Username : {message.name}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                Message : {message.message}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            );
        });
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <Typography
                    className={classes.text}
                    variant="h6"
                    component="h2"
                >
                    Guest Messages
                </Typography>
                <div className="guestdataContainer">
                    {this.renderMessages()}
                </div>
            </div>
        );
    }
}
ViewData.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ViewData);

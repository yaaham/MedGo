import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helper from '../helper';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Clock from 'react-live-clock';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '5vh'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    field: {
        display: 'flex',
        alignItems: 'center'
    },
    dense: {
        marginTop: 16
    },
    menu: {
        width: 200
    }
});

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message: '',
            time:'',
            errorText: '',
            nameError: false,
            messageError: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.helper = new Helper(); 
    }
    handleMessageChange(event) {
        if (event.target.value.length > 0) {
            this.setState({
                message: event.target.value,
                errorText: '',
                messageError: false
            });
        } else {
            this.setState({
                message: event.target.value,
                errorText: 'Empty Field Not Allowed',
                messageError: true
            });
        }
    }
    handleNameChange(event) {
        if (event.target.value.length > 0) {
            this.setState({
                name: event.target.value,
                errorText: '',
                nameError: false
            });
        } else {
            this.setState({
                name: event.target.value,
                errorText: 'Empty Field Not Allowed',
                nameError: true
            });
        }
    }
    handleSubmit(e) {
        //prevent page form refreshing
        e.preventDefault();
        //call ajax to send state to DB
        console.log('submitting');
        if (this.state.name === '' || this.state.message === '') {
            this.setState({
                errorText: 'Empty Field Not Allowed',
                nameError: true,
                messageError: true
            });
        } else {
            let data = {
                name: this.state.name,
                message: this.state.message,
                time : Clock
            };
            JSON.stringify(data);
           this.helper.postData(data,'form');
            this.setState({
                name: '',
                message: ''
            });
        }
    }
    render() {
        const { classes } = this.props;
        
        return (
            <div>
                <form
                    className={classes.container}
                    noValidate
                    autoComplete="off"
                    onSubmit={this.handleSubmit}
                >
                    <div className={classes.field}>
                        <TextField
                            error={this.state.nameError}
                            id="Email"
                            label="Email"
                            className={classes.textField}
                            value={this.state.name}
                            onChange={this.handleNameChange}
                            margin="normal"
                            variant="outlined"
                            helperText={this.state.errorText}
                        />
                    </div>
                    <div className={classes.field}>
                        <TextField
                            error={this.state.messageError}
                            id="Message"
                            label="Message"
                            multiline
                            rows="4"
                            className={classes.textField}
                            value={this.state.message}
                            onChange={this.handleMessageChange}
                            margin="normal"
                            variant="outlined"
                            helperText={this.state.errorText}
                        />
                    </div>
                    <Button
                        variant="contained"
                        type="submit"
                        className={classes.button}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        );
    }
}
Form.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);

import React from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from "react-redux"
import { loginFacebookAsync } from '../../redux/actions/actionLogin';
// import { Link } from 'react-router-dom';

const Form = () => {

    const dispatch = useDispatch()

    const loginFacebook = () => {
        dispatch( loginFacebookAsync() )
    }

    return (
        <div>
            <div className="card-body">
                <form>
                    <h1>Login</h1>
                    <hr />
                    <div className="orm-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Email</label>
                        <div className="mb-4 mb-lg-0">
                            <input
                                type="email"
                                name="user"
                                className="form-control"
                                placeholder="Tu nombre"
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="form-group row mt-3">
                        <label className="col-sm-4 col-lg-2 col-form-label">Password</label>
                        <div className="form-group col-sm-8 col-lg-4">
                            <input
                                type="password"
                                name="pass"
                                className="form-control"
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Logout
                    </button>
                    <Container className="auth__social-networks">
                <Container
                    className="google-btn"
                >
                    <Container className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </Container>
                
                </Container>
                <Container
                    className="google-btn"
                >
                    <Container className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </Container>
                
                </Container>
            </Container>
                </form>

                <button onClick={loginFacebook}>Inicio con facebook</button>
            </div>
        </div>
    );
};

export default Form;
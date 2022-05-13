import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from "react-redux";
import { registerUsr } from '../../redux/actions/actionLogin';

const FormRegister = () => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            nombre: "",
            email: "",
            contrasenia: "",
            contrasenia2: ""
        },
        onSubmit: ( data ) => {
            dispatch( registerUsr( data ) )
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required(),
            email: Yup.string().email().required(),
            contrasenia: Yup.string().required().oneOf([Yup.ref('contrasenia2')], 'Los password no coinciden'),
            contrasenia2: Yup.string().required().oneOf([Yup.ref('contrasenia')], 'Los password no coinciden')
        })
    });

    return (
        <div>
        <Form onSubmit={formik.handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="nombre"
                        onChange={formik.handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email"
                        name="email"
                        onChange={formik.handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="contrasenia"
                        onChange={formik.handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                    <Form.Label>Repita contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="contrasenia2"
                        onChange={formik.handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registrarse
                </Button>
            </Form>
        </div>
    );
};

export default FormRegister;
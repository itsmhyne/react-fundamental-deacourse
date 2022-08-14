import React from "react";
import { Spinner } from "react-bootstrap";
const Loader = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <div className="d-flex">
                <Spinner animation="grow" variant="secondary" size="sm" />
                <Spinner animation="grow" variant="success" size="sm" />
                <Spinner animation="grow" variant="dark" size="sm" />
            </div>
        </div>
    )
}

export default Loader;
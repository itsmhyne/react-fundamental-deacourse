import React from "react";
import { Container } from "react-bootstrap";
import Collections from "./collection.albums";

const Albums = (props) => {

    return (
        <React.Fragment>
            <Container className="mt-2">
                <h3>{props.title}</h3>
                <i>{props.description}</i>
                <Collections />
            </Container>
        </React.Fragment>
    )
}

export default Albums;
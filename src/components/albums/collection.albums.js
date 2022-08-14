import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Carousel, Container } from "react-bootstrap";
import { Button, ButtonGroup } from "react-bootstrap";
import Loader from "../Utilites/loaders";

const Collections = () => {


    const [datas, setDatas] = useState([]);
    const [limit, setLimit] = useState(3);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isCancel = false
        if (isCancel === false) {
            setLoading(true)
            Axios({
                method: "GET",
                url: `${process.env.REACT_APP_BASE_URL}/photos?_limit=${limit}`
            }).then((result) => setDatas(result.data)).catch((err) => console.log(err)).finally(() => setLoading(false))
        }
        // cleanup render
        return () => { isCancel = true }
    }, [limit])

    const handleLimit = (options) => {
        options === "+" ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1);
    }

    if (loading) return <Loader />

    return (
        <React.Fragment>
            {/* carousel start */}
            <h3>{limit} Collections</h3>
            <Carousel>
                {datas.map((data, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={data.url}
                                alt="First slide"
                                height={400}
                            />
                            <Carousel.Caption>
                                <h3>Album ke {data.id}</h3>
                                <p>{data.title}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
            {/* carousel end */}
            <ButtonGroup className="mt-4 d-flex justify-content-center align-items-center">
                {limit > 1 &&
                    <Button variant="outline-danger" onClick={() => handleLimit("-")}>-</Button>
                }
                <Button variant="outline-primary" onClick={() => handleLimit("+")}>+</Button>
            </ButtonGroup>
        </React.Fragment>
    )
}

export default Collections;
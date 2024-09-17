import React from "react";
import { Container,Row,Button } from "react-bootstrap";
export default function Formapp(){
    return(
        <>
            <Container className="bg-secondary p-5">
                <Row>
                    <div className="col-sm-2 p-5 m-1 bg-info">box 1</div>
                    <div className="col-sm-2 p-5 m-1 bg-info">box 2</div>
                    <div className="col-sm-2 p-5 m-1 bg-info">box 3</div>
                    <div className="col-sm-2 p-5 m-1 bg-info">box 4</div>
                    <div className="col-sm-2 p-5 m-1 bg-info">box 5</div>
                    <Button className="btn btn-white col-sm-1 m-4 ">add</Button>
                </Row>
            </Container>
        </>
    )
} 
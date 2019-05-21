import React, { Component } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";

export default class Onboarding extends Component {
  render() {
    return (
      <Form>
        <Form.Group as={Row} controlId="owner">
          <Form.Label column sm={2}>
            Owner
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="SARS" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="collection">
          <Form.Label column sm={2}>
            Collection
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Known Fraudsters" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="location">
          <Form.Label column sm={2}>
            S3 Bucket
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="s3://sars/known-fraudsters"
            />
          </Col>
        </Form.Group>

        <Alert variant="secondary">
          <pre>
            {`
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Action": "s3:GetObject",
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::rekog-input/*",
      "Principal": "*"
    }
  ]
}`}
          </pre>
        </Alert>

        <Button
          variant="outline-success"
          type="submit"
          size="lg"
          className="float-right"
        >
          Create
        </Button>
      </Form>
    );
  }
}

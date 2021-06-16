import React from "react";
import { Card, Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Helpers_Prateleiras from "../../Helpers/Prateleiras";

const Book = ({ id, title, status, linkImg, alterarStatusDoLivro }) => {
    const aoAlterarStatusDoLivro = (status) => {
        alterarStatusDoLivro(id, status);
    };

    return (
        <div className="m-2">
            <Card style={{ width: "12rem" }} className="livro" key={id}>
                {/* <Card className="livro" key={id}> */}
                <Card.Img variant="top" src={linkImg} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <DropdownButton
                        id="dropdown-alterar-status-livro-button"
                        title=""
                        onSelect={aoAlterarStatusDoLivro}
                    >
                        <Dropdown.Item
                            eventKey={Helpers_Prateleiras.STATUS_READ}
                            active={status === Helpers_Prateleiras.STATUS_READ}
                        >
                            Finalizado
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey={
                                Helpers_Prateleiras.STATUS_CURRENTLYREADING
                            }
                            active={
                                status ===
                                Helpers_Prateleiras.STATUS_CURRENTLYREADING
                            }
                        >
                            Lendo
                        </Dropdown.Item>
                        <Dropdown.Item
                            eventKey={Helpers_Prateleiras.STATUS_WANTOREAD}
                            active={
                                status === Helpers_Prateleiras.STATUS_WANTOREAD
                            }
                        >
                            Quero ler
                        </Dropdown.Item>
                    </DropdownButton>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Book;

import React, { useEffect, useState } from "react";
import Helpers_Prateleiras from "../../Helpers/Prateleiras";
import { Livro } from "./Livro";

export const Prateleiras = () => {
    const alterarStatusDoLivro = (id, status) => {

        // chamar a api para atualizar o livra
        Helpers_Prateleiras.alterarStatusDoLivro(id, status);
        const livrosOrganizadosEmPrateleiras = Helpers_Prateleiras.organizarLivrosEmPrateleiras(Helpers_Prateleiras.LIVROS_MOCK);
        setPrateleiras(livrosOrganizadosEmPrateleiras);
    };
    
    const [prateleiras, setPrateleiras] = useState([]);
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        let meusLivros = Helpers_Prateleiras.LIVROS_MOCK;

        const livrosEmPrateleiras = Helpers_Prateleiras.organizarLivrosEmPrateleiras(meusLivros);
        setPrateleiras(livrosEmPrateleiras);
    }, []);

    return (
        <section>
            {prateleiras.map((prateleira) => {
                return (
                    <section key={prateleira.nome}>
                        <div className="row" text-align="right">
                            {prateleira.nome}
                        </div>
                        <div className="row estante">
                            {prateleira.livros.map(
                                ({ id, title, descricao, status }) => {
                                    return (
                                        <Livro
                                            id={id}
                                            title={title}
                                            descricao={descricao}
                                            alterarStatusDoLivro={alterarStatusDoLivro}
                                            key={id}
                                            status={status}

                                        />
                                    );
                                }
                            )}
                        </div>
                    </section>
                );
            })}
        </section>
    );
};

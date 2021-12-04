/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import produtos from '../../data/produtos'

export default props => {

    function getProdutosListItem() {
        return produtos.map(prod => {
            // <li key= -> Serve para React identificar mudanças, pode ser usado ID.
            return <li key={prod.id}>{prod.id} - {prod.nome} - R$ {prod.preco}
                </li>
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}
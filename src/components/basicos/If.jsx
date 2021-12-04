/* eslint-disable import/no-anonymous-default-export */
// Não precisa importar React, pois não está sendo usado código jsx.
export default function (props) {
    if(props.teste){
        // props.children -> Retorna tudo o que foi passado como filho de "If".
        return props.children
    } else {
        return false
    }
}
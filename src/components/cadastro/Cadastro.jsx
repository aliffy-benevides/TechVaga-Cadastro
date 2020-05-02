import React from 'react'
import './Cadastro.css'

const { REACT_APP_API_BASE_URL: apiBaseUrl } = process.env

export default props => {
    return (
        <div className="cadastro">
            <form name="cadastro">
                <div className="form-group">
                    <label htmlFor="vagas_atualizadas">Quantidade de Vagas</label>
                    <input type="number" name="vacancies" className="form-control" id="vagas_atualizadas" min={0} />
                </div>
                {/* <input name="vacancies" id="vagas_atualizadas" /> */}
                <button id="atualizar_vagas" type="submit" className="btn btn-info">
                    Atualizar
                </button>
            </form>
        </div>
    )
}

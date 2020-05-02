import React, { useEffect, useState } from 'react'
import './Dashboard.css'

import axios from 'axios'

const { REACT_APP_API_BASE_URL: apiBaseUrl } = process.env

export default props => {
    const [avaiableVacancies, setAvaiableVacancies] = useState(20)

    useEffect(() => {
        axios.get(`${apiBaseUrl}/vacancies`)
            .then(resp => {
                setAvaiableVacancies(resp.data.availableVacancies)
            })
    }, [])

    return (
        <div className="dashboard">
            <h2 className="dashboard-title">Vagas Disponíveis</h2>
            <p id="total_de_vagas" className="mt-3">
                {avaiableVacancies}
            </p>
        </div>
    )
}

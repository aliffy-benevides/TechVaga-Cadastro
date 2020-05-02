import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import axios from 'axios'

import Dashboard from './Dashboard'

const { REACT_APP_API_BASE_URL: apiBaseUrl } = process.env
jest.mock('axios')

let container = null
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div")
    document.body.appendChild(container)
})

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container)
    container.remove()
    container = null
})

it("get and displays available vacancies", async () => {
    const url = `${apiBaseUrl}/vacancies`
    axios.get.mockResolvedValueOnce({
        data: { availableVacancies: 500, totalVacancies: 800 }
    })
    
    await act(async () => {
        render(<Dashboard />, container)
    })
    expect(axios.get).toHaveBeenCalledWith(url)
    expect(container.getElementsByClassName("dashboard-title")[0].textContent).toBe("Vagas Disponíveis")
    expect(container.querySelector("#total_de_vagas").textContent).toBe("500")
})

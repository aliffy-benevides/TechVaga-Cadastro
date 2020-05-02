import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import axios from 'axios'

import Cadastro from './Cadastro'

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

it("update total vacancies", async () => {
    const url = `${apiBaseUrl}/vacancies`
    const totalVacancies = 200
    axios.post.mockImplementationOnce(() => {
        return Promise.resolve("OK")
    })
    
    await act(async () => {
        render(<Cadastro />, container)
    })

    const input = container.querySelector("[name='vacancies']")
    const button = container.querySelector("#atualizar_vagas")
    expect(input).toMatchSnapshot()
    expect(button).toMatchSnapshot()
})

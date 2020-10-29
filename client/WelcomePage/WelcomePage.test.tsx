import React from "react"
import { render, RenderResult } from "@testing-library/react"
import WelcomePage, { principles } from "./WelcomePage"
import userEvent from "@testing-library/user-event"
import Router from "next/router"

jest.mock("next/router")

describe("WelcomePage", () => {
  let queries: RenderResult
  let getByText

  beforeEach(() => {
    queries = render(<WelcomePage />)
    getByText = queries.getByText
  })

  it("should show the principle names and descriptions", () => {
    principles.forEach((principle) => {
      const principleNameElement = getByText(principle.name)
      const principleDescriptionElement = getByText(principle.description)

      expect(principleNameElement).toBeInTheDocument()
      expect(principleDescriptionElement).toBeInTheDocument()
    })
  })

  describe("Login button", () => {
    let loginButtonElement

    beforeEach(() => {
      loginButtonElement = getByText("Inicia sesión")
    })
    afterEach(() => {
      loginButtonElement = undefined
    })

    it("should render a log in button", () => {
      expect(loginButtonElement).toBeInTheDocument()
    })
    it("redirects to the login page when clicking it", () => {
      const routerSpy = jest.spyOn(Router, "push")

      userEvent.click(loginButtonElement)

      expect(routerSpy).toHaveBeenCalledWith("/login")
    })
  })

  describe("Signup button", () => {
    let signupButtonElement

    beforeEach(() => {
      signupButtonElement = getByText("Regístrate")
    })
    afterEach(() => {
      signupButtonElement = undefined
    })

    it("should render a signup button", () => {
      expect(signupButtonElement).toBeInTheDocument()
    })
    it("should redirect to the signup page", () => {
      const routerSpy = jest.spyOn(Router, "push")

      userEvent.click(signupButtonElement)

      expect(routerSpy).toHaveBeenCalledWith("/register")
    })
  })
})

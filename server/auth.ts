import { pendingLogoutCookieName } from "appShared/appData"
import Cookies from "js-cookie"
import { ExtendedRequest } from "./types"

export const logIn = (req: ExtendedRequest, email: string) => {
  req.session.email = email
}

export const logout = (req: ExtendedRequest) => {
  req.session.destroy(() => {
    // If destroy is not successful probably the session is already gone,
    // so we do not care about the result
  })
  if (req.cookies[pendingLogoutCookieName] == "1") {
    Cookies.remove(pendingLogoutCookieName)
  }
}

export const isLoggedIn = (req: ExtendedRequest): boolean => !!req.session.email

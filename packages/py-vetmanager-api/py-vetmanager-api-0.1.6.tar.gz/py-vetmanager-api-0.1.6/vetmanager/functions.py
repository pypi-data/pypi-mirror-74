from vetmanager.url import Url, UrlFromGateway, \
    HostGatewayUrl, BillingApiUrl, Domain
from .token import Token, Credentials
from .token import Login, Password, AppName


def url(domain: str) -> Url:
    return UrlFromGateway(
        HostGatewayUrl(
            BillingApiUrl("https://billing-api.vetmanager.cloud/"),
            Domain(domain)
        )
    )


def token_credentials(login: str, password: str, app_name: str) -> Credentials:
    return Credentials(
        Login(login),
        Password(password),
        AppName(app_name)
    )


def token(clinic_url: Url, credentials: Credentials) -> Token:
    return Token(
        clinic_url,
        credentials
    )

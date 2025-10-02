import reflex as rx
from ..backend.state import State, User
from ..components.card import card
from ..components.navbar import navbar

def explore():
    return rx.vstack(
        navbar(),
        rx.text("Explore Page")
    )

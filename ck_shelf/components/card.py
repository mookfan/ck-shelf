import reflex as rx

def card(user) -> rx.Component:
    return rx.card(
        "User Info",
        rx.text(f"Name: {user.name}"),
        variant="classic",
        size="3"
    )
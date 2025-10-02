import reflex as rx
from ..backend.state import State, User
from ..components.card import card
from ..components.navbar import navbar


def show_user(user: User):
    """Show a user in a table row."""
    return rx.table.row(
        rx.table.cell(user.name),
        rx.table.cell(user.email),
        rx.table.cell(user.gender),
        style={"_hover": {"bg": rx.color("gray", 3)}},
        align="center",
    )


def add_customer_button() -> rx.Component:
    return rx.dialog.root(
        rx.dialog.trigger(
            rx.button(
                rx.icon("plus", size=26),
                rx.text("Add User", size="4"),
            ),
        ),
        rx.dialog.content(
            rx.dialog.title(
                "Add New User",
            ),
            rx.dialog.description(
                "Fill the form with the user's info",
            ),
            rx.form(
                rx.flex(
                    rx.input(
                        placeholder="User Name",
                        name="name",
                        required=True,
                    ),
                    rx.input(
                        placeholder="user@reflex.dev",
                        name="email",
                    ),
                    rx.select(
                        ["Male", "Female"],
                        placeholder="male",
                        name="gender",
                    ),
                    rx.flex(
                        rx.dialog.close(
                            rx.button(
                                "Cancel",
                                variant="soft",
                                color_scheme="gray",
                            ),
                        ),
                        rx.dialog.close(
                            rx.button(
                                "Submit", type="submit"
                            ),
                        ),
                        spacing="3",
                        justify="end",
                    ),
                    direction="column",
                    spacing="4",
                ),
                on_submit=State.add_user,
                reset_on_submit=False,
            ),
            max_width="450px",
        ),
    )


def graph():
    return rx.recharts.bar_chart(
        rx.recharts.bar(
            data_key="value",
            stroke=rx.color("accent", 9),
            fill=rx.color("accent", 8),
        ),
        rx.recharts.x_axis(data_key="name"),
        rx.recharts.y_axis(),
        data=State.users_for_graph,
        width="100%",
        height=250,
    )


def cards() -> rx.Component:
    return rx.hstack(
        rx.foreach(State.users, card),
        spacing="4",
        wrap="wrap",
        justify="center",
        width="100%",
    )


@rx.page(route="/", title="My Index App")
def index() -> rx.Component:
    return rx.vstack(
        navbar(),
        add_customer_button(),
        rx.table.root(
            rx.table.header(
                rx.table.row(
                    rx.table.column_header_cell("Name"),
                    rx.table.column_header_cell("Email"),
                    rx.table.column_header_cell("Gender"),
                ),
            ),
            rx.table.body(
                rx.foreach(State.users, show_user),
            ),
            variant="surface",
            size="3",
            width="100%",
        ),
        graph(),
        cards(),
        align="center",
        width="100%",
    )

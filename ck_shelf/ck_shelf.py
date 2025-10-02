import reflex as rx
from .pages.index import index
from .pages.explore import explore
from .backend.state import State

app = rx.App(
    theme=rx.theme(radius="full", accent_color="grass"),
)

app.add_page(
    index,
    on_load=State.transform_data,
)
app.add_page(
    explore,
)
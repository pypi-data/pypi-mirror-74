from typing import List

import cli_ui as ui
from path import Path

import tsrc
import tsrc.executor


class FileSystemOperator(tsrc.executor.Task[tsrc.FileSystemOperation]):
    def __init__(self, workspace_path: Path, repos: List[tsrc.Repo]) -> None:
        self.workspace_path = workspace_path
        self.repos = repos

    def on_start(self, *, num_items: int) -> None:
        ui.info_2("Performing filesytem operations")

    def on_failure(self, *, num_errors: int) -> None:
        ui.error("Failed to perform the following operations:")

    def display_item(self, item: tsrc.FileSystemOperation) -> str:
        return str(item)

    def process(self, index: int, count: int, item: tsrc.FileSystemOperation) -> None:
        ui.info_count(index, count, item)
        try:
            item.perform(self.workspace_path)
        except OSError as e:
            raise tsrc.Error(str(e))

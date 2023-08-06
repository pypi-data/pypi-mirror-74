import sys

import pandas as pd
from PyQt5 import QtWidgets

from pandasgui.utility import get_logger
from pandasgui.widgets.dataframe_viewer import DataFrameViewer
from pandasgui.widgets.grapher import Grapher

logger = get_logger(__name__)


class DataFrameExplorer(QtWidgets.QTabWidget):
    def __init__(self, df, editable=True):

        super().__init__()

        self.df = df
        self.editable = editable

        # DataFrame tab
        self.dataframe_tab = DataFrameViewer(self.df, editable=self.editable)
        self.addTab(self.dataframe_tab, "DataFrame")

        # Statistics tab
        self.statistics_tab = self.make_statistics_tab(df)
        self.addTab(self.statistics_tab, "Statistics")

        # Grapher tab
        graph_maker = Grapher(df)
        self.addTab(graph_maker, "Grapher")

    def make_statistics_tab(self, df):
        stats_df = pd.DataFrame(
            {
                "Type": df.dtypes.replace("object", "string"),
                "Count": df.count(),
                "Mean": df.mean(numeric_only=True),
                "StdDev": df.std(numeric_only=True),
                "Min": df.min(numeric_only=True),
                "Max": df.max(numeric_only=True),
            }
        )
        w = DataFrameViewer(stats_df, editable=self.editable)
        w.setAutoFillBackground(True)
        return w


if __name__ == "__main__":
    app = QtWidgets.QApplication(sys.argv)

    from pandasgui.datasets import iris, flights, multi, pokemon

    # Create and show widget
    dfe = DataFrameExplorer(flights)
    dfe.show()

    sys.exit(app.exec_())

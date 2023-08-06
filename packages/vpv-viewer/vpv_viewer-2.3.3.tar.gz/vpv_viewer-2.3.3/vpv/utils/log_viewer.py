from PyQt5.QtWidgets import QScrollArea, QWidget, QVBoxLayout, QLabel


class Window(QScrollArea):
    def __init__(self):
        super(Window, self).__init__()
        widget = QWidget()
        layout = QVBoxLayout(widget)
        # layout.setAlignment(Qt.AlignTop)
        for index in range(100):
            layout.addWidget(QLabel('Label %02d' % index))
        self.setWidget(widget)
        self.setWidgetResizable(True)
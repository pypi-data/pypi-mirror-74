import random
import numpy as np
import networkx as nx


class Sampler(object):
    """Sampler base class with constructor and public methods."""

    def __init__(self):
        """Creatinng a sampler."""
        pass

    def sample(self):
        """Sample from a model."""
        pass

    def _set_seed(self):
        """Creating the initial random seed."""
        random.seed(self.seed)
        np.random.seed(self.seed)

    def _check_networkx_graph(self, graph):
        """Chechking the input type."""
        assert isinstance(graph, nx.classes.graph.Graph), "This is not a NetworkX graph."

    def _check_connectivity(self, graph):
        """Checking the connected nature of a single graph."""
        connected = nx.is_connected(graph)
        assert connected, "Graph is not connected."

    def _check_directedness(self, graph):
        """Checking the undirected nature of a single graph."""
        directed = nx.is_directed(graph)
        assert directed == False, "Graph is directed."

    def _check_indexing(self, graph):
        """Checking the consecutive numeric indexing."""
        numeric_indices = [index for index in range(graph.number_of_nodes())]
        node_indices = sorted([node for node in graph.nodes()])
        assert numeric_indices == node_indices, "The node indexing is wrong."

    def _check_graph(self, graph: nx.classes.graph.Graph):
        """Check the Little Ball of Fur assumptions about the graph."""
        self._check_networkx_graph(graph)
        self._check_connectivity(graph)
        self._check_directedness(graph)
        self._check_indexing(graph)

    def _check_number_of_nodes(self, graph):
        """Checking the size of the graph - nodes."""
        if self.number_of_nodes > graph.number_of_nodes():
            raise ValueError("The number of nodes is too large. Please see requirements.")

    def _check_number_of_edges(self, graph):
        """Checking the size of the graph -- edges."""
        if self.number_of_edges > graph.number_of_edges():
            raise ValueError("The number of edges is too large. Please see requirements.")  

import random
import numpy as np
import networkx as nx
from littleballoffur.sampler import Sampler

class CommonNeighborAwareRandomWalkSampler(Sampler):
    r"""An implementation of node sampling by common neighbor aware random walks.
    The random walker is biased to visit neighbors that have a lower number of
    common neighbors. This way the sampling procedure is able to escape tightly
    knit communities and visit new ones. `"For details about the algorithm see this paper." <https://ieeexplore.ieee.org/document/8731555>`_

    Args:
        number_of_nodes (int): Number of nodes. Default is 100.
        seed (int): Random seed. Default is 42.
    """
    def __init__(self, number_of_nodes: int=100, seed: int=42):
        self.number_of_nodes = number_of_nodes
        self.seed = seed
        self._set_seed()

    def _create_initial_node_set(self):
        """
        Choosing an initial node.
        """
        self._current_node = random.choice(range(self._graph.number_of_nodes()))
        self._sampled_nodes = set([self._current_node])

    def _create_sampler(self):
        """
        Assigning edge weights.
        """
        self._sampler = {}
        for node in self._graph.nodes():
            neighbors = [neighbor for neighbor in self._graph.neighbors(node)]
            neighbors = set(neighbors)
            scores = []
            for neighbor in neighbors:
                fringe = set([neb for neb in self._graph.neighbors(neighbor)])
                overlap = len(neighbors.intersection(fringe))
                scores.append(1.0-(overlap)/min(self._graph.degree(node), self._graph.degree(neighbor)))
            scores = np.array(scores)
            self._sampler[node] = {}
            self._sampler[node]["neighbors"] = list(neighbors)
            self._sampler[node]["scores"] = scores/np.sum(scores)
        

    def _do_a_step(self):
        """
        Doing a single random walk step.
        """
        self._current_node = sample = np.random.choice(self._sampler[self._current_node]["neighbors"],
                                                       1,
                                                       replace=False,
                                                       p=self._sampler[self._current_node]["scores"])[0]
        self._sampled_nodes.add(self._current_node)

    def sample(self, graph: nx.classes.graph.Graph) -> nx.classes.graph.Graph:
        """
        Sampling nodes with a single common neighbor aware random walk.

        Arg types:
            * **graph** *(NetworkX graph)* - The graph to be sampled from.

        Return types:
            * **new_graph** *(NetworkX graph)* - The graph of sampled nodes.
        """
        self._check_graph(graph)
        self._check_number_of_nodes(graph)
        self._graph = graph
        self._create_initial_node_set()
        self._create_sampler()
        while len(self._sampled_nodes) < self.number_of_nodes:
            self._do_a_step()
        new_graph = self._graph.subgraph(self._sampled_nodes)
        return new_graph

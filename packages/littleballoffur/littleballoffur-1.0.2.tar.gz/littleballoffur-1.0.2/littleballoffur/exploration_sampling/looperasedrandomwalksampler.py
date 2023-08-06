import random
import networkx as nx
from littleballoffur.sampler import Sampler

class LoopErasedRandomWalkSampler(Sampler):
    r"""An implementation of node sampling by loop-erased random walks. The random 
    walkers samples a fixed number of nodes. Only edges that connect so far unconnected
    nodes are added to the edge set (cycles are erased). The resulting graph is always
    an undirected tree. `"For details about the algorithm see this paper." <https://link.springer.com/chapter/10.1007/978-1-4612-2168-5_12>`_

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
        self._sampled_edges = set()


    def _do_a_step(self):
        """
        Doing a single random walk step.
        """
        neighbors = self._graph.neighbors(self._current_node)
        new_node = random.choice([neighbor for neighbor in neighbors])
        if new_node not in self._sampled_nodes:
            self._sampled_edges.add((self._current_node, new_node))
            self._sampled_nodes.add(new_node)
        self._current_node = new_node


    def sample(self, graph: nx.classes.graph.Graph):
        """
        Sampling nodes with a single loop-erased random walk.

        Arg types:
            * **graph** *(NetworkX graph)* - The graph to be sampled from.

        Return types:
            * **new_graph** *(NetworkX graph)* - The graph of sampled nodes.
        """
        self._check_graph(graph)
        self._check_number_of_nodes(graph)
        self._graph = graph
        self._create_initial_node_set()
        while len(self._sampled_nodes) < self.number_of_nodes:
            self._do_a_step()
        new_graph = nx.from_edgelist([edge for edge in self._sampled_edges])
        return new_graph

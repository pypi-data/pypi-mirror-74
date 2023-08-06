import random
import networkx as nx
from littleballoffur.sampler import Sampler

class MetropolisHastingsRandomWalkSampler(Sampler):
    r"""An implementation of node sampling by Metropolis Hastings random walks. 
    The random walker has a probabilistic acceptance condition for adding new nodes 
    to the sampled node set. This constraint can be parametrized by the rejection
    constraint exponent. The sampled graph is always connected.  `"For details about the algorithm see this paper." <http://mlcb.is.tuebingen.mpg.de/Veroeffentlichungen/papers/HueBorKriGha08.pdf>`_

    Args:
        number_of_nodes (int): Number of nodes. Default is 100.
        seed (int): Random seed. Default is 42.
        alpha (float): Rejection constraint exponent. Default is 1.0.
    """
    def __init__(self, number_of_nodes: int=100, seed: int=42, alpha: float=1.0):
        self.number_of_nodes = number_of_nodes
        self.seed = seed
        self.alpha = alpha
        self._set_seed()

    def _create_initial_node_set(self):
        """
        Choosing an initial node.
        """
        self._current_node = random.choice(range(self._graph.number_of_nodes()))
        self._sampled_nodes = set([self._current_node])

    def _do_a_step(self):
        """
        Doing a single random walk step.
        """
        score = random.uniform(0, 1)
        neighbors = self._graph.neighbors(self._current_node)
        new_node = random.choice([neighbor for neighbor in neighbors])
        ratio = float(self._graph.degree(self._current_node))/float(self._graph.degree(new_node))
        ratio = ratio ** self.alpha
        if score < ratio:
            self._current_node = new_node
            self._sampled_nodes.add(self._current_node)

    def sample(self, graph: nx.classes.graph.Graph):
        """
        Sampling nodes with a Metropolis Hastings single random walk.

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
        new_graph = self._graph.subgraph(self._sampled_nodes)
        return new_graph

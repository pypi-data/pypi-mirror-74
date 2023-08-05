// Licensed under the Apache License, Version 2.0 (the "License"); you may
// not use this file except in compliance with the License. You may obtain
// a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations
// under the License.

use std::ops::{Index, IndexMut};

use hashbrown::HashMap;

use pyo3::class::PyMappingProtocol;
use pyo3::exceptions::IndexError;
use pyo3::prelude::*;
use pyo3::types::{PyDict, PyList, PyLong, PyTuple};
use pyo3::Python;

use super::NoEdgeBetweenNodes;
use petgraph::graph::{EdgeIndex, NodeIndex};
use petgraph::prelude::*;
use petgraph::stable_graph::StableUnGraph;
use petgraph::visit::{
    GetAdjacencyMatrix, GraphBase, GraphProp, IntoEdgeReferences, IntoEdges,
    IntoNeighbors, IntoNeighborsDirected, IntoNodeIdentifiers,
    IntoNodeReferences, NodeCompactIndexable, NodeCount, NodeIndexable,
    Visitable,
};

/// A class for creating undirected graphs.
///
/// The PyGraph class is constructed using the Rust library
/// `petgraph <https://github.com/petgraph/petgraph>`__ around the
/// ``StableGraph`` type. The limitations and quirks with this library and
/// type dictate how this operates. The biggest thing to be aware of when using
/// The PyGraph class is that an integer node and edge index is used for
/// Accessing elements on the graph, it doesn't support associative access via
/// The data/weight of nodes and edges.
#[pyclass(module = "retworkx")]
#[text_signature = "()"]
pub struct PyGraph {
    pub graph: StableUnGraph<PyObject, PyObject>,
    pub node_removed: bool,
}

pub type Edges<'a, E> =
    petgraph::stable_graph::Edges<'a, E, petgraph::Undirected>;

impl GraphBase for PyGraph {
    type NodeId = NodeIndex;
    type EdgeId = EdgeIndex;
}

impl NodeCount for PyGraph {
    fn node_count(&self) -> usize {
        self.graph.node_count()
    }
}

impl GraphProp for PyGraph {
    type EdgeType = petgraph::Undirected;
    fn is_directed(&self) -> bool {
        false
    }
}

impl petgraph::visit::Visitable for PyGraph {
    type Map = <StableUnGraph<PyObject, PyObject> as Visitable>::Map;
    fn visit_map(&self) -> Self::Map {
        self.graph.visit_map()
    }
    fn reset_map(&self, map: &mut Self::Map) {
        self.graph.reset_map(map)
    }
}

impl petgraph::visit::Data for PyGraph {
    type NodeWeight = PyObject;
    type EdgeWeight = PyObject;
}

impl petgraph::data::DataMap for PyGraph {
    fn node_weight(&self, id: Self::NodeId) -> Option<&Self::NodeWeight> {
        self.graph.node_weight(id)
    }
    fn edge_weight(&self, id: Self::EdgeId) -> Option<&Self::EdgeWeight> {
        self.graph.edge_weight(id)
    }
}

impl petgraph::data::DataMapMut for PyGraph {
    fn node_weight_mut(
        &mut self,
        id: Self::NodeId,
    ) -> Option<&mut Self::NodeWeight> {
        self.graph.node_weight_mut(id)
    }
    fn edge_weight_mut(
        &mut self,
        id: Self::EdgeId,
    ) -> Option<&mut Self::EdgeWeight> {
        self.graph.edge_weight_mut(id)
    }
}

impl<'a> IntoNeighbors for &'a PyGraph {
    type Neighbors = petgraph::stable_graph::Neighbors<'a, PyObject>;
    fn neighbors(self, n: NodeIndex) -> Self::Neighbors {
        self.graph.neighbors(n)
    }
}

impl<'a> IntoNeighborsDirected for &'a PyGraph {
    type NeighborsDirected = petgraph::stable_graph::Neighbors<'a, PyObject>;
    fn neighbors_directed(
        self,
        n: NodeIndex,
        d: petgraph::Direction,
    ) -> Self::Neighbors {
        self.graph.neighbors_directed(n, d)
    }
}

impl<'a> IntoEdgeReferences for &'a PyGraph {
    type EdgeRef = petgraph::stable_graph::EdgeReference<'a, PyObject>;
    type EdgeReferences = petgraph::stable_graph::EdgeReferences<'a, PyObject>;
    fn edge_references(self) -> Self::EdgeReferences {
        self.graph.edge_references()
    }
}

impl<'a> IntoEdges for &'a PyGraph {
    type Edges = Edges<'a, PyObject>;
    fn edges(self, a: Self::NodeId) -> Self::Edges {
        self.graph.edges(a)
    }
}

impl<'a> IntoNodeIdentifiers for &'a PyGraph {
    type NodeIdentifiers = petgraph::stable_graph::NodeIndices<'a, PyObject>;
    fn node_identifiers(self) -> Self::NodeIdentifiers {
        self.graph.node_identifiers()
    }
}

impl<'a> IntoNodeReferences for &'a PyGraph {
    type NodeRef = (NodeIndex, &'a PyObject);
    type NodeReferences = petgraph::stable_graph::NodeReferences<'a, PyObject>;
    fn node_references(self) -> Self::NodeReferences {
        self.graph.node_references()
    }
}

impl NodeIndexable for PyGraph {
    fn node_bound(&self) -> usize {
        self.graph.node_bound()
    }
    fn to_index(&self, ix: NodeIndex) -> usize {
        self.graph.to_index(ix)
    }
    fn from_index(&self, ix: usize) -> Self::NodeId {
        self.graph.from_index(ix)
    }
}

impl NodeCompactIndexable for PyGraph {}

impl Index<NodeIndex> for PyGraph {
    type Output = PyObject;
    fn index(&self, index: NodeIndex) -> &PyObject {
        &self.graph[index]
    }
}

impl IndexMut<NodeIndex> for PyGraph {
    fn index_mut(&mut self, index: NodeIndex) -> &mut PyObject {
        &mut self.graph[index]
    }
}

impl Index<EdgeIndex> for PyGraph {
    type Output = PyObject;
    fn index(&self, index: EdgeIndex) -> &PyObject {
        &self.graph[index]
    }
}

impl IndexMut<EdgeIndex> for PyGraph {
    fn index_mut(&mut self, index: EdgeIndex) -> &mut PyObject {
        &mut self.graph[index]
    }
}

impl GetAdjacencyMatrix for PyGraph {
    type AdjMatrix =
        <StableUnGraph<PyObject, PyObject> as GetAdjacencyMatrix>::AdjMatrix;
    fn adjacency_matrix(&self) -> Self::AdjMatrix {
        self.graph.adjacency_matrix()
    }
    fn is_adjacent(
        &self,
        matrix: &Self::AdjMatrix,
        a: NodeIndex,
        b: NodeIndex,
    ) -> bool {
        self.graph.is_adjacent(matrix, a, b)
    }
}

#[pymethods]
impl PyGraph {
    #[new]
    fn new() -> Self {
        PyGraph {
            graph: StableUnGraph::<PyObject, PyObject>::default(),
            node_removed: false,
        }
    }

    fn __getstate__(&self, py: Python) -> PyResult<PyObject> {
        let out_dict = PyDict::new(py);
        let node_dict = PyDict::new(py);
        let mut out_list: Vec<PyObject> = Vec::new();
        out_dict.set_item("nodes", node_dict)?;
        for node_index in self.graph.node_indices() {
            let node_data = self.graph.node_weight(node_index).unwrap();
            node_dict.set_item(node_index.index(), node_data)?;
        }
        for edge in self.graph.edge_indices() {
            let edge_w = self.graph.edge_weight(edge);
            let endpoints = self.graph.edge_endpoints(edge).unwrap();

            let triplet = (endpoints.0.index(), endpoints.1.index(), edge_w)
                .to_object(py);
            out_list.push(triplet);
        }
        let py_out_list: PyObject = PyList::new(py, out_list).into();
        out_dict.set_item("edges", py_out_list)?;
        Ok(out_dict.into())
    }

    fn __setstate__(&mut self, py: Python, state: PyObject) -> PyResult<()> {
        self.graph = StableUnGraph::<PyObject, PyObject>::default();
        let dict_state = state.cast_as::<PyDict>(py)?;
        let nodes_dict =
            dict_state.get_item("nodes").unwrap().downcast::<PyDict>()?;
        let edges_list =
            dict_state.get_item("edges").unwrap().downcast::<PyList>()?;
        let mut index_count = 0;
        for raw_index in nodes_dict.keys().iter() {
            let tmp_index = raw_index.downcast::<PyLong>()?;
            let index: usize = tmp_index.extract()?;
            let mut tmp_nodes: Vec<NodeIndex> = Vec::new();
            if index > index_count + 1 {
                let diff = index - (index_count + 1);
                for _ in 0..diff {
                    let tmp_node = self.graph.add_node(py.None());
                    tmp_nodes.push(tmp_node);
                }
            }
            let raw_data = nodes_dict.get_item(index).unwrap();
            let out_index = self.graph.add_node(raw_data.into());
            for tmp_node in tmp_nodes {
                self.graph.remove_node(tmp_node);
            }
            index_count = out_index.index();
        }

        for raw_edge in edges_list.iter() {
            let edge = raw_edge.downcast::<PyTuple>()?;
            let raw_p_index = edge.get_item(0).downcast::<PyLong>()?;
            let parent: usize = raw_p_index.extract()?;
            let p_index = NodeIndex::new(parent);
            let raw_c_index = edge.get_item(1).downcast::<PyLong>()?;
            let child: usize = raw_c_index.extract()?;
            let c_index = NodeIndex::new(child);
            let edge_data = edge.get_item(2);

            self.graph.add_edge(p_index, c_index, edge_data.into());
        }
        Ok(())
    }

    /// Return a list of all edge data.
    ///
    /// :returns: A list of all the edge data objects in the graph
    /// :rtype: list
    #[text_signature = "()"]
    pub fn edges(&self) -> Vec<&PyObject> {
        self.graph
            .edge_indices()
            .map(|edge| self.graph.edge_weight(edge).unwrap())
            .collect()
    }

    /// Return a list of all node data.
    ///
    /// :returns: A list of all the node data objects in the graph
    /// :rtype: list
    #[text_signature = "()"]
    pub fn nodes(&self) -> Vec<&PyObject> {
        self.graph
            .node_indices()
            .map(|node| self.graph.node_weight(node).unwrap())
            .collect()
    }

    /// Return a list of all node indexes.
    ///
    /// :returns: A list of all the node indexes in the graph
    /// :rtype: list
    #[text_signature = "()"]
    pub fn node_indexes(&self) -> Vec<usize> {
        self.graph.node_indices().map(|node| node.index()).collect()
    }

    /// Return True if there is an edge between node_a to node_b.
    ///
    /// :param int node_a: The node index to check for an edge between
    /// :param int node_b: The node index to check for an edge between
    ///
    /// :returns: True if there is an edge false if there is no edge
    /// :rtype: bool
    #[text_signature = "(node_a, node_b, /)"]
    pub fn has_edge(&self, node_a: usize, node_b: usize) -> bool {
        let index_a = NodeIndex::new(node_a);
        let index_b = NodeIndex::new(node_b);
        self.graph.find_edge(index_a, index_b).is_some()
    }

    ///  Return the edge data for the edge between 2 nodes.
    ///
    ///  Note if there are multiple edges between the nodes only one will be
    ///  returned. To get all edge data objects use
    ///  :meth:`~retworkx.PyGraph.get_all_edge_data`
    ///
    /// :param int node_a: The index for the first node
    /// :param int node_b: The index for the second node
    ///
    /// :returns: The data object set for the edge
    /// :raises NoEdgeBetweenNodes: when there is no edge between the provided
    ///     nodes
    #[text_signature = "(node_a, node_b, /)"]
    pub fn get_edge_data(
        &self,
        node_a: usize,
        node_b: usize,
    ) -> PyResult<&PyObject> {
        let index_a = NodeIndex::new(node_a);
        let index_b = NodeIndex::new(node_b);
        let edge_index = match self.graph.find_edge(index_a, index_b) {
            Some(edge_index) => edge_index,
            None => {
                return Err(NoEdgeBetweenNodes::py_err(
                    "No edge found between nodes",
                ))
            }
        };

        let data = self.graph.edge_weight(edge_index).unwrap();
        Ok(data)
    }

    /// Return the node data for a given node index
    ///
    /// :param int node: The index for the node
    ///
    /// :returns: The data object set for that node
    /// :raises IndexError: when an invalid node index is provided
    #[text_signature = "(node, /)"]
    pub fn get_node_data(&self, node: usize) -> PyResult<&PyObject> {
        let index = NodeIndex::new(node);
        let node = match self.graph.node_weight(index) {
            Some(node) => node,
            None => return Err(IndexError::py_err("No node found for index")),
        };
        Ok(node)
    }

    /// Return the edge data for all the edges between 2 nodes.
    ///
    /// :param int node_a: The index for the first node
    /// :param int node_b: The index for the second node
    ///
    /// :returns: A list with all the data objects for the edges between nodes
    /// :rtype: list
    /// :raises NoEdgeBetweenNodes: When there is no edge between nodes
    #[text_signature = "(node_a, node_b, /)"]
    pub fn get_all_edge_data(
        &self,
        node_a: usize,
        node_b: usize,
    ) -> PyResult<Vec<&PyObject>> {
        let index_a = NodeIndex::new(node_a);
        let index_b = NodeIndex::new(node_b);
        let out: Vec<&PyObject> = self
            .graph
            .edges(index_a)
            .filter(|edge| edge.target() == index_b)
            .map(|edge| edge.weight())
            .collect();
        if out.is_empty() {
            Err(NoEdgeBetweenNodes::py_err("No edge found between nodes"))
        } else {
            Ok(out)
        }
    }

    /// Remove a node from the graph.
    ///
    /// :param int node: The index of the node to remove. If the index is not
    ///     present in the graph it will be ignored and this function will
    ///     have no effect.
    #[text_signature = "(node, /)"]
    pub fn remove_node(&mut self, node: usize) -> PyResult<()> {
        let index = NodeIndex::new(node);
        self.graph.remove_node(index);
        self.node_removed = true;
        Ok(())
    }

    /// Add an edge between 2 nodes.
    ///
    /// :param int parent: Index of the parent node
    /// :param int child: Index of the child node
    /// :param edge: The object to set as the data for the edge. It can be any
    ///     python object.
    /// :param int parent: Index of the parent node
    /// :param int child: Index of the child node
    /// :param edge: The object to set as the data for the edge. It can be any
    ///     python object.
    #[text_signature = "(node_a, node_b, edge, /)"]
    pub fn add_edge(
        &mut self,
        node_a: usize,
        node_b: usize,
        edge: PyObject,
    ) -> PyResult<usize> {
        let p_index = NodeIndex::new(node_a);
        let c_index = NodeIndex::new(node_b);
        let edge = self.graph.add_edge(p_index, c_index, edge);
        Ok(edge.index())
    }

    /// Add new edges to the graph.
    ///
    /// :param list obj_list: A list of tuples of the form
    ///     ``(node_a, node_b, obj)`` to attach to the graph. ``node_a`` and
    ///     ``node_b`` are integer indexes describing where an edge should be
    ///     added, and ``obj`` is the python object for the edge data.
    ///
    /// :returns: A list of int indices of the newly created edges
    /// :rtype: list
    #[text_signature = "(obj_list, /)"]
    pub fn add_edges_from(
        &mut self,
        obj_list: Vec<(usize, usize, PyObject)>,
    ) -> PyResult<Vec<usize>> {
        let mut out_list: Vec<usize> = Vec::new();
        for obj in obj_list {
            let p_index = NodeIndex::new(obj.0);
            let c_index = NodeIndex::new(obj.1);
            let edge = self.graph.add_edge(p_index, c_index, obj.2);
            out_list.push(edge.index());
        }
        Ok(out_list)
    }

    /// Add new edges to the graph without python data.
    ///
    /// :param list obj_list: A list of tuples of the form
    ///     ``(parent, child)`` to attach to the graph. ``parent`` and
    ///     ``child`` are integer indexes describing where an edge should be
    ///     added. Unlike :meth:`add_edges_from` there is no data payload and
    ///     when the edge is created None will be used.
    ///
    /// :returns: A list of int indices of the newly created edges
    /// :rtype: list
    #[text_signature = "(obj_list, /)"]
    pub fn add_edges_from_no_data(
        &mut self,
        py: Python,
        obj_list: Vec<(usize, usize)>,
    ) -> PyResult<Vec<usize>> {
        let mut out_list: Vec<usize> = Vec::new();
        for obj in obj_list {
            let p_index = NodeIndex::new(obj.0);
            let c_index = NodeIndex::new(obj.1);
            let edge = self.graph.add_edge(p_index, c_index, py.None());
            out_list.push(edge.index());
        }
        Ok(out_list)
    }

    /// Remove an edge between 2 nodes.
    ///
    /// Note if there are multiple edges between the specified nodes only one
    /// will be removed.
    ///
    /// :param int parent: The index for the parent node.
    /// :param int child: The index of the child node.
    ///
    /// :raises NoEdgeBetweenNodes: If there are no edges between the nodes
    ///     specified
    #[text_signature = "(node_a, node_b, /)"]
    pub fn remove_edge(
        &mut self,
        node_a: usize,
        node_b: usize,
    ) -> PyResult<()> {
        let p_index = NodeIndex::new(node_a);
        let c_index = NodeIndex::new(node_b);
        let edge_index = match self.graph.find_edge(p_index, c_index) {
            Some(edge_index) => edge_index,
            None => {
                return Err(NoEdgeBetweenNodes::py_err(
                    "No edge found between nodes",
                ))
            }
        };
        self.graph.remove_edge(edge_index);
        Ok(())
    }

    /// Remove an edge identified by the provided index
    ///
    /// :param int edge: The index of the edge to remove
    #[text_signature = "(edge, /)"]
    pub fn remove_edge_from_index(&mut self, edge: usize) -> PyResult<()> {
        let edge_index = EdgeIndex::new(edge);
        self.graph.remove_edge(edge_index);
        Ok(())
    }

    /// Add a new node to the graph.
    ///
    /// :param obj: The python object to attach to the node
    ///
    /// :returns: The index of the newly created node
    /// :rtype: int
    #[text_signature = "(obj, /)"]
    pub fn add_node(&mut self, obj: PyObject) -> PyResult<usize> {
        let index = self.graph.add_node(obj);
        Ok(index.index())
    }

    /// Add new nodes to the graph.
    ///
    /// :param list obj_list: A list of python object to attach to the graph.
    ///
    /// :returns indices: A list of int indices of the newly created nodes
    /// :rtype: list
    #[text_signature = "(obj_list, /)"]
    pub fn add_nodes_from(&mut self, obj_list: Vec<PyObject>) -> Vec<usize> {
        let mut out_list: Vec<usize> = Vec::new();
        for obj in obj_list {
            let node_index = self.graph.add_node(obj);
            out_list.push(node_index.index());
        }
        out_list
    }

    /// Remove nodes from the graph.
    ///
    /// If a node index in the list is not present in the graph it will be
    /// ignored.
    ///
    /// :param list index_list: A list of node indicies to remove from the
    ///     the graph
    #[text_signature = "(index_list, /)"]
    pub fn remove_nodes_from(
        &mut self,
        index_list: Vec<usize>,
    ) -> PyResult<()> {
        for node in index_list.iter().map(|x| NodeIndex::new(*x)) {
            self.graph.remove_node(node);
        }
        Ok(())
    }

    /// Get the index and data for the neighbors of a node.
    ///
    /// This will return a dictionary where the keys are the node indexes of
    /// the adjacent nodes (inbound or outbound) and the value is the edge data
    /// objects between that adjacent node and the provided node. Note, that
    /// in the case of multigraphs only a single edge data object will be
    /// returned
    ///
    /// :param int node: The index of the node to get the neighbors
    ///
    /// :returns neighbors: A dictionary where the keys are node indexes and
    ///     the value is the edge data object for all nodes that share an
    ///     edge with the specified node.
    /// :rtype: dict
    #[text_signature = "(node, /)"]
    pub fn adj(&mut self, py: Python, node: usize) -> PyResult<PyObject> {
        let index = NodeIndex::new(node);
        let neighbors = self.graph.neighbors(index);
        let mut out_map: HashMap<usize, &PyObject> = HashMap::new();

        for neighbor in neighbors {
            let edge = self.graph.find_edge(index, neighbor);
            let edge_w = self.graph.edge_weight(edge.unwrap());
            out_map.insert(neighbor.index(), edge_w.unwrap());
        }
        let out_dict = PyDict::new(py);
        for (index, value) in out_map {
            out_dict.set_item(index, value)?;
        }
        Ok(out_dict.into())
    }

    /// Get the degree for a node
    ///
    /// :param int node: The index of the  node to find the inbound degree of
    ///
    /// :returns degree: The inbound degree for the specified node
    /// :rtype: int
    #[text_signature = "(node, /)"]
    pub fn degree(&self, node: usize) -> usize {
        let index = NodeIndex::new(node);
        let neighbors = self.graph.edges(index);
        neighbors.count()
    }
}

#[pyproto]
impl PyMappingProtocol for PyGraph {
    /// Return the nmber of nodes in the graph
    fn __len__(&self) -> PyResult<usize> {
        Ok(self.graph.node_count())
    }
}

---
layout: post
title:  "Checking for graphs cycles"
date:   2014-11-11 03:29:15
categories: programming
---

When writing software most of the time you have to save or even read data from some place. In some cases you need to deal with relationship between two pieces of data. That can be dealt with saving the information on a tree or on a graph. In a work I did before, I had to check if my graph had cycles, because it would break my program for sure. So how can we do the check?  
<!-- more -->  
On a tree we could do a depth first search, marking nodes as we iterate over them and verifying if it was already visited. But on a graph it is a little different because a node can appear again if its descendants were already visited.  

![Graph][graph]  

On the previous image we can see an example of a graph. The node 4 is visited first by the order 1-2-4 and after by the order 1-3-4. If we used the normal DFS in this situation, it would encounter a cycle. We know that there isn't a cycle because when visiting the node 4 for the second time all its descendants were visited (it has no descendants). That's not the case with the graph below.  
  
![Graph with cycle][graph_cycle]  
__Observation:__ The color red is used to identify the node 4 as parent of the node 1.  

We can use a modified DFS algorithm to properly detect cycles, named colored DFS.  

1.   All the nodes are initially marked as white  
2.   If a node is visited, it is marked as grey  
3.   If a node has all its descendants visited, it is marked as black
4.   If a grey node is found, the graph as a cycle  
  
The example code will be written in C++. It's simple and easy to understand.  

{% highlight c++ %}
// Function to check the existence of a cycle
bool hasCycle(Graph * graph){
	for(unsigned int i = 0; i < graph->nodes.size(); i++){
		graph->nodes.at(i).color = "white";
	}
	for(unsigned int i = 0; i < graph->nodes.size(); i++){
		if(graph->nodes.at(i).color == "white"){
			if(visit(&graph->nodes.at(i))){
				return true;
			}
		}
	}
	return false;
};

// Function that will visit a node
bool Graph::visit(Node * node){
	node->color = "grey";
	for(unsigned int i = 0; i < node->descendants.size(); i++){
		if(node->descendants.at(i).color == "grey"){
			return true;
		}
		else if(node->descendants.at(i).color == "white"){
			if(visit(&node->descendants.at(i))){
				return true;
			}
		}

	}
	node->color = "black";
	return false;
};
{% endhighlight %}  

Any doubts you can use the comments. See you next time.  

[graph]: /assets/graph.jpg "Graph without a cycle"
[graph_cycle]: /assets/graph_cycle.jpg "Graph containing a cycle"
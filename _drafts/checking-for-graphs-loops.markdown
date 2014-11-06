---
layout: post
title:  "Checking for graphs loops"
categories: programming
---

Suppose you're writting a software that reads some data and saves it in form of a graph. Each node of the graph can have none to a certain number of childs nodes. We will also suppose that you need to iterate over the graph in your software. If the graph has a loop, your software will iterate over the loop non stop. In that situation it will be benefical to have a mechanism to tell you the existance of the loop.
<!-- more -->

![Graph with a loop][img]

{% highlight c++ %}
class Node {
	string id;
	/* 
	 * More data that you need here.
	 * The id is a string to have a more "visual" response
	 * And to identify better the nodes,
	 * It can be other type if you want
	 */
};

class Graph {
	node * root; // Starting point
	int checkGraph(); // Function that will check for loops
	vector<Node> nodes; // Your nodes container
	vector<pair<string,string>> edges; // Your edges container
	                                   // should have the same type as the id of the Node class
};
{% endhighlight %}

[img]: /assets/graph_loop.jpg
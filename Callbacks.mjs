function runFunctionOnXPathResults(xpathExp, func) {
	let x = document.evaluate(xpathExp, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);

	let thisNode = x.iterateNext();
	while (thisNode) {
		func(thisNode);
		thisNode = x.iterateNext();
	}
}

export { runFunctionOnXPathResults };
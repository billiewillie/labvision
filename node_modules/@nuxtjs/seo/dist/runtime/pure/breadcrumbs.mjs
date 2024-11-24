import { hasTrailingSlash, parseURL, stringifyParsedURL, withTrailingSlash } from "ufo";
export function pathBreadcrumbSegments(path, rootNode = "/") {
  const startNode = parseURL(path);
  const appendsTrailingSlash = hasTrailingSlash(startNode.pathname);
  const stepNode = (node, nodes = []) => {
    const fullPath = stringifyParsedURL(node);
    const currentPathName = node.pathname || "/";
    nodes.push(fullPath || "/");
    if (currentPathName !== rootNode && currentPathName !== "/") {
      node.pathname = currentPathName.substring(0, currentPathName.lastIndexOf("/"));
      if (appendsTrailingSlash)
        node.pathname = withTrailingSlash(node.pathname.substring(0, node.pathname.lastIndexOf("/")));
      stepNode(node, nodes);
    }
    return nodes;
  };
  return stepNode(startNode).reverse();
}

<?php

$html = file_get_contents("http://pokemondb.net/evolution/");
$DOM = new DOMDocument();
@$DOM->loadHTML($html);
$finder = new DomXPath($DOM);
$classname = 'ent-name';
$nodes = $finder->query("//*[contains(@class, '$classname')]");
$data = array();
foreach ($nodes as $node) {
  array_push($data, $node->nodeValue);
}

echo json_encode($data);

?>
